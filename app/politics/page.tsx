import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Newspaper, Mic, BarChart3, HeartHandshake, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Politics - ONOV',
  description: 'ONOV Politics: Breaking news, live debates, polls, fundraising, and political events. Where civic discourse meets action.',
};

const features = [
  { Icon: Newspaper, title: 'Breaking News (Verified Journalists)', description: 'Stay informed with trusted sources. Verified journalists deliver real-time political news and analysis.' },
  { Icon: Mic, title: 'Debates (Live via Agora)', description: 'Participate in or watch high-stakes live debates with real-time engagement and community feedback.' },
  { Icon: BarChart3, title: 'Polls', description: 'Create and participate in polls. Gauge opinion, collect data, and drive civic engagement.' },
  { Icon: HeartHandshake, title: 'Fundraising', description: 'Support campaigns and causes. Secure, transparent fundraising for political and community projects.' },
  { Icon: Calendar, title: 'Political Events', description: 'Discover, promote, and attend political events. Integrated ticketing and RSVP system.' },
];

export default function PoliticsPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-b from-[#0B3C5D] via-[#0D4A70] to-[#1a5a8a]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-blue-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">POLITICS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Politics on <span className="text-[#2563EB]">ONOV</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where civic discourse meets action. Breaking news from verified journalists, live debates, polls, fundraising, and political events — all on one platform.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-white text-[#0B3C5D] rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
              <div className="w-1 h-1 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">FEATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="text-[#2563EB]">Political Engagement</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Debates, polls, fundraising, and events — built for leaders, journalists, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2563EB]/10 hover:border-[#2563EB]/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0B3C5D]/10 flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/15 transition-colors">
                    <IconComponent className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <Link href="/#features" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold group-hover:gap-3 transition-all">
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
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B3C5D] to-[#0D4A70] p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to engage?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">Join ONOV and connect with the political community.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#0B3C5D] rounded-full font-semibold hover:bg-gray-100 transition-colors"
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
