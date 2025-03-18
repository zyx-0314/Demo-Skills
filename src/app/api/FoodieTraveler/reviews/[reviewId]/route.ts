import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Update a Review (PUT)
export async function PUT(req: NextRequest, { params }: { params: { reviewId: string } }) {
  try {
    const { reviewId } = params;
    const { rating, comment } = await req.json();

    if (rating == null || !comment) {
      return NextResponse.json({ error: "Rating and comment are required" }, { status: 400 });
    }

    const updatedReview = await prisma.foodieReview.update({
      where: { id: reviewId },
      data: { rating, comment },
      select: { id: true, rating: true, comment: true },
    });

    return NextResponse.json(updatedReview, { status: 200 });

  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

// ✅ Delete a Review (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { reviewId: string } }) {
  try {
    const { reviewId } = params;

    await prisma.foodieReview.delete({
      where: { id: reviewId },
    });

    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
