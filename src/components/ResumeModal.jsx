import React from 'react';
import { X, Download, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code2, Sparkles, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    const resumeEl = document.getElementById('printable-resume');
    if (!resumeEl) {
      window.print();
      return;
    }

    const printWin = window.open('', '_blank', 'width=900,height=1100');
    if (!printWin) {
      window.print();
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Rohith_Kudimi_Resume</title>
          <meta charset="utf-8" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;600&display=swap');
            
            * { box-sizing: border-box; margin: 0; padding: 0; }
            html, body {
              width: 100%;
              background: #ffffff;
              color: #0f172a;
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              font-size: 11.5px;
              line-height: 1.5;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            body { padding: 20px 24px; }
            .no-print { display: none !important; }
            
            h1 { font-family: 'Outfit', sans-serif; font-size: 28px; font-weight: 800; color: #0284c7 !important; letter-spacing: -0.5px; margin-bottom: 4px; }
            h2, h3 { font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 12.5px; color: #0284c7 !important; letter-spacing: 0.05em; margin-bottom: 6px; margin-top: 14px; border-bottom: 1.5px solid #cbd5e1; padding-bottom: 3px; }
            
            .print-accent { color: #0284c7 !important; }
            .text-cyan-400, .text-cyan-300, .text-indigo-400, .text-indigo-300, .text-emerald-400, .text-amber-300 { color: #0369a1 !important; }
            .text-slate-100, .text-slate-200, .text-slate-300 { color: #0f172a !important; }
            .text-slate-400, .text-slate-600 { color: #475569 !important; }
            
            .bg-slate-900, .bg-slate-950, .bg-slate-900\\/90, .bg-amber-950\\/40 {
              background-color: #f8fafc !important;
              border: 1px solid #e2e8f0 !important;
            }
            
            .border, .border-b, .border-t, .border-slate-800 {
              border-color: #cbd5e1 !important;
            }

            .flex { display: flex; }
            .flex-col { flex-direction: column; }
            .flex-wrap { flex-wrap: wrap; }
            .items-center { align-items: center; }
            .justify-between { justify-content: space-between; }
            .gap-1 { gap: 4px; }
            .gap-1\\.5 { gap: 6px; }
            .gap-2 { gap: 8px; }
            .gap-3 { gap: 12px; }
            .space-y-1 > * + * { margin-top: 4px; }
            .space-y-1\\.5 > * + * { margin-top: 6px; }
            .space-y-2 > * + * { margin-top: 8px; }
            .space-y-2\\.5 > * + * { margin-top: 10px; }
            .space-y-3 > * + * { margin-top: 12px; }
            .space-y-3\\.5 > * + * { margin-top: 14px; }
            .space-y-4 > * + * { margin-top: 16px; }
            .space-y-5 > * + * { margin-top: 18px; }
            .space-y-6 > * + * { margin-top: 22px; }
            
            .grid { display: grid; }
            .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
            .grid-cols-2, .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            
            .rounded-xl, .rounded-2xl, .rounded-lg { border-radius: 6px; }
            .p-2\\.5 { padding: 9px 12px; }
            .p-3, .p-3\\.5 { padding: 11px 13px; }
            .p-6, .sm\\:p-9 { padding: 14px; }
            .pb-3 { padding-bottom: 10px; margin-bottom: 10px; }
            .pt-1 { padding-top: 4px; }
            .pt-2 { padding-top: 6px; }
            .font-mono { font-family: 'Fira Code', monospace; font-size: 10.5px; }
            .text-xs { font-size: 11px; }
            .text-sm { font-size: 12px; }
            .text-\\[10px\\] { font-size: 10px; }
            .text-\\[10\\.5px\\] { font-size: 10.5px; }
            .text-\\[11px\\] { font-size: 11px; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .uppercase { text-transform: uppercase; }
            .tracking-wider { letter-spacing: 0.05em; }
            .list-disc { list-style-type: disc; padding-left: 16px; }
            .leading-snug { line-height: 1.45; }
            .leading-normal { line-height: 1.55; }
            .leading-relaxed { line-height: 1.6; }
            a { color: #0284c7 !important; text-decoration: none; }
            
            @page {
              size: A4 portrait;
              margin: 8mm 10mm;
            }
          </style>
        </head>
        <body>
          <div id="printable-resume">
            ${resumeEl.innerHTML}
          </div>
        </body>
      </html>
    `);

    printWin.document.close();
    printWin.focus();
    setTimeout(() => {
      printWin.print();
      printWin.close();
    }, 250);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 space-y-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 scrollbar-thin">
        
        {/* Modal Controls Bar (Hidden during print) */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 pb-3 gap-3 no-print">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50 uppercase tracking-wider font-bold">
                EXECUTIVE RESUME • FULL 1-PAGE A4 FORMAT
              </span>
              <h2 className="text-lg font-outfit font-bold text-slate-100 pt-0.5">
                Rohith Kudimi — Curriculum Vitae
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
              title="Save as 1-Page PDF or Print Resume"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download 1-Page PDF</span>
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

        {/* Printable Executive Resume Container (Well-Balanced Full 1-Page Layout) */}
        <div
          id="printable-resume"
          className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 sm:p-7 space-y-4.5 text-slate-200 font-sans shadow-inner"
        >
          {/* Header Section */}
          <div className="border-b border-slate-800 pb-3.5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-outfit font-extrabold text-slate-100 tracking-tight print-accent">
                  ROHITH KUDIMI
                </h1>
                <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold pt-0.5 flex items-center gap-2">
                  <span>Backend AI Developer Intern</span>
                  <span className="text-slate-600">•</span>
                  <span>B.Tech CSE (AI & Robotics) @ VIT Chennai</span>
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-400 space-y-0.5 text-left sm:text-right">
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
            <div className="flex flex-wrap gap-2 pt-1.5 text-xs font-mono">
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
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 print-accent">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 no-print" /> PROFESSIONAL SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Passionate Backend & AI Engineer and Computer Science (AI & Robotics) student at VIT Chennai (<strong className="text-slate-100 font-bold">CGPA: 8.57 / 10.0</strong>). Currently working as a Backend AI Developer Intern at <strong className="text-cyan-300 font-semibold">FlyRank AI</strong>, specializing in scalable server infrastructure, clean RESTful API contract design, RAG pipeline architecture, and local LLM integrations (Ollama). Experienced in building production-grade MERN applications and exploring micro-controller and robotics integration.
            </p>
          </div>

          {/* Work Experience Section */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 print-accent">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400 no-print" /> WORK EXPERIENCE
            </h3>

            <div className="space-y-2.5">
              {/* FlyRank */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-100">
                  <span className="text-cyan-300">Backend AI Developer Intern — FlyRank AI</span>
                  <span className="text-slate-400 font-mono text-xs font-normal">July 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                  <li>Architecting scalable server-side backend infrastructure for AI applications using Node.js, Express, and local LLM pipelines.</li>
                  <li>Designing strict API contracts, data processing routines, and structured JSON output parsers for high-throughput AI services.</li>
                  <li>Implementing Retrieval-Augmented Generation (RAG) systems to optimize contextual document querying and information extraction.</li>
                </ul>
              </div>

              {/* Vicharanashala IIT Ropar */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold text-slate-100">
                  <span className="text-indigo-300">Summer Intern — Vicharanashala (VLED, IIT Ropar)</span>
                  <span className="text-slate-400 font-mono text-xs font-normal">May 2026 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                  <li>Developed FLN educational numeracy learning modules tailored for low-bandwidth devices using React and Node.js REST services.</li>
                  <li>Built responsive, interactive math exercise interfaces and optimized server endpoint communication for student tracking.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 print-accent">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400 no-print" /> EDUCATION
            </h3>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs sm:text-sm">
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
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 print-accent">
              <Code2 className="w-3.5 h-3.5 text-cyan-400 no-print" /> FEATURED PROJECTS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-300">VeriSumm — Biomedical Text Summarizer</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Clinical EHR text summarizer featuring sentence-level claim traceability and automated hallucination verification.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-0.5">TypeScript • React • Node.js • NLP</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-indigo-300">CareerOS — Career Management Platform</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  AI-powered job application tracker, interview pipeline manager, and automated resume optimization workspace.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-0.5">Node.js • Express • React • MongoDB</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-emerald-300">SmartGap AI — CS Gap Diagnostic</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Diagnostic evaluation engine evaluating student CS knowledge gaps across 5 core subjects with targeted analytics.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-0.5">Node.js • Express • MongoDB • MERN</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-amber-300">MarauderOS — Incident System</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Emergency response event logging & real-time priority dispatch coordination platform for first responders.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-0.5">Node.js • Express • Socket.IO</div>
              </div>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 print-accent">
              <Award className="w-3.5 h-3.5 text-cyan-400 no-print" /> HONORS & CERTIFICATIONS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 space-y-1">
                <div className="font-bold text-amber-300 flex items-center gap-1.5">
                  <span>🥇 1st Prize Winner — Idea-thon</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Awarded 1st Prize in "AI for Quality Education" by IQAC & SELECT during Quality Week 2026 at VIT Chennai.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-300">Google Cloud & IIT Bombay Certified</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Certified in "The Basics of Google Cloud Compute" (VMs & Disks) and IIT Bombay Spoken Tutorials (C, C++, Python).
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-1.5 pt-1.5 border-t border-slate-800/80">
            <h3 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider print-accent">
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
