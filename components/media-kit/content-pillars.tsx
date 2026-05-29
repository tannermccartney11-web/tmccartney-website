'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    name: 'MILES & MINDSET',
    tagline: 'The ultrarunner\'s inner world',
    description: 'Training, race prep, gear in action, and the mental side of endurance sport. This is where running, fitness, and supplement brands integrate naturally — the product is already part of the story.',
    color: '#C8A96E',
  },
  {
    name: 'FRAME BY FRAME',
    tagline: 'The craft behind the content',
    description: 'Filmmaking education, gear breakdowns, editing techniques, and behind-the-scenes. Camera, audio, lighting, and software brands fit seamlessly here.',
    color: '#7EB8A4',
  },
  {
    name: 'BUILD MODE',
    tagline: 'The business behind the brand',
    description: 'The real side of building a business as a creator. Tools, workflows, wins, and lessons. SaaS, productivity, and business brands align with this audience.',
    color: '#A07CC5',
  },
  {
    name: 'THE LONG GAME',
    tagline: 'Playing for something bigger',
    description: 'The deeper personal growth content — betting on yourself, following your dreams, refusing to stay stuck. High engagement, high save rate, broad appeal. Lifestyle brands thrive here.',
    color: '#E07A6B',
  },
]

export function ContentPillars() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-muted-foreground mb-4"
        >
          WHAT I POST
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          Four content lanes your brand can live in.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-background border border-border p-6 rounded-lg"
              style={{ borderLeftWidth: '3px', borderLeftColor: pillar.color }}
            >
              <p 
                className="font-mono text-xs tracking-widest mb-2"
                style={{ color: pillar.color }}
              >
                {pillar.name}
              </p>
              <p className="italic text-foreground mb-3">{pillar.tagline}</p>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
