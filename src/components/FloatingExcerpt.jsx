import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FloatingExcerpt({ 
  onOpenDetail 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute bottom-8 sm:bottom-10 md:bottom-12 right-4 sm:right-8 md:right-12 z-20 pointer-events-auto"
    >
      {/* Rounded Expand Button with Arrow Diagonal */}
      <button
        onClick={onOpenDetail}
        aria-label="Expand story details"
        title="View details & bio"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-[22px] bg-white/90 hover:bg-white text-[#191919] shadow-lg hover:shadow-xl border border-black/5 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group flex-shrink-0"
      >
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </motion.div>
  );
}
