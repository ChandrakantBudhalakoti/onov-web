const solutions = [
  {
    icon: '🎤',
    title: 'Political Leaders',
    color: 'border-[#2563EB]',
    features: [
      'Direct community engagement',
      'Verified influence scores',
      'Campaign fundraising tools',
    ],
  },
  {
    icon: '📰',
    title: 'Journalists',
    color: 'border-[#2563EB]',
    features: [
      'Real-time news sourcing',
      'Community-driven insights',
      'Secure whistleblower communication',
    ],
  },
  {
    icon: '🏢',
    title: 'Businesses',
    color: 'border-orange-500',
    features: [
      'Targeted audience reach',
      'Brand vision promotion',
      'Advanced analytics dashboard',
    ],
  },
  {
    icon: '👥',
    title: 'Communities',
    color: 'border-red-500',
    features: [
      'Scalable management tools',
      'Event ticketing system',
      'Unified messaging hub',
    ],
  },
];

export default function EnterpriseSolutions() {
  return (
    <section id="solutions" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1 h-1 rounded-full bg-[#2563EB]"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                SOLUTIONS FOR PROFESSIONALS
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Designed for the
              <br />
              <span className="text-[#2563EB]">Visionaries & Leaders</span>.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              ONOV provides specialized tools and tier-based profiles to meet the unique needs of political and social organizations.
            </p>

            <button className="px-8 py-3 border-2 border-[#0B3C5D] text-[#0B3C5D] rounded-full font-semibold hover:bg-blue-50 transition-colors uppercase text-sm font-bold tracking-wide">
              INQUIRE FOR ENTERPRISE
            </button>
          </div>

          {/* Right - Solutions Grid */}
          <div className="grid grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const borderColorClass = solution.color;
              return (
                <div
                  key={index}
                  className={`p-6 border-l-4 ${borderColorClass} bg-gradient-to-b from-gray-50 to-white rounded-lg hover:shadow-lg transition-all`}
                >
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 text-sm flex gap-2">
                        <span className="text-[#2563EB] font-bold">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
