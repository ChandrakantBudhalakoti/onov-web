import { UserPlus, Users, MessageCircle, TrendingUp, Check } from 'lucide-react';

const steps = [
  {
    number: '1',
    Icon: UserPlus,
    color: 'bg-[#2563EB]',
    title: 'Create Your Profile',
    description: 'Set up your professional or social profile. Choose between free and premium tiers based on your needs.',
  },
  {
    number: '2',
    Icon: Users,
    color: 'bg-[#0B3C5D]',
    title: 'Join Communities',
    description: 'Find and join political or local communities that align with your interests and values.',
  },
  {
    number: '3',
    Icon: MessageCircle,
    color: 'bg-red-500',
    title: 'Participate in Debates',
    description: 'Engage in live debates, share reels, and join community events to shape the conversation.',
  },
  {
    number: '4',
    Icon: TrendingUp,
    color: 'bg-emerald-500',
    title: 'Grow Your Influence',
    description: 'Monitor your engagement metrics and expand your network and influence across the platform.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            THE PROCESS
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0B3C5D] mt-4">
            Four Steps to Influence.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Joining ONOV is simple, secure, and designed to get you connected within minutes.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Number Circle - above icon */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600 mb-4 z-10">
                  {step.number}
                </div>

                {/* Icon - rounded square with colored background */}
                <div
                  className={`w-32 h-32 rounded-2xl flex items-center justify-center text-white mb-6 ${step.color}`}
                >
                  <step.Icon className="w-14 h-14" strokeWidth={2} />
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{step.description}</p>

                {/* Checkmark - all steps */}
                <div className="w-8 h-8 rounded-full bg-[#7DD3FC] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Indicator Section */}
          <div className="mt-16 bg-white border border-gray-200 rounded-xl px-8 py-6 shadow-sm">
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-1 rounded bg-teal-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">ONBOARDING</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-1 rounded bg-[#2563EB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">INTEGRATION</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-1 rounded bg-red-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">ENGAGEMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
