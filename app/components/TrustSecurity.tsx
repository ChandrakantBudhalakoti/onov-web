import { Lock, ShieldCheck, Shield, Globe, Check } from 'lucide-react';

const securityFeatures = [
  { Icon: Lock, title: 'AES-256 Encryption', description: 'All sensitive user data is encrypted with military-grade protocols.' },
  { Icon: ShieldCheck, title: 'Verified Identity', description: 'Strict verification processes for high-impact profiles to ensure authenticity.' },
  { Icon: Shield, title: 'Data Privacy', description: 'Zero-knowledge architecture means we don\'t sell your private data.' },
  { Icon: Globe, title: 'Edge Security', description: 'DDoS protection and real-time threat monitoring at every edge node.' },
];

const compliances = [
  'GDPR & CCPA Compliant',
  'PCI DSS Level 1 Certified',
  'SOC 2 Type II Certified',
  'End-to-end encrypted messaging',
];

export default function TrustSecurity() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0B3C5D] via-[#0D4A70] to-[#1a5a8a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-1 rounded-full bg-blue-300"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300">
                SECURITY FIRST
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Your Trust is Our
              <br />
              <span className="text-[#2563EB]">Core Responsibility</span>.
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              ONOV is engineered from the ground up to be the world's most secure and trustworthy political social platform.
            </p>

            {/* Compliance Badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {compliances.map((compliance, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-semibold">{compliance}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="mb-4">
                  {(() => {
                    const IconComponent = feature.Icon;
                    return <IconComponent className="w-10 h-10 text-blue-300" strokeWidth={1.5} />;
                  })()}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
