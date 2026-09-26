import React, { useState } from 'react';
import { ExternalLink, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="w-full max-w-[53rem] flex flex-col pt-10 px-6 md:px-24 items-center gap-6">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100/80 text-zinc-800 border border-zinc-200/80 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Featured Projects</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-950">
          Projects & Live Demos
        </h2>
        <p className="text-sm text-zinc-500 max-w-md">
          Real apps, mobile builds, and open-source contributions. Explore the source code on GitHub or try the live demo.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card-3d-hover w-full rounded-[24px] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/80 hover:border-zinc-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative before:absolute before:inset-x-0 before:top-0 before:h-[1.5px] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:z-10 group flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="p-4">
                <div className="relative w-full h-[200px] md:h-[210px] rounded-[18px] overflow-hidden border border-black/5 bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/95 text-emerald-700 backdrop-blur-md shadow-sm border border-emerald-100 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      {project.status || 'Live'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-2">
                <h3 className="text-xl font-bold text-zinc-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags preview */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100/80 text-zinc-700 border border-zinc-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct GitHub & Live Demo Action Buttons */}
            <div className="px-6 pb-5 pt-4 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200/80 active:scale-[0.98] text-xs md:text-sm font-semibold text-zinc-900 border border-zinc-200/60 transition-all shadow-2xs"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                </a>

                {/* Live Demo Link */}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 active:scale-[0.98] text-xs md:text-sm font-semibold text-white transition-all shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* View Highlights details button */}
              <button
                onClick={() => handleOpenProject(project)}
                className="w-full text-center py-1.5 text-xs text-zinc-500 hover:text-zinc-800 font-medium transition-colors"
              >
                Inspect details & highlights
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="w-full pt-4 flex justify-center">
        <a
          href="https://github.com/Temilade2010"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <button className="bg-zinc-950 hover:bg-zinc-800 active:scale-95 flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all shadow-sm">
            <span>Explore All Repositories on GitHub</span>
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white/95 backdrop-blur-xl rounded-[24px] max-w-xl w-full overflow-hidden shadow-2xl border border-zinc-200 max-h-[90vh] flex flex-col">
            <div className="relative w-full h-[220px] bg-zinc-100 flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-zinc-800 p-2 rounded-full backdrop-blur-md shadow-md transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-1 bg-emerald-600 text-white">
                  {selectedProject.status || 'Active Project'}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  Overview
                </h4>
                <p className="text-zinc-700 text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Key Features & Architecture
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-zinc-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/70 flex-shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-zinc-600 font-medium hover:bg-zinc-200/60 transition-all text-sm"
              >
                Close
              </button>
              
              <div className="flex items-center gap-2">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 px-4 py-2 rounded-xl font-semibold text-sm transition-all border border-zinc-200/80 shadow-2xs"
                >
                  <span>GitHub</span>
                </a>
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
