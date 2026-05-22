import { NextRequest, NextResponse } from 'next/server';
import { refreshLongLivedToken } from '@/lib/instagram';

export async function GET(request: NextRequest) {
  try {
    // Step 1: Verify authorization header
    const authHeader = request.headers.get('authorization');
    const expectedToken = `Bearer ${process.env.CRON_SECRET}`;

    if (authHeader !== expectedToken) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check required Vercel API configuration
    const vercelApiToken = process.env.VERCEL_API_TOKEN;
    const vercelProjectId = process.env.VERCEL_PROJECT_ID;

    if (!vercelApiToken || !vercelProjectId) {
      return NextResponse.json(
        { success: false, error: 'Missing Vercel API configuration' },
        { status: 500 }
      );
    }

    // Step 2: Refresh the Instagram token
    const newToken = await refreshLongLivedToken();

    if (!newToken) {
      return NextResponse.json(
        { success: false, error: 'Failed to refresh Instagram token' },
        { status: 500 }
      );
    }

    // Step 3: Update Vercel environment variable
    // First, list env vars to find the ID of INSTAGRAM_ACCESS_TOKEN
    const listResponse = await fetch(
      `https://api.vercel.com/v1/projects/${vercelProjectId}/env`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${vercelApiToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!listResponse.ok) {
      throw new Error(`Failed to list env vars: ${listResponse.statusText}`);
    }

    const envData = await listResponse.json();
    const instagramTokenVar = envData.envs?.find(
      (env: any) => env.key === 'INSTAGRAM_ACCESS_TOKEN'
    );

    if (!instagramTokenVar) {
      return NextResponse.json(
        { success: false, error: 'INSTAGRAM_ACCESS_TOKEN env var not found in Vercel' },
        { status: 500 }
      );
    }

    // Update the env var with the new token
    const updateResponse = await fetch(
      `https://api.vercel.com/v1/projects/${vercelProjectId}/env/${instagramTokenVar.id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${vercelApiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: newToken,
        }),
      }
    );

    if (!updateResponse.ok) {
      const errorData = await updateResponse.text();
      throw new Error(`Failed to update env var: ${updateResponse.statusText} - ${errorData}`);
    }

    console.log('Instagram token refreshed and updated successfully');

    return NextResponse.json({
      success: true,
      message: 'Token refreshed and updated successfully',
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
