'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import MagicBento from './MagicBento/MagicBento';
import { useLanguage } from "@/context/LanguageContext";

const benefitList = [
  {
    id: 1,
    title: { id: "Responsif di Segala Perangkat", en: "Responsive on All Devices" },
    description: {
      id: "Website tampil optimal di desktop, tablet, dan smartphone.",
      en: "Website looks optimal on desktop, tablet, and smartphone."
    }
  },
  {
    id: 2,
    title: { id: "Revisi tanpa batas", en: "Unlimited Revisions" },
    description: {
      id: "Bebas revisi hingga Anda benar-benar puas dengan hasilnya.",
      en: "Unlimited revisions until you are truly satisfied with the result."
    }
  },
  {
    id: 3,
    title: { id: "Optimasi untuk Pertumbuhan Bisnis", en: "Optimized for Business Growth" },
    description: {
      id: "Fokus pada konversi, SEO, dan performa untuk mendukung bisnis Anda.",
      en: "Focus on conversion, SEO, and performance to support your business."
    }
  },
  {
    id: 4,
    title: { id: "Biaya Terjangkau, Kualitas Terbaik", en: "Affordable, Best Quality" },
    description: {
      id: "Harga bersaing tanpa kompromi kualitas dan layanan.",
      en: "Competitive prices without compromising quality and service."
    }
  },
];

const About = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation plays only once
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false); // Reset the animation when scrolling up
        }
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="relative w-full min-h-screen p-6 lg:p-24 bg-black z-10">
      {/* Header About */}
      <h3 className="w-full text-xl md:text-5xl font-bold text-white mb-8 text-center lg:text-left">
        {language === 'id' ? 'Tentang Kami' : 'About'}
      </h3>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        {/* Kiri: Teks */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className='flex z-50 flex-col w-full lg:w-1/2 text-xl leading-[2] md:text-3xl max-w-4xl md:leading-[2] mb-8 lg:mb-0'
        >
          {language === 'id'
            ? 'appwebjoki adalah agensi pengembangan web yang berdedikasi membantu bisnis Anda berkembang di era digital. Tim kami yang berpengalaman menciptakan website yang menarik, fungsional, dan responsif, dioptimalkan untuk tujuan bisnis Anda.\n\nKami menawarkan pendekatan fleksibel dan berorientasi pada pelanggan dengan revisi tanpa batas hingga Anda benar-benar puas. Misi kami adalah memberdayakan bisnis Anda dengan solusi web inovatif yang meningkatkan jangkauan pasar, memperkuat brand awareness, dan mendorong pertumbuhan penjualan.'
            : 'appwebjoki is a web development agency dedicated to helping your business thrive in the digital era. Our experienced team creates visually appealing, functional, and responsive websites optimized for your business goals.\n\nWe offer a flexible, customer-focused approach with unlimited revisions until you are completely satisfied. Our mission is to empower your business with innovative web solutions that increase market reach, strengthen brand awareness, and drive sales growth.'}
        </motion.div>
        {/* Kanan: MagicBento */}
        <div className="w-full max-w-xl mx-auto">
          <MagicBento
            items={benefitList.map(b => ({
              title: b.title[language],
              description: b.description[language],
              label: "",
              color: "#18181b"
            }))}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            disableAnimations={false}
            particleCount={12}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
