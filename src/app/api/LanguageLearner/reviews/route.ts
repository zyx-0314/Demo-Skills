import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Create a New Review (POST)
export async function POST(req: NextRequest) {
  try {
    const { platformId, userId, rating, comment } = await req.json();

    if (!platformId || !userId || !rating || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if user exists
    const user = await prisma.languageLearnerUser.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Check if platform exists
    const platform = await prisma.languageLearnerPlatform.findUnique({ where: { id: platformId } });
    if (!platform) {
      return NextResponse.json({ error: "Platform not found" }, { status: 404 });
    }

    const review = await prisma.languageLearnerReview.create({
      data: {
        platformId,
        userId,
        rating,
        comment,
        status: "pending", // Needs admin approval
      },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error creating review:", error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

// ✅ Get All Reviews (GET)
export async function GET() {
  try {
    const reviews = await prisma.languageLearnerReview.findMany();
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
