import React from 'react';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[53rem] py-[40px] px-6 flex flex-col items-center gap-[16px] border-t border-[#E5E5E5] mt-10">
      <p className="text-[14px] text-center text-[#5a5a5a] font-normal">
        © MMXXVI · Temilade Atunde · All rights reserved
      </p>

      <div className="flex items-center gap-6 py-1">
        {/* GitHub */}
        <a
          href="https://github.com/Temilade2010"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5a5a5a] hover:text-black transition-all duration-200 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        {/* Contact / Email */}
        <a
          href="mailto:temiladeatunde@gmail.com"
          className="text-[#5a5a5a] hover:text-black transition-all duration-200 hover:scale-110"
          aria-label="Email Temilade Atunde"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};
