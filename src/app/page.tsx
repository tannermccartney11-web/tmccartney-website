'use client';

import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import WhoIAmSection from '@/components/who-i-am-section';
import ContentPillarsSection from '@/components/content-pillars-section';
import RecentPosts from '@/components/RecentPosts';
import AudienceSection from '@/components/audience-section';
import MonthlyInsights from '@/components/MonthlyInsights';
import WhyPartnerSection from '@/components/why-partner-section';
import PartnershipOptionsSection from '@/components/partnership-options-section';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <WhoIAmSection />
        <ContentPillarsSection />
        <RecentPosts />
        <AudienceSection />
        {/* <MonthlyInsights /> */}
        <WhyPartnerSection />
        <PartnershipOptionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
