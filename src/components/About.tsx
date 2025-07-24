'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/utils/cn";
import CardSwap, { Card } from "./CardSwap/CardSwap";

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
        <br /><br />
        Join dozens of business owners who have experienced positive results from our websites. Contact us today to start your dream website project!
      </motion.div>
      {/* Kanan: CardSwap Benefit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mx-auto">
        {benefitList.map((benefit, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-[#18181b] shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Icon */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="4.5" width="17" height="13" rx="3" fill="#232323" stroke="#fff" strokeWidth="1.4"/><circle cx="7.5" cy="8.5" r="1.2" fill="#fff"/><circle cx="11" cy="8.5" r="1.2" fill="#fff"/><circle cx="15" cy="8.5" r="1.2" fill="#fff"/></svg>
              <span className="text-white/80 text-lg font-bold">{benefit.title}</span>
            </div>
            <p className="text-white/90 text-base">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
