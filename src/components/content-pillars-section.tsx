export default function ContentPillarsSection() {
  const pillars = [
    {
      title: 'Lifestyle & Daily Life',
      description: 'Behind-the-scenes glimpses into my creative process and daily routines that inspire authentic connections.',
    },
    {
      title: 'Business & Entrepreneurship',
      description: 'Insights on building brands, growth strategies, and lessons learned from growing my own creative business.',
    },
    {
      title: 'Creative Direction',
      description: 'Visual storytelling, aesthetic inspiration, and the creative principles that drive meaningful brand narratives.',
    },
    {
      title: 'Community & Culture',
      description: 'Celebrating community, fostering genuine conversations, and creating spaces where people feel they belong.',
    },
  ];

  return (
    <section id="content" className="py-20 border-t border-[#1A1A1A]">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Content Foundation
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Content Pillars
          </h2>
          <p className="text-[#999] mt-4 max-w-2xl">
            My content strategy is built on four core pillars that define my brand and resonate with my audience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#1A1A1A] p-8 rounded hover:border-[#C8A96E] transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-[#E8E4DF] mb-3">{pillar.title}</h3>
              <p className="text-[#999]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentPosts;