import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Facebook, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Informed.</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest platform updates and political engagement insights.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:flex-none px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            />
            <button className="px-6 py-3 bg-[#0B3C5D] text-white rounded-lg font-semibold hover:bg-[#0D4A70] transition-colors flex items-center gap-2">
              Subscribe
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0B3C5D] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl text-[#0B3C5D]">ONOV</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering global conversations with secure, scalable, and community-driven political engagement technology.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-[#2563EB] transition-colors">About ONOV</a></li>
              <li><a href="/mission" className="text-gray-600 hover:text-[#2563EB] transition-colors">Mission & Values</a></li>
              <li><a href="/team" className="text-gray-600 hover:text-[#2563EB] transition-colors">Team</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-[#2563EB] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">PLATFORM</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-gray-600 hover:text-[#2563EB] transition-colors">Features</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-[#2563EB] transition-colors">How It Works</a></li>
              <li><a href="/community" className="text-gray-600 hover:text-[#2563EB] transition-colors">Community Hub</a></li>
              <li><a href="/live-streaming" className="text-gray-600 hover:text-[#2563EB] transition-colors">Live Streaming</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/help" className="text-gray-600 hover:text-[#2563EB] transition-colors">Help Center</a></li>
              <li><a href="/legal" className="text-gray-600 hover:text-[#2563EB] transition-colors">Legal Center</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-[#2563EB] transition-colors">Privacy Policy</a></li>
              <li><a href="/press-kit" className="text-gray-600 hover:text-[#2563EB] transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <a href="mailto:hello@onov.com" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                  hello@onov.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <a href="https://twitter.com/onov" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/onov" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/onov" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/onov" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://github.com/onov" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#2563EB] hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-8 text-sm text-gray-600">
            <p className="flex items-center gap-1">
              <span>©</span> {currentYear} ONOV INC. BUILT WITH PRECISION IN THE US
            </p>
            <div className="flex gap-6">
              <a href="/privacy-policy" className="hover:text-[#2563EB] transition-colors">PRIVACY POLICY</a>
              <a href="/terms-of-service" className="hover:text-[#2563EB] transition-colors">TERMS OF SERVICE</a>
              <a href="/cookies" className="hover:text-[#2563EB] transition-colors">COOKIES</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
