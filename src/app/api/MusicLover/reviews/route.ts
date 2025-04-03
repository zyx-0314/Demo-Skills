import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Submit Concert Review (POST)
export async function POST(req: NextRequest) {
  try {
    const { concertId, userId, rating, comment } = await req.json();

    if (!concertId || !userId || rating == null || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const review = await prisma.reviewMusicLover.create({
      data: {
        concertId,
        userId,
        rating,
        comment,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    let errorMessage = "An error occurred while submitting the review.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
