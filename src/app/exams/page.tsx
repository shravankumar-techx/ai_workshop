'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  Search,
  CheckCircle2,
  ChevronRight,
  Building2,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { ExamCategory } from '@/types';

export default function ExamsCatalogPage() {
  const router = useRouter();
  const { exams, attempts, userRole, openAuthDrawer } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory>('All');
  const [selectedCompany, setSelectedCompany] = useState<string>('All Companies');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');

  const categories: ExamCategory[] = [
    'All',
    'Quantitative',
    'Logical Reasoning',
    'Verbal Ability',
    'Company Specific',
    'Japanese (JLPT N5)',
  ];

  const companies = [
    'All Companies',
    'TCS',
    'Infosys',
    'Accenture',
    'Cognizant (CTS)',
    'Wipro',
  ];

  // Map attempted exam IDs
  const attemptedExamIds = new Set(attempts.map((a) => a.exam_id));

  // Filter exams
  const filteredExams = exams.filter((exam) => {
    const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
    const matchesCompany =
      selectedCompany === 'All Companies' ||
      (exam.company_tag && exam.company_tag.toLowerCase().includes(selectedCompany.toLowerCase())) ||
      exam.title.toLowerCase().includes(selectedCompany.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || exam.difficulty === difficultyFilter;
    const matchesSearch =
      exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exam.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (exam.company_tag && exam.company_tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesCompany && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>30 Complete Aptitude & Company Drive Mock Tests (350+ Questions)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Aptitude Examination Hub
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Timed, distraction-free mock examinations engineered to mirror the exact cognitive patterns of TCS NQT, Infosys, Wipro NLTH, Accenture, and Cognizant (CTS), plus authentic Japanese JLPT N5 tests. Instant evaluation with step-by-step mathematical explanations.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Company Quick-Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mr-2">
            <Building2 className="w-3.5 h-3.5 text-slate-600" />
            <span>Company Drives:</span>
          </span>
          {companies.map((comp) => (
            <button
              key={comp}
              onClick={() => setSelectedCompany(comp)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
                selectedCompany === comp
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              }`}
            >
              {comp}
            </button>
          ))}
        </div>

        {/* Search & Difficulty Filter Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, formula, or company tag (TCS, Infosys)..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-slate-500 font-medium">Difficulty:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="bg-white border border-slate-200 text-xs text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 shadow-xs cursor-pointer"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <span className="text-xs text-slate-500 ml-2">
              Showing {filteredExams.length} of {exams.length} tests
            </span>
          </div>
        </div>
      </div>

      {/* Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => {
          const isAttempted = attemptedExamIds.has(exam.id);
          const lastAttempt = attempts.find((a) => a.exam_id === exam.id);

          return (
            <div
              key={exam.id}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-200 group ${
                isAttempted
                  ? 'border-emerald-300 bg-emerald-50/50 shadow-xs'
                  : 'bg-white border-slate-200/80 shadow-xs hover:border-emerald-500/40 hover:shadow-md'
              }`}
            >
              <div>
                {/* Badges Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {exam.category}
                    </span>
                    {exam.company_tag && (
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-slate-500" />
                        <span>{exam.company_tag}</span>
                      </span>
                    )}
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      exam.difficulty === 'Advanced'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {exam.difficulty}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {exam.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exam.duration_minutes} Mins</span>
                  </div>
                  <div>{exam.questions?.length || 5} Questions</div>
                  <div className="font-mono">{exam.total_marks} Marks</div>
                </div>

                {isAttempted && lastAttempt && (
                  <div className="p-2.5 rounded-xl bg-emerald-100/70 border border-emerald-300 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Completed: {lastAttempt.score}/{lastAttempt.total_questions * 2}</span>
                    </div>
                    <span className="text-emerald-800 font-mono font-bold">{lastAttempt.accuracy_percentage}% Accuracy</span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (userRole === 'guest') {
                        openAuthDrawer(`/exams/${exam.id}`);
                      } else {
                        router.push(`/exams/${exam.id}`);
                      }
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center shadow-md shadow-emerald-600/20 transition active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{isAttempted ? 'Retake Exam' : 'Start Exam'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {isAttempted && lastAttempt && (
                    <Link
                      href={`/exams/${exam.id}/result?attemptId=${lastAttempt.id}`}
                      className="px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
                    >
                      Solutions
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
