'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    number: '01',
    title: 'Cinematic Production Quality',
    description: "I'm a professional filmmaker. Your product won't look like a phone selfie with a discount code. It'll look like a brand film — because that's what I do for a living.",
  },
  {
    number: '02',
    title: 'Authentic Integration',
    description: "I only partner with brands I actually use. My audience knows that. When I feature something, it's because it's already part of my life — not because I got a check.",
  },
  {
    number: '03',
    title: 'Content You Can Repurpose',
    description: "Every deliverable is shot and edited at a level you can run on your own channels. You're not just getting a post — you're getting assets.",
  },
]

export function WhyPartner() {
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
          WHY PARTNER WITH ME
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          What makes this different.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-background border border-border p-6 rounded-lg"
            >
              <div className="font-display text-4xl text-accent mb-4">{reason.number}</div>
              <h3 className="font-display text-xl tracking-wide mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
