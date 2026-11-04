'use client';

import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  Search,
  Printer,
  X,
  ChevronRight,
  User,
  Trash2,
  Plus,
  Save,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatDate } from '@/lib/utils';
import { Newsletter } from '@/types';
import FormattedMessage from '@/components/chat/FormattedMessage';

export default function NewslettersPage() {
  const { newsletters, userRole, deleteNewsletter, addNewsletter } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNewsletter, setActiveNewsletter] = useState<Newsletter | null>(null);

  // Faculty publishing form state
  const [isPublishingOpen, setIsPublishingOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newTags, setNewTags] = useState('Tech Trends, AI Breakthroughs');
  const [newReadTime, setNewReadTime] = useState('6 min read');
  const [newContent, setNewContent] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);

  const filteredNewsletters = newsletters.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const handlePrint = () => {
    window.print();
  };

  const handlePublishSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newSummary.trim()) return;

    const nextEditionNo = newsletters.length > 0 ? Math.max(...newsletters.map((n) => n.edition_no)) + 1 : 25;

    addNewsletter({
      edition_no: nextEditionNo,
      title: newTitle,
      summary: newSummary,
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
      read_time: newReadTime,
      publish_date: new Date().toISOString().split('T')[0],
      author_name: 'Dr. Rajesh Rao, Head of Placements',
      content_markdown: newContent || `# ${newTitle}\n\n${newSummary}\n\n## 1. Executive Summary\nAnalysis of this week's campus placement intelligence.`,
    });

    setPublishSuccess(true);
    setTimeout(() => {
      setPublishSuccess(false);
      setIsPublishingOpen(false);
      setNewTitle('');
      setNewSummary('');
      setNewContent('');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-3 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
            <span>Weekly Career Market Intelligence Archive (10 Curated Editions)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Campus Placement Newsletter
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Curated weekly intelligence for 2026 campus recruitment: 10 in-depth articles on AI breakthroughs, hiring shifts, alumni interview debriefs, speed-math tricks, and ATS resume blueprints.
          </p>
        </div>

        {/* Faculty Fast Action CTA */}
        {userRole === 'faculty' && (
          <div className="z-10 shrink-0">
            <button
              onClick={() => setIsPublishingOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs shadow-md shadow-amber-600/20 transition active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Publish New Edition</span>
            </button>
          </div>
        )}
      </div>

      {/* Search Bar & Archive Counter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by topic, keyword (STAR, ATS, AI, Speed Math)..."
            className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-xs transition"
          />
        </div>

        <div className="text-xs text-slate-500">
          Archive contains <strong className="text-slate-900 font-bold">{newsletters.length}</strong> curated editions
        </div>
      </div>

      {/* Newsletter Editions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredNewsletters.map((issue) => (
          <div
            key={issue.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 group"
          >
            <div>
              {/* Edition Header */}
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Edition #{issue.edition_no}
                </span>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(issue.publish_date)}</span>
                </div>
              </div>

              <h2 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                {issue.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {issue.summary}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {issue.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{issue.read_time}</span>
              </span>

              <div className="flex items-center gap-2">
                {userRole === 'faculty' && (
                  <button
                    onClick={() => {
                      if (confirm(`Delete Newsletter Edition #${issue.edition_no} ("${issue.title}")?`)) {
                        deleteNewsletter(issue.id);
                      }
                    }}
                    className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition cursor-pointer"
                    title="Delete newsletter issue (Faculty)"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={() => setActiveNewsletter(issue)}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs transition active:scale-95 cursor-pointer"
                >
                  <span>Read Issue</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Reading Modal / Drawer */}
      {activeNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900">
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Edition #{activeNewsletter.edition_no}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(activeNewsletter.publish_date)}</span>
                </span>
                <span className="text-xs text-slate-500">• {activeNewsletter.read_time}</span>
              </div>

              <div className="flex items-center gap-2">
                {userRole === 'faculty' && (
                  <button
                    onClick={() => {
                      if (confirm(`Delete Newsletter Edition #${activeNewsletter.edition_no} ("${activeNewsletter.title}")?`)) {
                        deleteNewsletter(activeNewsletter.id);
                        setActiveNewsletter(null);
                      }
                    }}
                    title="Delete Newsletter (Faculty)"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-xs font-semibold transition cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                )}
                <button
                  onClick={handlePrint}
                  title="Print / Save as PDF"
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveNewsletter(null)}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6">
              <div className="space-y-2 border-b border-slate-200 pb-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {activeNewsletter.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-semibold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {activeNewsletter.title}
                </h1>
                <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                  <User className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Curated by {activeNewsletter.author_name || 'Dr. Rajesh Rao, Head of Placements'}</span>
                </div>
              </div>

              {/* Rendered Markdown Body */}
              <div className="prose prose-slate prose-emerald max-w-none text-slate-700 text-sm sm:text-base leading-relaxed">
                <FormattedMessage content={activeNewsletter.content_markdown} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Publishing Modal */}
      {isPublishingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-amber-300 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900">
            <div className="px-6 py-5 bg-amber-50/70 border-b border-amber-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shadow-xs">
                  <Newspaper className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-950">Publish Weekly Placement Edition</h3>
                  <p className="text-[11px] text-amber-800">Curate and broadcast market intelligence to all students</p>
                </div>
              </div>
              <button
                onClick={() => setIsPublishingOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handlePublishSubmit} className="p-6 space-y-4 text-xs">
              {publishSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Digest edition published successfully & synced to database!</span>
                </div>
              )}

              <div>
                <label className="block text-slate-700 font-medium mb-1">Edition Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. 2026 Autonomous Agent Hiring Patterns & System Design Essentials"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Executive Summary</label>
                <textarea
                  required
                  rows={2}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="A concise 2-sentence executive summary displayed on cards..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    placeholder="AI Breakthroughs, Hiring, DSA"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Read Time</label>
                  <input
                    type="text"
                    value={newReadTime}
                    onChange={(e) => setNewReadTime(e.target.value)}
                    placeholder="6 min read"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-1">Markdown Article Content</label>
                <textarea
                  rows={6}
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder="# Section Header\n\nDetailed analysis of tech hiring shifts and key takeaways..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 font-mono text-[11px] focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPublishingOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md shadow-amber-600/20 transition cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Publish & Broadcast</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
