import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Submit a review
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Submitting review:", body);

    // ✅ Validate request body
    if (!body.foodId || !body.userId || !body.rating || !body.comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Ensure the food item exists
    const food = await prisma.foodieFood.findUnique({
      where: { id: body.foodId },
    });

    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    // ✅ Create the review entry
    const review = await prisma.foodieReview.create({
      data: {
        foodId: body.foodId,
        userId: body.userId,
        rating: body.rating,
        comment: body.comment,
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}
