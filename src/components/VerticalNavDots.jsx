import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Terminal, User, Briefcase, Layers, Cpu, Trophy, Send, Activity } from 'lucide-react';

const NAV_NODES = [
  { path: '/', code: '01', label: 'Home', icon: Terminal },
  { path: '/about', code: '02', label: 'About', icon: User },
  { path: '/experience', code: '03', label: 'Experience', icon: Briefcase },
  { path: '/projects', code: '04', label: 'Projects', icon: Layers },
  { path: '/skills', code: '05', label: 'Skills', icon: Cpu },
  { path: '/achievements', code: '06', label: 'Achievements', icon: Trophy },
  { path: '/contact', code: '07', label: 'Contact', icon: Send },
];

export default function VerticalNavDots() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col items-center fixed right-4 top-1/2 -translate-y-1/2 z-40 space-y-2 select-none">
      
      {/* Background Vertical Tech Spine Rail */}
      <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-500/10 via-indigo-500/30 to-purple-500/10 -z-10 rounded-full" />

      {/* Cyber Section Nodes */}
      {NAV_NODES.map((node) => {
        const isActive = location.pathname === node.path;
        const IconComponent = node.icon;

        return (
          <NavLink
            key={node.path}
            to={node.path}
            className="group relative flex items-center"
            aria-label={node.label}
          >
            {/* Hover Cyber Tooltip Card (Appears to the left on hover) */}
            <div className="absolute right-12 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/40 text-slate-100 shadow-xl backdrop-blur-md whitespace-nowrap">
              <span className="font-mono text-[10px] text-cyan-400 font-bold">NODE {node.code}</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span className="font-outfit font-semibold text-xs text-slate-200">{node.label}</span>
            </div>

            {/* Futuristic Node Badge */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 relative border ${
                isActive
                  ? 'bg-slate-900 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-110'
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-cyan-500/50 hover:text-slate-200 hover:scale-105'
              }`}
            >
              {/* Active Pulsing Hex Ring */}
              {isActive && (
                <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-40 blur-xs animate-pulse -z-10" />
              )}
              
              <IconComponent className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'scale-110 text-cyan-400' : 'group-hover:scale-110'}`} />

              {/* Mini Code Tag Badge */}
              <span className={`absolute -bottom-1 -right-1 text-[8px] font-mono font-bold px-1 rounded-md border ${
                isActive ? 'bg-cyan-950 text-cyan-300 border-cyan-500/60' : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}>
                {node.code}
              </span>
            </div>
          </NavLink>
        );
      })}

      {/* Telemetry Status HUD Indicator at Bottom of Spine */}
      <div className="pt-2">
        <div className="px-2 py-1 rounded-lg bg-slate-950/90 border border-slate-800/80 text-[9px] font-mono text-cyan-400/80 flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-bold">HUD</span>
        </div>
      </div>

    </aside>
  );
}
