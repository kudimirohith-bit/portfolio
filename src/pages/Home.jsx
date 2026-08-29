import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center min-h-[calc(100vh-140px)]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Column: Headline & Quick Stats */}
        <div className="lg:col-span-7 space-y-6 text-left">

          {/* Status Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Engineering Student & Backend AI Intern @ FlyRank AI
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-outfit font-black tracking-tight text-slate-100 leading-[1.1]">
              Architecting <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Scalable Backend</span> & <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">AI Systems</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Hi, I'm <strong className="text-slate-200">Rohith Kudimi</strong> — Engineering Student at <span className="text-cyan-400 font-semibold">VIT Chennai</span> (CGPA 8.57) and Backend AI Intern at <span className="text-indigo-400 font-semibold">FlyRank AI</span>. Former Summer Intern at <span className="text-emerald-400 font-semibold">Vicharanashala (IIT Ropar)</span>. Passionate about backend engineering, MERN applications, and Basic Robotics.
            </p>
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
              <div className="font-outfit text-xl font-black text-cyan-400">FlyRank</div>
              <div className="text-[10px] font-mono text-slate-400">Backend AI Intern</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm hover:border-indigo-500/40 transition-colors">
              <div className="font-outfit text-xl font-black text-indigo-400">8.56</div>
              <div className="text-[10px] font-mono text-slate-400">CGPA @ VIT</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
              <div className="font-outfit text-xl font-black text-emerald-400">Robotics</div>
              <div className="text-[10px] font-mono text-slate-400">Basic Robotics</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
              <div className="font-outfit text-xl font-black text-purple-400">Backend</div>
              <div className="text-[10px] font-mono text-slate-400">MERN Stack</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/projects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-[1.02] flex items-center gap-2"
            >
              Explore Bento Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://github.com/kudimirohith-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 font-semibold text-xs transition-all duration-200 flex items-center gap-2 hover:bg-slate-800"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rohith-kudimi-29846431b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-indigo-400 text-slate-200 font-semibold text-xs transition-all duration-200 flex items-center gap-2 hover:bg-slate-800"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              LinkedIn
            </a>
          </div>

        </div>

        {/* Right Column: Terminal Playground */}
        <div className="lg:col-span-5">
          <Terminal />
        </div>

      </div>
    </div>
  );
}
