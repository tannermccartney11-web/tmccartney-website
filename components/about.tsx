'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
                Former professional athlete turned creative.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I create high-quality social media content that helps brands stand out in the feed. My background in athletics taught me discipline, storytelling through motion, and the power of authentic moments.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Every piece of content I create is crafted with intention — cinematic visuals, compelling narratives, and a production quality that elevates your brand above the noise.
              </p>
            </div>

            {/* Location badge instead of stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground tracking-wide uppercase">
                Based in Austin, TX
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
