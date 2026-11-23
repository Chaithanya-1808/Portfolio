import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Sparkles, ExternalLink, Mail } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, currentSlide }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#faf9f6] text-[#191919] rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center text-[#191919] shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header & Hero Banner */}
          <div className="relative bg-[#f4f2ee] p-6 sm:p-10 border-b border-black/5 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-lg border border-black/10 bg-white flex-shrink-0">
              <img
                src={currentSlide.image}
                alt={currentSlide.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="font-editorial-serif text-sm font-bold text-[#8e8c85]">
                  {currentSlide.id} / 04
                </span>
                <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/5 text-[#8e8c85]">
                  {currentSlide.category}
                </span>
              </div>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl font-extrabold text-[#191919] tracking-tight">
                {currentSlide.name}
              </h2>
              <p className="font-editorial-sub text-lg sm:text-xl text-[#8e8c85] mt-1">
                "{currentSlide.tagline}"
              </p>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-10 space-y-8 max-h-[60vh] overflow-y-auto no-scrollbar">
            
            {/* Overview / Story Excerpt */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#8e8c85] mb-2">
                Executive Story
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#191919]/90 font-sans">
                {currentSlide.excerpt}
              </p>
            </div>

            {/* Stats Grid */}
            {currentSlide.stats && (
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#8e8c85] mb-3">
                  Highlights & Impact
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {currentSlide.stats.map((stat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm">
                      <div className="font-editorial-serif text-lg sm:text-xl font-bold text-[#191919]">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#8e8c85] mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Capabilities */}
            {currentSlide.skills && (
              <div>
                <h3 className="text-xs uppercase tracking-widest font-bold text-[#8e8c85] mb-3">
                  Core Technologies & Specialties
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentSlide.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/5 text-[#191919] border border-black/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reference Inspiration Note */}
            <div className="p-4 rounded-2xl bg-[#f4f2ee] border border-black/5 text-xs text-[#8e8c85] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#191919] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#191919]">Editorial Replica Fidelity</p>
                <p className="mt-0.5 leading-relaxed">
                  Crafted precisely after the Pinterest inspiration landing page layout, incorporating warm paper ivory aesthetics (#F4F2EE), high-contrast Bodoni/Playfair typography, background watermark typography, and modern React micro-interactions.
                </p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 bg-white border-t border-black/5 flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-black/15 text-xs font-semibold text-[#191919] hover:bg-black/5 transition-colors"
            >
              Close
            </button>
            <a
              href="mailto:chaithanyagowdac1@gmail.com"
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
