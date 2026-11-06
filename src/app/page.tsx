'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Building2,
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  Globe,
  Bot,
  FileCheck,
  ChevronDown,
} from 'lucide-react';
import { useApp } from '@/lib/store';
import InteractiveLmsPreview from '@/components/home/InteractiveLmsPreview';
import HeroCanvasSequence from '@/components/home/HeroCanvasSequence';
import CompanyLogo from '@/components/ui/CompanyLogos';

// Verified recruitment partners that have conducted on-campus drives at Sahyadri College (strictly companies only, zero college names)
const SAHYADRI_RECRUITERS = [
  'Microsoft',
  'Adobe',
  'Amazon',
  'Google',
  'Tata Consultancy Services',
  'Infosys',
  'Tata Elxsi',
  'Cohesity',
  'SAP',
  'Cisco',
  'Goldman Sachs',
  'Bosch',
  'Accenture',
  'Cognizant',
  'Deloitte',
  'Capgemini',
  'HSBC',
  'Wipro',
  'LTIMindtree',
  'Hexaware',
  'Tech Mahindra',
  'Belc',
  'IMV Corporation',
  'IBM',
];

export default function HomePage() {
  const router = useRouter();
  const { userRole, openAuthDrawer } = useApp();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroGridRef = useRef<HTMLDivElement>(null);
  const dotSpotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const area = heroGridRef.current;
    const spotlight = dotSpotlightRef.current;
    if (!area || !spotlight) return;

    let rafId: number | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = area.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const mask = `radial-gradient(circle 165px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.55) 60%, transparent 100%)`;
        spotlight.style.setProperty('-webkit-mask-image', mask);
        spotlight.style.setProperty('mask-image', mask);
        spotlight.style.opacity = '0.82';
      });
    };

    const handlePointerLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      spotlight.style.opacity = '0';
    };

    const handlePointerEnter = () => {
      spotlight.style.opacity = '1';
    };

    area.addEventListener('pointermove', handlePointerMove, { passive: true });
    area.addEventListener('pointerleave', handlePointerLeave);
    area.addEventListener('pointerenter', handlePointerEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      area.removeEventListener('pointermove', handlePointerMove);
      area.removeEventListener('pointerleave', handlePointerLeave);
      area.removeEventListener('pointerenter', handlePointerEnter);
    };
  }, []);

  const requireAuth = (target: 'exams' | 'drives') => {
    const dest = target === 'exams' ? '/exams' : '/jobs';
    if (userRole === 'guest') {
      openAuthDrawer(dest);
    } else {
      router.push(dest);
    }
  };

  const faqs = [
    {
      q: 'How do I log in to the LMS portal?',
      a: 'Sahyadri students can sign in using their official University Email ID (@sahyadri.edu.in) and USN roll number. Faculty and placement coordinators can sign in using their Department ID and Faculty Key.',
    },
    {
      q: 'I forgot my password or cannot access my account. What should I do?',
      a: 'Click "Sign In" in the top navigation, select your role, and click "Forgot Password?". A one-time verification link will be dispatched to your registered university email.',
    },
    {
      q: 'Where do I find my scheduled mock tests and company papers?',
      a: 'Navigate to "Mock Exams" from the top menu or the "Test Board" tab in your student dashboard. You will see active tests under "Ongoing" and upcoming company mock rounds under "Upcoming".',
    },
    {
      q: 'Can I navigate between questions freely during an aptitude test?',
      a: 'Yes! The distraction-free assessment runner includes a Question Palette drawer allowing you to jump between questions, flag questions for review, and return before submitting.',
    },
    {
      q: 'Can I take mock tests on my mobile phone or tablet?',
      a: 'Yes, SahyadriPrep is fully responsive and supports smartphone browsers. For coding evaluations with IDE compilers, a desktop or laptop browser is recommended.',
    },
    {
      q: 'What happens if my internet disconnects mid-test?',
      a: 'Your responses are saved locally in real time after every option click. Once connectivity is restored, the runner automatically syncs your progress without score loss.',
    },
  ];

  return (
    <div
      ref={heroGridRef}
      id="interactive-grid-area"
      className="relative overflow-hidden bg-[#F8FAFC] min-h-screen"
    >
      {/* Full-Bleed Cinematic Background Drone Image Sequence (225 Frames from ezgif-62320f249031d0ad-jpg) */}
      <div className="absolute inset-x-0 top-0 h-[680px] md:h-[820px] overflow-hidden pointer-events-none z-0">
        <HeroCanvasSequence />
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/ezgif-62320f249031d0ad-jpg/ezgif-frame-001.jpg"
          className="w-full h-full object-cover -z-10 absolute inset-0 opacity-60"
        >
          <source src="/assets/campus-drone-bg.mp4" type="video/mp4" />
        </video>
        {/* Glassmorphic Wash for WCAG AAA Contrast */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[3px] z-[1]" />
        {/* Seamless Bottom Blend */}
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent z-[2]" />
      </div>

      {/* Layer 1: Static Light Dots (Underneath content at z-0) */}
      <div
        className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Layer 2: Interactive Emerald Dots Mask (Underneath content at z-0) */}
      <div
        ref={dotSpotlightRef}
        id="dot-spotlight"
        className="absolute inset-0 bg-dot-dark opacity-80 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          WebkitMaskImage: 'radial-gradient(circle at -100px -100px, black 0%, transparent 0%)',
          maskImage: 'radial-gradient(circle at -100px -100px, black 0%, transparent 0%)',
        }}
        aria-hidden="true"
      />

      {/* Background canvas */}
      <div
        id="interactive-grid-area"
        ref={heroGridRef}
        className="absolute inset-0 pointer-events-auto z-0 overflow-hidden"
        style={{ minHeight: '100%' }}
      >
        {/* Layer 1: Subtle Light Dots */}
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none z-0" />

        {/* Layer 2: Interactive Emerald Dots Mask */}
        <div
          id="dot-spotlight"
          ref={dotSpotlightRef}
          className="absolute inset-0 bg-dot-dark opacity-0 pointer-events-none z-0 transition-opacity duration-300"
          style={{
            WebkitMaskImage: 'radial-gradient(circle at -100px -100px, black 0%, transparent 0%)',
            maskImage: 'radial-gradient(circle at -100px -100px, black 0%, transparent 0%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ========================================================
          1. HERO SECTION
          ======================================================== */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-5 text-left space-y-6">
            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium shadow-2xs relative z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Campus Career & Assessment Hub — SahyadriPrep</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
              The <span className="text-[#07865B]">definitive</span> launchpad for campus placement mastery.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base leading-relaxed max-w-lg font-normal">
              Authentic company drive simulations, live coding sandboxes, and precision cognitive analytics.
              Built for forward-thinking engineering institutions that take student career outcomes seriously.
            </p>

            {/* CTA Button Actions */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <button
                onClick={() => requireAuth('exams')}
                className="px-6 py-3 rounded-xl bg-[#053324] hover:bg-[#04281c] text-white font-medium text-sm shadow-xs transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Assessment Hub</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </button>

              <button
                onClick={() => requireAuth('drives')}
                className="px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-colors shadow-2xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Mock Drives</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-normal text-slate-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant auto-grading</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Real company patterns</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero onboarding friction</span>
              </span>
            </div>
          </div>

          {/* Right Column: 5-Tab Interactive Product Mockup Card */}
          <div className="lg:col-span-7 flex justify-center pb-8 lg:pb-6">
            <InteractiveLmsPreview />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. DYNAMIC HORIZONTAL RECRUITMENT PARTNERS MARQUEE
          ======================================================== */}
      <section className="py-8 sm:py-9 border-y border-slate-200/80 bg-white relative z-10 overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Assessment and recruitment partners
          </p>
        </div>

        {/* Dynamic Horizontal Infinite Smooth Marquee */}
        <div className="relative w-full overflow-hidden marquee-fade-mask">
          <div className="animate-marquee-smooth flex items-center py-2">
            {/* Track 1 */}
            <div className="flex items-center shrink-0 gap-12 sm:gap-16 pr-12 sm:pr-16">
              {SAHYADRI_RECRUITERS.map((company, idx) => (
                <div
                  key={`partner-track1-${idx}`}
                  className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-200 cursor-default px-1"
                >
                  <CompanyLogo name={company} size="full" />
                </div>
              ))}
            </div>

            {/* Track 2 (Duplicate for seamless infinite wrap) */}
            <div className="flex items-center shrink-0 gap-12 sm:gap-16 pr-12 sm:pr-16" aria-hidden="true">
              {SAHYADRI_RECRUITERS.map((company, idx) => (
                <div
                  key={`partner-track2-${idx}`}
                  className="flex items-center justify-center shrink-0 opacity-90 hover:opacity-100 transition-all hover:scale-105 duration-200 cursor-default px-1"
                >
                  <CompanyLogo name={company} size="full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT SECTION
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold text-[#07865B]">
              About SahyadriPrep
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-tight">
              We facilitate talent that&apos;s ready for the real world.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
              At SahyadriPrep, we facilitate employability and technical skills development for engineering colleges and corporate recruiters across Karnataka and beyond.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900">Employability Training</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Structured programmes that build cognitive aptitude, quantitative shortcuts, and communication clarity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900">Technical Evaluations</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Company-specific test benches mirroring TCS NQT, Infosys DSE, and Accenture cognitive rounds.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm text-slate-900">Objective Scoring</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Instant percentiles, automated coding grading, and step-by-step mathematical reasoning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PROGRAMS WE DELIVER
          ======================================================== */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <span className="text-xs font-semibold text-[#07865B]">
              Programs We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
              Every assessment your institution runs — handled.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-normal leading-relaxed">
              From semester-end exams to placement drives, SahyadriPrep covers the full assessment lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                  MCQ Tests
                </span>
                <span className="text-xs text-slate-400 font-mono">30 Tests Active</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Semester & Terminal Exams</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                High-stakes, large-cohort MCQ exams with randomised sets, strict time windows, negative marking rules, and instant result publication.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200">
                  Live Coding
                </span>
                <span className="text-xs text-slate-400 font-mono">Python, Java, C++</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Coding Lab Evaluations</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Assess real programming ability - students write and execute code live, evaluated against hidden test cases automatically with memory benchmarking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                  Placement
                </span>
                <span className="text-xs text-slate-400 font-mono">2026 Batch Ready</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Placement & Aptitude Tests</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Curated assessments built from past company papers for TCS NQT, Infosys, Accenture, Wipro NLTH, and Cognizant with detailed syllabus coverage.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-teal-50 text-teal-800 border border-teal-200">
                  Global Track
                </span>
                <span className="text-xs text-slate-400 font-mono">JLPT N5 Accredited</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Japanese Language Certification</h3>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Official vocabulary, Kanji, and grammar mock assessments customized for engineering students applying to Indo-Japan technology exchange programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. ROADMAP 2026: TWO NEW AI TOOLS
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="rounded-2xl bg-[#053324] text-white p-8 sm:p-10 border border-[#032419] shadow-xs relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs font-mono text-emerald-300/80 uppercase tracking-wider">
                Roadmap • 2026
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                Two new AI tools. Same portal. Same login.
              </h2>
            </div>

            <div className="lg:col-span-5 text-sm text-emerald-100/80 leading-relaxed font-normal">
              Recruiters now use AI-scored communication rounds and ATS filters as the first elimination gate. The LMS is adding the two tools students need to clear both.
            </div>
          </div>

          <div className="relative z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white/10 rounded-xl p-5 border border-white/15 space-y-2">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-emerald-300" />
                <h4 className="font-semibold text-sm text-white">AptiBot Math Step Solver</h4>
              </div>
              <p className="text-[15.5px] sm:text-[16px] text-emerald-100/90 leading-[1.68] font-normal">
                Instant AI breakdown of speed math, LCM time & work methods, and probability formulas with LaTeX step formatting.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-5 border border-white/15 space-y-2">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-300" />
                <h4 className="font-semibold text-sm text-white">ATS Resume & Recruiter Matcher</h4>
              </div>
              <p className="text-[15.5px] sm:text-[16px] text-emerald-100/90 leading-[1.68] font-normal">
                Scan your resume against live job descriptions to ensure ATS shortlisting for Super Dream (₹20+ LPA) campus drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FAQS SECTION
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading & Support Contact Box */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-semibold text-[#07865B]">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">
                Everything you need to know.
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                Common questions before your first assessment goes live.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 space-y-3">
              <h4 className="font-semibold text-sm text-slate-900">Still have questions?</h4>
              <p className="text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] font-normal tracking-[-0.01em]">
                Reach out to our campus placement support team and we will get back to you within 24 hours.
              </p>
              <div className="pt-1">
                <a
                  href="tel:9611224444"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#07865B] hover:text-[#044E39] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: 96112 24444 &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-xl overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:text-[#07865B] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#07865B]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 text-[15.5px] sm:text-[16px] text-[#526174] leading-[1.68] border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT US & FINAL CALL TO ACTION
          ======================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 3 Contact Info Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#07865B]">
                Contact Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mt-1">
                We&apos;re here to help your institution succeed.
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Questions about the platform, onboarding, or placement drives? Our team is happy to walk you through everything.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Call Us</div>
                  <div className="text-sm font-semibold text-slate-900">96112 24444</div>
                  <div className="text-[11px] text-slate-500">Available 9 AM - 6 PM, Mon-Sat</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Email Us</div>
                  <div className="text-sm font-semibold text-slate-900">placements@sahyadri.edu.in</div>
                  <div className="text-[11px] text-slate-500">We typically respond within a few hours</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500">Campus Location</div>
                  <div className="text-sm font-semibold text-slate-900">Sahyadri Campus, Adyar, Mangaluru</div>
                  <div className="text-[11px] text-slate-500">Training • Assessments • Recruitment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="lg:col-span-6 rounded-2xl bg-[#053324] text-white p-8 sm:p-10 flex flex-col justify-between border border-[#032419] shadow-xs relative overflow-hidden">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
                Ready to accelerate <br />
                <span className="text-emerald-300">campus placements?</span>
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed font-normal">
                Join forward-thinking colleges across Karnataka transforming student readiness with SahyadriPrep. Seamless onboarding, verified company patterns, and measurable career outcomes.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <div className="text-xs font-medium text-emerald-200/80">
                Support Hours: Monday - Saturday • 9:00 AM - 7:00 PM
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => requireAuth('exams')}
                  className="px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#053324] font-semibold text-sm transition-colors shadow-xs cursor-pointer"
                >
                  Access Portal
                </button>
                <a
                  href="tel:9611224444"
                  className="px-5 py-2.5 rounded-xl border border-white/30 hover:bg-white/10 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
