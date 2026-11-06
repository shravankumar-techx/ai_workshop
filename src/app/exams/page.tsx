'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  Search,
  CheckCircle2,
  Building2,
  SlidersHorizontal,
  HelpCircle,
  Award,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { Exam, ExamCategory } from '@/types';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PageHeaderBanner from '@/components/layout/PageHeaderBanner';

// Domain and monogram mapping for authentic logos and sleek fallbacks
const COMPANY_DOMAIN_LOOKUP: Record<
  string,
  { domain: string; fallbackText: string }
> = {
  accenture: { domain: 'accenture.com', fallbackText: 'AC' },
  cognizant: { domain: 'cognizant.com', fallbackText: 'CTS' },
  cts: { domain: 'cognizant.com', fallbackText: 'CTS' },
  infosys: { domain: 'infosys.com', fallbackText: 'INF' },
  tcs: { domain: 'tcs.com', fallbackText: 'TCS' },
  tata: { domain: 'tcs.com', fallbackText: 'TCS' },
  wipro: { domain: 'wipro.com', fallbackText: 'WIP' },
  hcl: { domain: 'hcltech.com', fallbackText: 'HCL' },
  ibm: { domain: 'ibm.com', fallbackText: 'IBM' },
  microsoft: { domain: 'microsoft.com', fallbackText: 'MSFT' },
  google: { domain: 'google.com', fallbackText: 'GOOG' },
  amazon: { domain: 'amazon.com', fallbackText: 'AMZN' },
};

function getCompanyDetails(companyTag?: string, title?: string, category?: string) {
  const text = `${companyTag || ''} ${title || ''} ${category || ''}`.toLowerCase();
  for (const [key, details] of Object.entries(COMPANY_DOMAIN_LOOKUP)) {
    if (text.includes(key)) {
      return details;
    }
  }
  return null;
}

function ExamCardLogo({ exam }: { exam: Exam }) {
  const [hasError, setHasError] = useState(false);
  const companyDetails = getCompanyDetails(exam.company_tag, exam.title, exam.category);

  return (
    <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
      {companyDetails && !hasError ? (
        <img
          src={`https://logo.clearbit.com/${companyDetails.domain}`}
          alt={exam.company_tag || 'Company logo'}
          className="w-full h-full object-contain p-1.5"
          onError={() => setHasError(true)}
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-50 font-bold text-xs text-slate-700">
          {companyDetails?.fallbackText || (
            exam.category === 'Japanese (JLPT N5)' ? (
              <span className="text-rose-600 font-bold text-sm">日</span>
            ) : exam.category === 'Quantitative' ? (
              <span className="text-emerald-700 font-bold text-sm">∑</span>
            ) : exam.category === 'Logical Reasoning' ? (
              <span className="text-indigo-700 font-bold text-xs">LR</span>
            ) : exam.category === 'Verbal Ability' ? (
              <span className="text-amber-700 font-bold text-xs">VA</span>
            ) : (
              <span className="text-slate-600 font-bold text-xs">
                {(exam.company_tag || exam.title || 'CP').slice(0, 2).toUpperCase()}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}

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

  const difficultyColors: Record<string, string> = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
    Advanced: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  const handleCardClick = (examId: string) => {
    if (userRole === 'guest') {
      openAuthDrawer(`/exams/${examId}`);
    } else {
      router.push(`/exams/${examId}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-[#F7FAF8] min-h-screen">
      {/* 1. Lined & Recognisable Breadcrumb Trail */}
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: 'Mock Exams', icon: BookOpen },
          ]}
        />
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#526174]">
          <span className="w-2 h-2 rounded-full bg-[#0AA574] animate-pulse" />
          <span>Catalog: <strong>30 Tests Ready</strong></span>
        </div>
      </div>

      {/* 2. Emerald Green Page Header Banner with Textures */}
      <PageHeaderBanner
        badgeIcon={BookOpen}
        badgeText="30 Complete Aptitude & Company Drive Mock Tests (350+ Questions)"
        title="Aptitude Examination Hub"
        description="Timed, distraction-free mock examinations engineered to mirror the exact cognitive patterns of TCS NQT, Infosys, Wipro NLTH, Accenture, and Cognizant (CTS), plus authentic Japanese JLPT N5 tests. Instant evaluation with step-by-step mathematical explanations."
        watermarkIcon={BookOpen}
      />

      {/* 3. Streamlined Filter Dashboard (No bulky enclosing borders) */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs space-y-4">
        {/* Floating Category Track Segmented Controls */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-600" />
            <span>Category Track</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Company Drives Segmented Controls */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Company Drives</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {companies.map((comp) => (
              <button
                key={comp}
                onClick={() => setSelectedCompany(comp)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCompany === comp
                    ? 'bg-[#07865B] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Difficulty Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, formula, or company tag (TCS, Infosys)..."
              className="w-full bg-[#F7FAF8] border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Difficulty:</span>
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="bg-white border border-slate-200 text-xs text-slate-700 rounded-xl px-3 py-2 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <span className="text-xs text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
              {filteredExams.length} tests found
            </span>
          </div>
        </div>
      </div>

      {/* 4. High-Tech Card Grid with Premium Hover Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => {
          const isAttempted = attemptedExamIds.has(exam.id);
          const lastAttempt = attempts.find((a) => a.exam_id === exam.id);

          return (
            <div
              key={exam.id}
              onClick={() => handleCardClick(exam.id)}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-sm transition-all duration-300 ease-out group hover:shadow-xl hover:-translate-y-1 hover:border-emerald-400 cursor-pointer p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Card Header: Company Logo Container on Left, Difficulty Pill on Far Right */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <ExamCardLogo exam={exam} />
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block truncate">
                        {exam.company_tag && exam.company_tag !== 'General Aptitude'
                          ? exam.company_tag
                          : exam.category}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border shrink-0 ${
                      difficultyColors[exam.difficulty] || 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {exam.difficulty}
                  </span>
                </div>

                {/* Typography: Bold Tracking-Tight Title & 2-Line Clamped Description */}
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-emerald-700 transition-colors line-clamp-1">
                  {exam.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                  {exam.description}
                </p>
              </div>

              {/* Sleek Footer: Metrics on Left, Text Trigger on Right */}
              <div className="border-t border-slate-100 mt-4 pt-4 flex items-center justify-between">
                {/* Left Metrics */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{exam.duration_minutes} Mins</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-slate-400" />
                    <span>{exam.question_count || exam.questions?.length || 25} Qs</span>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3 text-slate-400" />
                    <span>{exam.total_marks} Marks</span>
                  </span>
                </div>

                {/* Right Action Trigger */}
                <div className="flex items-center gap-2 shrink-0">
                  {isAttempted && lastAttempt && (
                    <Link
                      href={`/exams/${exam.id}/result?attemptId=${lastAttempt.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 underline underline-offset-2 transition mr-1"
                      title="Review past test solution"
                    >
                      {lastAttempt.score}/{lastAttempt.total_questions * 2}
                    </Link>
                  )}
                  <span className="text-emerald-600 font-bold text-xs flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>{isAttempted ? 'Retake' : 'Start'}</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {filteredExams.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No mock exams match your criteria</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try clearing your search query or switching to 'All' category and company drives.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedCompany('All Companies');
                setSearchQuery('');
                setDifficultyFilter('All');
              }}
              className="text-xs font-semibold text-emerald-600 hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
