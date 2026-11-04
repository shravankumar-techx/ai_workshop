'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  GraduationCap,
  ShieldCheck,
  X,
  Mail,
  FileBadge,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { useApp, studentProfile, facultyProfile } from '@/lib/store';

export default function AuthDrawer() {
  const router = useRouter();
  const {
    isAuthDrawerOpen,
    closeAuthDrawer,
    loginAsStudent,
    loginAsFaculty,
    loginWithGoogle,
    authRedirectUrl,
  } = useApp();

  const [authMode, setAuthMode] = useState<'student' | 'faculty'>('student');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [oauthError, setOauthError] = useState<string | null>(null);

  // Student inputs
  const [studentEmail, setStudentEmail] = useState(studentProfile.email);
  const [studentUsn, setStudentUsn] = useState(studentProfile.roll_number || '4SF22CS014');

  // Faculty inputs
  const [facultyId, setFacultyId] = useState(facultyProfile.faculty_id || 'FAC-CSE-2026');
  const [securityKey, setSecurityKey] = useState('PLACEMENT@2026');

  if (!isAuthDrawerOpen) return null;

  const handleGoogleClick = async () => {
    setIsGoogleLoading(true);
    setOauthError(null);
    const target = authRedirectUrl || '/dashboard/student';
    const res = await loginWithGoogle(target);
    if (res.error) {
      setIsGoogleLoading(false);
      setOauthError(res.error);
    }
  };

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAsStudent(studentEmail, studentUsn);
    if (authRedirectUrl) {
      router.push(authRedirectUrl);
    } else {
      router.push('/dashboard/student');
    }
  };

  const handleFacultySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAsFaculty(facultyId, securityKey);
    if (authRedirectUrl) {
      router.push(authRedirectUrl);
    } else {
      router.push('/dashboard/faculty');
    }
  };

  const fillStudentDemo = () => {
    setStudentEmail('aditya.verma26@campus.edu');
    setStudentUsn('4SF22CS014');
  };

  const fillFacultyDemo = () => {
    setFacultyId('FAC-CSE-2026');
    setSecurityKey('PLACEMENT@2026');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Blurred Backdrop */}
      <div
        onClick={closeAuthDrawer}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Side Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-10 animate-in slide-in-from-right duration-300">
        <div>
          {/* Drawer Header */}
          <div className="p-6 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xs transition-colors ${
                  authMode === 'student'
                    ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                    : 'bg-amber-600 text-white shadow-amber-600/20'
                }`}
              >
                {authMode === 'student' ? (
                  <GraduationCap className="w-5 h-5" />
                ) : (
                  <ShieldCheck className="w-5 h-5" />
                )}
              </div>
              <div>
                <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                  CampusPrep Portal Gate
                </h2>
                <p className="text-[11px] text-slate-500">
                  {authRedirectUrl
                    ? 'Authentication required to proceed'
                    : 'Select your operational institutional role'}
                </p>
              </div>
            </div>

            <button
              onClick={closeAuthDrawer}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition cursor-pointer"
              title="Close drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented Role Switcher */}
          <div className="p-6 pb-2">
            <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200 grid grid-cols-2 gap-1">
              <button
                type="button"
                onClick={() => setAuthMode('student')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  authMode === 'student'
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Student Login</span>
              </button>

              <button
                type="button"
                onClick={() => setAuthMode('faculty')}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  authMode === 'faculty'
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Faculty Portal</span>
              </button>
            </div>
          </div>

          {/* Authentication Forms */}
          <div className="p-6 space-y-4">
            {oauthError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-[11px] leading-relaxed">
                {oauthError}
              </div>
            )}

            {authMode === 'student' ? (
              <div className="space-y-4">
                {/* Real Google GAuth Button */}
                <button
                  type="button"
                  onClick={handleGoogleClick}
                  disabled={isGoogleLoading}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 bg-white hover:bg-slate-50 disabled:opacity-70 text-slate-700 font-semibold rounded-xl text-xs transition shadow-xs active:scale-[0.98] border border-slate-300 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
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
                  <span>Continue with Google (Campus SSO)</span>
                </button>

                <div className="relative my-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center text-[10px] uppercase font-mono">
                    <span className="bg-white px-2 text-slate-500">
                      Or University USN Login
                    </span>
                  </div>
                </div>

                <form onSubmit={handleStudentSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5 flex items-center justify-between">
                      <span>University Email / Gmail</span>
                      <button
                        type="button"
                        onClick={fillStudentDemo}
                        className="text-[10px] text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1 font-mono cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" /> Quick Demo
                      </button>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                        placeholder="e.g. aditya.verma26@campus.edu"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1.5">
                      USN / University Registration Roll Number
                    </label>
                    <div className="relative">
                      <FileBadge className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={studentUsn}
                        onChange={(e) => setStudentUsn(e.target.value)}
                        placeholder="e.g. 4SF22CS014"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 leading-relaxed space-y-1">
                    <div className="font-semibold flex items-center gap-1.5 text-emerald-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Student Privileges:</span>
                    </div>
                    <p>
                      Full access to 30 mock exams, Japanese JLPT N5 tests, aptitude analytics, verified 2026 drives, and AptiBot.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition active:scale-[0.98] cursor-pointer"
                  >
                    <span>Authenticate Student Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <form onSubmit={handleFacultySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5 flex items-center justify-between">
                    <span>Faculty Institutional ID</span>
                    <button
                      type="button"
                      onClick={fillFacultyDemo}
                      className="text-[10px] text-amber-600 hover:text-amber-700 hover:underline flex items-center gap-1 font-mono cursor-pointer"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-amber-500 transition"
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
                      value={securityKey}
                      onChange={(e) => setSecurityKey(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-slate-900 font-mono focus:bg-white focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800 leading-relaxed space-y-1">
                  <div className="font-semibold flex items-center gap-1.5 text-amber-900">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Faculty / Administrator Privileges:</span>
                  </div>
                  <p>
                    Full administrative privileges to deploy JSON exams, edit MCQ question banks, post recruitment drives, and publish daily digests.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs shadow-md shadow-amber-600/20 transition active:scale-[0.98] cursor-pointer"
                >
                  <span>Verify & Enter Faculty Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 text-center text-[11px] text-slate-500">
          Protected by Campus Directory & Supabase PostgreSQL RLS.
        </div>
      </div>
    </div>
  );
}
