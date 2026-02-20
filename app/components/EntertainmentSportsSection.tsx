import { Star, Zap, Film, Ticket, Music, Trophy, Radio } from 'lucide-react';

const features = [
  {
    Icon: Star,
    title: 'Celebrity Gossip',
    description: 'Verified journalists and trusted sources. Stay in the know with the latest celebrity news.',
  },
  {
    Icon: Zap,
    title: 'Hot Stories & Entertainment News',
    description: 'Breaking entertainment news and trending stories delivered in real time.',
  },
  {
    Icon: Film,
    title: 'Movie Trailers & Teasers',
    description: 'Discover upcoming releases and share your reactions with the community.',
  },
  {
    Icon: Ticket,
    title: 'Concert & Party Ticketing',
    description: 'Get tickets for concerts, festivals, and exclusive parties — all in one place.',
  },
  {
    Icon: Music,
    title: 'Songs & Music Upload',
    description: 'Share and discover music. Musixmatch integration for lyrics and tracks.',
  },
  {
    Icon: Trophy,
    title: 'Sports Updates & Live Reactions',
    description: 'Follow your teams, share live reactions, and connect with fellow sports fans.',
  },
  {
    Icon: Radio,
    title: 'Live Streaming / Broadcast',
    description: 'Go live for events, reactions, or exclusive content. Broadcast to your audience instantly.',
  },
];

export default function EntertainmentSportsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300/90">
              ENTERTAINMENT & SPORTS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
            Entertainment &amp; Sports <span className="text-amber-400">on ONOV</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-2">
            From celebrity news to live concerts and sports updates — engage, share, and go live.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white/10 hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mb-4 group-hover:bg-amber-400/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-amber-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
