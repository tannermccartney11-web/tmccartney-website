'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const personalContent = [
  {
    id: 1,
    image: '/personal/content-1.jpg',
    type: 'Reel',
  },
  {
    id: 2,
    image: '/personal/content-2.jpg',
    type: 'Reel',
  },
  {
    id: 3,
    image: '/personal/content-3.jpg',
    type: 'Reel',
  },
  {
    id: 4,
    image: '/personal/content-4.jpg',
    type: 'Reel',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function PersonalContent() {
  return (
    <section id="creator" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground tracking-wide uppercase">
              Content Creator
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            My Personal Brand
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Beyond client work, I create content around running, fitness, and the creative journey. Follow along for behind-the-scenes, training updates, and more.
          </p>
          
          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span className="text-sm">YouTube</span>
            </a>
          </div>
        </motion.div>

        {/* Content Grid - Instagram style */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {personalContent.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative aspect-[9/16] overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted">
                <Image
                  src={item.image}
                  alt={`Personal content ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
              
              {/* Type badge */}
              <div className="absolute top-3 right-3">
                <span className="text-xs px-2 py-1 rounded bg-background/80 backdrop-blur-sm text-foreground">
                  {item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
