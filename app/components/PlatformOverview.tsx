const features = [
  {
    icon: '📰',
    title: 'Social Feed and News',
    description: 'Stay updated with real-time news curated by trusted sources and community engagement.',
  },
  {
    icon: '🎤',
    title: 'Debate and Live Streaming',
    description: 'Participate in high-stakes live debates and streaming events with real-time interaction.',
  },
  {
    icon: '👥',
    title: 'Community Creation',
    description: 'Build and manage your own political or social communities with robust management tools.',
  },
  {
    icon: '📅',
    title: 'Events and Ticketing',
    description: 'Organize and promote local or national events with integrated ticketing and RSVP system.',
  },
  {
    icon: '💚',
    title: 'Fundraising and Donations',
    description: 'Secure, transparent fundraising tools for political campaigns and community projects.',
  },
  {
    icon: '💼',
    title: 'Business Profiles',
    description: 'Professional profiles for organizations and businesses to promote their vision.',
  },
];

export default function PlatformOverview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              PLATFORM OVERVIEW
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            One Platform, <span className="text-[#2563EB]">Unlimited Reach</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ONOV integrates everything you need to lead, influence, and connect in the modern political landscape.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#2563EB]/30"
            >
              {/* Feature Image (Placeholder) */}
              <div className="h-48 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Feature Content */}
              <div className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold group-hover:gap-3 transition-all">
                  LEARN MORE
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
