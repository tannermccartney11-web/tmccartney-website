export default function PartnershipOptionsSection() {
  const options = [
    {
      title: 'Sponsored Post',
      price: 'Custom',
      features: [
        'Single Instagram post or story',
        'Product showcase in authentic context',
        'Caption copy included',
        'High-quality production',
      ],
      highlighted: false,
    },
    {
      title: 'Campaign Bundle',
      price: 'Custom',
      features: [
        'Multiple posts across platforms',
        'Campaign strategy & planning',
        'Dedicated content creation',
        'Performance tracking & reporting',
      ],
      highlighted: true,
    },
    {
      title: 'Long-Term Partnership',
      price: 'Custom',
      features: [
        'Ongoing collaboration',
        'Exclusive brand partnership',
        'Flexible content calendar',
        'Priority support & strategy',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-20 border-t border-[#1A1A1A]">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Let's Work Together
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Partnership Options
          </h2>
          <p className="text-[#999] mt-4 max-w-2xl">
            Flexible packages tailored to your goals. All rates are customized based on scope and deliverables.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div
              key={index}
              className={`rounded border p-8 space-y-6 transition-all duration-300 ${
                option.highlighted
                  ? 'bg-[#C8A96E] border-[#C8A96E] text-black'
                  : 'bg-[#111111] border-[#1A1A1A] text-[#E8E4DF] hover:border-[#C8A96E]'
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold">{option.title}</h3>
                <p className={`text-sm mt-2 ${option.highlighted ? 'text-black/80' : 'text-[#999]'}`}>
                  {option.price}
                </p>
              </div>

              <ul className="space-y-3">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className={`text-lg ${option.highlighted ? 'text-black' : 'text-[#C8A96E]'}`}>✓</span>
                    <span className={option.highlighted ? 'text-black' : 'text-[#999]'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded font-semibold transition-colors ${
                  option.highlighted
                    ? 'bg-black text-[#C8A96E] hover:bg-black/90'
                    : 'bg-[#C8A96E] text-black hover:bg-[#dab896]'
                }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#555] text-sm">
          Custom packages available for larger campaigns and exclusive partnerships.
        </p>
      </div>
    </section>
  );
}
export default RecentPosts;