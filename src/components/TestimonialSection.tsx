
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechCorp",
      content: "APPWEBJOKI adalah seorang profesional sejati. Desainnya tidak hanya memukau secara visual, tetapi juga sangat fungsional dan berdampak pada bisnis kami. ROI yang kami dapatkan melebihi ekspektasi.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b890?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Founder",
      company: "FinanceFlow",
      content: "Kolaborasi dengan APPWEBJOKI mengubah bisnis kami sepenuhnya. Aplikasi mobile yang mereka kembangkan meningkatkan engagement pengguna sebesar 200%. Sangat merekomendasikan!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      position: "Product Manager",
      company: "DataInsight",
      content: "Kemampuan APPWEBJOKI dalam memahami kebutuhan user dan menerjemahkannya menjadi solusi desain yang elegan sangat luar biasa. Dashboard yang mereka buat menjadi game-changer untuk tim kami.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Apa Kata Klien Kami
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-blue-400 opacity-70" />
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              {/* Testimonial Content */}
              <blockquote className="text-gray-200 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-brand rounded-2xl text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Mari Wujudkan Ide Anda Menjadi Kenyataan
          </h3>
          <p className="text-xl opacity-90 mb-6">
            Bergabunglah dengan 50+ klien yang telah merasakan transformasi digital bersama kami
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Mulai Proyek Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-500 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
