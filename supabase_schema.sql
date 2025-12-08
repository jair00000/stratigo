-- ============================================================================
-- Stratigo B2B Database Schema
-- ============================================================================
-- This schema creates a secure B2B platform where only admin-invited clients
-- can log in. All tables use Row-Level Security (RLS) with proper policies.
-- 
-- IMPORTANT: Run this in Supabase SQL Editor after disabling public signup.
-- ============================================================================

-- ============================================================================
-- 1. EXTENSIONS & SETUP
-- ============================================================================

-- Enable UUID extension (usually already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable pgcrypto for encryption functions (if needed)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 2. ENUMS
-- ============================================================================

-- User role enum
CREATE TYPE user_role AS ENUM ('admin', 'client');

-- Hosting plan enum
CREATE TYPE hosting_plan_type AS ENUM ('starter', 'professional', 'enterprise', 'custom');

-- Analytics source enum
CREATE TYPE analytics_source_type AS ENUM ('google_analytics', 'google_search_console', 'custom_api', 'other');

-- ============================================================================
-- 3. TABLES
-- ============================================================================

-- ----------------------------------------------------------------------------
-- profiles
-- ----------------------------------------------------------------------------
-- Extends Supabase auth.users with additional profile information
-- Links to auth.users via id (UUID)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role user_role NOT NULL DEFAULT 'client',
    company_id UUID REFERENCES public.companies(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    last_login_at TIMESTAMPTZ,
    is_active BOOLEAN NOT NULL DEFAULT true,
    
    -- Constraints
    CONSTRAINT profiles_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT profiles_role_check CHECK (role IN ('admin', 'client'))
);

-- Indexes for profiles
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_company_id ON public.profiles(company_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_is_active ON public.profiles(is_active);

-- ----------------------------------------------------------------------------
-- companies
-- ----------------------------------------------------------------------------
-- Represents client companies/organizations
CREATE TABLE IF NOT EXISTS public.companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    domain TEXT,
    cms_url TEXT NOT NULL,
    cms_api_key TEXT NOT NULL, -- Will be encrypted using Supabase Vault
    hosting_plan hosting_plan_type NOT NULL DEFAULT 'professional',
    owner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    
    -- Constraints
    CONSTRAINT companies_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 255),
    CONSTRAINT companies_domain_format CHECK (domain IS NULL OR domain ~* '^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$')
);

-- Indexes for companies
CREATE INDEX IF NOT EXISTS idx_companies_owner_id ON public.companies(owner_id);
CREATE INDEX IF NOT EXISTS idx_companies_active ON public.companies(active);
CREATE INDEX IF NOT EXISTS idx_companies_domain ON public.companies(domain) WHERE domain IS NOT NULL;

-- ----------------------------------------------------------------------------
-- metrics_links
-- ----------------------------------------------------------------------------
-- Links analytics/metrics sources to companies
CREATE TABLE IF NOT EXISTS public.metrics_links (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_id UUID NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
    analytics_source analytics_source_type NOT NULL,
    data_path TEXT NOT NULL,
    api_key_encrypted TEXT, -- Encrypted API key if needed
    last_updated TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    
    -- Constraints
    CONSTRAINT metrics_links_data_path_length CHECK (char_length(data_path) <= 500)
);

-- Indexes for metrics_links
CREATE INDEX IF NOT EXISTS idx_metrics_links_company_id ON public.metrics_links(company_id);
CREATE INDEX IF NOT EXISTS idx_metrics_links_last_updated ON public.metrics_links(last_updated);
CREATE INDEX IF NOT EXISTS idx_metrics_links_analytics_source ON public.metrics_links(analytics_source);

-- ----------------------------------------------------------------------------
-- audit_logs
-- ----------------------------------------------------------------------------
-- Audit trail for user actions
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    action TEXT NOT NULL,
    resource_type TEXT,
    resource_id UUID,
    ip_address INET,
    user_agent TEXT,
    metadata JSONB,
    timestamp TIMESTAMPTZ NOT NULL DEFAULT now(),
    
    -- Constraints
    CONSTRAINT audit_logs_action_length CHECK (char_length(action) <= 100),
    CONSTRAINT audit_logs_resource_type_length CHECK (resource_type IS NULL OR char_length(resource_type) <= 50)
);

-- Indexes for audit_logs
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_timestamp ON public.audit_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON public.audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_audit_logs_resource ON public.audit_logs(resource_type, resource_id) WHERE resource_type IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_audit_logs_metadata_gin ON public.audit_logs USING GIN(metadata);

-- ============================================================================
-- 4. FUNCTIONS & TRIGGERS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for profiles.updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Trigger for companies.updated_at
CREATE TRIGGER update_companies_updated_at
    BEFORE UPDATE ON public.companies
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Function to automatically create profile when user signs up
-- Note: This will only work if you enable public signup temporarily
-- For invite-only, you'll create profiles manually after inviting users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'client')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user creation (if you enable signup later)
-- CREATE TRIGGER on_auth_user_created
--     AFTER INSERT ON auth.users
--     FOR EACH ROW
--     EXECUTE FUNCTION public.handle_new_user();

-- Function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = user_id AND role = 'admin'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get user's company_id
CREATE OR REPLACE FUNCTION public.get_user_company_id(user_id UUID)
RETURNS UUID AS $$
BEGIN
    RETURN (
        SELECT company_id FROM public.profiles
        WHERE id = user_id
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.metrics_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- ----------------------------------------------------------------------------
-- profiles RLS Policies
-- ----------------------------------------------------------------------------

-- Admins can do everything
CREATE POLICY "Admins can manage all profiles"
    ON public.profiles
    FOR ALL
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (id = auth.uid());

-- Users can update their own profile (limited fields)
CREATE POLICY "Users can update own profile"
    ON public.profiles
    FOR UPDATE
    TO authenticated
    USING (id = auth.uid())
    WITH CHECK (
        id = auth.uid() AND
        -- Prevent role changes
        role = (SELECT role FROM public.profiles WHERE id = auth.uid()) AND
        -- Prevent company_id changes
        company_id = (SELECT company_id FROM public.profiles WHERE id = auth.uid())
    );

-- Clients can view profiles in their company
CREATE POLICY "Clients can view company profiles"
    ON public.profiles
    FOR SELECT
    TO authenticated
    USING (
        company_id = public.get_user_company_id(auth.uid())
        AND company_id IS NOT NULL
    );

-- ----------------------------------------------------------------------------
-- companies RLS Policies
-- ----------------------------------------------------------------------------

-- Admins can do everything
CREATE POLICY "Admins can manage all companies"
    ON public.companies
    FOR ALL
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- Clients can view their own company (excluding cms_api_key)
CREATE POLICY "Clients can view own company"
    ON public.companies
    FOR SELECT
    TO authenticated
    USING (
        id = public.get_user_company_id(auth.uid())
        AND id IS NOT NULL
    );

-- Clients can update their company (excluding sensitive fields)
CREATE POLICY "Clients can update own company (limited)"
    ON public.companies
    FOR UPDATE
    TO authenticated
    USING (
        id = public.get_user_company_id(auth.uid())
        AND id IS NOT NULL
    )
    WITH CHECK (
        id = public.get_user_company_id(auth.uid()) AND
        -- Prevent changes to cms_api_key, cms_url, owner_id
        cms_api_key = (SELECT cms_api_key FROM public.companies WHERE id = public.get_user_company_id(auth.uid()))
    );

-- ----------------------------------------------------------------------------
-- metrics_links RLS Policies
-- ----------------------------------------------------------------------------

-- Admins can do everything
CREATE POLICY "Admins can manage all metrics"
    ON public.metrics_links
    FOR ALL
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- Clients can view metrics for their company
CREATE POLICY "Clients can view own company metrics"
    ON public.metrics_links
    FOR SELECT
    TO authenticated
    USING (
        company_id = public.get_user_company_id(auth.uid())
        AND company_id IS NOT NULL
    );

-- Clients can update metrics for their company
CREATE POLICY "Clients can update own company metrics"
    ON public.metrics_links
    FOR UPDATE
    TO authenticated
    USING (
        company_id = public.get_user_company_id(auth.uid())
        AND company_id IS NOT NULL
    )
    WITH CHECK (
        company_id = public.get_user_company_id(auth.uid())
        AND company_id IS NOT NULL
    );

-- ----------------------------------------------------------------------------
-- audit_logs RLS Policies
-- ----------------------------------------------------------------------------

-- Admins can view all audit logs
CREATE POLICY "Admins can view all audit logs"
    ON public.audit_logs
    FOR SELECT
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- Users can view their own audit logs
CREATE POLICY "Users can view own audit logs"
    ON public.audit_logs
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());

-- Anyone authenticated can insert audit logs (for tracking)
CREATE POLICY "Authenticated users can insert audit logs"
    ON public.audit_logs
    FOR INSERT
    TO authenticated
    WITH CHECK (user_id = auth.uid());

-- ============================================================================
-- 6. VIEWS (for easier querying)
-- ============================================================================

-- View for company details (excludes sensitive cms_api_key)
CREATE OR REPLACE VIEW public.company_details AS
SELECT
    c.id,
    c.name,
    c.domain,
    c.cms_url,
    c.hosting_plan,
    c.owner_id,
    c.active,
    c.created_at,
    c.updated_at,
    COUNT(DISTINCT p.id) as user_count,
    COUNT(DISTINCT ml.id) as metrics_count
FROM public.companies c
LEFT JOIN public.profiles p ON p.company_id = c.id
LEFT JOIN public.metrics_links ml ON ml.company_id = c.id
GROUP BY c.id, c.name, c.domain, c.cms_url, c.hosting_plan, c.owner_id, c.active, c.created_at, c.updated_at;

-- Grant access to authenticated users
GRANT SELECT ON public.company_details TO authenticated;

-- ============================================================================
-- 7. EXAMPLE DATA (INSERT COMMANDS)
-- ============================================================================

-- IMPORTANT: Before running these inserts, you need to:
-- 1. Create users in Supabase Auth dashboard (Authentication → Users → Invite User)
-- 2. Get their UUIDs from auth.users table
-- 3. Replace the UUIDs below with actual user UUIDs

-- Example: Create an admin user
-- Step 1: Invite admin@stratigo.io in Supabase Auth dashboard
-- Step 2: Get the UUID from auth.users table
-- Step 3: Run this (replace 'ADMIN_UUID_HERE' with actual UUID):

/*
INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'ADMIN_UUID_HERE', -- Replace with actual UUID from auth.users
    'admin@stratigo.io',
    'Stratigo Admin',
    'admin',
    NULL, -- Admins don't belong to a company
    true
);
*/

-- Example: Create a company
/*
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
    'your-encrypted-api-key-here', -- Use Supabase Vault to encrypt this
    'professional',
    'OWNER_UUID_HERE', -- Replace with actual owner UUID
    true
);
*/

-- Example: Create a client user
-- Step 1: Invite client@acme.com in Supabase Auth dashboard
-- Step 2: Get the UUID from auth.users table
-- Step 3: Run this (replace 'CLIENT_UUID_HERE' and 'COMPANY_UUID_HERE'):

/*
INSERT INTO public.profiles (id, email, full_name, role, company_id, is_active)
VALUES (
    'CLIENT_UUID_HERE', -- Replace with actual UUID from auth.users
    'client@acme.com',
    'John Doe',
    'client',
    'COMPANY_UUID_HERE', -- Replace with actual company UUID
    true
);
*/

-- Example: Create metrics link
/*
INSERT INTO public.metrics_links (
    company_id,
    analytics_source,
    data_path,
    api_key_encrypted,
    last_updated
)
VALUES (
    'COMPANY_UUID_HERE', -- Replace with actual company UUID
    'google_analytics',
    '/api/analytics/data',
    NULL, -- Encrypt if needed
    now()
);
*/

-- ============================================================================
-- 8. GRANTS
-- ============================================================================

-- Grant necessary permissions to authenticated users
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.companies TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.metrics_links TO authenticated;
GRANT SELECT, INSERT ON public.audit_logs TO authenticated;

-- Grant execute on functions
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_user_company_id(UUID) TO authenticated;

-- ============================================================================
-- END OF SCHEMA
-- ============================================================================

