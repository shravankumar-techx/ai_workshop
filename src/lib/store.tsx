'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  UserProfile,
  UserRole,
  Exam,
  ExamAttempt,
  Job,
  Newsletter,
  Resource,
  ReadinessScore,
} from '@/types';
import { mockExams } from '@/data/exams';
import { mockJobs } from '@/data/jobs';
import { mockNewsletters } from '@/data/newsletters';
import { mockResources } from '@/data/resources';
import { calculatePercentile } from './utils';
import { createClient, isSupabaseConfigured } from './supabase/client';

// Standard mock profiles for role switching
export const studentProfile: UserProfile = {
  id: 'usr-student-01',
  email: 'aditya.verma26@campus.edu',
  full_name: 'Aditya Verma',
  role: 'student',
  branch: 'Computer Science & Engineering',
  batch_year: 2026,
  cgpa: 8.85,
  roll_number: '4SF22CS014',
  avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
};

export const facultyProfile: UserProfile = {
  id: 'usr-faculty-01',
  email: 'rajesh.rao@campus.edu',
  full_name: 'Dr. Rajesh Rao',
  role: 'faculty',
  branch: 'Placement & Corporate Relations',
  faculty_id: 'FAC-CSE-2026',
  batch_year: 2026,
  avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
};

// Backward compatibility alias
export const adminProfile = facultyProfile;

// Initial exam attempts to pre-populate student analytics
const initialAttempts: ExamAttempt[] = [
  {
    id: 'att-01',
    exam_id: 'exam-quant-01',
    exam_title: 'Quantitative Mastery: Ratios, Proportions & Variations',
    category: 'Quantitative',
    user_id: 'usr-student-01',
    score: 8,
    total_questions: 5,
    correct_count: 4,
    incorrect_count: 1,
    unattempted_count: 0,
    accuracy_percentage: 80,
    percentile_estimate: 88.5,
    time_taken_seconds: 430,
    answers: { 0: 1, 1: 2, 2: 0, 3: 1, 4: 2 },
    completed_at: '2026-11-02T16:20:00Z',
  },
  {
    id: 'att-02',
    exam_id: 'exam-logical-01',
    exam_title: 'Logical Reasoning: Syllogisms & Venn Logic',
    category: 'Logical Reasoning',
    user_id: 'usr-student-01',
    score: 10,
    total_questions: 5,
    correct_count: 5,
    incorrect_count: 0,
    unattempted_count: 0,
    accuracy_percentage: 100,
    percentile_estimate: 98.2,
    time_taken_seconds: 360,
    answers: { 0: 3, 1: 1, 2: 1, 3: 0, 4: 2 },
    completed_at: '2026-11-01T14:10:00Z',
  },
  {
    id: 'att-03',
    exam_id: 'exam-verbal-01',
    exam_title: 'Verbal Ability: Sentence Correction & Spotting Errors',
    category: 'Verbal Ability',
    user_id: 'usr-student-01',
    score: 6,
    total_questions: 5,
    correct_count: 3,
    incorrect_count: 2,
    unattempted_count: 0,
    accuracy_percentage: 60,
    percentile_estimate: 68.0,
    time_taken_seconds: 480,
    answers: { 0: 1, 1: 1, 2: 0, 3: 0, 4: 0 },
    completed_at: '2026-10-31T11:45:00Z',
  },
];

interface AppContextType {
  currentUser: UserProfile | null;
  setCurrentUser: (user: UserProfile | null) => void;
  userRole: UserRole;
  switchRole: (role: UserRole) => void;
  isAuthDrawerOpen: boolean;
  authRedirectUrl: string | null;
  openAuthDrawer: (redirectUrl?: string) => void;
  closeAuthDrawer: () => void;
  loginAsStudent: (email?: string, rollNumber?: string) => void;
  loginAsFaculty: (facultyId?: string, securityKey?: string) => void;
  loginWithGoogle: (redirectUrl?: string) => Promise<{ error?: string }>;
  loginWithPassword: (email: string, password: string) => Promise<{ error?: string }>;
  signUpWithPassword: (email: string, password: string, fullName: string) => Promise<{ error?: string; message?: string }>;
  logout: () => void;
  exams: Exam[];
  jobs: Job[];
  newsletters: Newsletter[];
  resources: Resource[];
  attempts: ExamAttempt[];
  recordAttempt: (attempt: Omit<ExamAttempt, 'id' | 'completed_at' | 'percentile_estimate'>) => ExamAttempt;
  addExam: (exam: Omit<Exam, 'id'>) => Exam;
  deleteExam: (id: string) => void;
  deleteQuestion: (examId: string, questionId: string) => void;
  addJob: (job: Omit<Job, 'id'>) => Job;
  toggleJobStatus: (id: string) => void;
  deleteJob: (id: string) => void;
  addNewsletter: (newsletter: Omit<Newsletter, 'id'>) => Newsletter;
  deleteNewsletter: (id: string) => void;
  addResource: (resource: Omit<Resource, 'id' | 'download_count'>) => Resource;
  deleteResource: (id: string) => void;
  readinessScores: ReadinessScore;
  overallAccuracy: number;
  isSupabaseConnected: boolean;
  isSyncing: boolean;
  syncAllToSupabase: () => Promise<{ success: boolean; count: number; error?: string }>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Helper to safely execute background Supabase operations without unhandled rejection
async function safeRun(operation: () => Promise<any> | PromiseLike<any>) {
  try {
    const res = await operation();
    if (res && res.error) {
      console.warn('Supabase DB operation notice:', res.error.message || res.error);
    }
    return res;
  } catch (err) {
    console.warn('Supabase DB operation exception:', err);
  }
}

// Auto-upload initial seed data to Supabase if database is newly connected and empty
async function autoUploadSeedDataToSupabase(supabase: ReturnType<typeof createClient>) {
  try {
    // 1. Auto-upload exams & questions
    for (const exam of mockExams) {
      await supabase.from('exams').upsert({
        id: exam.id,
        title: exam.title,
        category: exam.category,
        company_tag: exam.company_tag || 'General',
        description: exam.description,
        duration_minutes: exam.duration_minutes,
        total_marks: exam.total_marks || 15,
        passing_percentage: exam.passing_percentage || 60,
        difficulty: exam.difficulty,
        is_published: exam.is_published,
      });

      if (exam.questions && exam.questions.length > 0) {
        const qPayload = exam.questions.map((q) => ({
          id: q.id,
          exam_id: exam.id,
          question_text: q.question_text,
          options: q.options,
          correct_index: q.correct_index,
          explanation: q.explanation,
          topic_tag: q.topic_tag || 'General',
        }));
        await supabase.from('questions').upsert(qPayload);
      }
    }

    // 2. Auto-upload jobs
    for (const job of mockJobs) {
      await supabase.from('jobs').upsert({
        id: job.id,
        company_name: job.company_name,
        company_logo_url: job.company_logo_url || null,
        role_title: job.role_title,
        ctc: job.ctc,
        location: job.location,
        job_type: job.job_type,
        eligibility: job.eligibility,
        eligible_branches: job.eligible_branches,
        batch_year: job.batch_year,
        min_cgpa: job.min_cgpa,
        deadline: job.deadline,
        apply_url: job.apply_url,
        is_active: job.is_active,
      });
    }

    // 3. Auto-upload newsletters
    for (const nl of mockNewsletters) {
      await supabase.from('newsletters').upsert({
        id: nl.id,
        edition_no: nl.edition_no,
        title: nl.title,
        summary: nl.summary,
        content_markdown: nl.content_markdown,
        tags: nl.tags,
        read_time: nl.read_time,
        publish_date: nl.publish_date,
        author_name: nl.author_name || 'Placement Director',
      });
    }

    // 4. Auto-upload resources
    for (const res of mockResources) {
      await supabase.from('resources').upsert({
        id: res.id,
        title: res.title,
        category: res.category,
        file_url: res.file_url,
        description: res.description,
        tags: res.tags,
        file_type: res.file_type,
        download_count: res.download_count,
        content_preview: res.content_preview || null,
      });
    }

    try {
      localStorage.setItem('cp_supabase_auto_seeded', 'true');
    } catch {}
  } catch (err) {
    console.warn('Auto-seed Supabase notice:', err);
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(studentProfile);
  const [userRole, setUserRole] = useState<UserRole>('student');
  const [exams, setExams] = useState<Exam[]>(mockExams);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [newsletters, setNewsletters] = useState<Newsletter[]>(mockNewsletters);
  const [resources, setResources] = useState<Resource[]>(mockResources);
  const [attempts, setAttempts] = useState<ExamAttempt[]>(initialAttempts);
  const [isSupabaseConnected, setIsSupabaseConnected] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);

  // Slide-over Side Login Drawer state
  const [isAuthDrawerOpen, setIsAuthDrawerOpen] = useState(false);
  const [authRedirectUrl, setAuthRedirectUrl] = useState<string | null>(null);

  const openAuthDrawer = (redirectUrl?: string) => {
    setAuthRedirectUrl(redirectUrl || null);
    setIsAuthDrawerOpen(true);
  };

  const closeAuthDrawer = () => {
    setIsAuthDrawerOpen(false);
    setAuthRedirectUrl(null);
  };

  const loginAsStudent = (email?: string, rollNumber?: string) => {
    const studentUser: UserProfile = {
      ...studentProfile,
      email: email || studentProfile.email,
      roll_number: rollNumber || studentProfile.roll_number,
    };
    setCurrentUser(studentUser);
    setUserRole('student');
    setIsAuthDrawerOpen(false);
    try {
      localStorage.setItem('cp_role', 'student');
      localStorage.setItem('cp_profile', JSON.stringify(studentUser));
    } catch {}
  };

  const loginAsFaculty = (facultyId?: string) => {
    const facultyUser: UserProfile = {
      ...facultyProfile,
      faculty_id: facultyId || facultyProfile.faculty_id,
    };
    setCurrentUser(facultyUser);
    setUserRole('faculty');
    setIsAuthDrawerOpen(false);
    try {
      localStorage.setItem('cp_role', 'faculty');
      localStorage.setItem('cp_profile', JSON.stringify(facultyUser));
    } catch {}
  };

  const loginWithGoogle = async (redirectUrl?: string): Promise<{ error?: string }> => {
    if (!isSupabaseConfigured()) {
      return { error: 'Supabase configuration is not active.' };
    }
    try {
      const supabase = createClient();
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const nextPath = redirectUrl || '/dashboard/student';
      const redirectTo = `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'select_account',
          },
        },
      });

      if (error) {
        return { error: error.message };
      }
      return {};
    } catch (err: any) {
      return { error: err?.message || 'Failed to initialize Google OAuth.' };
    }
  };

  const loginWithPassword = async (email: string, password: string): Promise<{ error?: string }> => {
    if (!isSupabaseConfigured()) {
      return { error: 'Supabase configuration is not active.' };
    }
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { error: error.message };
      }

      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        const resolvedUser: UserProfile = {
          id: data.user.id,
          email: data.user.email || email,
          full_name: profile?.full_name || data.user.user_metadata?.full_name || email.split('@')[0],
          role: profile?.role || 'student',
          branch: profile?.branch || 'Computer Science & Engineering',
          batch_year: profile?.batch_year || 2026,
          cgpa: Number(profile?.cgpa) || 8.5,
          roll_number: profile?.roll_number || '4SF22CS014',
          avatar_url: profile?.avatar_url,
        };
        setCurrentUser(resolvedUser);
        setUserRole(resolvedUser.role);
        setIsAuthDrawerOpen(false);
        try {
          localStorage.setItem('cp_role', resolvedUser.role);
          localStorage.setItem('cp_profile', JSON.stringify(resolvedUser));
        } catch {}
      }
      return {};
    } catch (err: any) {
      return { error: err?.message || 'Authentication failed.' };
    }
  };

  const signUpWithPassword = async (
    email: string,
    password: string,
    fullName: string
  ): Promise<{ error?: string; message?: string }> => {
    if (!isSupabaseConfigured()) {
      return { error: 'Supabase configuration is not active.' };
    }
    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        return { error: error.message };
      }

      if (data.user) {
        await supabase.from('profiles').upsert(
          {
            id: data.user.id,
            email,
            full_name: fullName,
            role: 'student',
            branch: 'Computer Science & Engineering',
            batch_year: 2026,
            cgpa: 8.5,
          },
          { onConflict: 'id' }
        );

        const resolvedUser: UserProfile = {
          id: data.user.id,
          email: data.user.email || email,
          full_name: fullName,
          role: 'student',
          branch: 'Computer Science & Engineering',
          batch_year: 2026,
          cgpa: 8.5,
          roll_number: '4SF22CS014',
        };
        setCurrentUser(resolvedUser);
        setUserRole('student');
        setIsAuthDrawerOpen(false);
        try {
          localStorage.setItem('cp_role', 'student');
          localStorage.setItem('cp_profile', JSON.stringify(resolvedUser));
        } catch {}
      }

      return { message: 'Account successfully registered and connected to database!' };
    } catch (err: any) {
      return { error: err?.message || 'Registration failed.' };
    }
  };

  const logout = async () => {
    setCurrentUser(null);
    setUserRole('guest');
    try {
      localStorage.setItem('cp_role', 'guest');
      localStorage.removeItem('cp_profile');
      if (isSupabaseConfigured()) {
        const supabase = createClient();
        await supabase.auth.signOut();
      }
    } catch {}
  };

  // Sync state from localStorage & Supabase on initial mount
  useEffect(() => {
    // 1. Immediate local cache retrieval
    try {
      const storedRole = localStorage.getItem('cp_role') as UserRole | null;
      const storedProfile = localStorage.getItem('cp_profile');

      if (storedRole === 'faculty' || (storedRole as any) === 'admin') {
        setUserRole('faculty');
        setCurrentUser(facultyProfile);
      } else if (storedRole === 'guest' || (storedRole as any) === 'visitor') {
        setUserRole('guest');
        setCurrentUser(null);
      } else {
        setUserRole('student');
        if (storedProfile) {
          try {
            setCurrentUser(JSON.parse(storedProfile));
          } catch {
            setCurrentUser(studentProfile);
          }
        } else {
          setCurrentUser(studentProfile);
        }
      }

      const storedAttempts = localStorage.getItem('cp_attempts');
      if (storedAttempts) {
        setAttempts(JSON.parse(storedAttempts));
      }

      const storedExams = localStorage.getItem('cp_exams');
      if (storedExams) {
        setExams(JSON.parse(storedExams));
      }

      const storedJobs = localStorage.getItem('cp_jobs');
      if (storedJobs) {
        setJobs(JSON.parse(storedJobs));
      }

      const storedNews = localStorage.getItem('cp_newsletters');
      if (storedNews) {
        const parsed: Newsletter[] = JSON.parse(storedNews);
        const merged = parsed.map((item) => {
          const defaultItem = mockNewsletters.find((m) => m.id === item.id || m.edition_no === item.edition_no);
          return {
            ...item,
            cover_image: item.cover_image || defaultItem?.cover_image || 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
            category: item.category || defaultItem?.category || 'Tech Trends',
          };
        });
        setNewsletters(merged);
      }

      const storedResources = localStorage.getItem('cp_resources');
      if (storedResources) {
        setResources(JSON.parse(storedResources));
      }
    } catch {
      // Ignore localStorage errors in restricted browsing
    }

    // 2. Live Supabase database synchronization
    if (isSupabaseConfigured()) {
      setIsSupabaseConnected(true);
      const hydrateFromSupabase = async () => {
        try {
          const supabase = createClient();

          // Setup real-time auth state listener
          const { data: authSubscription } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user) {
              let { data: profile } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();

              if (!profile) {
                const newProfile = {
                  id: session.user.id,
                  email: session.user.email || '',
                  full_name:
                    session.user.user_metadata?.full_name ||
                    session.user.user_metadata?.name ||
                    session.user.email?.split('@')[0] ||
                    'Student User',
                  avatar_url:
                    session.user.user_metadata?.avatar_url ||
                    session.user.user_metadata?.picture ||
                    '',
                  role: 'student',
                  branch: 'Computer Science & Engineering',
                  batch_year: 2026,
                  cgpa: 8.5,
                };
                await supabase.from('profiles').upsert(newProfile, { onConflict: 'id' });
                profile = newProfile as any;
              }

              if (profile) {
                const mappedUser: UserProfile = {
                  id: profile.id,
                  email: profile.email,
                  full_name: profile.full_name,
                  role: profile.role || 'student',
                  branch: profile.branch || 'Computer Science & Engineering',
                  batch_year: profile.batch_year || 2026,
                  cgpa: Number(profile.cgpa) || 8.5,
                  roll_number: profile.roll_number || '4SF22CS014',
                  avatar_url: profile.avatar_url,
                };
                setCurrentUser(mappedUser);
                setUserRole(profile.role || 'student');
                try {
                  localStorage.setItem('cp_role', profile.role || 'student');
                  localStorage.setItem('cp_profile', JSON.stringify(mappedUser));
                } catch {}
              }
            } else if (event === 'SIGNED_OUT') {
              setCurrentUser(null);
              setUserRole('guest');
              try {
                localStorage.setItem('cp_role', 'guest');
                localStorage.removeItem('cp_profile');
              } catch {}
            }
          });

          // Check active auth session
          const { data: sessionData } = await supabase.auth.getSession();
          if (sessionData?.session?.user) {
            let { data: profile } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', sessionData.session.user.id)
              .single();

            if (!profile) {
              const newProfile = {
                id: sessionData.session.user.id,
                email: sessionData.session.user.email || '',
                full_name:
                  sessionData.session.user.user_metadata?.full_name ||
                  sessionData.session.user.user_metadata?.name ||
                  sessionData.session.user.email?.split('@')[0] ||
                  'Student User',
                avatar_url:
                  sessionData.session.user.user_metadata?.avatar_url ||
                  sessionData.session.user.user_metadata?.picture ||
                  '',
                role: 'student',
                branch: 'Computer Science & Engineering',
                batch_year: 2026,
                cgpa: 8.5,
              };
              await supabase.from('profiles').upsert(newProfile, { onConflict: 'id' });
              profile = newProfile as any;
            }

            if (profile) {
              setCurrentUser({
                id: profile.id,
                email: profile.email,
                full_name: profile.full_name,
                role: profile.role || 'student',
                branch: profile.branch || 'Computer Science & Engineering',
                batch_year: profile.batch_year || 2026,
                cgpa: Number(profile.cgpa) || 8.5,
                roll_number: profile.roll_number || '4SF22CS014',
                avatar_url: profile.avatar_url,
              });
              setUserRole(profile.role || 'student');
            }
          }

          // Hydrate Exams with embedded Questions from Supabase
          let { data: examsData, error: examsErr } = await supabase
            .from('exams')
            .select('*, questions(*)');

          // If Supabase database is connected but has zero exams and has not been seeded yet, auto-upload seed data in background!
          let isAlreadySeeded = false;
          try {
            isAlreadySeeded = Boolean(localStorage.getItem('cp_supabase_auto_seeded'));
          } catch {}

          if (!examsErr && (!examsData || examsData.length === 0) && !isAlreadySeeded) {
            await autoUploadSeedDataToSupabase(supabase);
            const refetched = await supabase.from('exams').select('*, questions(*)');
            examsData = refetched.data;
          }

          if (!examsErr && examsData && examsData.length > 0) {
            const formattedExams: Exam[] = examsData.map((e: any) => ({
              id: e.id,
              title: e.title,
              category: e.category,
              company_tag: e.company_tag,
              description: e.description,
              duration_minutes: e.duration_minutes,
              total_marks: e.total_marks,
              passing_percentage: Number(e.passing_percentage),
              difficulty: e.difficulty,
              is_published: e.is_published,
              question_count: e.questions?.length || 0,
              created_at: e.created_at,
              questions: (e.questions || []).map((q: any) => ({
                id: q.id,
                exam_id: q.exam_id,
                question_text: q.question_text,
                options: Array.isArray(q.options) ? q.options : JSON.parse(q.options || '[]'),
                correct_index: q.correct_index,
                explanation: q.explanation,
                topic_tag: q.topic_tag,
              })),
            }));
            setExams(formattedExams);
            try {
              localStorage.setItem('cp_exams', JSON.stringify(formattedExams));
            } catch {}
          }

          // Hydrate Jobs from Supabase
          const { data: jobsData, error: jobsErr } = await supabase
            .from('jobs')
            .select('*')
            .order('created_at', { ascending: false });
          if (!jobsErr && jobsData && jobsData.length > 0) {
            const formattedJobs: Job[] = jobsData.map((j: any) => ({
              id: j.id,
              company_name: j.company_name,
              company_logo_url: j.company_logo_url,
              role_title: j.role_title,
              ctc: j.ctc,
              location: j.location,
              job_type: j.job_type,
              eligibility: j.eligibility,
              eligible_branches: j.eligible_branches || ['CSE', 'ISE', 'ECE'],
              batch_year: j.batch_year,
              min_cgpa: Number(j.min_cgpa),
              deadline: j.deadline,
              apply_url: j.apply_url,
              is_active: j.is_active,
              created_at: j.created_at,
            }));
            setJobs(formattedJobs);
            try {
              localStorage.setItem('cp_jobs', JSON.stringify(formattedJobs));
            } catch {}
          }

          // Hydrate Newsletters from Supabase
          const { data: newsData, error: newsErr } = await supabase
            .from('newsletters')
            .select('*')
            .order('edition_no', { ascending: false });
          if (!newsErr && newsData && newsData.length > 0) {
            const formattedNews: Newsletter[] = newsData.map((n: any) => ({
              id: n.id,
              edition_no: n.edition_no,
              title: n.title,
              summary: n.summary,
              content_markdown: n.content_markdown,
              tags: n.tags || [],
              read_time: n.read_time,
              publish_date: n.publish_date,
              author_name: n.author_name || 'Placement Director',
            }));
            setNewsletters(formattedNews);
            try {
              localStorage.setItem('cp_newsletters', JSON.stringify(formattedNews));
            } catch {}
          }

          // Hydrate Resources from Supabase
          const { data: resData, error: resErr } = await supabase
            .from('resources')
            .select('*')
            .order('created_at', { ascending: false });
          if (!resErr && resData && resData.length > 0) {
            const formattedResources: Resource[] = resData.map((r: any) => ({
              id: r.id,
              title: r.title,
              category: r.category,
              file_url: r.file_url,
              description: r.description,
              tags: r.tags || [],
              file_type: r.file_type,
              download_count: r.download_count || 0,
              content_preview: r.content_preview,
            }));
            setResources(formattedResources);
            try {
              localStorage.setItem('cp_resources', JSON.stringify(formattedResources));
            } catch {}
          }

          // Hydrate Exam Attempts from Supabase
          const { data: attData, error: attErr } = await supabase
            .from('exam_attempts')
            .select('*')
            .order('completed_at', { ascending: false });
          if (!attErr && attData && attData.length > 0) {
            const formattedAttempts: ExamAttempt[] = attData.map((a: any) => ({
              id: a.id,
              exam_id: a.exam_id,
              user_id: a.user_id,
              score: Number(a.score),
              total_questions: a.total_questions,
              correct_count: a.correct_count,
              incorrect_count: a.incorrect_count,
              unattempted_count: a.unattempted_count,
              accuracy_percentage: Number(a.accuracy_percentage),
              percentile_estimate: Number(a.percentile_estimate),
              time_taken_seconds: a.time_taken_seconds,
              answers: a.answers || {},
              completed_at: a.completed_at,
            }));
            setAttempts(formattedAttempts);
            try {
              localStorage.setItem('cp_attempts', JSON.stringify(formattedAttempts));
            } catch {}
          }
        } catch {
          // Graceful fallback to local seed data
        }
      };

      hydrateFromSupabase();
    }
  }, []);

  const switchRole = (role: UserRole) => {
    setUserRole(role);
    try {
      localStorage.setItem('cp_role', role);
    } catch {}

    if (role === 'faculty') {
      setCurrentUser(facultyProfile);
    } else if (role === 'student') {
      setCurrentUser(studentProfile);
    } else {
      setCurrentUser(null);
    }
  };

  const recordAttempt = (
    attemptData: Omit<ExamAttempt, 'id' | 'completed_at' | 'percentile_estimate'>
  ): ExamAttempt => {
    const accuracy =
      attemptData.total_questions > 0
        ? Math.round((attemptData.correct_count / attemptData.total_questions) * 100)
        : 0;

    const newAttemptId = `att-${Date.now()}`;
    const newAttempt: ExamAttempt = {
      ...attemptData,
      id: newAttemptId,
      accuracy_percentage: accuracy,
      percentile_estimate: calculatePercentile(accuracy),
      completed_at: new Date().toISOString(),
    };

    setAttempts((prev) => {
      const updated = [newAttempt, ...prev];
      try {
        localStorage.setItem('cp_attempts', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('exam_attempts').insert({
          id: newAttemptId,
          exam_id: attemptData.exam_id,
          user_id: attemptData.user_id,
          score: attemptData.score,
          total_questions: attemptData.total_questions,
          correct_count: attemptData.correct_count,
          incorrect_count: attemptData.incorrect_count,
          unattempted_count: attemptData.unattempted_count,
          accuracy_percentage: accuracy,
          percentile_estimate: newAttempt.percentile_estimate,
          time_taken_seconds: attemptData.time_taken_seconds,
          answers: attemptData.answers,
          completed_at: newAttempt.completed_at,
        });
      });
    }

    return newAttempt;
  };

  const addExam = (examData: Omit<Exam, 'id'>): Exam => {
    const newExamId = `exam-${Date.now()}`;
    const newExam: Exam = {
      ...examData,
      id: newExamId,
      created_at: new Date().toISOString(),
    };
    setExams((prev) => {
      const updated = [newExam, ...prev];
      try {
        localStorage.setItem('cp_exams', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('exams').insert({
          id: newExamId,
          title: examData.title,
          category: examData.category,
          company_tag: examData.company_tag || 'General',
          description: examData.description,
          duration_minutes: examData.duration_minutes,
          total_marks: examData.total_marks || 15,
          passing_percentage: examData.passing_percentage || 60,
          difficulty: examData.difficulty,
          is_published: examData.is_published,
        });

        if (examData.questions && examData.questions.length > 0) {
          const questionsToInsert = examData.questions.map((q, idx) => ({
            id: q.id || `q-${newExamId}-${idx + 1}`,
            exam_id: newExamId,
            question_text: q.question_text,
            options: q.options,
            correct_index: q.correct_index,
            explanation: q.explanation,
            topic_tag: q.topic_tag || 'General',
          }));
          await supabase.from('questions').insert(questionsToInsert);
        }
      });
    }

    return newExam;
  };

  const deleteExam = (id: string) => {
    setExams((prev) => {
      const updated = prev.filter((e) => e.id !== id);
      try {
        localStorage.setItem('cp_exams', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('questions').delete().eq('exam_id', id);
        await supabase.from('exams').delete().eq('id', id);
      });
    }
  };

  const deleteQuestion = (examId: string, questionId: string) => {
    setExams((prev) => {
      const updated = prev.map((exam) => {
        if (exam.id !== examId) return exam;
        const remainingQuestions = (exam.questions || []).filter((q) => q.id !== questionId);
        return {
          ...exam,
          questions: remainingQuestions,
          question_count: remainingQuestions.length,
        };
      });
      try {
        localStorage.setItem('cp_exams', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('questions').delete().eq('id', questionId);
      });
    }
  };

  const addJob = (jobData: Omit<Job, 'id'>): Job => {
    const newJobId = `job-${Date.now()}`;
    const newJob: Job = {
      ...jobData,
      id: newJobId,
      created_at: new Date().toISOString(),
    };
    setJobs((prev) => {
      const updated = [newJob, ...prev];
      try {
        localStorage.setItem('cp_jobs', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('jobs').insert({
          id: newJobId,
          company_name: jobData.company_name,
          company_logo_url: jobData.company_logo_url || null,
          role_title: jobData.role_title,
          ctc: jobData.ctc,
          location: jobData.location,
          job_type: jobData.job_type,
          eligibility: jobData.eligibility,
          eligible_branches: jobData.eligible_branches,
          batch_year: jobData.batch_year,
          min_cgpa: jobData.min_cgpa,
          deadline: jobData.deadline,
          apply_url: jobData.apply_url,
          is_active: jobData.is_active,
        });
      });
    }

    return newJob;
  };

  const toggleJobStatus = (id: string) => {
    let nextStatus = false;
    setJobs((prev) => {
      const updated = prev.map((j) => {
        if (j.id === id) {
          nextStatus = !j.is_active;
          return { ...j, is_active: nextStatus };
        }
        return j;
      });
      try {
        localStorage.setItem('cp_jobs', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('jobs').update({ is_active: nextStatus }).eq('id', id);
      });
    }
  };

  const deleteJob = (id: string) => {
    setJobs((prev) => {
      const updated = prev.filter((j) => j.id !== id);
      try {
        localStorage.setItem('cp_jobs', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('jobs').delete().eq('id', id);
      });
    }
  };

  const addNewsletter = (data: Omit<Newsletter, 'id'>): Newsletter => {
    const newNewsletterId = `news-${Date.now()}`;
    const newNewsletter: Newsletter = {
      ...data,
      id: newNewsletterId,
    };
    setNewsletters((prev) => {
      const updated = [newNewsletter, ...prev];
      try {
        localStorage.setItem('cp_newsletters', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('newsletters').insert({
          id: newNewsletterId,
          edition_no: data.edition_no,
          title: data.title,
          summary: data.summary,
          content_markdown: data.content_markdown,
          tags: data.tags,
          read_time: data.read_time,
          publish_date: data.publish_date,
          author_name: data.author_name || 'Placement Director',
        });
      });
    }

    return newNewsletter;
  };

  const deleteNewsletter = (id: string) => {
    setNewsletters((prev) => {
      const updated = prev.filter((n) => n.id !== id);
      try {
        localStorage.setItem('cp_newsletters', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('newsletters').delete().eq('id', id);
      });
    }
  };

  const addResource = (data: Omit<Resource, 'id' | 'download_count'>): Resource => {
    const newResourceId = `res-${Date.now()}`;
    const newResource: Resource = {
      ...data,
      id: newResourceId,
      download_count: 0,
    };
    setResources((prev) => {
      const updated = [newResource, ...prev];
      try {
        localStorage.setItem('cp_resources', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('resources').insert({
          id: newResourceId,
          title: data.title,
          category: data.category,
          file_url: data.file_url,
          description: data.description,
          tags: data.tags,
          file_type: data.file_type,
          download_count: 0,
          content_preview: data.content_preview || null,
        });
      });
    }

    return newResource;
  };

  const deleteResource = (id: string) => {
    setResources((prev) => {
      const updated = prev.filter((r) => r.id !== id);
      try {
        localStorage.setItem('cp_resources', JSON.stringify(updated));
      } catch {}
      return updated;
    });

    if (isSupabaseConfigured()) {
      safeRun(async () => {
        const supabase = createClient();
        await supabase.from('resources').delete().eq('id', id);
      });
    }
  };

  // One-click batch sync from local datasets to live Supabase Cloud Database
  const syncAllToSupabase = async (): Promise<{ success: boolean; count: number; error?: string }> => {
    if (!isSupabaseConfigured()) {
      return { success: false, count: 0, error: 'Supabase credentials not configured in .env.local' };
    }

    setIsSyncing(true);
    const supabase = createClient();
    let totalCount = 0;

    try {
      // 1. Sync Exams & Questions
      for (const exam of exams) {
        const { error: examErr } = await supabase.from('exams').upsert({
          id: exam.id,
          title: exam.title,
          category: exam.category,
          company_tag: exam.company_tag || 'General',
          description: exam.description,
          duration_minutes: exam.duration_minutes,
          total_marks: exam.total_marks || 15,
          passing_percentage: exam.passing_percentage || 60,
          difficulty: exam.difficulty,
          is_published: exam.is_published,
        });

        if (!examErr) {
          totalCount++;
          if (exam.questions && exam.questions.length > 0) {
            const questionsPayload = exam.questions.map((q) => ({
              id: q.id,
              exam_id: exam.id,
              question_text: q.question_text,
              options: q.options,
              correct_index: q.correct_index,
              explanation: q.explanation,
              topic_tag: q.topic_tag || 'General',
            }));
            await supabase.from('questions').upsert(questionsPayload);
          }
        }
      }

      // 2. Sync Jobs
      for (const job of jobs) {
        const { error: jobErr } = await supabase.from('jobs').upsert({
          id: job.id,
          company_name: job.company_name,
          company_logo_url: job.company_logo_url || null,
          role_title: job.role_title,
          ctc: job.ctc,
          location: job.location,
          job_type: job.job_type,
          eligibility: job.eligibility,
          eligible_branches: job.eligible_branches,
          batch_year: job.batch_year,
          min_cgpa: job.min_cgpa,
          deadline: job.deadline,
          apply_url: job.apply_url,
          is_active: job.is_active,
        });
        if (!jobErr) totalCount++;
      }

      // 3. Sync Newsletters
      for (const nl of newsletters) {
        const { error: nlErr } = await supabase.from('newsletters').upsert({
          id: nl.id,
          edition_no: nl.edition_no,
          title: nl.title,
          summary: nl.summary,
          content_markdown: nl.content_markdown,
          tags: nl.tags,
          read_time: nl.read_time,
          publish_date: nl.publish_date,
          author_name: nl.author_name || 'Placement Director',
        });
        if (!nlErr) totalCount++;
      }

      // 4. Sync Resources
      for (const res of resources) {
        const { error: resErr } = await supabase.from('resources').upsert({
          id: res.id,
          title: res.title,
          category: res.category,
          file_url: res.file_url,
          description: res.description,
          tags: res.tags,
          file_type: res.file_type,
          download_count: res.download_count,
          content_preview: res.content_preview || null,
        });
        if (!resErr) totalCount++;
      }

      setIsSyncing(false);
      return { success: true, count: totalCount };
    } catch (err: any) {
      setIsSyncing(false);
      return { success: false, count: totalCount, error: err?.message || 'Error syncing data to Supabase' };
    }
  };

  // Calculate dynamic readiness KPIs
  const totalQuestionsAnswered = attempts.reduce((acc, curr) => acc + curr.total_questions, 0);
  const totalCorrect = attempts.reduce((acc, curr) => acc + curr.correct_count, 0);
  const overallAccuracy =
    totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 78;

  // Calculate section scores
  const quantAttempts = attempts.filter((a) => a.category === 'Quantitative');
  const logicalAttempts = attempts.filter((a) => a.category === 'Logical Reasoning');
  const verbalAttempts = attempts.filter((a) => a.category === 'Verbal Ability');

  const calcSectionAvg = (sectionAttempts: ExamAttempt[], defaultVal: number) => {
    if (sectionAttempts.length === 0) return defaultVal;
    const sum = sectionAttempts.reduce((acc, a) => acc + a.accuracy_percentage, 0);
    return Math.round(sum / sectionAttempts.length);
  };

  const readinessScores: ReadinessScore = {
    quantitative: calcSectionAvg(quantAttempts, 82),
    logical: calcSectionAvg(logicalAttempts, 94),
    verbal: calcSectionAvg(verbalAttempts, 68),
    overall: overallAccuracy,
    streak_days: 7,
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userRole,
        switchRole,
        isAuthDrawerOpen,
        authRedirectUrl,
        openAuthDrawer,
        closeAuthDrawer,
        loginAsStudent,
        loginAsFaculty,
        loginWithGoogle,
        loginWithPassword,
        signUpWithPassword,
        logout,
        exams,
        jobs,
        newsletters,
        resources,
        attempts,
        recordAttempt,
        addExam,
        deleteExam,
        deleteQuestion,
        addJob,
        toggleJobStatus,
        deleteJob,
        addNewsletter,
        deleteNewsletter,
        addResource,
        deleteResource,
        readinessScores,
        overallAccuracy,
        isSupabaseConnected,
        isSyncing,
        syncAllToSupabase,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
