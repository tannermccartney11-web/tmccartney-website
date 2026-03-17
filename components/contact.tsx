'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Instagram, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground text-balance">
            Let's build something.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to tell your story? I'd love to hear about your project and explore how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8"
        >
          <a
            href="mailto:hello@tannermccartney.com"
            className="group flex items-center gap-3 text-lg md:text-xl text-foreground hover:text-accent transition-colors duration-300"
          >
            <Mail className="w-5 h-5" />
            <span>hello@tannermccartney.com</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>

          <span className="hidden sm:block text-border">|</span>

          <a
            href="https://instagram.com/tannermccartney"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-lg md:text-xl text-foreground hover:text-accent transition-colors duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>@tannermccartney</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </a>
        </motion.div>

        {/* Optional Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-300"
            />
            <textarea
              placeholder="Tell me about your project"
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
