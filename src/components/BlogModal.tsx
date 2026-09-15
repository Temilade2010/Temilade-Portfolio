import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Calendar,
  Clock,
  Search,
  ArrowLeft,
  Heart,
  Bookmark,
  Share2,
  Check,
  Sparkles,
  BookOpen,
  MessageSquare,
  Send,
  Code2
} from 'lucide-react';
import { blogArticles, type BlogArticle } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommentItem {
  id: string;
  articleId: string;
  author: string;
  text: string;
  timestamp: string;
}

export const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose }) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [clapsMap, setClapsMap] = useState<Record<string, number>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [codeCopiedIndex, setCodeCopiedIndex] = useState<number | null>(null);
  const [readProgress, setReadProgress] = useState(0);

  // Quick comments
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize from LocalStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedClaps = localStorage.getItem('temilade_blog_claps');
      if (savedClaps) {
        setClapsMap(JSON.parse(savedClaps));
      } else {
        const initialClaps: Record<string, number> = {};
        blogArticles.forEach((a) => {
          initialClaps[a.id] = a.claps;
        });
        setClapsMap(initialClaps);
      }

      const savedBookmarks = localStorage.getItem('temilade_blog_bookmarks');
      if (savedBookmarks) {
        setBookmarkedIds(JSON.parse(savedBookmarks));
      }

      const savedComments = localStorage.getItem('temilade_blog_comments');
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      } else {
        setComments([
          {
            id: 'c1',
            articleId: 'flutter-appwrite-architecture',
            author: 'Alex M.',
            text: 'The Riverpod pattern with Appwrite realtime is super clean! Thanks for sharing this.',
            timestamp: '3 days ago',
          },
          {
            id: 'c2',
            articleId: 'redeemers-university-journey',
            author: 'RUN Colleague',
            text: 'Proud to see a Redeemer’s University student pushing high engineering standards!',
            timestamp: '1 week ago',
          },
        ]);
      }
    } catch {
      // LocalStorage access error
    }
  }, []);

  // Handle Scroll Progress for Reader
  const handleScroll = () => {
    if (!scrollRef.current || !selectedArticle) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const progress = Math.min(100, Math.max(0, (scrollTop / (scrollHeight - clientHeight)) * 100));
    setReadProgress(progress);
  };

  if (!isOpen) return null;

  // Filter articles
  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBookmark = !showOnlyBookmarked || bookmarkedIds.includes(article.id);

    return matchesCategory && matchesSearch && matchesBookmark;
  });

  const handleClap = (articleId: string) => {
    sounds.playClap();
    setClapsMap((prev) => {
      const next = { ...prev, [articleId]: (prev[articleId] || 0) + 1 };
      localStorage.setItem('temilade_blog_claps', JSON.stringify(next));
      return next;
    });
  };

  const toggleBookmark = (articleId: string) => {
    sounds.playPop();
    setBookmarkedIds((prev) => {
      const exists = prev.includes(articleId);
      const next = exists ? prev.filter((id) => id !== articleId) : [...prev, articleId];
      localStorage.setItem('temilade_blog_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const handleShare = (article: BlogArticle) => {
    sounds.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${window.location.origin}?article=${article.slug} - "${article.title}" by Temilade Atunde`
      );
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2400);
    }
  };

  const handleCopyCode = (code: string, index: number) => {
    sounds.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCodeCopiedIndex(index);
      setTimeout(() => setCodeCopiedIndex(null), 2000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArticle || !commentText.trim()) return;

    sounds.playPop();
    const newComment: CommentItem = {
      id: Date.now().toString(),
      articleId: selectedArticle.id,
      author: commentAuthor.trim() || 'Fellow Developer',
      text: commentText.trim(),
      timestamp: 'Just now',
    };

    const nextComments = [newComment, ...comments];
    setComments(nextComments);
    localStorage.setItem('temilade_blog_comments', JSON.stringify(nextComments));
    setCommentText('');
  };

  const activeComments = selectedArticle
    ? comments.filter((c) => c.articleId === selectedArticle.id)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/70 backdrop-blur-md animate-fade-in-up">
      {/* Toast Notification */}
      {copiedNotification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] bg-zinc-950 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-2xl flex items-center gap-2 border border-zinc-800 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Article link copied to clipboard!</span>
        </div>
      )}

      <div className="bg-white rounded-[24px] max-w-2xl w-full shadow-2xl border border-zinc-200 relative max-h-[92vh] flex flex-col overflow-hidden">
        {/* Reading Progress Line */}
        {selectedArticle && (
          <div className="h-1 w-full bg-zinc-100 relative">
            <div
              className="h-full bg-blue-600 transition-all duration-150"
              style={{ width: `${readProgress}%` }}
            ></div>
          </div>
        )}

        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-white/90 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2">
            {selectedArticle ? (
              <button
                onClick={() => {
                  sounds.playClick();
                  setSelectedArticle(null);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold transition-all mr-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>All Articles</span>
              </button>
            ) : (
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <BookOpen className="w-5 h-5" />
              </div>
            )}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-zinc-950 tracking-tight leading-none">
                {selectedArticle ? selectedArticle.category : "Temilade's Engineering Journal"}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                {selectedArticle
                  ? `${selectedArticle.readTime} · ${selectedArticle.date}`
                  : 'Thoughts on mobile engineering, systems architectures & university life'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {selectedArticle && (
              <>
                <button
                  onClick={() => toggleBookmark(selectedArticle.id)}
                  className={`p-2 rounded-xl border transition-all ${
                    bookmarkedIds.includes(selectedArticle.id)
                      ? 'bg-amber-50 border-amber-200 text-amber-600'
                      : 'border-zinc-200 text-zinc-500 hover:bg-zinc-100'
                  }`}
                  title="Bookmark"
                >
                  <Bookmark className="w-4 h-4 fill-current" />
                </button>
                <button
                  onClick={() => handleShare(selectedArticle)}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-500 hover:bg-zinc-100 transition-all"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </>
            )}

            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-xl transition-all ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-y-auto flex-1 p-6 md:p-8"
        >
          {selectedArticle ? (
            /* =========================================================
               READER VIEW
               ========================================================= */
            <article className="max-w-prose mx-auto flex flex-col gap-6">
              {/* Article Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                    {selectedArticle.tag}
                  </span>
                  <span className="text-xs text-zinc-400">·</span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
                  </span>
                  <span className="text-xs text-zinc-400">·</span>
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight leading-snug">
                  {selectedArticle.title}
                </h1>
              </div>

              {/* Key Takeaways Box */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Key Architectural Takeaways</span>
                </div>
                <ul className="space-y-1.5 text-xs md:text-sm text-zinc-700">
                  {selectedArticle.takeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Intro Body */}
              <p className="text-base text-zinc-700 leading-relaxed font-normal">
                {selectedArticle.content.intro}
              </p>

              {/* Sections */}
              {selectedArticle.content.sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 tracking-tight">
                    {section.heading}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-700 leading-relaxed">
                    {section.body}
                  </p>

                  {/* Code Snippet */}
                  {section.codeSnippet && (
                    <div className="my-2 rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117] text-zinc-100 shadow-md">
                      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-zinc-800 text-xs text-zinc-400 font-mono">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-3.5 h-3.5 text-blue-400" />
                          <span>{section.codeSnippet.language}</span>
                        </div>
                        <button
                          onClick={() => handleCopyCode(section.codeSnippet!.code, idx)}
                          className="flex items-center gap-1 hover:text-white px-2 py-0.5 rounded bg-zinc-800/80 transition-colors"
                        >
                          {codeCopiedIndex === idx ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied!</span>
                            </>
                          ) : (
                            <span>Copy</span>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs md:text-sm font-mono overflow-x-auto text-emerald-300 leading-relaxed">
                        <code>{section.codeSnippet.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-sm text-zinc-800 leading-relaxed">
                <span className="font-semibold text-blue-900">Summary: </span>
                {selectedArticle.content.conclusion}
              </div>

              {/* Claps & Feedback Bar */}
              <div className="flex items-center justify-between py-5 border-y border-zinc-200 my-2">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleClap(selectedArticle.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-sm font-bold transition-all active:scale-95 shadow-sm"
                  >
                    <Heart className="w-4 h-4 fill-current animate-pulse" />
                    <span>{clapsMap[selectedArticle.id] || selectedArticle.claps} Claps</span>
                  </button>
                  <span className="text-xs text-zinc-400">Tap to applaud</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-500 font-medium">
                    Temilade Atunde · RUN '30
                  </span>
                </div>
              </div>

              {/* Comments / Quick Thoughts Section */}
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-zinc-600" />
                  <h4 className="text-sm font-bold text-zinc-900">
                    Thoughts & Discussion ({activeComments.length})
                  </h4>
                </div>

                {/* Comment Form */}
                <form onSubmit={handleAddComment} className="flex flex-col gap-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Your name (optional)"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      className="px-3 py-2 rounded-xl border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    />
                    <input
                      type="text"
                      placeholder="Leave a quick note or question..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      required
                      className="sm:col-span-2 px-3 py-2 rounded-xl border border-zinc-200 text-xs bg-zinc-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                    >
                      <span>Post Note</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                </form>

                {/* Comment List */}
                <div className="space-y-2 mt-2">
                  {activeComments.length === 0 ? (
                    <p className="text-xs text-zinc-400 italic">No notes yet. Be the first to chime in!</p>
                  ) : (
                    activeComments.map((c) => (
                      <div key={c.id} className="p-3 rounded-xl bg-zinc-50 border border-zinc-100 flex flex-col gap-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-semibold text-zinc-800">{c.author}</span>
                          <span className="text-zinc-400">{c.timestamp}</span>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{c.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </article>
          ) : (
            /* =========================================================
               ARTICLE LIST DIRECTORY VIEW
               ========================================================= */
            <div className="flex flex-col gap-5">
              {/* Search Bar & Bookmarks Toggle */}
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by keyword, topic, or tech..."
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-zinc-200 text-xs md:text-sm bg-zinc-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setShowOnlyBookmarked(!showOnlyBookmarked);
                  }}
                  className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all ${
                    showOnlyBookmarked
                      ? 'bg-amber-50 border-amber-200 text-amber-700'
                      : 'border-zinc-200 text-zinc-600 hover:bg-zinc-100'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                  <span>Saved ({bookmarkedIds.length})</span>
                </button>
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {['All', 'Flutter', 'TypeScript', 'Systems', 'Education'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-zinc-900 text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Article Cards */}
              <div className="flex flex-col divide-y divide-zinc-100 mt-1">
                {filteredArticles.length === 0 ? (
                  <div className="py-12 text-center text-zinc-400 flex flex-col items-center gap-2">
                    <BookOpen className="w-8 h-8 opacity-40" />
                    <p className="text-sm">No articles found matching your query.</p>
                  </div>
                ) : (
                  filteredArticles.map((art) => (
                    <article
                      key={art.id}
                      onClick={() => {
                        sounds.playPop();
                        setSelectedArticle(art);
                      }}
                      className="py-4 group cursor-pointer hover:bg-zinc-50/80 -mx-3 px-3 rounded-2xl transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
                          <span className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-semibold text-[10px]">
                            {art.tag}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {art.date}
                          </span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {art.readTime}
                          </span>
                        </div>

                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleBookmark(art.id)}
                            className={`p-1 rounded-md transition-colors ${
                              bookmarkedIds.includes(art.id)
                                ? 'text-amber-500'
                                : 'text-zinc-300 hover:text-zinc-600'
                            }`}
                            title="Bookmark"
                          >
                            <Bookmark className="w-3.5 h-3.5 fill-current" />
                          </button>
                        </div>
                      </div>

                      <h4 className="text-base md:text-lg font-bold text-zinc-950 group-hover:text-blue-600 transition-colors leading-snug">
                        {art.title}
                      </h4>

                      <p className="text-xs md:text-sm text-zinc-500 leading-relaxed mt-1 line-clamp-2">
                        {art.summary}
                      </p>

                      <div className="flex items-center justify-between mt-3 text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                          <span>{clapsMap[art.id] || art.claps} claps</span>
                        </div>
                        <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                          Read full article &rarr;
                        </span>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-zinc-100 bg-zinc-50/50 flex justify-between items-center text-xs text-zinc-400 z-10">
          <span>Temilade Atunde · Redeemer's University '30</span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-1.5 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
