import React from 'react';
import { X } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECT_DETAILS = {
  verisumm: {
    statusBadge: "⚡ CURRENTLY WORKING ON",
    statusColor: "bg-cyan-950 text-cyan-300 border-cyan-500/50",
    badge: "BIOMEDICAL AI & CLINICAL NLP",
    title: "VeriSumm — EHR Text Summarizer & Hallucination Verifier",
    singleLineDesc: "Biomedical EHR text summarizer & hallucination verifier with sentence-level claim traceability.",
    stack: ["TypeScript", "React.js", "Node.js", "Clinical NLP", "EHR Systems"],
    overview: "VeriSumm is an active biomedical AI project addressing safety and hallucination risks in clinical documentation summaries by generating verified medical summaries with sentence-level claim traceability back to source EHR patient records.",
    highlights: [
      "Currently in active development with continuous testing on medical datasets.",
      "Traceable sentence-level claim verification comparing summaries against raw EHR text.",
      "Custom NLP parsing pipeline designed for unstructured clinical notes.",
      "Human-in-the-loop review workflow flagging unsupported medical assertions."
    ],
    github: "https://github.com/kudimirohith-bit/Verisum"
  },
  fln: {
    statusBadge: "⏳ PR PENDING ACCEPTANCE",
    statusColor: "bg-amber-950 text-amber-300 border-amber-500/50",
    badge: "EDTECH AI PRODUCT • IIT ROPAR",
    title: "FLN — Foundational Numeracy Learning System",
    singleLineDesc: "AI-powered foundational numeracy learning software built during IIT Ropar internship.",
    stack: ["React.js", "Node.js", "MongoDB", "EdTech AI", "REST API"],
    overview: "An AI-powered educational product created during the Vicharanashala internship at IIT Ropar to help young children master foundational math concepts through interactive exercise modules.",
    highlights: [
      "Core PR currently submitted and awaiting maintainer acceptance for repository integration.",
      "Interactive foundational math exercise module tailored for low-bandwidth devices.",
      "Clean MERN stack architecture built with scalable Node.js endpoints."
    ],
    github: "https://github.com/kudimirohith-bit/fln"
  },
  smartgap: {
    statusBadge: "✅ FULLY FUNCTIONAL",
    statusColor: "bg-indigo-950 text-indigo-300 border-indigo-500/50",
    badge: "MERN DIAGNOSTIC PLATFORM",
    title: "SmartGap AI — CS Subject Learning Gap Detector",
    singleLineDesc: "Automated CS learning gap diagnostic engine built with Node.js, Express, and MongoDB.",
    stack: ["Node.js", "Express.js", "MongoDB", "MERN Stack", "REST APIs"],
    overview: "SmartGap AI automates student learning gap diagnosis across 5 core Computer Science subjects, replacing manual grading with automated evaluation pipelines and remediation analytics.",
    highlights: [
      "Automated CS subject gap analytics engine providing targeted learning suggestions.",
      "Multi-layer subject-name mismatch fix resolved across API, DB schemas, and UI.",
      "Comprehensive REST API design paired with high-performance MongoDB schema."
    ],
    github: "https://github.com/kudimirohith-bit/smartgap_ai"
  },
  marauderos: {
    statusBadge: "✅ FULLY FUNCTIONAL",
    statusColor: "bg-emerald-950 text-emerald-300 border-emerald-500/50",
    badge: "INCIDENT COORDINATION SYSTEM",
    title: "MarauderOS — Emergency Incident Coordination System",
    singleLineDesc: "Emergency response & incident logging coordination platform with real-time dispatching.",
    stack: ["Node.js", "Express.js", "REST API", "Socket.IO", "Realtime Logs"],
    overview: "High-reliability emergency response and incident logging management system designed for rapid dispatch coordination during campus scenarios.",
    highlights: [
      "Real-time event logging and priority dispatch queuing.",
      "Role-based dashboard for first responders and campus administrators."
    ],
    github: "https://github.com/kudimirohith-bit/marauderOS"
  },
  expensetracker: {
    statusBadge: "✅ COMPLETED",
    statusColor: "bg-purple-950 text-purple-300 border-purple-500/50",
    badge: "FINANCIAL WEB APPLICATION",
    title: "Personal Finance & Expense Tracker",
    singleLineDesc: "Personal financial expense management app with categorized analytics & local storage.",
    stack: ["JavaScript (ES6+)", "HTML5", "CSS3", "Local Storage Persistence"],
    overview: "A clean, responsive financial management web application for tracking income, categorized expenses, and budget insights with zero external backend dependencies.",
    highlights: [
      "Categorized transaction breakdown with visual summaries.",
      "Local storage persistence and dynamic financial calculations."
    ],
    github: "https://github.com/kudimirohith-bit/Expense_tracker"
  },
  chatserver: {
    statusBadge: "✅ COMPLETED",
    statusColor: "bg-teal-950 text-teal-300 border-teal-500/50",
    badge: "NETWORK SYSTEMS & CONCURRENCY",
    title: "Simple Multithreaded Java Chat Server",
    singleLineDesc: "High-concurrency TCP socket chat server built in Java using thread pools.",
    stack: ["Java", "Socket Programming", "TCP/IP", "Multithreading", "Concurrency"],
    overview: "High-concurrency TCP network chat server built using socket programming and thread pools to handle multiple real-time client connections concurrently.",
    highlights: [
      "Multithreaded client session management.",
      "Robust TCP socket error handling and broadcast messaging."
    ],
    github: "https://github.com/kudimirohith-bit/Simple-Chat-Server"
  }
};

export default function ProjectDetailModal({ projectKey, onClose }) {
  if (!projectKey || !PROJECT_DETAILS[projectKey]) return null;

  const project = PROJECT_DETAILS[projectKey];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${project.statusColor}`}>
                {project.statusBadge}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                {project.badge}
              </span>
            </div>
            <h2 className="text-2xl font-outfit font-bold text-slate-100 pt-1">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-cyan-400 font-semibold">{project.singleLineDesc}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 text-sm text-slate-300">
          <div>
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-1.5">Project Overview</div>
            <p className="leading-relaxed text-slate-300">{project.overview}</p>
          </div>

          <div>
            <div className="text-xs font-mono text-indigo-400 font-bold uppercase mb-1.5">Key Technical Highlights</div>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono text-purple-400 font-bold uppercase mb-2">Technologies Used</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2"
          >
            <GithubIcon className="w-4 h-4" />
            View GitHub Repository ↗
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
