const screens = [
  {
    title: 'Feed Screen',
    description: 'A curated engagement-driven feed for all your political news and updates.',
  },
  {
    title: 'Debate Screen',
    description: 'High-stakes live debates with interactive polling and community feedback.',
  },
  {
    title: 'Community Screen',
    description: 'Easily manage and navigate joined political and local communities.',
  },
  {
    title: 'Profile Screen',
    description: 'Showcase your influence, verified credentials, and engagement history.',
  },
];

export default function MobilePreview() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              MOBILE EXPERIENCE
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features
            <br />
            <span className="text-[#2563EB]">In Your Pocket</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Experience ONOV with our native mobile application designed for real-time engagement and mobility.
          </p>
        </div>

        {/* Screen Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {screens.map((screen, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{screen.title}</h3>
              <p className="text-gray-600 text-sm">{screen.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Mockups */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {/* iPhone Mockup 1 */}
          <div className="relative w-48 h-96 bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl border-8 border-gray-900 shadow-2xl overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl"></div>
            <div className="w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white">
              <span className="text-4xl">📱</span>
            </div>
          </div>

          {/* iPhone Mockup 2 */}
          <div className="relative w-48 h-96 bg-gradient-to-b from-gray-300 to-gray-400 rounded-3xl border-8 border-gray-900 shadow-2xl overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl"></div>
            <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
              <span className="text-4xl">📡</span>
            </div>
          </div>

          {/* iPhone Mockup 3 */}
          <div className="relative w-48 h-96 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl border-8 border-gray-900 shadow-2xl overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl"></div>
            <div className="w-full h-full bg-gradient-to-b from-slate-700 to-slate-900 flex items-center justify-center text-slate-300">
              <span className="text-4xl">💻</span>
            </div>
          </div>

          {/* iPhone Mockup 4 */}
          <div className="relative w-48 h-96 bg-gradient-to-b from-slate-900 to-black rounded-3xl border-8 border-gray-900 shadow-2xl overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-b-2xl"></div>
            <div className="w-full h-full bg-gradient-to-b from-slate-800 to-black flex items-center justify-center text-slate-400">
              <span className="text-4xl">⚙️</span>
            </div>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>🍎</span>
            Download on the App Store
          </a>
          <a
            href="#"
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <span>▶</span>
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
