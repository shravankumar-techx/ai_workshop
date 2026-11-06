'use client';

import React from 'react';

interface CompanyLogoProps {
  name: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
}

export default function CompanyLogo({ name, className = '', size = 'full' }: CompanyLogoProps) {
  const norm = (name || '').toLowerCase().trim();
  const isCompactIcon = size === 'xs' || size === 'sm';

  // ========================================================
  // 1. COMPACT ICON MODE (For inline exam tags & badges)
  // ========================================================
  if (isCompactIcon) {
    if (norm.includes('accenture')) {
      return (
        <span className={`inline-flex items-center text-[#A100FF] font-black text-xs leading-none ${className}`}>
          &gt;
        </span>
      );
    }
    if (norm.includes('cognizant')) {
      return (
        <span className={`inline-flex items-center text-[#0033A0] font-sans font-black text-xs leading-none ${className}`}>
          C
        </span>
      );
    }
    if (norm.includes('infosys')) {
      return (
        <span className={`inline-flex items-center text-[#007CC3] font-serif font-black text-[11px] leading-none ${className}`}>
          i
        </span>
      );
    }
    if (norm.includes('tcs') || norm.includes('tata')) {
      return (
        <span className={`inline-flex items-center text-[#E21836] font-black italic text-[11px] leading-none ${className}`}>
          tcs
        </span>
      );
    }
    if (norm.includes('wipro')) {
      return (
        <span className={`inline-flex items-center gap-0.5 ${className}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E51E25]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0091DA]" />
        </span>
      );
    }
    if (norm.includes('microsoft')) {
      return (
        <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 shrink-0 ${className}`} fill="none">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="0.5" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="0.5" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="0.5" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="0.5" />
        </svg>
      );
    }
    if (norm.includes('google')) {
      return (
        <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 shrink-0 ${className}`}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
      );
    }
    return (
      <span className={`inline-flex items-center font-bold text-[10px] text-slate-700 ${className}`}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  // ========================================================
  // 2. FULL / MARQUEE LOGO MODE (High-Fidelity Original Brand Logos)
  // ========================================================

  // 1. Tata Elxsi
  if (norm.includes('tata elxsi') || norm.includes('elxsi')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="w-7 h-7 rounded-full border-2 border-[#005A9C] flex items-center justify-center">
          <span className="text-[#005A9C] font-black text-sm leading-none">T</span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-extrabold text-xl tracking-tight text-slate-900">TATA</span>
          <span className="font-bold text-xl text-[#005A9C] tracking-wide">ELXSI</span>
        </div>
      </div>
    );
  }

  // 2. Tata Consultancy Services (TCS)
  if (norm.includes('tcs') || norm.includes('tata consultancy') || norm.includes('tata')) {
    return (
      <div className={`flex items-center justify-center gap-2 select-none whitespace-nowrap ${className}`}>
        <span className="text-[#E21836] font-black italic text-3xl tracking-tighter">tcs</span>
        <div className="h-5 w-px bg-slate-300 mx-0.5 hidden sm:block" />
        <span className="text-slate-600 font-bold text-[12px] uppercase tracking-wider hidden sm:block leading-tight">
          TATA CONSULTANCY SERVICES
        </span>
      </div>
    );
  }

  // 3. Infosys
  if (norm.includes('infosys')) {
    return (
      <div className={`flex items-center justify-center whitespace-nowrap select-none ${className}`}>
        <span className="text-[#007CC3] font-serif font-black text-2xl tracking-tight">
          Infosys
        </span>
      </div>
    );
  }

  // 4. Microsoft
  if (norm.includes('microsoft')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="none">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" rx="0.5" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" rx="0.5" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" rx="0.5" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" rx="0.5" />
        </svg>
        <span className="font-semibold text-xl text-slate-800 tracking-tight">Microsoft</span>
      </div>
    );
  }

  // 5. Google
  if (norm.includes('google')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
        <span className="font-bold text-xl text-slate-800 tracking-tight">Google</span>
      </div>
    );
  }

  // 6. Adobe
  if (norm.includes('adobe')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="w-8 h-8 rounded bg-[#FA0F00] flex items-center justify-center p-1 shadow-xs">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
            <path d="M14.5 3h6.5v18l-6.5-18zm-5 0h-6.5v18l6.5-18zm2.5 7.5l4 9.5h-3.2l-1.8-4.5h-2.5l2.5-5z" />
          </svg>
        </div>
        <span className="font-extrabold text-xl text-slate-900 tracking-tight">Adobe</span>
      </div>
    );
  }

  // 7. Amazon
  if (norm.includes('amazon') || norm.includes('aws')) {
    return (
      <div className={`flex flex-col items-start leading-none select-none whitespace-nowrap ${className}`}>
        <span className="font-black text-2xl text-[#232F3E] tracking-tight">amazon</span>
        <svg viewBox="0 0 95 24" className="w-20 h-4 text-[#FF9900] -mt-0.5 fill-current">
          <path d="M72.2 16.5c-15.6 11.5-38.3 12.3-57.8 2.6-2.8-1.4-0.4-3.3 2-2.1 18.5 9.1 40 8.3 54.7-2.3 2.1-1.5 3.5 0.5 1.1 1.8z" />
          <path d="M74.8 13.7c-0.8-1-5.1-0.5-7.1 0.4-0.6 0.3-0.5-0.3 0.2-0.8 4.2-3.2 8.7-2.1 9.4-1.2 0.7 0.9-0.2 5.5-4.2 9-0.6 0.5-1.1 0.3-0.8-0.3 1.1-1.9 3.3-6.1 2.5-7.1z" />
        </svg>
      </div>
    );
  }

  // 8. Cisco
  if (norm.includes('cisco')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 text-[#049FD9] whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 32 20" className="w-9 h-6 shrink-0 fill-current">
          <rect x="1" y="10" width="2" height="9" rx="1" />
          <rect x="5" y="6" width="2" height="13" rx="1" />
          <rect x="9" y="10" width="2" height="9" rx="1" />
          <rect x="13" y="2" width="2" height="17" rx="1" />
          <rect x="17" y="10" width="2" height="9" rx="1" />
          <rect x="21" y="2" width="2" height="17" rx="1" />
          <rect x="25" y="10" width="2" height="9" rx="1" />
          <rect x="29" y="6" width="2" height="13" rx="1" />
        </svg>
        <span className="font-black text-xl text-slate-800 tracking-wider">CISCO</span>
      </div>
    );
  }

  // 9. Cohesity
  if (norm.includes('cohesity')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="w-6 h-6 rounded-md bg-[#00C285] flex items-center justify-center text-white font-black text-xs shadow-xs">
          C
        </div>
        <span className="font-extrabold text-xl text-slate-900 tracking-tight">COHESITY</span>
      </div>
    );
  }

  // 10. SAP / SAP Labs
  if (norm.includes('sap')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="bg-gradient-to-r from-[#008FD3] to-[#0070B8] text-white font-black text-base px-3.5 py-1 rounded shadow-xs tracking-wider">
          SAP
        </div>
        <span className="font-bold text-lg text-slate-700 tracking-tight">Labs</span>
      </div>
    );
  }

  // 11. Goldman Sachs
  if (norm.includes('goldman')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="px-2.5 py-1 rounded bg-[#002868] text-white font-serif font-black text-sm tracking-tight shadow-xs">
          GS
        </div>
        <span className="font-serif font-bold text-lg text-[#002868] tracking-tight">Goldman Sachs</span>
      </div>
    );
  }

  // 12. Accenture
  if (norm.includes('accenture')) {
    return (
      <div className={`flex items-center justify-center font-bold text-xl text-slate-900 tracking-tight whitespace-nowrap select-none ${className}`}>
        <span className="text-[#A100FF] font-black text-2xl mr-1 leading-none">&gt;</span>
        <span>accenture</span>
      </div>
    );
  }

  // 13. Cognizant
  if (norm.includes('cognizant')) {
    return (
      <div className={`flex items-center justify-center gap-2 whitespace-nowrap select-none ${className}`}>
        <div className="w-6 h-6 rounded-full border-2 border-[#0033A0] flex items-center justify-center">
          <span className="text-[#0033A0] font-sans font-black text-xs leading-none">C</span>
        </div>
        <span className="font-sans font-black text-xl text-[#0033A0] tracking-tight">
          Cognizant
        </span>
      </div>
    );
  }

  // 14. Deloitte
  if (norm.includes('deloitte')) {
    return (
      <div className={`flex items-center justify-center font-extrabold text-xl text-slate-900 tracking-tight whitespace-nowrap select-none ${className}`}>
        <span>Deloitte</span>
        <span className="text-[#86BC25] font-black text-3xl leading-none">.</span>
      </div>
    );
  }

  // 15. Bosch
  if (norm.includes('bosch')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0 fill-[#EA1B2A]">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#EA1B2A" strokeWidth="2.5" />
          <rect x="10" y="5" width="4" height="14" rx="1" fill="#EA1B2A" />
        </svg>
        <span className="font-black text-xl text-slate-900 tracking-wider">BOSCH</span>
      </div>
    );
  }

  // 16. HSBC
  if (norm.includes('hsbc')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
          <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#DB0011" />
          <path d="M12 7l-5 5 5 5 5-5-5-5z" fill="#FFFFFF" />
        </svg>
        <span className="font-extrabold text-xl text-slate-900 tracking-tight">HSBC</span>
      </div>
    );
  }

  // 17. Capgemini
  if (norm.includes('capgemini')) {
    return (
      <div className={`flex items-center justify-center gap-2 text-[#0070AD] font-bold text-xl whitespace-nowrap select-none ${className}`}>
        <span className="text-2xl">♠</span>
        <span>Capgemini</span>
      </div>
    );
  }

  // 18. IBM
  if (norm.includes('ibm')) {
    return (
      <div className={`flex items-center justify-center whitespace-nowrap select-none ${className}`}>
        <span className="font-mono font-black text-2xl text-[#006699] tracking-widest border-y-2 border-[#006699] px-2 py-0.5">
          IBM
        </span>
      </div>
    );
  }

  // 19. Wipro
  if (norm.includes('wipro')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#E51E25]" />
          <div className="w-3 h-3 rounded-full bg-[#0091DA]" />
          <div className="w-3 h-3 rounded-full bg-[#00A850]" />
          <div className="w-3 h-3 rounded-full bg-[#8A2BE2]" />
        </div>
        <span className="font-bold text-xl text-slate-800 tracking-tight">wipro</span>
      </div>
    );
  }

  // 20. LTIMindtree
  if (norm.includes('ltimindtree') || norm.includes('mindtree')) {
    return (
      <div className={`flex items-center justify-center whitespace-nowrap select-none ${className}`}>
        <span className="font-extrabold text-xl text-[#003366] tracking-tight">
          LTIMindtree
        </span>
      </div>
    );
  }

  // 21. Hexaware
  if (norm.includes('hexaware')) {
    return (
      <div className={`flex items-center justify-center gap-2 font-bold text-lg text-slate-800 whitespace-nowrap select-none ${className}`}>
        <span className="text-[#FF5B35] font-black text-xl">+i</span>
        <span className="tracking-wide">HEXAWARE</span>
      </div>
    );
  }

  // 22. Tech Mahindra
  if (norm.includes('tech mahindra') || norm.includes('mahindra')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 select-none whitespace-nowrap ${className}`}>
        <div className="w-6 h-6 rounded bg-[#ED1C24] flex items-center justify-center text-white font-black text-xs">
          M
        </div>
        <span className="font-bold text-lg text-slate-900 tracking-tight">Tech Mahindra</span>
      </div>
    );
  }

  // 23. Belc (Japan)
  if (norm.includes('belc')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <div className="px-3 py-1 rounded bg-[#E60012] text-white font-black text-base tracking-widest shadow-xs">
          BELC
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
          Japan
        </span>
      </div>
    );
  }

  // 24. IMV Corporation (Japan)
  if (norm.includes('imv')) {
    return (
      <div className={`flex items-center justify-center gap-2.5 whitespace-nowrap select-none ${className}`}>
        <span className="font-black text-2xl text-[#004B97] tracking-tight">IMV</span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
          Japan
        </span>
      </div>
    );
  }

  // 25. Flipkart
  if (norm.includes('flipkart')) {
    return (
      <div className={`flex items-center justify-center gap-2 font-bold text-[#2874F0] whitespace-nowrap select-none ${className}`}>
        <div className="w-7 h-7 rounded bg-[#2874F0] text-[#FFE11B] font-black italic flex items-center justify-center text-sm shadow-xs">
          f
        </div>
        <span className="text-slate-900 font-extrabold text-lg">Flipkart</span>
      </div>
    );
  }

  // 26. Atlassian
  if (norm.includes('atlassian')) {
    return (
      <div className={`flex items-center justify-center gap-2 whitespace-nowrap select-none ${className}`}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="none">
          <path d="M11.66 3.02C11.3 3.63 9.4 6.75 8.1 8.87c-2.3 3.76-4.9 8-4.9 12.11 0 .2.02.4.05.6.35-.12 1.4-.48 2.37-.82 2.68-.93 5.48-1.9 6.04-2.1.28-.1.44-.38.44-.68V3.02z" fill="#0052CC" />
          <path d="M12.34 3.02c.36.61 2.26 3.73 3.56 5.85 2.3 3.76 4.9 8 4.9 12.11 0 .2-.02.4-.05.6-.35-.12-1.4-.48-2.37-.82-2.68-.93-5.48-1.9-6.04-2.1-.28-.1-.44-.38-.44-.68V3.02z" fill="#2684FF" />
        </svg>
        <span className="font-bold text-xl text-[#0052CC]">Atlassian</span>
      </div>
    );
  }

  // 27. HCL
  if (norm.includes('hcl')) {
    return (
      <div className={`flex items-center justify-center select-none whitespace-nowrap ${className}`}>
        <span className="font-sans font-black italic text-xl text-[#0066B2] tracking-wider">
          HCL
        </span>
      </div>
    );
  }

  // Default fallback
  return (
    <div className={`flex items-center justify-center font-bold text-lg text-slate-800 select-none whitespace-nowrap ${className}`}>
      {name}
    </div>
  );
}
