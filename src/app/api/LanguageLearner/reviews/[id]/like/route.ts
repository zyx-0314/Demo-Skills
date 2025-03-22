import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Like a Review
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { userId } = await req.json();

    // Prevent duplicate likes
    const existingLike = await prisma.languageLearnerReviewLike.findFirst({
      where: { reviewId: params.id, userId },
    });

    if (existingLike) {
      return NextResponse.json({ error: "You already liked this review" }, { status: 400 });
    }

    const like = await prisma.languageLearnerReviewLike.create({
      data: { reviewId: params.id, userId },
    });

    return NextResponse.json(like, { status: 201 });
  } catch (error) {
    console.error("Error liking review:", error);
    return NextResponse.json({ error: "Failed to like review" }, { status: 500 });
  }
}
