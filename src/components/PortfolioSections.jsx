import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Briefcase, 
  FolderGit2, 
  Trophy, 
  User, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  ArrowUpRight,
  ArrowRight,
  Send,
  School,
  BookOpen,
  Laptop,
  Sparkles,
  Terminal,
  Users,
  TrendingUp
} from 'lucide-react';

/* =========================================================================
   1. EDUCATION PAGE COMPONENT (INTERACTIVE ANIMATED TIMELINE)
   ========================================================================= */

const EDUCATION_STAGES = [
  {
    id: 1,
    stage: 'STAGE 01 • SCHOOL',
    year: '2022',
    icon: School,
    badge: '96%',
    title: 'S.V.V School, Ittasandra',
    subtitle: 'SSLC (10th Standard)',
    description: 'My learning journey began here, where I built my foundation and developed curiosity, discipline, and confidence.',
    position: 'top',
  },
  {
    id: 2,
    stage: 'STAGE 02 • PU / BOARD',
    year: '2024',
    icon: BookOpen,
    badge: '94.5%',
    title: 'Mahadeva PU College, Hoskote',
    subtitle: 'Pre-University Course (PUC)',
    description: 'Strengthened my academic knowledge, explored new subjects, and developed a passion for learning and problem-solving.',
    position: 'bottom',
  },
  {
    id: 3,
    stage: 'STAGE 03 • DEGREE',
    year: '2024 – 2028',
    icon: GraduationCap,
    badge: '9.53 CGPA',
    title: 'Nagarjuna College of Engineering & Technology (NCET)',
    subtitle: 'B.E. • Computer Science & Engineering',
    description: 'Pursuing my engineering degree, mastering software development, data structures, and emerging technologies.',
    position: 'top',
  },
  {
    id: 4,
    stage: 'STAGE 04 • TECHNICAL JOURNEY',
    year: '2025',
    icon: Laptop,
    badge: 'Joined 2025',
    title: 'Torii Minds',
    subtitle: 'Technical & Engineering Member',
    description: 'Joined Torii Minds to enhance my technical skills, gain practical experience, collaborate with others, and grow as a future software engineer.',
    position: 'bottom',
  }
];

export function EducationPage({ onNavigate }) {
  const [activeStage, setActiveStage] = useState(3);
  const reducedMotion = useReducedMotion();

  // Animated timeline progress width
  const progressWidth = 
    activeStage === 1 ? '12.5%' : 
    activeStage === 2 ? '37.5%' : 
    activeStage === 3 ? '62.5%' : '87.5%';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14 pt-28 sm:pt-32 pb-20 select-none">
      {/* Section Heading matching reference */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-[2px] bg-[#FAB816]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8A80]">
          Academic Foundation
        </span>
      </div>
      <h1 className="font-editorial-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#191919] mb-3">
        My Education Journey
      </h1>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10">
        <p className="text-sm sm:text-base text-[#191919]/70 font-sans italic max-w-2xl">
          &ldquo;Every step, every achievement, and every challenge shaped the person I am today.&rdquo;
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAB816]/15 text-[#9E6200] text-xs font-bold border border-[#FAB816]/30 self-start sm:self-auto shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FAB816]" />
          <span>Click any circle to explore stage</span>
        </span>
      </div>

      {/* ================= DESKTOP HORIZONTAL ALTERNATING TIMELINE (lg+) ================= */}
      <div className="hidden lg:block relative my-4">
        
        {/* Animated Flowing Dotted horizontal axis running continuously through all 4 milestones (centered at y=244px) */}
        <div className="absolute top-[243px] left-[6%] right-[6%] h-[4px] z-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="0"
              y1="2"
              x2="100%"
              y2="2"
              stroke="#FAB816"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              strokeOpacity="0.55"
              animate={reducedMotion ? {} : { strokeDashoffset: [0, -28] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        {/* Glowing animated progress line tracking to active stage */}
        <motion.div 
          className="absolute top-[243px] left-[6%] h-[2.5px] bg-gradient-to-r from-[#FAB816] via-[#FAB816] to-[#F5A60B] z-0 pointer-events-none shadow-sm shadow-amber-500/50 rounded-full"
          animate={{ width: progressWidth }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
        />

        {/* 4-Column Grid for Alternating Layout */}
        <div className="grid grid-cols-4 gap-5 relative z-10">

          {EDUCATION_STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            const isTop = stage.position === 'top';
            const IconComponent = stage.icon;

            return (
              <div key={stage.id} className="flex flex-col items-center">
                {isTop ? (
                  <>
                    {/* Top Card Container: Fixed 220px height ensuring clean spacing above timeline */}
                    <div className="w-full flex flex-col items-center justify-end h-[220px]">
                      <motion.div
                        layout
                        onClick={() => setActiveStage(stage.id)}
                        animate={{
                          scale: isActive ? 1.02 : 0.98,
                          y: isActive ? -4 : 0,
                          opacity: isActive ? 1 : 0.72,
                        }}
                        whileHover={{ scale: isActive ? 1.03 : 1.01, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className={`cursor-pointer w-full bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 relative ${
                          isActive
                            ? 'border-2 border-[#FAB816] shadow-lg shadow-amber-500/15 ring-2 ring-[#FAB816]/20'
                            : 'border border-black/10 shadow-xs hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[9.5px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                            isActive ? 'text-[#B8701B]' : 'text-[#8E8A80]'
                          }`}>
                            {stage.stage}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all duration-200 ${
                            isActive
                              ? 'bg-[#FAB816] text-[#191919] font-black shadow-2xs scale-105'
                              : 'bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30'
                          }`}>
                            {stage.badge}
                          </span>
                        </div>
                        <h3 className="font-editorial-heading font-black text-[15px] sm:text-base text-[#191919] leading-tight">
                          {stage.title}
                        </h3>
                        <p className={`text-[11px] mt-0.5 transition-colors duration-200 ${
                          isActive ? 'font-bold text-[#FAB816]' : 'font-semibold text-[#8E8A80]'
                        }`}>
                          {stage.subtitle}
                        </p>
                        <p className="text-[11px] text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5 font-sans">
                          {stage.description}
                        </p>
                      </motion.div>

                      {/* Vertical dotted connector line going down from card to circle */}
                      <motion.div 
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          scaleY: isActive ? 1.05 : 1
                        }}
                        className={`w-[2px] h-8 border-l-2 border-dashed ${
                          isActive ? 'border-[#FAB816]' : 'border-[#FAB816]/60'
                        }`} 
                      />
                      <motion.div 
                        animate={{
                          scale: isActive ? 1.35 : 1,
                          backgroundColor: '#FAB816'
                        }}
                        className="w-2 h-2 rounded-full shadow-sm -mt-0.5 ring-2 ring-white" 
                      />
                    </div>

                    {/* Milestone Node on Center Horizontal Axis (w-12 h-12 centered at y=244px) */}
                    <div className="flex items-center justify-center relative z-10">
                      <motion.button
                        onClick={() => setActiveStage(stage.id)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.88 }}
                        aria-label={`Select ${stage.title}`}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 outline-none cursor-pointer ${
                          isActive
                            ? 'bg-[#FAB816] text-[#191919] shadow-md shadow-amber-500/35 ring-4 ring-[#FAB816]/30'
                            : 'bg-white text-[#191919] border-2 border-[#FAB816] shadow-sm hover:border-[#FAB816] hover:shadow-md'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full border-2 border-[#FAB816] animate-ping opacity-40 pointer-events-none" />
                        )}

                        <motion.div
                          key={`node-${stage.id}-${isActive}`}
                          initial={{ scale: 0.8, rotate: isActive ? -12 : 0 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 450, damping: 20 }}
                        >
                          <IconComponent className={`w-5 h-5 transition-colors duration-200 ${
                            isActive ? 'text-[#191919] stroke-[2.2]' : 'text-[#191919] stroke-[1.8]'
                          }`} />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Bottom Slot: Year badge below circle */}
                    <div className="w-full flex flex-col items-center justify-start h-[220px]">
                      <motion.span 
                        animate={{ scale: isActive ? 1.06 : 1 }}
                        className={`mt-2.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide shadow-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-[#191919] text-[#FAB816] ring-1.5 ring-[#FAB816] shadow-xs' 
                            : 'bg-[#191919] text-white/90'
                        }`}
                        onClick={() => setActiveStage(stage.id)}
                      >
                        {stage.year}
                      </motion.span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Top Slot: Year badge above circle */}
                    <div className="w-full flex flex-col items-center justify-end h-[220px]">
                      <motion.span 
                        animate={{ scale: isActive ? 1.06 : 1 }}
                        className={`mb-2.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold tracking-wide shadow-sm whitespace-nowrap transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-[#191919] text-[#FAB816] ring-1.5 ring-[#FAB816] shadow-xs' 
                            : 'bg-[#191919] text-white/90'
                        }`}
                        onClick={() => setActiveStage(stage.id)}
                      >
                        {stage.year}
                      </motion.span>
                    </div>

                    {/* Milestone Node on Center Horizontal Axis (w-12 h-12 centered at y=244px) */}
                    <div className="flex items-center justify-center relative z-10">
                      <motion.button
                        onClick={() => setActiveStage(stage.id)}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.88 }}
                        aria-label={`Select ${stage.title}`}
                        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 outline-none cursor-pointer ${
                          isActive
                            ? 'bg-[#FAB816] text-[#191919] shadow-md shadow-amber-500/35 ring-4 ring-[#FAB816]/30'
                            : 'bg-white text-[#191919] border-2 border-[#FAB816] shadow-sm hover:border-[#FAB816] hover:shadow-md'
                        }`}
                      >
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full border-2 border-[#FAB816] animate-ping opacity-40 pointer-events-none" />
                        )}

                        <motion.div
                          key={`node-${stage.id}-${isActive}`}
                          initial={{ scale: 0.8, rotate: isActive ? -12 : 0 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 450, damping: 20 }}
                        >
                          <IconComponent className={`w-5 h-5 transition-colors duration-200 ${
                            isActive ? 'text-[#191919] stroke-[2.2]' : 'text-[#191919] stroke-[1.8]'
                          }`} />
                        </motion.div>
                      </motion.button>
                    </div>

                    {/* Bottom Card Container: Fixed 220px height with connector and card */}
                    <div className="w-full flex flex-col items-center justify-start h-[220px]">
                      {/* Vertical dotted connector line going down from circle to card */}
                      <motion.div 
                        animate={{
                          scale: isActive ? 1.35 : 1,
                          backgroundColor: '#FAB816'
                        }}
                        className="w-2 h-2 rounded-full shadow-sm -mb-0.5 ring-2 ring-white" 
                      />
                      <motion.div 
                        animate={{
                          opacity: isActive ? 1 : 0.45,
                          scaleY: isActive ? 1.05 : 1
                        }}
                        className={`w-[2px] h-8 border-l-2 border-dashed ${
                          isActive ? 'border-[#FAB816]' : 'border-[#FAB816]/60'
                        }`} 
                      />

                      <motion.div
                        layout
                        onClick={() => setActiveStage(stage.id)}
                        animate={{
                          scale: isActive ? 1.02 : 0.98,
                          y: isActive ? 4 : 0,
                          opacity: isActive ? 1 : 0.72,
                        }}
                        whileHover={{ scale: isActive ? 1.03 : 1.01, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className={`cursor-pointer w-full bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-4 transition-all duration-300 relative ${
                          isActive
                            ? 'border-2 border-[#FAB816] shadow-lg shadow-amber-500/15 ring-2 ring-[#FAB816]/20'
                            : 'border border-black/10 shadow-xs hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[9.5px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                            isActive ? 'text-[#B8701B]' : 'text-[#8E8A80]'
                          }`}>
                            {stage.stage}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] transition-all duration-200 ${
                            isActive
                              ? 'bg-[#FAB816] text-[#191919] font-black shadow-2xs scale-105'
                              : 'bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30'
                          }`}>
                            {stage.badge}
                          </span>
                        </div>
                        <h3 className="font-editorial-heading font-black text-[15px] sm:text-base text-[#191919] leading-tight">
                          {stage.title}
                        </h3>
                        <p className={`text-[11px] mt-0.5 transition-colors duration-200 ${
                          isActive ? 'font-bold text-[#FAB816]' : 'font-semibold text-[#8E8A80]'
                        }`}>
                          {stage.subtitle}
                        </p>
                        <p className="text-[11px] text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5 font-sans">
                          {stage.description}
                        </p>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            );
          })}

        </div>
      </div>

      {/* ================= MOBILE & TABLET VERTICAL TIMELINE (< lg) ================= */}
      <div className="block lg:hidden relative my-6 pl-4 sm:pl-8">
        {/* Animated Vertical dotted line running down the timeline */}
        <div className="absolute top-4 bottom-8 left-8 sm:left-12 w-[4px] z-0 pointer-events-none overflow-hidden">
          <svg className="w-full h-full overflow-visible" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#FAB816"
              strokeWidth="2.5"
              strokeDasharray="6 8"
              strokeLinecap="round"
              strokeOpacity="0.55"
              animate={reducedMotion ? {} : { strokeDashoffset: [0, -28] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>
        </div>

        <div className="space-y-8 relative z-10">
          {EDUCATION_STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            const IconComponent = stage.icon;

            return (
              <div 
                key={stage.id} 
                className="flex items-start gap-3.5 sm:gap-5 cursor-pointer"
                onClick={() => setActiveStage(stage.id)}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveStage(stage.id)}
                    aria-label={`Select ${stage.title}`}
                    className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 outline-none ${
                      isActive
                        ? 'bg-[#FAB816] text-[#191919] shadow-md ring-3 ring-[#FAB816]/30'
                        : 'bg-white text-[#191919] border-2 border-[#FAB816] shadow-2xs'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full border-2 border-[#FAB816] animate-ping opacity-40 pointer-events-none" />
                    )}
                    <IconComponent className={`w-4.5 h-4.5 ${isActive ? 'text-[#191919] stroke-[2.2]' : 'text-[#191919]'}`} />
                  </motion.button>
                  <span className={`mt-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold whitespace-nowrap transition-colors duration-200 ${
                    isActive ? 'bg-[#191919] text-[#FAB816] ring-1 ring-[#FAB816]' : 'bg-[#191919] text-white'
                  }`}>
                    {stage.year}
                  </span>
                </div>

                <motion.div 
                  layout
                  animate={{
                    scale: isActive ? 1.02 : 0.99,
                    opacity: isActive ? 1 : 0.78,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`flex-1 bg-white rounded-xl sm:rounded-2xl p-4 transition-all duration-300 ${
                    isActive
                      ? 'border-2 border-[#FAB816] shadow-md ring-2 ring-[#FAB816]/20'
                      : 'border border-black/10 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className={`text-[9.5px] font-bold uppercase tracking-wider ${
                      isActive ? 'text-[#B8701B]' : 'text-[#8E8A80]'
                    }`}>
                      {stage.stage}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full font-bold text-[10.5px] ${
                      isActive
                        ? 'bg-[#FAB816] text-[#191919] font-black'
                        : 'bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30'
                    }`}>
                      {stage.badge}
                    </span>
                  </div>
                  <h3 className="font-editorial-heading font-black text-sm sm:text-base text-[#191919]">
                    {stage.title}
                  </h3>
                  <p className={`text-[11px] mt-0.5 ${isActive ? 'font-bold text-[#FAB816]' : 'font-semibold text-[#8E8A80]'}`}>
                    {stage.subtitle}
                  </p>
                  <p className="text-[11px] text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5 font-sans">
                    {stage.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Page Navigation Footer Link */}
      {onNavigate && (
        <div className="mt-14 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-xs font-medium text-[#8E8A80] hover:text-[#191919] transition-colors cursor-pointer"
          >
            &larr; Back to Home Profile
          </button>
          <button
            onClick={() => onNavigate('certifications')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-all hover:scale-102"
          >
            <span>View Verified Certifications</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAB816]" />
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. CERTIFICATIONS PAGE COMPONENT (INTERACTIVE DECK & FLYING LOGO ANIMATION)
   ========================================================================= */
export { default as CertificationsPage } from './CertificationsPage';

/* =========================================================================
   4. INTERNSHIPS PAGE COMPONENT
   ========================================================================= */
export function InternshipsPage({ onNavigate }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14 pt-28 sm:pt-32 pb-24 select-none">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-6 h-[2px] bg-[#FAB816]" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8A80]">
          Applied Experience
        </span>
      </div>
      <h1 className="font-editorial-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#191919] mb-8">
        Internships &amp; Experience
      </h1>

      <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-black/10 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-black/5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FAB816]">
              Software Developer Intern
            </span>
            <h3 className="font-editorial-heading text-xl sm:text-2xl font-black text-[#191919] mt-0.5">
              Full-Stack Web &amp; Systems Engineering
            </h3>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-black/5 text-[#191919] text-xs font-medium self-start sm:self-center">
            Completed with Distinction
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {[
            "Engineered responsive, highly performant frontend interfaces using React, modern JavaScript, and Tailwind CSS with sub-second page transitions.",
            "Collaborated on designing RESTful API contracts, structured data models, and dynamic state workflows to bridge user interfaces with backend services.",
            "Participated in rigorous code reviews, Git version control branching workflows, and sprint retrospectives within an agile development team.",
            "Implemented accessibility (a11y) standards, keyboard navigation support, and device-agnostic responsive typography."
          ].map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#FAB816] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#191919]/80 leading-relaxed font-sans">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Page Navigation Footer Link */}
      {onNavigate && (
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('certifications')}
            className="text-xs font-medium text-[#8E8A80] hover:text-[#191919] transition-colors"
          >
            &larr; View Certifications
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-all hover:scale-102"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAB816]" />
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. PROJECTS PAGE COMPONENT (Genuine Works & Interactive Mockups)
   ========================================================================= */
export function ProjectsPage({ onNavigate }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14 pt-28 sm:pt-32 pb-24 select-none">
      
      {/* 1. Section Heading */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[2px] bg-[#FAB816]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8A80]">
            SELECTED WORKS
          </span>
        </div>
        <h1 className="font-editorial-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#191919] mb-3 leading-tight">
          Projects &amp; Creations
        </h1>
        <p className="text-sm sm:text-base text-[#8E8A80] italic font-editorial-heading">
          &ldquo;Turning ideas into practical solutions through creativity, technology, and continuous learning.&rdquo;
        </p>
      </div>

      {/* 2. Project Cards Grid (Project 1 Prominent Full-Width, Projects 2 & 3 Side-by-Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

        {/* =========================================================================
           PROJECT 1 (FEATURED PROMINENT): AI Career & Smart Roadmap System
           ========================================================================= */}
        <div className="lg:col-span-2 rounded-3xl bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
          <div>
            {/* Browser Frame Header */}
            <div className="bg-[#EFECE6] border-b border-black/10 px-4 sm:px-6 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <div className="px-3.5 py-0.5 rounded-md bg-white/80 text-[10.5px] font-mono text-[#8E8A80] border border-black/5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#FAB816]" />
                <span>aicareer-roadmap.internal / dashboard</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAB816] text-[#191919] shadow-2xs">
                AI / Full-Stack Development
              </span>
            </div>

            {/* Bespoke Interactive UI Dashboard Preview */}
            <div className="bg-[#FAF9F6] border-b border-black/10 p-4 sm:p-7 relative overflow-hidden">
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                
                {/* Left Mini-Card: AI Match Score & Radar Analytics */}
                <div className="md:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-black/10 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-black/5">
                    <span className="text-[10px] font-mono font-bold text-[#8E8A80] uppercase">
                      Diagnostic Matching Engine
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      94% Match
                    </span>
                  </div>
                  <div>
                    <h4 className="font-editorial-heading font-black text-base text-[#191919]">
                      Full-Stack &amp; AI Engineering
                    </h4>
                    <p className="text-[11px] text-[#666666] font-sans mt-0.5">
                      Formulaic Gap Analysis: <span className="font-mono text-[#191919] font-semibold">Gap = Target &minus; Current</span>
                    </p>
                  </div>
                  {/* Skill Gap Progress Bars */}
                  <div className="space-y-2 pt-1">
                    <div>
                      <div className="flex justify-between text-[10.5px] text-[#555] font-sans mb-0.5">
                        <span>Python &amp; FastAPI Backend</span>
                        <span className="font-bold text-[#191919]">92%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EFECE6] rounded-full overflow-hidden">
                        <div className="h-full bg-[#FAB816] rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10.5px] text-[#555] font-sans mb-0.5">
                        <span>Data Structures &amp; Algorithms</span>
                        <span className="font-bold text-[#191919]">88%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EFECE6] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[88%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10.5px] text-[#555] font-sans mb-0.5">
                        <span>Generative AI (Gemini Flash)</span>
                        <span className="font-bold text-[#191919]">85%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EFECE6] rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Mini-Card: Prerequisite-Aware Adaptive Roadmap */}
                <div className="md:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-black/10 shadow-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-black/5">
                    <span className="text-[10px] font-mono font-bold text-[#8E8A80] uppercase">
                      Personalized Roadmap Stages
                    </span>
                    <span className="text-[10.5px] text-[#FAB816] font-bold">
                      Stage 3 of 4 Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mx-auto block mb-1" />
                      <span className="text-[10px] font-bold text-emerald-900 block leading-tight">Stage 01</span>
                      <span className="text-[9px] text-emerald-700">CS Core ✓</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mx-auto block mb-1" />
                      <span className="text-[10px] font-bold text-emerald-900 block leading-tight">Stage 02</span>
                      <span className="text-[9px] text-emerald-700">Diagnostic ✓</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-[#FAB816] text-center shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-[#FAB816] mx-auto block mb-1 animate-pulse" />
                      <span className="text-[10px] font-bold text-amber-900 block leading-tight">Stage 03</span>
                      <span className="text-[9px] text-amber-700 font-semibold">Gemini AI ⚡</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gray-50 border border-black/10 text-center opacity-70">
                      <span className="w-2 h-2 rounded-full bg-gray-400 mx-auto block mb-1" />
                      <span className="text-[10px] font-bold text-gray-700 block leading-tight">Stage 04</span>
                      <span className="text-[9px] text-gray-500">Capstone 🔒</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#666] pt-1 border-t border-black/5">
                    <span>Multi-factor Verification</span>
                    <span className="font-mono text-[#191919] font-bold">ReportLab PDF &bull; QR Code</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="font-editorial-heading font-black text-2xl sm:text-3xl text-[#191919] group-hover:text-[#D9822B] transition-colors">
                  AI Career &amp; Smart Roadmap System
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-sans">
                An intelligent career guidance and personalized learning platform designed to help students discover suitable career paths, evaluate their existing skills, identify skill gaps, and follow structured learning roadmaps.
              </p>

              {/* Key Features Grid (8 Verified Features) */}
              <div className="mb-6 pb-6 border-b border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-3 font-mono">
                  Key Implemented Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {[
                    "Student registration and academic profiles",
                    "Career exploration and recommendations",
                    "Diagnostic skill assessments",
                    "Skill-gap analysis",
                    "Personalized learning roadmaps",
                    "Student dashboard",
                    "Learning progress tracking",
                    "Learning resources and recommendations"
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#191919]/80 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FAB816] mt-0.5 shrink-0" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags (Actual Verified Stack) */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-2 font-mono">
                  Verified Technology Stack:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Python (FastAPI)", "React 18", "TypeScript", "Tailwind CSS",
                    "Google Gemini AI", "SQLite / PostgreSQL", "Recharts", "ReportLab"
                  ].map((t, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-[#F5F3EF] text-[#191919] font-medium border border-black/5 shadow-2xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="px-6 sm:px-8 pb-7 pt-2 flex items-center justify-between text-xs font-semibold text-[#191919] border-t border-black/5 bg-[#FAFAFA]">
            <a 
              href="https://github.com/Chaithanya-1808/AI_CareerPath" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191919] text-white hover:bg-black transition-all hover:scale-102 cursor-pointer shadow-xs"
            >
              <Github className="w-3.5 h-3.5 text-[#FAB816]" />
              <span>Source Code (GitHub Repository)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
            </a>

            <span className="text-xs font-mono text-[#8E8A80] hidden sm:inline">
              Full-Stack College Engineering Project
            </span>
          </div>
        </div>

        {/* =========================================================================
           PROJECT 2: 3D Product Assembly Simulation – Table Fan
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
          <div>
            {/* Browser Frame Header */}
            <div className="bg-[#EFECE6] border-b border-black/10 px-4 sm:px-5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white/80 text-[10px] font-mono text-[#8E8A80] border border-black/5">
                fan-assembly.sim
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAB816] text-[#191919] shadow-2xs">
                3D / Interactive Application
              </span>
            </div>

            {/* Bespoke 3D Mechanical Assembly Simulation Preview */}
            <div className="bg-[#F9F8F5] border-b border-black/10 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span className="text-[10px] font-mono font-bold text-[#8E8A80] uppercase">
                    DSA Mechanical Assembly Sequence
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-300/60">
                    Queue &amp; Stack Logic
                  </span>
                </div>

                {/* Exploded Mechanical Parts Diagram */}
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 pt-1 text-center font-mono">
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">01</span>
                    <span className="text-[10.5px] font-bold text-[#191919] block leading-tight">Base</span>
                    <span className="text-[8.5px] text-[#FAB816] font-semibold">FIFO 1</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">02</span>
                    <span className="text-[10.5px] font-bold text-[#191919] block leading-tight">Stand</span>
                    <span className="text-[8.5px] text-[#FAB816] font-semibold">FIFO 2</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">03</span>
                    <span className="text-[10.5px] font-bold text-[#191919] block leading-tight">Motor</span>
                    <span className="text-[8.5px] text-[#FAB816] font-semibold">FIFO 3</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">04</span>
                    <span className="text-[10.5px] font-bold text-[#191919] block leading-tight">Blades</span>
                    <span className="text-[8.5px] text-[#FAB816] font-semibold">FIFO 4</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">05</span>
                    <span className="text-[10.5px] font-bold text-[#191919] block leading-tight">Cage</span>
                    <span className="text-[8.5px] text-[#FAB816] font-semibold">FIFO 5</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-black/10 text-xs flex items-center justify-between font-mono">
                  <span className="text-[#666]">Assembly: Enqueue âž” Run âž” Disassembly: LIFO Pop</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Simulation Operational
                  </span>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-7">
              <h3 className="font-editorial-heading font-black text-xl sm:text-2xl text-[#191919] mb-2 group-hover:text-[#D9822B] transition-colors">
                3D Product Assembly Simulation &ndash; Table Fan
              </h3>
              
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 font-sans">
                An interactive 3D product assembly simulation that demonstrates the individual components of a table fan and explains the step-by-step assembly process through an interactive visual experience.
              </p>

              {/* Key Features (6 Verified Features) */}
              <div className="space-y-2 mb-5 pb-5 border-b border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-2 font-mono">
                  Core Simulation Features:
                </span>
                {[
                  "3D product visualization",
                  "Individual component representation",
                  "Step-by-step assembly simulation",
                  "Component identification",
                  "Interactive product exploration",
                  "Assembly sequence visualization"
                ].map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[#191919]/75 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAB816] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-2 font-mono">
                  Technologies &amp; Data Structures:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "C Programming", "Data Structures (Queues & Stacks)",
                    "Algorithmic Simulation", "Component Sequencing Logic", "Modular Architecture"
                  ].map((t, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[#F5F3EF] text-[#191919] font-medium border border-black/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Details */}
          <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#191919] border-t border-black/5 bg-[#FAFAFA]">
            <div className="flex items-center gap-1.5 text-[#8E8A80] font-mono text-[11px]">
              <Terminal className="w-3.5 h-3.5 text-[#FAB816]" />
              <span>Academic Engineering Simulation</span>
            </div>
            <span className="text-[11px] font-mono text-[#191919] font-medium bg-[#EFECE6] px-2.5 py-1 rounded-full">
              C / DSA Implementation
            </span>
          </div>
        </div>

        {/* =========================================================================
           PROJECT 3: School Management System
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-black/10 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
          <div>
            {/* Browser Frame Header */}
            <div className="bg-[#EFECE6] border-b border-black/10 px-4 sm:px-5 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white/80 text-[10px] font-mono text-[#8E8A80] border border-black/5">
                edumanage-pro.local
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAB816] text-[#191919] shadow-2xs">
                Software Development / Database
              </span>
            </div>

            {/* Bespoke Student Management Dashboard Table Preview */}
            <div className="bg-[#FAF9F6] border-b border-black/10 p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span className="text-[10px] font-mono font-bold text-[#8E8A80] uppercase">
                    Student Record Directory
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    CRUD Operations Active
                  </span>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">Enrolled</span>
                    <span className="text-xs font-bold text-[#191919]">120+ Students</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">Class Avg</span>
                    <span className="text-xs font-bold text-[#191919]">84.6%</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-black/10 shadow-2xs">
                    <span className="text-[9px] text-[#8E8A80] block">Sections</span>
                    <span className="text-xs font-bold text-[#191919]">Sec A, B, C, D</span>
                  </div>
                </div>

                {/* Student Record Row Preview */}
                <div className="p-2.5 rounded-xl bg-white border border-black/10 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center justify-between text-[11px] pb-1 border-b border-black/5">
                    <span className="font-bold text-[#191919]">Roll #101 &bull; Chaithanya C</span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Marks: 96 (A+)</span>
                  </div>
                  <div className="flex items-center justify-between text-[10.5px] text-[#777]">
                    <span>Section A &bull; Computer Science</span>
                    <span className="text-[#FAB816] font-semibold">Active Record ✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-7">
              <h3 className="font-editorial-heading font-black text-xl sm:text-2xl text-[#191919] mb-2 group-hover:text-[#D9822B] transition-colors">
                School Management System
              </h3>
              
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 font-sans">
                A school management application developed to simplify student information management and organize academic records efficiently.
              </p>

              {/* Key Features (6 Verified Features) */}
              <div className="space-y-2 mb-5 pb-5 border-b border-black/5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-2 font-mono">
                  Key Management Capabilities:
                </span>
                {[
                  "Add new student records",
                  "View student information",
                  "Update student details",
                  "Delete student records",
                  "Organized student data management",
                  "CRUD operations"
                ].map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-[#191919]/75 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FAB816] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] block mb-2 font-mono">
                  Implementation Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "C Programming", "JavaScript (ES6+)", "HTML5 / CSS3",
                    "LocalStorage / Relational Schema", "Data Structures (Structs & Arrays)"
                  ].map((t, i) => (
                    <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[#F5F3EF] text-[#191919] font-medium border border-black/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="px-6 sm:px-7 pb-6 pt-3 flex items-center justify-between text-xs font-semibold text-[#191919] border-t border-black/5 bg-[#FAFAFA]">
            <a 
              href="https://github.com/Chaithanya-1808/School-management-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#191919] text-white hover:bg-black transition-all hover:scale-102 cursor-pointer shadow-xs"
            >
              <Github className="w-3.5 h-3.5 text-[#FAB816]" />
              <span>Source Code (GitHub Repository)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
            </a>

            <span className="text-xs font-mono text-[#8E8A80] hidden sm:inline">
              Student Records &bull; C / Web
            </span>
          </div>
        </div>

      </div>

      {/* Page Navigation Footer Link */}
      {onNavigate && (
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('certifications')}
            className="text-xs font-medium text-[#8E8A80] hover:text-[#191919] transition-colors cursor-pointer"
          >
            &larr; View Verified Certifications
          </button>
          <button
            onClick={() => onNavigate('achievements')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-all hover:scale-102 cursor-pointer"
          >
            <span>View Honors &amp; Achievements</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAB816]" />
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   6. ACHIEVEMENTS PAGE COMPONENT (Single Page • Google Student Ambassador 2026)
   ========================================================================= */
export function AchievementsPage({ onNavigate }) {
  const activities = [
    "Exploring Google's AI ecosystem, including Gemini, Nano Banana and Google Flow.",
    "Hosted Game On Night – Product Trial Deck through Google Meet.",
    "Organized interactive Gemini-powered gaming experiences.",
    "Engaged with fellow student ambassadors and campus communities.",
    "Created technology-focused content and achieved 16.9K+ views on featured content."
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 pt-28 sm:pt-32 pb-20 select-none">
      
      {/* 1. Section Heading */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-2.5">
          <span className="w-6 h-[2px] bg-[#FAB816]" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E8A80]">
            MILESTONES &amp; HONORS
          </span>
        </div>
        <h1 className="font-editorial-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#191919] mb-3 leading-tight">
          Achievements
        </h1>
        <p className="text-sm sm:text-base text-[#8E8A80] italic font-editorial-heading">
          &ldquo;Recognitions, leadership initiatives, and technical milestones throughout my engineering journey.&rdquo;
        </p>
      </div>

      {/* 2. Single Prominent Google Student Ambassador Achievement Card */}
      <div className="w-full rounded-3xl bg-gradient-to-br from-white via-[#FFFDF7] to-[#FFFBEB] border-2 border-[#FAB816] shadow-md hover:shadow-xl transition-all duration-300 p-7 sm:p-10 relative overflow-hidden group">
        
        {/* Subtle decorative golden glow in corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FAB816]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10">
          {/* Card Top Row: Icon + Header info + Highlight Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FAB816]/20 border border-[#FAB816]/40 text-[#D9822B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                <Sparkles className="w-7 h-7 stroke-[2.2] text-[#D9822B]" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#B8701B] block mb-1">
                  LEADERSHIP &amp; COMMUNITY AMBASSADOR
                </span>
                <h2 className="font-editorial-heading font-black text-2xl sm:text-3xl text-[#191919]">
                  Google Student Ambassador 2026
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="px-4 py-1.5 rounded-full bg-[#FAB816] text-[#191919] font-black text-xs shadow-xs tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#191919] animate-pulse" />
                Featured 2026
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-8 font-sans max-w-3xl">
            &ldquo;Actively exploring Google&apos;s AI ecosystem, engaging with student communities, organizing interactive product experiences, and creating technology-focused content to promote AI awareness and innovation.&rdquo;
          </p>

          {/* Key Activities Section */}
          <div className="pt-6 border-t border-black/10">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#8E8A80] mb-4">
              Key Activities &amp; Initiatives
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activities.map((activity, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-black/5 hover:border-[#FAB816]/60 transition-colors shadow-2xs ${
                    idx === activities.length - 1 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#FAB816] mt-2 shrink-0 ring-4 ring-[#FAB816]/20" />
                  <span className="text-xs sm:text-[13px] text-[#222222] font-sans leading-relaxed">
                    {activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation Footer Link */}
      {onNavigate && (
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs font-medium text-[#8E8A80] hover:text-[#191919] transition-colors cursor-pointer"
          >
            &larr; View Projects
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-all hover:scale-102 cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAB816]" />
          </button>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   7. CONTACT PAGE COMPONENT (Pure Black Theme #000000 • "Let's Connect")
   ========================================================================= */
export function ContactPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validation regex (standard RFC 5322 simplified)
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
      setErrorMessage('Please fill in all required fields before sending.');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setErrorMessage('Please provide a valid email address (e.g. yourname@domain.com).');
      return;
    }

    setIsSubmitting(true);

    // Build real mailto link fallback
    const targetEmail = 'chaithanyagowdac1@gmail.com'; // Primary contact email
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${trimmedSubject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Chaithanya,\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}\n\nSent from Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    // Open mailto client in background or new window
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white select-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-14 pt-28 sm:pt-32 pb-24">
        
        {/* 1. Page Heading */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#FFB800]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800]">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="font-editorial-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-sm sm:text-base text-[#C4C4C4] italic font-editorial-heading max-w-2xl">
            &ldquo;Have an idea, an opportunity, or just want to talk about technology? I&apos;d be happy to hear from you.&rdquo;
          </p>
        </div>

        {/* 2. Two-Column Layout (Vertically Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Section – Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-editorial-heading font-bold text-xl sm:text-2xl text-white mb-3">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-sm text-[#C4C4C4] leading-relaxed font-sans">
                I&apos;m always open to connecting with fellow developers, exploring internship and career opportunities, collaborating on innovative projects, and discussing technology.
              </p>
            </div>

            {/* Three Clean Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Card 1: Email */}
              <a 
                href="mailto:chaithanyagowdac1@gmail.com"
                className="p-4 sm:p-5 rounded-2xl bg-[#151515] border border-[#333333] flex items-center gap-4 hover:border-[#FFB800] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 stroke-[2] text-[#FFB800]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E8A80] block mb-0.5">
                    DIRECT EMAIL
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#FFB800] transition-colors truncate block">
                    chaithanyagowdac1@gmail.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8A80] group-hover:text-[#FFB800] transition-colors shrink-0" />
              </a>

              {/* Card 2: LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/chaithanya-gowda-c-81252637b" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-[#151515] border border-[#333333] flex items-center gap-4 hover:border-[#FFB800] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5 stroke-[2] text-[#FFB800]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E8A80] block mb-0.5">
                    LINKEDIN NETWORK
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#FFB800] transition-colors truncate block">
                    linkedin.com/in/chaithanya-gowda-c-81252637b
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8A80] group-hover:text-[#FFB800] transition-colors shrink-0" />
              </a>

              {/* Card 3: GitHub */}
              <a 
                href="https://github.com/Chaithanya-1808" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-2xl bg-[#151515] border border-[#333333] flex items-center gap-4 hover:border-[#FFB800] hover:shadow-[0_0_20px_rgba(255,184,0,0.15)] transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFB800]/15 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Github className="w-5 h-5 stroke-[2] text-[#FFB800]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8E8A80] block mb-0.5">
                    GITHUB REPOSITORIES
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#FFB800] transition-colors truncate block">
                    github.com/Chaithanya-1808
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E8A80] group-hover:text-[#FFB800] transition-colors shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Section – Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151515] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#333333] shadow-lg relative overflow-hidden">
              
              {/* Subtle gold glow in form corner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" />

              <form 
                onSubmit={handleSubmit}
                className="relative z-10 space-y-5"
                noValidate
              >
                {/* Field 1: Your Name */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4C4C4] block mb-2">
                    Your Name <span className="text-[#FFB800]">*</span>
                  </label>
                  <input 
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1E1E1E] border border-[#444444] text-sm text-white placeholder-[#888888] focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-all"
                  />
                </div>

                {/* Field 2: Your Email */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4C4C4] block mb-2">
                    Your Email <span className="text-[#FFB800]">*</span>
                  </label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1E1E1E] border border-[#444444] text-sm text-white placeholder-[#888888] focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-all"
                  />
                </div>

                {/* Field 3: Subject */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4C4C4] block mb-2">
                    Subject <span className="text-[#FFB800]">*</span>
                  </label>
                  <input 
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="e.g. Project Collaboration / Internship Inquiry"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1E1E1E] border border-[#444444] text-sm text-white placeholder-[#888888] focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-all"
                  />
                </div>

                {/* Field 4: Your Message */}
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4C4C4] block mb-2">
                    Your Message <span className="text-[#FFB800]">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errorMessage) setErrorMessage('');
                    }}
                    placeholder="Write your note or collaboration proposal here..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#1E1E1E] border border-[#444444] text-sm text-white placeholder-[#888888] focus:outline-none focus:border-[#FFB800] focus:ring-1 focus:ring-[#FFB800] transition-all resize-none"
                  />
                </div>

                {/* Validation Error Message */}
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button: Golden yellow with black text */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full bg-[#FFB800] hover:bg-[#e5a600] active:scale-[0.99] text-black text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,184,0,0.35)] cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4 text-black stroke-[2.2]" />
                  <span>{isSubmitting ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>

                {/* Success Message Banner */}
                {formSubmitted && (
                  <div className="p-4 rounded-2xl bg-emerald-950/70 text-emerald-200 text-xs font-medium border border-emerald-500/40 space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Ready to send!</span>
                    </div>
                    <p className="text-[#C4C4C4] text-[11px] leading-relaxed">
                      Your default mail application has been prompted with your message pre-filled. You can also reach out directly at <a href="mailto:chaithanyagowdac1@gmail.com" className="text-[#FFB800] underline font-semibold">chaithanyagowdac1@gmail.com</a>.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Page Navigation Footer Link */}
        {onNavigate && (
          <div className="mt-16 pt-8 border-t border-[#333333] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('achievements')}
              className="text-xs font-medium text-[#C4C4C4] hover:text-white transition-colors cursor-pointer"
            >
              &larr; View Achievements
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFB800] text-black text-xs font-bold hover:bg-[#e5a600] transition-all hover:scale-102 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(255,184,0,0.3)]"
            >
              <span>Return to Home Profile</span>
              <ArrowRight className="w-3.5 h-3.5 text-black stroke-[2.2]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   DEFAULT EXPORT: Page Switcher Helper
   ========================================================================= */
export default function PortfolioSections({ activePage = 'about', onNavigate }) {
  switch (activePage) {
    case 'about':
      return <AboutPage onNavigate={onNavigate} />;
    case 'education':
      return <EducationPage onNavigate={onNavigate} />;
    case 'certifications':
      return <CertificationsPage onNavigate={onNavigate} />;
    case 'internships':
      return <InternshipsPage onNavigate={onNavigate} />;
    case 'projects':
      return <ProjectsPage onNavigate={onNavigate} />;
    case 'achievements':
      return <AchievementsPage onNavigate={onNavigate} />;
    case 'contact':
      return <ContactPage onNavigate={onNavigate} />;
    default:
      return <AboutPage onNavigate={onNavigate} />;
  }
}
