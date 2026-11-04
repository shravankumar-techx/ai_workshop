'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Maximize2,
  Minimize2,
  ChevronRight,
} from 'lucide-react';
import { ChatMessage } from '@/types';
import FormattedMessage from './FormattedMessage';

export default function PlacementBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      content: `👋 Hello! I am **PlacementBot**, your intelligent campus career & aptitude assistant.

I can help you master:
- ⚡ **"Quiz Me" Challenge Mode** (Instant aptitude questions with step-by-step solutions)
- 📐 **Aptitude Shortcuts** (Time & Work, 2D Motion, Speed & Distance, LCM Methods)
- 💼 **HR Interview Scenarios** (STAR Framework, Behavioral answers)
- 💻 **Core CS Topics** (DBMS, Operating Systems, Computer Networks)
- 🎯 **Company Patterns** (TCS NQT, Infosys, Accenture, Cognizant, Wipro)

Click **"⚡ Quiz Me"** below or ask me any question to begin!`,
      timestamp: 'Just now',
      quick_replies: [
        '⚡ Quiz Me',
        'Time & Work Shortcut',
        'Speed & Relative Motion',
        'Equations of 2D Motion',
        'HR STAR Method',
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      content: query,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        content: data.reply || 'I could not generate a response. Please try again.',
        timestamp: 'Just now',
        quick_replies: data.quick_replies || [],
        engine: data.engine,
      };

      setMessages((prev) => [...prev, botReply]);
    } catch {
      const errorReply: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        content: 'Network connection interrupted. Please try again in a moment.',
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: 'assistant',
        content: `Chat history reset. How can I assist your placement preparation now?`,
        timestamp: 'Just now',
        quick_replies: ['⚡ Quiz Me', 'Time & Work Shortcut', 'Speed & Relative Motion', 'HR STAR Method'],
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="open-placement-bot-btn"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-emerald-500/40 group cursor-pointer"
          aria-label="Open Placement AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full" />
          </div>
          <span className="text-sm font-semibold tracking-wide">Placement AI</span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs bg-white/20 rounded-full text-white font-mono">
            Gemini
          </span>
        </button>
      )}

      {/* Floating Conversational Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl overflow-hidden ${
            isExpanded
              ? 'inset-4 sm:inset-10 md:inset-16 w-auto h-auto'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[92vw] sm:w-[440px] h-[600px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 tracking-tight">PlacementBot</h3>
                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Campus Career & Aptitude Intelligence</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Minimize drawer' : 'Expand drawer'}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close drawer"
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-slate-800 bg-slate-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white shadow-xs rounded-tr-none'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-none shadow-xs'
                  }`}
                >
                  <FormattedMessage content={msg.content} />

                  {/* Suggestion Chips */}
                  {msg.quick_replies && msg.quick_replies.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                      {msg.quick_replies.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip)}
                          className="text-xs px-2.5 py-1 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300 transition flex items-center gap-1 active:scale-95 shadow-xs cursor-pointer"
                        >
                          <span>{chip}</span>
                          <ChevronRight className="w-3 h-3 text-emerald-600" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[10px] mt-1.5 flex items-center justify-between gap-2 ${
                      msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.engine && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-emerald-800 border border-slate-200">
                        {msg.engine}
                      </span>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none text-slate-500 text-xs flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
                  <span className="ml-1 text-[11px] text-slate-500">Synthesizing placement strategy...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about aptitude tricks, HR questions, or CS concepts..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white shadow-md shadow-emerald-600/20 transition flex items-center justify-center active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
