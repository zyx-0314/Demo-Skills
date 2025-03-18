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
    let message = "Failed to create report";
    if (error instanceof Error) {
      message = error.message;
    }
    console.error("Error creating report:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    console.log("Fetching all reports...");
    const reports = await prisma.reportUrbanExplorer.findMany();
    return NextResponse.json(reports, { status: 200 });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
  }
}