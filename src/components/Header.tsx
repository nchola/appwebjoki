
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, ArrowUpRight, Home, Briefcase, User, Mail } from 'lucide-react';
import Dock from './ExternalCSSTemplate/Dock';
import type { DockItemData } from './ExternalCSSTemplate/Dock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentLang, setCurrentLang] = useState('id');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items untuk desktop
  const navItems = [
    { name: 'Home', href: '/', current: true, icon: Home },
    { name: 'Work', href: '/work', featured: true, icon: Briefcase },
    { name: 'About', href: '/about', featured: true, icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  // Expanded navigation items
  const expandedNavItems = [
    { name: 'Work', href: '/work', featured: true },
    { name: 'About', href: '/about', featured: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact', featured: true },
    { name: 'Team', href: '/team', secondary: true },
    { name: 'Services', href: '/services', secondary: true, featured: true },
    { name: 'Careers', href: '/careers', secondary: true, featured: true },
  ];

  // Dock items untuk navigation
  const dockItems: DockItemData[] = navItems.map((item, index) => ({
    icon: (
      <item.icon className="w-5 h-5 text-white/80" />
    ),
    label: item.name,
    onClick: () => {
      console.log(`Navigate to ${item.name}`);
    },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-[#0C0D10]/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      style={{ height: '130px' }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="header__logo">
            <a href="/" aria-label="Company Homepage" className="block">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white tracking-tight">
                  APPWEBJOKI
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation with Dock */}
          <div className="hidden lg:flex items-center">
            <Dock
              items={dockItems}
              className="bg-white/5 backdrop-blur-sm border border-white/10"
              magnification={70}
              distance={150}
              baseItemSize={50}
              panelHeight={64}
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

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Contact Button */}
            <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-[#0C0D10] rounded-full font-medium hover:bg-white/90 transition-all duration-200 transform hover:scale-105">
              <span>Kontak</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
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
      <div 
        className={`lg:hidden fixed inset-0 bg-[#0C0D10]/98 backdrop-blur-md transition-all duration-500 ease-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: '130px' }}
      >
        <div className="container mx-auto px-6 py-8">
          <nav className="space-y-6">
            {expandedNavItems.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-500 ease-out ${
                  isMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  className={`group flex items-center justify-between py-4 text-2xl font-medium transition-colors duration-200 ${
                    item.secondary 
                      ? 'text-white/60 hover:text-white/80' 
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                linkedin
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
              >
                instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
