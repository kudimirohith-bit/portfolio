import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';

const AI_KNOWLEDGE = [
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
    answer: "Rohith is pursuing B.Tech in CSE (AI & Robotics) at VIT Chennai with an impressive CGPA of 8.56 / 10."
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "👋 Hello! I am Rohith's AI Assistant. Ask me anything about his technical projects, Basic Robotics interest, FlyRank AI internship, or skills!" }
  ]);
  const [inputVal, setInputVal] = useState('');
  const chatMessagesRef = useRef(null);

  const handleSend = (text) => {
    const query = text || inputVal;
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    setInputVal('');

    const lower = query.toLowerCase();
    let reply = "Rohith is a dedicated Backend & AI Engineer with a strong interest in Basic Robotics, Node.js, Express, React, Python, and C++. Ask me about VeriSumm, FlyRank AI, or SmartGap AI!";

    for (let item of AI_KNOWLEDGE) {
      if (item.keywords.some((k) => lower.includes(k))) {
        reply = item.answer;
        break;
      }
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 350);
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-indigo-600 p-[2px] shadow-2xl hover:scale-105 transition-transform group focus:outline-none"
        aria-label="Open AI Assistant"
      >
        <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-cyan-400 text-xl font-bold">
          <Bot className="w-7 h-7 text-cyan-400" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[420px] backdrop-blur-xl">
          {/* Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-outfit font-bold text-slate-100 text-sm">Rohith AI Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-100 text-sm p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatMessagesRef}
            className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs scrollbar-thin"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl ${
                  m.sender === 'user'
                    ? 'bg-cyan-950 border border-cyan-800/60 text-cyan-200 ml-8 text-right'
                    : 'bg-slate-800/80 text-slate-200 mr-8'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px]">
            <button
              onClick={() => handleSend('What is VeriSumm?')}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-cyan-300 transition-colors"
            >
              VeriSumm?
            </button>
            <button
              onClick={() => handleSend('What is SmartGap AI?')}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 transition-colors"
            >
              SmartGap AI?
            </button>
            <button
              onClick={() => handleSend('Tell me about your interest in Robotics')}
              className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-purple-300 transition-colors"
            >
              Robotics?
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-2.5 bg-slate-950 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about Rohith..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:border-cyan-500 outline-none"
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
