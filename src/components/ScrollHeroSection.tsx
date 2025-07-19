import { useEffect, useRef } from 'react';
import TrustedBySection from './TrustedBySection';
import Orb from './ExternalCSSTemplate/Orb/Orb';

const ScrollHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const footerContent = footerContentRef.current;
    const mainContent = document.getElementById('hero-main-content');
    
    if (!hero || !footerContent || !mainContent) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Scroll-based footer reveal logic
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate when we're near the bottom of the page
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      
      // Start revealing footer content when we're 80% down the page
      const revealThreshold = 0.8;
      
      if (scrollProgress >= revealThreshold) {
        // Calculate opacity based on how close we are to the bottom
        const revealProgress = Math.min(1, (scrollProgress - revealThreshold) / (1 - revealThreshold));
        
        // Show footer content
        footerContent.style.opacity = `${revealProgress}`;
        footerContent.style.pointerEvents = revealProgress > 0.5 ? 'auto' : 'none';
        footerContent.style.transform = `translateY(${(1 - revealProgress) * 20}px)`;
        
        // Hide main hero content
        mainContent.style.opacity = `${1 - revealProgress}`;
        mainContent.style.transform = `translateY(${-revealProgress * 20}px)`;
      } else {
        // Show main hero content, hide footer content
        footerContent.style.opacity = '0';
        footerContent.style.pointerEvents = 'none';
        footerContent.style.transform = 'translateY(20px)';
        
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0px)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set correct state
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section - Fixed Background */}
      <section 
        ref={heroRef}
        id="hero-section"
        className="fixed top-0 left-0 w-full h-screen overflow-hidden"
        style={{ 
          zIndex: 1,
        } as React.CSSProperties}
      >
        {/* Background - Solid gradient with fallback */}
        <div className="absolute inset-0 w-full h-full">
          {/* Solid gradient background - this should be visible! */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* Overlay to darken background - make it fully opaque if it's the intended background */}
          {/* If this is semi-transparent, it will show the white page background */}
          <div className="absolute inset-0 bg-black z-20"></div> {/* Changed from bg-black/40 to bg-black for solid background */}
        </div>

        {/* Hero Content with Orb - Initially visible */}
        <div 
          id="hero-main-content"
          className="relative z-30 flex flex-col items-center justify-center h-full transition-all duration-500 ease-out"
        >
          {/* Orb background, centered and behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] opacity-80">
              <Orb hue={260} hoverIntensity={0.20} rotateOnHover={true} forceHoverState={true} />
            </div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 
              className="text-4xl md:text-6xl lg:text-6xl font-light text-white tracking-tight leading-none"
              style={{ 
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Precision in Code
              <br />
              <span className="font-extralight italic">Clarity in Experience</span>
            </h1>
            {/* Subtle accent line */}
            <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
          </div>
        </div>

        {/* FOOTER CONTENT - This is the content that will appear at the very bottom of the page, inside the fixed hero section. */}
        {/* It should be initially hidden and revealed by scroll. */}
        <div 
          ref={footerContentRef}
          id="hero-footer-content"
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 ease-out z-40"
          style={{ pointerEvents: 'none' }}
        >
          {/* This is where your actual footer content will go */}
          <div className="text-center text-white px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">APPWEBJOKI</h3>
                <p className="text-gray-300 text-sm">
                  We create immersive digital experiences that connect brands with their audiences.
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>UI/UX Design</li>
                  <li>Web Development</li>
                  <li>Mobile Apps</li>
                  <li>Branding</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>hello@appwebjoki.com</li>
                  <li>+62 812-3456-7890</li>
                  <li>Jakarta, Indonesia</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-6">Let's build something amazing together.</p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
                Get in Touch
              </button>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-sm">
                © 2024 APPWEBJOKI. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        <TrustedBySection></TrustedBySection>
      </section>
    </>
  );
};

export default ScrollHeroSection;
