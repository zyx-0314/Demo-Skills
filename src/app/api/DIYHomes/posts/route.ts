import { NextRequest, NextResponse } from 'next/server';

const logTag = 'DIYHomes Posts API: ';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  try {
    // TODO: fetch data here from database

  } catch (error) {
    let message = 'Unknown Error Occurred';
    if (error instanceof Error) {
      message = `message: ${error.message}, cause: ${error.cause || "unknown"}`;
    }

    return NextResponse.json({
      message: `${logTag} ${message}`,
    }, {
      status: 400
    })
  }

}

export async function POST(req: NextRequest) {
  const body = req.body;

  try {
    // TODO: create post in database

  } catch (error) {
    let message = 'Unknown Error Occurred';
    if (error instanceof Error) {
      message = `message: ${error.message}, cause: ${error.cause || "unknown"}`;
    }

    return NextResponse.json({
      message: `${logTag} ${message}`,
    }, {
      status: 400
    })
  }
}