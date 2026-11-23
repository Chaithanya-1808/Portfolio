import React from 'react';

export default function Watermark({ text = "Chaithanya C" }) {
  return (
    <div 
      aria-hidden="true"
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex items-center justify-start pl-2 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12"
    >
      <span 
        className="font-editorial-heading font-bold text-[12vw] sm:text-[13vw] md:text-[14.5vw] lg:text-[15.5vw] xl:text-[16vw] leading-none tracking-tight whitespace-nowrap -translate-y-6 sm:-translate-y-10 md:-translate-y-14 lg:-translate-y-18 select-none"
        style={{
          whiteSpace: 'nowrap',
          color: '#E8E2D5',
          opacity: 0.45,
          letterSpacing: '-0.02em',
          WebkitTextStroke: '0.5px rgba(220, 212, 198, 0.3)'
        }}
      >
        {text}
      </span>
    </div>
  );
}
