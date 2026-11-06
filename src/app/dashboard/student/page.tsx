'use client';

import React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Award,
  Flame,
  Target,
  ArrowRight,
  BookOpen,
  Briefcase,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  BarChart3,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { useApp, studentProfile } from '@/lib/store';
import { formatSecondsToTime, formatDate } from '@/lib/utils';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PageHeaderBanner from '@/components/layout/PageHeaderBanner';

export default function StudentDashboardPage() {
  const { currentUser, attempts, readinessScores, jobs, resources } = useApp();

  const user = currentUser || studentProfile;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-[#F7FAF8] min-h-screen text-slate-900">
      {/* Lined Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Student Analytics Hub' }]} />

      {/* Styled Emerald Header Banner with Dot Matrix Texture */}
      <PageHeaderBanner
        badgeIcon={Sparkles}
        badgeText={`Campus Drive Ready Status: Active • Batch of ${user.batch_year}`}
        title={`Welcome back, ${user.full_name}`}
        description={`${user.branch} • Target Class of ${user.batch_year} • Cumulative GPA: ${user.cgpa || 8.85} • Continuous assessment tracking active.`}
        watermarkIcon={Award}
        action={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#044E39] font-bold text-xs shadow-md shadow-emerald-950/20 hover:bg-[#EAF7F1] transition active:scale-95 border border-white/50 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#07865B]" />
              <span>Attempt Mock Test</span>
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#044E39]/70 hover:bg-[#044E39]/90 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition active:scale-95 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-emerald-300" />
              <span>Eligible Drives</span>
            </Link>
          </div>
        }
      />

      {/* KPI Stats Grid with Interactive Touch Ripple Feedback */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Overall Accuracy */}
        <div
          data-ripple="true"
          className="bg-white rounded-2xl p-5 border border-[#E3EBE6] shadow-xs cursor-pointer hover:border-[#07865B]/60 hover:shadow-md transition-all active:scale-[0.98] select-none"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-3">
            <span>Overall Accuracy</span>
            <Target className="w-4 h-4 text-[#07865B]" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {readinessScores.overall}%
          </div>
          <div className="text-[11px] text-[#07865B] font-semibold mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+4.2% from previous week</span>
          </div>
        </div>

        {/* KPI 2: Tests Completed */}
        <div
          data-ripple="true"
          className="bg-white rounded-2xl p-5 border border-[#E3EBE6] shadow-xs cursor-pointer hover:border-[#07865B]/60 hover:shadow-md transition-all active:scale-[0.98] select-none"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-3">
            <span>Mock Tests Completed</span>
            <Award className="w-4 h-4 text-[#07865B]" />
          </div>
          <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {attempts.length} <span className="text-sm font-normal text-slate-500">/ 30</span>
          </div>
          <div className="text-[11px] text-slate-500 mt-2">
            Goal: 30 exams before Day 1 drives
          </div>
        </div>

        {/* KPI 3: Aptitude Readiness Index */}
        <div
          data-ripple="true"
          className="bg-white rounded-2xl p-5 border border-[#E3EBE6] shadow-xs cursor-pointer hover:border-[#07865B]/60 hover:shadow-md transition-all active:scale-[0.98] select-none"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-3">
            <span>Readiness Index</span>
            <BarChart3 className="w-4 h-4 text-[#07865B]" />
          </div>
          <div className="text-3xl font-extrabold text-[#07865B] tracking-tight">
            86<span className="text-base text-slate-500 font-normal">/100</span>
          </div>
          <div className="text-[11px] text-[#07865B] font-bold mt-2">
            Top 12th Percentile in Batch
          </div>
        </div>

        {/* KPI 4: Study Streak */}
        <div
          data-ripple="true"
          className="bg-white rounded-2xl p-5 border border-[#E3EBE6] shadow-xs cursor-pointer hover:border-amber-500/60 hover:shadow-md transition-all active:scale-[0.98] select-none"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-3">
            <span>Study Streak</span>
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div className="text-3xl font-extrabold text-amber-600 tracking-tight">
            {readinessScores.streak_days} Days
          </div>
          <div className="text-[11px] text-slate-500 mt-2">
            Consistency badge unlocked 🔥
          </div>
        </div>
      </div>

      {/* Main Grid: Readiness Radar Breakdown + Weak Area Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readiness Index Radar/Bar Breakdown (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">
                Aptitude Readiness Index Breakdown
              </h2>
              <p className="text-xs text-slate-500">
                Calibrated across Quantitative, Logical, and Verbal Ability domains
              </p>
            </div>
            <span className="px-2.5 py-1 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg shadow-xs">
              Live Calibration
            </span>
          </div>

          <div className="space-y-5">
            {/* Quantitative */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">Quantitative Ability (Math & Ratios)</span>
                <span className="text-emerald-700 font-bold">{readinessScores.quantitative}% Mastery</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${readinessScores.quantitative}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Strong: Speed Math, Proportion</span>
                <span>Needs Practice: Permutations</span>
              </div>
            </div>

            {/* Logical Reasoning */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">Logical Reasoning (Deductive & Seating)</span>
                <span className="text-emerald-700 font-bold">{readinessScores.logical}% Mastery</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                  style={{ width: `${readinessScores.logical}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Strong: Syllogisms, Blood Relations</span>
                <span>Needs Practice: Data Sufficiency</span>
              </div>
            </div>

            {/* Verbal Ability */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-800">Verbal Ability & Reading Comprehension</span>
                <span className="text-amber-600 font-bold">{readinessScores.verbal}% Mastery</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-500"
                  style={{ width: `${readinessScores.verbal}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Strong: Vocabulary In Context</span>
                <span>Needs Practice: Para Jumbles</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 shadow-xs">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-950">
              <strong className="text-emerald-900 block mb-0.5 font-bold">Placement Cell Pro-Tip:</strong>
              Your Logical Reasoning score is in the top 5% of the university batch! Focus your next two mock sessions on **Verbal Ability Sentence Correction** to balance your elimination cutoff.
            </div>
          </div>
        </div>

        {/* Recommendations & Weak Topics (1 col) */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>Targeted Topic Recommendations</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Recommended Focus Areas
            </h3>
            <p className="text-xs text-slate-500">
              Based on your incorrect answers in recent mock tests:
            </p>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition shadow-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold text-slate-900">Para Jumbles & Sequencing</span>
                  <span className="text-[10px] text-rose-700 font-mono bg-rose-50 border border-rose-200 px-1.5 py-0.5 rounded font-bold">
                    55% Accuracy
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2">Practice identifying chronological openers and correlative conjunctions.</p>
                <Link
                  href="/exams/exam-verbal-03"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Practice Exam #16</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition shadow-xs">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold text-slate-900">Permutations & Combinations</span>
                  <span className="text-[10px] text-amber-700 font-mono bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-bold">
                    60% Accuracy
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2">Master circular permutations and committee selection criteria.</p>
                <Link
                  href="/exams/exam-quant-05"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Practice Exam #5</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 mt-4">
            <Link
              href="/resources"
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-between"
            >
              <span>Download Revision Formula Cheat Sheets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Exam Progress Tracker Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Exam Progress Tracker & Score Logs</h2>
            <p className="text-xs text-slate-500">Detailed records of attempted tests, time taken, and accuracy breakdowns</p>
          </div>
          <Link
            href="/exams"
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
          >
            <span>Take Another Exam</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-4">Exam Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4">Accuracy</th>
                <th className="py-3 px-4">Percentile</th>
                <th className="py-3 px-4">Time Taken</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Solutions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {attempts.map((att) => (
                <tr key={att.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3 px-4 font-semibold text-slate-900">
                    {att.exam_title || 'General Aptitude Assessment'}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                      {att.category || 'Quantitative'}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-emerald-700">
                    {att.score} / {att.total_questions * 2}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`font-bold ${
                        att.accuracy_percentage >= 80
                          ? 'text-emerald-700'
                          : att.accuracy_percentage >= 60
                          ? 'text-amber-600'
                          : 'text-rose-600'
                      }`}
                    >
                      {att.accuracy_percentage}%
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-700">
                    {att.percentile_estimate}th %ile
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-500">
                    {formatSecondsToTime(att.time_taken_seconds)}
                  </td>
                  <td className="py-3 px-4 text-slate-500">{formatDate(att.completed_at)}</td>
                  <td className="py-3 px-4 text-right">
                    <Link
                      href={`/exams/${att.exam_id}/result?attemptId=${att.id}`}
                      className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links & Upcoming Deadlines */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Drive Deadlines */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span>Upcoming Placement Deadlines</span>
            </h3>
            <Link href="/jobs" className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
              >
                <div>
                  <div className="font-semibold text-slate-900 text-xs">{job.company_name}</div>
                  <div className="text-[11px] text-slate-500">{job.role_title}</div>
                  <div className="text-[10px] text-emerald-800 font-bold mt-0.5">
                    Package: {job.ctc}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono text-rose-600 font-bold">
                    Deadline: {formatDate(job.deadline)}
                  </div>
                  <a
                    href={job.apply_url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Apply</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bookmarked Study Materials */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>High-Yield Placement Repository</span>
            </h3>
            <Link href="/resources" className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold">
              Open Library
            </Link>
          </div>

          <div className="space-y-3">
            {resources.slice(0, 3).map((res) => (
              <div
                key={res.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 shadow-xs"
              >
                <div>
                  <div className="font-semibold text-slate-900 text-xs line-clamp-1">{res.title}</div>
                  <div className="text-[11px] text-slate-500 line-clamp-1">{res.description}</div>
                  <div className="flex gap-1 mt-1">
                    {res.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[9px] bg-white border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold shrink-0"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
