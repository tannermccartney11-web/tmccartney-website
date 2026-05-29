'use client'

import { motion } from 'framer-motion'

const recentPosts = [
  { views: '12.4K', engagement: '9.2%' },
  { views: '8.7K', engagement: '11.1%' },
  { views: '15.2K', engagement: '7.8%' },
  { views: '6.3K', engagement: '12.4%' },
  { views: '9.8K', engagement: '8.9%' },
  { views: '11.1K', engagement: '10.2%' },
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
                <div className="w-[200px] h-[355px] bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="font-mono text-xs text-muted-foreground">Instagram Post</span>
                </div>
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
