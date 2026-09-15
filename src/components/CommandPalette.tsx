import React, { useState, useEffect } from 'react';
import {
  Search,
  BookOpen,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Volume2,
  VolumeX,
  ExternalLink,
  Check,
  X
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBlog: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenBlog,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(sounds.isEnabled());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sounds.playPop();
        if (isOpen) {
          onClose();
        } else {
          // Open
          // Triggered by parent or props
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    sounds.playPop();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1500);
    }
  };

  const handleToggleSound = () => {
    const next = sounds.toggle();
    setSoundEnabled(next);
  };

  const actions = [
    {
      id: 'blog',
      title: 'Open Engineering Blog',
      desc: 'Read deep-dives on Flutter, TypeScript, C++, & Redeemer’s University',
      icon: <BookOpen className="w-4 h-4 text-blue-500" />,
      run: () => {
        onClose();
        onOpenBlog();
      },
    },
    {
      id: 'projects',
      title: 'View Projects & Roadmap',
      desc: 'Explore shipped platforms and upcoming architectures',
      icon: <FolderGit2 className="w-4 h-4 text-emerald-500" />,
      run: () => {
        onClose();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'stack',
      title: 'Explore Tech Stack',
      desc: 'Flutter, Go, Java, C++, C#, TypeScript, Node.js, Python',
      icon: <Cpu className="w-4 h-4 text-purple-500" />,
      run: () => {
        onClose();
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'experience',
      title: 'Education & Experience',
      desc: "Redeemer’s University '30, ScholeOs, Temicode",
      icon: <GraduationCap className="w-4 h-4 text-amber-500" />,
      run: () => {
        onClose();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      id: 'email',
      title: copied ? 'Email Copied!' : 'Copy Email Address',
      desc: personalInfo.email,
      icon: copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4 text-rose-500" />,
      run: handleCopyEmail,
    },
    {
      id: 'sound',
      title: soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects',
      desc: soundEnabled ? 'Mechanical click sounds are on' : 'Enable subtle UI audio feedback',
      icon: soundEnabled ? <Volume2 className="w-4 h-4 text-blue-500" /> : <VolumeX className="w-4 h-4 text-zinc-400" />,
      run: handleToggleSound,
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      desc: '@Temilade2010',
      icon: <ExternalLink className="w-4 h-4 text-zinc-500" />,
      run: () => {
        window.open(personalInfo.github, '_blank');
        onClose();
      },
    },
    {
      id: 'twitter',
      title: 'Open Twitter / X',
      desc: '@honour_can_code',
      icon: <ExternalLink className="w-4 h-4 text-zinc-500" />,
      run: () => {
        window.open(personalInfo.twitter, '_blank');
        onClose();
      },
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-zinc-200 overflow-hidden flex flex-col">
        {/* Search header */}
        <div className="flex items-center px-4 py-3 border-b border-zinc-100 gap-3 bg-zinc-50/50">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
          />
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-1 rounded-lg text-zinc-400 hover:text-zinc-800 hover:bg-zinc-200/50 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-50">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-400">
              No matching actions found.
            </div>
          ) : (
            filtered.map((action) => (
              <button
                key={action.id}
                onClick={() => {
                  sounds.playClick();
                  action.run();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-zinc-100 group-hover:bg-white border border-zinc-200/60 shadow-2xs">
                    {action.icon}
                  </div>
                  <div>
                    <div className="text-xs md:text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                      {action.title}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {action.desc}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>Navigation Quick Launcher</span>
          <div className="flex items-center gap-2">
            <span>ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
