import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Update a Review (PUT)
export async function PUT(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    const { rating, comment } = await req.json();
    if (!rating && !comment) {
      return NextResponse.json({ error: "At least one field (rating or comment) must be provided" }, { status: 400 });
    }

    const review = await prisma.reviewDIYHomes.update({ where: { id: params.review_id }, data: { rating, comment } });
    return NextResponse.json(review, { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

// ✅ Delete a Review (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    await prisma.reviewDIYHomes.delete({ where: { id: params.review_id } });
    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}