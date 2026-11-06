'use client';

import React, { useState, useMemo } from 'react';
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
  Sparkles,
  Tag,
  ArrowRight,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatDate } from '@/lib/utils';
import { Newsletter } from '@/types';
import FormattedMessage from '@/components/chat/FormattedMessage';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PageHeaderBanner from '@/components/layout/PageHeaderBanner';

// Default fallback image if an edition does not specify one
const DEFAULT_COVER_IMAGE =
  'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80';

export default function NewslettersPage() {
  const { newsletters, userRole, deleteNewsletter, addNewsletter } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'read_time'>('newest');
  const [activeNewsletter, setActiveNewsletter] = useState<Newsletter | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Faculty publishing form state
  const [isPublishingOpen, setIsPublishingOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newCategory, setNewCategory] = useState('AI & Big Tech');
  const [newCoverImage, setNewCoverImage] = useState(
    'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80'
  );
  const [newTags, setNewTags] = useState('Tech Trends, AI Breakthroughs');
  const [newReadTime, setNewReadTime] = useState('6 min read');
  const [newContent, setNewContent] = useState('');
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Available Category Filter Options
  const categories = [
    'All',
    'AI & Big Tech',
    'Aptitude & Math',
    'Career Strategy',
    'System Design',
    'Interviews & HR',
    'Core CS',
    'Company Drives',
    'Global Opportunities',
  ];

  // Filtered & Sorted Newsletters
  const filteredNewsletters = useMemo(() => {
    let list = newsletters.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === 'All' ||
        item.category === selectedCategory ||
        item.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'oldest') {
      list = [...list].sort((a, b) => a.edition_no - b.edition_no);
    } else if (sortBy === 'read_time') {
      list = [...list].sort((a, b) => {
        const timeA = parseInt(a.read_time) || 0;
        const timeB = parseInt(b.read_time) || 0;
        return timeB - timeA;
      });
    } else {
      // Default: newest first
      list = [...list].sort((a, b) => b.edition_no - a.edition_no);
    }

    return list;
  }, [newsletters, searchQuery, selectedCategory, sortBy]);

  // Featured Spotlight is the most recent edition
  const featuredEdition = newsletters.length > 0 ? newsletters[0] : null;

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
      category: newCategory,
      cover_image: newCoverImage || DEFAULT_COVER_IMAGE,
      tags: newTags.split(',').map((t) => t.trim()).filter(Boolean),
      read_time: newReadTime,
      publish_date: new Date().toISOString().split('T')[0],
      author_name: 'Dr. Rajesh Rao, Head of Placements',
      content_markdown:
        newContent ||
        `# ${newTitle}\n\n${newSummary}\n\n## 1. Executive Summary\nAnalysis of this week's campus placement intelligence.`,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-[#F7FAF8] min-h-screen">
      {/* Lined Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Weekly Newsletter' }]} />

      {/* Styled Emerald Header Banner with Dot Matrix Texture */}
      <PageHeaderBanner
        badgeIcon={Newspaper}
        badgeText={`Weekly Career Market Intelligence Archive (${newsletters.length} Curated Editions)`}
        title="Campus Placement Newsletter"
        description="Curated weekly intelligence for 2026 campus recruitment: in-depth articles on AI breakthroughs, hiring shifts, alumni interview debriefs, speed-math tricks, and ATS resume blueprints."
        watermarkIcon={Newspaper}
        actions={
          userRole === 'faculty' ? (
            <button
              onClick={() => setIsPublishingOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs shadow-md shadow-amber-900/30 transition-all active:scale-95 cursor-pointer shrink-0 border border-amber-400/40"
            >
              <Plus className="w-4 h-4" />
              <span>Publish New Edition</span>
            </button>
          ) : undefined
        }
      />

      {/* Intelligence Dashboard KPI Overview Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3EBE6] shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] shrink-0">
            <Newspaper className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              {newsletters.length} Editions
            </div>
            <div className="text-[11px] text-slate-500 font-medium">Curated 2026 Archive</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3EBE6] shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">65+ Mins</div>
            <div className="text-[11px] text-slate-500 font-medium">Placement Analysis</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3EBE6] shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">Mondays</div>
            <div className="text-[11px] text-slate-500 font-medium">Weekly 9:00 AM Drops</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E3EBE6] shadow-xs flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">100% Free</div>
            <div className="text-[11px] text-slate-500 font-medium">Institutional Access</div>
          </div>
        </div>
      </div>

      {/* Featured Cover Story Spotlight (Hero Issue) */}
      {featuredEdition && selectedCategory === 'All' && !searchQuery && (
        <div className="bg-white rounded-3xl border border-[#E3EBE6] shadow-md overflow-hidden hover:border-[#07865B]/60 transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#EAF7F1] border border-[#C6EBD9] text-[#044E39]">
                    <Sparkles className="w-3.5 h-3.5 text-[#07865B]" />
                    <span>LATEST COVER STORY</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    Edition #{featuredEdition.edition_no}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(featuredEdition.publish_date)}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-[#07865B] transition-colors">
                  {featuredEdition.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {featuredEdition.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredEdition.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#F7FAF8] text-slate-700 border border-[#E3EBE6] px-2.5 py-1 rounded-lg font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info & CTA */}
              <div className="pt-4 border-t border-[#E3EBE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-600">
                  <div className="w-8 h-8 rounded-full bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] font-bold">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">
                      {featuredEdition.author_name || 'Dr. Rajesh Rao, Head of Placements'}
                    </div>
                    <div className="text-[11px] text-slate-500">{featuredEdition.read_time}</div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveNewsletter(featuredEdition)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#07865B] hover:bg-[#066e4a] text-white font-bold text-xs shadow-md shadow-[#07865B]/20 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Read Full Cover Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Cover Image Column */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-900">
              <img
                src={featuredEdition.cover_image || DEFAULT_COVER_IMAGE}
                alt={featuredEdition.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => {
                  setImageErrors((prev) => ({ ...prev, [featuredEdition.id]: true }));
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-300" />
                <span>{featuredEdition.read_time}</span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-[#044E39]/90 backdrop-blur-md border border-emerald-500/40 text-white text-xs font-bold">
                {featuredEdition.category || 'Tech Trends'}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lined Dashboard Controls: Category Filter Rail & Search */}
      <div className="bg-white rounded-2xl border border-[#E3EBE6] p-5 shadow-xs space-y-4">
        {/* Category Tabs */}
        <div>
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-[#07865B]" />
            <span>Placement Intelligence Tracks</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                    active
                      ? 'bg-[#07865B] text-white border-[#07865B] shadow-xs'
                      : 'bg-white hover:bg-[#F7FAF8] text-slate-700 border-[#E3EBE6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Row & Sort Controls */}
        <div className="border-t border-[#E3EBE6] pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, keyword (STAR, ATS, AI, Speed Math)..."
              className="w-full bg-[#F7FAF8] border border-[#E3EBE6] rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#07865B] focus:bg-white shadow-xs transition"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F7FAF8] border border-[#E3EBE6] text-xs text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:border-[#07865B] shadow-xs cursor-pointer"
              >
                <option value="newest">Latest Editions</option>
                <option value="oldest">Earliest Editions</option>
                <option value="read_time">Longest Read</option>
              </select>
            </div>

            <div className="text-xs text-slate-600 font-medium px-3 py-1.5 rounded-lg bg-[#EAF7F1] border border-[#C6EBD9] text-[#044E39]">
              Showing <strong className="text-[#044E39] font-bold">{filteredNewsletters.length}</strong> of{' '}
              {newsletters.length} editions
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Editions Cards Grid with Representative Visual Cover Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNewsletters.map((issue) => {
          const hasError = imageErrors[issue.id];
          const coverImg = issue.cover_image || DEFAULT_COVER_IMAGE;

          return (
            <div
              key={issue.id}
              className="bg-white rounded-2xl border border-[#E3EBE6] shadow-xs flex flex-col justify-between hover:border-[#07865B]/60 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div>
                {/* 1. Representative Cover Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  {!hasError ? (
                    <img
                      src={coverImg}
                      alt={issue.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={() => {
                        setImageErrors((prev) => ({ ...prev, [issue.id]: true }));
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#044E39] via-[#07865B] to-[#065F46] flex items-center justify-center text-white/40">
                      <Newspaper className="w-12 h-12" />
                    </div>
                  )}

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Left Floating Edition Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold shadow-xs">
                    Edition #{issue.edition_no}
                  </div>

                  {/* Top-Right Read Time Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-emerald-200 text-[11px] font-medium flex items-center gap-1 shadow-xs">
                    <Clock className="w-3 h-3 text-emerald-300" />
                    <span>{issue.read_time}</span>
                  </div>

                  {/* Bottom-Left Floating Category Badge */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#07865B] text-white text-[10px] font-bold tracking-wide uppercase shadow-sm">
                    {issue.category || 'Placement Strategy'}
                  </div>
                </div>

                {/* 2. Card Content Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{formatDate(issue.publish_date)}</span>
                    <span className="text-slate-300">•</span>
                    <span className="line-clamp-1">{issue.author_name || 'Dr. Rajesh Rao'}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#07865B] transition-colors line-clamp-2">
                    {issue.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {issue.summary}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {issue.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F7FAF8] text-slate-700 border border-[#E3EBE6] px-2 py-0.5 rounded font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Card Footer Action */}
              <div className="p-5 pt-0">
                <div className="pt-3.5 border-t border-[#E3EBE6] flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium text-[11px]">Campus Intelligence</span>

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
                      className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#07865B] hover:bg-[#066e4a] text-white font-semibold shadow-xs transition active:scale-95 cursor-pointer"
                    >
                      <span>Read Issue</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Full Reading Modal / Drawer */}
      {activeNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-[#E3EBE6] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-900">
            {/* Modal Header Bar */}
            <div className="px-6 py-4 bg-[#F7FAF8] border-b border-[#E3EBE6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#EAF7F1] text-[#044E39] border border-[#C6EBD9]">
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
                      if (
                        confirm(
                          `Delete Newsletter Edition #${activeNewsletter.edition_no} ("${activeNewsletter.title}")?`
                        )
                      ) {
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
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white rounded-xl border border-transparent hover:border-[#E3EBE6] transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveNewsletter(null)}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-white rounded-xl border border-transparent hover:border-[#E3EBE6] transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Modal Banner Image */}
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={activeNewsletter.cover_image || DEFAULT_COVER_IMAGE}
                  alt={activeNewsletter.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#07865B] text-white text-[11px] font-bold">
                      {activeNewsletter.category || 'Career Intelligence'}
                    </span>
                    {activeNewsletter.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 text-[11px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {activeNewsletter.title}
                  </h1>
                </div>
              </div>

              {/* Author & Body Container */}
              <div className="p-6 sm:p-10 space-y-6 max-w-3xl mx-auto">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F7FAF8] border border-[#E3EBE6]">
                  <div className="w-10 h-10 rounded-full bg-[#EAF7F1] border border-[#C6EBD9] flex items-center justify-center text-[#07865B] font-bold">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">
                      {activeNewsletter.author_name || 'Dr. Rajesh Rao, Head of Placements'}
                    </div>
                    <div className="text-xs text-slate-500">
                      Published on {formatDate(activeNewsletter.publish_date)} • {activeNewsletter.read_time}
                    </div>
                  </div>
                </div>

                {/* Rendered Markdown Body */}
                <div className="prose prose-slate prose-emerald max-w-none text-slate-800 text-sm sm:text-base leading-relaxed">
                  <FormattedMessage content={activeNewsletter.content_markdown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Faculty Publishing Modal */}
      {isPublishingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
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
                  <label className="block text-slate-700 font-medium mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="AI & Big Tech">AI & Big Tech</option>
                    <option value="Aptitude & Math">Aptitude & Math</option>
                    <option value="Career Strategy">Career Strategy</option>
                    <option value="System Design">System Design</option>
                    <option value="Interviews & HR">Interviews & HR</option>
                    <option value="Core CS">Core CS</option>
                    <option value="Company Drives">Company Drives</option>
                  </select>
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
                <label className="block text-slate-700 font-medium mb-1">Cover Image URL</label>
                <input
                  type="url"
                  value={newCoverImage}
                  onChange={(e) => setNewCoverImage(e.target.value)}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500"
                />
              </div>

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
