'use client'
import React, { useState } from 'react';
import Header from "@/components/ui/Header";
import About from "@/components/About";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import Services from '@/components/Services';
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import ContactModal from '@/components/ui/ContactModal';
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollTriggerCurtain, { SectionConfig } from '@/components/ScrollTriggerCurtain';

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Konfigurasi section
  const sections: SectionConfig[] = [
    {
      id: 'about',
      height: '100vh',
      background: '#0f172a',
      content: <About />,
    },
    {
      id: 'services',
      height: '120vh',
      background: '#1a202c',
      content: <Services />,
    },
    {
      id: 'work',
      height: '80vh',
      background: '#2d3748',
      content: <Works />,
    },
    // Tambahkan section lain jika perlu
  ];

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header onContactClick={() => setContactModalOpen(true)} />
        <ScrollTriggerCurtain
          heroContent={<ScrollHeroSection />}
          sections={sections}
        />
        <Footer onContactClick={() => setContactModalOpen(true)} />
        <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
      </div>
    </LanguageProvider>
  );
};

export default Index;
