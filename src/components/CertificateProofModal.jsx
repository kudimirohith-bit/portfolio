import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, CheckCircle2, ZoomIn, ZoomOut } from 'lucide-react';

const CERTIFICATE_DATA = {
  gcp: {
    title: 'The Basics of Google Cloud Compute',
    issuer: 'Google Cloud Skills Boost',
    badgeType: 'SKILL BADGE • INTRODUCTORY',
    images: [{ label: 'Google Cloud Badge', src: '/assets/gcp_basics_badge.png' }],
    verifyUrl: 'https://www.credly.com/badges/b6c58240-aa0e-473e-aa5f-d9d4a2f72703/linked_in_profile',
    accentColor: 'border-cyan-400'
  },
  iitb: {
    title: 'C, C++ & Python Programming Certification',
    issuer: 'IIT Bombay (Spoken Tutorial Project)',
    badgeType: 'NATIONAL CERTIFICATION ASSESSMENTS',
    images: [
      { label: 'C Training (82.50%)', src: '/assets/iitb_c_cert.png' },
      { label: 'Python 3.4.3 (85.00%)', src: '/assets/iitb_python_cert.png' },
      { label: 'C++ Training (75.00%)', src: '/assets/iitb_cpp_cert.png' }
    ],
    verifyUrl: null,
    accentColor: 'border-indigo-400'
  },
  vit: {
    title: 'B.Tech CSE (AI & Robotics) — Academic Standing',
    issuer: 'Vellore Institute of Technology (VIT Chennai)',
    badgeType: 'OFFICIAL ACADEMIC RECORD • CGPA 8.57',
    images: [{ label: 'VIT CGPA Record', src: '/assets/vit_cgpa_details.png' }],
    verifyUrl: null,
    accentColor: 'border-emerald-400'
  }
};

export default function CertificateProofModal({ selectedCert, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!selectedCert || !CERTIFICATE_DATA[selectedCert]) return null;

  const cert = CERTIFICATE_DATA[selectedCert];
  const isCgpaCert = selectedCert === 'vit';
  const hasMultipleImages = cert.images && cert.images.length > 1;
  const currentImage = cert.images ? cert.images[activeImageIdx] || cert.images[0] : null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Container — ENLARGED MAX-W-5XL FOR CRYSTAL CLEAR VIEWING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden z-10 p-4 sm:p-6 space-y-3.5 my-auto"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-base sm:text-xl font-outfit font-extrabold text-slate-100 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-[11px] font-mono text-cyan-400">
                  {cert.issuer} • {cert.badgeType}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* ZOOM BUTTON ONLY DISPLAYED FOR CGPA CERTIFICATE IMAGE AS REQUESTED */}
              {isCgpaCert && currentImage && (
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/50 transition-colors text-xs font-mono flex items-center gap-1.5"
                >
                  {isZoomed ? <ZoomOut className="w-4 h-4 text-cyan-400" /> : <ZoomIn className="w-4 h-4 text-cyan-400" />}
                  <span>{isZoomed ? 'Reset View' : 'Zoom Image'}</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Multiple Image Selector Tabs (For IIT Bombay 3 Certificates) */}
          {hasMultipleImages && (
            <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
              {cert.images.map((imgItem, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                    activeImageIdx === idx
                      ? 'bg-cyan-950 text-cyan-300 border-cyan-500/80 font-bold shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                  }`}
                >
                  📜 {imgItem.label}
                </button>
              ))}
            </div>
          )}

          {/* Direct High-Resolution Picture Display Box */}
          {currentImage ? (
            <div
              className={`relative rounded-2xl bg-white p-2 sm:p-4 border border-slate-700 shadow-inner flex items-center justify-center overflow-auto max-h-[72vh] ${
                isCgpaCert ? (isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in') : ''
              }`}
              onClick={() => {
                if (isCgpaCert) setIsZoomed(!isZoomed);
              }}
            >
              <img
                src={currentImage.src}
                alt={currentImage.label || cert.title}
                className={`transition-all duration-300 object-contain rounded-lg ${
                  isCgpaCert && isZoomed
                    ? 'w-[180%] max-w-none scale-125 my-8'
                    : 'w-full max-h-[65vh]'
                }`}
              />
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
              <h4 className="font-outfit font-bold text-slate-100 text-base">{cert.title}</h4>
              <p className="text-xs text-slate-400 font-mono">Official Verified Academic Record & Certification Document</p>
            </div>
          )}

          {/* Action Footer Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              OFFICIALLY VERIFIED CREDENTIAL RECORD
            </div>

            {cert.verifyUrl ? (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
              >
                Verify Credly Profile
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-[10px] font-mono text-slate-500 italic">
                Official Verified Record
              </span>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
