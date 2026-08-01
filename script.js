document.addEventListener('DOMContentLoaded', () => {

  // --- 1. MATRIX / CYBER BACKGROUND CANVAS ---
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const characters = '01ROHITHKUDIMIAI01010101MERNVIT';
    const fontSize = 12;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function drawCanvas() {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#06b6d4';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    setInterval(drawCanvas, 50);
  }

  // --- 2. NAVIGATION & ACTIVE HIGHLIGHTING ---
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
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

  // --- 3. INTERACTIVE TERMINAL EMULATOR ---
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalBody = document.getElementById('terminal-body');
  const cmdChips = document.querySelectorAll('.cmd-chip');

  const commands = {
    help: `Available commands:
• <span class="text-cyan-400 font-bold">skills</span>: Top technical skills, Web Servers & Cloud
• <span class="text-indigo-400 font-bold">projects</span>: All GitHub repos (VeriSumm, SmartGap, FlyRank, etc.)
• <span class="text-emerald-400 font-bold">experience</span>: FlyRank AI & Vicharanashala IIT Ropar internships
• <span class="text-purple-400 font-bold">education</span>: VIT Chennai CSE (AI & Robotics) (2024-2028)
• <span class="text-amber-400 font-bold">certifications</span>: Google Cloud Compute & IIT Bombay
• <span class="text-sky-400 font-bold">contact</span>: Email, LinkedIn, Location & GitHub
• <span class="text-slate-400 font-bold">clear</span>: Clear console`,
    
    skills: `Top Skills: <span class="text-cyan-300 font-bold">Web Servers, Virtual Machines, Persistent Disk</span>
Languages: <span class="text-cyan-300 font-bold">C++, Python, Java, JavaScript (ES6+)</span>
Frameworks: <span class="text-indigo-300 font-bold">Node.js, Express.js, React.js, MERN Stack</span>
AI & LLMs: <span class="text-purple-300 font-bold">RAG Systems, Ollama (Phi-3 Local LLMs), API Contracts</span>
Databases & Cloud: <span class="text-amber-300 font-bold">MongoDB, Mongoose, Google Cloud Compute, Git</span>`,

    projects: `1. <span class="text-cyan-400 font-bold">VeriSumm</span> — Safety-first Biomedical Text Summarization & Hallucination Verifier
2. <span class="text-indigo-400 font-bold">FlyRank AI Systems</span> — Server Infrastructure, API Contracts & RAG Workflows
3. <span class="text-purple-400 font-bold">SmartGap AI</span> — Learning Gap Detector powered by Local Ollama (Phi-3)
4. <span class="text-emerald-400 font-bold">FLN Learning</span> — AI Foundational Numeracy Product
5. <span class="text-amber-400 font-bold">MarauderOS</span> — Emergency Coordination Incident System
6. <span class="text-sky-400 font-bold">Expense Tracker</span> — Daily Income & Expenditure Tracking Web App
7. <span class="text-pink-400 font-bold">Simple Chat Server</span> — Multithreaded Java Network Socket Chat Server`,

    experience: `1. <span class="text-cyan-300 font-bold">FlyRank AI</span> — Backend AI Developer Intern (July 2026 - Present)
   • Building scalable server-side infrastructure, API contracts, RAG systems & LLM output workflows.
2. <span class="text-indigo-300 font-bold">Vicharanashala (VLED, IIT Ropar)</span> — Summer Intern (May 2026 - Present)
   • Hands-on AI educational technology development, Node.js services & real-world software practices.`,

    education: `Degree: <span class="text-cyan-300 font-bold">B.Tech Computer Science & Engineering (AI & Robotics)</span>
Institution: <span class="text-indigo-300 font-bold">Vellore Institute of Technology (VIT)</span>
Duration: <span class="text-slate-300 font-mono">2024 – 2028</span>
CGPA: <span class="text-emerald-300 font-bold">8.56 / 10.0</span>`,

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

    // Print Prompt Command Line
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

  // --- 4. PROJECT FILTERING ---
  const filterBtns = document.querySelectorAll('.project-filter');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-cyan-500', 'text-slate-950');
        b.classList.add('bg-slate-900', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-cyan-500', 'text-slate-950');
      btn.classList.remove('bg-slate-900', 'text-slate-300');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 5. CASE STUDY MODAL ---
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
          <p><strong>Overview:</strong> VeriSumm is an active, safety-first clinical and biomedical text summarization platform. It generates accurate summaries from Electronic Health Records (EHRs), notes, and medical literature using pluggable LLMs.</p>

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
    flyrank: {
      badge: "BACKEND AI & RAG INFRASTRUCTURE",
      title: "FlyRank AI — RAG Systems & Server Infrastructure",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> Built during internship at FlyRank AI to provide scalable server-side infrastructure for AI-driven workflows.</p>

          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-mono text-indigo-400 font-bold">RAG ARCHITECTURE & API CONTRACTS</div>
            <p class="text-xs text-slate-300">Engineered Retrieval-Augmented Generation (RAG) pipelines, strict API schemas, and structured JSON output parsers for modern LLM services.</p>
          </div>
        </div>
      `
    },
    smartgap: {
      badge: "AI & OLLAMA CASE STUDY",
      title: "SmartGap AI — CS Learning Gap Detector",
      content: `
        <div class="space-y-4">
          <p><strong>Overview:</strong> SmartGap AI automates learning gap diagnosis across 5 fundamental CS subjects, eliminating manual evaluation.</p>

          <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <div class="text-xs font-mono text-cyan-400 font-bold">OLLAMA PHI-3 LOCAL LLM DEPLOYMENT</div>
            <p class="text-xs text-slate-300">Runs a local Phi-3 model via Ollama alongside a Node.js REST API server for zero-cloud latency remediation quiz generation.</p>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://github.com/kudimirohith-bit/smartgap_ai" target="_blank" class="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors">
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

  // --- 6. RESUME MODAL & PRINTING ---
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

  // Close Modals when clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === csModal) csModal.classList.add('hidden');
    if (e.target === resumeModal) resumeModal.classList.add('hidden');
  });

  // --- 7. ROHITH AI ASSISTANT CHATBOT ---
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
      keywords: ['smartgap', 'gap', 'ollama', 'phi-3', 'cs'],
      answer: "SmartGap AI is Rohith's flagship project! It automatically detects student learning gaps across 5 CS subjects using a locally-run Phi-3 LLM via Ollama in Node.js/Express.js."
    },
    {
      keywords: ['iit', 'ropar', 'vled', 'internship', 'experience', 'work'],
      answer: "Rohith is currently an AI & Education Technology Intern at Vicharanashala Lab for Education Design (VLED), IIT Ropar. He builds Node.js backend services and MongoDB models!"
    },
    {
      keywords: ['vit', 'chennai', 'cgpa', 'education', 'college', 'gpa'],
      answer: "Rohith is pursuing B.Tech in CSE (AI & Robotics) at VIT Chennai with an impressive CGPA of 8.56 / 10."
    },
    {
      keywords: ['skill', 'stack', 'cpp', 'python', 'javascript', 'node', 'react'],
      answer: "Rohith's stack includes C++, Python, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, Ollama, Linux, and Git."
    },
    {
      keywords: ['contact', 'email', 'phone', 'reach', 'hire'],
      answer: "You can email Rohith at kudimirohith@gmail.com or call him at +91 6301699119."
    }
  ];

  function sendChatMessage(text) {
    if (!text.trim()) return;

    // User Message Bubble
    const userMsg = document.createElement('div');
    userMsg.className = 'p-2.5 rounded-2xl bg-cyan-950 border border-cyan-800/60 text-cyan-200 text-right font-sans';
    userMsg.textContent = text;
    chatMessages.appendChild(userMsg);

    // AI Response Engine
    const lower = text.toLowerCase();
    let foundAnswer = "Rohith is a dedicated Backend & AI Engineer with expertise in Node.js, Express, React, Python, C++, and Ollama local LLMs. Feel free to ask about his IIT Ropar internship or SmartGap AI project!";

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
    }, 400);

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

  // --- 8. CONTACT FORM HANDLER ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      
      formStatus.classList.remove('hidden', 'bg-red-950', 'text-red-400');
      formStatus.classList.add('bg-emerald-950', 'text-emerald-400', 'border', 'border-emerald-800');
      formStatus.innerHTML = `✓ Thank you, ${name}! Your message has been prepared for Rohith Kudimi. He will get back to you shortly at kudimirohith@gmail.com!`;
      
      contactForm.reset();
    });
  }

});
