'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0B3C5D] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-xl text-[#0B3C5D]">ONOV</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#2563EB] transition-colors">
              Features
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-[#2563EB] transition-colors">
              Solutions
            </a>
            <a href="#technology" className="text-gray-700 hover:text-[#2563EB] transition-colors">
              Technology
            </a>
            <a href="#enterprise" className="text-gray-700 hover:text-[#2563EB] transition-colors">
              Enterprise
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#2563EB] transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 text-[#0B3C5D] font-semibold hover:text-[#2563EB] transition-colors">
              Log In
            </button>
            <button className="px-6 py-2 bg-[#0B3C5D] text-white rounded-full font-semibold hover:bg-[#0D4A70] transition-colors">
              Join ONOV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4 border-t border-gray-200">
            <a href="#features" className="text-gray-700 hover:text-[#2563EB]">Features</a>
            <a href="#solutions" className="text-gray-700 hover:text-[#2563EB]">Solutions</a>
            <a href="#technology" className="text-gray-700 hover:text-[#2563EB]">Technology</a>
            <a href="#enterprise" className="text-gray-700 hover:text-[#2563EB]">Enterprise</a>
            <a href="#contact" className="text-gray-700 hover:text-[#2563EB]">Contact</a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="px-6 py-2 text-[#0B3C5D] font-semibold">Log In</button>
              <button className="px-6 py-2 bg-[#0B3C5D] text-white rounded-full font-semibold">Join ONOV</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
