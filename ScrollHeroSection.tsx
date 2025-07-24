import TrustedBySection from '@/components/ui/TrustedBySection';
import Orb from '@/components/Orb/Orb';
import { TextPressureHero } from '@/components/TextPressure/TextPressure';

const ScrollHeroSection = () => {
  return (
    <>
      {/* Hero Section - Fixed Background */}
      <section 
        id="hero-section"
        className="fixed top-0 left-0 w-full h-screen overflow-hidden"
        style={{ 
          zIndex: 1,
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
        } as React.CSSProperties}
      >
        {/* Remove transparent background, use solid gradient */}
        <div className="absolute inset-0 w-full h-full">
          {/* This should be the SAME background as the section above */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20 z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          </div>
          {/* Reduce overlay opacity or remove entirely */}
          <div className="absolute inset-0 bg-black/20 z-20"></div>
        </div>

        {/* Hero Content with Orb - Only main hero content */}
        <div 
          id="hero-main-content"
          className="relative z-30 flex flex-col items-center justify-center h-full transition-all duration-500 ease-out"
        >
          {/* Orb background, centered and behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] opacity-80">
              <Orb hue={260} hoverIntensity={0.20} rotateOnHover={true} forceHoverState={true} />
            </div>
          </div>
          <div className="relative z-10 text-center px-6">
            <TextPressureHero
              className="text-4xl md:text-6xl lg:text-6xl font-light text-white tracking-tight leading-none"
              scale={true}
              flex={true}
              alpha={true}
              minFontSize={32}
            />
          </div>
        </div>

        <TrustedBySection></TrustedBySection>
      </section>
    </>
  );
};

export default ScrollHeroSection;
