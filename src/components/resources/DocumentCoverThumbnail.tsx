'use client';

import React from 'react';
import { Resource } from '@/types';
import {
  FileText,
  CheckCircle2,
  Eye,
  Sparkles,
  Code2,
  Binary,
  Layers,
  MessageSquare,
  FileCheck,
  Award,
} from 'lucide-react';

interface DocumentCoverThumbnailProps {
  resource: Resource;
  onPreview?: () => void;
}

export default function DocumentCoverThumbnail({
  resource,
  onPreview,
}: DocumentCoverThumbnailProps) {
  const { id, title, category, file_type, page_count = 32, file_size = '3.5 MB' } = resource;

  // Visual theme accents based on category
  const theme =
    category === 'aptitude'
      ? {
          bannerBg: 'bg-[#07865B]',
          bannerText: 'text-emerald-100',
          accentColor: '#07865B',
          badgeText: 'QUANT & APTITUDE 2026',
          sealColor: 'border-emerald-600/30 text-emerald-700 bg-emerald-50',
        }
      : category === 'technical'
      ? {
          bannerBg: 'bg-[#0F2C59]',
          bannerText: 'text-sky-100',
          accentColor: '#005A9C',
          badgeText: 'CORE CS & TECH DRIVE',
          sealColor: 'border-sky-600/30 text-sky-800 bg-sky-50',
        }
      : {
          bannerBg: 'bg-[#5B21B6]',
          bannerText: 'text-purple-100',
          accentColor: '#7C3AED',
          badgeText: 'CAREER & HR STAR PACK',
          sealColor: 'border-purple-600/30 text-purple-800 bg-purple-50',
        };

  return (
    <div
      onClick={onPreview}
      className="relative h-60 w-full bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200/90 p-4 pb-0 flex items-end justify-center overflow-hidden border-b border-slate-200/80 select-none cursor-pointer group/thumb"
      title="Click to preview document"
    >
      {/* Background Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none bg-dot-light"
        aria-hidden="true"
      />

      {/* Floating Badges at top corners */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-semibold bg-emerald-700/90 text-white shadow-2xs backdrop-blur-xs">
        <CheckCircle2 className="w-3 h-3 text-emerald-200 shrink-0" />
        <span>Vetted Syllabus</span>
      </div>

      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold font-mono bg-white/95 text-slate-700 shadow-2xs border border-slate-200/90 backdrop-blur-xs">
        <FileText className={`w-3 h-3 ${file_type === 'ZIP' ? 'text-indigo-600' : 'text-rose-500'} shrink-0`} />
        <span>{file_type} • {file_size}</span>
      </div>

      {/* Hover Quick-Preview Glass Pill */}
      <div className="absolute inset-0 z-30 bg-slate-900/25 backdrop-blur-[2px] opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-xl border border-white/80 transform translate-y-2 group-hover/thumb:translate-y-0 transition-transform duration-200">
          <Eye className="w-4 h-4 text-[#07865B]" />
          <span>Quick Preview</span>
        </span>
      </div>

      {/* ========================================================
          REALISTIC PHYSICAL PDF DOCUMENT SHEET (Cover Page Mockup)
          ======================================================== */}
      <div className="w-[88%] max-w-[290px] h-[200px] bg-white rounded-t-lg shadow-[0_-6px_20px_rgba(0,0,0,0.08),0_4px_14px_rgba(0,0,0,0.12)] border border-slate-200/90 p-3 sm:p-3.5 flex flex-col justify-between transform transition-all duration-300 group-hover/thumb:-translate-y-1.5 group-hover/thumb:shadow-[0_-8px_25px_rgba(0,0,0,0.14),0_6px_18px_rgba(0,0,0,0.16)] relative">
        {/* Top Spine / Accent Header Bar */}
        <div className="space-y-1.5">
          <div className={`h-1.5 w-full rounded-full ${theme.bannerBg}`} />

          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <div className="flex items-center gap-1 text-[8.5px] font-bold tracking-wider text-slate-500 uppercase font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Sahyadri T&P Cell</span>
            </div>
            <span className="text-[8px] font-mono font-semibold text-slate-400">
              DOC #{id.toUpperCase().replace('RES-', '')}
            </span>
          </div>

          {/* Miniature Document Title */}
          <div>
            <span className="text-[8px] font-bold uppercase tracking-wider text-[#07865B]">
              {theme.badgeText}
            </span>
            <h4 className="text-[11px] font-extrabold text-slate-900 tracking-tight leading-tight line-clamp-1 mt-0.5">
              {title}
            </h4>
          </div>
        </div>

        {/* Dynamic Graphic Content Body Specific to Document */}
        <div className="my-1.5 p-2 rounded-md bg-slate-50/90 border border-slate-100 flex-1 flex flex-col justify-center overflow-hidden">
          {/* 1. SPEED MATH & QUANT */}
          {id === 'res-apt-01' && (
            <div className="space-y-1 font-mono text-[9px] text-slate-700">
              <div className="flex items-center justify-between font-bold text-emerald-800 bg-emerald-50/80 px-1.5 py-0.5 rounded border border-emerald-200/60">
                <span>CI = P(1 + R/100)ᵗ</span>
                <span className="text-[8px] text-emerald-600 font-sans">Formula 01</span>
              </div>
              <div className="grid grid-cols-3 gap-1 text-[8px] text-center text-slate-600">
                <span className="bg-white p-0.5 rounded border border-slate-200">1/7 = 14.2%</span>
                <span className="bg-white p-0.5 rounded border border-slate-200">1/8 = 12.5%</span>
                <span className="bg-white p-0.5 rounded border border-slate-200">1/9 = 11.1%</span>
              </div>
              <div className="text-[8px] text-slate-500 truncate">
                Δ(2yr CI-SI) = P(R/100)² • Relative Speed
              </div>
            </div>
          )}

          {/* 2. LOGICAL REASONING */}
          {id === 'res-apt-02' && (
            <div className="flex items-center justify-between gap-2">
              <div className="relative w-12 h-12 rounded-full border-2 border-dashed border-teal-500/70 flex items-center justify-center shrink-0 bg-teal-50/50">
                <div className="w-4 h-4 rounded-full bg-teal-600 text-white text-[7px] font-bold flex items-center justify-center">
                  C
                </div>
                <span className="absolute -top-1 left-4 w-2 h-2 rounded-full bg-slate-400 text-[6px] text-white flex items-center justify-center">A</span>
                <span className="absolute top-4 -right-1 w-2 h-2 rounded-full bg-slate-400 text-[6px] text-white flex items-center justify-center">B</span>
                <span className="absolute -bottom-1 left-4 w-2 h-2 rounded-full bg-slate-400 text-[6px] text-white flex items-center justify-center">D</span>
                <span className="absolute top-4 -left-1 w-2 h-2 rounded-full bg-slate-400 text-[6px] text-white flex items-center justify-center">E</span>
              </div>
              <div className="space-y-1 text-[8px] text-slate-600 flex-1">
                <div className="font-bold text-slate-800 text-[9px]">Circular Arrangement</div>
                <div className="text-slate-500">CW = Left • CCW = Right</div>
                <div className="text-emerald-700 font-medium">8-Person Inner Facing Matrix</div>
              </div>
            </div>
          )}

          {/* 3. VERBAL ABILITY */}
          {id === 'res-apt-03' && (
            <div className="space-y-1 text-[8.5px] text-slate-700">
              <div className="flex items-center gap-1 text-[#07865B] font-bold">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                <span>Subject-Verb Agreement Matrix</span>
              </div>
              <div className="text-[8px] text-slate-500 leading-tight">
                • Either/Or binds to closest noun.
                <br />
                • &quot;Along with&quot; binds to primary subject.
              </div>
              <div className="flex gap-1 text-[7.5px] font-mono">
                <span className="px-1 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">200 Idioms</span>
                <span className="px-1 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">RC Speed Reading</span>
              </div>
            </div>
          )}

          {/* 4. CORE CS */}
          {id === 'res-tech-01' && (
            <div className="grid grid-cols-2 gap-1 text-[8px] text-slate-700 font-mono">
              <div className="p-1 rounded bg-white border border-slate-200">
                <span className="font-bold text-sky-800 block">DBMS</span>
                <span className="text-[7.5px] text-slate-500">ACID • BCNF Normalization</span>
              </div>
              <div className="p-1 rounded bg-white border border-slate-200">
                <span className="font-bold text-sky-800 block">OS</span>
                <span className="text-[7.5px] text-slate-500">Paging • Deadlock 4-Rules</span>
              </div>
              <div className="p-1 rounded bg-white border border-slate-200">
                <span className="font-bold text-sky-800 block">Networks</span>
                <span className="text-[7.5px] text-slate-500">TCP 3-Way SYN/ACK</span>
              </div>
              <div className="p-1 rounded bg-white border border-slate-200">
                <span className="font-bold text-sky-800 block">OOPs</span>
                <span className="text-[7.5px] text-slate-500">Polymorphism • Interface</span>
              </div>
            </div>
          )}

          {/* 5. TOP 75 SQL QUERIES */}
          {id === 'res-tech-02' && (
            <div className="space-y-1 font-mono text-[8px] text-slate-800">
              <div className="bg-slate-900 text-slate-200 p-1.5 rounded text-[7.5px] leading-tight overflow-hidden">
                <span className="text-purple-400">WITH</span> Ranked <span className="text-purple-400">AS</span> (
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">SELECT</span> emp_id,
                <br />
                &nbsp;&nbsp;<span className="text-yellow-300">DENSE_RANK()</span> OVER(...)
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-500 pt-0.5">
                <span>Self Joins</span>
                <span>•</span>
                <span>CTEs</span>
                <span>•</span>
                <span>Window Funcs</span>
              </div>
            </div>
          )}

          {/* 6. DSA ROADMAP */}
          {id === 'res-tech-03' && (
            <div className="space-y-1 text-[8px] text-slate-700">
              <div className="flex items-center justify-between text-[8px] font-bold text-slate-800">
                <span>Phase 1: Linear Patterns</span>
                <span className="text-emerald-700 font-mono">15/15 ✓</span>
              </div>
              <div className="h-1 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full w-4/5" />
              </div>
              <div className="flex items-center justify-between text-[7.5px] text-slate-500">
                <span>Phase 2: Trees &amp; BST</span>
                <span className="text-slate-400 font-mono">In Progress</span>
              </div>
              <div className="text-[7px] text-indigo-700 font-mono truncate">
                Two Pointers • Sliding Window • Monotonic Stack
              </div>
            </div>
          )}

          {/* 7. HR STAR GUIDE */}
          {id === 'res-int-01' && (
            <div className="space-y-1">
              <div className="grid grid-cols-4 gap-1 text-center font-bold text-[8px]">
                <div className="p-0.5 rounded bg-violet-100 text-violet-800 border border-violet-200">S</div>
                <div className="p-0.5 rounded bg-purple-100 text-purple-800 border border-purple-200">T</div>
                <div className="p-0.5 rounded bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200">A</div>
                <div className="p-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">R</div>
              </div>
              <div className="text-[7.5px] text-slate-600 leading-tight">
                <strong>Situation • Task • Action • Result</strong>
                <br />
                50 Vetted Responses for &quot;Greatest Weakness&quot; &amp; &quot;Conflict Resolution&quot;.
              </div>
            </div>
          )}

          {/* 8. LATEX ATS RESUME */}
          {id === 'res-int-02' && (
            <div className="space-y-1 text-slate-700">
              <div className="text-center border-b border-slate-200 pb-0.5">
                <div className="font-serif font-black text-[9px] uppercase tracking-wider text-slate-900">
                  SHRAVAN KUMAR
                </div>
                <div className="text-[6.5px] text-slate-500 font-mono">
                  github.com/shravan • linkedin.com/in/shravan
                </div>
              </div>
              <div className="space-y-0.5 text-[7px]">
                <div className="font-bold text-slate-800 uppercase tracking-tight text-[7.5px]">EDUCATION</div>
                <div className="text-slate-500">B.E. Computer Science • 8.84 CGPA</div>
                <div className="font-bold text-slate-800 uppercase tracking-tight text-[7.5px]">EXPERIENCE</div>
                <div className="text-slate-500">• Reduced API latency by 45% using Redis caching</div>
              </div>
            </div>
          )}

          {/* 9. GROUP DISCUSSION TOPICS */}
          {id === 'res-int-03' && (
            <div className="space-y-1 text-[8px] text-slate-700">
              <div className="font-bold text-slate-800 text-[8.5px] flex items-center gap-1">
                <MessageSquare className="w-2.5 h-2.5 text-purple-600 shrink-0" />
                <span>3 Pillars of GD Leadership</span>
              </div>
              <div className="text-[7.5px] text-slate-500 space-y-0.5">
                <div>1. <strong>Initiator:</strong> Neutral framing definitions</div>
                <div>2. <strong>Moderator:</strong> Bringing quiet voices in</div>
                <div>3. <strong>Summarizer:</strong> Actionable consensus</div>
              </div>
            </div>
          )}
        </div>

        {/* Miniature Document Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-1 text-[8px] text-slate-400 font-mono">
          <span>Page 1 of {page_count}</span>
          <span className="flex items-center gap-1 text-emerald-700 font-sans font-medium">
            <Award className="w-2.5 h-2.5" />
            Official Sahyadri Pack
          </span>
        </div>
      </div>
    </div>
  );
}

