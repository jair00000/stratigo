# Supabase Vault Encryption Guide for CMS API Keys

## 🔒 Overview

This guide explains how to securely store and retrieve `cms_api_key` values using Supabase Vault, the recommended approach for sensitive data.

---

## 🎯 Why Use Supabase Vault?

1. **Security**: Keys are encrypted at rest and in transit
2. **Access Control**: Only service role can access secrets
3. **Audit Trail**: All access is logged
4. **Best Practice**: Recommended by Supabase for sensitive data

---

## 📋 Option 1: Supabase Vault (Recommended)

### Step 1: Store Secret in Vault

Using Supabase CLI:

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Store the CMS API key as a secret
supabase secrets set CMS_API_KEY_ACME="your-actual-api-key-here"
```

Or via Supabase Dashboard:
1. Go to **Project Settings** → **Vault** (if available)
2. Add a new secret with key: `CMS_API_KEY_ACME`
3. Value: `your-actual-api-key-here`

### Step 2: Store Reference ID in Database

Instead of storing the actual key, store a reference:

```sql
-- Update company with vault reference
UPDATE public.companies
SET cms_api_key = 'vault:CMS_API_KEY_ACME' -- Reference to vault secret
WHERE id = 'YOUR_COMPANY_UUID_HERE';
```

### Step 3: Retrieve Secret in Application

**Server-side only** (never expose service role key to client):

```javascript
// server/utils/supabase-admin.js
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Service role key only
);

// Function to get CMS API key from vault
export async function getCMSApiKey(companyId) {
  // Get vault reference from database
  const { data: company } = await supabaseAdmin
    .from('companies')
    .select('cms_url, cms_api_key')
    .eq('id', companyId)
    .single();

  if (!company || !company.cms_api_key?.startsWith('vault:')) {
    throw new Error('CMS API key not found or invalid');
  }

  // Extract vault secret name
  const vaultSecretName = company.cms_api_key.replace('vault:', '');
  
  // Retrieve from vault (using service role)
  // Note: Supabase Vault access requires service role
  const secret = process.env[vaultSecretName];
  
  if (!secret) {
    throw new Error(`Vault secret ${vaultSecretName} not found`);
  }

  return secret;
}
```

---

## 📋 Option 2: Database-Level Encryption (pgcrypto)

If you prefer to store encrypted keys directly in the database:

### Step 1: Set Encryption Password

Store in environment variable (never commit to git):

```bash
# .env (server-side only)
ENCRYPTION_PASSWORD=your-strong-encryption-password-here
```

### Step 2: Encrypt and Store

```sql
-- Encrypt the CMS API key before storing
UPDATE public.companies
SET cms_api_key = encode(
    pgp_sym_encrypt(
        'your-actual-api-key-here',
        'your-encryption-password-from-env'
    ),
    'base64'
)
WHERE id = 'YOUR_COMPANY_UUID_HERE';
```

### Step 3: Decrypt in Application

```javascript
// server/utils/supabase-admin.js
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function getCMSApiKey(companyId) {
  // Get encrypted key from database
  const { data: company } = await supabaseAdmin
    .from('companies')
    .select('cms_api_key')
    .eq('id', companyId)
    .single();

  if (!company || !company.cms_api_key) {
    throw new Error('CMS API key not found');
  }

  // Decrypt using pgcrypto
  const { data, error } = await supabaseAdmin.rpc('decrypt_cms_key', {
    encrypted_key: company.cms_api_key,
    encryption_password: process.env.ENCRYPTION_PASSWORD
  });

  if (error) throw error;

  return data;
}
```

**Create decrypt function in Supabase:**

```sql
-- Function to decrypt CMS API key
CREATE OR REPLACE FUNCTION public.decrypt_cms_key(
    encrypted_key TEXT,
    encryption_password TEXT
)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN pgp_sym_decrypt(
        decode(encrypted_key, 'base64'),
        encryption_password
    );
END;
$$;

-- Grant execute to service role only
GRANT EXECUTE ON FUNCTION public.decrypt_cms_key(TEXT, TEXT) TO service_role;
REVOKE EXECUTE ON FUNCTION public.decrypt_cms_key(TEXT, TEXT) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.decrypt_cms_key(TEXT, TEXT) FROM anon;
```

---

## 📋 Option 3: Application-Level Encryption (Simplest)

Store keys encrypted in environment variables and only store a reference in the database:

### Step 1: Store Keys in Environment Variables

```bash
# .env (server-side only)
CMS_API_KEY_ACME=your-actual-api-key-here
CMS_API_KEY_TECHSTART=another-key-here
```

### Step 2: Store Reference in Database

```sql
-- Store reference only
UPDATE public.companies
SET cms_api_key = 'env:CMS_API_KEY_ACME' -- Reference to env var
WHERE id = 'YOUR_COMPANY_UUID_HERE';
```

### Step 3: Retrieve in Application

```javascript
// server/utils/supabase-admin.js
export async function getCMSApiKey(companyId) {
  const { data: company } = await supabaseAdmin
    .from('companies')
    .select('cms_api_key')
    .eq('id', companyId)
    .single();

  if (!company || !company.cms_api_key?.startsWith('env:')) {
    throw new Error('CMS API key not found');
  }

  const envVarName = company.cms_api_key.replace('env:', '');
  const apiKey = process.env[envVarName];

  if (!apiKey) {
    throw new Error(`Environment variable ${envVarName} not found`);
  }

  return apiKey;
}
```

---

## 🔐 RLS Policy Update for Encrypted Keys

Update the RLS policy to ensure `cms_api_key` is never exposed to clients:

```sql
-- Drop existing policy
DROP POLICY IF EXISTS "Clients can view own company" ON public.companies;

-- Create new policy that excludes cms_api_key for clients
CREATE POLICY "Clients can view own company (no sensitive data)"
    ON public.companies
    FOR SELECT
    TO authenticated
    USING (
        id = public.get_user_company_id(auth.uid())
        AND id IS NOT NULL
    );

-- Create a view that excludes cms_api_key for client access
CREATE OR REPLACE VIEW public.company_public AS
SELECT
    id,
    name,
    domain,
    cms_url,
    -- cms_api_key is excluded
    hosting_plan,
    owner_id,
    active,
    created_at,
    updated_at
FROM public.companies;

-- Grant access to authenticated users
GRANT SELECT ON public.company_public TO authenticated;
```

---

## ✅ Best Practices

### 1. Never Expose Keys in API Responses

```javascript
// ❌ BAD - Exposes cms_api_key
const { data } = await supabase
  .from('companies')
  .select('*')
  .eq('id', companyId)
  .single();

// ✅ GOOD - Excludes cms_api_key
const { data } = await supabase
  .from('companies')
  .select('id, name, domain, cms_url, hosting_plan, active')
  .eq('id', companyId)
  .single();

// ✅ BETTER - Use view
const { data } = await supabase
  .from('company_public')
  .select('*')
  .eq('id', companyId)
  .single();
```

### 2. Use Service Role Only for Key Access

```javascript
// ✅ Server-side only
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Never expose to client
);
```

### 3. Audit Key Access

```sql
-- Log every time a CMS API key is accessed
CREATE OR REPLACE FUNCTION public.log_cms_key_access(
    company_id_param UUID,
    user_id_param UUID
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    INSERT INTO public.audit_logs (
        user_id,
        action,
        resource_type,
        resource_id,
        metadata
    )
    VALUES (
        user_id_param,
        'cms_api_key.accessed',
        'companies',
        company_id_param,
        jsonb_build_object(
            'timestamp', now(),
            'ip_address', inet_client_addr()
        )
    );
END;
$$;
```

### 4. Rotate Keys Regularly

- Set up a quarterly key rotation schedule
- Update keys in Vault/environment variables
- Update database references if needed
- Notify affected clients if required

---

## 🧪 Testing

### Test Key Retrieval (Server-side only)

```javascript
// test/cms-key.test.js
import { getCMSApiKey } from '../server/utils/supabase-admin.js';

describe('CMS API Key Retrieval', () => {
  it('should retrieve encrypted key for company', async () => {
    const companyId = 'YOUR_COMPANY_UUID_HERE';
    const apiKey = await getCMSApiKey(companyId);
    
    expect(apiKey).toBeDefined();
    expect(apiKey).not.toContain('vault:');
    expect(apiKey).not.toContain('env:');
  });

  it('should throw error for invalid company', async () => {
    await expect(
      getCMSApiKey('invalid-uuid')
    ).rejects.toThrow('CMS API key not found');
  });
});
```

---

## 📚 Additional Resources

- [Supabase Vault Documentation](https://supabase.com/docs/guides/database/vault)
- [Supabase Service Role Key](https://supabase.com/docs/guides/auth/service-role-key)
- [PostgreSQL pgcrypto Documentation](https://www.postgresql.org/docs/current/pgcrypto.html)

---

## 🆘 Troubleshooting

### Issue: "Vault secret not found"

**Solution:** Ensure the secret is set in Supabase Vault and the reference in the database matches exactly.

### Issue: "Permission denied for function decrypt_cms_key"

**Solution:** Ensure you're using the service role key, not the anon key.

### Issue: "cms_api_key visible in client queries"

**Solution:** Use the `company_public` view or explicitly exclude `cms_api_key` in SELECT queries for client-facing APIs.

---

**Remember:** Never commit encryption passwords or service role keys to version control!

