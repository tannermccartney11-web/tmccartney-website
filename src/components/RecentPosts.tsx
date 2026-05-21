'use client';

import { useInstagramData } from '@/hooks/useInstagramData';
import Link from 'next/link';

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
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </>
            ) : (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
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
