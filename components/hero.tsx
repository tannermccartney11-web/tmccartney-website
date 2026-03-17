'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1a1510] animate-gradient opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        {/* Film grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight text-foreground text-balance"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Tanner McCartney
          </motion.h1>
        </motion.div>

        <motion.p 
          className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="text-foreground">Videographer</span>
          <span className="mx-3 text-accent">·</span>
          <span className="text-foreground">Brand Storyteller</span>
          <span className="mx-3 text-accent">·</span>
          <span className="text-foreground">Content Strategist</span>
        </motion.p>

        <motion.div
          className="mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a 
            href="#work" 
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors duration-500"
          >
            <span>View Work</span>
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </motion.svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
