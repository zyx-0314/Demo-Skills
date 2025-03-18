import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Add a Review (POST)
export async function POST(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    const { userId, rating, comment } = await req.json();
    if (!userId || !rating || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const postExists = await prisma.postDIYHomes.findUnique({ where: { id: params.post_id } });
    if (!postExists) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const review = await prisma.reviewDIYHomes.create({
      data: { postId: params.post_id, userId, rating, comment },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
  }
}

// ✅ Get All Reviews (GET)
export async function GET(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    const reviews = await prisma.reviewDIYHomes.findMany({ where: { postId: params.post_id } });
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

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