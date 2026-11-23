import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

export default function MenuDrawer({ 
  isOpen, 
  onClose, 
  onNavigate,
  onOpenDetail,
  onOpenProjects
}) {
  if (!isOpen) return null;

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Chaithanya_C_Resume.pdf';
    link.download = 'Chaithanya_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const menuLinks = [
    { num: '01', title: 'Home & Profile', subtitle: 'Hero introduction & credentials', action: () => { if (onNavigate) onNavigate('home'); onClose(); } },
    { num: '02', title: 'Education Timeline', subtitle: 'Academic journey & milestones', action: () => { if (onNavigate) onNavigate('education'); onClose(); } },
    { num: '03', title: 'Verified Certifications', subtitle: 'Software engineering & DSA', action: () => { if (onNavigate) onNavigate('certifications'); onClose(); } },
    { num: '04', title: 'Featured Projects', subtitle: 'Selected architectures & works', action: () => { if (onNavigate) onNavigate('projects'); onClose(); } },
    { num: '05', title: 'Honors & Achievements', subtitle: 'Academic 9.53 CGPA & achievements', action: () => { if (onNavigate) onNavigate('achievements'); onClose(); } },
    { num: '06', title: 'Connect & Contact', subtitle: 'Collaborate & get in touch', action: () => { if (onNavigate) onNavigate('contact'); onClose(); } },
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

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="w-screen max-w-md bg-[#faf9f6] text-[#191919] p-6 sm:p-10 flex flex-col justify-between shadow-2xl border-l border-black/10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-black/5">
              <span className="font-editorial-heading text-2xl font-bold tracking-tight">
                ausi <span className="text-xs font-sans font-normal text-[#8e8c85] tracking-widest uppercase ml-2">Navigation</span>
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#191919] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-8 space-y-6">
              {menuLinks.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.action}
                  className="w-full text-left group flex items-start justify-between py-2 border-b border-black/5 hover:border-black/20 transition-all"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-editorial-serif text-sm font-bold text-[#8e8c85] group-hover:text-[#191919] transition-colors">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-editorial-heading text-xl sm:text-2xl font-bold text-[#191919] group-hover:translate-x-1 transition-transform">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#8e8c85] font-sans mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#8e8c85] group-hover:text-[#191919] group-hover:rotate-45 transition-all opacity-0 group-hover:opacity-100" />
                </button>
              ))}
            </div>

            {/* Bottom Profile Summary & Contact */}
            <div className="pt-6 border-t border-black/5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/profile.png"
                  alt="Chaithanya C"
                  className="w-12 h-12 rounded-full object-cover border border-black/10 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#191919]">Chaithanya C</h4>
                  <p className="text-xs text-[#8e8c85]">Software Engineer & Creative Technologist</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Chaithanya-1808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#191919] hover:text-white flex items-center justify-center transition-colors text-[#191919]"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chaithanya-gowda-c-81252637b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#191919] hover:text-white flex items-center justify-center transition-colors text-[#191919]"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:chaithanyagowdac1@gmail.com"
                  className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#191919] hover:text-white flex items-center justify-center transition-colors text-[#191919]"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  onClick={handleDownloadResume}
                  className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#191919] text-white text-xs font-medium hover:bg-black transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
