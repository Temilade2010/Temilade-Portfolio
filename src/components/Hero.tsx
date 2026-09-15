import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headingWords = ["Hey,", "I'm", "Temilade", "Atunde."];
  const roleWords = ["Software", "Engineer"];

  return (
    <div className="w-full max-w-[53rem] flex flex-col pt-[140px] md:pt-[188px] pb-[2rem] md:pb-[3rem] px-[1.5rem] md:px-[6rem] items-start gap-[25px]">
      {/* Profile Picture */}
      <div 
        className={`transition-all duration-700 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="relative group">
          <img
            src="/temilade-profile.jpg"
            alt="Temilade Atunde Profile"
            className="w-[90px] h-[90px] md:w-[104px] md:h-[104px] rounded-full object-cover aspect-square ring-2 ring-black/5 shadow-lg transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none"></div>
        </div>
      </div>

      {/* Main Headings */}
      <div className="text-start">
        <h1 className="text-[30px] md:text-[44px] font-bold tracking-[-0.03em] leading-[110%] text-black text-start mb-2">
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

        <h2 className="text-[30px] md:text-[44px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-900 text-start">
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

        {/* Subtitle */}
        <p 
          className={`text-[16px] text-[#5a5a5a] text-start mt-[25px] leading-relaxed transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Software Engineer passionate about building reliable, user-focused software.<br />
          Coding since 2023 · Computer Science at Redeemer's University ('26) · Flutter · Java · C++ · C# · Go · Node.js · Python.
        </p>
      </div>
    </div>
  );
};
