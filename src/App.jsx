import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { 
  EducationPage, 
  CertificationsPage, 
  InternshipsPage, 
  ProjectsPage, 
  AchievementsPage, 
  ContactPage 
} from './components/PortfolioSections';
import SearchModal from './components/SearchModal';
import MenuDrawer from './components/MenuDrawer';
import DetailModal from './components/DetailModal';
import ProjectsDrawer from './components/ProjectsDrawer';
import SectionModal from './components/SectionModal';
import { slides } from './data/slides';

// Ultra-subtle Web Audio haptic click for tactile feel
function playTactileClick() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.03);
  } catch (e) {
    // AudioContext blocked or unsupported, silently ignore
  }
}

// Helper to determine the current active route from URL pathname or hash fallback
function getRouteFromLocation() {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
  const path = window.location.pathname.replace(/^\//, '').toLowerCase().trim();
  const candidate = hash || path;

  const validPages = [
    'education', 
    'certifications', 
    'internships', 
    'projects', 
    'achievements', 
    'contact'
  ];

  if (validPages.includes(candidate)) {
    return candidate;
  }
  return 'home';
}

export default function App() {
  // Multi-page state: stores currently active independent page
  const [currentPage, setCurrentPage] = useState(getRouteFromLocation);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [activeSectionModal, setActiveSectionModal] = useState(null);

  const currentSlide = slides[0]; // Chaithanya C main slide profile

  // Navigate to an independent page, updating browser history without reload
  const navigateTo = useCallback((pageId) => {
    playTactileClick();
    setCurrentPage(pageId);

    const newPath = pageId === 'home' ? '/' : `/${pageId}`;
    try {
      window.history.pushState({ page: pageId }, '', newPath);
    } catch (e) {
      window.location.hash = pageId === 'home' ? '' : pageId;
    }

    // Scroll to top of the newly opened page
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Browser Back and Forward history support (popstate and hashchange)
  useEffect(() => {
    const handlePopState = () => {
      const page = getRouteFromLocation();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Keyboard shortcut (Cmd/Ctrl + K opens search)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isDarkPage = currentPage === 'contact';

  return (
    <div className={`relative min-h-screen flex flex-col justify-between ${isDarkPage ? 'bg-black text-white' : 'bg-[#F5F3EF] text-[#191919]'} select-none font-sans overflow-x-hidden transition-colors duration-300`}>
      
      {/* Top Compact Icon-Based Navigation Bar (Fixed across all pages) */}
      <Navbar
        activeSection={currentPage}
        onNavClick={navigateTo}
        onOpenMenu={() => { playTactileClick(); setIsMenuOpen(true); }}
      />

      {/* Multi-Page Sheet Container with Smooth Page Transitions */}
      <div className="relative z-10 w-full flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full flex-1 flex flex-col"
          >
            {/* 1. Home Page */}
            {currentPage === 'home' && (
              <Hero
                onOpenDetail={() => { playTactileClick(); setIsDetailOpen(true); }}
              />
            )}

            {/* 2. Education Page */}
            {currentPage === 'education' && (
              <EducationPage onNavigate={navigateTo} />
            )}

            {/* 4. Certifications Page */}
            {currentPage === 'certifications' && (
              <CertificationsPage onNavigate={navigateTo} />
            )}

            {/* 5. Internships Page */}
            {currentPage === 'internships' && (
              <InternshipsPage onNavigate={navigateTo} />
            )}

            {/* 6. Projects Page */}
            {currentPage === 'projects' && (
              <ProjectsPage onNavigate={navigateTo} />
            )}

            {/* 7. Achievements Page */}
            {currentPage === 'achievements' && (
              <AchievementsPage onNavigate={navigateTo} />
            )}

            {/* 8. Contact Page */}
            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateTo} />
            )}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Minimal Editorial Footer (Present at the bottom of every page) */}
      <footer className={`relative z-10 border-t py-8 px-6 text-center text-xs mt-auto transition-colors duration-300 ${isDarkPage ? 'border-[#222222] bg-black text-[#8E8A80]' : 'border-black/10 bg-[#F5F3EF] text-[#8E8A80]'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`font-editorial-heading font-bold text-sm ${isDarkPage ? 'text-white' : 'text-[#191919]'}`}>
            Chaithanya C &mdash; Portfolio
          </p>
          <p>
            &copy; {new Date().getFullYear()} Chaithanya C. All rights reserved. Designed with precision &amp; craft.
          </p>
        </div>
      </footer>

      {/* Navigation Sections Modal (if opened for focused reading) */}
      <SectionModal
        section={activeSectionModal}
        onClose={() => setActiveSectionModal(null)}
        onSelectSlide={() => {}}
      />

      {/* Interactive Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSlide={() => {}}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={navigateTo}
        onOpenDetail={() => setIsDetailOpen(true)}
        onOpenProjects={() => setIsProjectsOpen(true)}
      />

      <DetailModal
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        currentSlide={currentSlide}
      />

      <ProjectsDrawer
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
        onSelectSlide={() => {}}
      />

    </div>
  );
}
