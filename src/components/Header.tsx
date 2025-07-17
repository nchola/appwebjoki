
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate menu items when menu opens
    if (isMenuOpen) {
      gsap.fromTo('.nav-link-item', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">📧 hello@appwebjoki.com</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">📱 +62 812-3456-7890</span>
            </div>
            <a 
              href="#contact" 
              className="group bg-brand text-white px-4 py-1.5 rounded-md text-xs font-semibold hover:bg-brand-hover transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">CONTACT US</span>
              <div className="absolute inset-0 bg-brand-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-12 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 tracking-tight">APPWEBJOKI</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 relative py-2"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button className="bg-brand hover:bg-brand-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-brand-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 rounded-lg"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}></span>
                  <span className={`absolute w-full h-0.5 bg-gray-900 top-3 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute w-full h-0.5 bg-gray-900 transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}></span>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 top-32 bg-white transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="nav-link-item overflow-hidden">
                <a
                  href={item.href}
                  className="block text-2xl font-semibold text-gray-900 hover:text-brand transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div className="nav-link-item pt-6">
              <Button className="w-full bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
