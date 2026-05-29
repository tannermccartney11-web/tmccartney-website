'use client';

import Link from 'next/link';
import Image from 'next/image';

const insights = {
  title: "I didn't want to post today.",
  date: "May 9",
  duration: "0:18",
  views: 3788,
  watchTime: "6h 6m 9s",
  interactions: 245,
  likes: 165,
  comments: 10,
  shares: 25,
  reposts: 17,
  saves: 28,
  profileActivity: 1,
  permalink: "https://www.instagram.com/reel/DYH4GueRFJD/",
  thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tanners%20projects-copy-copy%286%29.png-LydtGojZE1gEWrcpBdPa2BxmmZO1Oz.jpeg",
};

interface StatProps {
  value: string | number;
  label: string;
}

const Stat = ({ value, label }: StatProps) => (
  <div className="flex flex-col items-center">
    <div
      className="text-[28px] md:text-[38px] text-[#C8A96E] font-bold"
      style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
    >
      {typeof value === 'number' ? value.toLocaleString('en-US') : value}
    </div>
    <div className="font-mono text-[8px] md:text-[9px] tracking-[0.25em] text-[#555] uppercase">
      {label}
    </div>
  </div>
);

const SmallStat = ({ icon, value }: { icon: React.ReactNode; value: number }) => (
  <div className="flex items-center gap-1.5 text-[#E8E4DF]">
    {icon}
    <span className="text-sm">{value.toLocaleString()}</span>
  </div>
);

export function FeaturedReel() {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Featured Reel
          </p>
          <h2
            className="text-[46px] leading-tight text-[#E8E4DF] font-bold"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Latest performance.
          </h2>
        </div>

        {/* Featured content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Thumbnail and engagement */}
          <Link
            href={insights.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative aspect-[9/16] max-w-[320px] mx-auto lg:mx-0 overflow-hidden border border-[#1A1A1A] bg-[#111111] hover:border-[#C8A96E] transition-colors duration-300">
              <Image
                src={insights.thumbnail}
                alt={insights.title}
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
              
              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[#E8E4DF] font-medium mb-1">{insights.title}</p>
                <p className="text-[#777] text-xs">{insights.date} · Duration {insights.duration}</p>
                
                {/* Engagement row */}
                <div className="flex gap-4 mt-3">
                  <SmallStat
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    }
                    value={insights.likes}
                  />
                  <SmallStat
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M21 6h-2V3c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v3H3c-.55 0-1 .45-1 1v14l4-4h14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm-3 10H7l-2 2V8h14v8z" />
                      </svg>
                    }
                    value={insights.comments}
                  />
                  <SmallStat
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    }
                    value={insights.shares}
                  />
                  <SmallStat
                    icon={
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                      </svg>
                    }
                    value={insights.saves}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Right: Insights grid */}
          <div className="space-y-6">
            <div className="bg-[#111111] border border-[#1A1A1A] p-6">
              <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-6">
                Overview
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <Stat value={insights.views} label="Views" />
                <Stat value={insights.watchTime} label="Watch Time" />
                <Stat value={insights.interactions} label="Interactions" />
                <Stat value={insights.profileActivity} label="Profile Activity" />
              </div>
            </div>

            <div className="bg-[#111111] border border-[#1A1A1A] p-6">
              <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-6">
                Engagement Breakdown
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
                <Stat value={insights.likes} label="Likes" />
                <Stat value={insights.comments} label="Comments" />
                <Stat value={insights.shares} label="Shares" />
                <Stat value={insights.reposts} label="Reposts" />
                <Stat value={insights.saves} label="Saves" />
              </div>
            </div>

            <Link
              href={insights.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C8A96E] hover:text-[#dab896] transition-colors text-sm font-mono tracking-wide"
            >
              Watch on Instagram
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedReel;
