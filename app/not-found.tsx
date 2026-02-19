'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center px-4 sm:px-6 py-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B3C5D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* 404 Number */}
        <div className="mb-6">
          <span className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none bg-gradient-to-br from-[#0B3C5D] via-[#2563EB] to-[#0B3C5D] bg-clip-text text-transparent">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-center max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0B3C5D] text-white rounded-full font-semibold hover:bg-[#0D4A70] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0B3C5D]/25"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#0B3C5D] text-[#0B3C5D] rounded-full font-semibold hover:bg-[#0B3C5D]/5 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-16 text-gray-500 hover:text-[#0B3C5D] transition-colors"
        >
          <div className="w-8 h-8 bg-[#0B3C5D] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <span className="font-bold text-[#0B3C5D]">ONOV</span>
        </Link>
      </div>
    </div>
  );
}
