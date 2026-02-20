import Image from 'next/image';
import { Newspaper, Mic, Users, Calendar, Heart, Briefcase, ArrowRight } from 'lucide-react';

const features = [
  {
    Icon: Newspaper,
    image: '/assets/images/Social Feed and News.jpeg',
    title: 'Social Feed and News',
    description: 'Stay updated with real-time news curated by trusted sources and community engagement.',
  },
  {
    Icon: Mic,
    image: '/assets/images/Debate and Live Streaming.jpeg',
    title: 'Debate and Live Streaming',
    description: 'Participate in high-stakes live debates and streaming events with real-time interaction.',
  },
  {
    Icon: Users,
    image: '/assets/images/Community Creation.png',
    title: 'Community Creation',
    description: 'Build and manage your own political or social communities with robust management tools.',
  },
  {
    Icon: Calendar,
    image: '/assets/images/Events and Ticketing.jpeg',
    title: 'Events and Ticketing',
    description: 'Organize and promote local or national events with integrated ticketing and RSVP system.',
  },
  {
    Icon: Heart,
    image: '/assets/images/Fundraising and Donations.jpeg',
    title: 'Fundraising and Donations',
    description: 'Secure, transparent fundraising tools for political campaigns and community projects.',
  },
  {
    Icon: Briefcase,
    image: '/assets/images/Business Profiles.png',
    title: 'Business Profiles',
    description: 'Professional profiles for organizations and businesses to promote their vision.',
  },
];

export default function PlatformOverview() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              PLATFORM OVERVIEW
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            One Platform, <span className="text-[#2563EB]">Unlimited Reach</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            ONOV integrates everything you need to lead, influence, and connect in the modern political landscape.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2563EB]/10 hover:border-[#2563EB]/30"
            >
              {/* Feature Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Feature Content */}
              <div className="p-6">
                <div className="mb-4">
                  {(() => {
                    const IconComponent = feature.Icon;
                    return <IconComponent className="w-10 h-10 text-[#2563EB]" strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#2563EB] font-semibold group-hover:gap-3 transition-all">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
