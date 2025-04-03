import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Update Review (PUT)
export async function PUT(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    const { rating, comment } = await req.json();

    if (rating == null || !comment) {
      return NextResponse.json({ error: "Missing rating or comment" }, { status: 400 });
    }

    const updated = await prisma.reviewMusicLover.update({
      where: { id: params.review_id },
      data: {
        rating,
        comment,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error("Error updating review:", error);
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 });
  }
}

// ✅ Delete Review (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { review_id: string } }) {
  try {
    await prisma.reviewMusicLover.delete({
      where: { id: params.review_id },
    });

    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
