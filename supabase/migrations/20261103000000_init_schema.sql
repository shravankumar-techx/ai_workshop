-- ==============================================================================
-- CampusPrep Portal: Complete Supabase / PostgreSQL Database Migration Script
-- Version: 1.0.0
-- Includes: Tables, Enums, Foreign Keys, Indexes, Functions, Triggers & RLS Policies
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. User Profiles Table (Linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    avatar_url TEXT,
    role TEXT NOT NULL CHECK (role IN ('student', 'admin', 'faculty')) DEFAULT 'student',
    branch TEXT DEFAULT 'Computer Science & Engineering',
    batch_year INTEGER DEFAULT 2026,
    cgpa NUMERIC(4, 2) DEFAULT 8.50 CHECK (cgpa >= 0.00 AND cgpa <= 10.00),
    roll_number TEXT,
    phone TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Index for fast profile querying
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);

-- 3. Exams Table
CREATE TABLE IF NOT EXISTS public.exams (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    category TEXT NOT NULL, -- e.g. 'Quantitative', 'Logical Reasoning', 'Verbal Ability', 'Company Specific'
    company_tag TEXT,       -- e.g. 'TCS NQT', 'Infosys', 'Capgemini', 'Wipro', 'General'
    description TEXT NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 15,
    total_marks INTEGER NOT NULL DEFAULT 15,
    passing_percentage NUMERIC(5, 2) DEFAULT 60.00,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')) DEFAULT 'Intermediate',
    is_published BOOLEAN NOT NULL DEFAULT true,
    created_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_exams_category ON public.exams(category);
CREATE INDEX IF NOT EXISTS idx_exams_is_published ON public.exams(is_published);

-- 4. Questions Table
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    exam_id TEXT NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of strings e.g. ["Option A", "Option B", "Option C", "Option D"]
    correct_index INTEGER NOT NULL CHECK (correct_index >= 0 AND correct_index <= 3),
    explanation TEXT NOT NULL,
    topic_tag TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_questions_exam_id ON public.questions(exam_id);

-- 5. Exam Attempts Table
CREATE TABLE IF NOT EXISTS public.exam_attempts (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    exam_id TEXT NOT NULL REFERENCES public.exams(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL,
    score NUMERIC(5, 2) NOT NULL,
    total_questions INTEGER NOT NULL,
    correct_count INTEGER NOT NULL,
    incorrect_count INTEGER NOT NULL,
    unattempted_count INTEGER NOT NULL,
    accuracy_percentage NUMERIC(5, 2) NOT NULL,
    percentile_estimate NUMERIC(5, 2) DEFAULT 85.00,
    time_taken_seconds INTEGER NOT NULL,
    answers JSONB NOT NULL, -- { [questionId or questionIndex]: selectedOptionIndex }
    completed_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_attempts_user_id ON public.exam_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_exam_id ON public.exam_attempts(exam_id);
CREATE INDEX IF NOT EXISTS idx_attempts_completed_at ON public.exam_attempts(completed_at DESC);

-- 6. Jobs & Placement Drives Table
CREATE TABLE IF NOT EXISTS public.jobs (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    company_name TEXT NOT NULL,
    company_logo_url TEXT,
    role_title TEXT NOT NULL,
    ctc TEXT NOT NULL,
    location TEXT NOT NULL,
    job_type TEXT NOT NULL CHECK (job_type IN ('Full-time', 'Internship', 'Contract')) DEFAULT 'Full-time',
    eligibility TEXT NOT NULL,
    eligible_branches TEXT[] NOT NULL DEFAULT ARRAY['CSE', 'ISE', 'ECE', 'AIML'],
    batch_year TEXT NOT NULL DEFAULT '2026',
    min_cgpa NUMERIC(3, 1) NOT NULL DEFAULT 7.0,
    deadline TIMESTAMPTZ NOT NULL,
    apply_url TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    posted_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_jobs_is_active ON public.jobs(is_active);
CREATE INDEX IF NOT EXISTS idx_jobs_deadline ON public.jobs(deadline ASC);

-- 7. Newsletters Table
CREATE TABLE IF NOT EXISTS public.newsletters (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    edition_no INTEGER NOT NULL UNIQUE,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content_markdown TEXT NOT NULL,
    tags TEXT[] DEFAULT ARRAY['Hiring Trends', 'Interview Strategy'],
    read_time TEXT DEFAULT '5 min read',
    publish_date DATE NOT NULL DEFAULT CURRENT_DATE,
    author_id TEXT,
    author_name TEXT DEFAULT 'Placement Director',
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_newsletters_edition ON public.newsletters(edition_no DESC);

-- 8. Placement Resources & Study Repository Table
CREATE TABLE IF NOT EXISTS public.resources (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    category TEXT NOT NULL CHECK (category IN ('aptitude', 'technical', 'interview')),
    file_url TEXT NOT NULL,
    description TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT ARRAY['General'],
    file_type TEXT NOT NULL DEFAULT 'PDF',
    download_count INTEGER NOT NULL DEFAULT 0,
    content_preview TEXT,
    uploaded_by TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

CREATE INDEX IF NOT EXISTS idx_resources_category ON public.resources(category);

-- ==============================================================================
-- Row-Level Security (RLS) Configuration
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.exam_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

-- Helper Function to check if authenticated user is admin/faculty
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND (role = 'admin' OR role = 'faculty')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Public profiles are readable by authenticated users"
ON public.profiles FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Exams Policies
CREATE POLICY "Anyone can view published exams"
ON public.exams FOR SELECT
USING (true);

CREATE POLICY "Allow exam modifications"
ON public.exams FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Questions Policies
CREATE POLICY "Anyone can view questions"
ON public.questions FOR SELECT
USING (true);

CREATE POLICY "Allow question modifications"
ON public.questions FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Exam Attempts Policies
CREATE POLICY "Anyone can view exam attempts"
ON public.exam_attempts FOR SELECT
USING (true);

CREATE POLICY "Anyone can create exam attempts"
ON public.exam_attempts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Jobs Policies
CREATE POLICY "Anyone can view active jobs"
ON public.jobs FOR SELECT
USING (true);

CREATE POLICY "Allow job modifications"
ON public.jobs FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Newsletters Policies
CREATE POLICY "Anyone can read published newsletters"
ON public.newsletters FOR SELECT
USING (true);

CREATE POLICY "Allow newsletter modifications"
ON public.newsletters FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- Resources Policies
CREATE POLICY "Anyone can view resources"
ON public.resources FOR SELECT
USING (true);

CREATE POLICY "Allow resource modifications"
ON public.resources FOR ALL
TO anon, authenticated
USING (true)
WITH CHECK (true);

-- ==============================================================================
-- Automatic User Provisioning Trigger (on Supabase Google OAuth sign in)
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    COALESCE(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture', ''),
    'student'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
