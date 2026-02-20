import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Facebook, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Stay Informed.</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for the latest platform updates and political engagement insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2 min-w-0">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="relative h-10 w-32 mb-4 flex group opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/images/ONOV logo.png"
                alt="ONOV"
                fill
                className="object-contain object-left"
                sizes="128px"
              />
            </Link>
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
              <li><a href="/politics" className="text-gray-600 hover:text-[#2563EB] transition-colors">Politics</a></li>
              <li><a href="/entertainment-sports" className="text-gray-600 hover:text-[#2563EB] transition-colors">Entertainment & Sports</a></li>
              <li><a href="/family-hobbies" className="text-gray-600 hover:text-[#2563EB] transition-colors">Family & Hobbies</a></li>
              <li><a href="/business" className="text-gray-600 hover:text-[#2563EB] transition-colors">Business</a></li>
              {/* <li><a href="#features" className="text-gray-600 hover:text-[#2563EB] transition-colors">Features</a></li> */}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">RESOURCES</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/terms-of-service" className="text-gray-600 hover:text-[#2563EB] transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-[#2563EB] transition-colors">Privacy Policy</a></li>
              <li><a href="/political-content-policy" className="text-gray-600 hover:text-[#2563EB] transition-colors">Political Content Policy</a></li>
              <li><a href="/data-deletion" className="text-gray-600 hover:text-[#2563EB] transition-colors">Data Deletion</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">CONTACT</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <a href="mailto:net-support@onov.com" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                  net-support@onov.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <a href="tel:+12124014818" className="text-gray-600 hover:text-[#2563EB] transition-colors">
                  +1 (212) 401-4818
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-600">175 Fulton Ave Suite 302, Hempstead, NY 11550</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="py-6 sm:py-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-4">
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
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-600 text-center md:text-left">
            <p className="flex items-center gap-1">
              <span>©</span> {currentYear} ONOV INC. BUILT WITH PRECISION IN THE US
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/privacy-policy" className="hover:text-[#2563EB] transition-colors">PRIVACY POLICY</a>
              <a href="/terms-of-service" className="hover:text-[#2563EB] transition-colors">TERMS OF SERVICE</a>
              {/* <a href="/political-content-policy" className="hover:text-[#2563EB] transition-colors">POLITICAL CONTENT POLICY</a> */}
              {/* <a href="/cookies" className="hover:text-[#2563EB] transition-colors">COOKIES</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
