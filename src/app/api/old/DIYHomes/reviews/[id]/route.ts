import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Update a review
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { rating, comment } = await req.json();

    if (!rating || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Rating must be between 1 and 5" }, { status: 400 });
    }

    const updatedReview = await prisma.reviewDIYHomes.update({
      where: { id: params.id },
      data: { rating, comment },
    });

    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

// ✅ Delete a review
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.reviewDIYHomes.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
