'use client'

import { motion } from 'framer-motion'

const options = [
  {
    title: 'Sponsored Content',
    description: 'Cinematic reels, carousels, or talking heads featuring your product integrated naturally into my content pillars. Shot, edited, and posted to my audience with full usage rights available.',
  },
  {
    title: 'Product Integration',
    description: "Your product woven into my daily content — training runs, filming sessions, behind-the-scenes. Organic placement that doesn't feel like an ad because it isn't one.",
  },
  {
    title: 'Brand Ambassadorship',
    description: 'Long-term partnership with ongoing content, event appearances, and consistent representation. The deeper the relationship, the more authentic it reads to the audience.',
  },
  {
    title: 'Event & Race Coverage',
    description: 'I run ultramarathons and create content at events. Your brand gets cinematic race-day content, stories in real time, and the built-in narrative of endurance sport.',
  },
]

export function PartnershipOptions() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-muted-foreground mb-4"
        >
          PARTNERSHIP OPTIONS
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          Ways we can work together.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-card border border-border p-6 rounded-lg"
            >
              <h3 className="font-display text-xl tracking-wide mb-3">{option.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {option.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
