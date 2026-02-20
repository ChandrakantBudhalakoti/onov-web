import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Data Deletion Instructions - ONOV',
  description: 'Learn how to request deletion of your personal data from ONOV.',
};

export default function DataDeletion() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Data Deletion Instructions</h1>
          <p className="text-gray-600 mb-2">Effective Date: 20-02-2026</p>
          <p className="text-gray-600 mb-8">Last Updated: 20-02-2026</p>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            This Data Deletion Instructions document explains how users of ONOV LLC (&quot;ONOV,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) may request deletion of their personal data and how ONOV processes such requests.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Your Right to Request Deletion</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Subject to applicable law, you may request deletion of:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Your ONOV account</li>
                <li>• Personal profile information</li>
                <li>• Business profile information</li>
                <li>• Uploaded posts and reels</li>
                <li>• Debate recordings</li>
                <li>• Comments and reactions</li>
                <li>• Fundraising posts</li>
                <li>• Event listings</li>
                <li>• Travel history</li>
                <li>• Community memberships</li>
                <li>• Payment profile metadata</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">This right may apply under laws such as the GDPR and CCPA.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How to Request Data Deletion</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You may request deletion in one of the following ways:</p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Option 1: In-App Deletion</h3>
                  <ol className="list-decimal list-inside space-y-2 text-lg text-gray-600">
                    <li>Go to Settings</li>
                    <li>Select &quot;Privacy &amp; Data&quot;</li>
                    <li>Click &quot;Delete My Account&quot;</li>
                    <li>Confirm deletion</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Option 2: Email Request</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-2">Send an email to:</p>
                  <p className="text-lg text-gray-600 mb-2"><strong>Subject Line:</strong> Data Deletion Request – ONOV</p>
                  <p className="text-lg text-gray-600 mb-4">
                    <strong>Email:</strong> <a href="mailto:net-support@onov.com" className="text-[#2563EB] hover:underline">net-support@onov.com</a>
                  </p>
                  <p className="text-lg text-gray-600 mb-2">Include:</p>
                  <ul className="space-y-1 text-lg text-gray-600">
                    <li>• Full name</li>
                    <li>• Username</li>
                    <li>• Registered email address</li>
                    <li>• Phone number (if applicable)</li>
                    <li>• Clear statement requesting deletion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Option 3: Enterprise / Business Request</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Business users may submit deletion requests through their account dashboard or designated account manager.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Identity Verification</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">To protect user data, ONOV may require:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Email verification</li>
                <li>• OTP verification</li>
                <li>• Government-issued ID (in specific cases of fraud concern)</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Failure to verify identity may delay or prevent processing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What Happens After a Deletion Request</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Upon verification:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg text-gray-600">
                <li>Account access will be disabled.</li>
                <li>Public profile will be removed.</li>
                <li>Posts and user-generated content will be de-indexed.</li>
                <li>Personal identifiers will be deleted or anonymized.</li>
              </ol>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">
                Deletion is typically completed within 30 days, unless legal retention obligations apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data That May Be Retained</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may retain certain information where legally required, including:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Transaction records (for tax/accounting compliance)</li>
                <li>• Donation records (regulatory compliance)</li>
                <li>• Fraud prevention data</li>
                <li>• Security logs</li>
                <li>• Legal dispute records</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Retained data will be restricted and not used for marketing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Community &amp; Shared Content Limitations</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">If you have:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Posted content in public communities</li>
                <li>• Participated in debates</li>
                <li>• Sent messages to other users</li>
                <li>• Donated to campaigns</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-4">Some content may remain visible if:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• It has been reshared by others</li>
                <li>• It forms part of public discussion</li>
                <li>• It is required for legal compliance</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">In such cases, identifying data will be anonymized where feasible.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Debate &amp; Live Broadcast Data</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Debates and live streams conducted via Agora may include:
              </p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Recorded video files</li>
                <li>• Audio drops</li>
                <li>• Viewer interaction logs</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-4">Upon deletion request:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Your profile will be removed from recordings.</li>
                <li>• Where feasible, identifying overlays will be removed.</li>
                <li>• Archived copies required for compliance may be retained securely.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Business &amp; Payment Data</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">If you operated:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• A business profile</li>
                <li>• A paid community</li>
                <li>• A fundraising campaign</li>
                <li>• An advertising account</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4 mb-4">ONOV may retain:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Billing records</li>
                <li>• Commission records</li>
                <li>• Financial reconciliation data</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">This data is retained strictly for legal and accounting compliance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Subprocessor Data</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV uses third-party service providers including:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Agora</li>
                <li>• Banuba</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Deletion requests will be propagated to subprocessors where applicable.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Withdrawal of Consent</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If processing is based on consent, you may withdraw consent at any time. Withdrawal does not affect lawful processing prior to withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Reactivation</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Deleted accounts cannot be restored after final deletion. Users wishing to return must create a new account.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Supporter counts, star ratings, and historical badge status will not be reinstated unless approved by ONOV administration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Abusive or Fraudulent Requests</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Deny repeated excessive requests</li>
                <li>• Refuse requests intended to evade investigations</li>
                <li>• Delay deletion where fraud is suspected</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Data Portability (If Applicable)</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Before deletion, users may request:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• A copy of their data</li>
                <li>• Structured export (where technically feasible)</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Requests must be submitted before final deletion confirmation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Children&apos;s Data</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If ONOV becomes aware that data of a minor under 13 has been collected in violation of applicable law, it will be deleted promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">For data deletion or privacy-related inquiries:</p>
              <div className="text-lg text-gray-600 space-y-1">
                <p className="font-semibold text-gray-900">ONOV LLC</p>
                <p>Address: 175 Fulton Ave Suite 302, Hempstead, NY 11550</p>
                <p>
                  Email: <a href="mailto:net-support@onov.com" className="text-[#2563EB] hover:underline">net-support@onov.com</a>
                </p>
                <p>
                  Phone Number: <a href="tel:+12124014818" className="text-[#2563EB] hover:underline">+1 (212) 401-4818</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
