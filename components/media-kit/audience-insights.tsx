'use client'

import { motion } from 'framer-motion'

const audienceStats = [
  { value: '73%', label: 'AGE 18–34', description: 'Young, ambitious, building something' },
  { value: '68%', label: 'MALE', description: 'Fitness-minded entrepreneurs & creatives' },
  { value: '85%', label: 'UNITED STATES', description: 'Austin, LA, NYC, and major metros' },
  { value: '8.2%', label: 'ENGAGEMENT', description: '2x the industry average for this size' },
]

export function AudienceInsights() {
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
          AUDIENCE
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          Who you&apos;re reaching through me.
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audienceStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-background border border-border p-6 rounded-lg"
            >
              <div className="font-display text-5xl text-accent mb-2">{stat.value}</div>
              <p className="font-mono text-xs tracking-widest text-foreground mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground font-light">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
