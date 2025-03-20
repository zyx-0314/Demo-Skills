import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Get Single Review (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const review = await prisma.languageLearnerReview.findUnique({
      where: { id: params.id },
    });

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json(review, { status: 200 });
  } catch (error) {
    console.error("Error fetching review:", error);
    return NextResponse.json({ error: "Failed to fetch review" }, { status: 500 });
  }
}

// ✅ Update Review (PUT) - Only the review author can edit
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { rating, comment, userId } = await req.json();

    // Check if review exists
    const review = await prisma.languageLearnerReview.findUnique({ where: { id: params.id } });

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    if (review.userId !== userId) {
      return NextResponse.json({ error: "Unauthorized! Only the author can edit." }, { status: 403 });
    }

    const updatedReview = await prisma.languageLearnerReview.update({
      where: { id: params.id },
      data: { rating, comment },
    });

    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}
