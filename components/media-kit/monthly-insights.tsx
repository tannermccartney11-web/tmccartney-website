'use client'

import { motion } from 'framer-motion'

const metrics = [
  { label: 'Total Reach', value: '124.5K' },
  { label: 'Avg. Views', value: '9.8K' },
  { label: 'Avg. Likes', value: '847' },
  { label: 'Avg. Comments', value: '52' },
  { label: 'Avg. Saves', value: '186' },
  { label: 'Avg. Shares', value: '73' },
]

export function MonthlyInsights() {
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
          LAST 30 DAYS
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          Monthly performance snapshot.
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="bg-card border border-border p-4 rounded-lg text-center"
            >
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground mb-2">{metric.label}</p>
              <div className="font-display text-2xl md:text-3xl text-foreground">{metric.value}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs text-muted-foreground mt-6"
        >
          Updated automatically from Instagram Insights
        </motion.p>
      </div>
    </section>
  )
}
