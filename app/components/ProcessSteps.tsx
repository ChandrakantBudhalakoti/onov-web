const steps = [
  {
    number: '1',
    icon: '👤',
    title: 'Create Your Profile',
    description: 'Set up your professional or social profile. Choose between free and premium tiers based on your needs.',
  },
  {
    number: '2',
    icon: '👥',
    title: 'Join Communities',
    description: 'Find and join political or social communities that align with your interests and values.',
  },
  {
    number: '3',
    icon: '🎤',
    title: 'Participate in Debates',
    description: 'Engage in live debates, events, and campaigns to share your voice and influence.',
  },
  {
    number: '4',
    icon: '📈',
    title: 'Grow Network',
    description: 'Build your network, expand your influence, and shape conversations that matter.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              THE PROCESS
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Four Steps to <span className="text-[#2563EB]">Influence</span>.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Joining ONOV is simple, secure, and designed to get you connected within minutes.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-gray-300"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Number Circle */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-32 h-32 rounded-3xl flex items-center justify-center text-4xl transition-all duration-300 hover:shadow-lg ${
                      index === 0
                        ? 'bg-[#2563EB] text-white'
                        : index === 3
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? 'bg-[#2563EB] text-white'
                        : index === 3
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Checkmarks for completed steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {steps.map((step, index) => (
              <div key={`check-${index}`} className="flex justify-center">
                {(index === 0 || index === 3) && (
                  <div className="w-8 h-8 rounded-full bg-[#2563EB] flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
