import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Validate a Review Submission (Admin Only) (POST)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Validate if the review exists
    const review = await prisma.foodieReview.findUnique({ where: { id } });
    if (!review) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    // Update validation status
    const validatedReview = await prisma.foodieReview.update({
      where: { id },
      data: { validated: true },
      select: { id: true, rating: true, comment: true, validated: true },
    });

    return NextResponse.json(validatedReview, { status: 200 });

  } catch (error) {
    console.error("Error validating review:", error);
    return NextResponse.json({ error: "Failed to validate review" }, { status: 500 });
  }
}
