import React, { useState } from 'react';
import { ChevronRight, ExternalLink, X } from 'lucide-react';
import { projects, type ProjectItem } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="w-full max-w-[53rem] flex flex-col pt-[58px] px-[1.5rem] items-center gap-[25px]">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-[28px] md:text-[34px] text-center font-bold tracking-[-0.03em] leading-[110%] text-black">
          Here's What I've Been Up To.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full rounded-[24px] overflow-hidden card-inset-border bg-white group flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="p-4 md:p-5">
                <div className="relative w-full h-[210px] md:h-[220px] rounded-[18px] overflow-hidden border border-black/5 bg-zinc-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 md:px-7 pb-2">
                <h3 className="text-[22px] md:text-[24px] font-semibold text-black tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-[#5a5a5a] text-[15px] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-6 md:px-7 pb-6 pt-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#f4f4f5] hover:bg-[#e4e4e7] active:scale-[0.98] flex items-center justify-between rounded-[14px] px-[22px] py-[13px] text-[15px] font-medium text-black transition-all duration-300 w-full sm:w-auto"
              >
                <span className="group-hover:pr-1 transition-all duration-300">
                  View Project
                </span>
                <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        ))}

        {/* View All Button */}
        <div className="col-span-2 w-full pt-2 flex justify-center">
          <a
            href="https://github.com/Temilade2010"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="bg-black hover:bg-zinc-800 active:scale-95 flex items-center rounded-[14px] px-[26px] py-[14px] text-[15px] font-medium text-white transition-all duration-300 shadow-sm">
              <span className="group-hover:pr-1 transition-all duration-300">View All On GitHub</span>
              <ChevronRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-[24px] max-w-lg w-full overflow-hidden shadow-2xl border border-zinc-200">
            <div className="relative w-full h-[240px] bg-zinc-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black p-2 rounded-full backdrop-blur-md shadow-md transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-black mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-[#5a5a5a] text-base leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 text-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-[12px] text-zinc-600 font-medium hover:bg-zinc-100 transition-all text-sm"
                >
                  Close
                </button>
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-5 py-2.5 rounded-[12px] font-medium text-sm transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
