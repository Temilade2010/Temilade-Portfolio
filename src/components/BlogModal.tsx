import React from 'react';
import { X, Calendar, Clock } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const articles = [
    {
      title: 'Architecting Cross-Platform Mobile Apps with Flutter & Appwrite',
      date: 'Jan 20, 2026',
      readTime: '5 min read',
      tag: 'Flutter Mobile Engineering',
      summary:
        'Building high-performance cross-platform mobile apps with Flutter, Dart, and Appwrite real-time cloud data synchronization.',
    },
    {
      title: 'TypeScript as a Superpower: Beyond Basic Types',
      date: 'Dec 14, 2025',
      readTime: '7 min read',
      tag: 'TypeScript & Architecture',
      summary:
        'Deep dive into conditional types, template literals, and building bulletproof software foundations with type safety.',
    },
    {
      title: 'Turning Creative Ideas into Clean, Maintainable Code',
      date: 'Oct 02, 2025',
      readTime: '4 min read',
      tag: 'Software Craftsmanship',
      summary:
        'Lessons learned from launching Temicode projects, solving tricky UX challenges, and shipping user-first experiences.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in-up">
      <div className="bg-white rounded-[24px] max-w-xl w-full p-6 md:p-8 shadow-2xl border border-zinc-200 relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div>
            <h3 className="text-2xl font-bold text-black tracking-tight">Temilade's Engineering Journal</h3>
            <p className="text-sm text-[#5a5a5a] mt-0.5">Thoughts on fullstack development, mobile architecture, and clean code</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col divide-y divide-zinc-100 mt-4">
          {articles.map((art, idx) => (
            <article key={idx} className="py-5 first:pt-2 last:pb-2 group">
              <div className="flex items-center gap-3 text-xs text-[#8F8F8F] mb-1.5 font-medium">
                <span className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-700">{art.tag}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {art.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {art.readTime}
                </span>
              </div>
              <h4 className="text-[17px] font-semibold text-black group-hover:text-blue-600 transition-colors">
                {art.title}
              </h4>
              <p className="text-sm text-[#5a5a5a] leading-relaxed mt-1">
                {art.summary}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-between items-center">
          <span className="text-xs text-zinc-400">Written by Temilade Atunde</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-black text-white text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
