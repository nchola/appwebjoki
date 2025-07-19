
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "UI/UX Design",
      client: "TechCorp",
      description: "Meningkatkan konversi sebesar 150% melalui redesign pengalaman pengguna yang komprehensif.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["UI/UX", "E-Commerce", "Conversion Optimization"]
    },
    {
      id: 2,
      title: "Fintech Mobile App",
      category: "Mobile Design",
      client: "FinanceFlow",
      description: "Aplikasi mobile yang meningkatkan engagement pengguna sebesar 200% dengan antarmuka yang intuitif.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      tags: ["Mobile", "Fintech", "User Experience"]
    },
    {
      id: 3,
      title: "SaaS Dashboard Platform",
      category: "Web Development",
      client: "DataInsight",
      description: "Platform dashboard yang kompleks dengan visualisasi data real-time dan performa tinggi.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Dashboard", "SaaS", "Data Visualization"]
    },
    {
      id: 4,
      title: "Brand Identity System",
      category: "Branding",
      client: "StartupXYZ",
      description: "Sistem identitas merek yang komprehensif untuk startup teknologi dengan growth 300%.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tags: ["Branding", "Identity", "Startup"]
    },
    {
      id: 5,
      title: "Healthcare Platform",
      category: "UI/UX Design",
      client: "MedTech Solutions",
      description: "Platform telemedicine yang mempermudah akses layanan kesehatan dengan rating kepuasan 98%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Platform", "User Experience"]
    },
    {
      id: 6,
      title: "IoT Control System",
      category: "Web Development",
      client: "SmartHome Inc",
      description: "Sistem kontrol IoT yang mengintegrasikan berbagai perangkat smart home dalam satu interface.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["IoT", "Smart Home", "Integration"]
    }
  ];

  return (
    <section id="work" className="py-20 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Portfolio Unggulan
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Koleksi karya terbaik yang menggambarkan dedikasi kami terhadap keunggulan desain dan inovasi teknologi
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* View Project Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900 rounded-lg">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Project Content */}
              <div className="p-6">
                {/* Category & Client */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-400 bg-white/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-300">{project.client}</span>
                </div>
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {/* Description */}
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium text-blue-200 bg-white/10 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* View Case Study Link */}
                <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-400 hover:text-blue-300 group">
                  Lihat Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/20 text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-200">
            Lihat Semua Proyek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
