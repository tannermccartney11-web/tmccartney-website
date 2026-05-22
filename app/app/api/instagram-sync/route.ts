import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';
import {
  fetchRecentPosts,
  fetchPostInsights,
  fetchAccountInsights,
  fetchFollowerCount,
} from '@/lib/instagram';

export async function GET(request: NextRequest) {
  // Verify authorization header
  const authHeader = request.headers.get('authorization');
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

  if (authHeader !== expectedAuth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Fetch recent posts
    const posts = await fetchRecentPosts(6);
if (!posts) {
  return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
}
    // Enrich posts with insights
    const enrichedPosts = await Promise.all(
      posts.map(async (post) => {
        const insights = await fetchPostInsights(post.id);
        return { ...post, ...insights };
      })
    );

    // Calculate 30-day averages
    const totalPosts = enrichedPosts.length;
    const monthlyInsights = {
      totalReach: enrichedPosts.reduce((sum, p) => sum + (p.reach || 0), 0),
      totalImpressions: enrichedPosts.reduce((sum, p) => sum + (p.impressions || 0), 0),
      avgLikes: Math.round(enrichedPosts.reduce((sum, p) => sum + (p.likeCount || 0), 0) / totalPosts),
      avgComments: Math.round(enrichedPosts.reduce((sum, p) => sum + (p.commentsCount || 0), 0) / totalPosts),
      avgSaves: Math.round(enrichedPosts.reduce((sum, p) => sum + (p.saves || 0), 0) / totalPosts),
      avgShares: Math.round(enrichedPosts.reduce((sum, p) => sum + (p.shares || 0), 0) / totalPosts),
      avgViews: Math.round(
        enrichedPosts.reduce((sum, p) => sum + (p.videoViews || 0), 0) /
        enrichedPosts.filter(p => p.mediaType === 'VIDEO').length || 1
      ),
      profileViews: 0,
      websiteClicks: 0,
    };

    // Fetch account insights
    const accountInsights = await fetchAccountInsights();
if (!accountInsights) {
  return NextResponse.json({ error: 'Failed to fetch account insights' }, { status: 500 });
}
    monthlyInsights.profileViews = accountInsights.profileViews || 0;
    monthlyInsights.websiteClicks = accountInsights.websiteClicks || 0;

    // Fetch follower count
    const account = await fetchFollowerCount();

    // Build data object
    const data = {
      posts: enrichedPosts,
      monthlyInsights,
      account,
      lastUpdated: new Date().toISOString(),
    };

    // Store in KV
    await kv.set('instagram-data', JSON.stringify(data));
    await kv.expire('instagram-data', 172800); // 48 hours

    return NextResponse.json({
      success: true,
      postsCount: enrichedPosts.length,
      lastUpdated: data.lastUpdated,
    });
  } catch (error) {
    console.error('Instagram sync error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
