import React, { useEffect, useState } from 'react';
import { Sparkles, Command, ArrowDown } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HeroProps {
  onOpenCommandPalette?: () => void;
  onOpenBlog?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCommandPalette, onOpenBlog }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headingWords = ["Hey,", "I'm", "Temilade", "Atunde."];
  const roleWords = ["Software", "Engineer"];

  return (
    <div className="w-full max-w-[53rem] flex flex-col pt-[130px] md:pt-[170px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[6rem] items-start gap-[22px]">
      {/* Top Status Badge & Profile Picture */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full justify-between">
        {/* Profile Picture */}
        <div 
          className={`transition-all duration-700 ease-out transform ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative group inline-block">
            <img
              src="/temilade-profile.jpg"
              alt="Temilade Atunde Profile"
              className="w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-full object-cover aspect-square ring-2 ring-black/5 shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Live Status Pill & Quick Launcher */}
        <div
          className={`flex items-center gap-2 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Projects</span>
          </div>

          {onOpenCommandPalette && (
            <button
              onClick={() => {
                sounds.playPop();
                onOpenCommandPalette();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 text-xs font-semibold transition-all shadow-2xs group"
              title="Open Command Palette (Cmd + K)"
            >
              <Command className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-900" />
              <span>⌘K</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Headings */}
      <div className="text-start">
        <h1 className="text-[32px] md:text-[46px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-950 text-start mb-2">
          {headingWords.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.25em] transition-all duration-700 ${
                isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-2'
              }`}
              style={{ transitionDelay: `${200 + i * 90}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <h2 className="text-[32px] md:text-[46px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-900 text-start">
          {roleWords.map((word, i) => (
            <span
              key={i}
              className={`inline-block mr-[0.25em] transition-all duration-700 ${
                isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-sm translate-y-2'
              }`}
              style={{ transitionDelay: `${600 + i * 110}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        {/* Subtitle with Redeemer's University 2030 */}
        <p 
          className={`text-[15px] md:text-[16px] text-[#5a5a5a] text-start mt-[20px] leading-relaxed transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Software Engineer crafting reliable, high-performance systems.<br className="hidden md:block" />
          Coding since 2023 · Computer Science at Redeemer's University ('30) · Flutter · Go · Java · C++ · C# · TypeScript · Node.js · Python.
        </p>

        {/* Quick CTA Actions */}
        <div
          className={`flex flex-wrap items-center gap-3 mt-6 transition-all duration-700 delay-900 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#projects"
            onClick={() => sounds.playClick()}
            className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 active:scale-95 text-white px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Explore Projects & Roadmap</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          {onOpenBlog && (
            <button
              onClick={() => {
                sounds.playPop();
                onOpenBlog();
              }}
              className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-zinc-200 active:scale-95 text-zinc-900 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all border border-zinc-200/80"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Read Engineering Journal</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
