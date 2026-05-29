'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tanner McCartney. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Austin, Texas
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
