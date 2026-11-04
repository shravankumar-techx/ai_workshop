'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  Building2,
  MapPin,
  Calendar,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Trash2,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatDate } from '@/lib/utils';

export default function JobsBoardPage() {
  const { jobs, currentUser, userRole, deleteJob, openAuthDrawer } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedBatch, setSelectedBatch] = useState<string>('All');
  const [maxCgpaCutoff, setMaxCgpaCutoff] = useState<number>(10);
  const [appliedJobIds, setAppliedJobIds] = useState<Set<string>>(new Set());

  // Filter jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.role_title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedType === 'All' || job.job_type === selectedType;
    const matchesBatch = selectedBatch === 'All' || job.batch_year.includes(selectedBatch);
    const matchesCgpa = job.min_cgpa <= maxCgpaCutoff;

    return matchesSearch && matchesType && matchesBatch && matchesCgpa;
  });

  const handleApplyClick = (jobId: string, url: string) => {
    if (userRole === 'guest') {
      openAuthDrawer('/jobs');
      return;
    }
    setAppliedJobIds((prev) => new Set(prev).add(jobId));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const studentCgpa = currentUser?.cgpa || 8.85;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="glass-panel rounded-3xl p-8 relative overflow-hidden">
        <div className="max-w-3xl space-y-3 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified 2026 Campus Placement Drives (18 Active)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verified Career Opportunities Board
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Direct institutional and off-campus listings vetted by the campus placement guidance cell. Instant branch eligibility and CGPA cutoff verification.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company, role (Software Engineer, AI), or city..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-emerald-500 shadow-xs transition"
            />
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-emerald-500 shadow-xs cursor-pointer"
            >
              <option value="All">All Job Types</option>
              <option value="Full-time">Full-time Only</option>
              <option value="Internship">Internship Only</option>
            </select>
          </div>

          {/* Batch Year Filter */}
          <div>
            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-800 focus:bg-white focus:outline-none focus:border-emerald-500 shadow-xs cursor-pointer"
            >
              <option value="All">All Batches</option>
              <option value="2026">2026 Batch (Graduating)</option>
              <option value="2027">2027 Batch (Pre-final)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span>Your Profile CGPA:</span>
            <span className="font-bold text-emerald-700 font-mono">{studentCgpa}</span>
            <span className="text-slate-400">• Filter max cutoff:</span>
            <select
              value={maxCgpaCutoff}
              onChange={(e) => setMaxCgpaCutoff(Number(e.target.value))}
              className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 text-slate-800 cursor-pointer"
            >
              <option value={10}>No CGPA limit</option>
              <option value={8.5}>Eligible for ≤ 8.5 Cutoff</option>
              <option value={8.0}>Eligible for ≤ 8.0 Cutoff</option>
              <option value={7.5}>Eligible for ≤ 7.5 Cutoff</option>
              <option value={7.0}>Eligible for ≤ 7.0 Cutoff</option>
            </select>
          </div>

          <div>
            Showing <strong className="text-slate-900">{filteredJobs.length}</strong> active openings
          </div>
        </div>
      </div>

      {/* Jobs Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => {
          const isEligible = studentCgpa >= job.min_cgpa;
          const isApplied = appliedJobIds.has(job.id);

          return (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Header: Company & Type */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-emerald-600 font-bold text-base shadow-xs">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                        {job.company_name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                      job.job_type === 'Full-time'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-teal-50 text-teal-800 border-teal-200'
                    }`}
                  >
                    {job.job_type}
                  </span>
                </div>

                {/* Role & CTC */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-slate-800 mb-1">{job.role_title}</div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono font-bold text-xs shadow-xs">
                    CTC: {job.ctc}
                  </div>
                </div>

                {/* Eligibility Criteria */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 mb-4 text-xs">
                  <div className="flex items-center justify-between text-slate-800 font-medium">
                    <span>Eligibility: {job.eligibility}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-600">
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded shadow-xs">
                      Batch: {job.batch_year}
                    </span>
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded shadow-xs">
                      Min CGPA: {job.min_cgpa}
                    </span>
                    <span className="bg-white border border-slate-200 px-2 py-0.5 rounded shadow-xs">
                      Branches: {job.eligible_branches.join(', ')}
                    </span>
                  </div>

                  {/* Dynamic Eligibility Check */}
                  <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Your Eligibility:</span>
                    {isEligible ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Eligible (CGPA {studentCgpa} ≥ {job.min_cgpa})</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>CGPA Cutoff Unmet ({studentCgpa} &lt; {job.min_cgpa})</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-rose-600 font-mono font-semibold text-[11px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Deadline: {formatDate(job.deadline)}</span>
                </div>

                <div className="flex items-center gap-2">
                  {userRole === 'faculty' && (
                    <button
                      onClick={() => {
                        if (confirm(`Remove placement drive for "${job.company_name} - ${job.role_title}"?`)) {
                          deleteJob(job.id);
                        }
                      }}
                      className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition cursor-pointer"
                      title="Delete job listing (Faculty)"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={() => handleApplyClick(job.id, job.apply_url)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition active:scale-95 cursor-pointer ${
                      isApplied
                        ? 'bg-slate-100 text-slate-700 border border-slate-300'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                    }`}
                  >
                    <span>{isApplied ? 'Application Opened' : 'Apply Now'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
