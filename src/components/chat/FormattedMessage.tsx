'use client';

import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface FormattedMessageProps {
  content: string;
  isUser?: boolean;
}

export default function FormattedMessage({ content, isUser = false }: FormattedMessageProps) {
  if (!content) return null;
  const blocks = parseBlocks(content);

  return (
    <div
      className={`space-y-2.5 text-xs sm:text-sm leading-relaxed overflow-x-auto ${
        isUser ? 'text-white' : 'text-slate-700'
      }`}
    >
      {blocks.map((block, idx) => (
        <React.Fragment key={idx}>{renderBlock(block, isUser)}</React.Fragment>
      ))}
    </div>
  );
}

type BlockType =
  | { type: 'heading'; level: number; text: string }
  | { type: 'displayMath'; latex: string }
  | { type: 'code'; language?: string; code: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'list'; items: string[]; ordered: boolean }
  | { type: 'blockquote'; text: string }
  | { type: 'hr' }
  | { type: 'paragraph'; text: string };

function parseBlocks(raw: string): BlockType[] {
  const lines = raw.split('\n');
  const blocks: BlockType[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Display Math with $$ ... $$ or \[ ... \]
    if (trimmed.startsWith('$$') || trimmed.startsWith('\\[')) {
      const isBracket = trimmed.startsWith('\\[');
      const closeDelim = isBracket ? '\\]' : '$$';
      const openLen = isBracket ? 2 : 2;

      if (trimmed.endsWith(closeDelim) && trimmed.length > openLen + closeDelim.length - 1) {
        const latex = trimmed.slice(openLen, -closeDelim.length).trim();
        blocks.push({ type: 'displayMath', latex });
        i++;
        continue;
      } else {
        // Multi-line display math
        let mathContent = trimmed.slice(openLen);
        i++;
        while (i < lines.length && !lines[i].includes(closeDelim)) {
          mathContent += '\n' + lines[i];
          i++;
        }
        if (i < lines.length) {
          mathContent += '\n' + lines[i].replace(closeDelim, '');
          i++;
        }
        blocks.push({ type: 'displayMath', latex: mathContent.trim() });
        continue;
      }
    }

    // Fenced Code Block
    if (trimmed.startsWith('```')) {
      const language = trimmed.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // skip closing ```
      blocks.push({ type: 'code', language, code: codeLines.join('\n') });
      continue;
    }

    // Horizontal Rule
    if (trimmed === '---' || trimmed === '***' || trimmed === '___') {
      blocks.push({ type: 'hr' });
      i++;
      continue;
    }

    // Headings: # through ######
    if (trimmed.startsWith('#')) {
      const match = trimmed.match(/^(#{1,6})\s+(.*)$/);
      if (match) {
        blocks.push({
          type: 'heading',
          level: match[1].length,
          text: match[2],
        });
        i++;
        continue;
      }
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push({ type: 'blockquote', text: quoteLines.join(' ') });
      continue;
    }

    // Tables: Line starts with | and next line has |---
    if (trimmed.startsWith('|') && i + 1 < lines.length && lines[i + 1].includes('|---')) {
      const headers = trimmed
        .split('|')
        .map((h) => h.trim())
        .filter((h) => h.length > 0);
      i += 2; // skip header and separator
      const rows: string[][] = [];

      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const rowCols = lines[i]
          .split('|')
          .map((c) => c.trim())
          .filter((_, colIdx, arr) => colIdx > 0 && colIdx < arr.length);
        rows.push(rowCols);
        i++;
      }

      blocks.push({ type: 'table', headers, rows });
      continue;
    }

    // Unordered List (- or *)
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length) {
        const curr = lines[i].trim();
        if (/^[-*]\s+/.test(curr)) {
          items.push(curr.replace(/^[-*]\s+/, ''));
          i++;
        } else if (
          curr &&
          !curr.startsWith('#') &&
          !curr.startsWith('```') &&
          !curr.startsWith('$$') &&
          !curr.startsWith('|') &&
          items.length > 0 &&
          (lines[i].startsWith('  ') || lines[i].startsWith('\t'))
        ) {
          items[items.length - 1] += ' ' + curr;
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: 'list', items, ordered: false });
      continue;
    }

    // Ordered List (1. 2. 3.)
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length) {
        const curr = lines[i].trim();
        if (/^\d+\.\s+/.test(curr)) {
          items.push(curr.replace(/^\d+\.\s+/, ''));
          i++;
        } else if (
          curr &&
          !curr.startsWith('#') &&
          !curr.startsWith('```') &&
          !curr.startsWith('$$') &&
          !curr.startsWith('|') &&
          items.length > 0 &&
          (lines[i].startsWith('  ') || lines[i].startsWith('\t'))
        ) {
          items[items.length - 1] += ' ' + curr;
          i++;
        } else {
          break;
        }
      }
      blocks.push({ type: 'list', items, ordered: true });
      continue;
    }

    // Regular paragraph (accumulate until next block boundary)
    const pLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('$$') &&
      !lines[i].trim().startsWith('\\[') &&
      !lines[i].trim().startsWith('>') &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      lines[i].trim() !== '---'
    ) {
      pLines.push(lines[i].trim());
      i++;
    }

    if (pLines.length > 0) {
      blocks.push({ type: 'paragraph', text: pLines.join(' ') });
    }
  }

  return blocks;
}

function renderBlock(block: BlockType, isUser: boolean) {
  switch (block.type) {
    case 'heading': {
      const Tag = block.level === 1 ? 'h2' : block.level === 2 ? 'h3' : 'h4';
      const sizeClasses =
        block.level === 1
          ? isUser
            ? 'text-base sm:text-lg font-extrabold text-white pt-2 pb-1 border-b border-white/20'
            : 'text-base sm:text-lg font-extrabold text-slate-900 pt-2 pb-1 border-b border-slate-200'
          : block.level === 2
          ? isUser
            ? 'text-sm sm:text-base font-bold text-emerald-100 pt-1.5'
            : 'text-sm sm:text-base font-bold text-[#07865B] pt-1.5'
          : isUser
          ? 'text-xs sm:text-sm font-semibold text-white pt-1'
          : 'text-xs sm:text-sm font-semibold text-slate-800 pt-1';

      return (
        <Tag className={`${sizeClasses} tracking-tight`}>
          <InlineContent text={block.text} isUser={isUser} />
        </Tag>
      );
    }

    case 'displayMath':
      return <DisplayMathBlock latex={block.latex} isUser={isUser} />;

    case 'code':
      return (
        <div className="my-2.5 rounded-xl bg-slate-900 border border-slate-800 p-3 overflow-x-auto font-mono text-xs text-emerald-300 shadow-sm">
          {block.language && (
            <div className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-wider">
              {block.language}
            </div>
          )}
          <pre className="leading-relaxed whitespace-pre">{block.code}</pre>
        </div>
      );

    case 'table':
      return (
        <div className="my-3 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase tracking-wider text-[11px]">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="py-2.5 px-3 font-bold">
                    <InlineContent text={h} isUser={isUser} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {block.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-slate-50/70 transition">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="py-2 px-3">
                      <InlineContent text={cell} isUser={isUser} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      const listClass = block.ordered ? 'list-decimal' : 'list-disc';
      return (
        <ListTag
          className={`${listClass} pl-5 space-y-1.5 my-2 ${
            isUser ? 'text-white marker:text-emerald-200' : 'text-slate-700 marker:text-emerald-600'
          }`}
        >
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              <InlineContent text={item} isUser={isUser} />
            </li>
          ))}
        </ListTag>
      );
    }

    case 'blockquote':
      return (
        <blockquote
          className={`my-2.5 pl-3.5 border-l-2 py-1.5 pr-3 rounded-r-lg italic text-xs leading-relaxed ${
            isUser
              ? 'border-white/60 bg-white/10 text-white'
              : 'border-[#07865B] bg-emerald-50/60 text-slate-700'
          }`}
        >
          <InlineContent text={block.text} isUser={isUser} />
        </blockquote>
      );

    case 'hr':
      return <hr className={`my-3 ${isUser ? 'border-white/20' : 'border-slate-200'}`} />;

    case 'paragraph':
    default:
      return (
        <p className={`leading-relaxed my-1 ${isUser ? 'text-white' : 'text-slate-700'}`}>
          <InlineContent text={block.text} isUser={isUser} />
        </p>
      );
  }
}

function DisplayMathBlock({ latex, isUser }: { latex: string; isUser: boolean }) {
  let html = '';
  try {
    html = katex.renderToString(latex, {
      displayMode: true,
      throwOnError: false,
    });
  } catch {
    html = latex;
  }
  return (
    <div
      className={`my-3 py-2.5 px-3 sm:px-4 rounded-xl overflow-x-auto text-center shadow-xs ${
        isUser
          ? 'bg-emerald-700/80 border border-emerald-500/50 text-white'
          : 'bg-emerald-50/70 border border-emerald-200 text-emerald-950'
      }`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Tokenizes and renders inline text:
 * - Display Math: $$...$$ or \[...\]
 * - Inline Code: `...`
 * - Bold: **...** (recursively parses inside, so **Speed ($S$):** works)
 * - Inline Math: $...$ or \(...\)
 * - Italic: *...*
 * - Plain text
 */
function InlineContent({ text, isUser }: { text: string; isUser: boolean }): React.ReactNode {
  if (!text) return null;
  const tokens = tokenizeInline(text);

  return (
    <>
      {tokens.map((token, idx) => {
        switch (token.type) {
          case 'displayMath':
            return <DisplayMathBlock key={idx} latex={token.content} isUser={isUser} />;

          case 'math': {
            let mathHtml = '';
            try {
              mathHtml = katex.renderToString(token.content, {
                displayMode: false,
                throwOnError: false,
              });
            } catch {
              mathHtml = token.content;
            }
            return (
              <span
                key={idx}
                className={`inline-block px-1 font-mono font-semibold ${
                  isUser ? 'text-emerald-100' : 'text-emerald-800'
                }`}
                dangerouslySetInnerHTML={{ __html: mathHtml }}
              />
            );
          }

          case 'code':
            return (
              <code
                key={idx}
                className={`px-1.5 py-0.5 rounded font-mono text-[11px] ${
                  isUser
                    ? 'bg-emerald-700/80 border border-emerald-500/50 text-emerald-100'
                    : 'bg-slate-100 border border-slate-200 text-emerald-800 font-semibold'
                }`}
              >
                {token.content}
              </code>
            );

          case 'link':
            return (
              <a
                key={idx}
                href={token.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline underline-offset-2 transition ${
                  isUser
                    ? 'text-white hover:text-emerald-100'
                    : 'text-[#07865B] hover:text-[#065F46] font-semibold'
                }`}
              >
                {token.content}
              </a>
            );

          case 'bold':
            return (
              <strong key={idx} className={`font-bold ${isUser ? 'text-white' : 'text-slate-900'}`}>
                <InlineContent text={token.content} isUser={isUser} />
              </strong>
            );

          case 'italic':
            return (
              <em key={idx} className={`italic ${isUser ? 'text-emerald-100' : 'text-slate-600'}`}>
                <InlineContent text={token.content} isUser={isUser} />
              </em>
            );

          case 'text':
          default:
            return <React.Fragment key={idx}>{token.content}</React.Fragment>;
        }
      })}
    </>
  );
}

type InlineToken =
  | { type: 'displayMath'; content: string }
  | { type: 'code'; content: string }
  | { type: 'link'; content: string; href: string }
  | { type: 'bold'; content: string }
  | { type: 'math'; content: string }
  | { type: 'italic'; content: string }
  | { type: 'text'; content: string };

function tokenizeInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    // 1. Display math inside inline: $$...$$ or \[...\]
    const displayMatch = remaining.match(/^(\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\])/);
    if (displayMatch) {
      const latex = displayMatch[2] !== undefined ? displayMatch[2] : displayMatch[3];
      tokens.push({ type: 'displayMath', content: latex.trim() });
      remaining = remaining.slice(displayMatch[0].length);
      continue;
    }

    // 2. Inline code: `...`
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      tokens.push({ type: 'code', content: codeMatch[1] });
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // 3. Markdown Link: [label](url)
    const linkMatch = remaining.match(/^\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/);
    if (linkMatch) {
      tokens.push({ type: 'link', content: linkMatch[1], href: linkMatch[2] });
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // 4. Bold: **...**
    const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/);
    if (boldMatch) {
      tokens.push({ type: 'bold', content: boldMatch[1] });
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // 5. Inline math: $...$ or \(...\)
    const inlineMathMatch = remaining.match(/^(\$([^\$\n]+)\$|\\\(([^\)\n]+)\\\))/);
    if (inlineMathMatch) {
      const latex = inlineMathMatch[2] !== undefined ? inlineMathMatch[2] : inlineMathMatch[3];
      tokens.push({ type: 'math', content: latex.trim() });
      remaining = remaining.slice(inlineMathMatch[0].length);
      continue;
    }

    // 6. Italic: *...*
    const italicMatch = remaining.match(/^\*([^*]+)\*/);
    if (italicMatch) {
      tokens.push({ type: 'italic', content: italicMatch[1] });
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // 7. Regular text up to next special character
    const nextSpecial = remaining.search(/[\$`\*\[]|\\\[|\\\(/);
    if (nextSpecial === -1) {
      tokens.push({ type: 'text', content: remaining });
      break;
    } else if (nextSpecial === 0) {
      tokens.push({ type: 'text', content: remaining[0] });
      remaining = remaining.slice(1);
    } else {
      tokens.push({ type: 'text', content: remaining.slice(0, nextSpecial) });
      remaining = remaining.slice(nextSpecial);
    }
  }

  return tokens;
}

