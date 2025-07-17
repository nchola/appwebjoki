
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bold">APPWEBJOKI</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Membantu merek membangun koneksi berarti di dunia digital melalui desain UI/UX yang strategis dan pengembangan web yang inovatif.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Mobile App Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Brand Identity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Strategy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand mr-3" />
                <span className="text-gray-300">hello@appwebjoki.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand mr-3" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-brand mr-3" />
                <span className="text-gray-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Mari Diskusikan Proyek Anda</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand transition-colors duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Subjek"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand transition-colors duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                rows={4}
                placeholder="Ceritakan tentang proyek Anda..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 APPWEBJOKI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
