'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, Youtube, ExternalLink, Play, X } from 'lucide-react'
import Image from 'next/image'

// Convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url: string): string {
  const videoId = url.includes('youtu.be/') 
    ? url.split('youtu.be/')[1]?.split('?')[0]
    : url.split('v=')[1]?.split('&')[0]
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
}

const personalContent = [
  {
    id: 1,
    image: '/personal/content-2.jpg',
    type: 'Video',
    aspect: 'landscape',
    title: 'The Last Year of My Life',
    videoUrl: 'https://youtu.be/szU70LKYOso',
  },
  {
    id: 2,
    image: '/personal/content-3.jpg',
    type: 'Video',
    aspect: 'landscape',
    title: 'Documenting the Journey (Long Form)',
    videoUrl: 'https://youtu.be/Pk4Es56th0M',
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
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="creator" className="py-24 md:py-32 px-6 bg-card">
      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={getYouTubeEmbedUrl(activeVideo)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
              href="https://www.instagram.com/tanner.mccartney99/"
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

        {/* Content Grid - Mixed aspect ratios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {personalContent.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onClick={() => item.videoUrl && setActiveVideo(item.videoUrl)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                item.aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted">
                <Image
                  src={item.image}
                  alt={item.title || `Personal content ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                {item.videoUrl ? (
                  <Play className="w-8 h-8 text-foreground fill-foreground" />
                ) : (
                  <ExternalLink className="w-6 h-6 text-foreground" />
                )}
                {item.title && (
                  <span className="text-sm text-foreground text-center px-4">{item.title}</span>
                )}
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
