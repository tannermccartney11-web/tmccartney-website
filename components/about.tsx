'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '50+', label: 'Brand Campaigns' },
  { value: '3M+', label: 'Views Generated' },
  { value: 'Austin, TX', label: 'Based In' },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted">
              <Image
                src="/about/portrait.jpg"
                alt="Tanner McCartney - Videographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30 rounded-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              About
            </h2>
            
            <div className="mt-8 space-y-6">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Former professional athlete turned brand filmmaker.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I help brands grow through authentic storytelling and strategic organic content. Every project starts with understanding your story, your audience, and what makes you different.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                From concept to final cut, I craft visual narratives that don't just look beautiful — they connect, resonate, and drive real results for your brand.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-serif text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
