import React, { useState, useRef, useEffect } from 'react';

const COMMANDS = {
  help: `Available commands:
• <span class="text-cyan-400 font-bold">skills</span>: Technical skills, Web Servers & Cloud
• <span class="text-indigo-400 font-bold">projects</span>: All GitHub repos (VeriSumm, SmartGap, FlyRank, etc.)
• <span class="text-emerald-400 font-bold">experience</span>: FlyRank AI & Vicharanashala IIT Ropar internships
• <span class="text-purple-400 font-bold">education</span>: VIT Chennai CSE (AI & Robotics) (2024-2028)
• <span class="text-amber-400 font-bold">certifications</span>: Google Cloud Compute & IIT Bombay
• <span class="text-sky-400 font-bold">contact</span>: Email, LinkedIn, Location & GitHub
• <span class="text-slate-400 font-bold">clear</span>: Clear console`,

  skills: `Top Skills: <span class="text-cyan-300 font-bold">Web Servers, Virtual Machines, Persistent Disk</span>
Languages: <span class="text-cyan-300 font-bold">C++, Python, Java, JavaScript (ES6+)</span>
Frameworks: <span class="text-indigo-300 font-bold">Node.js, Express.js, React.js, MERN Stack</span>
Specialties: <span class="text-purple-300 font-bold">API Contracts, Backend Systems, Basic Robotics</span>
Databases & Cloud: <span class="text-amber-300 font-bold">MongoDB, Mongoose, Google Cloud Compute, Git</span>`,

  projects: `1. <span class="text-cyan-400 font-bold">VeriSumm</span> — Safety-first Biomedical Text Summarization & Hallucination Verifier
2. <span class="text-indigo-400 font-bold">FlyRank AI Systems</span> — Server Infrastructure & API Contracts
3. <span class="text-purple-400 font-bold">SmartGap AI</span> — CS Subject Learning Gap Diagnostic System
4. <span class="text-emerald-400 font-bold">FLN Learning</span> — AI Foundational Numeracy Product
5. <span class="text-amber-400 font-bold">MarauderOS</span> — Emergency Coordination Incident System
6. <span class="text-sky-400 font-bold">Expense Tracker</span> — Financial Tracking Web App
7. <span class="text-pink-400 font-bold">Simple Chat Server</span> — Multithreaded Java Network Socket Chat Server`,

  experience: `1. <span class="text-cyan-300 font-bold">FlyRank AI</span> — Backend AI Developer Intern (July 2026 - Present)
   • Building scalable server-side infrastructure, API contracts & backend data pipelines.
2. <span class="text-indigo-300 font-bold">Vicharanashala (VLED, IIT Ropar)</span> — Summer Intern (May 2026 - Present)
   • Hands-on AI educational technology development, Node.js services & real-world software practices.`,

  education: `Degree: <span class="text-cyan-300 font-bold">B.Tech Computer Science & Engineering (AI & Robotics)</span>
Institution: <span class="text-indigo-300 font-bold">Vellore Institute of Technology (VIT)</span>
Duration: <span class="text-slate-300 font-mono">2024 – 2028</span>
CGPA: <span class="text-emerald-300 font-bold">8.56 / 10.0</span>`,

  certifications: `• <span class="text-cyan-300 font-bold">The Basics of Google Cloud Compute</span> (Virtual Machines, Web Servers, Persistent Disk)
• <span class="text-indigo-300 font-bold">Spoken Tutorial Project, IIT Bombay</span> (C, C++, Python)`,

  contact: `Email: <span class="text-cyan-300">kudimirohith@gmail.com</span>
LinkedIn: <span class="text-indigo-300">linkedin.com/in/rohith-kudimi-29846431b</span>
GitHub: <span class="text-emerald-300">github.com/kudimirohith-bit</span>
Location: <span class="text-slate-300">Chittoor, Andhra Pradesh, India</span>`,

  matrix: `Entering the Matrix... Access granted! 🟢01010101`,
  sudo: `<span class="text-red-400 font-bold">Permission denied:</span> Rohith is the root administrator here! 😉`
};

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const terminalBodyRef = useRef(null);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const output = COMMANDS[trimmed] || `<span class="text-red-400">Command not found: '${cmdText}'</span>. Type <span class="text-amber-300 font-bold">'help'</span> for list of commands.`;

    setHistory((prev) => [...prev, { command: cmdText, response: output }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
    setInputVal('');
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Terminal Header */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">rohith@flyrank-ai:~</span>
        </div>
        <div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
            bash 5.2
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-4 font-mono text-xs text-slate-300 h-80 overflow-y-auto space-y-3 scrollbar-thin"
      >
        <div className="text-cyan-400">
          🚀 Welcome to Rohith Kudimi's Interactive Terminal v2.6
        </div>
        <div className="text-slate-400 text-[11px]">
          Type <span className="text-amber-300 font-bold">'help'</span> or click the command chips below to inspect Rohith's background.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">rohith@dev:~$</span>
              <span className="text-cyan-300">{item.command}</span>
            </div>
            <div
              className="text-slate-300 whitespace-pre-line leading-relaxed pl-4 border-l-2 border-slate-800"
              dangerouslySetInnerHTML={{ __html: item.response }}
            />
          </div>
        ))}

        {/* Form Prompt */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-bold">rohith@dev:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help', 'skills', 'projects'..."
            className="flex-1 bg-transparent border-none outline-none text-cyan-300 font-mono text-xs placeholder:text-slate-600 focus:ring-0"
          />
        </form>
      </div>

      {/* Quick Chips */}
      <div className="bg-slate-900/80 p-2.5 border-t border-slate-800 flex flex-wrap gap-1.5 text-[11px]">
        {['skills', 'projects', 'experience', 'education', 'certifications', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="cmd-chip px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 font-mono transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
