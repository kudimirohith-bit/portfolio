import React from 'react';
import { X, ExternalLink } from 'lucide-react';

const CASE_STUDIES = {
  verisumm: {
    badge: "BIOMEDICAL AI CASE STUDY",
    title: "VeriSumm — EHR Clinical Text Summarizer & Hallucination Verifier",
    content: (
      <div className="space-y-4">
        <p><strong>Overview:</strong> VeriSumm addresses hallucination risks in clinical documentation summaries by generating verified medical summaries with sentence-level claim traceability back to source EHR records.</p>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-xs font-mono text-cyan-400 font-bold">FACTUAL VERIFICATION PIPELINE</div>
          <p className="text-xs text-slate-300">Features a verification pass comparing generated summary sentences against raw patient EHR context, highlighting unsupported claims before physician review.</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <a href="https://github.com/kudimirohith-bit/Verisum" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center gap-1.5">
            GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  },
  smartgap: {
    badge: "MERN DIAGNOSTIC CASE STUDY",
    title: "SmartGap AI — CS Learning Gap Detector",
    content: (
      <div className="space-y-4">
        <p><strong>Overview:</strong> SmartGap AI automates learning gap diagnosis across 5 fundamental CS subjects, eliminating manual evaluation.</p>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-xs font-mono text-indigo-400 font-bold">AUTOMATED DIAGNOSTIC EVALUATION PIPELINE</div>
          <p className="text-xs text-slate-300">Automated assessment matrix with Node.js REST API server for zero-latency remediation analytics.</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <a href="https://github.com/kudimirohith-bit/smartgap_ai" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-indigo-500 text-slate-950 font-bold text-xs hover:bg-indigo-400 transition-colors flex items-center gap-1.5">
            GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  },
  fln: {
    badge: "EDTECH AI PRODUCT",
    title: "FLN — Foundational Numeracy Learning System",
    content: (
      <div className="space-y-4">
        <p><strong>Overview:</strong> An AI-powered educational product designed to help young children master foundational math concepts through interactive activities.</p>
        <div className="flex items-center gap-3 pt-2">
          <a href="https://github.com/kudimirohith-bit/fln" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors flex items-center gap-1.5">
            GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  },
  marauderos: {
    badge: "INCIDENT MANAGEMENT SYSTEM",
    title: "MarauderOS — Emergency Incident Coordination System",
    content: (
      <div className="space-y-4">
        <p><strong>Overview:</strong> High-reliability incident coordination platform for campus and urban emergency teams.</p>
        <div className="flex items-center gap-3 pt-2">
          <a href="https://github.com/kudimirohith-bit/marauderOS" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-1.5">
            GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  }
};

export default function CaseStudyModal({ selectedProject, onClose }) {
  if (!selectedProject || !CASE_STUDIES[selectedProject]) return null;

  const study = CASE_STUDIES[selectedProject];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400">
              {study.badge}
            </span>
            <h2 className="text-2xl font-outfit font-bold text-slate-100 pt-1">{study.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
          {study.content}
        </div>
      </div>
    </div>
  );
}
