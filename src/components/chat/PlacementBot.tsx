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
      content: `Welcome to the **Placement Assistant**.

I can help clarify technical questions, provide step-by-step mathematical reasoning for aptitude problems, explain core CS concepts (DBMS, Operating Systems, Computer Networks), and share hiring round patterns for campus recruitment drives (TCS NQT, Infosys, Accenture, Cognizant).

Select a topic below or type a question to get started.`,
      timestamp: 'Just now',
      quick_replies: [
        'Practice Aptitude Problem',
        'Time and Work Method',
        'Relative Speed Formulas',
        'Behavioral STAR Technique',
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
        content: `Chat history reset. How can I assist your placement preparation?`,
        timestamp: 'Just now',
        quick_replies: ['Practice Aptitude Problem', 'Time and Work Method', 'Relative Speed Formulas', 'Behavioral STAR Technique'],
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
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#07865B] hover:bg-[#065F46] text-white text-xs font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 border border-emerald-600/30 cursor-pointer group"
          aria-label="Open Placement Assistant"
        >
          <div className="w-5 h-5 rounded-lg bg-white/15 flex items-center justify-center text-white">
            <Bot className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </div>
          <span>Placement Assistant</span>
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
        </button>
      )}

      {/* Floating Conversational Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col bg-white border border-slate-200/90 shadow-2xl rounded-2xl overflow-hidden ${
            isExpanded
              ? 'inset-4 sm:inset-10 md:inset-16 w-auto h-auto'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[92vw] sm:w-[440px] h-[600px] max-h-[85vh]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-white border-b border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-emerald-100 bg-white flex items-center justify-center p-0.5 shadow-xs shrink-0">
                <img
                  src="/images/sahyadri-crest.jpg"
                  alt="Sahyadri Shield Crest"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">Sahyadri Placement AI</h3>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Sahyadri Career & Aptitude Intelligence</p>
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm text-slate-800 bg-[#F8FAF9]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#07865B] shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#07865B] text-white shadow-xs rounded-tr-none'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-none shadow-xs'
                  }`}
                >
                  <FormattedMessage content={msg.content} isUser={msg.sender === 'user'} />

                  {/* Suggestion Chips */}
                  {msg.quick_replies && msg.quick_replies.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.quick_replies.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip)}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-50/70 hover:bg-emerald-100/80 text-emerald-800 hover:text-emerald-900 border border-emerald-200/80 transition-all flex items-center gap-1.5 active:scale-95 shadow-2xs cursor-pointer group/chip"
                        >
                          <span>{chip}</span>
                          <ChevronRight className="w-3 h-3 text-[#07865B] group-hover/chip:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}

                  <div
                    className={`text-[10px] mt-2 flex items-center justify-between gap-2 ${
                      msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.engine && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                        {msg.engine}
                      </span>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#07865B] border border-emerald-700 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#07865B] shrink-0 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-2xl rounded-tl-none text-slate-600 text-xs flex items-center gap-2 shadow-xs">
                  <span className="w-1.5 h-1.5 bg-[#07865B] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#07865B] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#07865B] rounded-full animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-slate-500 font-medium ml-1">Formulating response...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-3.5 bg-white border-t border-slate-200/80">
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
                className="flex-1 bg-[#F8FAF9] border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#07865B]/30 focus:border-[#07865B] shadow-inner transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#07865B] hover:bg-[#065F46] disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white shadow-xs hover:shadow-sm transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-95"
                title="Send message"
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
