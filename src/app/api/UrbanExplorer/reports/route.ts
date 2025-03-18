import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Report a Place or Review (POST)
export async function POST(req: NextRequest) {
  try {
    const { placeId, reviewId, userId, reason } = await req.json();

    if ((!placeId && !reviewId) || !userId || !reason) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const report = await prisma.reportUrbanExplorer.create({
      data: { placeId, reviewId, userId, reason },
    });

    return NextResponse.json(report, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 });
  }
}

// ✅ Get All Reports (GET) (Admin Only)
export async function GET(req: NextRequest) {
  try {
    const reports = await prisma.reportUrbanExplorer.findMany({
      select: { id: true, placeId: true, reviewId: true, userId: true, reason: true, createdAt: true },
    });

    return NextResponse.json(reports, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
  }
}
