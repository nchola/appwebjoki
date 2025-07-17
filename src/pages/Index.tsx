
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <PortfolioSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
