import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Background from './components/Background';
import Navbar from './components/Navbar';
import HeaderFlashBar from './components/HeaderFlashBar';
import VerticalNavDots from './components/VerticalNavDots';
import ResumeModal from './components/ResumeModal';
import CaseStudyModal from './components/CaseStudyModal';
import Chatbot from './components/Chatbot';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

// Page-Specific Framer Motion Transition Variants
const PAGE_VARIANTS = {
  home: {
    initial: { opacity: 0, scale: 0.93, rotateX: 8, y: 30 },
    animate: { opacity: 1, scale: 1, rotateX: 0, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, rotateX: -6, y: -30, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  about: {
    initial: { opacity: 0, x: 70, rotateY: -10 },
    animate: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: -70, rotateY: 10, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  experience: {
    initial: { opacity: 0, y: -50, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: 50, scale: 0.96, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  projects: {
    initial: { opacity: 0, scale: 1.06, filter: 'blur(10px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.94, filter: 'blur(8px)', transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  skills: {
    initial: { opacity: 0, rotateX: -15, y: 40 },
    animate: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, rotateX: 15, y: -40, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  achievements: {
    initial: { opacity: 0, x: -70, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, x: 70, scale: 0.95, transition: { duration: 0.4, ease: 'easeInOut' } }
  },
  contact: {
    initial: { opacity: 0, y: 70, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -70, scale: 0.96, transition: { duration: 0.4, ease: 'easeInOut' } }
  }
};

function AnimatedRoutes({ onOpenCaseStudy }) {
  const location = useLocation();

  const getVariant = (path) => {
    switch (path) {
      case '/': return PAGE_VARIANTS.home;
      case '/about': return PAGE_VARIANTS.about;
      case '/experience': return PAGE_VARIANTS.experience;
      case '/projects': return PAGE_VARIANTS.projects;
      case '/skills': return PAGE_VARIANTS.skills;
      case '/achievements': return PAGE_VARIANTS.achievements;
      case '/contact': return PAGE_VARIANTS.contact;
      default: return PAGE_VARIANTS.home;
    }
  };

  const currentVariant = getVariant(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Projects onOpenCaseStudy={onOpenCaseStudy} />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/achievements"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Achievements />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial={currentVariant.initial}
              animate={currentVariant.animate}
              exit={currentVariant.exit}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {/* Fixed Background Layer (Starry Mountain Image & Grid) */}
        <Background />

        {/* Laser Energy Transition Flash Bar */}
        <HeaderFlashBar />

        {/* Top Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Side Floating Vertical Dots */}
        <VerticalNavDots />

        {/* Main Routed Page Content with Framer Motion Effects */}
        <main className="relative z-10 pt-4 pb-12">
          <AnimatedRoutes onOpenCaseStudy={(pId) => setSelectedCaseStudy(pId)} />
        </main>

        {/* Interactive Modals & Assistant Widget */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        <CaseStudyModal
          selectedProject={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}
