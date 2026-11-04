'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Clock,
  AlertTriangle,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  X,
  Maximize2,
  Minimize2,
  Lock,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatSecondsToTime } from '@/lib/utils';

export default function ExamPlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const examId = resolvedParams.id;
  const { exams, recordAttempt, currentUser, userRole, openAuthDrawer } = useApp();

  const exam = exams.find((e) => e.id === examId) || exams[0];
  const questions = exam.questions || [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(exam.duration_minutes * 60);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (userRole === 'guest') {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-slate-50">
        <div className="glass-panel max-w-md w-full p-8 rounded-3xl text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600 shadow-xs">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">Student Authentication Required</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Please sign in with your student credentials or Google GAuth to attempt this timed examination and track your percentile.
          </p>
          <button
            onClick={() => openAuthDrawer(`/exams/${examId}`)}
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition cursor-pointer"
          >
            Authenticate Student Session
          </button>
        </div>
      </div>
    );
  }

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmitExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelectOption = (optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optionIdx,
    }));
  };

  const handleToggleReview = () => {
    setMarkedForReview((prev) => {
      const next = new Set(prev);
      if (next.has(currentIdx)) {
        next.delete(currentIdx);
      } else {
        next.add(currentIdx);
      }
      return next;
    });
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentIdx];
      return copy;
    });
  };

  const handleSubmitExam = () => {
    // Calculate scoring
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    questions.forEach((q, idx) => {
      const selected = selectedAnswers[idx];
      if (selected === undefined) {
        unattemptedCount += 1;
      } else if (selected === q.correct_index) {
        correctCount += 1;
      } else {
        incorrectCount += 1;
      }
    });

    const score = correctCount * 2; // 2 marks per question
    const timeTaken = exam.duration_minutes * 60 - timeLeft;

    const attempt = recordAttempt({
      exam_id: exam.id,
      exam_title: exam.title,
      category: exam.category,
      user_id: currentUser?.id || 'usr-student-01',
      score,
      total_questions: questions.length,
      correct_count: correctCount,
      incorrect_count: incorrectCount,
      unattempted_count: unattemptedCount,
      accuracy_percentage: questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0,
      time_taken_seconds: Math.max(timeTaken, 1),
      answers: selectedAnswers,
      flagged_questions: Array.from(markedForReview),
    });

    router.push(`/exams/${exam.id}/result?attemptId=${attempt.id}`);
  };

  const currentQ = questions[currentIdx];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullScreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullScreen(false);
    }
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const reviewedCount = markedForReview.size;
  const unvisitedCount = questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      {/* Top Test Header */}
      <header className="border-b border-slate-200 bg-white px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/exams"
            className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight line-clamp-1">
              {exam.title}
            </h1>
            <p className="text-[11px] text-slate-500">
              {exam.category} • {exam.difficulty} Assessment • 2 Marks / Correct
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Timer Display */}
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold tracking-wider shadow-xs ${
              timeLeft < 120
                ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                : 'bg-emerald-50 border-emerald-200 text-emerald-800'
            }`}
          >
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>{formatSecondsToTime(timeLeft)}</span>
          </div>

          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition active:scale-95 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Test</span>
          </button>
        </div>
      </header>

      {/* Main Test Body */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column: Question Area (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div>
            {/* Question Header & Meta */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Question {currentIdx + 1} of {questions.length}
              </span>

              {currentQ?.topic_tag && (
                <span className="text-[11px] text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded font-mono">
                  Topic: {currentQ.topic_tag}
                </span>
              )}
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed mb-8 whitespace-pre-line">
              {currentQ?.question_text}
            </div>

            {/* Options Radio List */}
            <div className="space-y-3">
              {currentQ?.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentIdx] === optIdx;
                const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border flex items-center gap-4 transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-500 text-slate-900 shadow-xs font-medium'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isSelected
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-slate-700 border border-slate-300'
                      }`}
                    >
                      {letter}
                    </span>
                    <span className="text-sm font-medium leading-relaxed">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Action Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 mt-8">
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleReview}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
                  markedForReview.has(currentIdx)
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>
                  {markedForReview.has(currentIdx) ? 'Marked for Review' : 'Mark for Review'}
                </span>
              </button>

              {selectedAnswers[currentIdx] !== undefined && (
                <button
                  onClick={handleClearResponse}
                  className="px-3 py-2 text-xs text-slate-500 hover:text-rose-600 transition cursor-pointer"
                >
                  Clear Selection
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentIdx === 0}
                onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 disabled:opacity-40 border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs transition cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              {currentIdx < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
                >
                  <span>Next Question</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition cursor-pointer"
                >
                  <span>Review & Submit</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Question Palette (1 col) */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Question Palette
            </h3>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-600 inline-block" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
                <span>Review ({reviewedCount})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 inline-block" />
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded ring-2 ring-emerald-600 bg-emerald-50 inline-block" />
                <span>Current</span>
              </div>
            </div>

            {/* Grid of question buttons */}
            <div className="grid grid-cols-5 gap-2 pt-2">
              {questions.map((_, idx) => {
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isMarked = markedForReview.has(idx);
                const isCurrent = currentIdx === idx;

                let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';
                if (isAnswered) {
                  btnStyle = 'bg-emerald-600 text-white border-emerald-600';
                }
                if (isMarked) {
                  btnStyle = 'bg-amber-500 text-white border-amber-500';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-lg font-mono text-xs font-bold border transition flex items-center justify-center relative cursor-pointer ${btnStyle} ${
                      isCurrent ? 'ring-2 ring-emerald-600 font-extrabold shadow-xs' : ''
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isMarked && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick instructions & Submit CTA */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="text-[11px] text-slate-500 leading-normal flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>Keyboard shortcut: Click options or use 1-4. Responses auto-save locally.</span>
            </div>
            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-md shadow-emerald-600/20 transition active:scale-95 cursor-pointer"
            >
              Submit Exam Now
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl space-y-4 text-slate-900">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shadow-xs">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Submit Examination?</h3>
                <p className="text-xs text-slate-500">Are you ready to finalize your test responses?</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 py-3 bg-slate-50 rounded-xl p-3 border border-slate-200 text-center text-xs">
              <div>
                <div className="font-mono text-lg font-bold text-emerald-600">{answeredCount}</div>
                <div className="text-[10px] text-slate-500 font-medium">Answered</div>
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-amber-600">{reviewedCount}</div>
                <div className="text-[10px] text-slate-500 font-medium">Marked Review</div>
              </div>
              <div>
                <div className="font-mono text-lg font-bold text-slate-500">{unvisitedCount}</div>
                <div className="text-[10px] text-slate-500 font-medium">Unanswered</div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Once submitted, your answers will be evaluated immediately. You will receive an accuracy breakdown, percentile estimation, and step-by-step solutions for every question.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
              >
                Back to Test
              </button>
              <button
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition cursor-pointer"
              >
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
