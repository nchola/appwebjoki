import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedNavItemProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const AnimatedNavItem: React.FC<AnimatedNavItemProps> = ({ label, onClick, className, icon }) => {
  const itemRef = useRef<HTMLLIElement | HTMLButtonElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;
    
    const handleMouseEnter = () => {
      // Background glow effect
      gsap.to(item, {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
        duration: 0.3,
        ease: 'power2.out',
      });
      
      // Icon animation
      const iconElement = item.querySelector('.icon-wrapper');
      if (iconElement) {
        gsap.to(iconElement, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };
    
    const handleMouseLeave = () => {
      // Reset background effect
      gsap.to(item, {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
        duration: 0.3,
        ease: 'power2.out',
      });
      
      // Reset icon animation
      const iconElement = item.querySelector('.icon-wrapper');
      if (iconElement) {
        gsap.to(iconElement, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
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
        className={`relative overflow-hidden cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent transition-all duration-300 hover:scale-[1.02] ${className || ''}`}
        type="button"
      >
        {icon && (
          <span className="icon-wrapper mr-2 flex-shrink-0 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span className="text-label flex-1">{label}</span>
      </button>
    );
  }
  
  return (
    <li
      ref={itemRef as React.RefObject<HTMLLIElement>}
      className={`relative overflow-hidden cursor-pointer flex items-center gap-3 px-4 py-3 rounded-lg border border-transparent transition-all duration-300 hover:scale-[1.02] ${className || ''}`}
    >
      {icon && (
        <span className="icon-wrapper mr-2 flex-shrink-0 transition-transform duration-300">
          {icon}
        </span>
      )}
      <span className="text-label flex-1">{label}</span>
    </li>
  );
};

export default AnimatedNavItem; 