'use client';

import { useInstagramData } from '@/hooks/useInstagramData';

interface MetricCardProps {
  value: number;
  label: string;
}

const MetricCard = ({ value, label }: MetricCardProps) => (
  <div className="bg-[#111111] border border-[#1A1A1A] p-6 flex flex-col items-center justify-center min-h-[200px]">
    <div
      className="text-[38px] text-[#C8A96E] font-bold mb-3"
      style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
    >
      {value.toLocaleString('en-US')}
    </div>
    <div className="font-mono text-[9px] tracking-[0.35em] text-[#555] uppercase">
      {label}
    </div>
  </div>
);

const SkeletonCard = () => (
  <div className="bg-[#111111] border border-[#1A1A1A] p-6 min-h-[200px] animate-pulse rounded" />
);

export function MonthlyInsights() {
  const { data, loading } = useInstagramData();

  const metrics = data?.monthlyInsights;
  const lastUpdated = data?.lastUpdated;

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const cards = metrics
    ? [
        { value: Math.round(metrics.totalReach), label: 'Total Reach' },
        { value: Math.round(metrics.avgViews), label: 'Avg. Views' },
        { value: Math.round(metrics.avgLikes), label: 'Avg. Likes' },
        { value: Math.round(metrics.avgComments), label: 'Avg. Comments' },
        { value: Math.round(metrics.avgSaves), label: 'Avg. Saves' },
        { value: Math.round(metrics.avgShares), label: 'Avg. Shares' },
      ]
    : [];

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.35em] text-[#C8A96E] uppercase mb-3">
            Last 30 Days
          </p>
          <h2
            className="text-[46px] leading-tight text-[#E8E4DF] font-bold"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Monthly performance snapshot.
          </h2>
        </div>

        {/* Metrics Grid - 2 columns mobile, 3 columns tablet, 6 columns desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {loading ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </>
          ) : (
            <>
              {cards.map((card) => (
                <MetricCard key={card.label} value={card.value} label={card.label} />
              ))}
            </>
          )}
        </div>

        {/* Updated text */}
        {lastUpdated && !loading && (
          <p className="text-xs text-[#555]">
            Updated {formatDate(lastUpdated)}
          </p>
        )}
      </div>
    </section>
  );
}
export default RecentPosts;