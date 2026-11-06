'use client';

import React, { useEffect } from 'react';

/**
 * Creates an expanding particle burst / click spark effect.
 * Multiple colorful dots radiate outward from the click origin and fade away.
 */
function spawnParticleBurst(x: number, y: number, isDark: boolean) {
  const particleCount = 14;
  const colors = isDark
    ? ['#34D399', '#6EE7B7', '#A7F3D0', '#FDE68A', '#38BDF8', '#FFFFFF']
    : ['#07865B', '#10B981', '#34D399', '#059669', '#F59E0B', '#38BDF8'];

  for (let i = 0; i < particleCount; i++) {
    const dot = document.createElement('span');
    const angle = (i * (360 / particleCount) + (Math.random() * 24 - 12)) * (Math.PI / 180);
    const distance = 30 + Math.random() * 55;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 4 + Math.random() * 4;
    const color = colors[Math.floor(Math.random() * colors.length)];

    dot.style.position = 'fixed';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.borderRadius = '50%';
    dot.style.backgroundColor = color;
    dot.style.pointerEvents = 'none';
    dot.style.zIndex = '999999';
    dot.style.boxShadow = `0 0 8px ${color}`;

    document.body.appendChild(dot);

    if (dot.animate) {
      const anim = dot.animate(
        [
          { transform: 'translate(-50%, -50%) translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(-50%, -50%) translate(${dx * 0.7}px, ${dy * 0.7}px) scale(0.9)`, opacity: 0.9, offset: 0.55 },
          { transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(0)`, opacity: 0 }
        ],
        {
          duration: 400 + Math.random() * 220,
          easing: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
          fill: 'forwards'
        }
      );

      anim.onfinish = () => {
        dot.remove();
      };
    } else {
      setTimeout(() => dot.remove(), 500);
    }
  }
}

export default function TouchRippleProvider({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      // Primary button or touch only (ignore right clicks)
      if (e.button !== 0 && e.pointerType === 'mouse') return;

      const target = e.target as Element | null;

      // Skip text entry fields so typing and text cursor positioning remain natural
      if (target && typeof target.closest === 'function') {
        const textInput = target.closest(
          'input:not([type="button"]):not([type="submit"]):not([type="checkbox"]):not([type="radio"]), textarea, select, [contenteditable="true"]'
        );
        if (textInput) return;
      }

      const clientX = e.clientX ?? 0;
      const clientY = e.clientY ?? 0;

      // Find if clicked inside an interactive container
      const interactiveTarget = target && typeof target.closest === 'function'
        ? (target.closest(
            'button, a, [role="button"], [data-ripple], .cursor-pointer, .glass-card, .glass-panel, input[type="submit"], input[type="button"]'
          ) as HTMLElement | null)
        : null;

      // Detect dark theme area for color tuning
      const isDarkSection = Boolean(
        target && typeof target.closest === 'function' &&
        target.closest(
          'header, .bg-[#044E39], .bg-[#033D2C], .bg-slate-900, [class*="from-[#044E39]"], [class*="from-[#033D2C]"]'
        )
      );

      // ALWAYS trigger the particle burst spark explosion on every click/tap
      spawnParticleBurst(clientX, clientY, isDarkSection);

      // Also render the smooth Material ripple wave
      const ripple = document.createElement('span');
      ripple.style.pointerEvents = 'none';
      ripple.style.borderRadius = '50%';

      if (interactiveTarget) {
        // --- CASE 1: Clicked inside an interactive element (Button, Card, Tab, Tile) ---
        const rect = interactiveTarget.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const diameter = Math.max(rect.width, rect.height) * 1.5;

        // Enforce relative positioning & bounding overflow
        const computed = window.getComputedStyle(interactiveTarget);
        if (computed.position === 'static') {
          interactiveTarget.style.position = 'relative';
        }
        if (computed.overflow !== 'hidden') {
          interactiveTarget.style.overflow = 'hidden';
        }

        const bg = computed.backgroundColor;
        const isAmber =
          interactiveTarget.classList.contains('bg-amber-500') ||
          interactiveTarget.classList.contains('bg-amber-600') ||
          interactiveTarget.classList.contains('text-amber-800');

        const isDark =
          isDarkSection ||
          interactiveTarget.classList.contains('bg-[#07865B]') ||
          interactiveTarget.classList.contains('bg-[#044E39]') ||
          interactiveTarget.classList.contains('bg-[#065F46]') ||
          interactiveTarget.classList.contains('bg-[#033D2C]') ||
          interactiveTarget.classList.contains('bg-emerald-600') ||
          interactiveTarget.classList.contains('bg-emerald-700') ||
          interactiveTarget.classList.contains('bg-slate-900') ||
          interactiveTarget.classList.contains('text-white') ||
          (bg &&
            bg.includes('rgb') &&
            !bg.includes('255, 255, 255') &&
            !bg.includes('248, 250, 252') &&
            !bg.includes('rgba(0, 0, 0, 0)'));

        const waveType = isAmber
          ? 'touch-ripple-amber'
          : isDark
          ? 'touch-ripple-white'
          : 'touch-ripple-emerald';

        ripple.className = `touch-ripple-wave ${waveType}`;
        ripple.style.position = 'absolute';
        ripple.style.width = `${diameter}px`;
        ripple.style.height = `${diameter}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        interactiveTarget.appendChild(ripple);
      } else {
        // --- CASE 2: Clicked on a blank area, page canvas, background, or text section ---
        const diameter = 130;

        ripple.className = `touch-ripple-wave ${
          isDarkSection ? 'touch-ripple-white' : 'touch-ripple-emerald'
        }`;
        // Fixed positioning prevents any scrollbar flash or document reflow
        ripple.style.position = 'fixed';
        ripple.style.width = `${diameter}px`;
        ripple.style.height = `${diameter}px`;
        ripple.style.left = `${clientX}px`;
        ripple.style.top = `${clientY}px`;
        ripple.style.zIndex = '9999';

        document.body.appendChild(ripple);
      }

      // Smooth cleanup on animationend with fallback timeout
      const cleanup = () => {
        ripple.removeEventListener('animationend', cleanup);
        if (ripple.parentNode) {
          ripple.remove();
        }
      };

      ripple.addEventListener('animationend', cleanup);
      setTimeout(cleanup, 700);
    };

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  return <>{children}</>;
}
