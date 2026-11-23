import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Award, Briefcase, FolderGit2, Trophy, User, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function SectionModal({ section, onClose, onSelectSlide }) {
  if (!section) return null;

  const contentMap = {
    About: {
      icon: User,
      title: "About Chaithanya C",
      subtitle: "Computer Science Engineering & Software Development",
      content: (
        <div className="space-y-6 text-[#191919]">
          <p className="text-sm sm:text-base leading-relaxed text-[#191919]/90 font-sans">
            I am a Computer Science and Engineering student with an unyielding curiosity for how robust systems are designed, optimized, and brought to life. My journey blends deep computational fundamentals with modern full-stack web engineering, algorithms, and human-centric interface design.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm">
              <h4 className="font-editorial-serif font-bold text-base mb-1">Core Focus</h4>
              <p className="text-xs text-[#8e8c85] leading-relaxed">
                Full-Stack Web Development, Scalable Software Architecture, Cloud Integration, and Interactive User Experience.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm">
              <h4 className="font-editorial-serif font-bold text-base mb-1">Key Strengths</h4>
              <p className="text-xs text-[#8e8c85] leading-relaxed">
                Rapid prototyping, algorithmic problem-solving, clean maintainable code, and high-fidelity frontend craft.
              </p>
            </div>
          </div>
        </div>
      )
    },
    Education: {
      icon: GraduationCap,
      title: "Education & Academic Journey",
      subtitle: "Formal Computer Science Foundations",
      content: (
        <div className="space-y-4 text-[#191919]">
          {/* Stage 01: School */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8e8c85]">
                  STAGE 01 &bull; SCHOOL &bull; 2022
                </span>
                <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919] mt-0.5">
                  S.V.V School, Ittasandra
                </h4>
                <p className="text-xs font-semibold text-[#8e8c85]">SSLC</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30">
                96%
              </span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5">
              My learning journey began here, where I built my foundation and developed curiosity, discipline, and confidence.
            </p>
          </div>

          {/* Stage 02: PU / Board */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8e8c85]">
                  STAGE 02 &bull; PU / BOARD &bull; 2024
                </span>
                <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919] mt-0.5">
                  Mahadeva PU College, Hoskote
                </h4>
                <p className="text-xs font-semibold text-[#8e8c85]">Pre-University Course (PUC)</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30">
                94.5%
              </span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5">
              Strengthened my academic knowledge, explored new subjects, and developed a passion for learning and problem-solving.
            </p>
          </div>

          {/* Stage 03: Degree */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#FAB816] shadow-sm ring-1 ring-[#FAB816]/30">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8701B]">
                  STAGE 03 &bull; DEGREE &bull; 2024 &ndash; 2028
                </span>
                <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919] mt-0.5">
                  Nagarjuna College of Engineering and Technology (NCET)
                </h4>
                <p className="text-xs font-bold text-[#FAB816]">B.E. &bull; Computer Science and Engineering</p>
              </div>
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#FAB816] text-[#191919]">
                9.53 CGPA
              </span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5">
              Currently pursuing my engineering degree, developing technical skills in programming, software development, data structures, and emerging technologies.
            </p>
          </div>

          {/* Stage 04: Technical Journey */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8e8c85]">
                  STAGE 04 &bull; TECHNICAL JOURNEY &bull; 2025
                </span>
                <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919] mt-0.5">
                  Torii Minds
                </h4>
                <p className="text-xs font-semibold text-[#8e8c85]">Technical &amp; Engineering Member</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30">
                Joined 2025
              </span>
            </div>
            <p className="text-xs text-[#666666] leading-relaxed mt-2 pt-2 border-t border-black/5">
              Joined Torii Minds to enhance my technical skills, gain practical experience, collaborate with others, and grow as a future software engineer.
            </p>
          </div>
        </div>
      )
    },
    Certifications: {
      icon: Award,
      title: "Certifications & Credentials",
      subtitle: "Verified Technical Milestones & Reports",
      content: (
        <div className="space-y-4 text-[#191919]">
          {[
            {
              title: "Software Engineering Certification (CCE1)",
              issuer: "Nagarjuna College of Engineering & Technology",
              desc: "Comprehensive evaluation of software lifecycle, architecture design patterns, and engineering practices.",
              tag: "Verified Report"
            },
            {
              title: "Full-Stack Web Development & Modern React",
              issuer: "Technical Training & Certification",
              desc: "Deep-dive mastery of modern React hooks, state management, REST APIs, and responsive layout systems.",
              tag: "Technical Certification"
            },
            {
              title: "Data Structures & Algorithmic Foundations",
              issuer: "Computer Science Specialization",
              desc: "Advanced problem solving covering tree structures, dynamic programming, and computational complexity.",
              tag: "Core Engineering"
            }
          ].map((cert, idx) => (
            <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-sm flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8e8c85]">
                  {cert.issuer}
                </span>
                <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919] mt-0.5">
                  {cert.title}
                </h4>
                <p className="text-xs text-[#8e8c85] mt-1 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 flex-shrink-0">
                {cert.tag}
              </span>
            </div>
          ))}
        </div>
      )
    },
    Internships: {
      icon: Briefcase,
      title: "Internships & Industry Experience",
      subtitle: "Applied Software Engineering Work",
      content: (
        <div className="space-y-4 text-[#191919]">
          <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8e8c85]">
                  Software Developer Intern
                </span>
                <h4 className="font-editorial-heading text-lg font-bold text-[#191919] mt-0.5">
                  Full-Stack Web & Systems Development
                </h4>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-black/5 text-[#191919]">
                Completed
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#191919]/80 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Engineered responsive, accessible user interfaces using modern React, Tailwind CSS, and component state management.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Collaborated on RESTful API integrations, backend database connections, and performance tuning for low page-load latencies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Participated in code reviews, version control workflows with Git, and agile software development sprints.</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    Projects: {
      icon: FolderGit2,
      title: "Featured Projects & Architecture",
      subtitle: "Hands-on Full-Stack Implementations",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#191919]">
          {[
            {
              title: "Harper Bams Design System",
              tag: "UI Architecture",
              desc: "Modular design tokens and accessible editorial components built with React and Tailwind.",
              slideIndex: 2
            },
            {
              title: "Sequence Shifter Experience",
              tag: "Creative Tech",
              desc: "Interactive spatial engine with spring physics and low-latency rendering.",
              slideIndex: 3
            },
            {
              title: "Ruffled Sleeves Platform",
              tag: "Full-Stack App",
              desc: "High-performance web architecture with dynamic state and API integration.",
              slideIndex: 0
            },
            {
              title: "Editorial Portfolio System",
              tag: "Personal Project",
              desc: "High-fashion editorial layout replica with fluid animations and responsive typography.",
              slideIndex: 0
            }
          ].map((proj, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8e8c85]">
                  {proj.tag}
                </span>
                <h4 className="font-editorial-heading text-base font-bold text-[#191919] mt-0.5">
                  {proj.title}
                </h4>
                <p className="text-xs text-[#8e8c85] mt-1.5 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
              <button
                onClick={() => {
                  onSelectSlide(proj.slideIndex);
                  onClose();
                }}
                className="mt-4 pt-2 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#191919] hover:underline"
              >
                <span>View Slide {proj.slideIndex + 1}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )
    },
    Achievements: {
      icon: Trophy,
      title: "Achievements & Recognitions",
      subtitle: "Academic & Competitive Milestones",
      content: (
        <div className="space-y-4 text-[#191919]">
          <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919]">
                Academic Excellence in Computer Science
              </h4>
              <p className="text-xs sm:text-sm text-[#8e8c85] mt-1 leading-relaxed">
                Consistently maintained strong academic standing across foundational computer science coursework, algorithms, and practical engineering laboratory projects at NCET.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-black/5 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-editorial-heading text-base sm:text-lg font-bold text-[#191919]">
                Technical Project Demonstrations & Hackathons
              </h4>
              <p className="text-xs sm:text-sm text-[#8e8c85] mt-1 leading-relaxed">
                Successfully designed and delivered full-stack web prototypes and technical presentations demonstrating end-to-end functionality, accessible UI, and database connectivity.
              </p>
            </div>
          </div>
        </div>
      )
    }
  };

  const current = contentMap[section];
  if (!current) return null;
  const IconComponent = current.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#faf9f6] text-[#191919] rounded-3xl shadow-2xl border border-black/10 overflow-hidden z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-black/10 flex items-center justify-center text-[#191919] shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="p-6 sm:p-8 bg-[#f4f2ee] border-b border-black/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 shadow-sm flex items-center justify-center text-[#191919] flex-shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#8e8c85]">
                {section}
              </span>
              <h3 className="font-editorial-heading text-2xl sm:text-3xl font-extrabold text-[#191919] tracking-tight">
                {current.title}
              </h3>
              <p className="text-xs text-[#8e8c85] font-sans mt-0.5">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto no-scrollbar">
            {current.content}
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 bg-white border-t border-black/5 flex items-center justify-between">
            <span className="text-xs text-[#8e8c85] font-sans">
              Chaithanya C • Portfolio
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

