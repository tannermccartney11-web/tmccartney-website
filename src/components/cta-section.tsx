export default function CTASection() {
  return (
    <section id="contact" className="py-20 border-t border-[#1A1A1A]">
      <div className="bg-[#111111] border border-[#1A1A1A] rounded-lg p-12 md:p-16 text-center space-y-8">
        <div>
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-4">
            Next Step
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#E8E4DF]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Ready to collaborate?
          </h2>
        </div>

        <p className="text-lg text-[#999] max-w-2xl mx-auto">
          Let's create something amazing together. Whether you have a specific idea or want to explore possibilities,
          I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="mailto:contact@example.com"
            className="px-8 py-3 bg-[#C8A96E] text-black font-semibold rounded hover:bg-[#dab896] transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="https://instagram.com/tanner.mccartney99"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#C8A96E] text-[#C8A96E] font-semibold rounded hover:bg-[#C8A96E] hover:text-black transition-colors"
          >
            DM on Instagram
          </a>
        </div>

        <p className="text-sm text-[#555]">
          Response time: Usually within 24-48 hours
        </p>
      </div>
    </section>
  );
}
export default RecentPosts;