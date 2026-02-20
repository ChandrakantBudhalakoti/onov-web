import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Star, Zap, Film, Ticket, Music, Trophy, Radio, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Entertainment & Sports - ONOV',
  description: 'ONOV Entertainment & Sports: Celebrity news, movies, concerts, music, sports updates, and live streaming. Engage, share, and go live.',
};

const features = [
  { Icon: Star, title: 'Celebrity Gossip', description: 'Verified journalists and trusted sources. Stay in the know with the latest celebrity news.' },
  { Icon: Zap, title: 'Hot Stories & Entertainment News', description: 'Breaking entertainment news and trending stories delivered in real time.' },
  { Icon: Film, title: 'Movie Trailers & Teasers', description: 'Discover upcoming releases and share your reactions with the community.' },
  { Icon: Ticket, title: 'Concert & Party Ticketing', description: 'Get tickets for concerts, festivals, and exclusive parties — all in one place.' },
  { Icon: Music, title: 'Songs & Music Upload', description: 'Share and discover music. Musixmatch integration for lyrics and tracks.' },
  { Icon: Trophy, title: 'Sports Updates & Live Reactions', description: 'Follow your teams, share live reactions, and connect with fellow sports fans.' },
  { Icon: Radio, title: 'Live Streaming / Broadcast', description: 'Go live for events, reactions, or exclusive content. Broadcast to your audience instantly.' },
];

export default function EntertainmentSportsPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">ENTERTAINMENT & SPORTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Entertainment &amp; Sports <span className="text-amber-400">on ONOV</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From celebrity news to live concerts and sports updates — engage, share, and go live.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
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
              <div className="w-1 h-1 rounded-full bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">FEATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Hub for <span className="text-amber-600">Entertainment &amp; Sports</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrity news, movies, concerts, music, and sports — all in one vibrant community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30"
                >
                  <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <Link href="/#features" className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to join the fun?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6">Join ONOV and connect with entertainment and sports fans.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-colors"
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
