import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ExternalLink, 
  X, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Maximize2, 
  Search, 
  Filter, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import certificationsData from '../data/certifications.json';

/* =========================================================================
   DESIGN COLOR CARD THEMES & CONDENSED HIGHLIGHTS
   Bespoke color palettes, glowing borders, and punchy 1-line takeaways
   ========================================================================= */
const CARD_THEMES = {
  'google-gemini-student': {
    bg: 'bg-gradient-to-br from-[#F0F4FF] via-[#F6F2FF] to-[#FAF5FF]',
    border: 'border-[#4285F4]/30 hover:border-[#4285F4]/80',
    accent: '#4285F4',
    badgeBg: 'bg-[#4285F4]/15 text-[#2563EB] border border-[#4285F4]/30',
    highlight: 'Multimodal prompt design, synthesis workflows & responsible academic AI with Google Gemini.',
    skillPills: ['Gemini AI', 'Prompt Design', 'GenAI'],
    glow: 'hover:shadow-blue-500/20',
  },
  'google-genai': {
    bg: 'bg-gradient-to-br from-[#F0F9FF] via-[#EBF6FE] to-[#F5FAFF]',
    border: 'border-[#0284C7]/30 hover:border-[#0284C7]/80',
    accent: '#0284C7',
    badgeBg: 'bg-[#0284C7]/15 text-[#0369A1] border border-[#0284C7]/30',
    highlight: 'Foundation LLM architectures, prompt evaluation & enterprise Vertex AI pipelines.',
    skillPills: ['Vertex AI', 'LLMs', 'Deep Learning'],
    glow: 'hover:shadow-sky-500/20',
  },
  'redhat-java-ee': {
    bg: 'bg-gradient-to-br from-[#FFF1F2] via-[#FFF5F5] to-[#FEF2F2]',
    border: 'border-[#EE0000]/30 hover:border-[#EE0000]/80',
    accent: '#EE0000',
    badgeBg: 'bg-[#EE0000]/15 text-[#BE123C] border border-[#EE0000]/30',
    highlight: 'Multi-tier enterprise solutions with Java EE, RESTful JAX-RS APIs & JPA persistence.',
    skillPills: ['Java EE', 'JAX-RS APIs', 'JPA Persistence'],
    glow: 'hover:shadow-red-500/20',
  },
  'oracle-database-23ai': {
    bg: 'bg-gradient-to-br from-[#FFF7ED] via-[#FFF5F1] to-[#FEF3EE]',
    border: 'border-[#C74634]/30 hover:border-[#C74634]/80',
    accent: '#C74634',
    badgeBg: 'bg-[#C74634]/15 text-[#9A3412] border border-[#C74634]/30',
    highlight: 'Relational data modeling, advanced SQL queries & AI vector search in Oracle 23ai.',
    skillPills: ['Oracle 23ai', 'SQL Optimization', 'Vector Search'],
    glow: 'hover:shadow-orange-500/20',
  },
  'oracle-java-fundamentals': {
    bg: 'bg-gradient-to-br from-[#FFF8F5] via-[#FFF3EE] to-[#FDF4EB]',
    border: 'border-[#EA580C]/30 hover:border-[#EA580C]/80',
    accent: '#EA580C',
    badgeBg: 'bg-[#EA580C]/15 text-[#C2410C] border border-[#EA580C]/30',
    highlight: 'Core OOP architecture: abstraction, inheritance, polymorphism & interfaces.',
    skillPills: ['Java SE', 'OOP Architecture', 'Data Structures'],
    glow: 'hover:shadow-amber-500/20',
  },
  'codechef-500': {
    bg: 'bg-gradient-to-br from-[#FDF8F3] via-[#FBF4EB] to-[#F6EDE2]',
    border: 'border-[#5B4638]/30 hover:border-[#5B4638]/80',
    accent: '#5B4638',
    badgeBg: 'bg-[#5B4638]/15 text-[#713F12] border border-[#5B4638]/30',
    highlight: 'Algorithmic problem-solving, runtime complexity optimization & competitive coding.',
    skillPills: ['Algorithms', 'Time Complexity', 'Data Structures'],
    glow: 'hover:shadow-amber-700/20',
  },
  'infosys-network-security': {
    bg: 'bg-gradient-to-br from-[#F0F7FF] via-[#EBF4FE] to-[#F5FAFF]',
    border: 'border-[#007CC3]/30 hover:border-[#007CC3]/80',
    accent: '#007CC3',
    badgeBg: 'bg-[#007CC3]/15 text-[#0369A1] border border-[#007CC3]/30',
    highlight: 'TCP/IP & OSI network protocols, routing, firewalls & defensive cybersecurity.',
    skillPills: ['Network Protocols', 'Cybersecurity', 'SSL/TLS'],
    glow: 'hover:shadow-blue-500/20',
  },
  'infosys-software-engineering': {
    bg: 'bg-gradient-to-br from-[#F0F8FF] via-[#EBF5FB] to-[#F4F9FF]',
    border: 'border-[#007CC3]/30 hover:border-[#007CC3]/80',
    accent: '#007CC3',
    badgeBg: 'bg-[#007CC3]/15 text-[#0369A1] border border-[#007CC3]/30',
    highlight: 'Structured SDLC methodologies, software requirements (SRS) & UML architecture.',
    skillPills: ['SDLC Models', 'SRS Specs', 'UML Design'],
    glow: 'hover:shadow-blue-500/20',
  },
  'infosys-agile-devops': {
    bg: 'bg-gradient-to-br from-[#F0FDF4] via-[#F4FBF7] to-[#ECFDF5]',
    border: 'border-[#059669]/30 hover:border-[#059669]/80',
    accent: '#059669',
    badgeBg: 'bg-[#059669]/15 text-[#047857] border border-[#059669]/30',
    highlight: 'Agile Scrum sprints, automated CI/CD pipelines & collaborative Git workflows.',
    skillPills: ['Scrum & Kanban', 'CI/CD Pipelines', 'Git Workflows'],
    glow: 'hover:shadow-emerald-500/20',
  },
  'infosys-software-alm': {
    bg: 'bg-gradient-to-br from-[#F5F3FF] via-[#FAF5FF] to-[#F3E8FF]',
    border: 'border-[#7C3AED]/30 hover:border-[#7C3AED]/80',
    accent: '#7C3AED',
    badgeBg: 'bg-[#7C3AED]/15 text-[#6D28D9] border border-[#7C3AED]/30',
    highlight: 'Full software lifecycle governance, automated QA gates & release audit compliance.',
    skillPills: ['ALM Frameworks', 'Release Governance', 'QA Gates'],
    glow: 'hover:shadow-purple-500/20',
  },
  'smart-india-hackathon': {
    bg: 'bg-gradient-to-br from-[#FFFBEB] via-[#FFF7ED] to-[#FEF3C7]',
    border: 'border-[#E87722]/35 hover:border-[#E87722]/85',
    accent: '#E87722',
    badgeBg: 'bg-[#E87722]/15 text-[#C2410C] border border-[#E87722]/35',
    highlight: 'Rapid 24-hour hackathon prototype engineering & full-stack problem solving.',
    skillPills: ['Rapid Prototyping', 'Full-Stack', 'Team Leadership'],
    glow: 'hover:shadow-orange-500/20',
  },
};

/* =========================================================================
   ISSUER LOGO COMPONENT
   Renders official vector SVGs for verified issuers, or a clean fallback badge
   ========================================================================= */
export function IssuerLogo({ logo, initials = 'CC', name = '', className = 'w-full h-full' }) {
  switch (logo) {
    case 'google-gemini':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Google Gemini">
          <defs>
            <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
          <path 
            d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" 
            fill="url(#gemini-grad)" 
          />
        </svg>
      );

    case 'google-cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Google Cloud">
          <path fill="#4285F4" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
          <path fill="#FBBC05" d="M19 19H6c-2.76 0-5-2.24-5-5 0-2.45 1.77-4.48 4.14-4.91L6 9h1l.36-.78C8.38 6.09 10.53 5 12 5c2.72 0 5.09 1.76 5.86 4.31l.24.81.84.14C20.67 10.55 22 12.12 22 14c0 2.76-2.24 5-5 5z" />
          <path fill="#34A853" d="M12 6c-2.31 0-4.3 1.34-5.26 3.31L6 9.9 5.14 10C3.39 10.28 2 11.95 2 14c0 2.21 1.79 4 4 4h13c2.21 0 4-1.79 4-4 0-1.95-1.42-3.56-3.32-3.92l-.84-.16-.25-.82C17.9 6.84 15.17 5 12 5v1z" />
          <path fill="#EA4335" d="M19 18H6c-2.21 0-4-1.79-4-4 0-1.79 1.2-3.3 2.87-3.82l.85-.26.24-.85C6.91 6.86 9.27 5.5 12 5.5c2.78 0 5.17 1.45 6.13 3.75l.3.71.76.13c1.78.3 3.11 1.83 3.11 3.66 0 2.21-1.79 4-4 4z" />
          <path fill="#FFFFFF" d="M19 14c0-1.65-1.35-3-3-3-.41 0-.79.08-1.14.23C14.45 9.4 12.87 8 11 8c-2.21 0-4 1.79-4 4 0 .34.05.67.13.98C6.47 13.39 6 14.13 6 15c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3z" />
        </svg>
      );

    case 'oracle':
      return (
        <svg viewBox="0 0 100 40" className={className} aria-label="Oracle">
          <rect width="100" height="40" rx="8" fill="#C74634" />
          <text 
            x="50" 
            y="26" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="18" 
            letterSpacing="1"
          >
            ORACLE
          </text>
        </svg>
      );

    case 'redhat':
      return (
        <svg viewBox="0 0 100 100" className={className} aria-label="Red Hat">
          <circle cx="50" cy="50" r="48" fill="#EE0000" />
          <path d="M22 62C26 62 33 60 41 57C48 54 52 46 54 39C56 32 53 26 48 24C43 22 36 25 32 30C28 35 25 44 22 62Z" fill="#FFFFFF" />
          <path d="M15 63C25 61 45 59 62 61C75 62 85 65 85 65C85 65 72 68 50 68C28 68 15 63 15 63Z" fill="#111111" />
          <path d="M28 61C33 55 42 48 50 48C57 48 64 53 68 60C58 58 43 58 28 61Z" fill="#111111" />
        </svg>
      );

    case 'codechef':
      return (
        <svg viewBox="0 0 100 100" className={className} aria-label="CodeChef">
          <circle cx="50" cy="50" r="48" fill="#5B4638" />
          <path d="M35 68H65V74H35V68Z" fill="#FFFFFF" />
          <path d="M38 65C38 65 36 50 32 46C28 42 28 35 34 31C40 27 46 32 48 36C50 30 58 28 63 32C68 36 67 43 64 46C60 50 62 65 62 65H38Z" fill="#FFFFFF" />
          <circle cx="43" cy="54" r="2.5" fill="#5B4638" />
          <circle cx="57" cy="54" r="2.5" fill="#5B4638" />
          <path d="M46 60C48 62 52 62 54 60" stroke="#5B4638" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'infosys':
      return (
        <svg viewBox="0 0 100 40" className={className} aria-label="Infosys">
          <rect width="100" height="40" rx="8" fill="#007CC3" />
          <text 
            x="50" 
            y="26" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="17" 
            letterSpacing="0.5"
          >
            Infosys
          </text>
        </svg>
      );

    case 'sih':
      return (
        <svg viewBox="0 0 100 100" className={className} aria-label="Smart India Hackathon">
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#E87722" strokeWidth="4" />
          <circle cx="50" cy="50" r="44" fill="#F8F9FA" />
          <path d="M50 20C40 20 32 28 32 38C32 44 35 48 38 52C40 54 42 58 42 62H58C58 58 60 54 62 52C65 48 68 44 68 38C68 28 60 20 50 20Z" fill="#E87722" />
          <rect x="43" y="66" width="14" height="4" rx="2" fill="#00A3E0" />
          <rect x="45" y="72" width="10" height="3" rx="1.5" fill="#138808" />
          <text 
            x="50" 
            y="43" 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontFamily="system-ui, sans-serif" 
            fontWeight="900" 
            fontSize="12"
          >
            SIH
          </text>
        </svg>
      );

    default:
      return (
        <div 
          className="w-full h-full rounded-full bg-gradient-to-br from-[#191919] to-[#333333] text-white flex items-center justify-center font-bold text-xs shadow-inner"
          title={name}
        >
          {initials}
        </div>
      );
  }
}

/* =========================================================================
   MAIN CERTIFICATIONS PAGE COMPONENT
   Features: Compact Design Color Cards, Punchy Highlights, 
   Full-Bleed Spacing, and Signature Curved Flying Logo Animation
   ========================================================================= */
export default function CertificationsPage({ onNavigate }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [flightState, setFlightState] = useState(null); // { mode: 'toGrid' | 'toDeck', startRects: {}, destRects: {} }
  const [selectedCert, setSelectedCert] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const reducedMotion = useReducedMotion();

  // Element DOM references for accurate screen-coordinate FLIP flight
  const clusterRefs = useRef({});
  const cardBadgeRefs = useRef({});

  // Extract unique categories for filter pills
  const categories = useMemo(() => {
    const cats = ['All'];
    certificationsData.forEach(c => {
      if (c.category && !cats.includes(c.category)) {
        cats.push(c.category);
      }
    });
    return cats;
  }, []);

  // Filtered certifications
  const filteredCerts = useMemo(() => {
    return certificationsData.filter(c => {
      const matchesCategory = activeCategory === 'All' || c.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Current certificate index within filteredCerts for modal pagination
  const currentCertIndex = useMemo(() => {
    if (!selectedCert) return -1;
    const idx = filteredCerts.findIndex(c => c.id === selectedCert.id);
    return idx !== -1 ? idx : 0;
  }, [selectedCert, filteredCerts]);

  // Navigate to previous certificate in filtered list (circular wrapping)
  const handlePrevCert = (e) => {
    if (e) e.stopPropagation();
    if (!selectedCert || filteredCerts.length <= 1) return;
    const currentIdx = filteredCerts.findIndex(c => c.id === selectedCert.id);
    const prevIdx = (currentIdx - 1 + filteredCerts.length) % filteredCerts.length;
    setSelectedCert(filteredCerts[prevIdx]);
  };

  // Navigate to next certificate in filtered list (circular wrapping)
  const handleNextCert = (e) => {
    if (e) e.stopPropagation();
    if (!selectedCert || filteredCerts.length <= 1) return;
    const currentIdx = filteredCerts.findIndex(c => c.id === selectedCert.id);
    const nextIdx = (currentIdx + 1) % filteredCerts.length;
    setSelectedCert(filteredCerts[nextIdx]);
  };

  // Keyboard navigation: Escape closes, ArrowLeft/ArrowRight cycles through certs
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedCert) {
          setSelectedCert(null);
        } else if (isExpanded) {
          handleStackBack();
        }
      } else if (selectedCert) {
        if (e.key === 'ArrowLeft') {
          handlePrevCert();
        } else if (e.key === 'ArrowRight') {
          handleNextCert();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, isExpanded, filteredCerts, flightState]);

  /* -------------------------------------------------------------------------
     ACTION: EXPAND DECK -> FLY LOGOS TO COLOR DESIGN CARDS
     ------------------------------------------------------------------------- */
  const handleExpand = () => {
    if (flightState) return;

    if (reducedMotion) {
      setIsExpanded(true);
      return;
    }

    // 1. Capture exact starting viewport coordinates of each cluster badge
    const startRects = {};
    certificationsData.forEach(cert => {
      const el = clusterRefs.current[cert.id];
      if (el) {
        startRects[cert.id] = el.getBoundingClientRect();
      }
    });

    // 2. Transition state to grid
    setIsExpanded(true);
    setFlightState({ mode: 'toGrid', startRects, destRects: {} });
  };

  /* -------------------------------------------------------------------------
     ACTION: STACK BACK -> FLY LOGOS FROM CARDS BACK TO DECK CLUSTER
     ------------------------------------------------------------------------- */
  const handleStackBack = () => {
    if (flightState) return;

    if (reducedMotion) {
      setIsExpanded(false);
      return;
    }

    // 1. Capture exact starting viewport coordinates of each card badge
    const startRects = {};
    certificationsData.forEach(cert => {
      const el = cardBadgeRefs.current[cert.id];
      if (el) {
        startRects[cert.id] = el.getBoundingClientRect();
      }
    });

    // 2. Transition state to deck
    setIsExpanded(false);
    setFlightState({ mode: 'toDeck', startRects, destRects: {} });
  };

  /* -------------------------------------------------------------------------
     FLIP COORDINATE MEASUREMENT: Measure destination badges after state change
     ------------------------------------------------------------------------- */
  useLayoutEffect(() => {
    if (flightState?.mode === 'toGrid' && Object.keys(flightState.destRects).length === 0) {
      requestAnimationFrame(() => {
        const destRects = {};
        certificationsData.forEach(cert => {
          const el = cardBadgeRefs.current[cert.id];
          if (el) {
            destRects[cert.id] = el.getBoundingClientRect();
          }
        });
        setFlightState(prev => prev ? { ...prev, destRects } : null);

        // Clear flight state after animation completes
        const totalDuration = 750 + (certificationsData.length - 1) * 35 + 150;
        const timer = setTimeout(() => {
          setFlightState(null);
        }, totalDuration);
        return () => clearTimeout(timer);
      });
    }

    if (flightState?.mode === 'toDeck' && Object.keys(flightState.destRects).length === 0) {
      requestAnimationFrame(() => {
        const destRects = {};
        certificationsData.forEach(cert => {
          const el = clusterRefs.current[cert.id];
          if (el) {
            destRects[cert.id] = el.getBoundingClientRect();
          }
        });
        setFlightState(prev => prev ? { ...prev, destRects } : null);

        const totalDuration = 750 + (certificationsData.length - 1) * 35 + 150;
        const timer = setTimeout(() => {
          setFlightState(null);
        }, totalDuration);
        return () => clearTimeout(timer);
      });
    }
  }, [isExpanded, flightState]);

  return (
    <div 
      className={`w-full max-w-[1600px] mx-auto select-none transition-all duration-300 ${
        isExpanded 
          ? 'px-3 sm:px-5 lg:px-6 pt-5 sm:pt-7 pb-16' 
          : 'px-4 sm:px-8 md:px-12 lg:px-14 pt-10 sm:pt-14 pb-16 min-h-[calc(100vh-60px)] flex flex-col justify-center items-center'
      }`}
    >

      {/* =========================================================================
         STATE 1: THE TACTILE FLOATING CARD DECK (INITIAL VIEW)
         ========================================================================= */}
      {!isExpanded ? (
        <div className="w-full flex flex-col items-center justify-center relative py-6 sm:py-8">
          
          {/* Subtle Ambient Golden Glow Behind Deck */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#FAB816]/25 to-amber-200/25 blur-3xl -z-10 pointer-events-none" />

          {/* Floating Breathing Deck Container */}
          <motion.div 
            animate={reducedMotion ? {} : { y: [-6, 6, -6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative cursor-pointer group"
            onClick={handleExpand}
            role="button"
            tabIndex={0}
            aria-label="Click to explore and unstack certification cards"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleExpand(); }}
          >
            {/* Background Layer 4 (Deepest Ghost Card) */}
            <div 
              className="absolute inset-0 w-80 sm:w-96 h-[460px] sm:h-[490px] rounded-3xl bg-[#EBE7DF] border border-black/10 shadow-md origin-bottom-right transition-transform duration-500 pointer-events-none"
              style={{ transform: 'translate(18px, 20px) rotate(5deg) scale(0.94)' }}
            />

            {/* Background Layer 3 (Ghost Card) */}
            <div 
              className="absolute inset-0 w-80 sm:w-96 h-[460px] sm:h-[490px] rounded-3xl bg-[#EFECE5] border border-black/10 shadow-md origin-bottom-left transition-transform duration-500 pointer-events-none"
              style={{ transform: 'translate(-14px, 14px) rotate(-4deg) scale(0.96)' }}
            />

            {/* Background Layer 2 (Offset Middle Card) */}
            <div 
              className="absolute inset-0 w-80 sm:w-96 h-[460px] sm:h-[490px] rounded-3xl bg-[#F8F6F0] border border-black/10 shadow-lg origin-bottom-right transition-transform duration-500 pointer-events-none"
              style={{ transform: 'translate(8px, 8px) rotate(2.5deg) scale(0.98)' }}
            />

            {/* Front Card with Badge Cluster & Tactile Cue */}
            <motion.div 
              whileHover={{ scale: 1.025, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-80 sm:w-96 h-[460px] sm:h-[490px] rounded-3xl bg-white border-2 border-black/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden z-10 transition-shadow duration-300 group-hover:shadow-amber-500/20 group-hover:border-[#FAB816]/60"
            >
              {/* Top Card Badge & Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30">
                    Interactive Deck
                  </span>
                  <span className="text-xs font-semibold text-[#8E8A80]">
                    11 Badges
                  </span>
                </div>

                <h2 className="font-editorial-heading font-black text-2xl sm:text-3xl text-[#191919] leading-tight">
                  My Certifications
                </h2>
                <p className="text-xs text-[#666666] font-sans mt-1.5 leading-relaxed">
                  Google, Oracle, Red Hat, Infosys, CodeChef &amp; SIH credentials.
                </p>
              </div>

              {/* Central Badge Cluster (Source of Flying Logos) */}
              <div className="my-auto py-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] mb-3 text-center">
                  Participating Issuers &amp; Credentials
                </p>
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3 p-3.5 rounded-2xl bg-[#F5F3EF] border border-black/5">
                  {certificationsData.map((cert) => (
                    <div
                      key={cert.id}
                      ref={el => { clusterRefs.current[cert.id] = el; }}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-2 bg-white shadow-sm border border-black/10 flex items-center justify-center transition-all hover:scale-110 ${
                        flightState?.mode === 'toDeck' && Object.keys(flightState.destRects).length > 0 ? 'opacity-0' : 'opacity-100'
                      }`}
                      title={`${cert.title} (${cert.issuer})`}
                    >
                      <IssuerLogo logo={cert.logo} initials={cert.initials} name={cert.issuer} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Tap Hint */}
              <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#191919] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#FAB816]" />
                  <span>Tap deck to explore cards</span>
                </span>
                <span className="w-8 h-8 rounded-full bg-[#191919] text-[#FAB816] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ) : (

        /* =========================================================================
           STATE 2: EXPANDED GRID WITH BESPOKE DESIGN COLOR CARDS
           Reduced content, punchy highlights, and issuer-themed color styling
           ========================================================================= */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full flex flex-col"
        >
          {/* Controls Bar: Search, Category Filter Pills & Stack into Deck Button */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-white border border-black/10 shadow-xs mb-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-[#8E8A80] absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search by title, issuer, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-4 py-1.5 text-xs rounded-xl bg-[#F5F3EF] border border-transparent focus:border-[#FAB816] focus:bg-white focus:outline-none transition-all text-[#191919]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E8A80] hover:text-[#191919]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills & Stack into Deck Action */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-[#8E8A80] mr-1 hidden sm:block flex-shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-[#191919] text-white shadow-2xs'
                        : 'bg-[#F5F3EF] text-[#666666] hover:text-[#191919] hover:bg-black/5'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Stack Back into Deck Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleStackBack}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#191919] hover:bg-black text-white text-xs font-semibold shadow-xs transition-all cursor-pointer flex-shrink-0 ml-1"
                title="Stack cards back into deck"
              >
                <Layers className="w-3.5 h-3.5 text-[#FAB816]" />
                <span className="hidden sm:inline">Stack into Deck</span>
                <span className="sm:hidden">Deck</span>
              </motion.button>
            </div>
          </div>

          {/* Cards Grid: Curated Designer Color Cards with Reduced Content (4 cards per row on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5 xl:gap-5">
            <AnimatePresence mode="popLayout">
              {filteredCerts.map((cert, index) => {
                const theme = CARD_THEMES[cert.id] || {
                  bg: 'bg-white',
                  border: 'border-black/10 hover:border-[#FAB816]/70',
                  badgeBg: 'bg-[#FAB816]/15 text-[#B8701B] border border-[#FAB816]/30',
                  highlight: cert.learnings[0] || '',
                  skillPills: cert.skills.slice(0, 3),
                  glow: 'hover:shadow-amber-500/15',
                  accent: '#FAB816',
                };

                return (
                  <motion.div
                    key={cert.id}
                    initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 24,
                      delay: reducedMotion ? 0 : index * 0.035 
                    }}
                    whileHover={reducedMotion ? {} : { y: -6, scale: 1.015 }}
                    onClick={() => setSelectedCert(cert)}
                    className={`group cursor-pointer rounded-2xl sm:rounded-3xl ${theme.bg} border ${theme.border} shadow-xs hover:shadow-xl ${theme.glow} transition-all duration-300 flex flex-col justify-between overflow-hidden relative`}
                  >
                    {/* Top Certificate Preview Image nestled in design card */}
                    <div className="relative aspect-[16/10] w-full bg-[#191919]/5 overflow-hidden border-b border-black/5">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-104"
                      />

                      {/* Subtle Gradient Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#191919] text-[11px] font-bold shadow-md">
                          <Maximize2 className="w-3 h-3 text-[#FAB816]" />
                          <span>View Full Certificate</span>
                        </span>
                      </div>

                      {/* TARGET DESTINATION BADGE OF FLYING LOGO ANIMATION */}
                      <div
                        ref={el => { cardBadgeRefs.current[cert.id] = el; }}
                        className={`absolute top-2.5 right-2.5 w-9 h-9 rounded-full p-1.5 bg-white/95 backdrop-blur-md shadow-md border border-black/10 flex items-center justify-center z-10 transition-opacity duration-200 ${
                          flightState?.mode === 'toGrid' && Object.keys(flightState.destRects).length > 0 ? 'opacity-0' : 'opacity-100'
                        }`}
                        title={cert.issuer}
                      >
                        <IssuerLogo logo={cert.logo} initials={cert.initials} name={cert.issuer} />
                      </div>

                      {/* Issue Date Badge */}
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide">
                        {cert.issueDate}
                      </span>
                    </div>

                    {/* Reduced, Punchy Card Content in Design Color Card */}
                    <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Badge in matching Theme Colors */}
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className={`text-[9.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${theme.badgeBg}`}>
                            {cert.category}
                          </span>
                          {cert.creditHours && (
                            <span className="text-[10px] font-medium text-[#8E8A80]">
                              {cert.creditHours}
                            </span>
                          )}
                        </div>

                        {/* Certification Title */}
                        <h3 className="font-editorial-heading font-black text-base sm:text-[17px] text-[#191919] leading-tight mb-1 group-hover:text-[#B8701B] transition-colors line-clamp-1">
                          {cert.title}
                        </h3>
                        
                        {/* Issuer Name */}
                        <p className="text-xs font-semibold text-[#8E8A80] mb-2.5">
                          {cert.issuer}
                        </p>

                        {/* Single-Sentence Punchy Takeaway */}
                        <p className="text-[11.5px] text-[#555555] font-sans leading-relaxed mb-3 line-clamp-2">
                          {theme.highlight}
                        </p>

                        {/* Core Skills Pill Badges */}
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {theme.skillPills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/85 border border-black/5 text-[#191919]/80 shadow-2xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Credential ID & Verified status */}
                      <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between gap-2 text-[10.5px]">
                        <span className="font-mono text-[#8E8A80] truncate max-w-[140px]">
                          ID: {cert.credentialId}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#2E7D32] font-semibold flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Verified</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredCerts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-black/10 mt-4">
              <p className="font-editorial-heading font-bold text-base text-[#191919] mb-1">
                No matching certifications found
              </p>
              <p className="text-xs text-[#8E8A80] mb-3">
                Try clearing your search query or selecting a different category filter.
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="px-4 py-1.5 rounded-full bg-[#191919] text-white text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Dock: "Stack them back" Button */}
          <div className="pt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStackBack}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold shadow-md hover:bg-black transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#FAB816]" />
              <span>Stack them back into deck</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* =========================================================================
         SIGNATURE CURVED FLYING LOGO ANIMATION (PORTAL OVERLAY)
         ========================================================================= */}
      {flightState && Object.keys(flightState.destRects).length > 0 && (
        <div 
          className="fixed inset-0 pointer-events-none z-50 overflow-hidden" 
          aria-hidden="true"
        >
          {certificationsData.map((cert, index) => {
            const start = flightState.startRects[cert.id];
            const dest = flightState.destRects[cert.id];
            if (!start || !dest) return null;

            const deltaX = dest.left - start.left + (dest.width - start.width) / 2;
            const deltaY = dest.top - start.top + (dest.height - start.height) / 2;

            // Curved arc: lifts off upwards then swoops across to card
            const arcHeight = Math.min(-40, Math.min(deltaY * 0.4, -60)) - ((index % 4) * 15);
            const midX = deltaX * 0.45;
            const rotAngle = (index % 2 === 0 ? 1 : -1) * (8 + (index % 3) * 4);

            return (
              <motion.div
                key={`flying-logo-${cert.id}`}
                style={{
                  position: 'fixed',
                  left: start.left,
                  top: start.top,
                  width: start.width,
                  height: start.height,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                animate={{
                  x: [0, midX, deltaX],
                  y: [0, arcHeight, deltaY],
                  scale: [1, 1.35, 1.05, 1],
                  rotate: [0, rotAngle, -rotAngle * 0.3, 0],
                  opacity: [1, 1, 1, 1],
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-full p-2 bg-white/95 backdrop-blur-md shadow-xl border border-black/15 flex items-center justify-center pointer-events-none"
              >
                <IssuerLogo logo={cert.logo} initials={cert.initials} name={cert.issuer} />
              </motion.div>
            );
          })}
        </div>
      )}

      {/* =========================================================================
         LIGHTBOX MODAL (MATCHING REFERENCE IMAGE 1: ARROWS < >, COUNTER PILL, CLOSE)
         ========================================================================= */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none"
          >
            {/* Top-Right Floating Circular Close Button (Matching Image 1) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
              aria-label="Close certificate viewer"
              className="fixed top-4 right-4 sm:top-7 sm:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#191919] shadow-2xl border border-black/10 flex items-center justify-center transition-all cursor-pointer hover:bg-[#F5F5F5]"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </motion.button>

            {/* Left Edge Floating Circular Previous Button < (Matching Image 1) */}
            {filteredCerts.length > 1 && (
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevCert}
                aria-label="Previous certificate"
                className="fixed left-3 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#191919] shadow-2xl border border-black/10 flex items-center justify-center transition-all cursor-pointer hover:bg-[#F5F5F5]"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] -translate-x-0.5" />
              </motion.button>
            )}

            {/* Right Edge Floating Circular Next Button > (Matching Image 1) */}
            {filteredCerts.length > 1 && (
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextCert}
                aria-label="Next certificate"
                className="fixed right-3 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-[#191919] shadow-2xl border border-black/10 flex items-center justify-center transition-all cursor-pointer hover:bg-[#F5F5F5]"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] translate-x-0.5" />
              </motion.button>
            )}

            {/* Bottom Floating Counter Pill (Matching Image 1: Issuer in gold | Title | Index / Total) */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#18181B]/95 text-white shadow-2xl border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium max-w-[94vw] sm:max-w-2xl overflow-hidden"
            >
              <span className="text-[#FAB816] font-bold tracking-tight whitespace-nowrap">
                {selectedCert.issuer}
              </span>
              <span className="text-white/25 select-none">|</span>
              <span className="text-white/90 truncate max-w-[140px] sm:max-w-xs md:max-w-md font-medium">
                {selectedCert.title}
              </span>
              <span className="text-white/25 select-none">|</span>
              <span className="text-white/60 font-mono text-xs whitespace-nowrap">
                {currentCertIndex + 1} / {filteredCerts.length}
              </span>

              {/* Quick Actions inside pill */}
              <div className="flex items-center gap-1.5 ml-1 border-l border-white/15 pl-2 sm:pl-3">
                {selectedCert.verifyUrl && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#FAB816] hover:text-amber-300 transition-colors text-xs font-semibold px-2 py-0.5 rounded-md hover:bg-white/10"
                    title="Verify Certificate Online"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    showDetails 
                      ? 'bg-[#FAB816] text-[#191919] font-bold' 
                      : 'text-white/80 hover:text-white hover:bg-white/10 font-medium'
                  }`}
                  title="Toggle Key Takeaways & Skills"
                >
                  <Award className="w-3 h-3" />
                  <span className="hidden sm:inline">{showDetails ? 'Hide Info' : 'Details'}</span>
                </button>
              </div>
            </motion.div>

            {/* Central Modal Card & Certificate Preview */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-4 max-h-[82vh] my-auto"
            >
              {/* Main Certificate Frame (White Card matching Image 1) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`cert-view-${selectedCert.id}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-2.5 sm:p-5 border border-white/20 flex flex-col items-center justify-center max-h-[76vh] max-w-full overflow-hidden"
                >
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-[68vh] sm:max-h-[72vh] w-auto max-w-full object-contain rounded-xl select-none shadow-sm"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Optional Collapsible Details & Learnings Panel */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 30, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="w-full md:w-88 sm:w-96 bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[76vh] border border-black/10 shrink-0"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full p-1.5 bg-[#F5F3EF] border border-black/10 flex items-center justify-center">
                            <IssuerLogo logo={selectedCert.logo} initials={selectedCert.initials} name={selectedCert.issuer} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8701B] block">
                              {selectedCert.category}
                            </span>
                            <span className="text-xs font-semibold text-[#8E8A80]">
                              {selectedCert.issuerOrg || selectedCert.issuer}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowDetails(false)}
                          className="w-7 h-7 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#555] transition-colors cursor-pointer"
                          aria-label="Hide info panel"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="font-editorial-heading font-black text-lg text-[#191919] leading-tight mb-2">
                        {selectedCert.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs text-[#8E8A80] mb-4">
                        <Calendar className="w-3.5 h-3.5 text-[#FAB816]" />
                        <span>Issued {selectedCert.issueDate}</span>
                        {selectedCert.validThrough && (
                          <span>&bull; Valid through {selectedCert.validThrough}</span>
                        )}
                      </div>

                      {/* Key Takeaways */}
                      <div className="mb-4">
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#191919] mb-2 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-[#FAB816]" />
                          <span>Key Takeaways</span>
                        </h4>
                        <ul className="space-y-1.5">
                          {selectedCert.learnings.map((point, pIdx) => (
                            <li key={pIdx} className="text-xs text-[#555555] leading-relaxed flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FAB816] mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Associated Skills */}
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#8E8A80] mb-1.5">
                          Skills Acquired:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {selectedCert.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F5F3EF] text-[#191919] border border-black/5">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Credential */}
                    <div className="pt-3 border-t border-black/10 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-[#8E8A80] block font-mono">
                          Credential ID
                        </span>
                        <span className="text-xs font-mono font-bold text-[#191919]">
                          {selectedCert.credentialId}
                        </span>
                      </div>
                      {selectedCert.verifyUrl && (
                        <a
                          href={selectedCert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FAB816] text-[#191919] font-bold text-xs hover:bg-[#E5A60F] transition-all shadow-xs"
                        >
                          <span>Verify Online</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Navigation Footer Link */}
      {onNavigate && (
        <div className="mt-16 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <button
            onClick={() => onNavigate('education')}
            className="text-xs font-medium text-[#8E8A80] hover:text-[#191919] transition-colors cursor-pointer"
          >
            &larr; View Education Timeline
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#191919] text-white text-xs font-semibold hover:bg-black transition-all hover:scale-102 cursor-pointer"
          >
            <span>View Featured Projects</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FAB816]" />
          </button>
        </div>
      )}

    </div>
  );
}
