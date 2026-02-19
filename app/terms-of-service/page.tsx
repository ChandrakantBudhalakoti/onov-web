import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service - ONOV',
  description: 'Read our terms of service and user agreement.',
};

export default function TermsOfService() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By accessing and using ONOV, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on ONOV for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Modifying or copying the materials</li>
                <li>• Using the materials for any commercial purpose</li>
                <li>• Attempting to decompile or reverse engineer any software</li>
                <li>• Removing any copyright or other proprietary notations</li>
                <li>• Transmitting the materials to any other person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                As a user, you are responsible for:
              </p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Maintaining the confidentiality of your account credentials</li>
                <li>• All activities that occur under your account</li>
                <li>• Complying with all applicable laws and regulations</li>
                <li>• Respecting the rights and dignity of other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Content</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                You may not upload, post, or transmit any content that is unlawful, defamatory, abusive, obscene, or harmful to minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ONOV and its suppliers will not be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ONOV.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If you have questions about these Terms, please contact us at <a href="mailto:legal@onov.com" className="text-[#2563EB] hover:underline">legal@onov.com</a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
