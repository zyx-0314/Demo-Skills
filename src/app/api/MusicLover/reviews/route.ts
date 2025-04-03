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
    console.error("Error submitting review:", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}
