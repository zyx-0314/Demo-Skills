import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ✅ Add a review
export async function POST(req: NextRequest) {
  try {
    const { postId, userId, rating, comment } = await req.json();
    if (!postId || !userId || !rating || !comment)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const review = await prisma.review.create({
      data: { postId, userId, rating, comment },
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add review" }, { status: 500 });
  }
}
