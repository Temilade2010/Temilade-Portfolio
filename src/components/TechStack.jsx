import React, { useState } from 'react';

export const TechStack = () => {
  const [activeTab, setActiveTab] = useState('all');

  const technologies = [
    // Mobile
    {
      name: 'React Native',
      category: 'mobile',
      color: '#61DAFB',
      glow: 'rgba(97, 218, 251, 0.35)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(30 16 16)"/>
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(90 16 16)"/>
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(150 16 16)"/>
          <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
        </svg>
      ),
    },
    {
      name: 'Expo',
      category: 'mobile',
      color: '#000020',
      glow: 'rgba(0, 0, 32, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#000020"/>
          <path d="M16 6L6 23.5H10.2L16 13.5L21.8 23.5H26L16 6Z" fill="white"/>
        </svg>
      ),
    },

    // Frontend
    {
      name: 'React',
      category: 'frontend',
      color: '#61DAFB',
      glow: 'rgba(97, 218, 251, 0.3)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(30 16 16)"/>
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(90 16 16)"/>
          <ellipse cx="16" cy="16" rx="13.5" ry="5.2" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(150 16 16)"/>
          <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      color: '#F7DF1E',
      glow: 'rgba(247, 223, 30, 0.3)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#F7DF1E"/>
          <path d="M18.5 24C17.5 24 16.5 23.5 16 22.5L18 21.2C18.4 21.8 18.8 22.2 19.5 22.2C20.3 22.2 20.8 21.8 20.8 20.8V12H23.5V20.8C23.5 22.8 22 24 18.5 24ZM10 24C7.5 24 6 22.5 5.5 20.5L8 19.5C8.3 20.8 9.2 21.8 10.5 21.8C11.6 21.8 12.3 21.2 12.3 20.3C12.3 19.2 11.2 18.8 9.8 18.2C7.5 17.2 6.5 16.2 6.5 14.3C6.5 12.5 8 11.2 10.3 11.2C12.2 11.2 13.5 12 14.2 13.5L12 14.8C11.5 13.8 10.8 13.4 9.8 13.4C9 13.4 8.3 13.8 8.3 14.5C8.3 15.3 9 15.7 10.5 16.3C13 17.3 14.2 18.2 14.2 20.3C14.2 22.5 12.5 24 10 24Z" fill="#000000"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      color: '#3178C6',
      glow: 'rgba(49, 120, 198, 0.3)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#3178C6"/>
          <path d="M12.5 14.5H7.5V12H20V14.5H15V24H12.5V14.5Z" fill="white"/>
          <path d="M26.5 16C26.5 14 25 13 23 13C20.5 13 19.5 14.3 19.5 15.7H21.8C21.8 15 22.2 14.7 23 14.7C23.8 14.7 24.2 15.1 24.2 15.7C24.2 16.7 23 17 21.5 17.7C19.8 18.5 19.2 19.7 19.2 21.3C19.2 23.3 20.8 24.5 23.2 24.5C25.8 24.5 27 23 27 21.3H24.7C24.7 22.3 24 22.7 23.2 22.7C22.3 22.7 21.6 22.2 21.6 21.3C21.6 20.3 22.8 19.9 24.2 19.3C25.8 18.5 26.5 17.5 26.5 16Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      color: '#38BDF8',
      glow: 'rgba(56, 189, 248, 0.3)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M16 8C12 8 9.5 10 8.5 14C10 12 11.5 11.5 13 12.5C14.1 13.3 14.9 14.4 15.8 15.7C17.3 17.8 19.2 20.5 23.5 20.5C27.5 20.5 30 18.5 31 14.5C29.5 16.5 28 17 26.5 16C25.4 15.2 24.6 14.1 23.7 12.8C22.2 10.7 20.3 8 16 8ZM8.5 16C4.5 16 2 18 1 22C2.5 20 4 19.5 5.5 20.5C6.6 21.3 7.4 22.4 8.3 23.7C9.8 25.8 11.7 28.5 16 28.5C20 28.5 22.5 26.5 23.5 22.5C22 24.5 20.5 25 19 24C17.9 23.2 17.1 22.1 16.2 20.8C14.7 18.7 12.8 16 8.5 16Z" fill="#38BDF8"/>
        </svg>
      ),
    },
    {
      name: 'HTML5',
      category: 'frontend',
      color: '#E44D26',
      glow: 'rgba(228, 77, 38, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M6 3L8.2 27.5L16 29.5L23.8 27.5L26 3H6Z" fill="#E44D26"/>
          <path d="M16 5V27.3L22.2 25.7L24.1 5H16Z" fill="#F16529"/>
          <path d="M16 10.5H10.5L11 15.5H16V10.5ZM16 19.5L13.8 19.4L13.5 16.8H11.2L11.7 22.5L16 23.7V19.5Z" fill="#EBEBEB"/>
          <path d="M16 10.5V15.5H21L21.5 10.5H16ZM16 19.5V23.7L20.3 22.5L20.8 16.8H18.5L18.2 19.4L16 19.5Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'CSS3',
      category: 'frontend',
      color: '#1572B6',
      glow: 'rgba(21, 114, 182, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M6 3L8.2 27.5L16 29.5L23.8 27.5L26 3H6Z" fill="#1572B6"/>
          <path d="M16 5V27.3L22.2 25.7L24.1 5H16Z" fill="#33A9DC"/>
          <path d="M16 10.5H10.5L11 15.5H16V10.5ZM16 19.5L13.8 19.4L13.5 16.8H11.2L11.7 22.5L16 23.7V19.5Z" fill="#EBEBEB"/>
          <path d="M16 10.5V15.5H21L21.5 10.5H16ZM16 19.5V23.7L20.3 22.5L20.8 16.8H18.5L18.2 19.4L16 19.5Z" fill="white"/>
        </svg>
      ),
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      color: '#339933',
      glow: 'rgba(51, 153, 51, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M16 2.5L3.875 9.5V23.5L16 30.5L28.125 23.5V9.5L16 2.5Z" fill="#339933" fillOpacity="0.18" stroke="#339933" strokeWidth="2"/>
          <path d="M16 7L8 11.5V20.5L16 25L24 20.5V11.5L16 7Z" fill="#339933"/>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'backend',
      color: '#3776AB',
      glow: 'rgba(55, 118, 171, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M15.8 3C9.8 3 10.2 5.6 10.2 5.6L10.2 8.3H16V9.2H7.4C7.4 9.2 3 8.7 3 14.7C3 20.7 6.8 20.4 6.8 20.4H9.1V17.2C9.1 17.2 9 13.4 12.8 13.4H18.7C18.7 13.4 22.3 13.5 22.3 10V5.6C22.3 5.6 22.8 3 15.8 3Z" fill="#3776AB"/>
          <path d="M16.2 29C22.2 29 21.8 26.4 21.8 26.4L21.8 23.7H16V22.8H24.6C24.6 22.8 29 23.3 29 17.3C29 11.3 25.2 11.6 25.2 11.6H22.9V14.8C22.9 14.8 23 18.6 19.2 18.6H13.3C13.3 18.6 9.7 18.5 9.7 22V26.4C9.7 26.4 9.2 29 16.2 29Z" fill="#FFD43B"/>
          <circle cx="12.5" cy="5.8" r="1.1" fill="white"/>
          <circle cx="19.5" cy="26.2" r="1.1" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Express',
      category: 'backend',
      color: '#18181b',
      glow: 'rgba(24, 24, 27, 0.2)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#18181b"/>
          <text x="16" y="21" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="13" fontWeight="bold">ex</text>
        </svg>
      ),
    },

    // Database & Cloud
    {
      name: 'Appwrite',
      category: 'database',
      color: '#FD366E',
      glow: 'rgba(253, 54, 110, 0.3)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#FD366E"/>
          <path d="M16 7C11 7 7 11 7 16C7 21 11 25 16 25C21 25 25 21 25 16C25 11 21 7 16 7Z" fill="white" fillOpacity="0.25"/>
          <circle cx="16" cy="16" r="4.8" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      color: '#336791',
      glow: 'rgba(51, 103, 145, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <ellipse cx="16" cy="9" rx="10" ry="4" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="2"/>
          <path d="M6 9V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V9" stroke="#336791" strokeWidth="2"/>
          <path d="M6 16V23C6 25.2 10.5 27 16 27C21.5 27 26 25.2 26 23V16" stroke="#336791" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: 'SQLite',
      category: 'database',
      color: '#003B57',
      glow: 'rgba(0, 59, 87, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#003B57"/>
          <path d="M7 11C7 8.5 11 7 16 7C21 7 25 8.5 25 11V21C25 23.5 21 25 16 25C11 25 7 23.5 7 21V11Z" fill="#005B8C"/>
          <ellipse cx="16" cy="11" rx="8" ry="3" fill="#2BB5EC"/>
        </svg>
      ),
    },

    // Tools
    {
      name: 'Git',
      category: 'tools',
      color: '#F05032',
      glow: 'rgba(240, 80, 50, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <circle cx="16" cy="16" r="14" fill="#F05032" fillOpacity="0.12" stroke="#F05032" strokeWidth="1.5"/>
          <path d="M12 9C10.9 9 10 9.9 10 11C10 11.9 10.6 12.6 11.4 12.9V19.1C10.6 19.4 10 20.1 10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21C14 20.1 13.4 19.4 12.6 19.1V15.5C14.2 15.3 15.5 14 15.5 12.5V11.5L18.4 14.4C18.1 14.8 18 15.4 18 16C18 17.1 18.9 18 20 18C21.1 18 22 17.1 22 16C22 14.9 21.1 14 20 14C19.4 14 18.8 14.1 18.4 14.4L15.5 11.5V11C15.5 9.9 14.6 9 13.5 9H12Z" fill="#F05032"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      category: 'tools',
      color: '#18181b',
      glow: 'rgba(24, 24, 27, 0.2)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <rect width="32" height="32" rx="7" fill="#18181b"/>
          <path d="M16 6C10.48 6 6 10.48 6 16C6 20.42 8.87 24.17 12.84 25.49C13.34 25.58 13.52 25.27 13.52 25C13.52 24.77 13.51 24.14 13.51 23.33C10.73 23.93 10.14 22 10.14 22C9.68 20.85 9.03 20.54 9.03 20.54C8.13 19.92 9.1 19.93 9.1 19.93C10.1 20 10.63 20.95 10.63 20.95C11.51 22.47 12.95 22.03 13.52 21.78C13.61 21.14 13.86 20.7 14.14 20.45C11.92 20.2 9.59 19.34 9.59 15.51C9.59 14.42 9.98 13.53 10.62 12.83C10.52 12.58 10.17 11.56 10.72 10.19C10.72 10.19 11.56 9.92 13.47 11.21C14.27 10.99 15.12 10.88 15.97 10.88C16.82 10.88 17.67 10.99 18.47 11.21C20.38 9.92 21.22 10.19 21.22 10.19C21.77 11.56 21.42 12.58 21.32 12.83C21.96 13.53 22.35 14.42 22.35 15.51C22.35 19.35 20.01 20.19 17.78 20.44C18.14 20.75 18.46 21.36 18.46 22.3C18.46 23.65 18.45 24.73 18.45 25C18.45 25.28 18.63 25.59 19.14 25.49C23.11 24.16 25.98 20.41 25.98 16C25.98 10.48 21.5 6 16 6Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Vite',
      category: 'tools',
      color: '#BD34FE',
      glow: 'rgba(189, 52, 254, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <path d="M27.5 4.5L16.8 28.5C16.5 29.2 15.5 29.2 15.2 28.5L4.5 4.5C4.1 3.7 4.8 2.8 5.7 3L16 5.5L26.3 3C27.2 2.8 27.9 3.7 27.5 4.5Z" fill="#BD34FE" fillOpacity="0.2"/>
          <path d="M26.2 3.8L16 26.5L5.8 3.8L16 6.2L26.2 3.8Z" fill="#41D1FF"/>
          <path d="M19.5 5.5L11.5 17H16.5L13.5 24.5L22 13.5H17L19.5 5.5Z" fill="#FFD43B"/>
        </svg>
      ),
    },
    {
      name: 'Postman',
      category: 'tools',
      color: '#FF6C37',
      glow: 'rgba(255, 108, 55, 0.25)',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" fill="none">
          <circle cx="16" cy="16" r="14" fill="#FF6C37"/>
          <path d="M21.5 13C20.5 11.5 18.5 10.5 16 10.5C12.5 10.5 9.5 12.8 9.5 16C9.5 18.5 11.5 20.5 14.5 21L14 23L16.5 21.5H17C20.5 21.5 22.5 19 22.5 16C22.5 14.8 22.1 13.8 21.5 13Z" fill="white"/>
        </svg>
      ),
    },
  ];

  const filtered = activeTab === 'all'
    ? technologies
    : technologies.filter((t) => t.category === activeTab);

  return (
    <div id="tech-stack" className="w-full max-w-[53rem] flex flex-col py-8 px-6 md:px-24 items-start">
      {/* Top Header: Crisp, confident, zero fluff */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-6 gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-zinc-100 text-zinc-800 border border-zinc-200/80 backdrop-blur-md">
            <span>⚡ Technologies</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1 p-1 bg-white/70 backdrop-blur-md rounded-xl border border-zinc-200/70 overflow-x-auto max-w-full shadow-2xs">
          {[
            { id: 'all', label: 'All' },
            { id: 'mobile', label: 'Mobile' },
            { id: 'frontend', label: 'Web' },
            { id: 'backend', label: 'Backend' },
            { id: 'database', label: 'Database' },
            { id: 'tools', label: 'Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-zinc-950 text-white shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Pure Logo Grid: High-end, sleek, NO long talks */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3.5 w-full">
        {filtered.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/80 hover:bg-white backdrop-blur-md border border-zinc-200/70 hover:border-zinc-300 transition-all duration-300 cursor-default hover:-translate-y-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]"
            style={{
              '--brand-glow': tech.glow,
            }}
            title={tech.name}
          >
            {/* Ambient Brand Color Halo on Hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: `0 12px 28px -4px ${tech.glow}`,
              }}
            />

            {/* Logo Container */}
            <div className="relative flex items-center justify-center w-12 h-12 mb-2">
              {tech.icon}
            </div>

            {/* Minimal Label: Just the name, NO long talks */}
            <span className="relative z-10 text-xs font-semibold text-zinc-800 tracking-tight group-hover:text-zinc-950 transition-colors text-center truncate w-full">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
