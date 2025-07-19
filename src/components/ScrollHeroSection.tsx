import { useEffect, useRef } from 'react';
import TrustedBySection from './TrustedBySection';
import Orb from './ExternalCSSTemplate/Orb/Orb';

const ScrollHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Cleanup function
    return () => {
      // No cleanup needed for static hero
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
          {/* THIS IS THE PRIMARY SOLID BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-0"></div>
          
          {/* Animated Background Pattern - place above solid background but below content */}
          <div className="absolute inset-0 opacity-20 z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          
          {/* REMOVED: Semi-transparent overlay that was causing blankness */}
          {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-slate-900/60"></div> */}
        </div>

        {/* Hero Content with Orb */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
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

        <TrustedBySection></TrustedBySection>
      </section>
    </>
  );
};

export default ScrollHeroSection;
