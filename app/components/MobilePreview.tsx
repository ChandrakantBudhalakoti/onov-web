import Image from 'next/image';
import { Apple, Play } from 'lucide-react';

const screens = [
  {
    title: 'Feed Screen',
    image: '/assets/images/Feed Screen.jpeg',
    description: 'A curated and engagement-driven feed for all your political news and social updates.',
  },
  {
    title: 'Debate Screen',
    image: '/assets/images/Debate Screen.jpeg',
    description: 'High-stakes live debates with interactive polling and community feedback.',
  },
  {
    title: 'Community Screen',
    image: '/assets/images/Community Screen.jpeg',
    description: 'Easily manage and navigate through your joined political and local communities.',
  },
  {
    title: 'Profile Screen',
    image: '/assets/images/Profile Screen.jpeg',
    description: 'Showcase your influence, verified credentials, and engagement history.',
  },
];

export default function MobilePreview() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            MOBILE EXPERIENCE
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 mt-4">
            <span className="text-[#0B3C5D]">Powerful Features</span>
            <br />
            <span className="text-[#2563EB]">In Your Pocket.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Experience ONOV with our native mobile application designed for real-time engagement and mobility.
          </p>
        </div>

        {/* Phones with descriptions below each */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {screens.map((screen, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.03] hover:shadow-xl hover:shadow-slate-300/50 cursor-default"
            >
              {/* Phone mockup */}
              <div className="relative flex-shrink-0 mb-6">
                <div
                  className="relative w-[200px] h-[420px] rounded-[2.5rem] p-2 overflow-visible"
                  style={{
                    background: 'linear-gradient(145deg, #0B3C5D 0%, #0D4A70 50%, #0B3C5D 100%)',
                    boxShadow: `
                      0 25px 50px -12px rgba(11, 60, 93, 0.4),
                      0 0 0 1px rgba(255,255,255,0.08),
                      inset 0 1px 0 rgba(255,255,255,0.1)
                    `,
                  }}
                >
                {/* Inner screen bezel */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 rounded-b-xl z-20"
                    style={{
                      background: 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  />
                  {/* Screen content */}
                  <div className="absolute top-6 left-0 right-0 bottom-0 rounded-b-[2rem] overflow-hidden">
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className="object-cover object-top"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>
              </div>

              {/* Title and description below phone */}
              <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">{screen.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-[220px]">{screen.description}</p>
            </div>
          ))}
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="#"
            className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3"
          >
            <Apple className="w-8 h-8 flex-shrink-0" strokeWidth={2} />
            <span className="text-left">
              <span className="block text-xs uppercase tracking-wide opacity-90">Download on the</span>
              <span className="block text-lg font-bold">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3"
          >
            <Play className="w-8 h-8 flex-shrink-0" strokeWidth={2} />
            <span className="text-left">
              <span className="block text-xs uppercase tracking-wide opacity-90">Get it on</span>
              <span className="block text-lg font-bold">Google Play</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
