
import { Brain, BarChart, Zap } from 'lucide-react';

const PhilosophySection = () => {
  const philosophies = [
    {
      icon: Brain,
      title: "Pendekatan Berpusat pada Pengguna",
      description: "Kami menempatkan kebutuhan pengguna di garis depan setiap keputusan desain, memastikan solusi yang intuitif dan efektif."
    },
    {
      icon: BarChart,
      title: "Inovasi Berbasis Data",
      description: "Menggabungkan kreativitas dengan analisis data untuk menciptakan desain yang tidak hanya indah tetapi juga berkinerja."
    },
    {
      icon: Zap,
      title: "Solusi Skalabel & Berkelanjutan",
      description: "Merancang dan mengembangkan solusi yang dapat tumbuh bersama bisnis Anda, dengan fokus pada keberlanjutan jangka panjang."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Filosofi Kami dalam
            <span className="bg-gradient-brand bg-clip-text text-transparent"> Setiap Proyek</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pendekatan strategis yang terbukti memberikan hasil luar biasa untuk setiap klien
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {philosophies.map((philosophy, index) => (
            <div
              key={index}
              className="group relative bg-gradient-premium rounded-2xl p-8 lg:p-10 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <philosophy.icon className="h-8 w-8 text-brand" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand transition-colors duration-300">
                {philosophy.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {philosophy.description}
              </p>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
