import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className="w-full max-w-[53rem] flex flex-col py-[50px] md:py-[80px] px-[1.5rem] md:px-[6rem] items-start gap-[25px]">
      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-zinc-100 text-zinc-700 border border-zinc-200">
        <span>About The Engineer</span>
      </div>

      <h2 className="text-[25px] md:text-[32px] font-bold tracking-[-0.03em] leading-[110%] text-black">
        Engineering Philosophy & Background
      </h2>

      <div className="flex flex-col gap-6 text-[#5a5a5a] text-[15px] md:text-[16px] font-normal leading-[1.6]">
        <p>
          I'm a Software Engineer passionate about building reliable, user-focused software.
          I love transforming complex concepts and creative visions into clean, maintainable, and high-performance digital products.
        </p>

        <p>
          I'm <strong className="text-zinc-900 font-semibold">Temilade Atunde</strong>, an undergraduate <strong className="text-zinc-900 font-semibold">Computer Science</strong> student at <strong className="text-zinc-900 font-semibold">Redeemer's University</strong> (entered in 2026, completing a 4-year degree as Class of 2030) based in Lagos, Nigeria.
          I started coding in 2023, and since then I've been dedicated to mastering software systems—engineering cross-platform mobile applications with
          <strong className="text-zinc-900 font-semibold"> Flutter</strong> and Appwrite, responsive web applications, and high-performance backends using
          <strong className="text-zinc-900 font-semibold"> Go, Java, C++, C#, Python, and Node.js</strong>.
        </p>

        <p>
          I am currently an active collaborator on{" "}
          <a
            href="https://github.com/odulanaprogress/ScholeOS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 font-semibold underline hover:text-blue-600 transition-colors"
          >
            ScholeOs
          </a>
          , an open-source educational platform and school management operating system on GitHub. Alongside this, I run <strong className="text-zinc-900 font-semibold">Temicode</strong>, where I build developer productivity tools, experiment with systems algorithms, and design digital solutions like CampusPulse.
        </p>

        {/* Polaroid Cards Stack featuring Temilade's photos */}
        <div className="relative w-full h-[300px] md:h-[320px] mt-6 group select-none flex items-center justify-center">
          {/* Card 1: Left */}
          <div className="absolute top-2 left-[5%] md:left-[12%] bg-white p-2.5 pb-1 -rotate-12 shadow-xl rounded-xl border border-zinc-200/70 overflow-hidden transition-all duration-500 ease-out group-hover:-rotate-8 group-hover:-translate-x-3 group-hover:scale-105 z-10 hover:!z-40 cursor-pointer">
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
          <div className="absolute top-0 md:top-2 bg-white p-2.5 pb-1 -rotate-2 shadow-2xl rounded-xl border border-zinc-200/70 overflow-hidden transition-all duration-500 ease-out group-hover:rotate-0 group-hover:-translate-y-2 group-hover:scale-110 z-30 hover:!z-40 cursor-pointer">
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
          <div className="absolute top-6 right-[5%] md:right-[12%] bg-white p-2.5 pb-1 rotate-12 shadow-xl rounded-xl border border-zinc-200/70 overflow-hidden transition-all duration-500 ease-out group-hover:rotate-8 group-hover:translate-x-3 group-hover:scale-105 z-20 hover:!z-40 cursor-pointer">
            <div className="w-[150px] h-[150px] md:w-[185px] md:h-[185px] overflow-hidden rounded-lg bg-zinc-100">
              <img
                src="/temilade-shades.jpg"
                alt="Temilade Atunde"
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-110"
              />
            </div>
            <span className="text-xs flex justify-center py-2 italic text-zinc-800 font-medium tracking-tight">
              @Temicode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
