import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SectionConfig {
  id: string;
  height: string; // e.g., '100vh', '150vh'
  background: string;
  content: React.ReactNode;
}

interface ScrollTriggerCurtainProps {
  heroContent: React.ReactNode;
  sections: SectionConfig[];
}

const ScrollTriggerCurtain: React.FC<ScrollTriggerCurtainProps> = ({
  heroContent,
  sections
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [debug, setDebug] = useState({
    scroll: 0,
    window: 0,
    active: 'hero',
    progress: 0,
    triggers: [] as { name: string, px: number }[]
  });

  // Helper untuk log dan tampilkan di UI
  const logEvent = (msg: string) => {
    setLogs(prev => [msg, ...prev.slice(0, 19)]); // max 20 log
  };

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const sectionElements = sectionsRef.current;

    if (!container || !hero || sectionElements.some(el => !el)) return;

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.set(hero, { 
      zIndex: 1,
      position: 'relative'
    });
    
    sectionElements.forEach((section, index) => {
      if (section) {
        gsap.set(section, { 
          zIndex: 10 + index,
          y: window.innerHeight, // start di bawah viewport
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          // height: sections[index].height // jangan pakai height prop, biarkan natural
        });
      }
    });

    // Hitung cumulative offset px untuk setiap section berdasarkan tinggi aktual
    let offsets: number[] = [];
    let acc = 0;
    const sectionHeights = sectionElements.map(section => section?.getBoundingClientRect().height || 0);
    for (let i = 0; i < sectionHeights.length; i++) {
      offsets.push(acc);
      acc += sectionHeights[i];
    }
    // ScrollTrigger untuk setiap section
    sectionElements.forEach((section, index) => {
      if (!section) return;
      const sectionConfig = sections[index];
      const sectionHeightPx = sectionHeights[index];
      const startPx = offsets[index];
      const endPx = startPx + sectionHeightPx;
      ScrollTrigger.create({
        trigger: container,
        start: `${startPx}px top`,
        end: `${endPx}px top`,
        scrub: 0.8,
        animation: gsap.fromTo(section,
          {
            y: window.innerHeight,
            opacity: 1
          },
          {
            y: 0,
            opacity: 1,
            ease: 'none'
          }
        ),
        onEnter: () => {
          section.style.zIndex = (20 + index).toString();
          logEvent(`Section ${index + 1} [${sectionConfig.id}] onEnter`);
        },
        onLeave: () => {
          logEvent(`Section ${index + 1} [${sectionConfig.id}] onLeave`);
        },
        onEnterBack: () => {
          section.style.zIndex = (20 + index).toString();
          logEvent(`Section ${index + 1} [${sectionConfig.id}] onEnterBack`);
        },
        onLeaveBack: () => {
          logEvent(`Section ${index + 1} [${sectionConfig.id}] onLeaveBack`);
        }
      });
    });
    // Pin hero selama total tinggi semua section
    const totalScrollDistance = offsets[offsets.length - 1] + (sectionHeights.length > 0 ? sectionHeights[sectionHeights.length - 1] : 0);
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: `+=${totalScrollDistance}`,
      pin: true,
      pinSpacing: false
    });
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sections]);

  useEffect(() => {
    const updateDebug = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;
      // Hitung trigger points
      let triggers: { name: string, px: number }[] = [];
      let acc = 0;
      for (let i = 0; i < sections.length; i++) {
        triggers.push({ name: sections[i].id, px: acc });
        acc += parseInt(sections[i].height.replace('vh', '')) * winH / 100;
      }
      // Deteksi active section
      let active = 'hero';
      let progress = 0;
      for (let i = 0; i < triggers.length; i++) {
        const start = triggers[i].px;
        const end = triggers[i + 1]?.px ?? acc + 1;
        if (scrollY >= start && scrollY < end) {
          active = sections[i].id;
          progress = Math.round(((scrollY - start) / (end - start)) * 100);
          break;
        }
      }
      setDebug({
        scroll: scrollY,
        window: winH,
        active,
        progress,
        triggers
      });
    };
    window.addEventListener('scroll', updateDebug);
    window.addEventListener('resize', updateDebug);
    updateDebug();
    return () => {
      window.removeEventListener('scroll', updateDebug);
      window.removeEventListener('resize', updateDebug);
    };
  }, [sections]);

  return (
    <div ref={containerRef} className="relative">
      {/* UI Debugger Logger */}
      <div style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        background: 'rgba(20,20,20,0.85)',
        color: '#fff',
        fontSize: 12,
        borderRadius: 8,
        padding: '12px 16px',
        maxWidth: 320,
        maxHeight: 320,
        overflowY: 'auto',
        boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
        pointerEvents: 'auto',
      }}>
        <div style={{fontWeight: 'bold', marginBottom: 4, fontSize: 13}}>Curtain Debug Log</div>
        <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
          {logs.map((log, i) => (
            <li key={i} style={{marginBottom: 2, whiteSpace: 'pre'}}>{log}</li>
          ))}
        </ul>
      </div>
      {/* UI Debugger ala blueprint */}
      <div style={{
        position: 'fixed',
        top: 16,
        left: 16,
        zIndex: 9999,
        background: 'rgba(10,15,30,0.95)',
        color: '#b3e5fc',
        fontSize: 14,
        borderRadius: 8,
        padding: '14px 18px',
        minWidth: 220,
        fontFamily: 'monospace',
        boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
        pointerEvents: 'auto',
      }}>
        <div style={{fontWeight: 'bold', color: '#4fc3f7', fontSize: 16, marginBottom: 6}}>ScrollTrigger Debug</div>
        <div>Scroll: <span style={{color:'#fff'}}>{debug.scroll}px</span></div>
        <div>Window: <span style={{color:'#fff'}}>{debug.window}px</span></div>
        <div>Active: <span style={{color:'#4caf50'}}>{debug.active}</span></div>
        <div>Progress: <span style={{color:'#fff'}}>{debug.progress}%</span></div>
        <div style={{margin: '8px 0 2px', borderBottom: '1px solid #333'}} />
        <div style={{fontWeight: 'bold', fontSize: 13, color: '#90caf9'}}>Trigger Points:</div>
        {debug.triggers.map(t => (
          <div key={t.name} style={{color:'#fff', fontSize:13}}>{t.name.charAt(0).toUpperCase() + t.name.slice(1)}: {t.px}px</div>
        ))}
      </div>
      <div 
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {heroContent}
      </div>
      <div className="relative">
        {sections.map((section, index) => (
          <div key={section.id} className="relative w-full">
            <div 
              className="w-full"
              style={{ height: section.height }}
            />
            <div
              ref={el => { sectionsRef.current[index] = el; return undefined; }}
              className="fixed top-0 left-0 w-full overflow-hidden"
              style={{
                height: section.height,
                background: section.background,
                zIndex: 20 + index,
                transform: 'translate3d(0, 100vh, 0)',
                willChange: 'transform',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{ 
                    background: section.background,
                    zIndex: 1
                  }}
                />
                <div className="relative z-10 w-full h-full">
                  {section.content}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-screen" style={{ 
        background: sections[sections.length - 1]?.background || 'hsl(var(--background))'
      }} />
    </div>
  );
};

export default ScrollTriggerCurtain; 