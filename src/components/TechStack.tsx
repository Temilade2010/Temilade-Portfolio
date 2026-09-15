import React, { useState } from 'react';
import { Server, Layout, Database, Wrench, Layers } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'tools';
  categoryLabel: string;
  description: string;
  icon: React.ReactNode;
  level: string;
}

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'frontend' | 'database' | 'tools'>('all');

  const technologies: TechItem[] = [
    // Backend & Systems Languages
    {
      name: 'Node.js',
      category: 'backend',
      categoryLabel: 'Backend Runtime',
      description: 'Event-driven, asynchronous JavaScript runtime for scalable backend services & APIs.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M16 2.5L3.875 9.5V23.5L16 30.5L28.125 23.5V9.5L16 2.5Z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="2"/>
          <path d="M16 7L8 11.5V20.5L16 25L24 20.5V11.5L16 7Z" fill="#339933"/>
        </svg>
      ),
    },
    {
      name: 'Express.js',
      category: 'backend',
      categoryLabel: 'REST Framework',
      description: 'Minimalist, fast web framework for architecting robust REST APIs & microservices.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <circle cx="16" cy="16" r="14" fill="#000000" fillOpacity="0.08" stroke="#000000" strokeWidth="2"/>
          <text x="16" y="21" textAnchor="middle" fill="#000000" fontSize="13" fontWeight="bold" fontFamily="monospace">ex</text>
        </svg>
      ),
    },
    {
      name: 'Python',
      category: 'backend',
      categoryLabel: 'Programming Language',
      description: 'Versatile language for backend services, automation scripts, algorithms, and data logic.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M15.8 3C9.8 3 10.2 5.6 10.2 5.6L10.2 8.3H16V9.2H7.4C7.4 9.2 3 8.7 3 14.7C3 20.7 6.8 20.4 6.8 20.4H9.1V17.2C9.1 17.2 9 13.4 12.8 13.4H18.7C18.7 13.4 22.3 13.5 22.3 10V5.6C22.3 5.6 22.8 3 15.8 3Z" fill="#3776AB"/>
          <path d="M16.2 29C22.2 29 21.8 26.4 21.8 26.4L21.8 23.7H16V22.8H24.6C24.6 22.8 29 23.3 29 17.3C29 11.3 25.2 11.6 25.2 11.6H22.9V14.8C22.9 14.8 23 18.6 19.2 18.6H13.3C13.3 18.6 9.7 18.5 9.7 22V26.4C9.7 26.4 9.2 29 16.2 29Z" fill="#FFD43B"/>
          <circle cx="12.5" cy="6" r="1" fill="white"/>
          <circle cx="19.5" cy="26" r="1" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Java',
      category: 'backend',
      categoryLabel: 'Object-Oriented Language',
      description: 'Robust enterprise development, OOP design patterns, multithreading, and systems architecture.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
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
      categoryLabel: 'Systems & Performance',
      description: 'High-performance computing, memory management, complex data structures, and algorithmic optimization.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#00599C"/>
          <path d="M15 11C11.5 11 9 13.5 9 16C9 18.5 11.5 21 15 21C16.8 21 18.2 20.2 19 19.2L17.2 17.8C16.8 18.4 16 18.8 15 18.8C13.2 18.8 11.8 17.5 11.8 16C11.8 14.5 13.2 13.2 15 13.2C16 13.2 16.8 13.6 17.2 14.2L19 12.8C18.2 11.8 16.8 11 15 11Z" fill="white"/>
          <path d="M21.5 14H23V15.5H24.5V16.5H23V18H21.5V16.5H20V15.5H21.5V14Z" fill="#659AD2"/>
          <path d="M26.5 14H28V15.5H29.5V16.5H28V18H26.5V16.5H25V15.5H26.5V14Z" fill="#659AD2"/>
        </svg>
      ),
    },
    {
      name: 'C#',
      category: 'backend',
      categoryLabel: '.NET Ecosystem',
      description: 'Modern object-oriented programming, .NET Core backend architectures, and type-safe systems.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#9B4993"/>
          <path d="M16 10C12 10 9.5 12.8 9.5 16C9.5 19.2 12 22 16 22C18 22 19.6 21 20.5 19.8L18.6 18.2C18 19 17.2 19.6 16 19.6C13.8 19.6 12.2 18 12.2 16C12.2 14 13.8 12.4 16 12.4C17.2 12.4 18 13 18.6 13.8L20.5 12.2C19.6 11 18 10 16 10Z" fill="white"/>
          <path d="M22.5 14.5H24.2V13H25.2V14.5H26.5V15.5H25.2V17H26.5V18H25.2V19.5H24.2V18H22.5V19.5H21.5V18H20.5V17H21.5V15.5H20.5V14.5H21.5V13H22.5V14.5ZM22.5 17H24.2V15.5H22.5V17Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Go (Golang)',
      category: 'backend',
      categoryLabel: 'Concurrent Systems',
      description: 'High-concurrency microservices, lightweight goroutines, and fast compiled backend architectures.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#00ACD7"/>
          <path d="M6 16C6 11.5 9.5 9 13.5 9C16.5 9 18.5 10.5 19.2 12.5H16.5C15.8 11.8 14.8 11.2 13.5 11.2C11 11.2 8.8 13.2 8.8 16C8.8 18.8 11 20.8 13.5 20.8C15.2 20.8 16.5 19.8 16.8 18.2H13.5V16.2H19.5V19.5C18.2 21.5 16 23 13.5 23C9.5 23 6 20.5 6 16Z" fill="white"/>
          <path d="M24 12.5C21.5 12.5 19.8 14.2 19.8 16.8C19.8 19.4 21.5 21.1 24 21.1C26.5 21.1 28.2 19.4 28.2 16.8C28.2 14.2 26.5 12.5 24 12.5ZM24 19C22.8 19 21.8 18 21.8 16.8C21.8 15.6 22.8 14.6 24 14.6C25.2 14.6 26.2 15.6 26.2 16.8C26.2 18 25.2 19 24 19Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      category: 'backend',
      categoryLabel: 'Type-Safe Engineering',
      description: 'Typed superset of JavaScript bringing compile-time safety and scalable software design patterns.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#3178C6"/>
          <path d="M14.5 12H7V14.5H9.5V23H12V14.5H14.5V12Z" fill="white"/>
          <path d="M16.5 20.5C17.5 21.5 19 22 20.5 22C22.5 22 23.5 21 23.5 19.8C23.5 18 21.5 17.5 19.5 16.8C17.5 16 15.5 15.2 15.5 13.5C15.5 11.8 17 10.5 19.5 10.5C21.2 10.5 22.8 11.2 23.8 12.2L22.2 14C21.5 13.3 20.5 12.8 19.5 12.8C18.2 12.8 17.5 13.4 17.5 14.2C17.5 15.5 19 16 21 16.8C23 17.5 25.5 18.5 25.5 20.8C25.5 22.8 23.8 24.2 20.5 24.2C18.5 24.2 16.8 23.5 15.2 22L16.5 20.5Z" fill="white"/>
        </svg>
      ),
    },

    // Mobile & Frontend
    {
      name: 'Flutter',
      category: 'frontend',
      categoryLabel: 'Cross-Platform Mobile',
      description: "Google's UI toolkit for crafting natively compiled, beautiful mobile apps for iOS & Android from a single codebase.",
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M19 4L6 17L10 21L27 4H19Z" fill="#54C5F8"/>
          <path d="M19 15L12 22L16 26L27 15H19Z" fill="#29B6F6"/>
          <path d="M16 26L12 22L16 18L20 22L16 26Z" fill="#01579B"/>
          <path d="M20 22L27 15H19L16 18L20 22Z" fill="#0288D1"/>
        </svg>
      ),
    },
    {
      name: 'React',
      category: 'frontend',
      categoryLabel: 'Web UI Framework',
      description: 'Declarative component architecture for building reactive web applications and SPAs.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(0 16 16)"/>
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 16 16)"/>
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 16 16)"/>
          <circle cx="16" cy="16" r="2.5" fill="#61DAFB"/>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      category: 'frontend',
      categoryLabel: 'React Framework',
      description: 'Server-side rendering, static generation, API routes, and optimized web applications.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <circle cx="16" cy="16" r="15" fill="black"/>
          <path d="M12 10V22M20 10V18M12 10L22 22" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      categoryLabel: 'Core Language',
      description: 'Modern asynchronous programming, async/await, closures, and browser APIs.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#F7DF1E"/>
          <path d="M18 13V21C18 23 16.5 24 14.5 24C12.5 24 11.2 23 10.5 21.5L12.5 20.2C13 21.2 13.7 21.8 14.5 21.8C15.3 21.8 15.8 21.4 15.8 20.5V13H18Z" fill="black"/>
          <path d="M21 21C22 21.8 23.2 22.3 24.5 22.3C26 22.3 26.8 21.6 26.8 20.5C26.8 19.2 25.5 18.8 23.8 18C21.8 17 19.8 16 19.8 14C19.8 12 21.5 10.5 24 10.5C25.5 10.5 26.8 11 27.8 12L26 13.5C25.2 12.8 24.5 12.5 23.8 12.5C22.8 12.5 22.2 13 22.2 13.8C22.2 14.8 23.2 15.2 25 16C27.2 17 29 18 29 20.5C29 22.8 27.2 24.2 24.5 24.2C22.8 24.2 21.2 23.5 20 22.2L21 21Z" fill="black"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      categoryLabel: 'Utility Styling',
      description: 'Utility-first styling framework enabling responsive, modern designs with clean structure.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M8.5 16C9.5 12 12.5 10 17.5 10C23.5 10 24.5 14 26 16C27.5 18 29.5 19 32 19C27 19 24 15 20.5 15C17 15 15 17 13.5 19C12 21 10.5 22 8 22C7 22 5 21 0 16C5 16 7.5 18 8.5 16Z" fill="#38B2AC"/>
          <path d="M0 22C1 18 4 16 9 16C15 16 16 20 17.5 22C19 24 21 25 23.5 25C18.5 25 15.5 21 12 21C8.5 21 6.5 23 5 25C3.5 27 2 28 0 28C-1 28 -3 27 -8 22C-3 22 -0.5 24 0 22Z" fill="#38B2AC"/>
        </svg>
      ),
    },

    // Database & Cloud
    {
      name: 'Appwrite.io',
      category: 'database',
      categoryLabel: 'Cloud & Auth Backend',
      description: 'Complete backend-as-a-service for mobile & web apps, providing authentication, databases, and storage.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#F02E65"/>
          <path d="M16 7C11 7 7 11 7 16C7 21 11 25 16 25C21 25 25 21 25 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="16" cy="16" r="3" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      categoryLabel: 'Relational Database',
      description: 'Enterprise open source SQL database engine offering strict ACID transactions and relational integrity.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#336791"/>
          <ellipse cx="16" cy="14" rx="8" ry="6" stroke="white" strokeWidth="1.8"/>
          <path d="M8 14V22C8 25.3 11.6 26 16 26C20.4 26 24 25.3 24 22V14" stroke="white" strokeWidth="1.8"/>
          <path d="M8 18C8 21.3 11.6 22 16 22C20.4 22 24 21.3 24 18" stroke="white" strokeWidth="1.8"/>
        </svg>
      ),
    },
    {
      name: 'REST APIs & WebSockets',
      category: 'database',
      categoryLabel: 'Network Protocols',
      description: 'Designing resilient client-server contracts, realtime communication, and event streams.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <circle cx="9" cy="16" r="4" fill="#6366F1"/>
          <circle cx="23" cy="10" r="4" fill="#EC4899"/>
          <circle cx="23" cy="22" r="4" fill="#10B981"/>
          <path d="M13 15L19 11M13 17L19 21" stroke="#000000" strokeWidth="1.5" strokeDasharray="2 2"/>
        </svg>
      ),
    },

    // Tools & DevOps
    {
      name: 'Git & GitHub',
      category: 'tools',
      categoryLabel: 'Version Control',
      description: 'Distributed version control, collaborative workflows, branch management, and CI/CD actions.',
      level: 'Advanced',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <path d="M16 2C8.27 2 2 8.27 2 16C2 22.19 6.02 27.44 11.6 29.3C12.3 29.43 12.56 29 12.56 28.63V26.29C8.66 27.14 7.84 24.41 7.84 24.41C7.2 22.79 6.27 22.36 6.27 22.36C5 21.5 6.37 21.52 6.37 21.52C7.77 21.62 8.51 22.95 8.51 22.95C9.76 25.08 11.78 24.47 12.57 24.11C12.7 23.2 13.06 22.58 13.46 22.23C10.35 21.88 7.08 20.68 7.08 15.32C7.08 13.79 7.63 12.54 8.52 11.56C8.38 11.21 7.9 9.79 8.66 7.86C8.66 7.86 9.84 7.48 12.53 9.3C13.65 8.99 14.85 8.83 16.05 8.83C17.25 8.83 18.45 8.99 19.57 9.3C22.26 7.48 23.44 7.86 23.44 7.86C24.2 9.79 23.72 11.21 23.58 11.56C24.47 12.54 25.02 13.79 25.02 15.32C25.02 20.69 21.74 21.87 18.62 22.22C19.12 22.65 19.56 23.51 19.56 24.82V28.63C19.56 29 19.82 29.44 20.53 29.3C26.1 27.43 30.1 22.18 30.1 16C30.1 8.27 23.83 2 16 2Z" fill="#181717"/>
        </svg>
      ),
    },
    {
      name: 'Docker',
      category: 'tools',
      categoryLabel: 'Containerization',
      description: 'Isolating applications, container orchestration, reproducible local dev environments.',
      level: 'Proficient',
      icon: (
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none">
          <rect width="32" height="32" rx="6" fill="#2496ED" fillOpacity="0.12"/>
          <path d="M6 14H9V17H6V14ZM10 14H13V17H10V14ZM14 14H17V17H14V14ZM18 14H21V17H18V14ZM10 10H13V13H10V10ZM14 10H17V13H14V10ZM18 10H21V13H18V10Z" fill="#2496ED"/>
          <path d="M28 17C27.5 17 26.5 17.5 25.5 18.5C24.5 17.5 23 17 21.5 17H5C3.5 17 2 18.5 2 20C2 24.5 6 27 15 27C24.5 27 28.5 23 29 19C29 18 28.5 17 28 17Z" stroke="#2496ED" strokeWidth="1.8"/>
        </svg>
      ),
    },
  ];

  const filteredTech = activeTab === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeTab);

  return (
    <div className="w-full max-w-[53rem] flex flex-col py-[50px] md:py-[70px] px-[1.5rem] md:px-[6rem] items-start relative">
      {/* Subtle Grabient Accent Aura */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-xl h-48 bg-grabient-subtle blur-3xl opacity-70 pointer-events-none rounded-full"></div>

      {/* Header */}
      <div className="w-full flex flex-col items-start gap-2 mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-grabient-subtle border border-indigo-200/60 text-xs font-semibold text-indigo-900 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-indigo-600" />
          <span>Technical Proficiencies</span>
        </div>
        
        <h2 className="text-[26px] md:text-[32px] font-bold tracking-[-0.03em] leading-[110%] text-black">
          Technologies & Tools I Use
        </h2>
        
        <p className="text-[#5a5a5a] text-[15px] max-w-xl">
          Experienced across backend systems in <strong className="text-zinc-900 font-medium">Node.js, Express, Python, Java, C++, C#, and Go</strong>, cross-platform mobile with <strong className="text-zinc-900 font-medium">Flutter</strong>, and modern web with <strong className="text-zinc-900 font-medium">TypeScript & React</strong>.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { id: 'all', label: 'All Technologies', icon: <Layers className="w-3.5 h-3.5" /> },
            { id: 'backend', label: 'Backend & Systems', icon: <Server className="w-3.5 h-3.5" /> },
            { id: 'frontend', label: 'Mobile & Frontend', icon: <Layout className="w-3.5 h-3.5" /> },
            { id: 'database', label: 'Database & Cloud', icon: <Database className="w-3.5 h-3.5" /> },
            { id: 'tools', label: 'DevOps & Tools', icon: <Wrench className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-[12px] text-xs md:text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-[#f4f4f5] text-zinc-700 hover:bg-zinc-200/80 active:scale-95'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full relative z-10">
        {filteredTech.map((tech) => (
          <div
            key={tech.name}
            className="group relative p-4 rounded-[20px] bg-white border border-zinc-200/80 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden"
          >
            {/* Grabient hover highlight stripe */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-grabient-h opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-[14px] bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {tech.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[16px] font-semibold text-black tracking-tight group-hover:text-indigo-950 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
                    {tech.level}
                  </span>
                </div>

                <span className="text-[12px] font-medium text-indigo-600 block mt-0.5">
                  {tech.categoryLabel}
                </span>

                <p className="text-[#646464] text-[13px] leading-relaxed mt-1.5">
                  {tech.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
