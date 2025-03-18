import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Single Review (GET)
export async function GET(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    const review = await prisma.reviewUrbanExplorer.findUnique({
      where: { id: params.review_id },
      select: { id: true, placeId: true, userId: true, rating: true, comment: true, createdAt: true },
    });

    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    return NextResponse.json(review, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch review" }, { status: 500 });
  }
}

// ✅ Update Review (PUT)
export async function PUT(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    const { rating, comment } = await req.json();

    if (!rating && !comment) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const updatedReview = await prisma.reviewUrbanExplorer.update({
      where: { id: params.review_id },
      data: { rating, comment },
      select: { id: true, placeId: true, userId: true, rating: true, comment: true },
    });

    return NextResponse.json(updatedReview, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

// ✅ Delete Review (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    await prisma.reviewUrbanExplorer.delete({ where: { id: params.review_id } });
    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
