'use client';

import { useEffect, useState } from 'react';

export interface PostInsights {
  impressions: number;
  reach: number;
  saves: number;
  shares: number;
  videoViews: number;
}

export interface InstagramPost {
  id: string;
  caption: string;
  mediaType: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  timestamp: string;
  likeCount: number;
  commentsCount: number;
  insights: PostInsights;
}

export interface MonthlyInsights {
  totalReach: number;
  totalImpressions: number;
  avgLikes: number;
  avgComments: number;
  avgSaves: number;
  avgShares: number;
  avgViews: number;
  profileViews: number;
  websiteClicks: number;
}

export interface InstagramDataResponse {
  posts: InstagramPost[];
  monthlyInsights: MonthlyInsights;
  account: {
    followersCount: number;
    mediaCount: number;
  };
  lastUpdated: string;
}

export interface UseInstagramDataReturn {
  data: InstagramDataResponse | null;
  loading: boolean;
  error: string | null;
}

export function useInstagramData(): UseInstagramDataReturn {
  const [data, setData] = useState<InstagramDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/instagram-data');

        if (!response.ok) {
          if (response.status === 404) {
            setError('No Instagram data available yet');
          } else {
            throw new Error('Failed to fetch Instagram data');
          }
          setData(null);
          return;
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
