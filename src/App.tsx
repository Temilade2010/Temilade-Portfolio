import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { Experience } from './components/Experience';
import { HelpBanner } from './components/HelpBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BlogModal } from './components/BlogModal';

export const App: React.FC = () => {
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black relative selection:bg-zinc-200">
      {/* Grabient Ambient Aura (Baby blue -> Lavender -> Powder pink) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[64rem] h-[520px] pointer-events-none z-0 opacity-40 blur-[100px] overflow-hidden">
        <div className="w-full h-full bg-grabient rounded-full transform -translate-y-1/3"></div>
      </div>

      {/* Background Frame Guidelines (Exact signature feature of original site) */}
      <div className="fixed top-0 bottom-0 w-full pointer-events-none z-0">
        <div className="relative mx-auto max-w-[53rem] h-full">
          <div className="absolute left-0 top-0 h-screen w-[1px] bg-[#0000000f] md:bg-[#0000001a]"></div>
          <div className="absolute right-0 top-0 h-screen w-[1px] bg-[#0000000f] md:bg-[#0000001a]"></div>
        </div>
      </div>

      {/* Floating Liquid Glass Header */}
      <Navbar onBlogClick={() => setIsBlogOpen(true)} />

      {/* Main Page Layout */}
      <main className="flex flex-col relative items-center mx-auto z-10 w-full overflow-x-hidden">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <InteractiveCanvas />
        <Experience />
        <HelpBanner />
        <Contact />
        <Footer />
      </main>

      {/* Blog Modal */}
      <BlogModal isOpen={isBlogOpen} onClose={() => setIsBlogOpen(false)} />
    </div>
  );
};

export default App;
