import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Globe, ArrowUpRight, Home, Briefcase, User, Mail, Settings } from 'lucide-react';
import Dock from '../Dock/Dock';
import type { DockItemData } from '../Dock/Dock';
import ContactModal from './ContactModal';
import { navItems, expandedNavItems } from '../../data/navigation';
import AnimatedNavItem from './AnimatedNavItem';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedMenu from './AnimatedMenu';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLang, setCurrentLang] = useState('id');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuMainRef = useRef<HTMLDivElement>(null);
  const [menuPos, setMenuPos] = useState<{top: number, right: number}>({top: 0, right: 0});
  const [arrowLeft, setArrowLeft] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuButtonRef.current && menuMainRef.current) {
      const iconRect = menuButtonRef.current.getBoundingClientRect();
      const menuRect = menuMainRef.current.getBoundingClientRect();
      const iconCenter = iconRect.left + iconRect.width / 2;
      const arrowWidth = 16; // w-4
      const left = iconCenter - menuRect.left - arrowWidth / 2;
      setMenuPos({
        top: iconRect.bottom + 12,
        right: window.innerWidth - iconRect.right
      });
      setArrowLeft(left);
    }
  }, [isMenuOpen]);

  // Helper scroll
  const handleSectionScroll = (href: string) => {
    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const id = href.replace('/', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Dock items untuk navigation
  const dockItems: DockItemData[] = navItems.map((item, index) => ({
    icon: (
      (() => {
        switch (item.icon) {
          case 'Home': return <Home className="w-5 h-5 text-white/80" />;
          case 'Briefcase': return <Briefcase className="w-5 h-5 text-white/80" />;
          case 'User': return <User className="w-5 h-5 text-white/80" />;
          case 'Mail': return <Mail className="w-5 h-5 text-white/80" />;
          case 'Settings': return <Settings className="w-5 h-5 text-white/80" />;
          default: return null;
        }
      })()
    ),
    label: item.name,
    onClick: item.name === 'Contact' && onContactClick
      ? () => onContactClick()
      : () => handleSectionScroll(item.href),
    className: item.current ? 'bg-white/20 border-white/30' : 'bg-white/5 border-white/10',
  }));

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleLang = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setIsLangDropdownOpen(false);
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out bg-transparent"
      style={{ height: '120px' }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="header__logo">
            <a href="#" aria-label="Company Homepage" className="block" onClick={e => { e.preventDefault(); handleSectionScroll('/'); }}>
              <div className="flex items-center">
                <img
                  src="/logo.svg"
                  alt="AppWebJoki Logo"
                  className="h-8 w-auto"
                  style={{ filter: 'invert(1)' }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation with Dock */}
          <div className="hidden lg:flex items-center h-full">
            <Dock
              items={dockItems}
              className="bg-white/5 backdrop-blur-sm border border-white/10 mt-0 mb-0 pb-0 static"
              magnification={56}
              distance={120}
              baseItemSize={40}
              panelHeight={50}
            />
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Language switcher"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLang}</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 py-2 w-20 bg-[#0C0D10]/95 backdrop-blur-md border border-white/10 rounded-lg">
                  <button
                    onClick={() => switchLanguage('en')}
                    className="block w-full px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                  >
                    en
                  </button>
                </div>
              )}
            </div>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'top-3'
                  }`}
                />
                <span 
                  className={`absolute block w-full h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Expanded Navigation */}
      <AnimatePresence>
        <AnimatedMenu
          open={isMenuOpen}
          anchorRef={menuButtonRef}
          items={expandedNavItems}
          renderItem={(item) => (
            <AnimatedNavItem
              label={item.name}
              onClick={item.name === 'Contact' && onContactClick
                ? () => { setIsMenuOpen(false); onContactClick(); }
                : () => { setIsMenuOpen(false); handleSectionScroll(item.href); }
              }
              className={`w-full py-4 text-2xl font-medium transition-colors duration-200 ${
                item.secondary 
                  ? 'text-white/60 hover:text-white/80' 
                  : 'text-white hover:text-white/80'
              }`}
            />
          )}
        />
      </AnimatePresence>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
};

export default Header; 