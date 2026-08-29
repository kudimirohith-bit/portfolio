import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar({ onOpenResume }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
              KR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-extrabold text-slate-100 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
              KUDIMI ROHITH
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-wider">
              AI & Backend Engineering Intern
            </span>
          </div>
        </NavLink>

        {/* Desktop Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/90 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 font-semibold text-xs transition-all duration-200 flex items-center gap-2 hover:bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-slate-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 px-4 text-sm font-semibold rounded-xl transition-colors ${isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-300 hover:bg-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full text-left py-2.5 px-4 text-sm font-semibold text-cyan-400 bg-slate-900 rounded-xl flex items-center gap-2 border border-slate-800"
          >
            <FileText className="w-4 h-4" />
            View Interactive Resume
          </button>
        </div>
      )}
    </header>
  );
}
