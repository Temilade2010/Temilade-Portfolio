import { ArrowUpRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const HelpBanner = () => {
  const capabilities = [
    'React Native Mobile Apps',
    'React & JavaScript Web Apps',
    'Node.js & Express REST APIs',
    'Python Scripts & Automation',
    'Appwrite Cloud & Auth',
    'SQLite & PostgreSQL Databases',
    'Open Source Collaboration',
  ];

  return (
    <div className="w-full max-w-[53rem] flex flex-col items-start px-0 md:px-6 my-6">
      <div className="relative bg-zinc-950 rounded-[28px] overflow-hidden px-[1.5rem] md:px-[4rem] py-[4rem] w-full border border-zinc-800 shadow-2xl group">
        {/* Grabient Atmospheric Backlight */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-grabient rounded-full opacity-20 blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-grabient rounded-full opacity-20 blur-3xl pointer-events-none group-hover:opacity-30 transition-opacity duration-700"></div>

        {/* Doodle Background */}
        <img
          src="/doodle.png"
          alt="Doodle"
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-md mb-6 border border-white/10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pink-300" />
            <span>Open for Projects & Collaborations</span>
          </div>

          <h2 className="text-[30px] md:text-[38px] font-bold tracking-[-0.03em] leading-[110%] text-white text-center w-full mb-[16px]">
            Have a Project or Collaboration in Mind?
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#a4a2a2] text-center max-w-[520px] mb-[28px]">
            Let's build clean, reliable, and user-focused software together.
          </p>

          {/* Capabilities Badges */}
          <div className="flex flex-wrap justify-center gap-2 max-w-xl mb-8">
            {capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs md:text-sm border border-white/10 transition-colors duration-200"
              >
                {cap}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:temiladeatunde@gmail.com"
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 text-zinc-950 font-semibold px-6 py-3.5 rounded-[14px] text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
            >
              <span>Email Me (temiladeatunde@gmail.com)</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </a>

            <a
              href="https://www.instagram.com/temi.code/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3.5 rounded-[14px] text-sm border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>@temi.code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
