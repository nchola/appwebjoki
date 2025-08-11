const animationConfig = {
  heroTitle: {
    initial: { filter: 'blur(10px)', opacity: 0, y: -50 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 1.2, delay: 0.2 },
    className: 'text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-none',
    style: {
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '4.5rem',
      lineHeight: 1.15,
      letterSpacing: '-3px',
      margin: '0.67em 0',
      marginTop: 0,
      marginBottom: 0,
    },
  },
  heroSubtitle: {
    initial: { filter: 'blur(10px)', opacity: 0, y: 50 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 1.2, delay: 0.4 },
    className: 'font-normal block mt-1 text-2xl md:text-3xl lg:text-4xl text-white',
    style: {
      fontFamily: 'DM Sans, sans-serif',
      fontSize: '4rem',
      lineHeight: 1.15,
      letterSpacing: '-3px',
      margin: '0.67em 0',
      marginTop: 0,
      marginBottom: 0,
    },
  },
  accentLine: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.8, delay: 0.8 },
  },
};

export default animationConfig; 