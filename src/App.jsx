import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogModal } from './components/BlogModal';
import { CommandPalette } from './components/CommandPalette';

export const App = () => {
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if typing in an input or textarea
      const target = e.target;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'b' && !isBlogOpen && !isCommandPaletteOpen) {
        // Press B for Blog
        setIsBlogOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBlogOpen, isCommandPaletteOpen]);

  return (
    <div className="min-h-screen bg-[#fafafa] text-black relative selection:bg-zinc-200">
      {/* Ambient Aura Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[64rem] h-[520px] pointer-events-none z-0 opacity-30 blur-[100px] overflow-hidden">
        <div className="w-full h-full bg-grabient rounded-full transform -translate-y-1/3"></div>
      </div>

      {/* Subtle Background Frame Guidelines */}
      <div className="fixed top-0 bottom-0 w-full pointer-events-none z-0">
        <div className="relative mx-auto max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-screen w-[1px] bg-[#0000000a] md:bg-[#00000014]"></div>
          <div className="absolute right-0 top-0 h-screen w-[1px] bg-[#0000000a] md:bg-[#00000014]"></div>
        </div>
      </div>

      {/* Floating Liquid Glass Header */}
      <Navbar
        onBlogClick={() => setIsBlogOpen(true)}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex flex-col relative items-center mx-auto z-10 w-full overflow-x-hidden">
        <Hero
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          onOpenBlog={() => setIsBlogOpen(true)}
        />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>

      {/* Interactive Blog System */}
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />

      {/* Command Palette Quick Launcher */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenBlog={() => setIsBlogOpen(true)}
      />
    </div>
  );
};

export default App;

