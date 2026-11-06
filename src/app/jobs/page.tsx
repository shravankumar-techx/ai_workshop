'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  Search,
  MapPin,
  Calendar,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Trash2,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import { formatDate } from '@/lib/utils';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import PageHeaderBanner from '@/components/layout/PageHeaderBanner';
import CompanyLogo from '@/components/ui/CompanyLogos';

const COMPANY_DOMAINS: Record<string, string> = {
  microsoft: 'microsoft.com',
  google: 'google.com',
  atlassian: 'atlassian.com',
  goldman: 'goldmansachs.com',
  amazon: 'amazon.com',
  aws: 'amazon.com',
  adobe: 'adobe.com',
  cisco: 'cisco.com',
  flipkart: 'flipkart.com',
  tcs: 'tcs.com',
  tata: 'tcs.com',
  infosys: 'infosys.com',
  accenture: 'accenture.com',
  deloitte: 'deloitte.com',
  apple: 'apple.com',
  meta: 'meta.com',
  netflix: 'netflix.com',
  uber: 'uber.com',
  salesforce: 'salesforce.com',
  oracle: 'oracle.com',
  sap: 'sap.com',
  ibm: 'ibm.com',
  intel: 'intel.com',
  qualcomm: 'qualcomm.com',
  nvidia: 'nvidia.com',
  swiggy: 'swiggy.com',
  zomato: 'zomato.com',
  phonepe: 'phonepe.com',
  razorpay: 'razorpay.com',
  wipro: 'wipro.com',
  cognizant: 'cognizant.com',
  capgemini: 'capgemini.com',
  'morgan stanley': 'morganstanley.com',
  jpmorgan: 'jpmorganchase.com',
};

function getCompanyDomain(companyName: string): string {
  const norm = (companyName || '').toLowerCase().trim();
  for (const [key, domain] of Object.entries(COMPANY_DOMAINS)) {
    if (norm.includes(key)) return domain;
  }
  const cleaned = norm
    .replace(/\b(india|limited|ltd|inc|technologies|systems|services|corp|corporation|private|pvt)\b/gi, '')
    .trim()
    .replace(/[^a-z0-9]/g, '');
  return cleaned ? `${cleaned}.com` : 'example.com';
}

export default function JobsBoardPage() {
  const { jobs, currentUser, userRole, deleteJob, openAuthDrawer } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedBatch, setSelectedBatch] = useState<string>('All');
  const [maxCgpaCutoff, setMaxCgpaCutoff] = useState<number>(10);
  const [appliedJobIds, setAppliedJobIds] = useState<Set<string>>(new Set());
  const [failedLogoIds, setFailedLogoIds] = useState<Set<string>>(new Set());

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

  const handleLogoError = (jobId: string) => {
    setFailedLogoIds((prev) => new Set(prev).add(jobId));
  };

  const studentCgpa = currentUser?.cgpa || 8.85;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 bg-[#F7FAF8] min-h-screen">
      {/* 1. Lined & Recognisable Breadcrumb Trail */}
      <div className="flex items-center justify-between">
        <Breadcrumbs
          items={[
            { label: 'Verified Jobs', icon: Briefcase },
          ]}
        />
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[#526174]">
          <span className="w-2 h-2 rounded-full bg-[#0AA574] animate-pulse" />
          <span>Opportunities: <strong>{jobs.length} Active Drives</strong></span>
        </div>
      </div>

      {/* 2. Emerald Green Page Header Banner with Textures */}
      <PageHeaderBanner
        badgeIcon={Briefcase}
        badgeText="Verified 2026 Campus Placement Drives (18 Active)"
        title="Verified Career Opportunities Board"
        description="Direct institutional and off-campus listings vetted by the campus placement guidance cell. Instant branch eligibility and CGPA cutoff verification."
        watermarkIcon={Briefcase}
      />

      {/* 3. Lined, Recognisable Filter & Search Bar */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E3EBE6] shadow-xs space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Keyword Search */}
          <div className="md:col-span-2 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by company, role (Software Engineer, AI), or city..."
              className="w-full bg-[#F7FAF8] border border-[#E3EBE6] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#101828] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#07865B] shadow-xs transition"
            />
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-[#F7FAF8] border border-[#E3EBE6] rounded-xl px-3 py-2.5 text-xs text-[#101828] focus:bg-white focus:outline-none focus:border-[#07865B] shadow-xs cursor-pointer"
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
              className="w-full bg-[#F7FAF8] border border-[#E3EBE6] rounded-xl px-3 py-2.5 text-xs text-[#101828] focus:bg-white focus:outline-none focus:border-[#07865B] shadow-xs cursor-pointer"
            >
              <option value="All">All Batches</option>
              <option value="2026">2026 Batch (Graduating)</option>
              <option value="2027">2027 Batch (Pre-final)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E3EBE6] text-xs text-[#526174]">
          <div className="flex items-center gap-2">
            <span>Your Profile CGPA:</span>
            <span className="font-bold text-[#07865B] font-mono">{studentCgpa}</span>
            <span className="text-slate-400">• Filter max cutoff:</span>
            <select
              value={maxCgpaCutoff}
              onChange={(e) => setMaxCgpaCutoff(Number(e.target.value))}
              className="bg-[#F7FAF8] border border-[#E3EBE6] rounded-lg px-2 py-1 text-[#101828] cursor-pointer"
            >
              <option value={10}>No CGPA limit</option>
              <option value={8.5}>Eligible for ≤ 8.5 Cutoff</option>
              <option value={8.0}>Eligible for ≤ 8.0 Cutoff</option>
              <option value={7.5}>Eligible for ≤ 7.5 Cutoff</option>
              <option value={7.0}>Eligible for ≤ 7.0 Cutoff</option>
            </select>
          </div>

          <div className="text-xs text-[#08764F] font-semibold bg-[#EAF7F1] px-2.5 py-1 rounded-lg border border-[#E3EBE6]">
            Showing <strong>{filteredJobs.length}</strong> active openings
          </div>
        </div>
      </div>

      {/* Jobs Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => {
          const isEligible = studentCgpa >= job.min_cgpa;
          const isApplied = appliedJobIds.has(job.id);
          const domain = getCompanyDomain(job.company_name);

          return (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 hover:border-emerald-400 transition-all duration-300 ease-out group"
            >
              <div>
                {/* Enterprise Visual Hierarchy Header */}
                <div className="flex items-start justify-between gap-3.5 mb-3.5">
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    {/* Dedicated Logo Container */}
                    <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center justify-center overflow-hidden shrink-0">
                      {!failedLogoIds.has(job.id) ? (
                        <img
                          src={`https://logo.clearbit.com/${domain}`}
                          alt={`${job.company_name} logo`}
                          className="object-contain w-full h-full p-2"
                          onError={() => handleLogoError(job.id)}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full p-2 flex items-center justify-center">
                          <CompanyLogo name={job.company_name} size="sm" />
                        </div>
                      )}
                    </div>

                    {/* Prominent Job Title & Company/Location Sub-line */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug tracking-tight">
                        {job.role_title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-medium mt-1">
                        <span className="font-semibold text-slate-700">{job.company_name}</span>
                        <span className="text-slate-300">•</span>
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{job.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top-Right Badges: Job Type & CTC */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                        job.job_type === 'Full-time'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200/80'
                          : 'bg-teal-50 text-teal-800 border-teal-200/80'
                      }`}
                    >
                      {job.job_type}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono font-bold text-xs shadow-2xs">
                      CTC: {job.ctc}
                    </span>
                  </div>
                </div>

                {/* Brief Role & Eligibility Requirements */}
                {job.eligibility && (
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {job.eligibility}
                  </p>
                )}

                {/* Streamlined Eligibility UI (Minimalist Modern Pill Tags) */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md">
                    Batch: {job.batch_year}
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md">
                    Min CGPA: {job.min_cgpa}
                  </span>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md">
                    Branches: {job.eligible_branches.join(', ')}
                  </span>
                </div>

                {/* Student Eligibility Evaluation Status */}
                <div className="flex items-center justify-between text-xs py-1.5 mb-2">
                  <span className="text-[11px] font-medium text-slate-500">Your Eligibility:</span>
                  {isEligible ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Eligible (CGPA {studentCgpa} ≥ {job.min_cgpa})</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600">
                      <XCircle className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>CGPA Cutoff Unmet ({studentCgpa} &lt; {job.min_cgpa})</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Action Area (Solid Emerald Apply Now on bottom right, Deadline on bottom left) */}
              <div className="pt-3.5 border-t border-slate-200/80 flex items-center justify-between text-xs mt-auto">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium text-xs">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition active:scale-95 cursor-pointer ${
                      isApplied
                        ? 'bg-slate-100 text-slate-700 border border-slate-300'
                        : 'bg-[#07865B] hover:bg-[#065F46] text-white shadow-xs hover:shadow-sm'
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

        {filteredJobs.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <Briefcase className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No matching career opportunities found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try adjusting your search criteria, clearing the batch filter, or relaxing the CGPA cutoff limit.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedBatch('All');
                setMaxCgpaCutoff(10);
              }}
              className="text-xs font-semibold text-[#07865B] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
