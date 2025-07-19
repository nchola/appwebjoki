import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TrustedBySection from './TrustedBySection';
import Orb from './ExternalCSSTemplate/Orb/Orb';

gsap.registerPlugin(ScrollTrigger);

const ScrollHeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(content, { y: 0 });
      return;
    }

    // Set will-change for performance
    gsap.set([hero, content], { 
      willChange: 'transform',
      force3D: true 
    });

    // Initial setup - content section starts below viewport
    gsap.set(content, { y: "100vh" });

    // Create scroll-triggered animation for physical covering effect
    const scrollTrigger = ScrollTrigger.create({
      trigger: content,
      start: "top bottom", // Animation starts when content section enters viewport
      end: "top top", // Animation ends when content section reaches top
      scrub: true, // Link animation directly to scroll progress
      onUpdate: (self) => {
        // Calculate transform based on scroll progress
        const progress = self.progress;
        const yValue = 100 - (progress * 100); // From 100vh to 0
        
        gsap.set(content, {
          y: `${yValue}vh`,
          ease: "none"
        });
      }
    });

    // Cleanup function
    return () => {
      gsap.set([hero, content], { willChange: 'auto' });
      scrollTrigger.kill();
      gsap.killTweensOf([hero, content]);
    };
  }, []);

  return (
    <>
      {/* Hero Section - Fixed Background */}
      <section 
        ref={heroRef}
        id="hero-section"
        className="fixed top-0 left-0 w-full h-screen overflow-hidden"
        style={{ zIndex: 1 }}
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

      {/* Spacer to allow scroll trigger */}
      <div className="h-screen"></div>

      {/* Content Section - Sliding Overlay */}
      <section 
        ref={contentRef}
        id="content-section"
        className="relative w-full min-h-screen bg-[#0a0f2d] text-white"
        style={{ zIndex: 2, willChange: 'transform' }}
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
