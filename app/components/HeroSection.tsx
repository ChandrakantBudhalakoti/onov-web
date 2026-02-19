import Image from 'next/image';
import { ArrowRight, Hash, Signal, Battery, Play, Music, Facebook } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Tagline - light blue rounded pill with hashtag */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-blue-100">
              <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] flex-shrink-0" strokeWidth={2.5} />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2563EB]">
                THE FUTURE OF POLITICAL ENGAGEMENT
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#0B3C5D]">Where</span>
              <br />
              <span className="text-[#0B3C5D]">Conversations</span>
              <br />
              <span className="text-[#2563EB]">Shape the Future.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
              Engage in debates, connect with communities, share ideas, and stay informed in real time with the most secure political social platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button className="px-8 py-3 bg-[#0B3C5D] text-white rounded-full font-semibold hover:bg-[#0D4A70] transition-colors flex items-center gap-2">
                Join ONOV
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
              <button className="px-8 py-3 border-2 border-[#0B3C5D] text-[#0B3C5D] rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Request Demo
              </button>
            </div>

            {/* Stats with Play Button */}
            <div className="flex items-center gap-4 sm:gap-8 pt-6 sm:pt-8 flex-wrap">
              <div className="flex gap-6 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">1.2M+</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Users</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">450+</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Communities</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0B3C5D]">85k</div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide">Debates</div>
                </div>
              </div>
              <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Play className="w-5 h-5 text-red-500 fill-red-500 ml-0.5" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Right - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-64 h-[400px] sm:w-72 sm:h-[460px] lg:w-80 lg:h-[520px]">
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl border-4 lg:border-8 border-gray-900 overflow-hidden">
                {/* Phone Screen - banner background */}
                <div className="w-full h-full relative overflow-hidden">
                  <Image
                    src="/assets/images/banner.jpeg"
                    alt="App preview"
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-purple-900/30" />

                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 z-10 px-6 py-3 text-white text-xs flex justify-between items-center">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal className="w-3.5 h-3.5" />
                      <span>5G</span>
                      <Battery className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Notification - white bubble at top */}
                  <div className="absolute top-10 sm:top-12 lg:top-14 left-2 right-2 sm:left-4 sm:right-4 z-10 bg-white rounded-xl sm:rounded-2xl shadow-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                      JD
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">John Doe started a live debate</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold flex-shrink-0">
                      LIVE
                    </span>
                  </div>

                  {/* App Icons at bottom */}
                  <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-2 right-2 sm:left-4 sm:right-4 z-10 flex justify-around">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-red-500 flex items-center justify-center">
                        <Music className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">Music</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-[#1877F2] flex items-center justify-center">
                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" strokeWidth={2} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">Facebook</span>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
