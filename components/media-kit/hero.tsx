'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '3,800+', label: 'FOLLOWERS' },
  { value: '8.2%', label: 'ENGAGEMENT RATE' },
  { value: '18–34', label: 'CORE DEMO' },
  { value: '25', label: 'DAY POSTING STREAK' },
]

export function MediaKitHero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-muted-foreground mb-6"
        >
          CREATOR · ULTRARUNNER · FILMMAKER
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide mb-8"
        >
          Endurance, entrepreneurship & the{' '}
          <span className="italic text-accent">cinematic eye.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mb-12"
        >
          I create content at the intersection of running, filmmaking, and building a business from scratch — documenting the journey every single day.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl text-foreground">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
