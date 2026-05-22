import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET(request: NextRequest) {
  try {
    const data = await kv.get('instagram-data');

    if (!data) {
      return NextResponse.json(
        { error: 'No data available' },
        { status: 404 }
      );
    }

    // Parse the stringified data from KV
    const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

    return NextResponse.json(parsedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('Error reading Instagram data:', error);
    return NextResponse.json(
      { error: 'Failed to read data' },
      { status: 500 }
    );
  }
}
