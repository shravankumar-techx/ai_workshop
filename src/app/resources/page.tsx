'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Download,
  CheckCircle2,
  Eye,
  X,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { Resource } from '@/types';

export default function ResourcesPage() {
  const { resources } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'aptitude' | 'technical' | 'interview'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewResource, setPreviewResource] = useState<Resource | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'aptitude', label: 'Aptitude Mastery (Formulas & Tricks)' },
    { id: 'technical', label: 'Technical Core CS (DBMS, OS, Networks)' },
    { id: 'interview', label: 'Interview Prep (HR STAR, Resumes, GD)' },
  ];

  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      res.title.toLowerCase().includes(q) ||
      res.description.toLowerCase().includes(q) ||
      res.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleDownload = (res: Resource) => {
    setDownloadSuccessToast(`Downloading "${res.title}" (${res.file_type})...`);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-slate-50 min-h-screen">
      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-medium text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4" />
          <span>{downloadSuccessToast}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Campus Placement Repository & Cheat Sheets</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Study Materials & Prep Repository
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Instant access to vetted aptitude formula books, core CS revision sheets (DBMS, OS, Networks, OOPs), Top 75 SQL queries, and Overleaf LaTeX resume templates.
          </p>
        </div>
      </div>

      {/* Category Tabs & Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, tag, or subject (SQL, STAR, DBMS)..."
              className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs transition"
            />
          </div>

          <div className="text-xs text-slate-500">
            Showing <strong className="text-slate-900 font-bold">{filteredResources.length}</strong> study modules
          </div>
        </div>
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 group"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="px-2.5 py-0.5 rounded-full font-bold uppercase text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {res.category}
                </span>
                <span className="font-mono text-[10px] text-slate-600 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {res.file_type}
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {res.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {res.description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {res.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-500 font-medium">
                {res.download_count.toLocaleString()} downloads
              </span>

              <div className="flex items-center gap-2">
                {res.content_preview && (
                  <button
                    onClick={() => setPreviewResource(res)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                )}

                <button
                  onClick={() => handleDownload(res)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition active:scale-95 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight line-clamp-1">
                  {previewResource.title}
                </h3>
                <span className="text-xs text-emerald-700 capitalize">
                  {previewResource.category} Sheet Preview ({previewResource.file_type})
                </span>
              </div>

              <button
                onClick={() => setPreviewResource(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-sm leading-relaxed text-slate-800">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 whitespace-pre-wrap">
                {previewResource.content_preview}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Full version available via direct PDF download.
              </span>
              <button
                onClick={() => {
                  handleDownload(previewResource);
                  setPreviewResource(null);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-xs transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Full File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
