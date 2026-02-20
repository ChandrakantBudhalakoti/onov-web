import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Political Content Policy - ONOV',
  description: 'Our policy governing political content, advertising, and civic discourse on the ONOV platform.',
};

export default function PoliticalContentPolicy() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Political Content Policy</h1>
          <p className="text-gray-600 mb-2">Effective Date: 20-02-2026</p>
          <p className="text-gray-600 mb-8">Last Updated: 20-02-2026</p>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            ONOV LLC (&quot;ONOV,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides a platform for civic discussion, political engagement, debates, fundraising, and public discourse.
            This Political Content Policy governs the creation, publication, promotion, and monetization of political content on the ONOV platform.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Purpose</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">This Policy is designed to:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Promote lawful political expression</li>
                <li>• Protect election integrity</li>
                <li>• Prevent misinformation and manipulation</li>
                <li>• Ensure transparency in political advertising</li>
                <li>• Reduce harmful or deceptive political practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political Content includes:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Content related to elections</li>
                <li>• Public policy discussions</li>
                <li>• Political parties</li>
                <li>• Political candidates</li>
                <li>• Government officials</li>
                <li>• Referendums or ballot initiatives</li>
                <li>• Political fundraising campaigns</li>
                <li>• Advocacy for or against legislation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Permitted Political Content</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">The following is allowed, subject to compliance:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Civic discussions</li>
                <li>• Policy debates</li>
                <li>• Opinion posts</li>
                <li>• Political event promotion</li>
                <li>• Fundraising for lawful political causes</li>
                <li>• Debate participation</li>
                <li>• Poll creation related to political issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prohibited Political Content</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">The following is strictly prohibited:</p>
              <ol className="list-decimal list-inside space-y-2 text-lg text-gray-600 mb-4">
                <li>False statements about election procedures</li>
                <li>Voter suppression tactics</li>
                <li>Impersonation of candidates or officials</li>
                <li>Deepfakes or manipulated media intended to mislead</li>
                <li>Foreign interference campaigns</li>
                <li>Coordinated inauthentic behavior</li>
                <li>Calls for violence related to political activity</li>
                <li>Fraudulent political fundraising</li>
              </ol>
              <p className="text-lg text-gray-600 leading-relaxed">Accounts engaging in prohibited conduct may be suspended or permanently banned.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Political Advertising Rules</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Business users or political entities running paid promotions must:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Verify identity prior to ad approval</li>
                <li>• Disclose funding source</li>
                <li>• Clearly label political advertisements</li>
                <li>• Provide geographic targeting transparency</li>
                <li>• Comply with applicable election laws</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">ONOV reserves the right to reject or remove political ads at its discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Fundraising Requirements</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political fundraising campaigns must:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Clearly identify beneficiary</li>
                <li>• State purpose of funds</li>
                <li>• Comply with local campaign finance laws</li>
                <li>• Avoid misleading claims</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may request documentation verifying legitimacy.</p>
              <p className="text-lg text-gray-600 leading-relaxed">ONOV is not responsible for ensuring regulatory compliance of campaign organizers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Debate Standards</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political debates hosted on ONOV:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Must identify participants clearly</li>
                <li>• Must not impersonate public figures</li>
                <li>• Must comply with platform rules</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Live debates conducted via Agora are subject to moderation controls. Computer moderation may divide speaking time equally to reduce bias.</p>
              <p className="text-lg text-gray-600 leading-relaxed">ONOV does not endorse participant viewpoints.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Verified Political Accounts</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may offer verification for:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Public officials</li>
                <li>• Registered candidates</li>
                <li>• Recognized political organizations</li>
                <li>• Verified journalists</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Verification requires documentation review. Verification does not imply endorsement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Misinformation &amp; Fact-Checking</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Apply warning labels</li>
                <li>• Reduce distribution of disputed claims</li>
                <li>• Remove demonstrably false content</li>
                <li>• Partner with third-party fact-checkers</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Repeated misinformation violations may lead to account restrictions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Bot &amp; Coordinated Activity Policy</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Artificial amplification of political content through:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Bots</li>
                <li>• Fake accounts</li>
                <li>• Engagement farms</li>
                <li>• Coordinated manipulation networks</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">is strictly prohibited. ONOV uses monitoring systems to detect inauthentic activity.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Political Content</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political advertising may be restricted based on:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• User location</li>
                <li>• Election period</li>
                <li>• Local regulatory requirements</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">ONOV reserves the right to restrict cross-border political ads.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Election Period Restrictions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">During active election periods, ONOV may:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Increase moderation review</li>
                <li>• Require stricter ad verification</li>
                <li>• Temporarily restrict new political advertisers</li>
                <li>• Limit certain fundraising features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. User Reporting Mechanism</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users may report political content that:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Violates this policy</li>
                <li>• Contains misinformation</li>
                <li>• Incites violence</li>
                <li>• Appears fraudulent</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Reports are reviewed by moderation teams.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Enforcement Actions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may take actions including:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Content removal</li>
                <li>• Labeling or demotion</li>
                <li>• Temporary suspension</li>
                <li>• Permanent account termination</li>
                <li>• Referral to law enforcement (where required)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Star Rating &amp; Political Status</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political accounts participating in the ONOV star rating system must not:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Purchase artificial supporters</li>
                <li>• Misrepresent public office</li>
                <li>• Manipulate badge eligibility</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Badges may be revoked upon audit failure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Disclaimer</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ONOV is a neutral technology platform. Political opinions expressed by users do not represent the views of ONOV LLC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Policy Updates</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may modify this Political Content Policy:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• During election cycles</li>
                <li>• To reflect legal changes</li>
                <li>• To address emerging threats</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Continued use of the platform constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">For political advertising inquiries or verification requests:</p>
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
