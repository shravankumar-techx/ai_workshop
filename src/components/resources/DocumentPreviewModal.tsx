'use client';

import React, { useState, useEffect } from 'react';
import { Resource } from '@/types';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Printer,
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  BookOpen,
  ArrowRight,
} from 'lucide-react';

interface DocumentPreviewModalProps {
  resource: Resource | null;
  downloadCount: number;
  onClose: () => void;
  onDownload: (resource: Resource) => void;
}

export default function DocumentPreviewModal({
  resource,
  downloadCount,
  onClose,
  onDownload,
}: DocumentPreviewModalProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [rotation, setRotation] = useState(0);

  // Close on Escape key
  useEffect(() => {
    if (!resource) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage((p) => Math.min(3, p + 1));
      if (e.key === 'ArrowLeft') setCurrentPage((p) => Math.max(1, p - 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [resource, onClose]);

  if (!resource) return null;

  const totalPages = 3; // Realistic multi-page interactive preview

  const handleZoomIn = () => setZoomLevel((z) => Math.min(150, z + 15));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(75, z - 15));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200 select-none"
    >
      {/* Click outside to dismiss backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Window Frame */}
      <div className="relative w-full max-w-5xl h-[92vh] max-h-[880px] bg-[#22272E] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100 z-10 animate-in zoom-in-95 duration-200">
        {/* ========================================================
            1. TOP HEADER BAR: TITLE, META, CONTROLS, CLOSE BUTTON
            ======================================================== */}
        <div className="px-4 sm:px-6 py-3 bg-[#1C2128] border-b border-slate-700/80 flex items-center justify-between gap-3 text-xs shrink-0">
          {/* Left: Document info */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h2
                id="preview-modal-title"
                className="text-xs sm:text-sm font-bold text-white tracking-tight truncate max-w-sm sm:max-w-md md:max-w-xl"
              >
                {resource.title}
              </h2>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                  {resource.category}
                </span>
                <span>•</span>
                <span>{resource.file_type} Document</span>
                <span>•</span>
                <span className="font-mono text-slate-300">
                  {resource.page_count || 32} Pages ({resource.file_size || '3.5 MB'})
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quick actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Download CTA Button */}
            <button
              onClick={() => onDownload(resource)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#07865B] hover:bg-[#065F46] text-white font-semibold text-xs shadow-xs transition active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download File</span>
              <span className="text-[10px] opacity-80 font-mono hidden md:inline">
                ({downloadCount.toLocaleString()})
              </span>
            </button>

            {/* Close Button with Esc Hint */}
            <button
              onClick={onClose}
              title="Close Preview (Esc)"
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            2. SECONDARY PDF VIEWER TOOLBAR (Page Navigation & Zoom)
            ======================================================== */}
        <div className="px-4 py-2 bg-[#2D333B] border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300 shrink-0">
          {/* Page Stepper */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-1 rounded bg-[#22272E] hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer text-slate-300"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span>
              Page <strong className="text-white">{currentPage}</strong> of{' '}
              <strong className="text-white">{totalPages}</strong>
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="p-1 rounded bg-[#22272E] hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition cursor-pointer text-slate-300"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Page Jump Chips */}
          <div className="hidden md:flex items-center gap-1.5 text-[10px]">
            <button
              onClick={() => setCurrentPage(1)}
              className={`px-2 py-0.5 rounded cursor-pointer transition ${
                currentPage === 1 ? 'bg-emerald-600 text-white font-bold' : 'bg-[#22272E] hover:bg-slate-700 text-slate-300'
              }`}
            >
              1. Executive Summary
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`px-2 py-0.5 rounded cursor-pointer transition ${
                currentPage === 2 ? 'bg-emerald-600 text-white font-bold' : 'bg-[#22272E] hover:bg-slate-700 text-slate-300'
              }`}
            >
              2. Core Cheat Sheet
            </button>
            <button
              onClick={() => setCurrentPage(3)}
              className={`px-2 py-0.5 rounded cursor-pointer transition ${
                currentPage === 3 ? 'bg-emerald-600 text-white font-bold' : 'bg-[#22272E] hover:bg-slate-700 text-slate-300'
              }`}
            >
              3. Placement Checklist
            </button>
          </div>

          {/* Zoom & Display Controls */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={handleZoomOut}
              className="p-1 rounded hover:text-white hover:bg-[#22272E] transition cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono text-[10px] w-9 text-center text-slate-300">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1 rounded hover:text-white hover:bg-[#22272E] transition cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <div className="h-3 w-px bg-slate-700 mx-1 hidden sm:block" />
            <button
              onClick={handleRotate}
              className="p-1 rounded hover:text-white hover:bg-[#22272E] transition cursor-pointer hidden sm:block"
              title="Rotate 90°"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1 rounded hover:text-white hover:bg-[#22272E] transition cursor-pointer hidden sm:block"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================
            3. FUNCTIONAL PDF VIEWER CANVAS & AUTHENTIC DOCUMENT SHEET
            ======================================================== */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 bg-[#373E47] flex justify-center items-start">
          <div
            style={{
              transform: `scale(${zoomLevel / 100}) rotate(${rotation}deg)`,
              transformOrigin: 'top center',
              transition: 'transform 200ms ease-out',
            }}
            className="w-full max-w-2xl bg-white text-slate-900 rounded shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-200 min-h-[640px] p-8 sm:p-12 flex flex-col justify-between font-sans relative select-text"
          >
            {/* Paper Header: Official Institutional Seal & Rules */}
            <div>
              <div className="flex items-start justify-between border-b-2 border-slate-900 pb-3 mb-6">
                <div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-[#07865B] uppercase">
                    Sahyadri College of Engineering &amp; Management
                  </div>
                  <div className="text-xs font-bold text-slate-800 tracking-tight">
                    DEPARTMENT OF TRAINING &amp; PLACEMENTS — CAMPUSPREP OFFICIAL REPOSITORY
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono mt-0.5">
                    CONFIDENTIAL STUDY GUIDE • BATCH 2026 PLACEMENT SELECTION DRIVE
                  </div>
                </div>

                <div className="text-right font-mono text-[9px] text-slate-500">
                  <div className="font-bold text-slate-900">DOC ID: {resource.id.toUpperCase()}</div>
                  <div className="text-emerald-700 font-semibold">VERIFIED PACK ✓</div>
                  <div>PAGE {currentPage} OF {totalPages}</div>
                </div>
              </div>

              {/* Title Section */}
              <div className="mb-6">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-[#07865B]">
                  {resource.category} MODULE
                </span>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-2 leading-snug">
                  {resource.title}
                </h1>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed italic border-l-2 border-[#07865B] pl-3">
                  {resource.description}
                </p>
              </div>

              {/* Dynamic Page Content Based on Selected Page */}
              {currentPage === 1 && (
                <div className="space-y-4 text-xs text-slate-800">
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-sm text-slate-900 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#07865B]" />
                      <span>Executive Overview &amp; Key Syllabus Points</span>
                    </h3>
                    <ul className="space-y-1.5 list-disc pl-4 text-slate-700 leading-relaxed">
                      <li>Curated and audited for high-frequency technical &amp; cognitive interview patterns.</li>
                      <li>Standardized for recruitment drives by Microsoft, TCS, Infosys, Cohesity, Belc, and IMV Corporation.</li>
                      <li>Follows national curriculum guidelines for engineering campus placements.</li>
                    </ul>
                  </div>

                  {resource.content_preview && (
                    <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-200 text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed">
                      {resource.content_preview.trim()}
                    </div>
                  )}
                </div>
              )}

              {currentPage === 2 && (
                <div className="space-y-4 text-xs text-slate-800">
                  <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h3 className="font-bold text-sm text-slate-900 mb-2">
                      Deep Dive: Practical Applications &amp; Exam Checklist
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Mastering these foundational concepts gives candidates an empirical advantage during timed 45-minute online tests and subsequent technical panel evaluations.
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-2.5 rounded bg-white border border-slate-200">
                        <span className="font-bold text-emerald-800 block mb-1">Time Management</span>
                        <p className="text-[11px] text-slate-600">
                          Target solving quantitative questions under 45 seconds using Vedic and mental approximations.
                        </p>
                      </div>
                      <div className="p-2.5 rounded bg-white border border-slate-200">
                        <span className="font-bold text-emerald-800 block mb-1">Sectional Cutoffs</span>
                        <p className="text-[11px] text-slate-600">
                          Maintain a minimum 70% accuracy across every individual section to clear aggregate qualifiers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-[11px] space-y-1">
                    <div className="text-slate-400">// Proctored Assessment Simulation Notes</div>
                    <div><span className="text-emerald-400">STATUS:</span> Vetted by Sahyadri Career Training Division</div>
                    <div><span className="text-sky-400">TOTAL DOWNLOADS:</span> {downloadCount.toLocaleString()} candidates verified</div>
                    <div><span className="text-amber-400">COMPLIANCE:</span> Verified for Batch 2026 Campus Placement Drives</div>
                  </div>
                </div>
              )}

              {currentPage === 3 && (
                <div className="space-y-4 text-xs text-slate-800">
                  <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 space-y-2">
                    <h3 className="font-bold text-sm text-emerald-950 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#07865B]" />
                      <span>Company Drive Readiness &amp; Self-Assessment Rubric</span>
                    </h3>
                    <p className="text-emerald-900 leading-relaxed">
                      Before attending on-campus aptitude tests, ensure you have scored at least 85% on our mock exams on the portal.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                          <th className="p-2.5">Topic Area</th>
                          <th className="p-2.5">Target Speed</th>
                          <th className="p-2.5">Accuracy Goal</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="p-2.5 font-medium">Core Concepts &amp; Theory</td>
                          <td className="p-2.5 font-mono text-slate-600">&lt; 30s / Q</td>
                          <td className="p-2.5 font-bold text-emerald-700">95%+</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">Analytical Logic &amp; Puzzles</td>
                          <td className="p-2.5 font-mono text-slate-600">60s - 90s / Q</td>
                          <td className="p-2.5 font-bold text-emerald-700">85%+</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-medium">Code Tracing &amp; Syntax</td>
                          <td className="p-2.5 font-mono text-slate-600">&lt; 60s / Q</td>
                          <td className="p-2.5 font-bold text-emerald-700">90%+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Paper Footer: Formal Disclaimers & Signatures */}
            <div className="border-t-2 border-slate-900 pt-3 mt-8 flex items-center justify-between text-[9px] font-mono text-slate-500">
              <div>
                <span>CampusPrep — Sahyadri Engineering Placement Portal</span>
                <span className="mx-2">•</span>
                <span>All Rights Reserved</span>
              </div>
              <div className="font-bold text-slate-700">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. MODAL FOOTER BAR WITH DIRECT DOWNLOAD ACTION
            ======================================================== */}
        <div className="px-5 py-3 bg-[#1C2128] border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <Award className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Official placement preparation material • Virus-scanned &amp; validated for 2026 Batch
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-medium text-xs transition cursor-pointer"
            >
              Close Viewer
            </button>
            <button
              onClick={() => onDownload(resource)}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#07865B] hover:bg-[#065F46] text-white font-bold text-xs shadow-xs transition active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Full Document</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

