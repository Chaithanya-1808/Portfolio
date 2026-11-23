import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { dockItems } from '../data/slides';

export default function ProjectsDrawer({ isOpen, onClose, onSelectSlide }) {
  if (!isOpen) return null;

  const projects = [
    {
      title: "Harper Bams Editorial Platform",
      tag: "UI Architecture & Web Design",
      desc: "Neoclassical editorial publication framework with dynamic typography scaling and adaptive grid systems.",
      tech: ["React", "Tailwind", "CSS Grid"],
      thumb: "/assets/thumb1.png",
      slideIndex: 2
    },
    {
      title: "Harpeer Bames Design System",
      tag: "Component System & Tokens",
      desc: "Complete enterprise design system tokens, accessible primitives, and micro-interaction states.",
      tech: ["TypeScript", "Radix UI", "Tailwind"],
      thumb: "/assets/thumb2.png",
      slideIndex: 1
    },
    {
      title: "Sequence Shifter Experience",
      tag: "Creative Tech & WebGL",
      desc: "Interactive spatial canvas with GPU acceleration, dynamic motion choreography, and fluid spring physics.",
      tech: ["Framer Motion", "Canvas", "GLSL"],
      thumb: "/assets/thumb3.png",
      slideIndex: 3
    },
    {
      title: "Ruffled Sleeves E-Commerce",
      tag: "Full-Stack Application",
      desc: "Luxury apparel e-commerce experience with sub-second page transitions, dynamic cart, and secure checkout.",
      tech: ["Next.js", "Node.js", "Stripe API"],
      thumb: "/assets/thumb4.png",
      slideIndex: 0
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Bottom Drawer */}
        <div className="fixed inset-x-0 bottom-0 max-h-[85vh] flex justify-center">
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="w-full max-w-5xl bg-[#faf9f6] text-[#191919] rounded-t-3xl p-6 sm:p-10 shadow-2xl border-t border-black/10 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8e8c85] font-semibold">
                  Curated Showcase
                </span>
                <h2 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold text-[#191919]">
                  Featured Projects & Explorations
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#191919] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project Cards Grid */}
            <div className="py-6 overflow-y-auto no-scrollbar grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-1">
              {projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-2xl bg-white border border-black/5 hover:border-black/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.thumb}
                          alt={proj.title}
                          className="w-10 h-10 rounded-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all"
                        />
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8e8c85]">
                            {proj.tag}
                          </span>
                          <h3 className="font-editorial-heading text-lg font-bold text-[#191919]">
                            {proj.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#8e8c85] leading-relaxed mb-4">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-black/5 text-[#191919]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <button
                      onClick={() => {
                        onSelectSlide(proj.slideIndex);
                        onClose();
                      }}
                      className="text-xs font-semibold text-[#191919] flex items-center gap-1 group-hover:underline"
                    >
                      <span>View in Hero View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] text-[#8e8c85]">
                      Slide {proj.slideIndex + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs text-[#8e8c85]">
              <span>Designed with editorial precision</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#191919] text-white hover:bg-black font-medium transition-colors"
              >
                Close Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
