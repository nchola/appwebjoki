import TrustedBySection from './ui/TrustedBySection';
import Orb from './Orb/Orb';
import { TextPressureHero } from './TextPressure/TextPressure';
import FaultyTerminal from './FaultyTerminal/FaultyTerminal';

// test
const ScrollHeroSection = () => {
  return (
    <section
      id="hero-section"
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{
        zIndex: 1,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      {/* Remove transparent background, use solid gradient */}
      <div className="absolute inset-0 w-full h-full">
        {/* This should be the SAME background as the section above */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        {/* Animated Background: FaultyTerminal */}
        <div className="absolute inset-0 w-full h-full z-0">
          <FaultyTerminal
            className="w-full h-full"
            scale={1.5}
            gridMul={[2,1]}
            digitSize={1.5}
            scanlineIntensity={0.18}
            glitchAmount={0.7}
            flickerAmount={0.5}
            noiseAmp={0.7}
            chromaticAberration={0.04}
            dither={0.2}
            curvature={0.12}
            tint="#919191"
            mouseReact={false}
            brightness={0.7}
            style={{position: 'absolute', inset: 0, zIndex: 0}}
          />
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

      {/* <TrustedBySection></TrustedBySection> */}
    </section>
  );
};

export default ScrollHeroSection;
