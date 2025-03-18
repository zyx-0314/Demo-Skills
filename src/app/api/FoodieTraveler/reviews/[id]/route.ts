import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Update a review
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Updating review:", params.id, body);

    if (!body.rating || !body.comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedReview = await prisma.foodieReview.update({
      where: { id: params.id },
      data: {
        rating: body.rating,
        comment: body.comment,
      },
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
    console.log("Deleting review:", params.id);

    await prisma.foodieReview.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Review deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
