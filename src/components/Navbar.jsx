import React from 'react';
import { Home, FileText, Search } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Navbar = ({ onBlogClick, onOpenCommandPalette }) => {
  return (
    <header className="fixed top-[10px] md:top-[25px] w-full z-40 flex justify-center p-4 pointer-events-none">
      <div className="liquidGlass-wrapper rounded-[22px] border border-zinc-200/80 pointer-events-auto shadow-lg bg-white/75 backdrop-blur-md">
        <div className="liquidGlass-shine"></div>
        <nav className="flex items-center gap-1 p-[5px] relative z-10">
          {/* Home */}
          <div className="flex items-center">
            <a
              href="#"
              className="p-[12px] md:p-[14px] hover:px-[18px] text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/70 rounded-[16px]"
              aria-label="Home"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Home
              </span>
            </a>
            <div className="h-5 w-[1px] bg-zinc-200/80 md:mx-1"></div>
          </div>

          {/* Instagram */}
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/temi.code/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[12px] md:p-[14px] hover:px-[18px] text-zinc-600 hover:text-pink-600 relative group transition-all duration-300 hover:bg-pink-50/70 rounded-[16px]"
              aria-label="Instagram @temi.code"
            >
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Instagram
              </span>
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center">
            <a
              href="https://github.com/Temilade2010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-[12px] md:p-[14px] hover:px-[18px] text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/70 rounded-[16px]"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-105"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Github
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className="flex items-center">
            <a
              href="#contact-form"
              className="p-[12px] md:p-[14px] hover:px-[18px] text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/70 rounded-[16px]"
              aria-label="Contact & Message"
            >
              <FileText className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-105" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                Contact
              </span>
            </a>
            <div className="h-5 w-[1px] bg-zinc-200/80 md:mx-1"></div>
          </div>

          {/* Quick Search / Command Launcher */}
          {onOpenCommandPalette && (
            <div className="flex items-center">
              <button
                onClick={onOpenCommandPalette}
                className="p-[12px] md:p-[14px] hover:px-[18px] text-zinc-600 hover:text-zinc-950 relative group transition-all duration-300 hover:bg-zinc-100/70 rounded-[16px]"
                aria-label="Search and Commands"
              >
                <Search className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:scale-105 text-blue-600" />
                <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm whitespace-nowrap">
                  Quick Search (⌘K)
                </span>
              </button>
              <div className="h-5 w-[1px] bg-zinc-200/80 md:mx-1"></div>
            </div>
          )}

          {/* Blog Button */}
          <button
            onClick={onBlogClick}
            className="bg-zinc-950 text-white py-[10px] md:py-[12px] px-[16px] md:px-[20px] rounded-[15px] text-xs md:text-sm font-semibold hover:bg-zinc-800 active:scale-95 duration-200 transition-all ml-1 shadow-sm"
          >
            <span>My Blog</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

