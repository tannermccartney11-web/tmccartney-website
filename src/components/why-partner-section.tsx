export default function WhyPartnerSection() {
  const reasons = [
    {
      number: '01',
      title: 'Authentic Engagement',
      description: 'My audience is engaged and loyal. They trust my recommendations and actively engage with content I create.',
    },
    {
      number: '02',
      title: 'Creative Excellence',
      description: 'I bring strategic thinking and creative execution to every partnership, ensuring high-quality content that stands out.',
    },
    {
      number: '03',
      title: 'Values Alignment',
      description: 'I partner with brands whose values align with mine. This ensures authenticity that resonates with my audience.',
    },
    {
      number: '04',
      title: 'Growth-Focused',
      description: 'Every partnership is structured to deliver measurable results. I focus on metrics that matter to your business.',
    },
    {
      number: '05',
      title: 'Professional & Reliable',
      description: 'I deliver projects on time, communicate clearly, and treat partnerships as long-term relationships.',
    },
    {
      number: '06',
      title: 'Cross-Platform Reach',
      description: 'From Instagram to other channels, I amplify your message across multiple platforms and audiences.',
    },
  ];

  return (
    <section id="partnership" className="py-20 border-t border-[#1A1A1A]">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Partnership Value
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Why Partner With Me
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="space-y-4">
              <p
                className="text-4xl font-bold text-[#C8A96E]"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {reason.number}
              </p>
              <div>
                <h3 className="text-lg font-bold text-[#E8E4DF] mb-2">{reason.title}</h3>
                <p className="text-[#999]">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentPosts;