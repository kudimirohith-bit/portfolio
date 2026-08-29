import React from 'react';

export default function About() {
  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[calc(100vh-140px)]">
      {/* Title */}
      <div className="text-center space-y-2 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-400">
          // WHO I AM
        </div>
        <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-100">
          About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Rohith Kudimi</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          AI & Backend Engineering | MERN Stack | Basic Robotics Interest | VIT Chennai
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Personal Bio Box */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-100 flex items-center gap-3">
              <span className="w-2.5 h-6 bg-gradient-to-b from-cyan-400 to-indigo-600 rounded-full"></span>
              Engineering Student & Backend AI Intern
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              CSE (AI & Robotics) student at <strong className="text-slate-100">Vellore Institute of Technology (VIT)</strong>, currently working as a <strong className="text-cyan-300 font-semibold">Backend AI Engineer Intern at FlyRank AI</strong>. Passionate about backend development, AI, intelligent MERN applications, and basic robotics.
            </p>
            <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
              My engineering focus centers on architecting scalable server-side infrastructure, designing clean <strong className="text-slate-200">API contracts</strong>, optimizing web databases, and exploring <strong className="text-indigo-300 font-semibold">Basic Robotics</strong> (micro-controller systems, sensor integration, and autonomous interfaces).
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80">
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-cyan-400 font-bold text-xs font-mono mb-1">🚀 FlyRank AI Intern</div>
              <div className="text-[11px] text-slate-400 leading-snug">Building scalable server infrastructure & API contracts.</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-indigo-400 font-bold text-xs font-mono mb-1">🤖 Basic Robotics</div>
              <div className="text-[11px] text-slate-400 leading-snug">Micro-controller systems, sensors & IoT.</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-emerald-400 font-bold text-xs font-mono mb-1">⚡ GC Compute</div>
              <div className="text-[11px] text-slate-400 leading-snug">Certified in Google Cloud Compute (VMs & Disks).</div>
            </div>
          </div>
        </div>

        {/* Right Quick Contact & Profile Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6 flex flex-col justify-between">
          <h3 className="text-xl font-outfit font-bold text-slate-100 flex items-center justify-between border-b border-slate-800 pb-3">
            <span>Quick Profile Info</span>
            <span className="text-xs font-mono text-cyan-400 font-normal">Chittoor, AP, India</span>
          </h3>

          <ul className="space-y-3 text-xs font-sans">
            <li className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
              <span className="text-slate-400 font-mono text-[11px]">Degree</span>
              <span className="text-slate-100 font-semibold text-[11px]">B.Tech CSE (AI & Robotics) (2024-2028)</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
              <span className="text-slate-400 font-mono text-[11px]">University</span>
              <span className="text-slate-100 font-semibold text-[11px]">Vellore Institute of Technology (VIT)</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
              <span className="text-slate-400 font-mono text-[11px]">Current Role</span>
              <span className="text-cyan-400 font-semibold text-[11px]">Backend AI Intern @ FlyRank AI</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
              <span className="text-slate-400 font-mono text-[11px]">Prior Intern</span>
              <span className="text-indigo-300 font-semibold text-[11px]">Vicharanashala (IIT Ropar)</span>
            </li>
            <li className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/50 border border-slate-800/50">
              <span className="text-slate-400 font-mono text-[11px]">Academic GPA</span>
              <span className="text-emerald-400 font-bold text-[11px] font-mono">8.56 / 10.0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
