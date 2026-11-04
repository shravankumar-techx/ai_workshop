'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Briefcase,
  Newspaper,
  CheckCircle2,
  Building2,
  Clock,
  ChevronRight,
  Bot,
} from 'lucide-react';
import { useApp } from '@/lib/store';

export default function HomePage() {
  const router = useRouter();
  const { exams, newsletters, userRole, openAuthDrawer } = useApp();

  const requireAuth = (target: 'exams' | 'drives') => {
    const dest = target === 'exams' ? '/exams' : '/jobs';
    if (userRole === 'guest') {
      openAuthDrawer(dest);
    } else {
      router.push(dest);
    }
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen">
      {/* Subtle Ambient Emerald Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-0 w-[500px] h-[500px] bg-teal-500/5 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Top Status Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>2026 Campus Placement & Career Preparation Suite</span>
          <span className="text-emerald-300">•</span>
          <span className="text-emerald-700 font-bold">Gemini Powered</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-tight">
          Master Campus Drives <br className="hidden sm:inline" />
          with <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">Precision Intelligence</span>
        </h1>

        {/* Synced Copy */}
        <p className="mt-5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          The enterprise-grade portal for engineering students: 30 timed aptitude mock tests, verified placement listings, weekly industry market intelligence, and instant AI doubt resolution.
        </p>

        {/* Two-Button Action Hierarchy */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => requireAuth('exams')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <span>Start Free Mock Exam</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => requireAuth('drives')}
            className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 bg-white text-slate-700 font-semibold text-sm shadow-xs transition cursor-pointer active:scale-95"
          >
            Browse 2026 Job Drives
          </button>
        </div>

        {/* 4 Synchronized KPI Cards */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div
            onClick={() => requireAuth('exams')}
            className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">30 Exams</div>
              <p className="text-xs text-slate-500 mt-0.5">Aptitude Mock Exams</p>
            </div>
            <div className="mt-3 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
              <span>✓ 350+ Questions</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">₹44.5 LPA</div>
              <p className="text-xs text-slate-500 mt-0.5">Highest Package</p>
            </div>
            <div className="mt-3 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
              <span>✓ Microsoft Cloud</span>
            </div>
          </div>

          <div
            onClick={() => requireAuth('drives')}
            className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="text-2xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">18 Active</div>
              <p className="text-xs text-slate-500 mt-0.5">Verified Campus Drives</p>
            </div>
            <div className="mt-3 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
              <span>✓ 2026 Batch</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">92.4%</div>
              <p className="text-xs text-slate-500 mt-0.5">Placement Selection Rate</p>
            </div>
            <div className="mt-3 text-[11px] font-medium text-emerald-700 flex items-center gap-1">
              <span>✓ Top Tier GCCs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Marquee / Trusted By */}
      <section className="py-8 border-y border-slate-200 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            Trusted by Engineering Students Placed at Global Technology Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-90 hover:opacity-100 transition-opacity">
            {['Microsoft', 'Google', 'Amazon', 'Atlassian', 'Goldman Sachs', 'Cisco', 'TCS Digital', 'Infosys'].map(
              (company, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-bold text-sm tracking-wide transition">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  <span>{company}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered for Placement Excellence
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Everything engineering students need to qualify cognitive tests, crack technical interviews, and negotiate top-tier compensation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-6 relative group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">30 MCQ Mock Exam Engine</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Comprehensive test engine covering Quantitative, Logical Reasoning, Verbal Ability, Company Drives, and authentic Japanese JLPT N5 tests.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Distraction-free player with live countdown timer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant percentile estimation & accuracy report</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Step-by-step solution explanations for every MCQ</span>
              </li>
            </ul>
            <button
              onClick={() => requireAuth('exams')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all cursor-pointer"
            >
              <span>Explore all 30 exams</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-6 relative group">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 mb-5 group-hover:scale-105 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">Verified Jobs & Drives</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              Curated placement board with verified cutoff criteria, eligible branches, compensation CTC breakdown, and direct application links.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>On-campus and high-pay off-campus listings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Filter by Minimum CGPA, Batch Year & Role</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Live countdown timer to application deadlines</span>
              </li>
            </ul>
            <button
              onClick={() => requireAuth('drives')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 group-hover:translate-x-1 transition-all cursor-pointer"
            >
              <span>View active job openings</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-2xl p-6 relative group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-105 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">Gemini Placement AI</h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-4">
              24/7 intelligent career assistant capable of breaking down complex math shortcuts, HR STAR method answers, and 30-day DSA roadmaps.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant speed-math tricks for aptitude problems</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>ATS Google X-Y-Z resume bullet suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Offline intelligent NLP fallback engine</span>
              </li>
            </ul>
            <button
              onClick={() => {
                const btn = document.getElementById('open-placement-bot-btn');
                btn?.click();
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all cursor-pointer"
            >
              <span>Launch PlacementBot drawer</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Exams Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border border-slate-200 rounded-3xl mb-16 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              Mock Exam Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Aptitude & Company Assessments
            </h2>
          </div>
          <button
            onClick={() => requireAuth('exams')}
            className="flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition cursor-pointer"
          >
            <span>View all 30 tests</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {exams.slice(0, 4).map((exam) => (
            <div
              key={exam.id}
              className="rounded-2xl p-5 bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-emerald-500/40 hover:shadow-md transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {exam.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{exam.duration_minutes}m</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {exam.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">{exam.questions?.length || 5} Questions</span>
                <button
                  onClick={() => {
                    if (userRole === 'guest') {
                      openAuthDrawer(`/exams/${exam.id}`);
                    } else {
                      router.push(`/exams/${exam.id}`);
                    }
                  }}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition active:scale-95 cursor-pointer"
                >
                  Start Test
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Newsletter Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4 shadow-xs">
              <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
              <span>Issue #{newsletters[0]?.edition_no || 24} Published This Week</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              {newsletters[0]?.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {newsletters[0]?.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/newsletters"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition shadow-md shadow-emerald-600/20"
              >
                Read Full Newsletter
              </Link>
              <Link
                href="/newsletters"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition"
              >
                Browse Newsletter Archive ({newsletters.length} Editions) →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
