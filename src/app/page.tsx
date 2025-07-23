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
    <div className="min-h-screen">
      <Header />
      <ScrollHeroSection />
      <div
        id="main-content-wrapper"
        className="relative z-[2] w-full"
        style={{
          backgroundColor: '#0f172a',
          minHeight: '100vh'
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
