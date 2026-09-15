import React, { useState } from 'react';
import { sounds } from '../utils/soundEffects';

interface TechItem {
  name: string;
  category: 'mobile-web' | 'backend' | 'data-cloud' | 'tools';
  role: string;
  badge: string;
  icon: React.ReactNode;
  color: string;
}

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'mobile-web' | 'backend' | 'data-cloud' | 'tools'>('all');

  const technologies: TechItem[] = [
    // Mobile & Frontend
    {
      name: 'Flutter',
      category: 'mobile-web',
      role: 'Cross-Platform Mobile',
      badge: '60fps Native Apps',
      color: '#02569B',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M19.5 4L7 16.5L10.8 20.3L27.1 4H19.5Z" fill="#02569B"/>
          <path d="M19.5 16.5L13.6 22.4L17.4 26.2L27.1 16.5H19.5Z" fill="#0175C2"/>
          <path d="M13.6 22.4L17.4 26.2L13.6 30L9.8 26.2L13.6 22.4Z" fill="#02569B"/>
          <path d="M17.4 26.2L21.2 30H28.8L21.2 22.4L17.4 26.2Z" fill="#29B6F6"/>
        </svg>
      ),
    },
    {
      name: 'Dart',
      category: 'mobile-web',
      role: 'Client-Side Language',
      badge: 'AOT & JIT Compiled',
      color: '#0175C2',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M6 6L20 6L26 12L12 26L6 20L6 6Z" fill="#0175C2"/>
          <path d="M12 26L20 26L26 20L26 12L12 26Z" fill="#02569B"/>
          <path d="M14 6L26 18L26 12L20 6L14 6Z" fill="#29B6F6"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'mobile-web',
      role: 'Type-Safe Systems',
      badge: 'Strict Typings',
      color: '#3178C6',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#3178C6"/>
          <path d="M15 13H8V15.5H10.2V24H12.8V15.5H15V13Z" fill="white"/>
          <path d="M23 16C23 14.5 21.5 13 19 13C16.5 13 15 14.5 15 16.5C15 19.5 20.5 18.5 20.5 21C20.5 22 19.5 22.5 18.5 22.5C17 22.5 16 21.5 16 20.5H13.5C13.5 23 15.5 24.5 18.5 24.5C21.5 24.5 23 23 23 21C23 18 17.5 19 17.5 16.5C17.5 15.5 18.5 15 19.5 15C20.5 15 21.5 15.5 21.5 16.5H23Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'React / Next.js',
      category: 'mobile-web',
      role: 'Modern Web Apps',
      badge: 'Component UI',
      color: '#61DAFB',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(30 16 16)"/>
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(90 16 16)"/>
          <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(150 16 16)"/>
          <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
        </svg>
      ),
    },

    // Backend & Systems
    {
      name: 'Go (Golang)',
      category: 'backend',
      role: 'Concurrent Microservices',
      badge: 'Fast Goroutines',
      color: '#00ACD7',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#00ACD7"/>
          <path d="M6 16C6 11.5 9.5 9 13.5 9C16.5 9 18.5 10.5 19.2 12.5H16.5C15.8 11.8 14.8 11.2 13.5 11.2C11 11.2 8.8 13.2 8.8 16C8.8 18.8 11 20.8 13.5 20.8C15.2 20.8 16.5 19.8 16.8 18.2H13.5V16.2H19.5V19.5C18.2 21.5 16 23 13.5 23C9.5 23 6 20.5 6 16Z" fill="white"/>
          <path d="M24 12.5C21.5 12.5 19.8 14.2 19.8 16.8C19.8 19.4 21.5 21.1 24 21.1C26.5 21.1 28.2 19.4 28.2 16.8C28.2 14.2 26.5 12.5 24 12.5ZM24 19C22.8 19 21.8 18 21.8 16.8C21.8 15.6 22.8 14.6 24 14.6C25.2 14.6 26.2 15.6 26.2 16.8C26.2 18 25.2 19 24 19Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Java',
      category: 'backend',
      role: 'Enterprise Systems',
      badge: 'OOP & Threads',
      color: '#E76F00',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M11 25C11 25 10 26 16 26C21 26 22 25 22 25C22 25 23 27 16 27C9 27 11 25 11 25Z" fill="#E76F00"/>
          <path d="M10 28C10 28 9 29 16 29C22 29 23 28 23 28C23 28 24 30.5 16 30.5C8 30.5 10 28 10 28Z" fill="#E76F00"/>
          <path d="M17.5 7C17.5 7 13.5 10 16 13C18 15.5 15.5 17 15.5 17C15.5 17 19.5 14 17.5 11C15.8 8.5 17.5 7 17.5 7Z" fill="#5382A1"/>
          <path d="M21 10C21 10 18 12.5 19.5 14.8C20.8 16.8 19 18 19 18C19 18 22 15.5 20.8 13.5C19.8 11.8 21 10 21 10Z" fill="#E76F00"/>
          <path d="M8 21.5C8 21.5 7 24 16 24C24 24 25.5 21.5 25.5 21.5C25.5 21.5 24 18 16 18C8 18 8 21.5 8 21.5Z" stroke="#5382A1" strokeWidth="1.6"/>
        </svg>
      ),
    },
    {
      name: 'C++',
      category: 'backend',
      role: 'High Performance & SIMD',
      badge: 'Memory & Algorithms',
      color: '#00599C',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#00599C"/>
          <path d="M15 11C11.5 11 9 13.5 9 16C9 18.5 11.5 21 15 21C16.8 21 18.2 20.2 19 19.2L17.2 17.8C16.8 18.4 16 18.8 15 18.8C13.2 18.8 11.8 17.5 11.8 16C11.8 14.5 13.2 13.2 15 13.2C16 13.2 16.8 13.6 17.2 14.2L19 12.8C18.2 11.8 16.8 11 15 11Z" fill="white"/>
          <path d="M21.5 14H23V15.5H24.5V16.5H23V18H21.5V16.5H20V15.5H21.5V14Z" fill="#659AD2"/>
          <path d="M26.5 14H28V15.5H29.5V16.5H28V18H26.5V16.5H25V15.5H26.5V14Z" fill="#659AD2"/>
        </svg>
      ),
    },
    {
      name: 'C# / .NET',
      category: 'backend',
      role: '.NET Backend Architecture',
      badge: 'Type-Safe APIs',
      color: '#9B4993',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#9B4993"/>
          <path d="M16 10C12 10 9.5 12.8 9.5 16C9.5 19.2 12 22 16 22C18 22 19.6 21 20.5 19.8L18.6 18.2C18 19 17.2 19.6 16 19.6C13.8 19.6 12.2 18 12.2 16C12.2 14 13.8 12.4 16 12.4C17.2 12.4 18 13 18.6 13.8L20.5 12.2C19.6 11 18 10 16 10Z" fill="white"/>
          <path d="M22.5 14.5H24.2V13H25.2V14.5H26.5V15.5H25.2V17H26.5V18H25.2V19.5H24.2V18H22.5V19.5H21.5V18H20.5V17H21.5V15.5H20.5V14.5H21.5V13H22.5V14.5ZM22.5 17H24.2V15.5H22.5V17Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Node.js & Express',
      category: 'backend',
      role: 'Async Server Runtime',
      badge: 'REST & GraphQL',
      color: '#339933',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M16 2.5L3.875 9.5V23.5L16 30.5L28.125 23.5V9.5L16 2.5Z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="2"/>
          <path d="M16 7L8 11.5V20.5L16 25L24 20.5V11.5L16 7Z" fill="#339933"/>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'backend',
      role: 'Scripting & Automation',
      badge: 'Data & Backend',
      color: '#3776AB',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M15.8 3C9.8 3 10.2 5.6 10.2 5.6L10.2 8.3H16V9.2H7.4C7.4 9.2 3 8.7 3 14.7C3 20.7 6.8 20.4 6.8 20.4H9.1V17.2C9.1 17.2 9 13.4 12.8 13.4H18.7C18.7 13.4 22.3 13.5 22.3 10V5.6C22.3 5.6 22.8 3 15.8 3Z" fill="#3776AB"/>
          <path d="M16.2 29C22.2 29 21.8 26.4 21.8 26.4L21.8 23.7H16V22.8H24.6C24.6 22.8 29 23.3 29 17.3C29 11.3 25.2 11.6 25.2 11.6H22.9V14.8C22.9 14.8 23 18.6 19.2 18.6H13.3C13.3 18.6 9.7 18.5 9.7 22V26.4C9.7 26.4 9.2 29 16.2 29Z" fill="#FFD43B"/>
        </svg>
      ),
    },

    // Data & Cloud
    {
      name: 'Appwrite.io',
      category: 'data-cloud',
      role: 'BaaS & Realtime Sync',
      badge: 'Auth & DB',
      color: '#FD366E',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <rect width="32" height="32" rx="6" fill="#FD366E"/>
          <path d="M16 6C10.5 6 6 10.5 6 16C6 21.5 10.5 26 16 26C21.5 26 26 21.5 26 16C26 10.5 21.5 6 16 6Z" fill="white" fillOpacity="0.3"/>
          <circle cx="16" cy="16" r="5" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL & SQLite',
      category: 'data-cloud',
      role: 'Relational Databases',
      badge: 'ACID & Queries',
      color: '#336791',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <ellipse cx="16" cy="8" rx="10" ry="4" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="2"/>
          <path d="M6 8V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V8" stroke="#336791" strokeWidth="2"/>
          <path d="M6 16V24C6 26.2 10.5 28 16 28C21.5 28 26 26.2 26 24V16" stroke="#336791" strokeWidth="2"/>
        </svg>
      ),
    },

    // Tools
    {
      name: 'Docker',
      category: 'tools',
      role: 'Containerization',
      badge: 'Microservices',
      color: '#2496ED',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <path d="M29 15.5C28.2 15.5 27.5 15.8 27.1 16.3C26.1 14.7 24.3 13.7 22.2 13.7C21.7 13.7 21.2 13.8 20.7 13.9C20.1 11.6 18 10 15.5 10C15 10 14.5 10.1 14 10.3V9H10V13H12V15H8V11H4V15H2V17.5C2 22.2 5.8 26 10.5 26H22C26.4 26 30 22.4 30 18C30 16.6 29.6 15.5 29 15.5Z" fill="#2496ED"/>
        </svg>
      ),
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      role: 'Version Control & CI',
      badge: 'Collaborative Dev',
      color: '#F05032',
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
          <circle cx="16" cy="16" r="14" fill="#000000" fillOpacity="0.05" stroke="#000000" strokeWidth="1.5"/>
          <path d="M12 9C10.9 9 10 9.9 10 11C10 11.9 10.6 12.6 11.4 12.9V19.1C10.6 19.4 10 20.1 10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21C14 20.1 13.4 19.4 12.6 19.1V15.5C14.2 15.3 15.5 14 15.5 12.5V11.5L18.4 14.4C18.1 14.8 18 15.4 18 16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16C22 14.9 21.1 14 20 14C19.4 14 18.8 14.1 18.4 14.4L15.5 11.5V11C15.5 9.9 14.6 9 13.5 9H12Z" fill="#F05032"/>
        </svg>
      ),
    },
  ];

  const filtered = activeTab === 'all'
    ? technologies
    : technologies.filter((t) => t.category === activeTab);

  const handleTabChange = (tab: typeof activeTab) => {
    sounds.playClick();
    setActiveTab(tab);
  };

  return (
    <div id="tech-stack" className="w-full max-w-[53rem] flex flex-col py-10 px-6 md:px-24 items-start">
      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full mb-6 gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/60 mb-2">
            <span>⚡ Stack & Arsenal</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950">
            Technologies & Tools
          </h2>
          <p className="text-xs md:text-sm text-zinc-500 mt-1">
            Short, focused overview of the technologies I build with.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 p-1 bg-zinc-100/90 rounded-xl border border-zinc-200/70 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All' },
            { id: 'mobile-web', label: 'Mobile & Web' },
            { id: 'backend', label: 'Systems & Backend' },
            { id: 'data-cloud', label: 'Data & Cloud' },
            { id: 'tools', label: 'Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-zinc-950 shadow-sm border border-zinc-200/60'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Compact, Clean Grid (No walls of text) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
        {filtered.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex flex-col p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
          >
            {/* Top row: Icon + Badge */}
            <div className="flex items-center justify-between mb-2.5">
              <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-100 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="text-[10px] font-medium tracking-tight px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200/50">
                {tech.badge}
              </span>
            </div>

            {/* Tech Name */}
            <h3 className="text-sm font-semibold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
              {tech.name}
            </h3>

            {/* Short Punchy Descriptor */}
            <p className="text-[11px] text-zinc-500 font-medium mt-0.5 truncate">
              {tech.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
