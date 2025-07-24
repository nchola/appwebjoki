'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/utils/cn";
import CardSwap, { Card } from "./CardSwap/CardSwap";
import MagicBento from './MagicBento/MagicBento';

const benefitList = [
  {
    id: 1,
    title: "Responsif di Segala Perangkat",
    description: "Website tampil optimal di desktop, tablet, dan smartphone."
  },
  {
    id: 2,
    title: "Revisi tanpa batas",
    description: "Bebas revisi hingga Anda benar-benar puas dengan hasilnya."
  },
  {
    id: 3,
    title: "Optimasi untuk Pertumbuhan Bisnis",
    description: "Fokus pada konversi, SEO, dan performa untuk mendukung bisnis Anda."
  },
  {
    id: 4,
    title: "Biaya Terjangkau, Kualitas Terbaik",
    description: "Harga bersaing tanpa kompromi kualitas dan layanan."
  },
];

const About = () => {
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
    <div className='relative flex flex-col lg:flex-row w-full h-auto min-h-screen p-6 lg:p-24 justify-center items-center bg-black z-10'>
      {/* Kiri: Teks */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='flex z-50 flex-col w-full lg:w-1/2 text-xl leading-[2] md:text-3xl max-w-4xl md:leading-[2] mb-8 lg:mb-0'
      >
        appwebjoki is a web development agency dedicated to helping your business thrive in the digital era. Our experienced team creates visually appealing, functional, and responsive websites optimized for your business goals.
        <br /><br />
        We offer a flexible, customer-focused approach with unlimited revisions until youre completely satisfied. Our mission is to empower your business with innovative web solutions that increase market reach, strengthen brand awareness, and drive sales growth.
        
      </motion.div>
      {/* Kanan: MagicBento untuk Benefit */}
      <div className="w-full max-w-xl mx-auto">
        <MagicBento
          items={benefitList.map(b => ({
            title: b.title,
            description: b.description,
            label: b.title,
            color: "#18181b"
          }))}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          disableAnimations={false}
          particleCount={0}
          enableTilt={false}
          clickEffect={true}
          enableMagnetism={true}
        />
      </div>
    </div>
  );
};

export default About;
