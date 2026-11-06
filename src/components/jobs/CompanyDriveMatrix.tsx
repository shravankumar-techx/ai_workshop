'use client';

import React from 'react';
import CompanyLogo from '@/components/ui/CompanyLogos';

interface CompanyDriveMatrixProps {
  selectedCompany: string;
  onSelectCompany: (companyName: string) => void;
}

export default function CompanyDriveMatrix({
  selectedCompany,
  onSelectCompany,
}: CompanyDriveMatrixProps) {
  const serviceCompanies = [
    {
      name: 'TCS',
      pattern: 'NQT • Ninja & Digital',
      rounds: 'Numerical • Verbal • Reasoning • Coding',
    },
    {
      name: 'Infosys',
      pattern: 'InfyTQ • Specialist',
      rounds: 'Aptitude • Pseudocode • Puzzles',
    },
    {
      name: 'Wipro',
      pattern: 'Elite NTH',
      rounds: 'Aptitude • Essay • Coding',
    },
    {
      name: 'Accenture',
      pattern: 'Cognitive & Technical',
      rounds: 'Pseudocode • Networking • Communication',
    },
    {
      name: 'Cognizant',
      pattern: 'GenC • GenC Next',
      rounds: 'Aptitude • Automata Fix • Coding',
    },
    {
      name: 'HCL',
      pattern: 'TechBee • Fresher',
      rounds: 'Quant • Logical • Verbal • Technical',
    },
    {
      name: 'IBM',
      pattern: 'Cognitive Ability',
      rounds: 'Numerical • Logical • Coding',
    },
    {
      name: 'Capgemini',
      pattern: 'Exceller',
      rounds: 'Game-based • Pseudocode • English',
    },
    {
      name: 'Tech Mahindra',
      pattern: 'Technical Round',
      rounds: 'Aptitude • Communication • Coding',
    },
    {
      name: 'LTIMindtree',
      pattern: 'Online Test',
      rounds: 'Aptitude • Verbal • Coding',
    },
    {
      name: 'Hexaware',
      pattern: 'Online Assessment',
      rounds: 'Aptitude • Verbal • Coding',
    },
    {
      name: 'Deloitte',
      pattern: 'Online Assessment',
      rounds: 'Quant • Verbal • Case Reasoning',
    },
    {
      name: 'PwC',
      pattern: 'Online Assessment',
      rounds: 'Numerical • Logical • Situational',
    },
    {
      name: 'EY',
      pattern: 'Online Assessment',
      rounds: 'Numerical • Verbal • Case Study',
    },
    {
      name: 'KPMG',
      pattern: 'Online Assessment',
      rounds: 'Numerical • Logical • Verbal',
    },
    {
      name: 'McKinsey & Company',
      pattern: 'Solve • Problem Solving Game',
      rounds: 'Case • Numerical • Logical',
    },
    {
      name: 'BCG',
      pattern: 'Online Case & Pymetrics',
      rounds: 'Case • Numerical • Logical',
    },
  ];

  const productCompanies = [
    {
      name: 'Google',
      pattern: 'Online Coding Round',
      rounds: 'DSA • Algorithms • System Design',
    },
    {
      name: 'Microsoft',
      pattern: 'Online Assessment',
      rounds: 'Coding • DSA • Aptitude',
    },
    {
      name: 'Amazon',
      pattern: 'SDE Online Assessment',
      rounds: 'Coding • Work Style • Debugging',
    },
    {
      name: 'Adobe',
      pattern: 'Online Test',
      rounds: 'Coding • Aptitude • Technical MCQ',
    },
    {
      name: 'Cisco',
      pattern: 'Online Assessment',
      rounds: 'Aptitude • Networking • Coding',
    },
    {
      name: 'Flipkart',
      pattern: 'Coding Round',
      rounds: 'DSA • Problem Solving',
    },
    {
      name: 'Goldman Sachs',
      pattern: 'Engineering Aptitude & Quant',
      rounds: 'Advanced Math • DSA • System Design',
    },
    {
      name: 'Atlassian',
      pattern: 'Values & Coding Round',
      rounds: 'Clean Code • Concurrency • System Design',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#E3EBE6] p-5 sm:p-6 shadow-xs space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>Company Drive Patterns & Assessment Matrix</span>
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              2026 Formats
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Select any company card below to filter active placement openings and verified past mock tests.
          </p>
        </div>

        {selectedCompany && (
          <button
            onClick={() => onSelectCompany('')}
            className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-xl transition cursor-pointer"
          >
            Clear Filter ({selectedCompany}) &times;
          </button>
        )}
      </div>

      {/* Grid 1: Consulting & Global Tech */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {serviceCompanies.map((item) => {
            const isSelected = selectedCompany.toLowerCase().includes(item.name.toLowerCase());
            return (
              <div
                key={item.name}
                onClick={() => onSelectCompany(isSelected ? '' : item.name)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between items-center text-center group ${
                  isSelected
                    ? 'border-[#07865B] bg-emerald-50/70 shadow-md ring-2 ring-emerald-500/30'
                    : 'border-slate-200/80 bg-white hover:border-emerald-400 hover:shadow-xs'
                }`}
              >
                <div className="h-10 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <CompanyLogo name={item.name} size="sm" />
                </div>
                <div className="w-full">
                  <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 transition">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-bold text-blue-700 mt-1 line-clamp-1">
                    {item.pattern}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                    {item.rounds}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid 2: PRODUCT, TECH & BFSI */}
      <div className="space-y-3 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-900">
            PRODUCT, TECH &amp; BFSI
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-xs text-slate-500 font-medium">Coding-heavy and role-specific rounds</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {productCompanies.map((item) => {
            const isSelected = selectedCompany.toLowerCase().includes(item.name.toLowerCase());
            return (
              <div
                key={item.name}
                onClick={() => onSelectCompany(isSelected ? '' : item.name)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between items-center text-center group ${
                  isSelected
                    ? 'border-[#07865B] bg-emerald-50/70 shadow-md ring-2 ring-emerald-500/30'
                    : 'border-slate-200/80 bg-white hover:border-emerald-400 hover:shadow-xs'
                }`}
              >
                <div className="h-10 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <CompanyLogo name={item.name} size="md" />
                </div>
                <div className="w-full">
                  <div className="font-bold text-xs text-slate-900 group-hover:text-emerald-700 transition">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-bold text-blue-700 mt-1 line-clamp-1">
                    {item.pattern}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                    {item.rounds}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

