'use client'

import { motion } from 'framer-motion'

const paragraphs = [
  "I got tired of living like everyone else. So I dropped out of college and went all in on disc golf. No backup plan. No safety net. Just a belief that I was made for more than the path everyone expected me to take.",
  "I spent five years grinding as a professional, working my way onto the pro tour. It wasn't the money or the wins that changed me — it was the fact that I did it at all. That was the first time I ever bet on myself, and it shattered every limiting belief I had about what was possible for my life.",
  "When I decided to pivot, I picked up a camera for the first time with zero experience. But this time I had something I didn't have before — a mindset that knew what was on the other side of going all in. I built a content business from nothing, started running ultramarathons, and began documenting the entire journey.",
  "I am as average as it gets. But I've realized that doesn't have to determine how hard you work.",
  "My goal with everything I post is simple — inspire others to chase their dreams no matter what they are. Through discipline. Through consistency. Through refusing to accept that where you are is where you have to stay.",
  "Now I'm building my personal brand to show people what's possible when you go all in on doing what you love. You can strive for excellence in everything you do — running, building a business, chasing your dreams — and use it all as an opportunity to grow.",
]

export function WhoIAm() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-muted-foreground mb-4"
        >
          WHO I AM
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          College dropout. Pro athlete. Filmmaker.
        </motion.h2>
        
        <div className="max-w-[680px] space-y-6">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className={`text-base md:text-lg font-light leading-relaxed ${
                index === 3 ? 'font-medium text-foreground' : 'text-muted-foreground'
              }`}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
