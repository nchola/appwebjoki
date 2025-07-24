import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedNavItemProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({ label, onClick, className }) => {
  const itemRef = useRef<HTMLLIElement | HTMLButtonElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;
    const textHover = item.querySelector('.hover');
    gsap.set(textHover, { yPercent: 100, perspective: 1000, rotationX: -90 });
    const handleMouseEnter = () => {
      const textInitial = item.querySelector('.initial');
      const textHover = item.querySelector('.hover');
      gsap.to(textInitial, {
        yPercent: -100,
        perspective: 1000,
        rotationX: 90,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to(textHover, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: 'power4.out',
      });
    };
    const handleMouseLeave = () => {
      const textInitial = item.querySelector('.initial');
      const textHover = item.querySelector('.hover');
      gsap.to(textInitial, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to(textHover, {
        yPercent: 100,
        perspective: 1000,
        rotationX: -90,
        duration: 1,
        ease: 'power4.out',
      });
    };
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Render as <li> or <button> depending on onClick
  if (onClick) {
    return (
      <button
        ref={itemRef as React.RefObject<HTMLButtonElement>}
        onClick={onClick}
        className={`relative overflow-hidden h-5 cursor-pointer ${className || ''}`}
        type="button"
      >
        <span className="block initial absolute top-0 left-0 w-full h-full">{label}</span>
        <span className="block hover absolute top-0 left-0 w-full h-full">{label}</span>
      </button>
    );
  }
  return (
    <li
      ref={itemRef as React.RefObject<HTMLLIElement>}
      className={`relative overflow-hidden h-5 cursor-pointer ${className || ''}`}
    >
      <span className="block initial absolute top-0 left-0 w-full h-full">{label}</span>
      <span className="block hover absolute top-0 left-0 w-full h-full">{label}</span>
    </li>
  );
};

export default AnimatedNavItem; 