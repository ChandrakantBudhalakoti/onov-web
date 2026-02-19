import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'About ONOV - Our Mission & Vision',
  description: 'Learn about ONOV, the secure political social platform empowering conversations that shape the future.',
};

export default function About() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">About ONOV</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            ONOV is a next-generation political social platform designed to empower secure, scalable, and community-driven political engagement. We believe conversations shape the future.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To create a secure, trustworthy platform where political leaders, journalists, activists, and communities can engage in meaningful debates and drive positive change in democracy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
              <ul className="space-y-3 text-base sm:text-lg text-gray-600">
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span><strong>Security First:</strong> Military-grade encryption and data privacy protection</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span><strong>Transparency:</strong> Open, honest communication with our users</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span><strong>Community:</strong> Empowering collective voices and engagement</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span><strong>Innovation:</strong> Continuously improving our platform and features</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span><strong>Integrity:</strong> Operating with the highest ethical standards</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                ONOV was founded with a simple mission: to create a platform where political conversations happen safely, securely, and at scale. In an era where digital engagement shapes democracy, we recognized the need for a platform built from the ground up with security, scalability, and community engagement at its core.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, ONOV serves over 1.2 million users across 450+ communities, facilitating thousands of debates and engaging millions in the political process.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
