'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
  CheckCircle2,
  Code2,
  Trophy,
  BarChart3,
  Play,
  ChevronLeft,
  ChevronRight,
  Lock,
  Layers,
  Sparkles,
  FileText,
  User,
  ArrowRight,
  ShieldCheck,
  Zap,
  Radio,
  Laptop,
} from 'lucide-react';
import { useApp } from '@/lib/store';

type TabKey = 'board' | 'mcq' | 'coding' | 'leaderboard' | 'results';

// High-fidelity curated assessments for Sahyadri's active campus placement drives
const BOARD_EXAMS_BY_FILTER = {
  ongoing: [
    {
      id: 'tcs-nqt',
      title: 'TCS NQT Full Cognitive Mock Exam',
      company: 'TCS',
      companyColor: '#E21836',
      icon: FileText,
      badge: 'Live Proctored',
      badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      isLive: true,
      meta: '45 mins • 60 questions • Batch CSE, ISE, AIML',
      action: 'Launch Test',
      tabTarget: 'mcq' as TabKey,
    },
    {
      id: 'python-lab',
      title: 'Python & Data Structures Lab Evaluation',
      company: 'Coding Arena',
      companyColor: '#007CC3',
      icon: Code2,
      badge: 'Auto-Graded IDE',
      badgeClass: 'bg-teal-50 text-teal-800 border-teal-200',
      isLive: false,
      meta: '90 mins • 4 algorithmic challenges • Live testbench',
      action: 'Open Sandbox',
      tabTarget: 'coding' as TabKey,
    },
    {
      id: 'jlpt-n5',
      title: 'Japanese JLPT N5 Official Vocabulary Mock',
      company: 'Indo-Japan Track',
      companyColor: '#E60012',
      icon: Sparkles,
      badge: 'Belc & IMV Ready',
      badgeClass: 'bg-rose-50 text-rose-800 border-rose-200',
      isLive: false,
      meta: '25 mins • 20 Kanji & Vocab questions • Bilingual',
      action: 'Preview Exam',
      tabTarget: 'mcq' as TabKey,
    },
  ],
  upcoming: [
    {
      id: 'ms-sde',
      title: 'Microsoft SDE-1 Technical Screening Mock',
      company: 'Microsoft',
      companyColor: '#00A4EF',
      icon: Laptop,
      badge: 'Starts Tomorrow 10:00 AM',
      badgeClass: 'bg-sky-50 text-sky-800 border-sky-200',
      isLive: false,
      meta: '120 mins • 3 System Design & DSA Problems • Batch 2026',
      action: 'Register Drive',
      tabTarget: 'coding' as TabKey,
    },
    {
      id: 'tata-elxsi',
      title: 'Tata Elxsi Embedded Systems & Logic Screening',
      company: 'Tata Elxsi',
      companyColor: '#005A9C',
      icon: FileText,
      badge: 'Starts Oct 28',
      badgeClass: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      isLive: false,
      meta: '60 mins • Core C, Circuits & Analytical Reasoning',
      action: 'View Syllabus',
      tabTarget: 'mcq' as TabKey,
    },
    {
      id: 'amazon-aws',
      title: 'Amazon AWS Cloud & Algorithmic Challenge',
      company: 'Amazon',
      companyColor: '#FF9900',
      icon: Code2,
      badge: 'Upcoming Saturday',
      badgeClass: 'bg-amber-50 text-amber-800 border-amber-200',
      isLive: false,
      meta: '75 mins • 40 scenario MCQs + 2 Coding Problems',
      action: 'Set Reminder',
      tabTarget: 'coding' as TabKey,
    },
  ],
  completed: [
    {
      id: 'infosys-sp',
      title: 'Infosys Specialist Programmer (SP) Qualifier',
      company: 'Infosys',
      companyColor: '#007CC3',
      icon: Trophy,
      badge: 'Reports Published',
      badgeClass: 'bg-slate-100 text-slate-800 border-slate-200',
      isLive: false,
      meta: 'Evaluation Closed • 94.2% Cohort Clearance Rate',
      action: 'View Analytics',
      tabTarget: 'results' as TabKey,
    },
    {
      id: 'cognizant-genc',
      title: 'Cognizant GenC Next Technical Assessment',
      company: 'Cognizant',
      companyColor: '#0033A0',
      icon: BarChart3,
      badge: 'Archived',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-200',
      isLive: false,
      meta: '182 Sahyadri Candidates Cleared Cutoff • Oct 2026',
      action: 'Review Scores',
      tabTarget: 'results' as TabKey,
    },
  ],
};

export default function InteractiveLmsPreview() {
  const { openAuthDrawer } = useApp();
  const [activeTab, setActiveTab] = useState<TabKey>('board');
  const [boardFilter, setBoardFilter] = useState<'ongoing' | 'upcoming' | 'completed'>('ongoing');
  const [selectedOption, setSelectedOption] = useState<number | null>(2); // Option 2 = Stack
  const [activeQuestion, setActiveQuestion] = useState(14);
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [leaderboardFilter, setLeaderboardFilter] = useState<'overall' | 'dept' | 'batch'>('overall');

  const tabs: { key: TabKey; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'board', label: 'Test Board', icon: Layers },
    { key: 'mcq', label: 'MCQ Test', icon: FileText },
    { key: 'coding', label: 'Live Coding', icon: Code2 },
    { key: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { key: 'results', label: 'Results', icon: BarChart3 },
  ];

  const tabIndexMap: Record<TabKey, number> = {
    board: 1,
    mcq: 2,
    coding: 3,
    leaderboard: 4,
    results: 5,
  };

  const currentStep = tabIndexMap[activeTab];

  const handlePrev = () => {
    const keys: TabKey[] = ['board', 'mcq', 'coding', 'leaderboard', 'results'];
    const idx = keys.indexOf(activeTab);
    if (idx > 0) setActiveTab(keys[idx - 1]);
    else setActiveTab(keys[keys.length - 1]);
  };

  const handleNext = () => {
    const keys: TabKey[] = ['board', 'mcq', 'coding', 'leaderboard', 'results'];
    const idx = keys.indexOf(activeTab);
    if (idx < keys.length - 1) setActiveTab(keys[idx + 1]);
    else setActiveTab(keys[0]);
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput(null);
    setTimeout(() => {
      setIsRunningCode(false);
      setCodeOutput('✓ All 3 test cases passed! (Execution time: 38ms | Memory: 14.2 MB)');
    }, 600);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center relative z-20">
      {/* 1. Top Tab Selector Bar (Matching the Video's Navigation Rail) */}
      <div className="w-full flex items-center justify-between bg-white border border-slate-200/90 rounded-xl p-1.5 shadow-2xs mb-4 overflow-x-auto relative z-20">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#053324] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-300' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Main Realistic Product Shell with Deep Ambient Floating Shadows */}
      <div className="relative w-full">
        {/* Soft emerald/teal ambient backlight glow */}
        <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-b from-emerald-500/15 via-teal-500/8 to-transparent blur-2xl -z-10 opacity-75 pointer-events-none" />

        {/* Deep grounded physical drop shadow beneath the window frame */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-11/12 h-12 bg-slate-900/25 blur-2xl rounded-full pointer-events-none -z-10" />

        {/* Floating Window Container */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18),0_12px_24px_-8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/5 overflow-hidden flex flex-col relative z-10 transition-shadow duration-300 hover:shadow-[0_32px_75px_-18px_rgba(0,0,0,0.22),0_14px_28px_-10px_rgba(0,0,0,0.10),0_0_0_1px_rgba(15,23,42,0.06)]">
          {/* Browser Top URL Chrome Bar */}
          <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 border border-[#EF4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 border border-[#F59E0B]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 border border-[#10B981]" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] shadow-2xs font-mono">
              <Lock className="w-3 h-3 text-[#07865B]" />
              <span>
                prep.sahyadri.edu.in/
                {activeTab === 'board' && 'dashboard'}
                {activeTab === 'mcq' && 'test/tcs-nqt-midsem'}
                {activeTab === 'coding' && 'coding-arena/python-lab'}
                {activeTab === 'leaderboard' && 'leaderboard/cohort-2026'}
                {activeTab === 'results' && 'test-reports/tcs-nqt-midsem'}
              </span>
            </div>
            <div className="text-[10px] text-emerald-700 font-sans font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>PROCTORED LIVE</span>
            </div>
          </div>

          {/* Dynamic Screen Area based on Selected Tab */}
          <div className="min-h-[380px] sm:min-h-[410px] flex flex-col">
            {/* TAB 1: TEST BOARD (High-End Assessment Cockpit) */}
            {activeTab === 'board' && (
              <div className="flex-1 flex flex-col">
                {/* Board Cockpit Header */}
                <div className="bg-gradient-to-r from-[#032318] via-[#053324] to-[#0a4733] text-white px-5 py-3.5 flex items-center justify-between border-b border-emerald-900/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-xs sm:text-sm tracking-tight text-white block leading-none">
                        Sahyadri Assessment Board
                      </span>
                      <span className="text-[10px] text-emerald-300/80 font-normal mt-0.5 block">
                        Centralized Examination & Proctored Placement Engine
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 border border-emerald-500/20 px-2.5 py-1 rounded-lg text-[10px] text-emerald-200">
                    <Clock className="w-3 h-3 text-emerald-300" />
                    <span>Cycle 2026 Active</span>
                  </div>
                </div>

                {/* Sub tabs: Ongoing, Upcoming, Completed */}
                <div className="border-b border-slate-100 px-5 pt-3 flex gap-2 sm:gap-4 text-xs font-semibold text-slate-500 bg-slate-50/50">
                  <button
                    onClick={() => setBoardFilter('ongoing')}
                    className={`pb-2.5 px-1.5 transition cursor-pointer border-b-2 flex items-center gap-1.5 text-xs ${
                      boardFilter === 'ongoing'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Now ({BOARD_EXAMS_BY_FILTER.ongoing.length})</span>
                  </button>
                  <button
                    onClick={() => setBoardFilter('upcoming')}
                    className={`pb-2.5 px-1.5 transition cursor-pointer border-b-2 flex items-center gap-1.5 text-xs ${
                      boardFilter === 'upcoming'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <span>Upcoming Drives ({BOARD_EXAMS_BY_FILTER.upcoming.length})</span>
                  </button>
                  <button
                    onClick={() => setBoardFilter('completed')}
                    className={`pb-2.5 px-1.5 transition cursor-pointer border-b-2 flex items-center gap-1.5 text-xs ${
                      boardFilter === 'completed'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    <span>Completed ({BOARD_EXAMS_BY_FILTER.completed.length})</span>
                  </button>
                </div>

                {/* Dynamic Assessment Card List for Selected Filter */}
                <div className="p-4 sm:p-5 space-y-3 flex-1">
                  {BOARD_EXAMS_BY_FILTER[boardFilter].map((card) => {
                    const IconComponent = card.icon;
                    return (
                      <div
                        key={card.id}
                        onClick={() => setActiveTab(card.tabTarget)}
                        className="p-3.5 sm:p-4 rounded-xl border border-slate-200/90 hover:border-emerald-500/60 hover:bg-slate-50/70 transition-all bg-white flex items-center justify-between cursor-pointer group shadow-2xs hover:shadow-xs"
                      >
                        <div className="flex items-start gap-3 sm:gap-3.5 min-w-0 pr-3">
                          <div
                            className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 shadow-2xs transition-transform group-hover:scale-105"
                            style={{
                              backgroundColor: `${card.companyColor}12`,
                              borderColor: `${card.companyColor}30`,
                              color: card.companyColor,
                            }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                {card.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                              {card.meta}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium border flex items-center gap-1 ${card.badgeClass}`}>
                            {card.isLive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            )}
                            <span>{card.badge}</span>
                          </span>
                          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>{card.action}</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Proctoring & Security Telemetry Console (Replaces generic 482 students bar) */}
                <div className="bg-slate-50/95 border-t border-slate-200/90 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/80 border border-emerald-300 text-emerald-800 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#07865B]" />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-[11px]">
                        <span>AI Anti-Cheat Lockdown Active</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <p className="text-[10px] text-slate-500">
                        Tamper-resistant full-screen proctoring • Auto-graded testbench
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-600 font-mono bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>Node: Sahyadri-AWS (12ms)</span>
                    </div>
                    <button
                      onClick={() => setActiveTab('mcq')}
                      className="px-3.5 py-1.5 rounded-lg bg-[#07865B] hover:bg-[#065F46] text-white font-semibold text-[11px] flex items-center gap-1 transition shadow-xs cursor-pointer"
                    >
                      <span>Try Test Runner</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

          {/* TAB 2: MCQ TEST RUNNER */}
          {activeTab === 'mcq' && (
            <div className="flex-1 flex flex-col">
              <div className="bg-[#053324] text-white px-5 py-3 flex items-center justify-between">
                <div className="font-bold text-xs sm:text-sm truncate">
                  Data Structures & Aptitude • Question {activeQuestion} of 60
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 font-mono text-xs border border-emerald-500/30">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>32:47</span>
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Question and Interactive Options (Left 2 cols) */}
                <div className="md:col-span-2 space-y-3">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-800">
                    Question 14 — Quantitative & Logic
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-relaxed">
                    Which data structure operates on a strict LIFO (Last In, First Out) order for insertion and deletion?
                  </h4>

                  <div className="space-y-2 pt-1">
                    {[
                      { id: 1, label: 'A', text: 'Queue (FIFO buffer)' },
                      { id: 2, label: 'B', text: 'Stack (Push / Pop)' },
                      { id: 3, label: 'C', text: 'Singly Linked List' },
                      { id: 4, label: 'D', text: 'Binary Search Tree' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center justify-between transition cursor-pointer ${
                          selectedOption === opt.id
                            ? 'bg-emerald-50 border-[#07865B] text-emerald-950 font-bold shadow-xs'
                            : 'border-slate-200/80 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                              selectedOption === opt.id
                                ? 'bg-[#07865B] text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {selectedOption === opt.id && (
                          <CheckCircle2 className="w-4 h-4 text-[#07865B] shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Question Palette Grid */}
                <div className="border border-slate-200 rounded-xl p-3 bg-slate-50 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider mb-2">
                      Questions Palette
                    </div>
                    <div className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
                        const isCurrent = num === 14;
                        const isAnswered = num < 14;
                        const isFlagged = num === 16;
                        return (
                          <button
                            key={num}
                            onClick={() => setActiveQuestion(num)}
                            className={`h-6 rounded text-[10px] font-bold flex items-center justify-center transition cursor-pointer ${
                              isCurrent
                                ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                : isAnswered
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : isFlagged
                                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                                : 'bg-white text-slate-500 border border-slate-200'
                            }`}
                          >
                            {num}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Palette Legend */}
                  <div className="text-[9px] text-slate-500 space-y-1 pt-2 border-t border-slate-200 mt-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-emerald-600" />
                      <span>Answered (13)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-amber-400" />
                      <span>Flagged (1)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded bg-white border border-slate-300" />
                      <span>Unvisited (46)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Test Navigation Actions */}
              <div className="bg-slate-50 border-t border-slate-200/80 px-5 py-2.5 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium">13 answered • 1 visited • 46 remaining</span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-white text-xs font-semibold cursor-pointer">
                    &lt; Prev
                  </button>
                  <button
                    onClick={() => setActiveTab('results')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#07865B] hover:bg-[#065F46] text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    Save & Next &gt;
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LIVE CODING RUNNER */}
          {activeTab === 'coding' && (
            <div className="flex-1 flex flex-col">
              <div className="bg-[#053324] text-white px-5 py-3 flex items-center justify-between">
                <div className="font-bold text-xs sm:text-sm">
                  Python Evaluation • Problem 2 of 4
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-mono">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>01:12:33</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                {/* Left: Problem statement */}
                <div className="p-4 border-r border-slate-200 space-y-2 bg-slate-50/60 overflow-y-auto max-h-[260px]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-100 text-amber-800 uppercase">
                      Medium
                    </span>
                    <span className="text-xs font-bold text-slate-800">Reverse a Linked List</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Write a function that takes the head of a singly linked list and returns the head of the reversed list in O(n) time and O(1) extra space.
                  </p>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-[11px] font-mono text-slate-700">
                    <div>Input: head = [1, 2, 3, 4, 5]</div>
                    <div className="text-emerald-700 font-bold mt-1">Output: [5, 4, 3, 2, 1]</div>
                  </div>
                  <div className="flex items-center gap-2 pt-1 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Test 1 ✓</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Test 2 ✓</span>
                    <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600">Test 3</span>
                  </div>
                </div>

                {/* Right: Code Editor & Output */}
                <div className="bg-slate-900 text-slate-100 p-3 font-mono text-[11px] flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
                      <span>Python 3.10</span>
                      <button
                        onClick={handleRunCode}
                        disabled={isRunningCode}
                        className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>{isRunningCode ? 'Evaluating...' : 'Run Code'}</span>
                      </button>
                    </div>
                    <div className="text-slate-400"># Implement in-place reversal</div>
                    <div><span className="text-purple-400">class</span> <span className="text-yellow-300">Solution</span>:</div>
                    <div className="pl-3"><span className="text-purple-400">def</span> <span className="text-blue-400">reverseList</span>(self, head):</div>
                    <div className="pl-6 text-slate-400">prev = None, curr = head</div>
                    <div className="pl-6"><span className="text-purple-400">while</span> curr:</div>
                    <div className="pl-9 text-slate-400">nxt = curr.next</div>
                    <div className="pl-9 text-slate-400">curr.next = prev</div>
                    <div className="pl-9 text-slate-400">prev = curr; curr = nxt</div>
                    <div className="pl-6"><span className="text-purple-400">return</span> prev</div>
                  </div>

                  {codeOutput && (
                    <div className="mt-2 p-2 rounded bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[10px] animate-in fade-in">
                      {codeOutput}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: LEADERBOARD */}
          {activeTab === 'leaderboard' && (
            <div className="flex-1 flex flex-col">
              <div className="bg-[#053324] text-white px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span className="font-extrabold text-xs sm:text-sm">Placement Aptitude Contest — Live Leaderboard</span>
                </div>
                <span className="text-[10px] text-emerald-200">312 participants</span>
              </div>

              {/* Sub-filter tabs */}
              <div className="border-b border-slate-100 px-5 pt-3 flex items-center justify-between text-xs">
                <div className="flex gap-4 font-semibold text-slate-500">
                  <button
                    onClick={() => setLeaderboardFilter('overall')}
                    className={`pb-2 transition cursor-pointer border-b-2 ${
                      leaderboardFilter === 'overall'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    Overall
                  </button>
                  <button
                    onClick={() => setLeaderboardFilter('dept')}
                    className={`pb-2 transition cursor-pointer border-b-2 ${
                      leaderboardFilter === 'dept'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    My Department (CSE)
                  </button>
                  <button
                    onClick={() => setLeaderboardFilter('batch')}
                    className={`pb-2 transition cursor-pointer border-b-2 ${
                      leaderboardFilter === 'batch'
                        ? 'border-[#07865B] text-[#07865B] font-bold'
                        : 'border-transparent hover:text-slate-900'
                    }`}
                  >
                    Batch 2026
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 hidden sm:inline">Updates every 30s</span>
              </div>

              {/* Ranked rows */}
              <div className="p-3.5 sm:p-4 space-y-2 flex-1">
                {[
                  { rank: 1, name: 'Arjun Kumar', dept: 'CSE • Sem 6', score: 98, avatar: 'AK', bg: 'bg-amber-100 text-amber-800 border-amber-300' },
                  { rank: 2, name: 'Priya Sharma', dept: 'AIML • Sem 6', score: 94, avatar: 'PS', bg: 'bg-slate-200 text-slate-700 border-slate-300' },
                  { rank: 3, name: 'Rohit Nair', dept: 'ISE • Sem 6', score: 91, avatar: 'RN', bg: 'bg-amber-700/20 text-amber-900 border-amber-600/30' },
                  { rank: 4, name: 'Deepa Murthy', dept: 'CSE • Sem 4', score: 87, avatar: 'DM', bg: 'bg-slate-100 text-slate-600 border-slate-200' },
                  { rank: 23, name: 'You (Student Hub)', dept: 'CSE • Sem 6', score: 72, avatar: 'You', bg: 'bg-emerald-100 text-emerald-800 border-emerald-300', isUser: true },
                ].map((row) => (
                  <div
                    key={row.rank}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition ${
                      row.isUser
                        ? 'bg-emerald-50/80 border-emerald-400 font-bold shadow-xs'
                        : 'bg-white border-slate-200/80'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold border ${row.bg}`}>
                        {row.rank}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center border border-slate-200">
                        {row.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{row.name}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{row.dept}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{row.score} <span className="text-[10px] text-slate-400 font-normal">/ 100</span></div>
                      <div className="w-20 sm:w-28 h-1.5 rounded-full bg-slate-100 overflow-hidden mt-1">
                        <div
                          className={`h-full rounded-full ${row.isUser ? 'bg-emerald-600' : 'bg-[#07865B]'}`}
                          style={{ width: `${row.score}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: RESULTS & ANALYTICS BREAKDOWN */}
          {activeTab === 'results' && (
            <div className="flex-1 flex flex-col">
              <div className="bg-[#053324] text-white px-5 py-3 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm">TCS NQT Cognitive Evaluation • Submitted</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  Verified Score
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-4 flex-1">
                {/* Result header */}
                <div className="flex items-center justify-between bg-emerald-50/80 border border-emerald-200 p-3.5 rounded-2xl">
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base text-emerald-950">
                      Test Submitted Successfully!
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      Cleared 95th Percentile Sahyadri Campus Cutoff.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-emerald-700">47 <span className="text-xs text-emerald-600 font-normal">/ 60</span></div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Final Score</div>
                  </div>
                </div>

                {/* 4 Metrics */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-emerald-600 text-sm">47</div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Correct</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-red-500 text-sm">8</div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Wrong</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-amber-500 text-sm">5</div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Skipped</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-semibold text-slate-900 text-sm">#12</div>
                    <div className="text-[9px] text-slate-500 uppercase font-bold">Your Rank</div>
                  </div>
                </div>

                {/* Topic Breakdown Bars */}
                <div className="space-y-2 pt-1">
                  <div className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                    Performance by Topic
                  </div>
                  {[
                    { topic: 'Quantitative Ability', pct: 90, color: 'bg-emerald-600' },
                    { topic: 'Logical Reasoning', pct: 75, color: 'bg-teal-600' },
                    { topic: 'Verbal Deductions', pct: 55, color: 'bg-amber-500' },
                    { topic: 'Core Coding / Syntax', pct: 40, color: 'bg-red-500' },
                  ].map((item) => (
                    <div key={item.topic} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-slate-700">
                        <span className="font-semibold text-[11px]">{item.topic}</span>
                        <span className="font-mono font-bold text-[11px]">{item.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Bottom Shell Controls & 01 / 05 Pagination */}
        <div className="bg-slate-50/90 border-t border-slate-200/90 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-800">
              0{currentStep} <span className="text-slate-400 font-normal">/ 05</span>
            </span>
            <div className="hidden sm:flex items-center gap-1.5">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeTab === t.key ? 'w-6 bg-[#07865B]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={t.label}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 hidden sm:inline">Module {currentStep} of 5</span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                title="Previous preview"
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                title="Next preview"
                className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 transition cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

