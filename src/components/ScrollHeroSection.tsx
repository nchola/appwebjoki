import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  // Throttle function for performance
  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    const headline = headlineRef.current;

    if (!hero || !content || !headline) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set will-change for performance
    gsap.set([hero, content, headline], { 
      willChange: 'transform, opacity',
      force3D: true 
    });

    // Initial setup
    gsap.set(content, { y: "100vh" });
    gsap.set(headline, { opacity: 1, scale: 1 });

    // Main timeline with optimized timing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: prefersReducedMotion ? false : 1.2, // Slower scrub for smoother animation
        pin: true,
        anticipatePin: 1,
        refreshPriority: -1,
        onUpdate: (self) => {
          // Optimized fade timing - start at 60% scroll progress
          const fadeStart = 0.6;
          const fadeProgress = Math.max(0, Math.min(1, (self.progress - fadeStart) / (1 - fadeStart)));
          
          // Apply cubic-bezier easing manually
          const easeOut = 1 - Math.pow(1 - fadeProgress, 3);
          
          // Hero fade out with smooth scaling
          gsap.to(headline, {
            opacity: 1 - easeOut,
            scale: 1 - (easeOut * 0.05), // Reduced scale change
            y: -(easeOut * 30), // Subtle upward movement
            duration: 0.1,
            ease: "none",
            overwrite: true
          });

          // Add subtle blur effect during transition
          if (fadeProgress > 0) {
            gsap.to(hero, {
              filter: `blur(${fadeProgress * 2}px)`,
              duration: 0.1,
              ease: "none",
              overwrite: true
            });
          }
        }
      }
    });

    // Store the ScrollTrigger instance
    scrollTriggersRef.current.push(tl.scrollTrigger);

    // Content section animation with improved timing
    tl.to(content, {
      y: 0,
      duration: 1.5, // Longer duration for smoother movement
      ease: "power2.inOut"
    });

    // Intersection Observer for additional control
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40% 0px', // Trigger when 60% visible
      threshold: [0.1, 0.3, 0.6, 0.8, 0.9]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) {
          const ratio = entry.intersectionRatio;
          
          // Additional smooth controls based on intersection ratio
          if (ratio < 0.4) {
            // Hero is mostly out of view
            gsap.to(content, {
              opacity: 1,
              duration: 0.8,
              ease: "power2.out"
            });
          }
        }
      });
    }, observerOptions);

    observer.observe(hero);

    // Cleanup function
    return () => {
      // Remove will-change
      gsap.set([hero, content, headline], { willChange: 'auto' });
      
      // Kill all ScrollTriggers
      scrollTriggersRef.current.forEach(trigger => trigger?.kill());
      scrollTriggersRef.current = [];
      
      // Disconnect observer
      observer.disconnect();
      
      // Clear any remaining tweens
      gsap.killTweensOf([hero, content, headline]);
    };
  }, [throttle]);

  return (
    <>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className="relative w-full h-screen overflow-hidden"
        style={{ willChange: 'transform' }}
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
            <source src="/api/placeholder/1920/1080" type="video/mp4" />
            {/* Fallback gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
          </video>
          
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/50 to-indigo-900/60"></div>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h1 
              ref={headlineRef}
              className="text-6xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-none"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                willChange: 'transform, opacity'
              }}
            >
              Digital Worth
              <br />
              <span className="font-extralight italic">Experiencing</span>
            </h1>
            
            {/* Subtle accent line */}
            <div className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center text-white/60">
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent mb-2"></div>
            <span className="text-sm uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section 
        ref={contentRef}
        id="content"
        className="relative z-20 min-h-screen bg-[#0a0f2d] text-white opacity-0"
        style={{ willChange: 'transform' }}
      >
        <div className="container mx-auto px-6 py-24">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tight">
              Crafting Digital
              <br />
              <span className="text-blue-400">Experiences</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              We create immersive digital experiences that connect brands with their audiences through innovative design and cutting-edge technology.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">Strategic Design</h3>
              <p className="text-gray-400 leading-relaxed">
                Every design decision is backed by research and strategy to ensure maximum impact for your brand.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">User-Centered</h3>
              <p className="text-gray-400 leading-relaxed">
                We prioritize user experience in every interaction, creating intuitive and engaging digital products.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-indigo-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-medium mb-4">Future-Ready</h3>
              <p className="text-gray-400 leading-relaxed">
                Our solutions are built with scalability and future growth in mind, adapting to evolving needs.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>

        {/* Additional content to demonstrate scroll */}
        <div className="bg-gradient-to-b from-[#0a0f2d] to-[#1a1f3a] py-24">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-light mb-8 text-white">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to bring your digital vision to life with innovative design and seamless user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollHeroSection;
