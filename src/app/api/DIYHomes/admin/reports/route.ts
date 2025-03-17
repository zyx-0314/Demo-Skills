import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get all reports (Admin only)
export async function GET() {
  try {
    const reports = await prisma.report.findMany({
      include: { user: true, post: true, review: true },
    });

    return NextResponse.json(reports, { status: 200 });
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json({ error: "Failed to fetch reports" }, { status: 500 });
  }
}

// ✅ Delete a report
export async function DELETE(req: NextRequest) {
  try {
    const { reportId } = await req.json();
    if (!reportId) {
      return NextResponse.json({ error: "reportId is required" }, { status: 400 });
    }

    console.log(`Deleting report: ${reportId}`);

    const report = await prisma.report.findUnique({ where: { id: reportId } });
    if (!report) {
      console.error("Report not found");
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    await prisma.report.delete({ where: { id: reportId } });

    console.log(`Report ${reportId} deleted successfully`);
    return NextResponse.json({ message: "Report deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting report:", error);
    return NextResponse.json({ error: "Failed to delete report" }, { status: 500 });
  }
}

