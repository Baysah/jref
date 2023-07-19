import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({
    posts: [
      {
        id: 1,
        title: 'Hello World',
      },
      {
        id: 2,
        title: 'Hello World 2',
      },
      {
        id: 3,
        title: 'Hello World 3',
      }
    ]
  });
}
