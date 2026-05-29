import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { PersonalContent } from '@/components/personal-content'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Portfolio />
      <PersonalContent />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
