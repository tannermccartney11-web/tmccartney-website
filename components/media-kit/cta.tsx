'use client'

import { motion } from 'framer-motion'

export function MediaKitCTA() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest text-muted-foreground mb-4"
        >
          LET&apos;S PARTNER
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6"
        >
          Interested in working together?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground font-light mb-12"
        >
          I&apos;d love to hear about your brand and figure out how we can create something that feels real.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          <a 
            href="mailto:Tm.media512@gmail.com"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent hover:underline transition-colors"
          >
            Tm.media512@gmail.com
          </a>
          <span className="hidden md:block text-border">|</span>
          <a 
            href="https://www.instagram.com/tanner.mccartney99/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent hover:underline transition-colors"
          >
            @tanner.mccartney99
          </a>
          <span className="hidden md:block text-border">|</span>
          <a 
            href="https://www.youtube.com/@TannerMcCartney"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent hover:underline transition-colors"
          >
            YouTube
          </a>
        </motion.div>
      </div>
    </section>
  )
}
