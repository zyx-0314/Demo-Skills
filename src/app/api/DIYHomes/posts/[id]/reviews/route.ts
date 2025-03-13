import { NextRequest, NextResponse } from 'next/server';

const logTag = 'DIYHomes Specific Posts API: ';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get('limit');
  const page = searchParams.get('page');

  try {
    // TODO: fetch specific data list of review here from database

    return NextResponse.json({
      data: "Response Data Here",
    }, {
      status: 200
    });

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

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const body = req.body;

  try {
    // TODO: create new post review in database 

    return NextResponse.json({
      data: "Response Data Here",
    }, {
      status: 200
    });
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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const body = req.body;

  try {
    // TODO: update specific post review in database

    return NextResponse.json({
      data: "Response Data Here",
    }, {
      status: 200
    });
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    // TODO: delete specific post review in database

    return NextResponse.json({
      data: "Response Data Here",
    }, {
      status: 200
    });
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
