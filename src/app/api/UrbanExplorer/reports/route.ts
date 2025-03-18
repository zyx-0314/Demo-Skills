import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Report a Place
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.placeId || !body.userId || !body.reason) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const report = await prisma.reportUrbanExplorer.create({
      data: {
        placeId: body.placeId,
        userId: body.userId,
        reason: body.reason,
      },
    });

    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error("Error creating report:", error);
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 });
  }
}
