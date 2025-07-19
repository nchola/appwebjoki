import Header from '@/components/Header';
import ScrollHeroSection from '@/components/ScrollHeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

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
            backgroundColor: '#0a0f2d' // Ensure solid background
          }}
        >
          {/* Section 1: Crafting Digital Experiences (already in ScrollHeroSection) */}
          
          {/* Section 2: Filosofi */}
          <PhilosophySection />
          
          {/* Section 3: Portfolio */}
          <PortfolioSection />
          
          {/* Section 4: Testimonials */}
          <TestimonialSection />
          
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
