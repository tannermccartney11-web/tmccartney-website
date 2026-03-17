'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Origin Story',
    client: 'Athletic Brewing Co.',
    category: 'Brand Film',
    image: '/portfolio/project-1.jpg',
    size: 'large',
  },
  {
    id: 2,
    title: 'City Lights',
    client: 'Austin Tourism Board',
    category: 'Commercial',
    image: '/portfolio/project-2.jpg',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Crafted',
    client: 'Local Coffee Roasters',
    category: 'Documentary',
    image: '/portfolio/project-3.jpg',
    size: 'medium',
  },
  {
    id: 4,
    title: 'The Journey',
    client: 'Nike Running',
    category: 'Brand Campaign',
    image: '/portfolio/project-4.jpg',
    size: 'large',
  },
  {
    id: 5,
    title: 'Momentum',
    client: 'Tech Startup',
    category: 'Product Launch',
    image: '/portfolio/project-5.jpg',
    size: 'small',
  },
  {
    id: 6,
    title: 'Authentic',
    client: 'Whole Foods Market',
    category: 'Social Content',
    image: '/portfolio/project-6.jpg',
    size: 'small',
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

export function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
            Selected Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            A collection of brand films, documentaries, and content campaigns that tell authentic stories.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                project.size === 'large' 
                  ? 'md:col-span-2 aspect-[16/9]' 
                  : project.size === 'medium'
                  ? 'aspect-[4/3]'
                  : 'aspect-square'
              }`}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs tracking-widest uppercase text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.client}
                  </p>
                </div>

                {/* Play button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-accent-foreground fill-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
