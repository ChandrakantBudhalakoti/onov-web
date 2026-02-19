import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mission & Values - ONOV',
  description: 'Learn about ONOV\'s mission, vision, and core values.',
};

export default function Mission() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Mission & Values</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-[#2563EB] mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To empower secure, scalable, and community-driven political engagement through technology that puts security, transparency, and user rights at the center.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#2563EB] mb-4">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-600">We prioritize user safety and data protection above all else with military-grade encryption.</p>
                </div>
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600">We believe in open communication and honesty in all our dealings with users and stakeholders.</p>
                </div>
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600">We empower communities to connect, organize, and drive meaningful political engagement.</p>
                </div>
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">We continuously evolve to meet the needs of modern political discourse.</p>
                </div>
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600">We operate with unwavering ethical standards and accountability.</p>
                </div>
                <div className="border-l-4 border-[#2563EB] pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
                  <p className="text-gray-600">We welcome diverse voices and perspectives from all users regardless of background.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
