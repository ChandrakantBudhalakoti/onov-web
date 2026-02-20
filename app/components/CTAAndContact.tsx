'use client';

import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Check } from 'lucide-react';

export default function CTAAndContact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0B3C5D] to-[#0D4A70] rounded-2xl sm:rounded-3xl mx-4 sm:mx-6 lg:mx-auto lg:max-w-7xl lg:my-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-blue-300"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
              LIMITED TIME BETA LAUNCH
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 px-2">
            Join the Next
            <br />
            Generation
            <br />
            <span className="text-[#2563EB]">Social Platform.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Experience the power of secure, community-driven political engagement today. Get started with your professional profile in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0B3C5D] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              GET STARTED
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
            {/* Left - Contact Info */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  CONNECT WITH ONOV
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                Let's Start a
                <br />
                <span className="text-[#2563EB]">Conversation</span>.
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have questions about our enterprise solutions? Want to partner with us or just say hello? We'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email Our Team</div>
                    <a href="mailto:net-support@onov.com" className="text-lg font-bold text-gray-900 hover:text-[#2563EB]">
                      net-support@onov.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Call Our Office</div>
                    <a href="tel:+12124014818" className="text-lg font-bold text-gray-900 hover:text-[#2563EB]">
                      +1 (212) 401-4818
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Global HQ</div>
                    <p className="text-lg font-bold text-gray-900">175 Fulton Ave Suite 302, Hempstead, NY 11550</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                    Organization Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-gray-600 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help your mission?"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#0B3C5D] text-white rounded-full font-semibold hover:bg-[#0D4A70] transition-colors uppercase text-sm font-bold tracking-wide flex items-center justify-center gap-2"
                >
                  SEND INQUIRY
                  <Mail className="w-4 h-4" />
                </button>

                {submitted && (
                  <div className="text-center text-green-600 text-sm font-semibold flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    We'll respond within 12-24 business hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
