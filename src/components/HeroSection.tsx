
import { useEffect, useRef } from 'react';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const rotatingTextRef = useRef<HTMLDivElement>(null);

  const credibilityItems = [
    { text: "DIPERCAYA 50+ KLIEN PREMIUM", icon: "✨" },
    { text: "400+ PROYEK SUKSES", icon: "🚀" },
    { text: "BERBASIS DI JAKARTA, INDONESIA", icon: "🇮🇩" },
    { text: "FEATURED BY TOKOPEDIA", icon: "⭐" },
    { text: "CLIENT TERBARU: GOJEK", icon: "🔥" },
    { text: "5.0 ⭐⭐⭐⭐⭐ RATING GOOGLE", icon: "" },
    { text: "DESIGN LEADER: 50K+ FOLLOWERS", icon: "🌍" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo('.hero-title-line', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );

      gsap.fromTo('.hero-cta', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1.5 }
      );

      gsap.fromTo('.hero-stats', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', delay: 1.8 }
      );

      // Rotating text animation
      const rotatingTexts = rotatingTextRef.current?.children;
      if (rotatingTexts) {
        let currentIndex = 0;
        
        const showText = (index: number) => {
          gsap.set(rotatingTexts, { opacity: 0, y: 20 });
          gsap.to(rotatingTexts[index], { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
        };

        showText(0);

        const interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % rotatingTexts.length;
          showText(currentIndex);
        }, 3000);

        return () => clearInterval(interval);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="pt-32 bg-gradient-premium min-h-screen flex items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Rotating Credibility Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
              <Award className="h-4 w-4 text-brand mr-2" />
              <div ref={rotatingTextRef} className="relative h-5 overflow-hidden">
                {credibilityItems.map((item, index) => (
                  <div key={index} className="absolute inset-0 flex items-center">
                    <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                      {item.text} {item.icon}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <div className="overflow-hidden">
                  <div className="hero-title-line bg-gradient-brand bg-clip-text text-transparent">
                    We make
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-title-line">
                    apps,
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-title-line">
                    websites
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="hero-title-line">
                    & brands
                  </div>
                </div>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden">
              <p className="hero-subtitle text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                APPWEBJOKI adalah agensi UX design terkemuka berbasis di Indonesia. Kami membantu startup & perusahaan Fortune 500 memberikan pengalaman digital yang menginspirasi.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row items-start gap-4">
              <Button 
                size="lg" 
                className="bg-brand hover:bg-brand-hover text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  LET'S TALK
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brand-hover transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
              
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face" 
                  alt="Team" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face" 
                  alt="Team" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm -ml-2"
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                  alt="Team" 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm -ml-2"
                />
                <span className="ml-2 text-xs">We get booked fast 🔥</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <div className="hero-stats bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mx-auto mb-6">
                  <Users className="h-8 w-8 text-brand" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600 font-medium">Klien Premium</div>
                </div>
              </div>

              <div className="hero-stats bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mx-auto mb-6">
                  <Award className="h-8 w-8 text-brand" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">400+</div>
                  <div className="text-gray-600 font-medium">Proyek Sukses</div>
                </div>
              </div>

              <div className="hero-stats bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-brand/10 rounded-xl mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-brand" />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600 font-medium">ROI Rata-rata</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
