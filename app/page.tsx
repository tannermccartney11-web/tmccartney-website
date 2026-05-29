import { MediaKitNav } from '@/components/media-kit/nav'
import { MediaKitHero } from '@/components/media-kit/hero'
import { WhoIAm } from '@/components/media-kit/who-i-am'
import { ContentPillars } from '@/components/media-kit/content-pillars'
import { RecentContent } from '@/components/media-kit/recent-content'
import { AudienceInsights } from '@/components/media-kit/audience-insights'
import { MonthlyInsights } from '@/components/media-kit/monthly-insights'
import { WhyPartner } from '@/components/media-kit/why-partner'
import { PartnershipOptions } from '@/components/media-kit/partnership-options'
import { MediaKitCTA } from '@/components/media-kit/cta'
import { MediaKitFooter } from '@/components/media-kit/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MediaKitNav />
      <MediaKitHero />
      <WhoIAm />
      <ContentPillars />
      <RecentContent />
      <AudienceInsights />
      <MonthlyInsights />
      <WhyPartner />
      <PartnershipOptions />
      <MediaKitCTA />
      <MediaKitFooter />
    </main>
  )
}
