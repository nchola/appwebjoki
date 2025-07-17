
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-premium min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Kredibilitas Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200 mb-8 animate-fade-in">
            <Award className="h-4 w-4 text-brand mr-2" />
            <span className="text-sm font-medium text-gray-700">Dipercaya oleh 50+ klien premium</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
            APPWEBJOKI:
            <br />
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Desain Digital
            </span>
            <br />
            yang Menginspirasi
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in text-balance">
            Membantu merek membangun koneksi berarti di dunia digital melalui desain UI/UX yang strategis dan pengembangan web yang inovatif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <Button size="lg" className="bg-brand hover:bg-brand-hover text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 group">
              Lihat Portofolio Kami
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 hover:border-brand hover:text-brand transition-all duration-200">
              Mulai Proyek Anda
            </Button>
          </div>

          {/* Stats/Kredibilitas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-4">
                <Users className="h-6 w-6 text-brand" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600 font-medium">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-4">
                <Award className="h-6 w-6 text-brand" />
              </div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600 font-medium">Proyek Sukses</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-brand" />
              </div>
              <div className="text-3xl font-bold text-gray-900">200%</div>
              <div className="text-gray-600 font-medium">ROI Rata-rata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
