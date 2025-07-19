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
        className="fixed top-0 left-0 w-full h-screen overflow-hidden transition-all duration-800 ease-out"
        style={{ 
          zIndex: 1,
          // Hero reveal animation CSS
          '--hero-reveal-z-index': '3',
          '--hero-reveal-opacity': '1',
          '--hero-reveal-transform': 'scale(1)',
        } as React.CSSProperties}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-neutral-800"></div>
          </video>
          
          {/* Video Overlay - even darker */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-neutral-900/80"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
        </div>

        {/* Hero Content with Orb */}
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* Orb background, centered and behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] opacity-80">
              <Orb hue={260} hoverIntensity={0.20} rotateOnHover={true} forceHoverState= {true} />
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
