import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Linkedin, 
  Github, 
  Twitter, 
  Instagram, 
  Mail 
} from 'lucide-react';
import Watermark from './Watermark';

export default function Hero({ onOpenDetail }) {
  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Chaithanya_C_Resume.pdf';
    link.download = 'Chaithanya_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between pt-20 sm:pt-22 lg:pt-24 pb-0 px-0 select-none overflow-hidden bg-[#F5F3EF]"
    >
      {/* Oversized Decorative Serif Watermark "Chaithanya C" behind Hero Content */}
      <Watermark text="Chaithanya C" />

      {/* Main Hero Horizontal Content (Desktop: 3-column editorial flow) */}
      <div className="relative z-10 flex-1 w-full px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pt-2 sm:pt-4 pb-2 my-auto">
        
        {/* Left Column: Identity, Subtitle, Description, Socials, Download Button */}
        <div className="w-full lg:w-[45%] xl:w-[43%] flex flex-col justify-center text-left z-20">
          
          {/* Main Name Heading: "Chaithanya C" (Refined Didot/Bodoni Serif, Single Line) */}
          <motion.h1 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-editorial-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.75rem] text-[#141414] leading-[1.05] tracking-tight whitespace-nowrap select-none"
            style={{ 
              whiteSpace: 'nowrap'
            }}
          >
            Chaithanya C
          </motion.h1>

          {/* Subtitle below Name */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3.5 mb-6 sm:mb-8"
          >
            <span className="font-sans text-xs sm:text-[13px] font-bold uppercase tracking-[0.24em] text-[#8C887E]">
              Creative Engineer &amp; Visionary
            </span>
          </motion.div>

          {/* Social Media Icons Row (Clean black icons without card backgrounds) */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8"
          >
            <a 
              href="https://www.linkedin.com/in/chaithanya-gowda-c-81252637b" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="text-[#191919] hover:text-[#B8701B] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Linkedin className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2]" />
            </a>

            <a 
              href="https://github.com/Chaithanya-1808" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="text-[#191919] hover:text-[#B8701B] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Github className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2]" />
            </a>

            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              title="Twitter"
              className="text-[#191919] hover:text-[#B8701B] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Twitter className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2]" />
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              title="Instagram"
              className="text-[#191919] hover:text-[#B8701B] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Instagram className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2]" />
            </a>

            <a 
              href="mailto:chaithanyagowdac1@gmail.com" 
              aria-label="Email Chaithanya"
              title="Email"
              className="text-[#191919] hover:text-[#B8701B] transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <Mail className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[2]" />
            </a>
          </motion.div>

          {/* Prominent Golden-Yellow Rounded Button: "DOWNLOAD PROFILE (PDF)" */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center"
          >
            <button
              onClick={handleDownloadResume}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#FAB816] hover:bg-[#F5A60B] text-black font-sans font-bold text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Left black circular icon with download arrow */}
              <span className="w-6 h-6 rounded-full bg-[#141414] text-white flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>

              {/* Center bold text */}
              <span className="tracking-wider">Download Profile</span>

              {/* Right small black PDF indicator pill */}
              <span className="px-2 py-0.5 rounded-full bg-[#141414] text-[#FAB816] text-[10px] font-black tracking-widest uppercase">
                PDF
              </span>
            </button>
          </motion.div>

        </div>

        {/* Center Column: Quote Block (Elevated & shifted leftward to give shoulder clearance) */}
        <div className="w-full lg:w-[22%] xl:w-[21%] flex flex-col justify-end lg:self-end px-0 lg:px-2 z-20 my-4 lg:my-0 lg:pb-24 xl:pb-28 2xl:pb-32 lg:-translate-x-6 xl:-translate-x-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-[220px] sm:max-w-[235px]"
          >
            {/* Large opening double quotation marks */}
            <span className="font-editorial-heading text-4xl sm:text-5xl lg:text-[3.25rem] text-[#141414] font-bold leading-none select-none block mb-2 sm:mb-2.5 opacity-95">
              &#10077;
            </span>

            {/* Quote Text */}
            <blockquote className="font-sans text-xs sm:text-[13px] lg:text-[13.5px] text-[#141414]/85 font-normal leading-[1.65] tracking-normal">
              Building technology, exploring possibilities, and continuously growing into a better engineer. &#10078;
            </blockquote>
          </motion.div>
        </div>

        {/* Mobile / Tablet Portrait (In normal flow on smaller screens) */}
        <div className="lg:hidden w-full flex items-center justify-center my-6 z-10">
          <img 
            src="/images/chaithanya_hero_portrait.png"
            alt="Chaithanya C"
            className="w-auto h-auto max-h-[48vh] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Right Desktop Spacer to balance flex layout */}
        <div className="hidden lg:block lg:w-[33%] xl:w-[36%] h-full pointer-events-none" />

      </div>

      {/* Desktop Anchored Grounded Portrait (Increased length matching executive reference) */}
      <div className="hidden lg:flex absolute bottom-0 right-4 sm:right-8 lg:right-12 xl:right-16 2xl:right-24 z-10 pointer-events-none items-end justify-end h-[86vh] lg:h-[92vh] xl:h-[95vh] max-h-[840px] lg:max-h-[900px] xl:max-h-[960px] select-none">
        <motion.img 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          src="/images/chaithanya_hero_portrait.png"
          alt="Chaithanya C"
          className="h-full w-auto max-w-[540px] lg:max-w-[620px] xl:max-w-[700px] object-contain object-bottom drop-shadow-[0_16px_36px_rgba(0,0,0,0.12)] pointer-events-none"
        />
      </div>

      {/* Bottom Horizontal Statistics Section (Docked flush to borders of the page, exact match to reference) */}
      <div className="relative z-20 w-full mt-auto mb-0">
        <div className="w-full flex flex-col md:flex-row items-stretch border-t border-black/15 bg-transparent">
          
          {/* Left Black Card ("MY JOURNEY" / "Learning. Building. Growing.") flush with left border */}
          <div className="bg-[#111111] text-white pl-4 sm:pl-8 md:pl-10 lg:pl-12 xl:pl-14 pr-6 sm:pr-8 py-4 sm:py-5 flex flex-col justify-center min-w-[220px] lg:min-w-[260px] xl:min-w-[290px] flex-shrink-0">
            {/* Small golden accent line & subtitle */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#FAB816] inline-block" />
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A39F93]">
                Learning. Building. Growing.
              </span>
            </div>
            
            {/* Heading */}
            <h3 className="font-editorial-heading text-lg sm:text-xl font-bold tracking-tight text-white">
              MY JOURNEY
            </h3>
          </div>

          {/* Right Statistics Container (3 Metric Columns extending to right border, matching reference) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/15 bg-transparent">
            
            {/* Metric 1: 9.53 CGPA */}
            <div className="p-4 sm:p-5 flex flex-col justify-center relative group hover:bg-black/[0.02] transition-colors bg-transparent">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[3px] h-3.5 bg-[#FAB816] rounded-full inline-block" />
                <h4 className="font-editorial-heading font-black text-xl sm:text-2xl lg:text-3xl text-[#141414] tracking-tight">
                  9.53 CGPA
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-[#666666] font-medium tracking-wide pl-3">
                Academic Performance
              </p>
            </div>

            {/* Metric 2: 5+ Technologies */}
            <div className="p-4 sm:p-5 flex flex-col justify-center relative group hover:bg-black/[0.02] transition-colors bg-transparent">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[3px] h-3.5 bg-[#FAB816] rounded-full inline-block" />
                <h4 className="font-editorial-heading font-black text-xl sm:text-2xl lg:text-3xl text-[#141414] tracking-tight">
                  5+ Tech
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-[#666666] font-medium tracking-wide pl-3">
                Technical Skills
              </p>
            </div>

            {/* Metric 3: Continuous Learning (Floating over dark blazer with pure white text and frosted glass extending to right border) */}
            <div className="p-4 sm:p-5 pr-4 sm:pr-8 md:pr-10 lg:pr-12 xl:pr-14 flex flex-col justify-center relative group bg-gradient-to-r from-transparent via-black/20 to-black/45 backdrop-blur-md transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-[3px] h-3.5 bg-[#FAB816] rounded-full inline-block" />
                <h4 
                  className="font-editorial-heading font-black text-xl sm:text-2xl lg:text-3xl tracking-tight text-white"
                  style={{ color: '#FFFFFF' }}
                >
                  Continuous
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-[#E2E2E2] font-medium tracking-wide pl-3">
                Professional Growth
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
