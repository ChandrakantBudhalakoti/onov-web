import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms & Conditions - ONOV',
  description: 'Read our terms and conditions for using the ONOV platform.',
};

export default function TermsOfService() {
  return (
    <main className="w-full bg-white">
      <Header />
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Terms &amp; Conditions</h1>
          <p className="text-gray-600 mb-2">Effective Date: 20-02-2026</p>
          <p className="text-gray-600 mb-8">Last Updated: 20-02-2026</p>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the ONOV mobile and web platform (&quot;Platform&quot;), operated by ONOV LLC (&quot;ONOV,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            By creating an account or using ONOV, you agree to be legally bound by these Terms.
            If you do not agree, do not use the Platform.
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You must:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Be at least 13 years old.</li>
                <li>• Have legal capacity to enter into a binding agreement.</li>
                <li>• Comply with all applicable local, state, national, and international laws.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">If you are under 18, you represent that you have parental or guardian consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Account Registration</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users may register via:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Email</li>
                <li>• Phone number</li>
                <li>• Social login integrations (e.g., Meta Platforms, Google, Apple Inc.)</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You agree to:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Provide accurate information.</li>
                <li>• Maintain confidentiality of login credentials.</li>
                <li>• Accept responsibility for all activities under your account.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">ONOV reserves the right to suspend or terminate accounts with false or misleading information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Profiles</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV offers:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Free profiles</li>
                <li>• Premium profiles (monthly subscription)</li>
                <li>• Business profiles</li>
                <li>• Star-rated profiles</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Premium users may operate a business profile alongside a personal profile. Users are solely responsible for all content and activities associated with their profiles.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Content Ownership &amp; License</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You retain ownership of content you post, including:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Posts</li>
                <li>• Reels</li>
                <li>• Debate videos</li>
                <li>• Audio drops</li>
                <li>• Polls</li>
                <li>• Fundraising posts</li>
                <li>• Live broadcasts</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">However, by posting content on ONOV, you grant ONOV a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, store, reproduce, distribute, display, and promote such content for purposes of operating and marketing the Platform.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You represent and warrant that:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• You own or have rights to the content.</li>
                <li>• Your content does not infringe intellectual property rights.</li>
                <li>• Your content does not violate applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Conduct</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users shall not:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Post unlawful, defamatory, or misleading content.</li>
                <li>• Incite violence or hatred.</li>
                <li>• Manipulate supporter counts or ratings.</li>
                <li>• Engage in harassment or bullying.</li>
                <li>• Interfere with debate moderation systems.</li>
                <li>• Upload malicious code.</li>
                <li>• Impersonate another person.</li>
                <li>• Conduct fraudulent fundraising.</li>
                <li>• Circumvent payment systems.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Violation may result in suspension, termination, or legal action.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Debate Functionality</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV integrates real-time communication services via Agora.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Debate Rules:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Debate creator sets duration (20/30/40/60 minutes).</li>
                <li>• All participants must accept invitation before public listing.</li>
                <li>• Computer moderation divides time equally.</li>
                <li>• Viewer audio drops are limited to 3 seconds.</li>
                <li>• Donations during debate are voluntary.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">ONOV does not endorse participant views and is not responsible for debate content.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Fundraising &amp; Donations</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Political leaders and users may create fundraising campaigns.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Acts only as a platform facilitator.</li>
                <li>• Does not guarantee legitimacy of campaigns.</li>
                <li>• May set minimum/maximum donation limits.</li>
                <li>• May charge service fees.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Users donate at their own risk. Fraudulent campaigns will result in immediate termination and potential reporting to authorities.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Events &amp; Ticketing</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Event organizers may promote events and sell tickets.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Is not the event organizer.</li>
                <li>• Is not responsible for event cancellation, injury, or disputes.</li>
                <li>• May charge commission on ticket sales.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Refunds are subject to event organizer policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Star Badge &amp; Rating System</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">User star badges are based on:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Supporter thresholds</li>
                <li>• Subscription payment</li>
                <li>• Platform eligibility</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Star tiers include:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• 1 Star (10K+ supporters)</li>
                <li>• 2 Star (50K+)</li>
                <li>• 3 Star (100K+)</li>
                <li>• 4 Star (1M+)</li>
                <li>• 5 Star (10M+)</li>
                <li>• Black Diamond tiers</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV reserves the right to:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Audit supporter counts.</li>
                <li>• Revoke badges.</li>
                <li>• Unlock higher-tier subscriptions at its discretion.</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Star badges do not imply endorsement or verification unless explicitly marked.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Paid Communities</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users may create:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Public or private communities</li>
                <li>• Free or paid communities</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV collects a percentage commission on paid memberships.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Community owners are responsible for:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Content moderation</li>
                <li>• Membership policies</li>
                <li>• Legal compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Payments &amp; Subscriptions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Payments may include:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Premium subscriptions</li>
                <li>• Star badge subscriptions</li>
                <li>• Community fees</li>
                <li>• Event tickets</li>
                <li>• Donations</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Payments are processed via secure third-party providers.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">All subscription fees are:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Recurring monthly (unless stated otherwise)</li>
                <li>• Non-refundable except where required by law</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Failure to pay may result in a downgrade or suspension.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Live Broadcasting</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Live streaming features are enabled through Agora.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users agree:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Live content must comply with platform policies.</li>
                <li>• ONOV may remove live streams at its discretion.</li>
                <li>• Live broadcasts may be recorded for moderation purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Advertising &amp; Promotions</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Business users may run paid promotions.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Advertisers are solely responsible for:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Accuracy of advertisements</li>
                <li>• Legal compliance</li>
                <li>• Intellectual property rights</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">ONOV may reject or remove advertisements at its discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Intellectual Property</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">All platform elements including:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Logo</li>
                <li>• Branding</li>
                <li>• Software</li>
                <li>• Interface design</li>
                <li>• Templates</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Are property of ONOV LLC and protected under intellectual property laws. Users may not copy, distribute, reverse engineer, or exploit platform code.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Termination</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may suspend or terminate accounts for:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Policy violations</li>
                <li>• Fraud</li>
                <li>• Abuse of platform systems</li>
                <li>• Legal requests</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Users may delete accounts at any time.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Certain provisions survive termination (e.g., indemnification, liability limits).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Disclaimer of Warranties</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">The Platform is provided &quot;AS IS&quot; and &quot;AS AVAILABLE.&quot;</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV makes no warranties regarding:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Platform uptime</li>
                <li>• Accuracy of content</li>
                <li>• Financial success of fundraising</li>
                <li>• Debate fairness</li>
                <li>• Event execution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Limitation of Liability</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">To the fullest extent permitted by law, ONOV shall not be liable for:</p>
              <ul className="space-y-2 text-lg text-gray-600 mb-4">
                <li>• Indirect damages</li>
                <li>• Loss of profits</li>
                <li>• Data loss</li>
                <li>• Reputational harm</li>
                <li>• User disputes</li>
                <li>• Third-party service failures</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed">Total liability shall not exceed the amount paid by the user in the last 12 months.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Indemnification</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">You agree to indemnify and hold harmless ONOV LLC from claims arising out of:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• Your content</li>
                <li>• Your fundraising activities</li>
                <li>• Your debate participation</li>
                <li>• Your event organization</li>
                <li>• Your violation of these Terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Governing Law</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms are governed by the laws of the State of New York, without regard to conflict-of-law principles. All disputes shall be subject to the exclusive jurisdiction of state and federal courts located in New York, USA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Changes to Terms</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">ONOV may update these Terms at any time.</p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">Material changes will be communicated via:</p>
              <ul className="space-y-2 text-lg text-gray-600">
                <li>• App notification</li>
                <li>• Email</li>
              </ul>
              <p className="text-lg text-gray-600 leading-relaxed mt-4">Continued use of the Platform constitutes acceptance.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">21. Contact Information</h2>
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
