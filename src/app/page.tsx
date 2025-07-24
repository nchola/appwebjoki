'use client'
import Header from "@/components/Header";
import About from "@/components/About";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import Services from '@/components/Services';
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import LenisScroll from '@/components/ui/LenisScroll';

const Index = () => {
  return (
    <div className="min-h-screen w-screen max-w-screen overflow-x-hidden box-border">
      <Header />
      <ScrollHeroSection />
      <div
        id="main-content-wrapper"
        className="relative z-[2] w-full max-w-full overflow-x-hidden box-border"
        style={{
          backgroundColor: '#0f172a',
          minHeight: '100vh',
          width: '100vw',
          maxWidth: '100vw',
          boxSizing: 'border-box',
        }}
      >
        <LenisScroll />
        <About />
        <Services />
        <Works />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
