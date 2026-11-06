'use client';

import React from 'react';

export interface PageHeaderBannerProps {
  badgeIcon?: React.ComponentType<{ className?: string }>;
  badgeText: string;
  title: string;
  description: string;
  watermarkIcon?: React.ComponentType<{ className?: string }>;
  actions?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'emerald' | 'amber';
}

export default function PageHeaderBanner({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  description,
  actions,
  action,
  variant = 'emerald',
}: PageHeaderBannerProps) {
  const isAmber = variant === 'amber';
  const actionContent = actions ?? action;

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 relative overflow-hidden border shadow-xs ${
        isAmber
          ? 'bg-[#5c2809] border-[#431d06] text-white'
          : 'bg-[#053324] border-[#032419] text-white'
      }`}
    >
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-3">
          {/* Understated Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-xs font-medium">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-emerald-200" />}
            <span className="text-emerald-100/90">{badgeText}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-sm text-emerald-100/80 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>
        </div>

        {/* Actions Slot */}
        {actionContent && <div className="z-10 shrink-0">{actionContent}</div>}
      </div>
    </div>
  );
}
