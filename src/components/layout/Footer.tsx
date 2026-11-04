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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">CampusPrep Portal</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Enterprise-grade placement intelligence, mock aptitude exam engine, and job drive management suite for engineering institutions.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Campus Drives Active: 2026 Batch</span>
            </div>
          </div>

          {/* Quick Modules */}
          <div>
            <h4 className="text-slate-900 font-bold mb-3 text-xs tracking-wider uppercase">Exam Engine</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition">
                  Quantitative Aptitude (7 Modules)
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition">
                  Logical Reasoning (6 Modules)
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition">
                  Verbal Ability (4 Modules)
                </Link>
              </li>
              <li>
                <Link href="/exams" className="text-slate-600 hover:text-emerald-700 transition">
                  Company Mocks (TCS, Infosys, Wipro)
                </Link>
              </li>
            </ul>
          </div>

          {/* Career & Intelligence */}
          <div>
            <h4 className="text-slate-900 font-bold mb-3 text-xs tracking-wider uppercase">Placement Cell</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-slate-600 hover:text-emerald-700 transition">
                  Verified Opportunities Board
                </Link>
              </li>
              <li>
                <Link href="/newsletters" className="text-slate-600 hover:text-emerald-700 transition">
                  Weekly Placement Newsletter
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-emerald-700 transition">
                  Core CS & HR Interview Repository
                </Link>
              </li>
              <li>
                <Link href="/dashboard/student" className="text-slate-600 hover:text-emerald-700 transition">
                  Student Readiness Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Trust */}
          <div>
            <h4 className="text-slate-900 font-bold mb-3 text-xs tracking-wider uppercase">Security & RBAC</h4>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Architecture</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                PostgreSQL Row-Level Security, Google OAuth identity federation, and AI prompt safety guardrails.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>© {new Date().getFullYear()} CampusPrep Portal. All rights reserved. Enterprise Emerald Edition.</div>
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
