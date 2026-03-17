'use client'

import { motion } from 'framer-motion'
import { Film, Sparkles, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Film,
    title: 'Brand Storytelling',
    description: 'Cinematic brand films that capture your essence and connect with your audience on an emotional level.',
  },
  {
    icon: Sparkles,
    title: 'Social Content Strategy',
    description: 'Strategic content creation for Instagram, TikTok, and LinkedIn that builds community and drives engagement.',
  },
  {
    icon: TrendingUp,
    title: 'YouTube Growth',
    description: 'End-to-end YouTube strategy including content planning, production, and optimization for sustainable growth.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to final delivery, I offer comprehensive video production and content strategy services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative p-8 md:p-10 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <service.icon className="w-5 h-5 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
