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
  ChevronRight,
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
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
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
      <header className="sticky top-0 z-40 w-full bg-[#053324] border-b border-[#032419] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center p-0.5 overflow-hidden shrink-0">
              <img
                src="/images/sahyadri-crest.jpg"
                alt="Sahyadri Shield Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-white tracking-tight">SahyadriPrep</span>
                <span className="px-1.5 py-0.5 text-[11px] font-medium text-emerald-200/80 border border-emerald-300/20 rounded">
                  Portal
                </span>
              </div>
              <p className="text-[11px] text-emerald-100/70 hidden sm:block font-normal">Campus Career & Placement Suite</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white bg-white/10 border border-white/15'
                      : 'text-emerald-100/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-200/70'}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {/* Faculty Portal Direct Link (only visible when in Faculty role) */}
            {userRole === 'faculty' && (
              <Link
                href="/dashboard/faculty"
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname.startsWith('/dashboard/faculty') || pathname.startsWith('/dashboard/admin')
                    ? 'text-amber-100 bg-amber-500/20 border border-amber-400/30'
                    : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Faculty Suite</span>
              </Link>
            )}
          </nav>

          {/* Right Action: Dynamic Visual State & Role Indicator */}
          <div className="flex items-center gap-3">
            {/* 1. Unauthenticated Guest State (Tier-1 Role Selector Dropdown) */}
            {userRole === 'guest' && (
              <div className="relative">
                <button
                  onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white text-[#053324] hover:bg-emerald-50 transition-colors shadow-xs cursor-pointer border border-white/60"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#07865B]" />
                  <span>Log In</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-[#07865B] transition-transform ${guestDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {guestDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in duration-150 text-slate-900">
                    <div className="px-3.5 py-1 text-[11px] font-medium text-slate-500">
                      Sign in to your account
                    </div>

                    <button
                      onClick={() => {
                        setGuestDropdownOpen(false);
                        openAuthDrawer('/dashboard/student');
                      }}
                      className="w-full text-left flex items-start gap-3 px-3.5 py-2.5 hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-xs text-slate-900 group-hover:text-emerald-800">Student</span>
                          <span className="text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded">Saved role</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Take tests, practise company papers and view outcomes</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors shrink-0 mt-1" />
                    </button>

                    <button
                      onClick={() => {
                        setGuestDropdownOpen(false);
                        openAuthDrawer('/dashboard/faculty');
                      }}
                      className="w-full text-left flex items-start gap-3 px-3.5 py-2.5 hover:bg-slate-50 transition-colors group cursor-pointer"
                    >
                      <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-xs text-slate-900 group-hover:text-amber-800">College / Faculty</div>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Schedule tests, manage batches and view reports</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 transition-colors shrink-0 mt-1" />
                    </button>

                    <div className="mt-1 pt-2 border-t border-slate-100 px-3.5 pb-1 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>sahyadri.edu.in</span>
                      </span>
                      <span className="text-emerald-700 font-sans font-medium">Batch 2026</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 2. Authenticated Student State */}
            {userRole === 'student' && (
              <div className="relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-medium text-white transition-colors shadow-xs cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-medium text-white">Student:</span>
                  <span className="hidden sm:inline text-emerald-100">{currentUser?.full_name?.split(' ')[0] || 'Student'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-emerald-200 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs text-slate-900">
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
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/25 border border-amber-400/30 text-xs font-medium text-amber-100 shadow-xs transition-colors cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-300" />
                  <span className="text-white">Faculty</span>
                  <span className="hidden sm:inline text-amber-200/80 font-mono text-[11px]">(Panel)</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-amber-200 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-white border border-amber-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 text-xs text-slate-900">
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
                className="hidden sm:flex text-xs px-3.5 py-1.5 rounded-xl bg-white text-[#053324] hover:bg-emerald-50 font-semibold transition-colors shadow-xs items-center gap-1.5 cursor-pointer border border-white/60"
              >
                <span>Dashboard</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-xl cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#053324] border-b border-[#032419] px-4 pt-3 pb-5 space-y-1.5 shadow-lg text-white">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive ? 'bg-white/20 text-white' : 'text-emerald-100/90 hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-300" />
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {userRole === 'student' && (
              <Link
                href="/dashboard/student"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/15"
              >
                <LayoutDashboard className="w-4 h-4 text-emerald-300" />
                <span>Student Hub</span>
              </Link>
            )}

            {userRole === 'faculty' && (
              <Link
                href="/dashboard/faculty"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-200 bg-amber-500/20"
              >
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Faculty Suite</span>
              </Link>
            )}

            {userRole === 'guest' && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthDrawer();
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-[#044E39] hover:bg-emerald-50 cursor-pointer shadow-md"
              >
                <LogIn className="w-3.5 h-3.5 text-[#07865B]" />
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
