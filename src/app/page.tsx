'use client'
import React, { useState } from 'react';
import Header from "@/components/ui/Header";
import About from "@/components/About";
import ScrollHeroSection from "@/components/ScrollHeroSection";
import Services from '@/components/Services';
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import LenisScroll from '@/components/ui/LenisScroll';
import ContactModal from '@/components/ui/ContactModal';

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onContactClick={() => setContactModalOpen(true)} />
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
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="work">
          <Works />
        </section>
        <Footer onContactClick={() => setContactModalOpen(true)} />
      </div>
      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
};

export default Index;
