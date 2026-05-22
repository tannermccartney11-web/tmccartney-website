export default function WhoIAmSection() {
  return (
    <section id="about" className="py-20 border-t border-[#1A1A1A]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
              Who I Am
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Tanner McCártney
            </h2>
          </div>

          <p className="text-[#999] leading-relaxed">
            I'm a content creator and creative director focused on building genuine communities through
            authentic storytelling. With over 5 years of experience in digital content creation, I've
            worked with brands to amplify their message and connect with audiences that actually care.
          </p>

          <p className="text-[#999] leading-relaxed">
            My content spans lifestyle, entrepreneurship, and creative inspiration—always with a focus
            on value and authenticity. I believe in partnerships that align with my values and deliver
            real results for both creators and brands.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="https://instagram.com/tanner.mccartney99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A96E] hover:text-[#dab896] transition-colors font-semibold"
            >
              Instagram →
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8A96E] hover:text-[#dab896] transition-colors font-semibold"
            >
              Twitter →
            </a>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="bg-[#111111] border border-[#1A1A1A] aspect-square rounded flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#555] text-sm">Profile Photo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentPosts;