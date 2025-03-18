import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Submit a Review & Rating (POST)
export async function POST(req: NextRequest) {
  try {
    const { foodId, userId, rating, comment } = await req.json();

    // Validate required fields
    if (!foodId || !userId || rating == null || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate if the food item exists
    const food = await prisma.foodieFood.findUnique({ where: { id: foodId } });
    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    // Validate if the user exists
    const user = await prisma.userFoodie.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new review
    const review = await prisma.foodieReview.create({
      data: { foodId, userId, rating, comment },
    });

    return NextResponse.json(review, { status: 201 });

  } catch (error) {
    console.error("Error submitting review:", error);
    return NextResponse.json({ error: "Failed to submit review" }, { status: 500 });
  }
}

// ✅ Get Reviews for a Food Item (GET)
export async function GET(req: NextRequest) {
  try {
    const foodId = req.nextUrl.searchParams.get("foodId");

    if (!foodId) {
      return NextResponse.json({ error: "Food ID is required" }, { status: 400 });
    }

    const reviews = await prisma.foodieReview.findMany({
      where: { foodId },
      select: { id: true, foodId: true, userId: true, rating: true, comment: true, createdAt: true },
    });

    return NextResponse.json(reviews, { status: 200 });

  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
