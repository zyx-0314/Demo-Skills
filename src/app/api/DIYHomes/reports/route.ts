import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Report a post
export async function POST(req: NextRequest) {
  try {
    const { postId, reviewId, userId, reason } = await req.json();
    if (!userId || !reason || (!postId && !reviewId)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log(`Creating report for postId: ${postId}, reviewId: ${reviewId}`);

    const report = await prisma.report.create({
      data: { postId, reviewId, userId, reason },
    });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error("Error reporting post/review:", error);
    return NextResponse.json({ error: "Failed to submit report" }, { status: 500 });
  }
}
