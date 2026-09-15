import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {

  return (
    <div className="w-full max-w-[53rem] flex flex-col px-[1.5rem] md:px-[6rem] items-center">
      <div className="w-full pt-[60px] md:pt-0 flex flex-col items-start">
        {/* Top divider */}
        <div className="flex w-full h-[1px] bg-[#E5E5E5] mb-[40px] md:mb-[60px]"></div>

        <h2 className="text-[24px] md:text-[28px] font-bold tracking-[-0.03em] leading-[110%] text-black mb-[36px]">
          Work Experience
        </h2>

        {/* Timeline rows */}
        <div className="flex flex-col gap-[28px] w-full">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row gap-[12px] md:gap-0 md:items-center md:justify-between py-2 border-b border-zinc-100 last:border-0 hover:translate-x-1 transition-transform duration-200"
            >
              {/* Period */}
              <div className="text-[#8F8F8F] font-medium text-[13px] md:text-[14px]">
                {exp.period}
              </div>

              {/* Role & Company Tag */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="text-[15px] md:text-[16px] text-zinc-900 font-medium">
                  {exp.role} <span className="text-[#5a5a5a] font-normal">at</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#EEF4FF] text-[#2563EB] px-3 py-1 rounded-md text-[13px] md:text-[14px] font-medium shadow-sm hover:bg-[#dbeafe] transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] flex items-center justify-center">
                    <svg width="6" height="6" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 0L9.33013 2.5V7.5L5 10L0.669873 7.5V2.5L5 0Z" fill="white" />
                    </svg>
                  </div>
                  <span>{exp.company}</span>
                </div>
                {exp.type === 'collaboration' && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Collaboration
                  </span>
                )}
                {exp.type === 'internship' && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    Internship
                  </span>
                )}
                {exp.type === 'education' && (
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
                    Education
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="flex w-full h-[1px] bg-[#E5E5E5] my-[40px] md:my-[60px]"></div>
      </div>
    </div>
  );
};
