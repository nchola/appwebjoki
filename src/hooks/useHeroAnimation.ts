import animationConfig from '@/config/animation';

export function useHeroAnimation() {
  return {
    heroTitleMotion: {
      initial: animationConfig.heroTitle.initial,
      animate: animationConfig.heroTitle.animate,
      transition: animationConfig.heroTitle.transition,
      className: animationConfig.heroTitle.className,
      style: animationConfig.heroTitle.style,
    },
    heroSubtitleMotion: {
      initial: animationConfig.heroSubtitle.initial,
      animate: animationConfig.heroSubtitle.animate,
      transition: animationConfig.heroSubtitle.transition,
      className: animationConfig.heroSubtitle.className,
      style: animationConfig.heroSubtitle.style,
    },
    accentLineMotion: {
      initial: animationConfig.accentLine.initial,
      animate: animationConfig.accentLine.animate,
      transition: animationConfig.accentLine.transition,
    },
  };
} 