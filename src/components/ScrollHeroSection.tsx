import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import animationConfig from '../config/animation';

const FaultyTerminal = React.lazy(() => import('./FaultyTerminal/FaultyTerminal'));
const Orb = React.lazy(() => import('./Orb/Orb'));

const ScrollHeroSection = () => {
  const { heroTitleMotion, heroSubtitleMotion, accentLineMotion } = useHeroAnimation();
  return (
    <section
      id="hero-section"
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{
        zIndex: 1,
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 w-full h-full z-0">
          <Suspense fallback={<div className="w-full h-full bg-black/40 animate-pulse" />}> 
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
          </Suspense>
        </div>
        <div className="absolute inset-0 bg-black/20 z-20"></div>
      </div>
      <div id="hero-main-content" className="relative z-10 text-center px-6 flex flex-col items-center justify-center h-full">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[340px] h-[340px] md:w-[480px] md:h-[480px] opacity-80">
            <Suspense fallback={<div className="w-full h-full bg-slate-800/40 rounded-full animate-pulse" />}> 
              <Orb hue={260} hoverIntensity={0.20} rotateOnHover={true} forceHoverState={true} />
            </Suspense>
          </div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none text-center" style={{ fontFamily: 'Inter, sans-serif', margin: 0 }}>
            <motion.div {...heroTitleMotion}>
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
            <motion.div {...heroSubtitleMotion}>
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
          <motion.div {...accentLineMotion} className="mt-8 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default ScrollHeroSection;
