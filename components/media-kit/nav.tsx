'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function MediaKitNav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-wide text-foreground">
          Tanner McCartney
        </Link>
        <div className="flex items-center gap-6">
          <Link 
            href="/media-kit" 
            className="font-mono text-xs uppercase tracking-wider text-accent"
          >
            Media Kit
          </Link>
          <Link 
            href="/" 
            className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
