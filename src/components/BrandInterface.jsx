import React from 'react';

export const BrandInterface = () => {
  return (
    <div className="w-full max-w-[53rem] px-6 md:px-24 my-6">
      {/* Clean Single Design Interface Card */}
      <div className="w-full rounded-[24px] bg-white/75 backdrop-blur-xl border border-zinc-200/80 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-zinc-300 transition-all duration-300">
        {/* Top Minimal Window Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-300"></span>
            <span className="ml-2 font-mono text-xs text-zinc-400">developer.temilade</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>online</span>
          </div>
        </div>

        {/* Center Main Design Element: M<temilade/> */}
        <div className="py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Clean Monogram Orb 'M' */}
            <div className="w-13 h-13 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-mono font-bold text-2xl md:text-3xl shadow-md shadow-blue-500/20 ring-1 ring-white/50">
              M
            </div>

            <div>
              <div className="font-mono text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 flex items-center">
                <span className="text-blue-500 font-bold mr-0.5">&lt;</span>
                <span>temilade</span>
                <span className="text-pink-500 font-bold ml-0.5">/&gt;</span>
              </div>
              <p className="text-xs md:text-sm text-zinc-500 mt-1 font-medium">
                Software Engineer · Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Quick Focus Tags */}
          <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-zinc-500">
            <span className="px-3 py-1 rounded-lg bg-zinc-100/80 border border-zinc-200/50">
              React Native & Mobile
            </span>
            <span className="px-3 py-1 rounded-lg bg-zinc-100/80 border border-zinc-200/50">
              React & JavaScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandInterface;
