'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const recentPosts = [
  { 
    url: 'https://www.instagram.com/reel/DYlBjrKR2WF/',
    thumbnail: '/reels/reel-1.jpg',
    title: "It's not you vs the world.",
    views: '3,064', 
    engagement: '6.5%' 
  },
  { 
    url: 'https://www.instagram.com/reel/DYH4GueRFJD/',
    thumbnail: '/reels/reel-2.jpg',
    title: "I didn't want to post today.",
    views: '3,788', 
    engagement: '6.5%' 
  },
  { 
    url: null,
    thumbnail: null,
    title: '',
    views: '-', 
    engagement: '-' 
  },
  { 
    url: null,
    thumbnail: null,
    title: '',
    views: '-', 
    engagement: '-' 
  },
  { 
    url: null,
    thumbnail: null,
    title: '',
    views: '-', 
    engagement: '-' 
  },
  { 
    url: null,
    thumbnail: null,
    title: '',
    views: '-', 
    engagement: '-' 
  },
]

export function RecentContent() {
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
          RECENT CONTENT
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-12"
        >
          What I&apos;ve been posting.
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto scrollbar-hide -mx-6 px-6"
        >
          <div className="flex gap-4 pb-4" style={{ minWidth: 'max-content' }}>
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="flex-shrink-0"
              >
                {post.url && post.thumbnail ? (
                  <a 
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-[200px] h-[355px] bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors relative group"
                  >
                    <Image
                      src={post.thumbnail}
                      alt={post.title || 'Instagram Reel'}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-xs text-white">View on Instagram</span>
                    </div>
                  </a>
                ) : (
                  <div className="w-[200px] h-[355px] bg-card border border-border rounded-lg flex items-center justify-center">
                    <span className="font-mono text-xs text-muted-foreground">Add Reel</span>
                  </div>
                )}
                <div className="mt-3 space-y-1">
                  <p className="font-mono text-xs text-foreground">{post.views} views</p>
                  <p className="font-mono text-xs text-muted-foreground">{post.engagement} engagement</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-xs text-muted-foreground mt-6"
        >
          Auto-updated from @tanner.mccartney99
        </motion.p>
      </div>
    </section>
  )
}
