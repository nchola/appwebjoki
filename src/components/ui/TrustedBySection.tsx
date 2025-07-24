'use client';
import { useState, useEffect } from 'react';

const TrustedBySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const companies = [
    { name: 'Retool', delay: 0.2 },
    { name: 'Vercel', delay: 0.4 },
    { name: 'Remote', delay: 0.6 },
    { name: 'Arc', delay: 0.8 },
    { name: 'Raycast', delay: 1.0 }
  ];

  return (
    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-8 z-30">
      <div className={`text-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h3 className="text-lg font-medium text-white/60 mb-12 leading-relaxed">
          Powering innovation at companies worldwide
        </h3>
        
        <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${company.delay}s` : '0s' 
              }}
            >
              <div className="group cursor-pointer">
                <div className="w-20 md:w-24 h-8 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105 group-hover:-translate-y-1">
                  <span className="text-white/40 text-xs md:text-sm font-medium group-hover:text-white/70 transition-colors duration-300">
                    {company.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;