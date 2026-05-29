'use client';

import { useInstagramData } from '@/src/hooks/useInstagramData';
import Link from 'next/link';

// Featured/pinned post with manual data
const FEATURED_POST = {
  id: 'featured-DYH4GueRFJD',
  mediaUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tanners%20projects-copy-copy%286%29.png-LydtGojZE1gEWrcpBdPa2BxmmZO1Oz.jpeg',
  thumbnailUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tanners%20projects-copy-copy%286%29.png-LydtGojZE1gEWrcpBdPa2BxmmZO1Oz.jpeg',
  permalink: 'https://www.instagram.com/reel/DYH4GueRFJD/',
  likeCount: 165,
  commentsCount: 10,
  shares: 25,
  reposts: 17,
  saves: 28,
  views: 3788,
  watchTime: '6h 6m 9s',
  interactions: 245,
  caption: "I didn't want to post today.",
  date: 'May 9',
  duration: '0:18',
};

const SkeletonCard = () => (
  <div className="flex-shrink-0 w-[200px] aspect-[9/16] bg-[#111111] border border-[#1A1A1A] rounded animate-pulse" />
);

interface PostCardProps {
  post: {
    id: string;
    mediaUrl: string;
    thumbnailUrl?: string;
    permalink: string;
    likeCount: number;
    commentsCount: number;
  };
}

const PostCard = ({ post }: PostCardProps) => (
  <Link
    href={post.permalink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-[200px] aspect-[9/16] relative group overflow-hidden border border-[#1A1A1A] bg-[#111111] hover:border-[#C8A96E] transition-colors duration-300"
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${post.thumbnailUrl || post.mediaUrl})`,
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
    </div>

    {/* Content at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-4 text-[#E8E4DF] text-sm">
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5">
          <span className="text-base">♥</span>
          <span>{post.likeCount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-base">⬤</span>
          <span>{post.commentsCount}</span>
        </div>
      </div>
    </div>
  </Link>
);

// Featured post card with extended insights
const FeaturedPostCard = () => (
  <Link
    href={FEATURED_POST.permalink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-shrink-0 w-[280px] aspect-[9/16] relative group overflow-hidden border-2 border-[#C8A96E] bg-[#111111] hover:border-[#dab896] transition-colors duration-300"
  >
    {/* Featured badge */}
    <div className="absolute top-3 left-3 z-10 bg-[#C8A96E] text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1">
      Featured
    </div>

    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${FEATURED_POST.thumbnailUrl})`,
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
    </div>

    {/* Content at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-4 text-[#E8E4DF]">
      {/* Caption */}
      <p className="text-sm font-medium mb-1">{FEATURED_POST.caption}</p>
      <p className="text-[10px] text-[#999] mb-3">{FEATURED_POST.date} · {FEATURED_POST.duration}</p>
      
      {/* Engagement stats */}
      <div className="grid grid-cols-5 gap-1 text-center text-[10px] mb-3">
        <div>
          <span className="block text-sm font-semibold">{FEATURED_POST.likeCount}</span>
          <span className="text-[#999]">likes</span>
        </div>
        <div>
          <span className="block text-sm font-semibold">{FEATURED_POST.commentsCount}</span>
          <span className="text-[#999]">comments</span>
        </div>
        <div>
          <span className="block text-sm font-semibold">{FEATURED_POST.shares}</span>
          <span className="text-[#999]">shares</span>
        </div>
        <div>
          <span className="block text-sm font-semibold">{FEATURED_POST.reposts}</span>
          <span className="text-[#999]">reposts</span>
        </div>
        <div>
          <span className="block text-sm font-semibold">{FEATURED_POST.saves}</span>
          <span className="text-[#999]">saves</span>
        </div>
      </div>

      {/* Views */}
      <div className="flex items-center justify-between text-[11px] border-t border-[#333] pt-2">
        <span className="text-[#C8A96E] font-semibold">{FEATURED_POST.views.toLocaleString()} views</span>
        <span className="text-[#999]">{FEATURED_POST.interactions} interactions</span>
      </div>
    </div>
  </Link>
);

export function RecentPosts() {
  const { data, loading, error } = useInstagramData();

  const posts = data?.posts || [];
  const isReady = !loading && posts.length > 0;
  const showError = !loading && (error || posts.length === 0);

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Recent Content
          </p>
          <h2
            className="text-[46px] leading-tight text-[#E8E4DF] font-bold"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            What I've been posting.
          </h2>
        </div>

        {/* Scrollable posts */}
        <style>{`
          .instagram-scroll::-webkit-scrollbar {
            height: 6px;
          }
          .instagram-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          .instagram-scroll::-webkit-scrollbar-thumb {
            background: #C8A96E;
            border-radius: 3px;
          }
          .instagram-scroll::-webkit-scrollbar-thumb:hover {
            background: #dab896;
          }
          .instagram-scroll {
            scrollbar-color: #C8A96E transparent;
            scrollbar-width: thin;
          }
        `}</style>

        <div className="overflow-x-auto pb-4 scroll-smooth instagram-scroll">
          <div className="flex gap-4 min-w-max">
            {loading ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
            ) : isReady ? (
              <>
                <FeaturedPostCard />
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </>
            ) : (
              <>
                <FeaturedPostCard />
                {Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
            )}
          </div>
        </div>

        {/* Error message */}
        {showError && (
          <div className="mt-4 text-sm text-[#999]">
            {error || 'No posts available yet. Check back soon!'}
          </div>
        )}

        {/* Footer text */}
        <p className="mt-8 text-xs text-[#555]">
          Auto-updated from @tanner.mccartney99
        </p>
      </div>
    </section>
  );
}
export default RecentPosts;
