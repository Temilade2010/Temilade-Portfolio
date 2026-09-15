import React from 'react';
import { Home, FileText } from 'lucide-react';

interface NavbarProps {
  onBlogClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBlogClick }) => {
  return (
    <header className="fixed top-[10px] md:top-[25px] w-full z-50 flex justify-center p-4 pointer-events-none">
      <div className="liquidGlass-wrapper rounded-[20px] border border-zinc-200/80 pointer-events-auto">
        <div className="liquidGlass-shine"></div>
        <nav className="flex items-center gap-1 p-[6px] relative z-10">
          {/* Home */}
          <div className="flex items-center">
            <a
              href="#"
              className="p-[14px] md:p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/60 rounded-[15px]"
              aria-label="Home"
            >
              <Home className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Home
              </span>
            </a>
            <div className="h-5 w-[1px] bg-zinc-200/80 md:mx-2"></div>
          </div>

          {/* Twitter / X */}
          <div className="flex items-center">
            <a
              href="https://x.com/honour_can_code"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[14px] md:p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/60 rounded-[15px]"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 16 16"
                className="w-4 h-4 fill-current transition-transform duration-200 group-hover:scale-105"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Twitter
              </span>
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center">
            <a
              href="https://github.com/Temilade2010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[14px] md:p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/60 rounded-[15px]"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-105"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Github
              </span>
            </a>
          </div>

          {/* Resume */}
          <div className="flex items-center">
            <a
              href="#contact-form"
              className="p-[14px] md:p-[15px] hover:px-[20px] hover:mr-1 text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/60 rounded-[15px]"
              aria-label="Resume"
            >
              <FileText className="w-5 h-5 transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Resume
              </span>
            </a>
            <div className="h-5 w-[1px] bg-zinc-200/80 md:mx-2"></div>
          </div>

          {/* Blog Button */}
          <button
            onClick={onBlogClick}
            className="bg-black text-white py-[12px] md:py-[14px] px-[18px] md:px-[22px] rounded-[14px] text-sm font-medium hover:opacity-90 active:scale-95 duration-300 transition-all hover:px-[26px] ml-2 md:ml-1 shadow-sm"
          >
            <span className="hidden md:inline">My Blog</span>
            <span className="md:hidden">Blog</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
