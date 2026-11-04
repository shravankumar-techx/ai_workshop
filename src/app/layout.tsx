import type { Metadata } from 'next';
import './globals.css';
import 'katex/dist/katex.min.css';
import { AppProvider } from '@/lib/store';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PlacementBot from '@/components/chat/PlacementBot';

export const metadata: Metadata = {
  title: 'CampusPrep Portal | Enterprise Placement & Career Preparation Platform',
  description: 'High-performance placement preparation suite: 30 MCQ aptitude mock exams, verified job drives, weekly career newsletters, and Gemini-powered Placement AI.',
  keywords: ['Campus Placements', 'Aptitude Tests', 'TCS NQT', 'Infosys', 'Interview Prep', 'Career Portal'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              nextjs-portal,
              [data-nextjs-toast],
              [data-nextjs-dev-overlay],
              script[data-nextjs-dev-overlay],
              .__next-dev-tools-indicator,
              [data-nextjs-dev-tools-button],
              [data-indicator-status],
              [data-next-badge-root],
              [data-next-badge],
              #next-logo {
                display: none !important;
                visibility: hidden !important;
                opacity: 0 !important;
                pointer-events: none !important;
                position: fixed !important;
                bottom: -99999px !important;
                left: -99999px !important;
                width: 0 !important;
                height: 0 !important;
                max-width: 0 !important;
                max-height: 0 !important;
                overflow: hidden !important;
                transform: scale(0) !important;
                z-index: -99999 !important;
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;

                // 1. Trigger Next.js official dev indicator cooldown endpoint
                try {
                  fetch('/__nextjs_disable_dev_indicator', { method: 'POST' }).catch(function() {});
                } catch(e) {}

                // 2. Intercept attachShadow so any shadow roots created by dev tools are hidden from the start
                try {
                  const origAttachShadow = Element.prototype.attachShadow;
                  Element.prototype.attachShadow = function(init) {
                    const shadowRoot = origAttachShadow.call(this, init);
                    try {
                      const style = document.createElement('style');
                      style.textContent = ':host, :host *, *, button, [data-nextjs-dev-tools-button], [data-indicator-status], svg, div { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; max-width: 0 !important; max-height: 0 !important; overflow: hidden !important; position: fixed !important; top: -99999px !important; left: -99999px !important; }';
                      shadowRoot.appendChild(style);

                      const obs = new MutationObserver(function() {
                        shadowRoot.querySelectorAll('*').forEach(function(node) {
                          node.style.setProperty('display', 'none', 'important');
                          node.style.setProperty('visibility', 'hidden', 'important');
                          node.style.setProperty('opacity', '0', 'important');
                          node.style.setProperty('pointer-events', 'none', 'important');
                        });
                      });
                      obs.observe(shadowRoot, { childList: true, subtree: true });
                    } catch(err) {}
                    return shadowRoot;
                  };
                } catch(e) {}

                // 3. Continuous sweep of main DOM for any devtools elements
                function suppressDevTools() {
                  try {
                    const targets = document.querySelectorAll('nextjs-portal, [data-nextjs-dev-overlay], script[data-nextjs-dev-overlay], [data-nextjs-toast]');
                    targets.forEach(function(el) {
                      el.style.setProperty('display', 'none', 'important');
                      el.style.setProperty('visibility', 'hidden', 'important');
                      el.style.setProperty('opacity', '0', 'important');
                      el.style.setProperty('pointer-events', 'none', 'important');
                      el.style.setProperty('width', '0', 'important');
                      el.style.setProperty('height', '0', 'important');
                      el.style.setProperty('position', 'fixed', 'important');
                      el.style.setProperty('top', '-99999px', 'important');
                      el.style.setProperty('left', '-99999px', 'important');
                      el.style.setProperty('transform', 'scale(0)', 'important');
                      el.style.setProperty('z-index', '-99999', 'important');

                      if (el.shadowRoot) {
                        try {
                          el.shadowRoot.querySelectorAll('*').forEach(function(child) {
                            child.style.setProperty('display', 'none', 'important');
                            child.style.setProperty('visibility', 'hidden', 'important');
                            child.style.setProperty('opacity', '0', 'important');
                            child.style.setProperty('pointer-events', 'none', 'important');
                          });
                          if (!el.shadowRoot.querySelector('style[data-hide-ndt]')) {
                            const style = document.createElement('style');
                            style.setAttribute('data-hide-ndt', 'true');
                            style.textContent = ':host, :host *, *, button, [data-nextjs-dev-tools-button], [data-indicator-status] { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; width: 0 !important; height: 0 !important; }';
                            el.shadowRoot.appendChild(style);
                          }
                        } catch(err) {}
                      }
                    });
                  } catch(e) {}
                }

                suppressDevTools();
                const obs = new MutationObserver(suppressDevTools);
                if (document.documentElement) {
                  obs.observe(document.documentElement, { childList: true, subtree: true });
                }
                window.addEventListener('DOMContentLoaded', suppressDevTools);
                window.addEventListener('load', suppressDevTools);
                setInterval(suppressDevTools, 200);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-800">
        <AppProvider>
          <Navbar />
          <main className="flex-1 w-full pb-28">{children}</main>
          <Footer />
          <PlacementBot />
        </AppProvider>
      </body>
    </html>
  );
}
