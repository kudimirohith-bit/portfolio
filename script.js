document.addEventListener('DOMContentLoaded', () => {

  // --- 1. SLIDING CANVAS GRID & MATRIX INTERACTION LAYER ---
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let mouseX = width / 2;
    let mouseY = height / 2;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Grid Particle Nodes
    const gridSize = 60;
    let offset = 0;

    function drawCanvasGrid() {
      ctx.clearRect(0, 0, width, height);

      // Subtle scanning grid lines
      offset = (offset + 0.3) % gridSize;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';

      for (let x = offset; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offset; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Mouse interactive glow node
      const radialGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
      radialGradient.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      radialGradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
      radialGradient.addColorStop(1, 'transparent');

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(drawCanvasGrid);
    }

    drawCanvasGrid();
  }

  // --- 2. DESKTOP NAVIGATION & SLIDING ACTIVE PILL INDICATOR ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section'));
  const navPill = document.getElementById('nav-active-pill');
  const tabFlashBar = document.getElementById('tab-flash-bar');
  const slidingGrid = document.getElementById('sliding-grid');
  const slideDots = document.querySelectorAll('.slide-dot');

  let isTransitioning = false;

  function updateNavPill(activeLink) {
    if (!navPill || !activeLink) return;
    const parentRect = activeLink.parentElement.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const left = linkRect.left - parentRect.left;
    const top = linkRect.top - parentRect.top;
    const width = linkRect.width;
    const height = linkRect.height;

    navPill.style.left = `${left}px`;
    navPill.style.top = `${top}px`;
    navPill.style.width = `${width}px`;
    navPill.style.height = `${height}px`;
  }

  // Initial nav pill placement
  const initialActive = document.querySelector('.nav-link.active') || navLinks[0];
  setTimeout(() => updateNavPill(initialActive), 100);
  window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-link.active');
    updateNavPill(currentActive);
  });

  // --- 3. 3D SPATIAL SLIDE SECTION TRANSITION ENGINE ---
  function goToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (!targetSection || isTransitioning) return;

    isTransitioning = true;

    // Find current active section index
    const currentIndex = sections.findIndex(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    const targetIndex = sections.findIndex(sec => sec.id === targetId);

    const currentSection = sections[currentIndex >= 0 ? currentIndex : 0];

    // Determine direction
    const isGoingDown = targetIndex >= currentIndex;

    // 1. Trigger Laser Flash Bar & Grid Reaction
    if (tabFlashBar) {
      tabFlashBar.classList.add('flashing');
      setTimeout(() => tabFlashBar.classList.remove('flashing'), 450);
    }
    if (slidingGrid) {
      slidingGrid.classList.add('warp-speed');
      setTimeout(() => slidingGrid.classList.remove('warp-speed'), 600);
    }

    // 2. Apply 3D Outgoing & Incoming Animations
    if (currentSection && currentSection !== targetSection) {
      currentSection.classList.add(isGoingDown ? 'section-slide-out-up' : 'section-slide-out-down');
    }

    targetSection.classList.remove('section-hidden', 'section-slide-out-up', 'section-slide-out-down');
    targetSection.classList.add(isGoingDown ? 'section-slide-in-down' : 'section-slide-in-up');

    // 3. Scroll position shift
    const targetTop = targetSection.offsetTop - 70;
    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });

    // Update Nav active link & pill
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-target') === targetId || link.getAttribute('href') === `#${targetId}`) {
        link.classList.add('active');
        updateNavPill(link);
      }
    });

    // Update Slide Indicator Dots
    slideDots.forEach(dot => {
      dot.classList.remove('active');
      if (dot.getAttribute('data-section') === targetId) {
        dot.classList.add('active');
      }
    });

    // 4. Reset 3D Spatial Classes after animation completes
    setTimeout(() => {
      sections.forEach(sec => {
        sec.classList.remove('section-slide-out-up', 'section-slide-out-down', 'section-slide-in-down', 'section-slide-in-up');
      });
      isTransitioning = false;
    }, 650);
  }

  // Wire all `.slide-nav-trigger` elements
  document.querySelectorAll('.slide-nav-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target') || trigger.getAttribute('href')?.replace('#', '');
      if (targetId) {
        goToSection(targetId);
      }
    });
  });

  // Wire Slide Indicator Dots
  slideDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-section');
      if (targetId) {
        goToSection(targetId);
      }
    });
  });

  // Keyboard Slide Navigation (ArrowDown / ArrowUp / PageDown / PageUp)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    let currentIndex = sections.findIndex(sec => {
      const rect = sec.getBoundingClientRect();
      return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
    });
    if (currentIndex === -1) currentIndex = 0;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      if (currentIndex < sections.length - 1) {
        e.preventDefault();
        goToSection(sections[currentIndex + 1].id);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      if (currentIndex > 0) {
        e.preventDefault();
        goToSection(sections[currentIndex - 1].id);
      }
    }
  });

  // Update nav link active state on scroll
  window.addEventListener('scroll', () => {
    if (isTransitioning) return;
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const target = link.getAttribute('data-target') || link.getAttribute('href')?.replace('#', '');
      if (target === current) {
        if (!link.classList.contains('active')) {
          navLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
          updateNavPill(link);
        }
      }
    });

    slideDots.forEach(dot => {
      if (dot.getAttribute('data-section') === current) {
        slideDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(l => {
      l.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // --- 4. SECTION FADE & REVEAL OBSERVER ---
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        entry.target.classList.remove('section-hidden');
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(sec => {
    sectionObserver.observe(sec);
  });

  // --- 5. PROJECT CARD 3D TILT HOVER EFFECT ---
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
    });
  });

  // --- 6. PROJECT FILTER TAB SWITCHING WITH SMOOTH GRID ANIMATIONS ---
  const filterBtns = document.querySelectorAll('.project-filter');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active tab buttons
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-gradient-to-r', 'from-cyan-500', 'to-teal-500', 'text-slate-950');
        b.classList.add('bg-slate-900/80', 'text-slate-300');
      });

      btn.classList.add('active');
      btn.classList.remove('bg-slate-900/80', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');

      // Staggered card animation filter transition
      projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        const matches = filter === 'all' || category.includes(filter);

        card.classList.remove('filter-animating');

        if (matches) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.classList.add('filter-animating');
          }, index * 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 7. INTERACTIVE TERMINAL EMULATOR ---
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');
  const cmdChips = document.querySelectorAll('.cmd-chip');

  const commands = {
    help: `Available commands:
• <span class="text-cyan-400 font-bold">skills</span>: Technical skills, Web Servers & Cloud
• <span class="text-indigo-400 font-bold">projects</span>: All GitHub repos (VeriSumm, SmartGap, FlyRank, etc.)
• <span class="text-emerald-400 font-bold">experience</span>: FlyRank AI & Vicharanashala IIT Ropar internships
• <span class="text-purple-400 font-bold">education</span>: VIT Chennai CSE (AI & Robotics) (2024-2028)
• <span class="text-amber-400 font-bold">certifications</span>: Google Cloud Compute & IIT Bombay
• <span class="text-sky-400 font-bold">contact</span>: Email, LinkedIn, Location & GitHub
• <span class="text-slate-400 font-bold">clear</span>: Clear console`,

    skills: `Top Skills: <span class="text-cyan-300 font-bold">Web Servers, Virtual Machines, Persistent Disk</span>
Languages: <span class="text-cyan-300 font-bold">C++, Python, Java, JavaScript (ES6+)</span>
Frameworks: <span class="text-indigo-300 font-bold">Node.js, Express.js, React.js, MERN Stack</span>
Specialties: <span class="text-purple-300 font-bold">API Contracts, Backend Systems, Basic Robotics</span>
Databases & Cloud: <span class="text-amber-300 font-bold">MongoDB, Mongoose, Google Cloud Compute, Git</span>`,

    projects: `1. <span class="text-cyan-400 font-bold">VeriSumm</span> — Safety-first Biomedical Text Summarization & Hallucination Verifier
2. <span class="text-indigo-400 font-bold">FlyRank AI Systems</span> — Server Infrastructure & API Contracts
3. <span class="text-purple-400 font-bold">SmartGap AI</span> — CS Subject Learning Gap Diagnostic System
4. <span class="text-emerald-400 font-bold">FLN Learning</span> — AI Foundational Numeracy Product
5. <span class="text-amber-400 font-bold">MarauderOS</span> — Emergency Coordination Incident System
6. <span class="text-sky-400 font-bold">Expense Tracker</span> — Financial Tracking Web App
7. <span class="text-pink-400 font-bold">Simple Chat Server</span> — Multithreaded Java Network Socket Chat Server`,

    experience: `1. <span class="text-cyan-300 font-bold">FlyRank AI</span> — Backend AI Developer Intern (July 2026 - Present)
   • Building scalable server-side infrastructure, API contracts & backend data pipelines.
2. <span class="text-indigo-300 font-bold">Vicharanashala (VLED, IIT Ropar)</span> — Summer Intern (May 2026 - Present)
   • Hands-on AI educational technology development, Node.js services & real-world software practices.`,

    education: `Degree: <span class="text-cyan-300 font-bold">B.Tech Computer Science & Engineering (AI & Robotics)</span>
Institution: <span class="text-indigo-300 font-bold">Vellore Institute of Technology (VIT)</span>
Duration: <span class="text-slate-300 font-mono">2024 – 2028</span>
CGPA: <span class="text-emerald-300 font-bold">8.57 / 10.0</span>`,

    certifications: `• <span class="text-cyan-300 font-bold">The Basics of Google Cloud Compute</span> (Virtual Machines, Web Servers, Persistent Disk)
• <span class="text-indigo-300 font-bold">Spoken Tutorial Project, IIT Bombay</span> (C, C++, Python)`,

    contact: `Email: <span class="text-cyan-300">kudimirohith@gmail.com</span>
LinkedIn: <span class="text-indigo-300">linkedin.com/in/rohith-kudimi-29846431b</span>
GitHub: <span class="text-emerald-300">github.com/kudimirohith-bit</span>
Location: <span class="text-slate-300">Chittoor, Andhra Pradesh, India</span>`,

    matrix: `Entering the Matrix... Access granted! 🟢01010101`,
    sudo: `<span class="text-red-400 font-bold">Permission denied:</span> Rohith is the root administrator here! 😉`
  };

  function executeCommand(cmdText) {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const cmdLine = document.createElement('div');
    cmdLine.innerHTML = `<span class="text-emerald-400 font-bold">rohith@dev:~$</span> <span class="text-cyan-300">${cmdText}</span>`;
    terminalOutput.appendChild(cmdLine);

    if (trimmed === 'clear') {
      terminalOutput.innerHTML = '';
    } else if (commands[trimmed]) {
      const respLine = document.createElement('div');
      respLine.className = 'pl-3 border-l-2 border-cyan-500/50 py-1 text-slate-300';
      respLine.innerHTML = commands[trimmed];
      terminalOutput.appendChild(respLine);
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'text-red-400 pl-3';
      errLine.innerHTML = `command not found: ${trimmed}. Type <span class="text-amber-300 font-bold">'help'</span> for list of commands.`;
      terminalOutput.appendChild(errLine);
    }

    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  if (terminalForm) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputVal = terminalInput.value;
      executeCommand(inputVal);
      terminalInput.value = '';
    });
  }

  cmdChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      executeCommand(cmd);
    });
  });

  // --- 8. CASE STUDY MODAL DIALOG ---
  const csModal = document.getElementById('casestudy-modal');
  const csTitle = document.getElementById('cs-title');
  const csBadge = document.getElementById('cs-badge');
  const csContent = document.getElementById('cs-content');
  const closeCsBtn = document.getElementById('close-cs-btn');

  const caseStudyData = {
    verisum: {
      badge: "PRESENT WORKING • BIOMEDICAL AI PLATFORM",
      title: "VeriSumm — Safety-First Biomedical Text Summarizer",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> VeriSumm is an active, safety-first clinical and biomedical text summarization platform. It generates accurate summaries from Electronic Health Records (EHRs), clinical notes, and medical literature using pluggable LLMs.</p>

          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-mono text-cyan-400 font-bold">FACTUAL ACCURACY & HALLUCINATION VERIFICATION</div>
            <p class="text-xs text-slate-300">Features automated verification pipelines that compare generated summaries against source clinical text, flagging hallucinations and logging audit trails for clinician review.</p>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/kudimirohith-bit/Verisum" target="_blank" class="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors">
              GitHub Repository ↗
            </a>
          </div>
        </div>
      `
    },
    smartgap: {
      badge: "MERN DIAGNOSTIC CASE STUDY",
      title: "SmartGap AI — CS Learning Gap Detector",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> SmartGap AI automates learning gap diagnosis across 5 fundamental CS subjects, eliminating manual evaluation.</p>

          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-mono text-indigo-400 font-bold">AUTOMATED DIAGNOSTIC EVALUATION PIPELINE</div>
            <p class="text-xs text-slate-300">Automated assessment matrix with Node.js REST API server for zero-latency remediation analytics.</p>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/kudimirohith-bit/smartgap_ai" target="_blank" class="px-4 py-2 rounded-xl bg-indigo-500 text-slate-950 font-bold text-xs hover:bg-indigo-400 transition-colors">
              GitHub Repository ↗
            </a>
          </div>
        </div>
      `
    },
    fln: {
      badge: "WAITING FOR PR ACCEPTANCE • EDTECH AI PRODUCT",
      title: "FLN — Foundational Numeracy Learning System",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> An AI-powered educational product designed to help young children master foundational math concepts through interactive activities. Currently awaiting pull request acceptance for core system integration.</p>
          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/kudimirohith-bit/fln" target="_blank" class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors">
              GitHub Repository ↗
            </a>
          </div>
        </div>
      `
    },
    marauder: {
      badge: "CAMPUS EMERGENCY SYSTEM",
      title: "MarauderOS — Incident Reporting Platform",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> Campus emergency coordination and incident response platform ensuring fast student-to-admin reporting and persistent record auditing.</p>
          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/kudimirohith-bit/MarauderOS" target="_blank" class="px-4 py-2 rounded-xl bg-purple-500 text-slate-950 font-bold text-xs hover:bg-purple-400 transition-colors">
              GitHub Repository ↗
            </a>
          </div>
        </div>
      `
    }
  };

  document.querySelectorAll('.open-case-study').forEach(btn => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-project');
      if (caseStudyData[projKey]) {
        csBadge.textContent = caseStudyData[projKey].badge;
        csTitle.textContent = caseStudyData[projKey].title;
        csContent.innerHTML = caseStudyData[projKey].content;
        csModal.classList.remove('hidden');
      }
    });
  });

  if (closeCsBtn) {
    closeCsBtn.addEventListener('click', () => csModal.classList.add('hidden'));
  }

  // --- 9. RESUME MODAL & PRINTING ---
  const resumeModal = document.getElementById('resume-modal');
  const resumeBtn = document.getElementById('resume-btn');
  const mobileResumeBtn = document.getElementById('mobile-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-btn');
  const printResumeBtn = document.getElementById('print-resume-btn');

  const openResume = () => resumeModal.classList.remove('hidden');
  const closeResume = () => resumeModal.classList.add('hidden');

  if (resumeBtn) resumeBtn.addEventListener('click', openResume);
  if (mobileResumeBtn) mobileResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === csModal) csModal.classList.add('hidden');
    if (e.target === resumeModal) resumeModal.classList.add('hidden');
  });

  // --- 10. ROHITH AI ASSISTANT CHATBOT ---
  const aiChatBtn = document.getElementById('ai-chat-btn');
  const aiChatWindow = document.getElementById('ai-chat-window');
  const closeAiChat = document.getElementById('close-ai-chat');
  const chatMessages = document.getElementById('chat-messages');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatChips = document.querySelectorAll('.chat-chip');

  if (aiChatBtn && aiChatWindow) {
    aiChatBtn.addEventListener('click', () => {
      aiChatWindow.classList.toggle('hidden');
    });
  }

  if (closeAiChat) {
    closeAiChat.addEventListener('click', () => {
      aiChatWindow.classList.add('hidden');
    });
  }

  const aiKnowledge = [
    {
      keywords: ['verisumm', 'verisum', 'biomedical', 'clinical'],
      answer: "VeriSumm is Rohith's active biomedical text summarization project! It generates clinical summaries from EHRs while verifying factual accuracy and flagging hallucinations."
    },
    {
      keywords: ['smartgap', 'gap', 'diagnostic', 'cs'],
      answer: "SmartGap AI detects student learning gaps across 5 CS subjects using automated diagnostic pipelines in Node.js/Express.js."
    },
    {
      keywords: ['flyrank', 'internship', 'experience', 'work'],
      answer: "Rohith is currently a Backend AI Developer Intern at FlyRank AI, building scalable server-side infrastructure and clean API contracts."
    },
    {
      keywords: ['robotics', 'robot', 'hardware', 'embedded'],
      answer: "Rohith is deeply interested in Basic Robotics, micro-controller systems, sensor integration, and hardware-software interaction alongside his CSE (AI & Robotics) degree at VIT Chennai."
    },
    {
      keywords: ['vit', 'chennai', 'cgpa', 'education', 'gpa'],
      answer: "Rohith is pursuing B.Tech in CSE (AI & Robotics) at VIT Chennai with an impressive CGPA of 8.57 / 10."
    },
    {
      keywords: ['skill', 'stack', 'cpp', 'python', 'javascript', 'node', 'react'],
      answer: "Rohith's stack includes C++, Python, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, Basic Robotics & IoT, Linux, and Git."
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach'],
      answer: "You can email Rohith at kudimirohith@gmail.com or call him at +91 6301699119."
    }
  ];

  function sendChatMessage(text) {
    if (!text.trim()) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'p-2.5 rounded-2xl bg-cyan-950 border border-cyan-800/60 text-cyan-200 text-right font-sans';
    userMsg.textContent = text;
    chatMessages.appendChild(userMsg);

    const lower = text.toLowerCase();
    let foundAnswer = "Rohith is a dedicated Backend & AI Engineer with a strong interest in Basic Robotics, Node.js, Express, React, Python, and C++. Ask me about VeriSumm, FlyRank AI, or SmartGap AI!";

    for (let item of aiKnowledge) {
      if (item.keywords.some(k => lower.includes(k))) {
        foundAnswer = item.answer;
        break;
      }
    }

    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'p-3 rounded-2xl bg-slate-800 text-slate-200 font-sans';
      aiMsg.textContent = foundAnswer;
      chatMessages.appendChild(aiMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 350);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      sendChatMessage(chatInput.value);
      chatInput.value = '';
    });
  }

  chatChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.getAttribute('data-q');
      sendChatMessage(question);
    });
  });

  // --- 11. CONTACT FORM DISPATCH ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim() || `Portfolio Inquiry from ${name}`;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        formStatus.classList.remove('hidden', 'bg-emerald-950', 'text-emerald-400', 'border-emerald-800');
        formStatus.classList.add('bg-red-950', 'text-red-400', 'border', 'border-red-800');
        formStatus.innerHTML = `⚠️ Please fill in all required fields (Name, Email, and Message).`;
        return;
      }

      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin w-4 h-4 text-slate-950 inline-block" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending message...</span>
      `;

      formStatus.classList.add('hidden');

      try {
        const response = await fetch('https://formsubmit.co/ajax/kudimirohith@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            _subject: subject,
            message: message,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json();

        if (response.ok && (data.success === 'true' || data.success === true)) {
          formStatus.classList.remove('hidden', 'bg-red-950', 'text-red-400', 'border-red-800');
          formStatus.classList.add('bg-emerald-950', 'text-emerald-400', 'border', 'border-emerald-800');
          formStatus.innerHTML = `✓ Thank you, ${name}! Your message has been sent directly to Rohith's email (kudimirohith@gmail.com).`;
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        console.error('Direct email dispatch error:', err);
        formStatus.classList.remove('hidden', 'bg-emerald-950', 'text-emerald-400', 'border-emerald-800');
        formStatus.classList.add('bg-red-950', 'text-red-400', 'border', 'border-red-800');
        formStatus.innerHTML = `⚠️ Failed to send message directly from browser. Please email directly to <a href="mailto:kudimirohith@gmail.com" class="underline">kudimirohith@gmail.com</a>.`;
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    });
  }
});
