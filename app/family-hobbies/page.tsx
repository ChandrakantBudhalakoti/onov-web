import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Home, Palette, Baby, MapPin, Users, CreditCard, Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Family & Hobbies - ONOV',
  description: 'ONOV Family & Hobbies: Family news, hobby communities, parenting groups, local events, and paid communities. Build meaningful connections.',
};

const features = [
  { Icon: Home, title: 'Family News & Stories', description: 'Share milestones, moments, and family updates with your loved ones.' },
  { Icon: Palette, title: 'Hobby-Based Communities', description: 'Connect with others who share your passions — crafts, gardening, photography, and more.' },
  { Icon: Baby, title: 'Parenting Groups', description: 'Support, advice, and community for parents at every stage of the journey.' },
  { Icon: MapPin, title: 'Local Interest Groups', description: 'Discover and join groups focused on your neighborhood and local happenings.' },
  { Icon: Users, title: 'Public & Private Communities', description: 'Choose how open or exclusive your community is. Full control over membership.' },
  { Icon: CreditCard, title: 'Paid Membership Communities', description: 'Create premium communities with paid membership and exclusive content.' },
  { Icon: Calendar, title: 'Local Events & Meetups', description: 'Find and host local events. Connect in person with your community.' },
];

export default function FamilyHobbiesPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-rose-50 via-white to-rose-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-rose-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">FAMILY & HOBBIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Family &amp; Hobbies <span className="text-rose-500">Communities</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build meaningful connections around what matters most.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-rose-500 text-white rounded-full font-semibold hover:bg-rose-600 transition-colors"
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
              <div className="w-1 h-1 rounded-full bg-rose-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">FEATURES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connect Around <span className="text-rose-500">What Matters Most</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Family, hobbies, parenting, and local communities — all in one welcoming space.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.Icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-b from-rose-50/50 to-white border border-rose-100 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10 hover:border-rose-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-rose-100 flex items-center justify-center mb-5 group-hover:bg-rose-200 transition-colors">
                    <IconComponent className="w-7 h-7 text-rose-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <Link href="/#features" className="inline-flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to connect?</h2>
            <p className="text-rose-100 max-w-2xl mx-auto mb-6">Join ONOV and find your community.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-rose-600 rounded-full font-semibold hover:bg-rose-50 transition-colors"
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
