import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code2, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 scrollbar-thin">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 pb-4 gap-3 no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider font-bold">
                EXECUTIVE RESUME & CV
              </span>
              <h2 className="text-xl font-outfit font-bold text-slate-100 pt-0.5">
                Rohith Kudimi — Curriculum Vitae
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              title="Save as PDF or Print Resume"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Resume Container */}
        <div
          id="printable-resume"
          className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 sm:p-9 space-y-6 text-slate-200 font-sans shadow-inner"
        >
          {/* Header Section */}
          <div className="border-b border-slate-800 pb-5 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <h1 className="text-3xl sm:text-4xl font-outfit font-extrabold text-slate-100 tracking-tight print-accent">
                  ROHITH KUDIMI
                </h1>
                <p className="text-sm font-mono text-cyan-400 font-semibold pt-1 flex items-center gap-2">
                  <span>Backend AI Developer Intern</span>
                  <span className="text-slate-600">•</span>
                  <span>B.Tech CSE (AI & Robotics) @ VIT Chennai</span>
                </p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 no-print" />
                  <span>Chittoor, AP / Chennai, TN, India</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 no-print" />
                  <span>kudimirohith@gmail.com</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 no-print" />
                  <span>+91 6301699119</span>
                </div>
              </div>
            </div>

            {/* Quick Link Chips */}
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono">
              <a
                href="https://github.com/kudimirohith-bit"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 hover:border-cyan-500/50 flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400 no-print" />
                <span>github.com/kudimirohith-bit</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohith-kudimi-29846431b"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-indigo-300 hover:border-indigo-500/50 flex items-center gap-1.5 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400 no-print" />
                <span>linkedin.com/in/rohith-kudimi-29846431b</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 print-accent">
              <Sparkles className="w-4 h-4 text-cyan-400 no-print" /> PROFESSIONAL SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Passionate Backend & AI Engineer and Computer Science (AI & Robotics) student at VIT Chennai (<strong className="text-slate-100 font-bold">CGPA: 8.57 / 10.0</strong>). Currently working as a Backend AI Developer Intern at <strong className="text-cyan-300">FlyRank AI</strong>, specializing in scalable server infrastructure, clean RESTful API contract design, RAG pipeline architecture, and local LLM integrations. Experienced in building full-stack MERN products and exploring Basic Robotics and micro-controller integration.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 print-accent">
              <Briefcase className="w-4 h-4 text-cyan-400 no-print" /> WORK EXPERIENCE
            </h3>

            <div className="space-y-3">
              {/* FlyRank */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-100">
                  <span className="text-cyan-300">Backend AI Developer Intern — FlyRank AI</span>
                  <span className="text-slate-400 font-mono text-xs font-normal">July 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed pt-0.5">
                  <li>Architecting scalable server-side backend infrastructure for AI-driven applications using Node.js and Express.</li>
                  <li>Designing robust API contracts, data processing pipelines, and structured JSON output parsers for local LLMs (Ollama).</li>
                  <li>Building RAG (Retrieval-Augmented Generation) systems to optimize contextual document retrieval.</li>
                </ul>
              </div>

              {/* Vicharanashala IIT Ropar */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-100">
                  <span className="text-indigo-300">Summer Intern — Vicharanashala (VLED, IIT Ropar)</span>
                  <span className="text-slate-400 font-mono text-xs font-normal">May 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed pt-0.5">
                  <li>Developed foundational numeracy educational web modules (FLN System) tailored for low-bandwidth devices.</li>
                  <li>Collaborated on building modular React frontend interfaces and RESTful Node.js services.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 print-accent">
              <GraduationCap className="w-4 h-4 text-cyan-400 no-print" /> EDUCATION
            </h3>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
              <div>
                <div className="font-bold text-slate-100">Vellore Institute of Technology (VIT), Chennai</div>
                <div className="text-slate-400 text-xs">B.Tech in Computer Science & Engineering (AI & Robotics)</div>
              </div>
              <div className="text-left sm:text-right font-mono text-xs">
                <div className="text-emerald-400 font-bold">CGPA: 8.57 / 10.0 (89 Credits)</div>
                <div className="text-slate-400">2024 – 2028</div>
              </div>
            </div>
          </div>

          {/* Key Projects Section */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 print-accent">
              <Code2 className="w-4 h-4 text-cyan-400 no-print" /> FEATURED PROJECTS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-300">VeriSumm — Biomedical Text Summarizer</div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Clinical EHR summarizer with sentence-level claim traceability & hallucination verification pipelines.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">TypeScript • React • Node.js • NLP</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-indigo-300">CareerOS — Career Management System</div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  AI-powered job application tracker, interview pipeline, and resume optimization workspace.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">Node.js • Express • React • MongoDB</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-emerald-300">SmartGap AI — CS Gap Diagnostic</div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Automated learning gap evaluation engine analyzing student knowledge across 5 core CS subjects.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">Node.js • Express • MongoDB • MERN</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-amber-300">MarauderOS — Emergency Incident System</div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Real-time emergency dispatch logging and priority coordination platform for first responders.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">Node.js • Express • Socket.IO</div>
              </div>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2 print-accent">
              <Award className="w-4 h-4 text-cyan-400 no-print" /> HONORS & CERTIFICATIONS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <span>🥇 1st Prize Winner — Idea-thon</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Awarded 1st Prize in "AI for Quality Education" by IQAC & SELECT during Quality Week 2026 (VIT Chennai).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-300">Google Cloud & IIT Bombay Certified</div>
                <p className="text-slate-300 text-[11px] leading-snug">
                  Certified in "The Basics of Google Cloud Compute" (VMs & Disks) and IIT Bombay Spoken Tutorials (C, C++, Python).
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2 pt-1 border-t border-slate-800/80">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider print-accent">
              TECHNICAL SKILLS SUMMARY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div><strong className="text-slate-200">Languages:</strong> C++, Python, JavaScript (ES6+), Java, SQL</div>
              <div><strong className="text-slate-200">Frameworks:</strong> React.js, Node.js, Express.js, MERN Stack</div>
              <div><strong className="text-slate-200">Databases & Cloud:</strong> MongoDB, Mongoose, Google Cloud Compute</div>
              <div><strong className="text-slate-200">Tools & Specialties:</strong> Git, GitHub, API Contracts, Basic Robotics & IoT</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
