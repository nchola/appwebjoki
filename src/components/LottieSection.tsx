import { useEffect, useState } from 'react';
import Player from 'lottie-react';

const LottieSection = () => {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    fetch('/ORBIT-5-01-LITE.json')
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  return (
    <section className="w-full bg-black flex justify-center items-center overflow-hidden" style={{ minHeight: 0, height: 'auto' }}>
      {animationData && (
        <Player
          autoplay
          loop
          animationData={animationData}
          style={{ width: '100%', height: '100%', maxHeight: 500 }}
          className="w-full h-auto"
        />
      )}
    </section>
  );
};

export default LottieSection;
