import React from 'react';
import { experiences } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export const Experience = () => {
  return (
    <div id="experience" className="w-full max-w-[53rem] flex flex-col px-[1.5rem] md:px-[6rem] items-center">
      <div className="w-full pt-[40px] md:pt-[20px] flex flex-col items-start">
        {/* Top divider */}
        <div className="flex w-full h-[1px] bg-zinc-200/80 mb-[35px] md:mb-[45px]"></div>

        <div className="flex items-center justify-between w-full mb-[24px]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-50/80 text-purple-700 border border-purple-200/60 mb-2 backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Journey & Experience</span>
            </div>
            <h2 className="text-[24px] md:text-[30px] font-bold tracking-[-0.03em] leading-[110%] text-zinc-950">
              Education & Milestones
            </h2>
          </div>
        </div>

        {/* Redeemer's University Milestone Banner */}
        <div className="w-full p-4 md:p-5 rounded-2xl bg-gradient-to-r from-purple-50/80 via-blue-50/60 to-indigo-50/70 backdrop-blur-md border border-purple-200/70 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-sm flex-shrink-0 mt-0.5 sm:mt-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm md:text-base font-bold text-zinc-950">
                  Redeemer's University (RUN)
                </h3>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-purple-600 text-white shadow-2xs">
                  Class of 2030
                </span>
              </div>
              <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                Admitted in <strong>2026</strong> · 4-Year B.Sc. Computer Science program studying computational theory, algorithms, and practical software engineering.
              </p>
            </div>
          </div>
          <div className="text-right flex-shrink-0 self-end sm:self-center">
            <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-white/90 border border-purple-200 text-purple-900 shadow-2xs backdrop-blur-sm">
              2026 – 2030 (Expected)
            </span>
          </div>
        </div>

        {/* Timeline rows */}
        <div className="flex flex-col gap-3.5 w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/75 hover:bg-white/95 backdrop-blur-md border border-zinc-200/70 hover:border-zinc-300 transition-all duration-200 shadow-2xs flex flex-col gap-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                {/* Role & Company Tag */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[15px] md:text-[16px] text-zinc-950 font-bold">
                    {exp.role}
                  </span>
                  <span className="text-[#8F8F8F] text-xs">at</span>
                  <div className="flex items-center gap-1.5 bg-[#EEF4FF] text-[#2563EB] px-2.5 py-0.5 rounded-md text-xs font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    <span>{exp.company}</span>
                  </div>

                  {exp.type === 'collaboration' && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Open Source
                    </span>
                  )}
                  {exp.type === 'founder' && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Projects Lab
                    </span>
                  )}
                  {exp.type === 'education' && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                      Undergraduate
                    </span>
                  )}
                </div>

                {/* Period */}
                <div className="text-zinc-500 font-mono text-xs">
                  {exp.period}
                </div>
              </div>

              {exp.description && (
                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed pl-0.5">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="flex w-full h-[1px] bg-zinc-200/80 my-[35px] md:my-[45px]"></div>
      </div>
    </div>
  );
};
