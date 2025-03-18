import { NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Get all reports (Admin Only)
 */
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
