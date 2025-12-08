# Stratigo Supabase Database Setup Guide

## 📋 Overview

This guide walks you through setting up the Stratigo B2B database schema in Supabase with secure authentication, Row-Level Security (RLS), and encrypted sensitive data.

---

## 🔐 Step 1: Disable Public Signup

1. Go to **Supabase Dashboard** → **Authentication** → **Settings**
2. Under **Auth Settings**, find **"Enable email signup"**
3. **Turn OFF** "Enable email signup"
4. Leave only **"Invite user"** available
5. Save changes

This ensures only admin-invited users can create accounts.

---

## 🗄️ Step 2: Create Database Schema

1. Go to **Supabase Dashboard** → **SQL Editor**
2. Open the `supabase_schema.sql` file
3. Copy the entire SQL content
4. Paste it into the SQL Editor
5. Click **"Run"** to execute

The schema will create:
- ✅ `profiles` table (extends auth.users)
- ✅ `companies` table
- ✅ `metrics_links` table
- ✅ `audit_logs` table
- ✅ RLS policies for security
- ✅ Indexes for performance
- ✅ Triggers for automatic updates

---

## 👤 Step 3: Create Admin User

### 3.1 Invite Admin via Supabase Dashboard

1. Go to **Authentication** → **Users** → **Invite User**
2. Enter email: `admin@stratigo.io`
3. Click **"Send Invitation"**
4. Admin will receive an email to set their password

### 3.2 Get Admin UUID

After the admin sets their password, get their UUID:

```sql
SELECT id, email FROM auth.users WHERE email = 'admin@stratigo.io';
```

Copy the UUID (e.g., `123e4567-e89b-12d3-a456-426614174000`)

### 3.3 Create Admin Profile

Replace `'YOUR_ADMIN_UUID_HERE'` with the actual UUID from step 3.2:

```sql
INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'YOUR_ADMIN_UUID_HERE', -- Replace with actual UUID
    'admin@stratigo.io',
    'Stratigo Admin',
    'admin',
    NULL, -- Admins don't belong to a company
    true
);
```

---

## 🏢 Step 4: Create Company & Client

### 4.1 Create Company

First, create a company (you'll need the admin UUID as owner_id):

```sql
INSERT INTO public.companies (
    id,
    name,
    domain,
    cms_url,
    cms_api_key,
    hosting_plan,
    owner_id,
    active
)
VALUES (
    uuid_generate_v4(),
    'Acme Corporation',
    'acme.com',
    'https://cms.acme.com',
    'temp-key-will-encrypt', -- We'll encrypt this in Step 5
    'professional',
    'YOUR_ADMIN_UUID_HERE', -- Replace with admin UUID
    true
)
RETURNING id; -- Save this company UUID for next step
```

**Save the returned `id`** - you'll need it for the client profile.

### 4.2 Invite Client User

1. Go to **Authentication** → **Users** → **Invite User**
2. Enter client email: `client@acme.com`
3. Click **"Send Invitation"**

### 4.3 Get Client UUID

```sql
SELECT id, email FROM auth.users WHERE email = 'client@acme.com';
```

### 4.4 Create Client Profile

Replace `'YOUR_CLIENT_UUID_HERE'` and `'YOUR_COMPANY_UUID_HERE'`:

```sql
INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'YOUR_CLIENT_UUID_HERE', -- Replace with client UUID
    'client@acme.com',
    'John Doe',
    'client',
    'YOUR_COMPANY_UUID_HERE', -- Replace with company UUID from step 4.1
    true
);
```

---

## 🔒 Step 5: Encrypt CMS API Key with Supabase Vault

### Option A: Using Supabase Vault (Recommended)

Supabase Vault is the secure way to store sensitive keys. However, for database-level encryption, we'll use `pgcrypto`.

### Option B: Encrypt in Application Layer

Store the encrypted key in the database:

```sql
-- Encrypt the CMS API key
UPDATE public.companies
SET cms_api_key = encode(
    pgp_sym_encrypt('your-actual-api-key-here', 'your-encryption-password'),
    'base64'
)
WHERE id = 'YOUR_COMPANY_UUID_HERE';
```

**⚠️ Important:** Store the encryption password securely (environment variable, secrets manager).

### Option C: Use Supabase Vault (Best Practice)

1. Go to **Supabase Dashboard** → **Vault** (or use Supabase CLI)
2. Store the API key as a secret
3. Reference it in your application code (not in the database)

**Recommended Approach:**
- Store `cms_api_key` encrypted in the database using `pgcrypto`
- Or use Supabase Vault and store only a reference ID in the database
- Never expose `cms_api_key` in public API responses

---

## 📊 Step 6: Create Metrics Link

```sql
INSERT INTO public.metrics_links (
    company_id,
    analytics_source,
    data_path,
    api_key_encrypted,
    last_updated
)
VALUES (
    'YOUR_COMPANY_UUID_HERE', -- Replace with company UUID
    'google_analytics',
    '/api/analytics/data',
    NULL, -- Encrypt if needed
    now()
);
```

---

## 🧪 Step 7: Test RLS Policies

### Test as Admin

1. Log in as admin in your application
2. You should be able to:
   - ✅ View all profiles
   - ✅ View all companies (including `cms_api_key`)
   - ✅ View all metrics
   - ✅ View all audit logs

### Test as Client

1. Log in as client in your application
2. You should be able to:
   - ✅ View your own profile
   - ✅ View your company (excluding `cms_api_key` in public API)
   - ✅ View your company's metrics
   - ✅ View your own audit logs
   - ❌ Cannot view other companies' data

---

## 📝 Example JSON Profiles

### Admin Profile JSON

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "email": "admin@stratigo.io",
  "full_name": "Stratigo Admin",
  "role": "admin",
  "company_id": null,
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z",
  "last_login_at": null,
  "is_active": true
}
```

### Client Profile JSON

```json
{
  "id": "223e4567-e89b-12d3-a456-426614174001",
  "email": "client@acme.com",
  "full_name": "John Doe",
  "role": "client",
  "company_id": "323e4567-e89b-12d3-a456-426614174002",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-15T10:30:00Z",
  "last_login_at": "2024-01-15T11:00:00Z",
  "is_active": true,
  "company": {
    "id": "323e4567-e89b-12d3-a456-426614174002",
    "name": "Acme Corporation",
    "domain": "acme.com",
    "cms_url": "https://cms.acme.com",
    "hosting_plan": "professional",
    "active": true
  }
}
```

---

## 🔒 Security Best Practices

### 1. CMS API Key Protection

**Never expose `cms_api_key` in public API responses.**

Create a view or function that excludes sensitive fields:

```sql
-- Use the company_details view (already created)
SELECT * FROM public.company_details WHERE id = 'COMPANY_UUID';
```

Or in your application code:

```javascript
// In your API route
const { data, error } = await supabase
  .from('companies')
  .select('id, name, domain, cms_url, hosting_plan, active')
  .eq('id', companyId)
  .single();
// Note: cms_api_key is excluded
```

### 2. Use Service Role for Admin Operations

For admin operations (creating companies, viewing all data), use the **service role key** (server-side only):

```javascript
// Server-side only - never expose this key
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Service role key
);
```

### 3. Audit Logging

Always log sensitive actions:

```sql
INSERT INTO public.audit_logs (
    user_id,
    action,
    resource_type,
    resource_id,
    ip_address,
    user_agent,
    metadata
)
VALUES (
    auth.uid(),
    'company.viewed',
    'companies',
    'COMPANY_UUID',
    '192.168.1.1',
    'Mozilla/5.0...',
    '{"details": "Client viewed company dashboard"}'::jsonb
);
```

### 4. Regular Security Audits

- Review RLS policies quarterly
- Check audit logs for suspicious activity
- Rotate encryption keys annually
- Update Supabase dependencies regularly

---

## 🚀 Integration with Your React App

### 1. Install Supabase Client

```bash
npm install @supabase/supabase-js
```

### 2. Create Supabase Client

```javascript
// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 3. Update Login Page

In `src/pages/Login.jsx`, replace the placeholder auth with Supabase:

```javascript
import { supabase } from '../lib/supabase';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) throw error;

    // Get user profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    // Redirect based on role
    if (profile.role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  } catch (error) {
    setErrors({ general: error.message });
  } finally {
    setIsLoading(false);
  }
};
```

---

## 📚 Additional Resources

- [Supabase RLS Documentation](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Vault Documentation](https://supabase.com/docs/guides/database/vault)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)

---

## ✅ Checklist

- [ ] Disabled public signup in Supabase
- [ ] Created database schema
- [ ] Created admin user and profile
- [ ] Created test company
- [ ] Created test client user and profile
- [ ] Encrypted CMS API keys
- [ ] Tested RLS policies (admin and client)
- [ ] Set up environment variables
- [ ] Integrated Supabase client in React app
- [ ] Updated login page with Supabase auth

---

## 🆘 Troubleshooting

### Issue: "Row-level security policy violation"

**Solution:** Check that:
1. User is authenticated (`auth.uid()` is not null)
2. User has the correct role in `profiles` table
3. RLS policies are enabled on the table

### Issue: "Cannot read property 'id' of undefined"

**Solution:** Ensure the user profile exists in `profiles` table after they sign up.

### Issue: "cms_api_key is visible to clients"

**Solution:** Use the `company_details` view or explicitly exclude `cms_api_key` in your SELECT queries for client-facing APIs.

---

**Need help?** Check the Supabase documentation or create an issue in your repository.

