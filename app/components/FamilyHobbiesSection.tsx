import { Home, Palette, Baby, MapPin, Users, CreditCard, Calendar } from 'lucide-react';

const features = [
  {
    Icon: Home,
    title: 'Family News & Stories',
    description: 'Share milestones, moments, and family updates with your loved ones.',
  },
  {
    Icon: Palette,
    title: 'Hobby-Based Communities',
    description: 'Connect with others who share your passions — crafts, gardening, photography, and more.',
  },
  {
    Icon: Baby,
    title: 'Parenting Groups',
    description: 'Support, advice, and community for parents at every stage of the journey.',
  },
  {
    Icon: MapPin,
    title: 'Local Interest Groups',
    description: 'Discover and join groups focused on your neighborhood and local happenings.',
  },
  {
    Icon: Users,
    title: 'Public & Private Communities',
    description: 'Choose how open or exclusive your community is. Full control over membership.',
  },
  {
    Icon: CreditCard,
    title: 'Paid Membership Communities',
    description: 'Create premium communities with paid membership and exclusive content.',
  },
  {
    Icon: Calendar,
    title: 'Local Events & Meetups',
    description: 'Find and host local events. Connect in person with your community.',
  },
];

export default function FamilyHobbiesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-rose-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500/80">
              FAMILY & HOBBIES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2">
            <span className="text-gray-900">Family &amp; Hobbies</span>{' '}
            <span className="text-rose-500">Communities</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Build meaningful connections around what matters most.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <div
                key={index}
                className="group bg-white border border-rose-100 rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg hover:shadow-rose-200/50 hover:border-rose-200"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200/80 transition-colors">
                  <IconComponent className="w-6 h-6 text-rose-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
