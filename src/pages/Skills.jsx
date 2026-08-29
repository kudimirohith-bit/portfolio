import React, { useState } from 'react';
import { BarChart3, PieChart, TrendingUp, Code, Terminal, Cpu, Cloud, CheckCircle2, Sparkles } from 'lucide-react';

// REALISTIC MEASURED PROFICIENCY BARS FOR GRAPH 1
const REALISTIC_BARS = [
  { skill: 'Java (Primary)', val: 94, color: '#06b6d4' },
  { skill: 'REST APIs', val: 94, color: '#0891b2' },
  { skill: 'JavaScript', val: 92, color: '#22d3ee' },
  { skill: 'Node.js', val: 92, color: '#38bdf8' },
  { skill: 'Git/GitHub', val: 92, color: '#818cf8' },
  { skill: 'C++', val: 90, color: '#6366f1' },
  { skill: 'DSA', val: 90, color: '#a855f7' },
  { skill: 'Python', val: 88, color: '#c084fc' },
  { skill: 'GCP Compute', val: 88, color: '#10b981' },
  { skill: 'React.js', val: 88, color: '#34d399' },
  { skill: 'Robotics', val: 85, color: '#f43f5e' }
];

// INDEPENDENT SKILLS CATEGORIES (NO PERCENTAGES / NO PROGRESS BARS)
const INDEPENDENT_SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: Code,
    accentColor: 'text-cyan-400',
    borderColor: 'hover:border-cyan-500/50',
    skills: [
      { name: 'Java', isPrimary: true, tag: 'Primary Language', desc: 'Multithreading, Sockets & OOP' },
      { name: 'JavaScript (ES6+)', isPrimary: false, tag: 'Web Core', desc: 'Async Node.js & MERN' },
      { name: 'C++', isPrimary: false, tag: 'IIT Bombay Certified', desc: 'DSA & Systems' },
      { name: 'Python', isPrimary: false, tag: 'IIT Bombay Certified', desc: 'AI Scripting & Data' }
    ]
  },
  {
    title: 'Web & Frameworks',
    icon: Terminal,
    accentColor: 'text-indigo-400',
    borderColor: 'hover:border-indigo-500/50',
    skills: [
      { name: 'REST API Design', isPrimary: true, tag: 'Core Contract', desc: 'API Contracts & Server Arch.' },
      { name: 'Node.js & Express.js', isPrimary: false, tag: 'Backend Infra', desc: 'Async Server Endpoints' },
      { name: 'React.js', isPrimary: false, tag: 'Frontend UI', desc: 'Interactive Components' },
      { name: 'MongoDB & Mongoose', isPrimary: false, tag: 'NoSQL DB', desc: 'Schema & Queries' }
    ]
  },
  {
    title: 'Tools & Robotics',
    icon: Cpu,
    accentColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    skills: [
      { name: 'Java Network Tools', isPrimary: true, tag: 'Networking', desc: 'TCP Sockets & Thread Pools' },
      { name: 'Git & GitHub Workflow', isPrimary: false, tag: 'Version Control', desc: 'PRs & Release Workflows' },
      { name: 'Linux CLI & Bash', isPrimary: false, tag: 'SysAdmin', desc: 'Server Scripts & Automation' },
      { name: 'Basic Robotics & IoT', isPrimary: false, tag: 'Hardware', desc: 'Micro-controllers & Sensors' }
    ]
  },
  {
    title: 'Cloud & CS Fundamentals',
    icon: Cloud,
    accentColor: 'text-emerald-400',
    borderColor: 'hover:border-emerald-500/50',
    skills: [
      { name: 'Object-Oriented Design', isPrimary: true, tag: 'Architecture', desc: 'Java Patterns & Principles' },
      { name: 'Data Structures & Algo', isPrimary: false, tag: 'Core CS', desc: 'Problem Solving & Optimization' },
      { name: 'Google Cloud Compute', isPrimary: false, tag: 'GCP Certified', desc: 'VMs & Persistent Disks' },
      { name: 'Database Management', isPrimary: false, tag: 'Data Layer', desc: 'SQL / NoSQL Optimization' }
    ]
  }
];

export default function Skills() {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3.5 max-h-[calc(100vh-100px)] flex flex-col overflow-y-auto lg:overflow-hidden">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-950/90 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-md">
            <BarChart3 className="w-3.5 h-3.5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-outfit font-extrabold text-slate-100 tracking-tight flex items-center gap-2">
              Skills <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Analytics & Competencies</span>
            </h2>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block">
              Primary Language: Java • Independent Skill Cards & Visual Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-800 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Java Primary Language
          </span>
        </div>
      </div>

      {/* TOP ROW: 3 REALISTIC GRAPH ANALYTICS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 shrink-0">
        
        {/* GRAPH 1: Realistic Skill Benchmark (Vertical Bar Chart) */}
        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl space-y-2 flex flex-col justify-between hover:border-cyan-500/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <h3 className="font-outfit font-bold text-xs sm:text-sm text-slate-100">Language & Tech Ratings</h3>
            </div>
            <span className="text-[9px] font-mono text-slate-400">Measured Competencies</span>
          </div>

          <div className="h-24 w-full flex items-end justify-between gap-1 pt-2 px-1 relative">
            {REALISTIC_BARS.map((item, idx) => {
              const heightPct = (item.val / 100) * 100;
              const isHovered = hoveredBar === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredBar(idx)}
                  onMouseLeave={() => setHoveredBar(null)}
                  className="flex-1 flex flex-col items-center gap-1 h-full justify-end group cursor-pointer"
                >
                  {isHovered && (
                    <div className="absolute -top-7 z-20 px-2 py-0.5 rounded bg-slate-950 border border-cyan-400 text-[9px] font-mono text-cyan-300 whitespace-nowrap shadow-xl">
                      {item.skill}: {item.val}%
                    </div>
                  )}

                  <div
                    className="w-full rounded-t-sm transition-all duration-300 group-hover:brightness-125"
                    style={{
                      height: `${heightPct}%`,
                      background: `linear-gradient(to top, rgba(6, 182, 212, 0.2), ${item.color})`
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-slate-800 text-[9px] font-mono text-slate-400">
            <span>Java & APIs (94%)</span>
            <span>Robotics (85%)</span>
          </div>
        </div>

        {/* GRAPH 2: Technical Area Focus Breakdown (Donut Chart) */}
        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl space-y-2 flex flex-col justify-between hover:border-indigo-500/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-indigo-400" />
              <h3 className="font-outfit font-bold text-xs sm:text-sm text-slate-100">Technical Area Distribution</h3>
            </div>
            <span className="text-[9px] font-mono text-slate-400">Project Focus</span>
          </div>

          <div className="flex items-center justify-center gap-4 py-1">
            <div className="relative w-22 h-22 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  strokeWidth="3.8"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="text-cyan-400" strokeDasharray="40, 100" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-indigo-400" strokeDasharray="30, 100" strokeDashoffset="-40" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-purple-400" strokeDasharray="20, 100" strokeDashoffset="-70" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path className="text-emerald-400" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="3.8" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-xs font-outfit font-black text-slate-100">JAVA</span>
                <span className="text-[8px] font-mono text-cyan-400">MAIN</span>
              </div>
            </div>

            <div className="space-y-1 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-slate-300 font-semibold">Java & Backend (40%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                <span className="text-slate-300 font-semibold">Cloud & CS Infra (30%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                <span className="text-slate-300 font-semibold">AI & Web (20%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-slate-300 font-semibold">Basic Robotics (10%)</span>
              </div>
            </div>
          </div>

          <div className="pt-1 border-t border-slate-800 text-[9px] font-mono text-slate-400 text-center">
            Real portfolio project & internship domain breakdown
          </div>
        </div>

        {/* GRAPH 3: Semester Skill Progression Trajectory (Multi-Line Chart) */}
        <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl space-y-2 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <h3 className="font-outfit font-bold text-xs sm:text-sm text-slate-100">Internship & Academic Growth</h3>
            </div>
            <span className="text-[9px] font-mono text-slate-400">VIT 2024 — 2026</span>
          </div>

          <div className="h-24 w-full relative pt-1">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80">
              <line x1="0" y1="20" x2="200" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="40" x2="200" y2="40" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="60" x2="200" y2="60" stroke="#1e293b" strokeDasharray="3 3" />

              <path d="M 10 65 Q 60 48, 100 30 T 190 10" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 10 70 Q 70 56, 110 38 T 190 18" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M 10 75 Q 80 66, 120 48 T 190 28" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />

              <circle cx="190" cy="10" r="3.5" fill="#06b6d4" />
              <circle cx="190" cy="18" r="3.5" fill="#6366f1" />
              <circle cx="190" cy="28" r="3.5" fill="#10b981" />
            </svg>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-800 text-[9px] font-mono">
            <span className="text-cyan-400 font-semibold">● Java & Systems (94%)</span>
            <span className="text-indigo-400 font-semibold">● REST & AI (92%)</span>
            <span className="text-emerald-400 font-semibold">● GCP & Robotics (88%)</span>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: INDEPENDENT SKILLS CHIPS & CARDS (NO PROGRESS BARS / NO PERCENTAGES) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1 min-h-0">
        {INDEPENDENT_SKILL_CATEGORIES.map((cat, idx) => {
          const IconComp = cat.icon;

          return (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl flex flex-col justify-between ${cat.borderColor} transition-all duration-300 shadow-lg`}
            >
              <div className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-950 flex items-center justify-center border border-slate-800">
                      <IconComp className={`w-3.5 h-3.5 ${cat.accentColor}`} />
                    </div>
                    <h3 className="font-outfit font-bold text-xs sm:text-sm text-slate-100">{cat.title}</h3>
                  </div>
                </div>

                {/* Independent Skill Cards */}
                <div className="space-y-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isJava = skill.name.toLowerCase().includes('java');

                    return (
                      <div
                        key={sIdx}
                        className={`p-2.5 rounded-xl border transition-all duration-200 ${
                          isJava
                            ? 'bg-cyan-950/60 border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                            : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-1.5 min-w-0">
                            {isJava && <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                            <span className={`text-xs font-outfit font-bold truncate ${isJava ? 'text-cyan-300' : 'text-slate-100'}`}>
                              {isJava ? `☕ ${skill.name}` : skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-[8px] font-mono px-1.5 py-0.5 rounded shrink-0 border ${
                              isJava
                                ? 'bg-cyan-900/80 text-cyan-200 border-cyan-500/50 font-bold'
                                : 'bg-slate-900 text-slate-400 border-slate-800'
                            }`}
                          >
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-mono leading-tight">
                          {skill.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
