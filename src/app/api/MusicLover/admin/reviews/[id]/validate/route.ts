import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Validate Review (Admin Only)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validatedReview = await prisma.reviewMusicLover.update({
      where: { id: params.id },
      data: { validated: true },
    });

    return NextResponse.json({ message: "Review validated", review: validatedReview }, { status: 200 });
  } catch (error) {
    console.error("Error validating review:", error);
    return NextResponse.json({ error: "Failed to validate review" }, { status: 500 });
  }
}
