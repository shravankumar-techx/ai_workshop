'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#E3EBE6] bg-white flex items-center justify-center p-0.5 shadow-xs">
                <img
                  src="/images/sahyadri-crest.jpg"
                  alt="Sahyadri Shield Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-semibold text-slate-900 tracking-tight">SahyadriPrep Portal</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Institutional placement intelligence, mock aptitude exam engine, and campus drive management suite.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Campus Drives Active: Batch 2026</span>
            </div>
          </div>

          {/* Quick Modules */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3 text-xs">Exam modules</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Quantitative Aptitude
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Logical Reasoning
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Verbal Ability
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Company Mocks (TCS, Infosys, Accenture)
                </Link>
              </li>
            </ul>
          </div>

          {/* Career & Intelligence */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3 text-xs">Placement cell</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Verified Opportunities Board
                </Link>
              </li>
              <li>
                <Link href="/newsletters" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Weekly Placement Newsletter
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Technical & HR Interview Repository
                </Link>
              </li>
              <li>
                <Link href="/dashboard/student" className="text-slate-600 hover:text-emerald-700 transition-colors">
                  Student Readiness Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Trust */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-3 text-xs">Architecture & security</h4>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-800 font-medium text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Infrastructure</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                PostgreSQL row-level security, university identity federation, and evaluation audit trails.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} SahyadriPrep Portal • Sahyadri College of Engineering & Management. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Powered by <span className="text-slate-700 font-semibold">Gemini 2.5 Flash</span> & Supabase
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
