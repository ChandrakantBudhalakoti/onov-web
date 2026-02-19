export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                THE FUTURE OF POLITICAL ENGAGEMENT
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Where
              <br />
              <span className="text-gray-700">Conversations</span>
              <br />
              <span className="bg-gradient-to-r from-[#0B3C5D] to-[#2563EB] bg-clip-text text-transparent">
                Shape the Future.
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Engage in debates, connect with communities, share ideas, and stay informed in real time with the most secure political social platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-[#0B3C5D] text-white rounded-full font-semibold hover:bg-[#0D4A70] transition-colors flex items-center gap-2">
                Join ONOV
                <span>→</span>
              </button>
              <button className="px-8 py-3 border-2 border-[#0B3C5D] text-[#0B3C5D] rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Request Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 flex-wrap">
              <div>
                <div className="text-3xl font-bold text-[#0B3C5D]">1.2M+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0B3C5D]">450+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Communities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0B3C5D]">85k</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Debates</div>
              </div>
            </div>
          </div>

          {/* Right - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96">
              {/* iPhone Frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-3xl shadow-2xl border-8 border-gray-900 overflow-hidden">
                {/* iPhone Screen */}
                <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-900 relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-black/20 px-6 py-2 text-white text-xs flex justify-between items-center">
                    <span>5G</span>
                    <span>●●●●●</span>
                  </div>

                  {/* App Content */}
                  <div className="p-4 text-white space-y-4">
                    {/* Search Bar */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 border border-white/20">
                      <span className="text-lg">🔍</span>
                      <span className="text-sm">John Doe started a live debate</span>
                    </div>

                    {/* App Icons Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-8">
                      <div className="bg-red-500 rounded-2xl p-4 flex items-center justify-center h-20">
                        <span className="text-2xl">▶</span>
                      </div>
                      <div className="bg-blue-500 rounded-2xl p-4 flex items-center justify-center h-20">
                        <span className="text-2xl">f</span>
                      </div>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 bottom-24 bg-white rounded-2xl shadow-lg p-3 w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div className="absolute -left-4 top-12 bg-white rounded-2xl shadow-lg p-3 w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">▶</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
