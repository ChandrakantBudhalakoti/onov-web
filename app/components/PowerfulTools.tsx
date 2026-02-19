import { User, Film, Mic, BarChart3, Ticket, CreditCard, Users, Megaphone } from 'lucide-react';

const tools = [
  {
    Icon: User,
    title: 'Smart User Profiles',
    description: 'Free and premium tier profiles with verified statuses and influence scores.',
  },
  {
    Icon: Film,
    title: 'Political Reels',
    description: 'Create and share viral political content and short-form video messages.',
  },
  {
    Icon: Mic,
    title: 'Live Debates',
    description: 'Broadcast live video conferencing debates with real-time community engagement.',
  },
  {
    Icon: BarChart3,
    title: 'Polling & Voting',
    description: 'Host secure and verifiable polls to gauge community opinion and collect data.',
  },
  {
    Icon: Ticket,
    title: 'Event Ticketing',
    description: 'Complete booking and management system for nationwide political events.',
  },
  {
    Icon: CreditCard,
    title: 'Fundraising System',
    description: 'Built-in secure payment gateway for political campaign contributions.',
  },
  {
    Icon: Users,
    title: 'Community Tools',
    description: 'Advanced moderation and management tools for group leaders and organizations.',
  },
  {
    Icon: Megaphone,
    title: 'Promotion & Ads',
    description: 'Business-grade promotion and targeted advertising for vision and messages.',
  },
];

export default function PowerfulTools() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0B3C5D] via-[#0D4A70] to-[#1a5a8a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              CORE ECOSYSTEM
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful Tools for
            <br />
            <span className="text-[#2563EB]">Modern Leadership.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-8">
            Experience the next generation of social engagement. Every tool you need, integrated into one seamless platform.
          </p>
          <button className="px-8 py-3 bg-[#2563EB] text-white rounded-full font-semibold hover:bg-[#3B82F6] transition-colors uppercase text-sm font-bold tracking-wide">
            Explore All Features
          </button>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:border-[#2563EB]/50"
            >
              <div className="mb-4">
                {(() => {
                  const IconComponent = tool.Icon;
                  return <IconComponent className="w-10 h-10 text-blue-300" strokeWidth={1.5} />;
                })()}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
