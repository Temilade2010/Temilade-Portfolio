import React from 'react';

export const About = () => {
  return (
    <div id="about" className="w-full max-w-[53rem] flex flex-col py-[40px] md:py-[60px] px-[1.5rem] md:px-[6rem] items-start gap-[22px]">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-zinc-100/80 text-zinc-700 border border-zinc-200/80 backdrop-blur-md">
        <span>About Me</span>
      </div>

      <h2 className="text-[25px] md:text-[32px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-950">
        Background & What I Build
      </h2>

      <div className="flex flex-col gap-5 text-[#5a5a5a] text-[15px] md:text-[16px] font-normal leading-[1.6]">
        <p>
          I'm <strong className="text-zinc-900 font-semibold">Temilade Atunde</strong>, a software developer and undergraduate studying <strong className="text-zinc-900 font-semibold">Computer Science</strong> at <strong className="text-zinc-900 font-semibold">Redeemer's University</strong> (Class of 2030) in Lagos, Nigeria.
        </p>

        <p>
          I started programming in 2023 out of genuine curiosity for how mobile apps and websites actually work under the hood. Since then, I've focused on building clean, reliable software that solves real problems. My day-to-day stack centers around <strong className="text-zinc-900 font-semibold">React Native</strong> for smooth cross-platform mobile apps, and <strong className="text-zinc-900 font-semibold">React & JavaScript</strong> for responsive, modern web applications, backed by <strong className="text-zinc-900 font-semibold">Node.js, Express, and Python</strong>.
        </p>

        <p>
          I love contributing to open-source software. Currently, I'm an active contributor on{" "}
          <a
            href="https://github.com/odulanaprogress/ScholeOS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 font-semibold underline hover:text-blue-600 transition-colors"
          >
            ScholeOs
          </a>
          , an educational platform and school management system on GitHub. On the side, I run <strong className="text-zinc-900 font-semibold">Temicode</strong> to experiment with new ideas, develop student tools like CampusPulse, and share my coding journey.
        </p>

        {/* Polaroid Cards Stack featuring Temilade's photos with Glassmorphism shadow */}
        <div className="relative w-full h-[300px] md:h-[320px] mt-4 group select-none flex items-center justify-center">
          {/* Card 1: Left */}
          <div className="absolute top-2 left-[5%] md:left-[12%] bg-white/90 backdrop-blur-md p-2.5 pb-1 -rotate-12 shadow-xl rounded-xl border border-zinc-200/80 overflow-hidden transition-all duration-500 ease-out group-hover:-rotate-8 group-hover:-translate-x-3 group-hover:scale-105 z-10 hover:!z-40 cursor-pointer">
            <div className="w-[150px] h-[150px] md:w-[185px] md:h-[185px] overflow-hidden rounded-lg bg-zinc-100">
              <img
                src="/temilade-bw.jpg"
                alt="Temilade Atunde"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="text-xs flex justify-center py-2 italic text-zinc-800 font-medium tracking-tight">
              @Temilade2010
            </span>
          </div>

          {/* Card 2: Center - Hero Traditional Cap */}
          <div className="absolute top-0 md:top-2 bg-white/95 backdrop-blur-md p-2.5 pb-1 -rotate-2 shadow-2xl rounded-xl border border-zinc-200/80 overflow-hidden transition-all duration-500 ease-out group-hover:rotate-0 group-hover:-translate-y-2 group-hover:scale-110 z-30 hover:!z-40 cursor-pointer">
            <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] overflow-hidden rounded-lg bg-zinc-100">
              <img
                src="/temilade-profile.jpg"
                alt="Temilade Atunde Portrait"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="text-xs flex justify-center py-2 italic text-zinc-800 font-medium tracking-tight">
              Temilade Atunde
            </span>
          </div>

          {/* Card 3: Right */}
          <div className="absolute top-6 right-[5%] md:right-[12%] bg-white/90 backdrop-blur-md p-2.5 pb-1 rotate-12 shadow-xl rounded-xl border border-zinc-200/80 overflow-hidden transition-all duration-500 ease-out group-hover:rotate-8 group-hover:translate-x-3 group-hover:scale-105 z-20 hover:!z-40 cursor-pointer">
            <div className="w-[150px] h-[150px] md:w-[185px] md:h-[185px] overflow-hidden rounded-lg bg-zinc-100">
              <img
                src="/temilade-shades.jpg"
                alt="Temilade Atunde"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="text-xs flex justify-center py-2 italic text-zinc-800 font-medium tracking-tight">
              @temi.code
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
