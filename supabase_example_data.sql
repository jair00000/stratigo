-- ============================================================================
-- Stratigo Example Data - Ready to Use
-- ============================================================================
-- IMPORTANT: Before running these inserts:
-- 1. Create users in Supabase Auth dashboard (Authentication → Users → Invite User)
-- 2. Get their UUIDs from auth.users table
-- 3. Replace the placeholder UUIDs below with actual UUIDs
-- ============================================================================

-- ============================================================================
-- STEP 1: Get User UUIDs
-- ============================================================================
-- Run this query to get UUIDs after inviting users:

-- SELECT id, email, created_at 
-- FROM auth.users 
-- WHERE email IN ('admin@stratigo.io', 'client@acme.com')
-- ORDER BY created_at;

-- ============================================================================
-- STEP 2: Create Admin Profile
-- ============================================================================
-- Replace 'YOUR_ADMIN_UUID_HERE' with the actual UUID from step 1

INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'YOUR_ADMIN_UUID_HERE', -- Replace with actual UUID from auth.users
    'admin@stratigo.io',
    'Stratigo Admin',
    'admin',
    NULL, -- Admins don't belong to a company
    true
)
ON CONFLICT (id) DO UPDATE
SET 
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    updated_at = now();

-- ============================================================================
-- STEP 3: Create Company
-- ============================================================================
-- Replace 'YOUR_ADMIN_UUID_HERE' with the admin UUID from step 1
-- Save the returned company UUID for step 4

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
    'temp-key-replace-with-encrypted', -- See SUPABASE_SETUP_GUIDE.md for encryption
    'professional',
    'YOUR_ADMIN_UUID_HERE', -- Replace with admin UUID
    true
)
RETURNING id; -- Save this UUID for the client profile

-- ============================================================================
-- STEP 4: Create Client Profile
-- ============================================================================
-- Replace 'YOUR_CLIENT_UUID_HERE' with the client UUID from step 1
-- Replace 'YOUR_COMPANY_UUID_HERE' with the company UUID from step 3

INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'YOUR_CLIENT_UUID_HERE', -- Replace with actual UUID from auth.users
    'client@acme.com',
    'John Doe',
    'client',
    'YOUR_COMPANY_UUID_HERE', -- Replace with company UUID from step 3
    true
)
ON CONFLICT (id) DO UPDATE
SET 
    email = EXCLUDED.email,
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    company_id = EXCLUDED.company_id,
    updated_at = now();

-- ============================================================================
-- STEP 5: Create Metrics Link
-- ============================================================================
-- Replace 'YOUR_COMPANY_UUID_HERE' with the company UUID from step 3

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
    NULL, -- Encrypt if needed (see SUPABASE_SETUP_GUIDE.md)
    now()
);

-- ============================================================================
-- STEP 6: Create Additional Test Data (Optional)
-- ============================================================================

-- Create another company
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
    'TechStart Inc',
    'techstart.io',
    'https://cms.techstart.io',
    'temp-key-replace-with-encrypted',
    'enterprise',
    'YOUR_ADMIN_UUID_HERE', -- Replace with admin UUID
    true
)
RETURNING id;

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check all profiles
SELECT 
    p.id,
    p.email,
    p.full_name,
    p.role,
    p.company_id,
    c.name as company_name,
    p.is_active,
    p.created_at
FROM public.profiles p
LEFT JOIN public.companies c ON c.id = p.company_id
ORDER BY p.created_at;

-- Check all companies (admin only - includes cms_api_key)
SELECT 
    id,
    name,
    domain,
    cms_url,
    cms_api_key, -- Only visible to admins via RLS
    hosting_plan,
    active,
    created_at
FROM public.companies
ORDER BY created_at;

-- Check company details view (excludes cms_api_key)
SELECT * FROM public.company_details
ORDER BY created_at;

-- Check metrics links
SELECT 
    ml.id,
    ml.company_id,
    c.name as company_name,
    ml.analytics_source,
    ml.data_path,
    ml.last_updated
FROM public.metrics_links ml
JOIN public.companies c ON c.id = ml.company_id
ORDER BY ml.last_updated DESC;

-- ============================================================================
-- CLEANUP (Use with caution - deletes all test data)
-- ============================================================================

-- WARNING: This will delete all data!
-- Uncomment only if you want to reset everything:

/*
DELETE FROM public.audit_logs;
DELETE FROM public.metrics_links;
DELETE FROM public.profiles WHERE role = 'client';
DELETE FROM public.companies;
DELETE FROM public.profiles WHERE role = 'admin';
*/

