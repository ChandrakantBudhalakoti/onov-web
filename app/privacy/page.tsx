import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - ONOV',
  description: 'Read our comprehensive privacy policy and data protection practices.',
};

export default function Privacy() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At ONOV, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">We collect information you provide directly:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Account information (name, email, profile details)</li>
                <li>• Communication data (messages, posts, comments)</li>
                <li>• Payment information (for donations and transactions)</li>
                <li>• Technical information (IP address, device type, browser)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">We use your information to:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Provide and improve our services</li>
                <li>• Process transactions and send notifications</li>
                <li>• Ensure platform security and prevent fraud</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We implement AES-256 encryption and industry-leading security measures to protect your data. All sensitive information is encrypted both in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you have privacy concerns, please contact us at <a href="mailto:privacy@onov.com" className="text-[#2563EB] hover:underline">privacy@onov.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
