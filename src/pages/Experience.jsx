import React from 'react';

export default function Experience() {
  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[calc(100vh-140px)]">
      {/* Title */}
      <div className="text-center space-y-2 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-400">
          // CAREER JOURNEY
        </div>
        <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-100">
          Work & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Internship Experience</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Backend engineering, AI server infrastructure, API contracts, and EdTech software development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* FlyRank AI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  July 2026 – Present
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-100">Backend AI Developer Intern</h3>
                <p className="text-cyan-300 text-xs sm:text-sm font-medium">FlyRank AI</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold text-sm font-mono shadow-md">
                FLY
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Currently working as a Backend AI Engineering Intern at FlyRank, where I focus on building scalable server-side infrastructure for AI applications. I specialize in designing API contracts, optimizing backend data pipelines, and managing structured-output workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800">Node.js</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800">API Contracts</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800">Backend Systems</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800">Structured Outputs</span>
          </div>
        </div>

        {/* Vicharanashala (IIT Ropar) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6 relative overflow-hidden group hover:border-indigo-500/50 transition-colors flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/10 rounded-bl-full pointer-events-none" />

          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                  May 2026 – Present
                </span>
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-slate-100">Summer Intern</h3>
                <p className="text-indigo-300 text-xs sm:text-sm font-medium">Vicharanashala (VLED, IIT Ropar)</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-indigo-400 font-bold text-sm font-mono shadow-md">
                IIT
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Hands-on internship developing educational AI products and web platforms. Gained experience in production-grade software development practices, real-time data handling, and collaborative Git/GitHub workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 font-mono text-xs border border-slate-800">Node.js</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 font-mono text-xs border border-slate-800">React.js</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 font-mono text-xs border border-slate-800">AI Software</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-indigo-300 font-mono text-xs border border-slate-800">Git Workflow</span>
          </div>
        </div>

      </div>
    </div>
  );
}
