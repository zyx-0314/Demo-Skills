import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Report a Post or Review (POST)
export async function POST(req: NextRequest) {
  try {
    const { postId, reviewId, userId, reason } = await req.json();
    if (!userId || !reason || (!postId && !reviewId)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const report = await prisma.reportDIYHomes.create({
      data: { postId, reviewId, userId, reason },
    });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error("Error reporting content:", error);
    return NextResponse.json({ error: "Failed to report content" }, { status: 500 });
  }
}

// ✅ Fetch All Reports (GET - Admin Only)
export async function GET(req: NextRequest) {
  try {
    const reports = await prisma.reportDIYHomes.findMany();
    return NextResponse.json(reports, { status: 200 });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
  }
}