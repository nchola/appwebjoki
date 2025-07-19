import Header from '@/components/Header';
import ScrollHeroSection from '@/components/ScrollHeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const footerReveal = document.getElementById('footer-reveal');
    if (!footerReveal) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollProgress = scrollY / (documentHeight - windowHeight);
      const revealThreshold = 0.97; // Mulai animasi di 97% scroll
      const transitionEnd = 1;      // Selesai di 100% scroll

      if (scrollProgress >= revealThreshold) {
        const revealProgress = Math.min(1, (scrollProgress - revealThreshold) / (transitionEnd - revealThreshold));
        footerReveal.style.transform = `translateY(${(1 - revealProgress) * 100}%)`;
      } else {
        footerReveal.style.transform = 'translateY(100%)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Fixed Background */}
        <ScrollHeroSection />
        
        {/* Main Content Wrapper - Overlay Container */}
        <div 
          id="main-content-wrapper" 
          className="relative z-[2] w-full"
          style={{ 
            marginTop: '100vh',
            backgroundColor: '#0f172a',
            minHeight: '100vh'
          }}
        >
          <PhilosophySection />
          <PortfolioSection />
          <TestimonialSection />
        </div>

        {/* Footer Reveal Section - HIGHER Z-INDEX & FIXED POSITIONING */}
        <section
          id="footer-reveal"
          className="fixed bottom-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
          style={{ 
            zIndex: 3,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            transform: 'translateY(100%)',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {/* Background image */}
          <img
            src="https://cache.juicebox.agency/http/scene_3_gradient_dark_blurcam0045_darker-1920x1080.jpg/18c46d96b820cc867f84353d4910bc58/scene_3_gradient_dark_blurcam0045_darker-1920x1080.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-60"
          />
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Our strategic discovery process powers every meaningful client partnership.
            </h2>
            <a
              href="/strategic-discovery/"
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Learn more
              <span className="ml-3">→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
