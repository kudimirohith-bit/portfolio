import React, { useState } from 'react';
import { Award, ShieldCheck, GraduationCap, CheckCircle2, ExternalLink, ArrowUpRight } from 'lucide-react';
import CertificateProofModal from '../components/CertificateProofModal';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[calc(100vh-140px)]">
      
      {/* Proof Modal Popup */}
      <CertificateProofModal
        selectedCert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Title */}
      <div className="text-center space-y-2 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-400">
          // HONORS & RECOGNITION
        </div>
        <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-100">
          Certifications & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Milestones</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm">
          Click any card to inspect official verification credentials & proof documents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* Card 1: Idea-thon Winner */}
        <div
          onClick={() => setSelectedCert('ideathon')}
          className="group p-6 rounded-3xl bg-slate-900/60 border border-amber-500/40 backdrop-blur-md space-y-5 hover:border-amber-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between shadow-lg shadow-amber-500/10"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <span className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 opacity-80 group-hover:opacity-100 group-hover:bg-amber-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">🥇 1st Prize Winner</span>
              <h3 className="text-xl font-outfit font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                Idea-thon: AI for Quality Education
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Awarded 1st Prize by IQAC & SELECT (VIT Chennai) during Quality Week 2026 for AI-driven education solutions.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-amber-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Quality Week 2026
            </span>
            <span className="text-[10px] text-amber-400 font-bold group-hover:underline flex items-center gap-1">
              Inspect Proof <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 2: Google Cloud */}
        <div
          onClick={() => setSelectedCert('gcp')}
          className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-5 hover:border-cyan-400/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <span className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 opacity-80 group-hover:opacity-100 group-hover:bg-cyan-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Certified Skill</span>
              <h3 className="text-xl font-outfit font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                Google Cloud Compute
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Certified in "The Basics of Google Cloud Compute", mastering Virtual Machine instances, web server setup, and Persistent Disks on GCP.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              Verified Credential
            </span>
            <span className="text-[10px] text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
              Inspect Proof <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 3: IIT Bombay */}
        <div
          onClick={() => setSelectedCert('iitb')}
          className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-5 hover:border-indigo-400/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-800 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 opacity-80 group-hover:opacity-100 group-hover:bg-indigo-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">Spoken Tutorial</span>
              <h3 className="text-xl font-outfit font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                IIT Bombay Certifications
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Successfully passed certification assessments for C, C++, and Python programming languages organized by IIT Bombay.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-indigo-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              C / C++ / Python Certified
            </span>
            <span className="text-[10px] text-indigo-400 font-bold group-hover:underline flex items-center gap-1">
              Inspect Proof <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Card 4: Academic Excellence */}
        <div
          onClick={() => setSelectedCert('vit')}
          className="group p-6 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-5 hover:border-emerald-400/80 transition-all duration-300 hover:scale-[1.02] cursor-pointer flex flex-col justify-between shadow-lg"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 opacity-80 group-hover:opacity-100 group-hover:bg-emerald-950 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Academic Metric</span>
              <h3 className="text-xl font-outfit font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                VIT CGPA: 8.57 / 10
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Consistently high academic standing in B.Tech CSE (AI & Robotics) program at Vellore Institute of Technology, Chennai (89 Credits Earned).
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-emerald-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Current CGPA: 8.57
            </span>
            <span className="text-[10px] text-emerald-400 font-bold group-hover:underline flex items-center gap-1">
              Inspect Proof <ExternalLink className="w-3 h-3" />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
