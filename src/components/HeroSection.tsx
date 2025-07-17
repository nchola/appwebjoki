
import { ParticleTextEffect } from '@/components/ExternalCSSTemplate/particle-text-effect';

const HeroSection = () => {
  return (
    <section className="w-full h-screen min-h-0 max-h-screen p-0 m-0 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full">
        <ParticleTextEffect words={['APPWEBJOKI']} />
      </div>
    </section>
  );
};

export default HeroSection;
