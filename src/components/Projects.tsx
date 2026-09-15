import React, { useState } from 'react';
import { ChevronRight, ExternalLink, X, Sparkles, Compass, CheckCircle2, Clock } from 'lucide-react';
import { projects, type ProjectItem } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'shipped' | 'planned'>('shipped');

  const shippedProjects = projects.filter((p) => !p.isPlanned);
  const plannedProjects = projects.filter((p) => p.isPlanned);

  const displayedProjects = activeTab === 'shipped' ? shippedProjects : plannedProjects;

  const handleTabSwitch = (tab: 'shipped' | 'planned') => {
    sounds.playClick();
    setActiveTab(tab);
  };

  const handleOpenProject = (project: ProjectItem) => {
    sounds.playPop();
    setSelectedProject(project);
  };

  return (
    <div id="projects" className="w-full max-w-[53rem] flex flex-col pt-12 px-6 md:px-24 items-center gap-6">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-800 border border-zinc-200">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Work & Innovations</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-950">
          {activeTab === 'shipped' ? "Here's What I've Built & Shipped." : "Cool Projects In The Pipeline."}
        </h2>
        <p className="text-sm text-zinc-500 max-w-md">
          {activeTab === 'shipped'
            ? 'Open source contributions, native mobile apps, and scalable web platforms.'
            : 'Upcoming architectures, systems engineering concepts, and developer tools in progress.'}
        </p>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 bg-zinc-100 rounded-2xl border border-zinc-200/80 mt-3 shadow-inner">
          <button
            onClick={() => handleTabSwitch('shipped')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'shipped'
                ? 'bg-white text-zinc-950 shadow-sm border border-zinc-200/60'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Active & Shipped ({shippedProjects.length})</span>
          </button>
          <button
            onClick={() => handleTabSwitch('planned')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              activeTab === 'planned'
                ? 'bg-white text-zinc-950 shadow-sm border border-zinc-200/60'
                : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Planned Roadmap ({plannedProjects.length})</span>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-2">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="w-full rounded-[24px] overflow-hidden bg-white border border-zinc-200/80 hover:border-zinc-300 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
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

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {project.isPlanned ? (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/95 text-indigo-700 backdrop-blur-md shadow-sm border border-indigo-100 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                        {project.status || 'Planned'}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white/95 text-emerald-700 backdrop-blur-md shadow-sm border border-emerald-100 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {project.status || 'Live'}
                      </span>
                    )}
                  </div>

                  {project.plannedTimeline && (
                    <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md rounded-xl px-3 py-1.5 text-[11px] text-zinc-200 flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{project.plannedTimeline}</span>
                    </div>
                  )}
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
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 text-zinc-700 border border-zinc-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium text-zinc-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="px-6 pb-5 pt-3">
              <button
                onClick={() => handleOpenProject(project)}
                className="bg-zinc-100 hover:bg-zinc-200 active:scale-[0.98] flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-200 w-full"
              >
                <span>{project.isPlanned ? 'Inspect Blueprint & Specs' : 'View Project Details'}</span>
                <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
          onClick={() => sounds.playClick()}
        >
          <button className="bg-zinc-950 hover:bg-zinc-800 active:scale-95 flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all shadow-sm">
            <span className="group-hover:pr-1 transition-all">Explore All Repositories on GitHub</span>
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-up">
          <div className="bg-white rounded-[24px] max-w-xl w-full overflow-hidden shadow-2xl border border-zinc-200 max-h-[90vh] flex flex-col">
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
                <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-semibold mb-1 ${
                  selectedProject.isPlanned
                    ? 'bg-indigo-600 text-white'
                    : 'bg-emerald-600 text-white'
                }`}>
                  {selectedProject.isPlanned ? 'Roadmap Concept' : 'Shipped Project'}
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

              {selectedProject.plannedTimeline && (
                <div className="p-3 bg-indigo-50/80 rounded-xl border border-indigo-100 flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <div className="text-xs text-indigo-950">
                    <span className="font-semibold">Release Horizon: </span>
                    {selectedProject.plannedTimeline}
                  </div>
                </div>
              )}

              {selectedProject.architectureHighlights && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Key Architecture & Features
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.architectureHighlights.map((item, idx) => (
                      <li key={idx} className="text-xs md:text-sm text-zinc-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
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

            <div className="p-5 border-t border-zinc-100 flex justify-end gap-2.5 bg-zinc-50/50 flex-shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl text-zinc-600 font-medium hover:bg-zinc-200/60 transition-all text-sm"
              >
                Close
              </button>
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-zinc-950 hover:bg-zinc-800 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all shadow-sm"
                  onClick={() => sounds.playClick()}
                >
                  <span>Visit Code / Repo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
