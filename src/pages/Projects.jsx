import React, { useState } from 'react';
import { ExternalLink, Sparkles, Cpu, Layers, Clock, CheckCircle2, ArrowUpRight, Code, Activity } from 'lucide-react';
import ProjectDetailModal from '../components/ProjectDetailModal';

export default function Projects() {
  const [activeModalKey, setActiveModalKey] = useState(null);

  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3.5 max-h-[calc(100vh-100px)] flex flex-col overflow-y-auto lg:overflow-hidden">

      {/* Compact Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-950/90 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-md">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-outfit font-extrabold text-slate-100 tracking-tight flex items-center gap-2">
              Featured <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Bento Projects</span>
            </h2>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              Interactive 6-Tile Bento Matrix • Click any card for full details & GitHub repos
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            6 Projects Matrix
          </span>
        </div>
      </div>

      {/* Unified 6-Tile Bento Grid Matrix (Natural Content Height) */}
      <div className="grid grid-cols-12 gap-3.5 h-auto max-h-full">

        {/* ================= ROW 1 ================= */}

        {/* Tile 1: VeriSumm (6 Cols) */}
        <div
          onClick={() => setActiveModalKey('verisumm')}
          className="col-span-12 lg:col-span-6 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-cyan-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-cyan-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 text-[9px] font-mono font-bold border border-cyan-500/60 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-400" /> ⚡ CURRENTLY WORKING ON
              </span>
              <span className="text-[9px] font-mono text-slate-400">BIOMEDICAL AI</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              VeriSumm
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              Biomedical EHR text summarizer & hallucination verifier with sentence-level claim traceability.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-cyan-300 text-[9px] font-mono border border-slate-800">Claim Traceability</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[9px] font-mono border border-slate-800">Clinical EHR Parser</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-indigo-300 text-[9px] font-mono border border-slate-800">Human-in-Loop Review</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">TypeScript • React • Node.js • NLP</span>
            <span className="text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Tile 2: FLN Learning System (6 Cols) */}
        <div
          onClick={() => setActiveModalKey('fln')}
          className="col-span-12 lg:col-span-6 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-amber-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-950/90 text-amber-300 text-[9px] font-mono font-bold border border-amber-500/60 flex items-center gap-1">
                <Clock className="w-2.5 h-2.5 text-amber-400" /> ⏳ PENDING PR REVIEW
              </span>
              <span className="text-[9px] font-mono text-slate-400">IIT ROPAR EDTECH</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
              FLN Learning System
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              AI-powered foundational numeracy learning software built during IIT Ropar internship.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-300 text-[9px] font-mono border border-slate-800">PR Submitted</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[9px] font-mono border border-slate-800">Foundational Math</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-emerald-300 text-[9px] font-mono border border-slate-800">Low-Bandwidth</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">React.js • Node.js • MongoDB • EdTech</span>
            <span className="text-xs font-mono font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}

        {/* Tile 3: SmartGap AI (7 Cols) */}
        <div
          onClick={() => setActiveModalKey('smartgap')}
          className="col-span-12 lg:col-span-7 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-indigo-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-indigo-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-950/90 text-indigo-300 text-[9px] font-mono font-bold border border-indigo-500/60 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-indigo-400" /> ✅ FULLY FUNCTIONAL
              </span>
              <span className="text-[9px] font-mono text-slate-400">MERN DIAGNOSTIC PLATFORM</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
              SmartGap AI — CS Learning Gap Detector
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              Automated CS learning gap diagnostic engine built with Node.js, Express, and MongoDB.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-indigo-300 text-[9px] font-mono border border-slate-800">5 Subject Evaluation</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-cyan-300 text-[9px] font-mono border border-slate-800">Remediation Analytics</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">Node.js • Express.js • MongoDB • MERN Stack</span>
            <span className="text-xs font-mono font-bold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Tile 4: MarauderOS (5 Cols) */}
        <div
          onClick={() => setActiveModalKey('marauderos')}
          className="col-span-12 lg:col-span-5 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-emerald-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-emerald-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/90 text-emerald-300 text-[9px] font-mono font-bold border border-emerald-500/60 flex items-center gap-1">
                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" /> ✅ FULLY FUNCTIONAL
              </span>
              <span className="text-[9px] font-mono text-slate-400">INCIDENT COORDINATION</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
              MarauderOS — Incident System
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              Emergency response & incident logging coordination platform with real-time dispatching.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-emerald-300 text-[9px] font-mono border border-slate-800">Priority Queue</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[9px] font-mono border border-slate-800">Responder Dashboard</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">Node.js • Express • Socket.IO</span>
            <span className="text-xs font-mono font-bold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* ================= ROW 3 ================= */}

        {/* Tile 5: Expense Tracker (6 Cols) */}
        <div
          onClick={() => setActiveModalKey('expensetracker')}
          className="col-span-12 lg:col-span-6 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-purple-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-purple-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-950/90 text-purple-300 text-[9px] font-mono font-bold border border-purple-500/60 flex items-center gap-1">
                <Activity className="w-2.5 h-2.5 text-purple-400" /> ✅ COMPLETED
              </span>
              <span className="text-[9px] font-mono text-slate-400">FINANCIAL WEB APP</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
              Expense Tracker
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              Personal financial expense management app with categorized analytics & local storage.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-purple-300 text-[9px] font-mono border border-slate-800">Categorized Analytics</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[9px] font-mono border border-slate-800">Local Persistence</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">JavaScript (ES6+) • HTML5 • Local Storage</span>
            <span className="text-xs font-mono font-bold text-purple-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Tile 6: Multithreaded Chat Server (6 Cols) */}
        <div
          onClick={() => setActiveModalKey('chatserver')}
          className="col-span-12 lg:col-span-6 group relative rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl p-4 flex flex-col justify-between hover:border-teal-400/80 transition-all duration-300 cursor-pointer overflow-hidden shadow-lg hover:shadow-teal-500/15 hover:-translate-y-0.5"
        >
          <div className="space-y-2 z-10">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-950/90 text-teal-300 text-[9px] font-mono font-bold border border-teal-500/60 flex items-center gap-1">
                <Code className="w-2.5 h-2.5 text-teal-400" /> ✅ COMPLETED
              </span>
              <span className="text-[9px] font-mono text-slate-400">NETWORK CONCURRENCY</span>
            </div>

            <h3 className="text-base font-outfit font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
              Multithreaded Java Chat Server
            </h3>

            <p className="text-slate-300 text-xs font-mono leading-relaxed line-clamp-2">
              High-concurrency TCP socket chat server built in Java using thread pools.
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-slate-950 text-teal-300 text-[9px] font-mono border border-slate-800">TCP Socket Server</span>
              <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[9px] font-mono border border-slate-800">Thread Pool Concurrency</span>
            </div>
          </div>

          <div className="z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between mt-3">
            <span className="text-[9px] font-mono text-slate-400">Java • Sockets • Multithreading • TCP/IP</span>
            <span className="text-xs font-mono font-bold text-teal-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Inspect <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        projectKey={activeModalKey}
        onClose={() => setActiveModalKey(null)}
      />

    </div>
  );
}
