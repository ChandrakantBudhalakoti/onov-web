import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Newspaper, Calendar, Building2, Megaphone, Users, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Business - ONOV',
  description: 'ONOV Business: Business news, events, profiles, ads, and paid communities. Grow your professional influence.',
};

const features = [
  { Icon: Newspaper, title: 'Business News', description: 'Stay ahead with curated business news and industry insights.' },
  { Icon: Calendar, title: 'Business Events & Fairs', description: 'Promote and attend trade shows, conferences, and business networking events.' },
  { Icon: Building2, title: 'Business Profiles', description: 'Professional profiles for organizations. Showcase your brand, vision, and offerings.' },
  { Icon: Megaphone, title: 'Ads & Promotions', description: 'Run targeted ads and promotions. Reach your ideal audience with precision.' },
  { Icon: Users, title: 'Paid Communities', description: 'Build and monetize premium communities. Exclusive content and membership revenue.' },
];

export default function BusinessPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-[#0B3C5D] via-[#0D4A70] to-emerald-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">BUSINESS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Business on <span className="text-emerald-400">ONOV</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Grow your professional influence. Business news, events, profiles, ads, and paid communities — all in one place.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-1 rounded-full bg-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">FEATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Grow Your <span className="text-emerald-600">Professional Influence</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Business profiles, events, ads, and paid communities — built for organizations and entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-100 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 group-hover:bg-emerald-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <Link href="/#features" className="inline-flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B3C5D] to-emerald-800 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to grow?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">Join ONOV and reach your business audience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
              >
                Explore ONOV
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
