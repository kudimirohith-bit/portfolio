import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Contact() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:kudimirohith@gmail.com?subject=${subject}&body=${body}`;

    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="page-wrapper max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 min-h-[calc(100vh-140px)]">
      {/* Title */}
      <div className="text-center space-y-2 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-xs font-mono text-cyan-400">
          // GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-5xl font-outfit font-extrabold tracking-tight text-slate-100">
          Let's Connect & <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Collaborate</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6 h-full flex flex-col justify-between">
            <h3 className="text-xl font-outfit font-bold text-slate-100 border-b border-slate-800 pb-3">
              Contact Details
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href="mailto:kudimirohith@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-mono">Direct Email</div>
                  <div className="text-slate-100 font-semibold text-xs sm:text-sm">kudimirohith@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+916301699119"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-950 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-mono">Phone Number</div>
                  <div className="text-slate-100 font-semibold text-xs sm:text-sm">+91 6301699119</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-purple-950 text-purple-400 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-400 text-[11px] font-mono">Location</div>
                  <div className="text-slate-100 font-semibold text-xs sm:text-sm">Chittoor, AP / Chennai, TN, India</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href="https://github.com/kudimirohith-bit"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rohith-kudimi-29846431b"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-400 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                LinkedIn
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md space-y-6 h-full flex flex-col justify-between">
            <h3 className="text-xl font-outfit font-bold text-slate-100 border-b border-slate-800 pb-3">
              Send Direct Message
            </h3>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                <h4 className="font-outfit font-bold text-slate-100 text-lg">Message Mail Client Triggered!</h4>
                <p className="text-xs sm:text-sm text-slate-300">Opening your default mail app to send email to kudimirohith@gmail.com.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-cyan-400 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs sm:text-sm focus:border-cyan-400 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message via Email Client
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
