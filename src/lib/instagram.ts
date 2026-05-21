// Types for Instagram Graph API responses
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
}

export interface PostInsights {
  impressions: number;
  reach: number;
  saves: number;
  shares: number;
  videoViews: number;
}

export interface AccountInsights {
  totalImpressions: number;
  totalReach: number;
  profileViews: number;
  websiteClicks: number;
}

export interface FollowerInfo {
  followersCount: number;
  mediaCount: number;
}

// Helper to get environment variables
function getEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

/**
 * Fetch recent posts from Instagram business account
 * @param limit Number of posts to fetch (default: 6)
 * @returns Array of posts or null if request fails
 */
export async function fetchRecentPosts(limit = 6): Promise<InstagramPost[] | null> {
  try {
    const token = getEnvVar('INSTAGRAM_ACCESS_TOKEN');
    const accountId = getEnvVar('INSTAGRAM_ACCOUNT_ID');

    const url = `https://graph.facebook.com/v21.0/${accountId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&limit=${limit}&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    return data.data.map((post: any) => ({
      id: post.id,
      caption: post.caption || '',
      mediaType: post.media_type,
      mediaUrl: post.media_url,
      thumbnailUrl: post.thumbnail_url,
      permalink: post.permalink,
      timestamp: post.timestamp,
      likeCount: post.like_count || 0,
      commentsCount: post.comments_count || 0,
    }));
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return null;
  }
}

/**
 * Fetch insights for a specific post
 * @param mediaId Instagram media ID
 * @returns Post insights object with metrics (returns 0 for unavailable metrics)
 */
export async function fetchPostInsights(mediaId: string): Promise<PostInsights | null> {
  try {
    const token = getEnvVar('INSTAGRAM_ACCESS_TOKEN');

    const url = `https://graph.facebook.com/v21.0/${mediaId}/insights?metric=impressions,reach,saved,shares,video_views&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    // Create a map of metrics for easier access
    const metricsMap: Record<string, number> = {};
    if (data.data && Array.isArray(data.data)) {
      data.data.forEach((metric: any) => {
        metricsMap[metric.name] = metric.value || 0;
      });
    }

    return {
      impressions: metricsMap.impressions || 0,
      reach: metricsMap.reach || 0,
      saves: metricsMap.saved || 0,
      shares: metricsMap.shares || 0,
      videoViews: metricsMap.video_views || 0,
    };
  } catch (error) {
    console.error(`Error fetching insights for post ${mediaId}:`, error);
    return {
      impressions: 0,
      reach: 0,
      saves: 0,
      shares: 0,
      videoViews: 0,
    };
  }
}

/**
 * Fetch account-level insights
 * @param period Time period for metrics (default: 'day')
 * @param since Unix timestamp for start date (default: 30 days ago)
 * @param until Unix timestamp for end date (default: now)
 * @returns Account insights with summed totals or null if request fails
 */
export async function fetchAccountInsights(
  period = 'day',
  since?: number,
  until?: number
): Promise<AccountInsights | null> {
  try {
    const token = getEnvVar('INSTAGRAM_ACCESS_TOKEN');
    const accountId = getEnvVar('INSTAGRAM_ACCOUNT_ID');

    // Set default since/until if not provided
    const now = Math.floor(Date.now() / 1000);
    const sinceTimestamp = since || now - 30 * 24 * 60 * 60; // 30 days ago
    const untilTimestamp = until || now;

    const url = `https://graph.facebook.com/v21.0/${accountId}/insights?metric=impressions,reach,profile_views,website_clicks&period=${period}&since=${sinceTimestamp}&until=${untilTimestamp}&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    // Sum the totals from the response
    const totals = {
      totalImpressions: 0,
      totalReach: 0,
      profileViews: 0,
      websiteClicks: 0,
    };

    if (data.data && Array.isArray(data.data)) {
      data.data.forEach((metric: any) => {
        switch (metric.name) {
          case 'impressions':
            totals.totalImpressions = metric.total || 0;
            break;
          case 'reach':
            totals.totalReach = metric.total || 0;
            break;
          case 'profile_views':
            totals.profileViews = metric.total || 0;
            break;
          case 'website_clicks':
            totals.websiteClicks = metric.total || 0;
            break;
        }
      });
    }

    return totals;
  } catch (error) {
    console.error('Error fetching account insights:', error);
    return null;
  }
}

/**
 * Fetch follower and media count for the account
 * @returns Follower info or null if request fails
 */
export async function fetchFollowerCount(): Promise<FollowerInfo | null> {
  try {
    const token = getEnvVar('INSTAGRAM_ACCESS_TOKEN');
    const accountId = getEnvVar('INSTAGRAM_ACCOUNT_ID');

    const url = `https://graph.facebook.com/v21.0/${accountId}?fields=followers_count,media_count&access_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    return {
      followersCount: data.followers_count || 0,
      mediaCount: data.media_count || 0,
    };
  } catch (error) {
    console.error('Error fetching follower count:', error);
    return null;
  }
}

/**
 * Refresh the long-lived access token before expiration
 * Requires META_APP_ID and META_APP_SECRET environment variables
 * @returns New access token string or null if refresh fails
 */
export async function refreshLongLivedToken(): Promise<string | null> {
  try {
    const token = getEnvVar('INSTAGRAM_ACCESS_TOKEN');
    const appId = getEnvVar('META_APP_ID');
    const appSecret = getEnvVar('META_APP_SECRET');

    const url = `https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${token}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }

    const data = await response.json();

    return data.access_token || null;
  } catch (error) {
    console.error('Error refreshing long-lived token:', error);
    return null;
  }
}
