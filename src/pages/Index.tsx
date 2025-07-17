
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhilosophySection from '@/components/PhilosophySection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import LottieSection from '@/components/LottieSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <LottieSection />
        <PhilosophySection />
        <PortfolioSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
