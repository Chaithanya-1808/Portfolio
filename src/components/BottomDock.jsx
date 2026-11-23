import React from 'react';
import { dockItems } from '../data/slides';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function BottomDock({ 
  currentSlideIndex, 
  onSelectSlide, 
  onOpenProjects,
  onOpenQuickAction 
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 select-none">
      {/* Original Black Inspiration Dock Bar */}
      <div className="relative bg-gradient-to-t from-black via-black/95 to-black/85 backdrop-blur-xl border-t border-white/10 px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex items-center justify-between gap-4">
        
        {/* Left 'more >' button */}
        <div className="flex-shrink-0">
          <button
            onClick={onOpenProjects}
            className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 text-xs sm:text-sm font-medium tracking-wide border border-white/5 shadow-inner"
          >
            <span>more</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-white/70 group-hover:text-white" />
          </button>
        </div>

        {/* Center Carousel: Circular thumbnails with titles */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 overflow-x-auto no-scrollbar py-1">
          {dockItems.map((item, index) => {
            const isActive = currentSlideIndex === index;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSlide(index)}
                className={`flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group transition-all duration-300 text-left ${
                  isActive ? 'opacity-100 scale-105' : 'opacity-65 hover:opacity-100 hover:scale-102'
                }`}
              >
                {/* Circular thumbnail with active ring */}
                <div className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden transition-all duration-300 ${
                  isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-black shadow-lg shadow-white/10' : 'ring-1 ring-white/20 group-hover:ring-white/60'
                }`}>
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Text Label */}
                <div className="flex flex-col text-left">
                  <span className="text-[11px] sm:text-xs font-medium text-white/90 group-hover:text-white tracking-tight leading-tight whitespace-nowrap">
                    {item.title}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-white/50 group-hover:text-white/80 tracking-normal leading-tight whitespace-nowrap">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Action Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onOpenQuickAction}
            aria-label="Quick Portfolio Actions"
            title="Portfolio Highlights & Resume"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-white/90" />
          </button>
        </div>

      </div>
    </div>
  );
}
