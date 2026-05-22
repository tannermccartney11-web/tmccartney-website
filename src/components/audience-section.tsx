export default function AudienceSection() {
  const demographics = [
    {
      label: 'Age Range',
      value: '18-35',
      percentage: 78,
    },
    {
      label: 'Gender',
      value: '55% Female, 45% Male',
      percentage: 100,
    },
    {
      label: 'Geographic',
      value: 'Primarily US & Canada',
      percentage: 72,
    },
    {
      label: 'Engagement Rate',
      value: '8.5% Average',
      percentage: 85,
    },
  ];

  const interests = [
    'Creative Industry',
    'Entrepreneurship',
    'Lifestyle & Wellness',
    'Digital Marketing',
    'Content Creation',
    'Personal Development',
    'Design & Aesthetics',
    'Authentic Storytelling',
  ];

  return (
    <section id="audience" className="py-20 border-t border-[#1A1A1A]">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Audience Insights
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Who Follows Me
          </h2>
          <p className="text-[#999] mt-4 max-w-2xl">
            My audience is a highly engaged community of creatives, entrepreneurs, and individuals seeking authentic content
            and meaningful connections.
          </p>
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {demographics.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-[#555] uppercase tracking-wide">{item.label}</p>
                  <p className="text-xl font-bold text-[#E8E4DF] mt-1">{item.value}</p>
                </div>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#C8A96E] h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="space-y-4">
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase">
            Top Interests
          </p>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#111111] border border-[#1A1A1A] text-[#E8E4DF] text-sm rounded hover:border-[#C8A96E] transition-colors duration-300"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="bg-[#111111] border border-[#1A1A1A] p-8 rounded">
          <h3 className="text-xl font-bold text-[#E8E4DF] mb-4">Why This Matters for Your Brand</h3>
          <ul className="space-y-3 text-[#999]">
            <li className="flex gap-3">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span>Highly engaged audience that actively interacts with content</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span>Aligned with values-driven brands and authentic messaging</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span>Strong purchasing power and decision-making influence</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#C8A96E] font-bold">✓</span>
              <span>Cross-platform reach beyond Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AudienceSection;