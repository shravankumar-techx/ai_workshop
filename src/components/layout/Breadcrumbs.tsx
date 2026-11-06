'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-[#E3EBE6] shadow-xs text-xs text-[#526174] ${className}`}
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 text-[#526174] hover:text-[#07865B] transition-colors font-medium"
      >
        <Home className="w-3.5 h-3.5 text-[#07865B]" />
        <span>Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const Icon = item.icon;

        return (
          <React.Fragment key={index}>
            <span className="flex items-center text-[#CBD5E1]" aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-[#0AA574]/60" />
            </span>

            {isLast || !item.href ? (
              <span className="flex items-center gap-1.5 font-semibold text-[#07865B] bg-[#EAF7F1] px-2.5 py-0.5 rounded-lg border border-[#E3EBE6]">
                {Icon && <Icon className="w-3.5 h-3.5 text-[#07865B]" />}
                <span>{item.label}</span>
              </span>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-1.5 text-[#526174] hover:text-[#07865B] transition-colors font-medium"
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{item.label}</span>
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

