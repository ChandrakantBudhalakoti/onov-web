"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-32 flex-shrink-0">
            <Image
              src="/assets/images/ONOV logo.png"
              alt="ONOV"
              fill
              className="object-contain object-left"
              sizes="128px"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div
              className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#0B3C5D] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4 border-t border-gray-200 px-4">
            <a href="#features" className="text-gray-700 hover:text-[#2563EB]">
              Features
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-[#2563EB]">
              Solutions
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#2563EB]">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
