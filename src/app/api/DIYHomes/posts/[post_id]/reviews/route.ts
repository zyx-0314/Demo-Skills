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