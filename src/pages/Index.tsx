import Header from '@/components/Header';
import ScrollHeroSection from '@/components/ScrollHeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';

const Index = () => {
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
            marginTop: '100vh', // Start below the hero section
            backgroundColor: '#0f172a', // Solid dark background
            minHeight: '100vh' // Ensure it covers the full viewport
          }}
        >
          {/* Section 2: Filosofi */}
          <PhilosophySection />
          {/* Section 3: Portfolio */}
          <PortfolioSection />
          {/* Section 4: Testimonials */}
          <TestimonialSection />
        </div>

        {/* Footer Reveal Section - Juicebox Style */}
        <section
          id="footer-reveal"
          className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
          style={{ background: 'radial-gradient(94.55% 94.55% at 50% 5.45%, #0C0D10 50%, #1C2640 100%)' }}
        >
          {/* Full-bleed background image */}
          <img
            src="https://cache.juicebox.agency/http/scene_3_gradient_dark_blurcam0045_darker-1920x1080.jpg/18c46d96b820cc867f84353d4910bc58/scene_3_gradient_dark_blurcam0045_darker-1920x1080.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          {/* Content container */}
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
