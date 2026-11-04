'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  GraduationCap,
  ShieldCheck,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Eye,
  EyeOff,
  User,
} from 'lucide-react';
import { useApp, facultyProfile } from '@/lib/store';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextUrl = searchParams.get('next') || searchParams.get('redirect') || '';
  const initialError = searchParams.get('error') || '';

  const {
    loginWithGoogle,
    loginWithPassword,
    signUpWithPassword,
    loginAsStudent,
    loginAsFaculty,
    isSupabaseConnected,
  } = useApp();

  // Role Tab
  const [roleMode, setRoleMode] = useState<'student' | 'faculty'>('student');

  // Student Auth Mode: 'oauth' | 'credentials' | 'register'
  const [authSubMode, setAuthSubMode] = useState<'oauth' | 'credentials' | 'register'>('oauth');

  // Credentials State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Faculty State
  const [facultyId, setFacultyId] = useState(facultyProfile.faculty_id || 'FAC-CSE-2026');
  const [facultyKey, setFacultyKey] = useState('PLACEMENT@2026');

  // UI State
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialError);
  const [successMessage, setSuccessMessage] = useState('');

  // 1. Google OAuth (GAuth) Real Implementation
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const targetUrl = nextUrl || (roleMode === 'faculty' ? '/dashboard/faculty' : '/dashboard/student');
    const result = await loginWithGoogle(targetUrl);

    if (result.error) {
      setErrorMessage(result.error);
      setIsLoading(false);
    }
  };

  // 2. Email / Password Database Submit
  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    if (authSubMode === 'register') {
      const res = await signUpWithPassword(email, password, fullName);
      setIsLoading(false);
      if (res.error) {
        setErrorMessage(res.error);
      } else {
        setSuccessMessage('Student profile registered in database! Verification email sent (if enabled).');
        setTimeout(() => {
          router.push(nextUrl || '/dashboard/student');
        }, 1200);
      }
    } else {
      const res = await loginWithPassword(email, password);
      setIsLoading(false);
      if (res.error) {
        setErrorMessage(res.error);
      } else {
        setSuccessMessage('Signed in successfully! Redirecting...');
        setTimeout(() => {
          router.push(nextUrl || '/dashboard/student');
        }, 800);
      }
    }
  };

  // 3. Faculty Verification Submit
  const handleFacultySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    setTimeout(() => {
      loginAsFaculty(facultyId, facultyKey);
      setIsLoading(false);
      router.push(nextUrl || '/dashboard/faculty');
    }, 400);
  };

  // 4. One-Click Quick Demos
  const handleQuickDemoStudent = () => {
    loginAsStudent('aditya.verma26@campus.edu', '4SF22CS014');
    router.push(nextUrl || '/dashboard/student');
  };

  const handleQuickDemoFaculty = () => {
    loginAsFaculty('FAC-CSE-2026', 'PLACEMENT@2026');
    router.push(nextUrl || '/dashboard/faculty');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-md space-y-5">
        {/* Database Connection Status Badge */}
        <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs shadow-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-700 font-mono text-[11px] font-medium">
              {isSupabaseConnected ? 'Supabase PostgreSQL: Connected' : 'Supabase Client: Initialized'}
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[10px] border border-emerald-200">
            Auth v2.49
          </span>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xl relative overflow-hidden text-slate-900">
          {/* Header */}
          <div className="text-center space-y-2 mb-6 relative z-10">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md shadow-emerald-600/20 mx-auto">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                {roleMode === 'student' ? (
                  <GraduationCap className="w-6 h-6 text-emerald-600" />
                ) : (
                  <ShieldCheck className="w-6 h-6 text-amber-600" />
                )}
              </div>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              {roleMode === 'student' ? 'Student Sign In' : 'Faculty Access Gate'}
            </h1>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              {roleMode === 'student'
                ? 'Authenticate with Google GAuth or campus credentials to access mock tests and job drives.'
                : 'Authorized institutional portal for placement administration and test deployment.'}
            </p>
          </div>

          {/* Segmented Dual-Role Switcher */}
          <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200 grid grid-cols-2 gap-1 mb-6">
            <button
              type="button"
              onClick={() => {
                setRoleMode('student');
                setErrorMessage('');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                roleMode === 'student'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Student</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setRoleMode('faculty');
                setErrorMessage('');
              }}
              className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                roleMode === 'faculty'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Faculty Admin</span>
            </button>
          </div>

          {/* Alert Messages */}
          {errorMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">{successMessage}</div>
            </div>
          )}

          {roleMode === 'student' ? (
            <div className="space-y-5">
              {/* Primary Google OAuth (GAuth) Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-white hover:bg-slate-50 disabled:opacity-70 text-slate-700 font-semibold rounded-2xl text-xs sm:text-sm transition shadow-xs active:scale-[0.98] border border-slate-300 cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                <span>Continue with Google (Campus GAuth)</span>
              </button>

              {/* Sub-divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-mono">
                  <span className="bg-white px-2 text-slate-500 font-medium">
                    Or Supabase Database Auth
                  </span>
                </div>
              </div>

              {/* Credentials / Register Toggle */}
              <div className="flex items-center justify-between text-xs px-1">
                <span className="text-slate-500">
                  {authSubMode === 'register' ? 'Already registered?' : 'Need a new account?'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setAuthSubMode(authSubMode === 'register' ? 'credentials' : 'register');
                    setErrorMessage('');
                  }}
                  className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4 cursor-pointer"
                >
                  {authSubMode === 'register' ? 'Sign In with Password' : 'Create Student Account'}
                </button>
              </div>

              {/* Email & Password Form */}
              <form onSubmit={handleCredentialsSubmit} className="space-y-3.5 text-xs">
                {authSubMode === 'register' && (
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Aditya Verma"
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Campus Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. aditya.verma26@campus.edu"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-10 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition active:scale-[0.98] cursor-pointer"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <>
                      <span>{authSubMode === 'register' ? 'Register Student Profile' : 'Sign In with Database'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Instant Evaluator Demo Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleQuickDemoStudent}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Instant Student Evaluator Login
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Aditya Verma (CSE &apos;26, 8.85 CGPA)
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
                </button>
              </div>
            </div>
          ) : (
            /* Faculty Portal Form */
            <form onSubmit={handleFacultySubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-medium mb-1.5 flex items-center justify-between">
                  <span>Faculty Institutional ID</span>
                  <button
                    type="button"
                    onClick={() => {
                      setFacultyId('FAC-CSE-2026');
                      setFacultyKey('PLACEMENT@2026');
                    }}
                    className="text-[10px] text-amber-700 hover:underline flex items-center gap-1 font-mono cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3" /> Quick Demo
                  </button>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={facultyId}
                    onChange={(e) => setFacultyId(e.target.value)}
                    placeholder="e.g. FAC-CSE-2026 or rajesh.rao@campus.edu"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1.5">
                  Department Security Key
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={facultyKey}
                    onChange={(e) => setFacultyKey(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-relaxed space-y-1">
                <div className="font-semibold flex items-center gap-1.5 text-amber-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Faculty Privileges:</span>
                </div>
                <p>
                  Deploy custom JSON aptitude exams, delete outdated questions, post 2026 job drives, and curate weekly placement digests with auto-sync.
                </p>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs shadow-md shadow-amber-600/20 transition active:scale-[0.98] cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <>
                    <span>Verify & Enter Faculty Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleQuickDemoFaculty}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-left transition group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                      Instant Faculty Evaluator Login
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Dr. Rajesh Rao (Placement Director)
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
              </button>
            </form>
          )}

          {/* Footer note */}
          <div className="mt-6 pt-5 border-t border-slate-200 text-center">
            <p className="text-[11px] text-slate-500">
              Connected with Supabase Auth & PostgreSQL Database RLS Policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[80vh] flex items-center justify-center bg-slate-50">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-600" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
