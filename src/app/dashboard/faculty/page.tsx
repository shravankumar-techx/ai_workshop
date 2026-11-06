'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Users,
  BookOpen,
  Briefcase,
  Newspaper,
  Plus,
  Trash2,
  Edit3,
  Search,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileText,
  Calendar,
  ExternalLink,
  Save,
  ToggleLeft,
  ToggleRight,
  TrendingUp,
  BarChart3,
  Sparkles,
  X,
  Database,
  LogIn,
} from 'lucide-react';
import { useApp, facultyProfile } from '@/lib/store';
import { mockStudents } from '@/data/students';
import { formatDate } from '@/lib/utils';
import { Exam, Job, Newsletter, Resource } from '@/types';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PageHeaderBanner from '@/components/layout/PageHeaderBanner';

type FacultyTab = 'students' | 'exams' | 'jobs' | 'newsletters' | 'resources';

export default function FacultyDashboardPage() {
  const {
    currentUser,
    userRole,
    exams,
    addExam,
    deleteExam,
    deleteQuestion,
    jobs,
    addJob,
    toggleJobStatus,
    deleteJob,
    newsletters,
    addNewsletter,
    deleteNewsletter,
    resources,
    addResource,
    deleteResource,
    isSupabaseConnected,
    openAuthDrawer,
  } = useApp();

  const [activeTab, setActiveTab] = useState<FacultyTab>('students');
  const [studentSearch, setStudentSearch] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const [selectedExamForQuestions, setSelectedExamForQuestions] = useState<Exam | null>(null);

  // Dynamically resolve the active exam for questions so edits immediately reflect
  const activeExamForQuestions = exams.find((e) => e.id === selectedExamForQuestions?.id) || null;

  // New Exam Form State
  const [examFormOpen, setExamFormOpen] = useState(false);
  const [jsonUploadMode, setJsonUploadMode] = useState(false);
  const [rawExamJson, setRawExamJson] = useState('');
  const [newExamTitle, setNewExamTitle] = useState('');
  const [newExamCategory, setNewExamCategory] = useState<'Quantitative' | 'Logical Reasoning' | 'Verbal Ability' | 'Company Specific' | 'Japanese (JLPT N5)'>('Quantitative');
  const [newExamCompany, setNewExamCompany] = useState('');
  const [newExamDesc, setNewExamDesc] = useState('');
  const [newExamDuration, setNewExamDuration] = useState(15);
  const [newExamDifficulty, setNewExamDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  // New Job Form State
  const [jobFormOpen, setJobFormOpen] = useState(false);
  const [newJobCompany, setNewJobCompany] = useState('');
  const [newJobRole, setNewJobRole] = useState('');
  const [newJobCtc, setNewJobCtc] = useState('');
  const [newJobLocation, setNewJobLocation] = useState('Bengaluru / Hybrid');
  const [newJobEligibility, setNewJobEligibility] = useState('B.Tech CSE/ISE/ECE 2026 Batch');
  const [newJobCgpa, setNewJobCgpa] = useState(7.5);
  const [newJobUrl, setNewJobUrl] = useState('https://careers.google.com');

  // Newsletter CMS State
  const [newsletterEdition, setNewsletterEdition] = useState(25);
  const [newsletterTitle, setNewsletterTitle] = useState('');
  const [newsletterSummary, setNewsletterSummary] = useState('');
  const [newsletterMarkdown, setNewsletterMarkdown] = useState('');

  // Resource Upload State
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceCategory, setResourceCategory] = useState<'aptitude' | 'technical' | 'interview'>('technical');
  const [resourceDesc, setResourceDesc] = useState('');
  const [resourceTags, setResourceTags] = useState('SQL, DBMS, Placement');

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCreateExam = (e: React.FormEvent) => {
    e.preventDefault();

    if (jsonUploadMode && rawExamJson.trim()) {
      try {
        const parsed = JSON.parse(rawExamJson);
        addExam(parsed);
        showNotification('Exam batch imported from JSON schema successfully!');
        setRawExamJson('');
        setExamFormOpen(false);
        return;
      } catch (err) {
        alert('Invalid JSON format. Please verify syntax.');
        return;
      }
    }

    if (!newExamTitle.trim() || !newExamDesc.trim()) return;

    addExam({
      title: newExamTitle,
      category: newExamCategory,
      company_tag: newExamCompany || 'Institutional Drive',
      description: newExamDesc,
      duration_minutes: Number(newExamDuration),
      total_marks: 10,
      passing_percentage: 60,
      difficulty: newExamDifficulty,
      is_published: true,
      questions: [
        {
          id: `q-${Date.now()}-1`,
          exam_id: `exam-${Date.now()}`,
          question_text: 'Sample verification question: What is 15% of 400?',
          options: ['50', '60', '70', '80'],
          correct_index: 1,
          explanation: '15% of 400 = (15 / 100) * 400 = 60.',
          topic_tag: 'Percentages',
        },
      ],
    });

    showNotification(`Exam "${newExamTitle}" deployed to test player!`);
    setNewExamTitle('');
    setNewExamDesc('');
    setExamFormOpen(false);
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobCompany.trim() || !newJobRole.trim()) return;

    addJob({
      company_name: newJobCompany,
      role_title: newJobRole,
      ctc: newJobCtc || '₹12.0 LPA',
      location: newJobLocation,
      job_type: 'Full-time',
      eligibility: newJobEligibility,
      eligible_branches: ['CSE', 'ISE', 'ECE'],
      batch_year: '2026',
      min_cgpa: Number(newJobCgpa),
      deadline: new Date(Date.now() + 14 * 86400000).toISOString(),
      apply_url: newJobUrl,
      is_active: true,
    });

    showNotification(`Job listing for ${newJobCompany} posted!`);
    setNewJobCompany('');
    setNewJobRole('');
    setJobFormOpen(false);
  };

  const handlePublishNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterTitle.trim() || !newsletterMarkdown.trim()) return;

    addNewsletter({
      edition_no: Number(newsletterEdition),
      title: newsletterTitle,
      summary: newsletterSummary || 'Weekly placement strategy and market insights.',
      content_markdown: newsletterMarkdown,
      tags: ['Placement Strategy', 'Hiring Update'],
      read_time: '5 min read',
      publish_date: new Date().toISOString().split('T')[0],
      author_name: currentUser?.full_name || 'Placement Officer',
    });

    showNotification(`Edition #${newsletterEdition} published to newsletter archive!`);
    setNewsletterTitle('');
    setNewsletterMarkdown('');
    setNewsletterSummary('');
    setNewsletterEdition((prev) => prev + 1);
  };

  const handleAddResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resourceTitle.trim()) return;

    addResource({
      title: resourceTitle,
      category: resourceCategory,
      file_url: '#download',
      description: resourceDesc || 'High-yield placement study notes and reference manual.',
      tags: resourceTags.split(',').map((t) => t.trim()),
      file_type: 'PDF',
      content_preview: `### Revision Notes for ${resourceTitle}\n- Curated by Campus Placement Cell.\n- Covers core patterns and interview formulas.`,
    });

    showNotification(`Resource "${resourceTitle}" published!`);
    setResourceTitle('');
    setResourceDesc('');
  };

  const filteredStudents = mockStudents.filter(
    (s) =>
      s.full_name.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.roll_number.toLowerCase().includes(studentSearch.toLowerCase()) ||
      s.branch.toLowerCase().includes(studentSearch.toLowerCase())
  );

  // Mandatory Authentication Gate for Faculty Privileges
  if (userRole !== 'faculty') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6 bg-slate-50 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-3xl bg-amber-50 border border-amber-300 flex items-center justify-center mx-auto text-amber-600 shadow-sm">
          <ShieldCheck className="w-8 h-8 animate-pulse" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Faculty Access Required
          </h1>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            The Institutional Placement Suite and JSON Exam Injector require verified faculty credentials. Please authenticate using your Faculty Institutional ID and Department Security Key.
          </p>
        </div>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => openAuthDrawer('/dashboard/faculty')}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-600/20 transition active:scale-95 cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>Open Faculty Login Gate</span>
          </button>
          <Link
            href="/dashboard/student"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-medium text-xs shadow-xs transition"
          >
            <span>Return to Student Hub</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 pb-28 bg-[#F7FAF8] min-h-screen text-slate-900">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#07865B] text-white font-medium text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-top-4 duration-200 border border-[#044E39]">
          <CheckCircle2 className="w-4 h-4 text-emerald-200" />
          <span>{notification}</span>
        </div>
      )}

      {/* Lined Breadcrumb Navigation */}
      <Breadcrumbs items={[{ label: 'Faculty Suite' }]} />

      {/* Styled Emerald Header Banner with Dot Matrix Texture */}
      <PageHeaderBanner
        badgeIcon={ShieldCheck}
        badgeText="Placement Faculty & Corporate Relations Suite"
        title="Institutional Placement Portal"
        description={`Welcome, ${currentUser?.full_name || 'Dr. Rajesh Rao (Placement Director)'} • Access Level: Verified Placement Faculty • Batch of 2026.`}
        watermarkIcon={ShieldCheck}
        action={
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-2 rounded-xl bg-[#044E39]/70 border border-white/20 text-xs text-emerald-100 flex items-center gap-2 backdrop-blur-md">
              <span className={`w-2 h-2 rounded-full ${isSupabaseConnected ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
              <span>Database: <strong className="text-white font-mono text-[11px]">Supabase Cloud (Auto-Sync)</strong></span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-white text-[#044E39] border border-white/40 text-xs font-semibold shadow-xs">
              Batch: <strong className="text-[#07865B] font-bold">2026</strong>
            </div>
          </div>
        }
      />

      {/* Faculty Navigation Tabs - Lined Enclosed Card */}
      <div className="bg-white rounded-2xl border border-[#E3EBE6] p-2.5 shadow-xs flex flex-wrap items-center gap-2">
        {[
          { id: 'students', label: 'Candidate Analytics Directory', icon: Users, count: mockStudents.length },
          { id: 'exams', label: 'Exam Engine & JSON Schema Injector', icon: BookOpen, count: exams.length },
          { id: 'jobs', label: 'Job Board & Drive Verification', icon: Briefcase, count: jobs.length },
          { id: 'newsletters', label: 'Placement Digest CMS Editor', icon: Newspaper, count: newsletters.length },
          { id: 'resources', label: 'Resource Library Manager', icon: FileText, count: resources.length },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as FacultyTab)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer border ${
                isActive
                  ? 'bg-[#EAF7F1] text-[#044E39] border-[#07865B] shadow-xs'
                  : 'bg-white hover:bg-[#F7FAF8] text-slate-600 border-transparent hover:border-[#E3EBE6]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#07865B]' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              <span
                className={`ml-1 px-1.5 py-0.5 text-[10px] rounded-full font-mono ${
                  isActive ? 'bg-[#07865B] text-white' : 'bg-slate-100 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Student Analytics Directory */}
      {activeTab === 'students' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                placeholder="Search by student name, USN roll number, or branch..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Drive Ready: 65%</span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block ml-2" />
              <span>High Potential: 25%</span>
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Student Name & Email</th>
                    <th className="py-3 px-4">Roll No (USN)</th>
                    <th className="py-3 px-4">Branch</th>
                    <th className="py-3 px-4">CGPA</th>
                    <th className="py-3 px-4">Tests Taken</th>
                    <th className="py-3 px-4">Avg Accuracy</th>
                    <th className="py-3 px-4">Readiness Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {filteredStudents.map((stud) => (
                    <tr key={stud.id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">{stud.full_name}</div>
                        <div className="text-[11px] text-slate-400">{stud.email}</div>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-300">{stud.roll_number}</td>
                      <td className="py-3 px-4 text-[11px] text-slate-400">{stud.branch}</td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-400">{stud.cgpa}</td>
                      <td className="py-3 px-4 font-mono">{stud.tests_attempted} exams</td>
                      <td className="py-3 px-4">
                        <span
                          className={`font-semibold ${
                            stud.average_accuracy >= 80 ? 'text-emerald-400' : 'text-amber-400'
                          }`}
                        >
                          {stud.average_accuracy}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                            stud.readiness_status === 'Drive Ready'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : stud.readiness_status === 'High Potential'
                              ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                              : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                          }`}
                        >
                          {stud.readiness_status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => showNotification(`Contacting ${stud.full_name}...`)}
                          className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition"
                        >
                          View Logs
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Exam Engine & JSON Schema Injector */}
      {activeTab === 'exams' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Mock Exam Management & JSON Injector</h2>
              <p className="text-xs text-slate-400">Deploy custom assessments, inject JSON exam batches, or inspect candidate questions</p>
            </div>
            <button
              onClick={() => setExamFormOpen(!examFormOpen)}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-md transition active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>{examFormOpen ? 'Close Deployer' : 'Deploy New Exam'}</span>
            </button>
          </div>

          {/* Exam Creation Modal / Drawer */}
          {examFormOpen && (
            <div className="glass-panel rounded-2xl p-6 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-sm font-bold text-white">Deploy Aptitude Assessment</h3>
                <button
                  type="button"
                  onClick={() => setJsonUploadMode(!jsonUploadMode)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{jsonUploadMode ? 'Switch to Form Fields' : 'Upload via JSON Schema'}</span>
                </button>
              </div>

              {jsonUploadMode ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-400">
                    Paste raw JSON schema containing title, category, duration_minutes, and questions array:
                  </p>
                  <textarea
                    rows={8}
                    value={rawExamJson}
                    onChange={(e) => setRawExamJson(e.target.value)}
                    placeholder='{"title": "Custom Speed Math Exam", "category": "Quantitative", "duration_minutes": 15, "questions": [...]}'
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    onClick={handleCreateExam}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                  >
                    Inject Exam JSON Schema
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreateExam} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Exam Title</label>
                    <input
                      type="text"
                      required
                      value={newExamTitle}
                      onChange={(e) => setNewExamTitle(e.target.value)}
                      placeholder="e.g. Quantitative Mastery: Geometry & Trigonometry"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Category</label>
                    <select
                      value={newExamCategory}
                      onChange={(e) => setNewExamCategory(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                    >
                      <option value="Quantitative">Quantitative</option>
                      <option value="Logical Reasoning">Logical Reasoning</option>
                      <option value="Verbal Ability">Verbal Ability</option>
                      <option value="Company Specific">Company Specific</option>
                      <option value="Japanese (JLPT N5)">Japanese (JLPT N5)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Company / Organization Tag</label>
                    <input
                      type="text"
                      value={newExamCompany}
                      onChange={(e) => setNewExamCompany(e.target.value)}
                      placeholder="e.g. TCS NQT, Infosys, Capgemini, Rakuten"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-slate-400 mb-1">Duration (Mins)</label>
                      <input
                        type="number"
                        value={newExamDuration}
                        onChange={(e) => setNewExamDuration(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 mb-1">Difficulty</label>
                      <select
                        value={newExamDifficulty}
                        onChange={(e) => setNewExamDifficulty(e.target.value as any)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-slate-400 mb-1">Description</label>
                    <textarea
                      rows={2}
                      required
                      value={newExamDesc}
                      onChange={(e) => setNewExamDesc(e.target.value)}
                      placeholder="Summary of skills and formulas tested in this module..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-200"
                    />
                  </div>

                  <div className="md:col-span-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setExamFormOpen(false)}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl"
                    >
                      Deploy Exam to Catalog
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Existing Exams Table */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Exam Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Company Tag</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Questions</th>
                  <th className="py-3 px-4">Difficulty</th>
                  <th className="py-3 px-4 text-right">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {exams.map((ex) => (
                  <tr key={ex.id} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-4 font-semibold text-white">{ex.title}</td>
                    <td className="py-3 px-4">{ex.category}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-slate-400">{ex.company_tag || 'General'}</td>
                    <td className="py-3 px-4 font-mono">{ex.duration_minutes}m</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => setSelectedExamForQuestions(ex)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 text-[11px] font-semibold transition group"
                        title="Inspect and remove questions"
                      >
                        <span>{ex.questions?.length || 0} Questions</span>
                        <span className="text-[10px] text-indigo-300 underline group-hover:text-indigo-200">Manage</span>
                      </button>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                        {ex.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete exam "${ex.title}" from the catalog?`)) {
                            deleteExam(ex.id);
                            showNotification(`Exam "${ex.title}" deleted.`);
                          }
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                        title="Delete entire exam"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Question Management Modal */}
          {activeExamForQuestions && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
                {/* Modal Header */}
                <div className="px-6 py-5 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {activeExamForQuestions.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {activeExamForQuestions.questions?.length || 0} Questions Total
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Manage Questions: {activeExamForQuestions.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedExamForQuestions(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                    title="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Questions Scrollable List */}
                <div className="p-6 overflow-y-auto space-y-4">
                  {(!activeExamForQuestions.questions || activeExamForQuestions.questions.length === 0) ? (
                    <div className="p-8 text-center text-slate-400 text-xs">
                      No questions remaining in this exam.
                    </div>
                  ) : (
                    activeExamForQuestions.questions.map((q, idx) => (
                      <div
                        key={q.id || idx}
                        className="p-4 rounded-2xl bg-slate-950/50 border border-slate-800/80 hover:border-slate-700 transition space-y-3"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-slate-800 font-mono text-[11px] font-bold text-indigo-400">
                              Question #{idx + 1}
                            </span>
                            {q.topic_tag && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-400">
                                {q.topic_tag}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to remove Question #${idx + 1}?`)) {
                                deleteQuestion(activeExamForQuestions.id, q.id);
                                showNotification(`Question #${idx + 1} removed from exam.`);
                              }
                            }}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 text-[11px] font-semibold transition"
                            title="Remove this question"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove Question</span>
                          </button>
                        </div>

                        <p className="text-xs font-medium text-slate-200 leading-relaxed">
                          {q.question_text}
                        </p>

                        {/* Options */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          {q.options.map((opt, optIdx) => {
                            const isCorrect = optIdx === q.correct_index;
                            return (
                              <div
                                key={optIdx}
                                className={`px-3 py-2 rounded-xl border text-[11px] flex items-center justify-between ${
                                  isCorrect
                                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold'
                                    : 'bg-slate-900 border-slate-800/80 text-slate-400'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span className="font-mono text-[10px] text-slate-400">
                                    {String.fromCharCode(65 + optIdx)}.
                                  </span>
                                  <span>{opt}</span>
                                </span>
                                {isCorrect && (
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                    Correct
                                  </span>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {q.explanation && (
                          <div className="text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                            <span className="font-semibold text-slate-300">Explanation: </span>
                            <span>{q.explanation}</span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedExamForQuestions(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                  >
                    Close Manager
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Job Board & Drive Verification */}
      {activeTab === 'jobs' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white tracking-tight">Verified Placement Drives</h2>
              <p className="text-xs text-slate-400">Post verified corporate recruitment openings with CTC and cutoff criteria</p>
            </div>
            <button
              onClick={() => setJobFormOpen(!jobFormOpen)}
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-md transition"
            >
              <Plus className="w-4 h-4" />
              <span>{jobFormOpen ? 'Close Form' : 'Post New Job'}</span>
            </button>
          </div>

          {jobFormOpen && (
            <form onSubmit={handleCreateJob} className="glass-panel rounded-2xl p-6 border border-slate-700/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={newJobCompany}
                  onChange={(e) => setNewJobCompany(e.target.value)}
                  placeholder="e.g. Oracle India"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Role Title</label>
                <input
                  type="text"
                  required
                  value={newJobRole}
                  onChange={(e) => setNewJobRole(e.target.value)}
                  placeholder="e.g. Cloud Engineer - Member of Tech Staff"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">CTC Compensation</label>
                <input
                  type="text"
                  value={newJobCtc}
                  onChange={(e) => setNewJobCtc(e.target.value)}
                  placeholder="e.g. ₹28.5 LPA"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Location</label>
                <input
                  type="text"
                  value={newJobLocation}
                  onChange={(e) => setNewJobLocation(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Min CGPA Cutoff</label>
                <input
                  type="number"
                  step="0.1"
                  value={newJobCgpa}
                  onChange={(e) => setNewJobCgpa(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Apply URL</label>
                <input
                  type="url"
                  value={newJobUrl}
                  onChange={(e) => setNewJobUrl(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div className="md:col-span-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setJobFormOpen(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl"
                >
                  Publish Listing
                </button>
              </div>
            </form>
          )}

          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Company & Role</th>
                  <th className="py-3 px-4">CTC</th>
                  <th className="py-3 px-4">Min CGPA</th>
                  <th className="py-3 px-4">Deadline</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-4">
                      <div className="font-semibold text-white">{job.company_name}</div>
                      <div className="text-[11px] text-slate-400">{job.role_title}</div>
                    </td>
                    <td className="py-3 px-4 font-mono font-semibold text-emerald-400">{job.ctc}</td>
                    <td className="py-3 px-4 font-mono">{job.min_cgpa}</td>
                    <td className="py-3 px-4 font-mono text-[11px] text-rose-400">{formatDate(job.deadline)}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => toggleJobStatus(job.id)}
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold border flex items-center gap-1 ${
                          job.is_active
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        {job.is_active ? 'Active' : 'Expired'}
                      </button>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to remove the placement drive for "${job.company_name} - ${job.role_title}"?`)) {
                            deleteJob(job.id);
                            showNotification(`Removed drive listing for ${job.company_name}.`);
                          }
                        }}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                        title="Delete job opening"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: Placement Digest CMS */}
      {activeTab === 'newsletters' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Placement Career Digest Publishing CMS</h2>
            <p className="text-xs text-slate-400">Compose and publish the weekly career intelligence digest with markdown support</p>
          </div>

          <form onSubmit={handlePublishNewsletter} className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-slate-400 mb-1">Edition Number</label>
                <input
                  type="number"
                  value={newsletterEdition}
                  onChange={(e) => setNewsletterEdition(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-400 mb-1">Newsletter Title</label>
                <input
                  type="text"
                  required
                  value={newsletterTitle}
                  onChange={(e) => setNewsletterTitle(e.target.value)}
                  placeholder="e.g. Cracking System Design & Coding Rounds for 2026 Batch"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Summary Hook (Displayed on Preview Cards)</label>
              <input
                type="text"
                value={newsletterSummary}
                onChange={(e) => setNewsletterSummary(e.target.value)}
                placeholder="Brief 1-sentence teaser of hiring shifts and tips..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Newsletter Content (Markdown Supported)</label>
              <textarea
                rows={10}
                required
                value={newsletterMarkdown}
                onChange={(e) => setNewsletterMarkdown(e.target.value)}
                placeholder="# Placement Strategy of the Week&#10;&#10;Here are the top recommendations for technical and HR rounds..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition"
              >
                <Save className="w-4 h-4" />
                <span>Publish Issue to Archive</span>
              </button>
            </div>
          </form>

          {/* Existing Published Newsletters Table */}
          <div className="space-y-3 pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white tracking-tight">
                  Existing Published Newsletters ({newsletters.length})
                </h3>
                <p className="text-xs text-slate-400">Manage or remove weekly career editions from the student repository</p>
              </div>
              <Link
                href="/newsletters"
                className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-medium transition"
              >
                <span>View Public Archive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Edition</th>
                    <th className="py-3 px-4">Title & Summary</th>
                    <th className="py-3 px-4">Publish Date</th>
                    <th className="py-3 px-4">Author</th>
                    <th className="py-3 px-4">Tags</th>
                    <th className="py-3 px-4 text-right">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {newsletters.map((nl) => (
                    <tr key={nl.id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4 font-mono font-bold text-indigo-400">
                        #{nl.edition_no}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">{nl.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{nl.summary}</div>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-400">
                        {formatDate(nl.publish_date)}
                      </td>
                      <td className="py-3 px-4 text-slate-300">{nl.author_name}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {nl.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete Newsletter Edition #${nl.edition_no} ("${nl.title}")?`)) {
                              deleteNewsletter(nl.id);
                              showNotification(`Newsletter Edition #${nl.edition_no} deleted.`);
                            }
                          }}
                          className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                          title="Delete newsletter edition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Resource Manager */}
      {activeTab === 'resources' && (
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight">Placement Study Repository Manager</h2>
            <p className="text-xs text-slate-400">Upload or link aptitude formula books, core CS sheets, and interview guides</p>
          </div>

          <form onSubmit={handleAddResource} className="glass-panel rounded-2xl p-6 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Resource Title</label>
              <input
                type="text"
                required
                value={resourceTitle}
                onChange={(e) => setResourceTitle(e.target.value)}
                placeholder="e.g. Operating Systems Deadlock & Memory Paging Sheet"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Category</label>
              <select
                value={resourceCategory}
                onChange={(e) => setResourceCategory(e.target.value as any)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
              >
                <option value="aptitude">Aptitude Mastery</option>
                <option value="technical">Technical Core CS</option>
                <option value="interview">Interview Preparation</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Tags (Comma-separated)</label>
              <input
                type="text"
                value={resourceTags}
                onChange={(e) => setResourceTags(e.target.value)}
                placeholder="DBMS, SQL, Normalization"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1">Description</label>
              <input
                type="text"
                value={resourceDesc}
                onChange={(e) => setResourceDesc(e.target.value)}
                placeholder="Short overview of contents..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-slate-200"
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Resource</span>
              </button>
            </div>
          </form>

          {/* Existing Resources Table */}
          <div className="space-y-3 pt-6 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white tracking-tight">
              Existing Study Materials & Resources ({resources.length})
            </h3>

            <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Resource Title</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Format</th>
                    <th className="py-3 px-4">Tags</th>
                    <th className="py-3 px-4 text-right">Delete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  {resources.map((res) => (
                    <tr key={res.id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">{res.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{res.description}</div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="capitalize px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                          {res.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-[11px] text-indigo-400">{res.file_type}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {res.tags.slice(0, 2).map((t, i) => (
                            <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to delete resource "${res.title}"?`)) {
                              deleteResource(res.id);
                              showNotification(`Resource "${res.title}" removed.`);
                            }
                          }}
                          className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                          title="Delete study resource"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

