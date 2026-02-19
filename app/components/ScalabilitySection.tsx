import { Cloud, RefreshCw, CreditCard, Zap, Rocket, Globe } from 'lucide-react';

const techFeatures = [
  {
    Icon: Cloud,
    title: 'Cloud Native',
    description: 'Built for high-performance cloud-native architecture.',
  },
  {
    Icon: RefreshCw,
    title: 'Microservices',
    description: 'Scalable microservices for modular updates and feature expansion.',
  },
  {
    Icon: CreditCard,
    title: 'Secure Payments',
    description: 'Integrated PCI-compliant secure payment processing for donations.',
  },
  {
    Icon: Zap,
    title: 'Real-time Push',
    description: 'Highly optimized real-time event-driven notifications system.',
  },
  {
    Icon: Rocket,
    title: 'Live Sync',
    description: 'Low-latency live stream data synchronization for massive audiences.',
  },
  {
    Icon: Globe,
    title: 'Edge Deployment',
    description: 'Distributed edge compute for fastest response times everywhere.',
  },
];

export default function ScalabilitySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                TECHNOLOGY STACK
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Built for <span className="text-gray-700">Scalability</span>
              <br />
              &amp; <span className="text-[#2563EB]">Absolute Security</span>.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our platform architecture is designed to handle millions of concurrent users while ensuring data privacy and transactional security.
            </p>

            {/* Tech Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    {(() => {
                      const IconComponent = feature.Icon;
                      return <IconComponent className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - System Diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md mx-auto">
              {/* Diagram Container */}
              <div className="bg-gradient-to-br from-[#0B3C5D] to-[#0D4A70] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-3 gap-4 h-full p-4">
                    {Array(9).fill(null).map((_, i) => (
                      <div key={i} className="border border-white/50 rounded"></div>
                    ))}
                  </div>
                </div>

                {/* System Architecture Boxes */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 border border-white/30 rounded-lg p-4 text-center">
                    <div className="text-xs font-bold text-blue-200 mb-2">DATABASE</div>
                    <div className="text-sm font-semibold">AWS S3/RDS</div>
                  </div>
                  <div className="bg-white/10 border border-white/30 rounded-lg p-4 text-center">
                    <div className="text-xs font-bold text-blue-200 mb-2">ENCRYPTION</div>
                    <div className="text-sm font-semibold">AES-256</div>
                  </div>
                  <div className="bg-white/10 border border-white/30 rounded-lg p-4 text-center">
                    <div className="text-xs font-bold text-blue-200 mb-2">BACKEND</div>
                    <div className="text-sm font-semibold">Node.js</div>
                  </div>
                  <div className="bg-white/10 border border-white/30 rounded-lg p-4 text-center">
                    <div className="text-xs font-bold text-blue-200 mb-2">INFRASTRUCTURE</div>
                    <div className="text-sm font-semibold">Kubernetes</div>
                  </div>
                </div>

                {/* Bottom Label */}
                <div className="text-center py-4 border-t border-white/30">
                  <div className="text-xs font-bold text-blue-300">SYSTEM ARCHITECTURE V2.4</div>
                </div>

                {/* Floating Circle */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#2563EB] rounded-full blur-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
