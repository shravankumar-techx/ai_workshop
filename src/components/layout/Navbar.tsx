'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Newspaper,
  LayoutDashboard,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  LogIn,
  LogOut,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import AuthDrawer from '@/components/auth/AuthDrawer';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const {
    userRole,
    currentUser,
    openAuthDrawer,
    logout,
  } = useApp();

  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Mock Exams', href: '/exams', icon: BookOpen },
    { label: 'Verified Jobs', href: '/jobs', icon: Briefcase },
    { label: 'Weekly Newsletter', href: '/newsletters', icon: Newspaper },
    { label: 'Placement Resources', href: '/resources', icon: BookOpen },
  ];

  const handleDashboardClick = () => {
    if (userRole === 'faculty') {
      router.push('/dashboard/faculty');
    } else if (userRole === 'student') {
      router.push('/dashboard/student');
    } else {
      openAuthDrawer();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 p-0.5 shadow-md shadow-emerald-600/20 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold text-slate-900 tracking-tight">CampusPrep</span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 rounded">
                  Portal
                </span>
              </div>
              <p className="text-[10px] text-slate-500 hidden sm:block">Campus Career & Placement Suite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-800 bg-emerald-50 border border-emerald-200 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-80" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Faculty Portal Direct Link (only visible when in Faculty role) */}
            {userRole === 'faculty' && (
              <Link
                href="/dashboard/faculty"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname.startsWith('/dashboard/faculty') || pathname.startsWith('/dashboard/admin')
                    ? 'text-amber-900 bg-amber-50 border border-amber-300 shadow-xs'
                    : 'text-amber-800 hover:text-amber-950 hover:bg-amber-50/80'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>Faculty Suite</span>
              </Link>
            )}
          </nav>

          {/* Right Action: Dynamic Visual State & Role Indicator */}
          <div className="flex items-center gap-3">
            {/* 1. Unauthenticated Guest State */}
            {userRole === 'guest' && (
              <button
                onClick={() => openAuthDrawer()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition shadow-xs active:scale-95 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sign In</span>
              </button>
            )}

            {/* 2. Authenticated Student State */}
            {userRole === 'student' && (
              <div className="relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs font-medium text-emerald-800 hover:bg-emerald-100/60 transition shadow-xs cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-emerald-900">Student:</span>
                  <span className="hidden sm:inline text-emerald-800">{currentUser?.full_name?.split(' ')[0] || 'Student'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-emerald-700 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
                    <div className="px-3.5 py-2 border-b border-slate-100">
                      <div className="font-bold text-slate-900">{currentUser?.full_name || 'Aditya Verma'}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{currentUser?.roll_number || '4SF22CS014'}</div>
                    </div>

                    <Link
                      href="/dashboard/student"
                      onClick={() => setRoleDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                    >
                      <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                      <span>Student Analytics Hub</span>
                    </Link>

                    <Link
                      href="/exams"
                      onClick={() => setRoleDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Take Practice Exams</span>
                    </Link>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          logout();
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3.5 py-2 text-rose-600 hover:bg-rose-50 transition text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out (Guest View)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 3. Authenticated Faculty State */}
            {userRole === 'faculty' && (
              <div className="relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-300 text-xs font-semibold text-amber-800 hover:bg-amber-100/60 shadow-xs transition cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-amber-900">Faculty Suite</span>
                  <span className="hidden sm:inline text-amber-700 font-mono text-[11px]">(Panel)</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-amber-700 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white border border-amber-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs">
                    <div className="px-3.5 py-2 border-b border-amber-100 bg-amber-50/50">
                      <div className="font-bold text-amber-950">{currentUser?.full_name || 'Dr. Rajesh Rao'}</div>
                      <div className="text-[11px] text-amber-700">{currentUser?.branch || 'Placement Administration'}</div>
                    </div>

                    <Link
                      href="/dashboard/faculty"
                      onClick={() => setRoleDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                    >
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                      <span>Faculty Management Portal</span>
                    </Link>

                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          logout();
                          setRoleDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2 px-3.5 py-2 text-rose-600 hover:bg-rose-50 transition text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out (Guest View)</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quick Action Dashboard Button */}
            {userRole !== 'guest' && (
              <button
                onClick={handleDashboardClick}
                className="hidden sm:flex text-xs px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition shadow-md shadow-emerald-600/20 items-center gap-1.5 active:scale-95 cursor-pointer"
              >
                <span>Dashboard</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                >
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {userRole === 'student' && (
              <Link
                href="/dashboard/student"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-emerald-900 bg-emerald-50"
              >
                <LayoutDashboard className="w-4 h-4 text-emerald-600" />
                <span>Student Hub</span>
              </Link>
            )}

            {userRole === 'faculty' && (
              <Link
                href="/dashboard/faculty"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-amber-900 bg-amber-50"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Faculty Suite</span>
              </Link>
            )}

            {userRole === 'guest' && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthDrawer();
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In to Access Tests</span>
              </button>
            )}
          </div>
        )}
      </header>

      {/* Slide-over Side Login Drawer (Global access gate) */}
      <AuthDrawer />
    </>
  );
}
