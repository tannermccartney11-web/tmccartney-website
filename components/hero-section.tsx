import { getStreakCount } from './PostingStreak';

export default function HeroSection() {
  const streakCount = getStreakCount();

  return (
    <section className="py-20 sm:py-32 text-center">
      <div className="space-y-6">
        {/* Main Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E8E4DF] leading-tight"
          style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
        >
          Content Creator & <span className="text-[#C8A96E]">Creative Director</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#999] max-w-2xl mx-auto">
          Building authentic connections through engaging content. Let's create something amazing together.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto pt-8">
          <div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded">
            <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">{streakCount}</p>
            <p className="text-xs sm:text-sm text-[#555] uppercase tracking-wider mt-2">Day Streak</p>
          </div>
          <div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded">
            <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">15K+</p>
            <p className="text-xs sm:text-sm text-[#555] uppercase tracking-wider mt-2">Followers</p>
          </div>
          <div className="bg-[#111111] border border-[#1A1A1A] p-6 rounded">
            <p className="text-2xl sm:text-3xl font-bold text-[#C8A96E]">2M+</p>
            <p className="text-xs sm:text-sm text-[#555] uppercase tracking-wider mt-2">Total Reach</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#C8A96E] text-black font-semibold rounded hover:bg-[#dab896] transition-colors"
          >
            Explore Partnership Options
          </a>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;