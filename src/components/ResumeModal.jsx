import React from 'react';
import { X, Printer, Download } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400">
              OFFICIAL CV & RESUME
            </span>
            <h2 className="text-2xl font-outfit font-bold text-slate-100 pt-1">
              Rohith Kudimi — Curriculum Vitae
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div id="printable-resume" className="space-y-6 text-slate-200 font-sans">
          {/* Top Header */}
          <div className="border-b border-slate-800 pb-4 space-y-2">
            <h1 className="text-3xl font-outfit font-black text-slate-100">ROHITH KUDIMI</h1>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-300">
              <span>Location: Chennai, Tamil Nadu, India</span>
              <span>Email: kudimirohith@gmail.com</span>
              <span>Phone: +91 6301699119</span>
              <span>GitHub: github.com/kudimirohith-bit</span>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">SKILLS SUMMARY</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong class="text-slate-300">Languages:</strong> C++, Python, JavaScript</div>
              <div><strong class="text-slate-300">Frameworks:</strong> React.js, Node.js, Express.js, MERN Stack</div>
              <div><strong class="text-slate-300">Tools/Interests:</strong> Git, GitHub, Linux, Basic Robotics & IoT</div>
              <div><strong class="text-slate-300">Soft Skills:</strong> Problem Solving, Team Collaboration, Communication, Adaptability</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">EDUCATION</div>
            <div className="flex justify-between items-start text-xs">
              <div>
                <div className="font-bold text-slate-100">Vellore Institute of Technology (VIT)</div>
                <div className="text-slate-400">B.Tech, Computer Science & Engineering (AI & Robotics)</div>
              </div>
              <div className="text-right">
                <div className="text-slate-300 font-mono">Chennai, Tamil Nadu</div>
                <div className="text-cyan-300 font-bold">CGPA: 8.57 / 10</div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">EXPERIENCE</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-slate-100">
                <span>Backend AI Developer Intern — FlyRank AI</span>
                <span className="text-slate-400 font-mono">July 2026 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 pt-1">
                <li>Architecting scalable server-side infrastructure for AI workflows in Node.js and Express.</li>
                <li>Designing strict API contracts, data pipelines, and structured JSON output parsers.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">PROJECTS</div>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-100">VeriSumm — Biomedical Text Summarizer <span className="text-slate-400 font-normal">| TypeScript, Node.js, React, Clinical NLP</span></div>
              <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                <li>Safety-first medical summarizer with verification pipelines comparing source EHR text to output.</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs">
              <div className="font-bold text-slate-100">SmartGap AI — AI-Powered Learning Gap Detector <span className="text-slate-400 font-normal">| Node.js, Express.js, MongoDB, MERN Stack</span></div>
              <ul class="list-disc list-inside space-y-0.5 text-slate-300">
                <li>Full-stack web app detecting CS learning gaps across 5 core subjects via automated quiz diagnostics.</li>
                <li>Integrated automated quiz analytics into Node.js/Express backend.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
