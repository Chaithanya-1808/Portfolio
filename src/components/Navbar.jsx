import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  GraduationCap, 
  Award, 
  Monitor, 
  Trophy, 
  Send, 
  Download,
  ChevronDown
} from 'lucide-react';

export default function Navbar({ activeSection, onNavClick, onOpenMenu }) {
  const isDark = activeSection === 'contact';
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'education', label: 'Education', icon: GraduationCap, tooltip: 'Education Timeline' },
    { id: 'certifications', label: 'Certifications', icon: Award, tooltip: 'Certifications' },
    { id: 'projects', label: 'Projects', icon: Monitor, tooltip: 'Featured Projects' },
    { id: 'achievements', label: 'Achievements', icon: Trophy, tooltip: 'Achievements & Honors' },
    { id: 'contact', label: 'Contact', icon: Send, tooltip: 'Contact & Connect' },
  ];

  // When on home, navigation is always visible.
  // When opening any section, navigation icons slide up out of view.
  useEffect(() => {
    if (activeSection === 'home') {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  }, [activeSection]);

  // Handle clicking navigation icon
  const handleNavigate = (id) => {
    if (onNavClick) {
      onNavClick(id);
    }
    // When clicking to any inner section, slide icons up
    if (id !== 'home') {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  };

  // Track scrolling: scrolling up reveals nav, scrolling down hides nav
  useEffect(() => {
    if (activeSection === 'home') return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 70 && currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else if (lastScrollY - currentScrollY > 15) {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, lastScrollY]);

  // Track mouse movement: hovering near top edge (y <= 50) slides nav down
  useEffect(() => {
    if (activeSection === 'home') return;

    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setIsNavVisible(true);
      } else if (e.clientY > 110 && !isHovered) {
        setIsNavVisible(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [activeSection, isHovered]);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Chaithanya_C_Resume.pdf';
    link.download = 'Chaithanya_C_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const showNav = activeSection === 'home' || isNavVisible || isHovered;

  return (
    <>
      {/* Top Hover Detection Zone to reveal navbar when hovering top edge */}
      {activeSection !== 'home' && (
        <div 
          onMouseEnter={() => setIsNavVisible(true)}
          className="fixed top-0 left-0 right-0 h-12 z-40 pointer-events-auto"
          aria-hidden="true"
        />
      )}

      {/* Main Fixed Navigation Header */}
      <header 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (activeSection !== 'home') {
            setIsNavVisible(false);
          }
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-14 pt-3 sm:pt-4 pb-2 flex items-center justify-between select-none pointer-events-none"
      >
        {/* Animated Sliding Navigation Icons Bar */}
        <motion.nav 
          aria-label="Primary Navigation"
          initial={false}
          animate={{
            y: showNav ? 0 : -85,
            opacity: showNav ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
            mass: 0.8
          }}
          className="pointer-events-auto flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-4.5 max-w-full overflow-x-auto no-scrollbar py-1.5 px-1"
        >
          {/* 1. Home Item (inside a black rounded pill) */}
          <button
            onClick={() => handleNavigate('home')}
            aria-label="Go to Home"
            title="Home & Profile"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#191919] hover:bg-black text-white shadow-sm transition-all duration-200 hover:scale-102 active:scale-98 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#FAB816]" />
            <span className="font-sans font-medium tracking-wide">Home</span>
          </button>

          {/* 2 - 8. Section Icons (About, Education, Certifications, Internships, Projects, Achievements, Contact) */}
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                aria-label={`Open ${item.label} section`}
                title={item.tooltip}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 flex items-center justify-center outline-none cursor-pointer ${
                  isActive 
                    ? 'text-[#FFB800] scale-110' 
                    : isDark
                      ? 'text-white/80 hover:text-[#FFB800] hover:scale-110'
                      : 'text-[#191919] hover:text-[#B8701B] hover:scale-110'
                }`}
              >
                <IconComponent className={`w-4 h-4 sm:w-[18px] sm:h-[18px] transition-colors duration-200 ${
                  isActive 
                    ? 'text-[#FFB800] stroke-[2.2]' 
                    : isDark
                      ? 'text-white/80 stroke-[1.8]'
                      : 'text-[#191919] stroke-[1.8]'
                }`} />
              </button>
            );
          })}

          {/* 9. Resume Download Icon Button */}
          <button
            onClick={handleDownloadResume}
            aria-label="Download Resume PDF"
            title="Download Resume (PDF)"
            className={`p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center outline-none cursor-pointer ${
              isDark 
                ? 'text-white/80 hover:text-[#FFB800]' 
                : 'text-[#191919] hover:text-[#B8701B]'
            }`}
          >
            <Download className="w-4 h-4 sm:w-[18px] sm:h-[18px] stroke-[1.8] transition-colors" />
          </button>
        </motion.nav>

        {/* Mini Pill Indicator shown when navigation icons are slid up */}
        <AnimatePresence>
          {!showNav && activeSection !== 'home' && (
            <motion.button
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsNavVisible(true)}
              title="Click or hover to reveal navigation"
              className={`pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md shadow-xs hover:shadow-md text-xs font-semibold cursor-pointer transition-all ${
                isDark 
                  ? 'bg-[#151515]/95 text-white border border-[#333333] hover:bg-[#202020]' 
                  : 'bg-white/95 text-[#191919] border border-black/10 hover:bg-white'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-[#FAB816]" />
              <span>Nav</span>
              <ChevronDown className={`w-3 h-3 ${isDark ? 'text-[#C4C4C4]' : 'text-[#8E8A80]'}`} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Top Right Quick Menu Button (4 solid round dots) */}
        <div className="pointer-events-auto">
          <button
            onClick={onOpenMenu}
            aria-label="Open portfolio navigation menu"
            title="Quick Menu"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border shadow-xs hover:shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 outline-none group cursor-pointer ${
              isDark 
                ? 'bg-[#151515] text-white border-[#333333]' 
                : 'bg-white text-[#141414] border-black/5'
            }`}
          >
            <div className="grid grid-cols-2 gap-1 p-0.5 transition-transform duration-300 group-hover:rotate-90">
              <span className={`w-1 h-1 rounded-full inline-block ${isDark ? 'bg-white' : 'bg-[#141414]'}`} />
              <span className={`w-1 h-1 rounded-full inline-block ${isDark ? 'bg-white' : 'bg-[#141414]'}`} />
              <span className={`w-1 h-1 rounded-full inline-block ${isDark ? 'bg-white' : 'bg-[#141414]'}`} />
              <span className={`w-1 h-1 rounded-full inline-block ${isDark ? 'bg-white' : 'bg-[#141414]'}`} />
            </div>
          </button>
        </div>
      </header>
    </>
  );
}
