import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Code, Briefcase, User, Sparkles, FileText } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onSelectSlide }) {
  const [query, setQuery] = useState('');

  const searchableItems = [
    { title: 'Chaithanya C', category: 'Profile', desc: 'Full Stack Engineer & Visionary Designer', slideIndex: 0, icon: User },
    { title: 'Steve Jobs Edition', category: 'Replica', desc: 'Exact inspiration recreation & editorial styling', slideIndex: 1, icon: Sparkles },
    { title: 'Harper Bams', category: 'Project', desc: 'Editorial design system & typography exploration', slideIndex: 2, icon: Briefcase },
    { title: 'Sequence Shifter', category: 'Project', desc: 'Interactive gesture & spring physics engine', slideIndex: 3, icon: Code },
    { title: 'Full Stack Skills', category: 'Skills', desc: 'React, Next.js, TypeScript, Tailwind, Node.js, Python', slideIndex: 0, icon: Code },
    { title: 'Resume & Curriculum Vitae', category: 'Document', desc: 'Download Chaithanya C professional resume', slideIndex: 0, icon: FileText },
  ];

  const filtered = searchableItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-[#faf9f6] rounded-2xl shadow-2xl border border-black/10 overflow-hidden z-10"
        >
          {/* Search Header */}
          <div className="p-4 sm:p-6 border-b border-black/5 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#8e8c85]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, biography, works..."
              className="flex-1 bg-transparent border-none outline-none text-base sm:text-lg text-[#191919] placeholder:text-[#8e8c85]/70 font-sans"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-xs text-[#8e8c85] hover:text-[#191919]"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-black/5 text-[#8e8c85] hover:text-[#191919] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="p-3 sm:p-4 max-h-[60vh] overflow-y-auto no-scrollbar space-y-2">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-[#8e8c85]">
                <p className="text-sm">No results found for "{query}"</p>
              </div>
            ) : (
              filtered.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      onSelectSlide(item.slideIndex);
                      onClose();
                    }}
                    className="w-full text-left p-3 rounded-xl hover:bg-black/5 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center text-[#191919]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#191919] font-sans">
                            {item.title}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/5 text-[#8e8c85]">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#8e8c85] line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8e8c85] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Keyboard navigation footer hint */}
          <div className="px-4 py-2.5 bg-black/[0.02] border-t border-black/5 flex items-center justify-between text-[11px] text-[#8e8c85]">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono">ESC</kbd> to exit</span>
            <span>Navigate with mouse or keyboard</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
