'use client';

import React, { useEffect, use } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  RotateCcw,
  LayoutDashboard,
  Sparkles,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatSecondsToTime } from '@/lib/utils';
import confetti from 'canvas-confetti';
import FormattedMessage from '@/components/chat/FormattedMessage';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function ExamResultPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const examId = resolvedParams.id;
  const searchParams = useSearchParams();
  const attemptId = searchParams.get('attemptId');

  const { exams, attempts } = useApp();

  const exam = exams.find((e) => e.id === examId) || exams[0];
  const attempt = attempts.find((a) => a.id === attemptId) || attempts[0];
  const questions = exam.questions || [];

  // Trigger celebration confetti if passed with high score
  useEffect(() => {
    if (attempt && attempt.accuracy_percentage >= 70) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#059669', '#10B981', '#14B8A6', '#F59E0B'],
        });
      } catch {}
    }
  }, [attempt]);

  const correctCount = attempt?.correct_count ?? 0;
  const totalCount = attempt?.total_questions ?? questions.length;
  const accuracy = attempt?.accuracy_percentage ?? 0;
  const percentile = attempt?.percentile_estimate ?? 85.0;
  const timeTaken = attempt?.time_taken_seconds ?? 450;
  const answers = attempt?.answers ?? {};

  const isPassed = accuracy >= exam.passing_percentage;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-[#F7FAF8] min-h-screen text-slate-900">
      {/* Lined Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Mock Exams', href: '/exams' },
          { label: exam.title, href: `/exams/${exam.id}` },
          { label: 'Performance Scorecard' },
        ]}
      />

      {/* Result Hero Banner - Styled Emerald with Dot Matrix Texture */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#044E39] via-[#07865B] to-[#065F46] p-8 sm:p-10 text-center text-white border border-[#044E39] shadow-xl shadow-emerald-950/20">
        {/* Subtle Textured Dot Matrix Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-teal-300/15 blur-3xl pointer-events-none" />

        {/* Glass reflection top hairline */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-amber-300 mx-auto shadow-lg shadow-black/20">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-emerald-100 border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
              <span>Assessment Evaluated & Verified</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Performance Scorecard: {exam.title}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto leading-relaxed">
              {isPassed
                ? '🎉 Outstanding performance! You cleared the institutional aptitude cutoff with high percentile accuracy.'
                : 'Keep practicing! Review the step-by-step explanations below to master weak mathematical or logical patterns.'}
            </p>
          </div>

          {/* Big KPI Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white text-slate-900 border border-[#E3EBE6] shadow-md">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Final Score</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#07865B] mt-1 font-mono">
                {correctCount * 2} <span className="text-sm text-slate-400 font-normal">/ {totalCount * 2}</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-1">2 Marks / Question</div>
            </div>

            <div className="p-4 rounded-2xl bg-white text-slate-900 border border-[#E3EBE6] shadow-md">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Accuracy</div>
              <div
                className={`text-2xl sm:text-3xl font-extrabold mt-1 font-mono ${
                  accuracy >= 75 ? 'text-[#07865B]' : accuracy >= 50 ? 'text-amber-600' : 'text-rose-600'
                }`}
              >
                {accuracy}%
              </div>
              <div className="text-[11px] text-slate-500 mt-1">{correctCount} of {totalCount} Correct</div>
            </div>

            <div className="p-4 rounded-2xl bg-white text-slate-900 border border-[#E3EBE6] shadow-md">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Percentile Est.</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#044E39] mt-1 font-mono">
                {percentile}th
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Campus Batch Standing</div>
            </div>

            <div className="p-4 rounded-2xl bg-white text-slate-900 border border-[#E3EBE6] shadow-md">
              <div className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Time Taken</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-mono">
                {formatSecondsToTime(timeTaken)}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">Limit: {exam.duration_minutes}m</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={`/exams/${exam.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#044E39] hover:bg-[#EAF7F1] text-xs font-bold shadow-md shadow-emerald-950/20 transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#07865B]" />
              <span>Retake This Exam</span>
            </Link>
            <Link
              href="/dashboard/student"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#044E39]/80 hover:bg-[#044E39] text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition active:scale-95 cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-emerald-300" />
              <span>Go to Student Hub</span>
            </Link>
            <Link
              href="/exams"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 text-xs font-semibold backdrop-blur-md transition active:scale-95 cursor-pointer"
            >
              <span>Next Mock Exam</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Step-by-Step Question Explanations */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            Detailed Solutions & Explanations ({questions.length} Questions)
          </h2>
          <span className="text-xs text-slate-500 font-medium">Review mistakes to build speed-math shortcuts</span>
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userChoice = answers[idx];
            const isCorrect = userChoice === q.correct_index;
            const isUnattempted = userChoice === undefined;

            return (
              <div
                key={q.id}
                className={`rounded-2xl p-6 border transition-all ${
                  isCorrect
                    ? 'border-emerald-300 bg-emerald-50/50 shadow-xs'
                    : isUnattempted
                    ? 'border-slate-200 bg-white shadow-xs'
                    : 'border-rose-300 bg-rose-50/40 shadow-xs'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-700">
                      Q{idx + 1}.
                    </span>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct (+2 Marks)</span>
                      </span>
                    ) : isUnattempted ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Unattempted (0 Marks)</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded-md border border-rose-300">
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Incorrect (0 Marks)</span>
                      </span>
                    )}
                  </div>

                  {q.topic_tag && (
                    <span className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                      {q.topic_tag}
                    </span>
                  )}
                </div>

                {/* Question */}
                <div className="text-sm font-medium text-slate-900 mb-5 leading-relaxed whitespace-pre-line">
                  {q.question_text}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  {q.options.map((opt, optIdx) => {
                    const isUserPick = userChoice === optIdx;
                    const isRightAnswer = optIdx === q.correct_index;
                    const letter = String.fromCharCode(65 + optIdx);

                    let cardClass = 'bg-slate-50 border-slate-200 text-slate-700';
                    if (isRightAnswer) {
                      cardClass = 'bg-emerald-100/70 border-emerald-500 text-emerald-950 font-semibold';
                    } else if (isUserPick && !isRightAnswer) {
                      cardClass = 'bg-rose-100/70 border-rose-500 text-rose-950';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3 rounded-xl border text-xs flex items-center gap-3 ${cardClass}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-[10px] ${
                            isRightAnswer
                              ? 'bg-emerald-600 text-white'
                              : isUserPick
                              ? 'bg-rose-600 text-white'
                              : 'bg-white text-slate-700 border border-slate-300'
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="flex-1 leading-normal">{opt}</span>
                        {isRightAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />}
                        {isUserPick && !isRightAnswer && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="text-emerald-800 font-bold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Step-by-Step Mathematical Explanation:</span>
                  </div>
                  <div className="text-slate-700 leading-relaxed">
                    <FormattedMessage content={q.explanation} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
