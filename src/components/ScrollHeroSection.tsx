import Orb from './Orb/Orb';
import FaultyTerminal from './FaultyTerminal/FaultyTerminal';
import { motion } from 'framer-motion';

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
        
        {/* Hero Text Content with Animation */}
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none text-center"
            style={{ fontFamily: 'Inter, sans-serif', margin: 0 }}
          >
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: '4.5rem',
                lineHeight: 1.15,
                letterSpacing: '-3px',
                textAlign: 'center',
                margin: '0.67em 0',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              <span style={{
                background: 'linear-gradient(135deg, #4091ea 0%, #667eea 50%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Precision
              </span>
              {' '}in Code
            </motion.div>
            <motion.div
              initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
              animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="font-normal block mt-1 text-2xl md:text-3xl lg:text-4xl text-white"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 520,
                fontSize: '4rem',
                lineHeight: 1.15,
                letterSpacing: '-3px',
                textAlign: 'center',
                margin: '0.67em 0',
                marginTop: 0,
                marginBottom: 0
              }}
            >
              Clarity in{' '}
              <span style={{
                background: 'linear-gradient(135deg, #4091ea 0%, #667eea 50%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Experience
              </span>
            </motion.div>
          </h1>
          
          {/* Subtle accent line */}
          <motion.div 
            className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </div>
      </div>

      {/* <TrustedBySection></TrustedBySection> */}
    </section>
  );
};

export default ScrollHeroSection;
