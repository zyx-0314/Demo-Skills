import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Delete Report (DELETE) (Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { report_id: string } }) {
  try {
    await prisma.reportUrbanExplorer.delete({ where: { id: params.report_id } });
    return NextResponse.json({ message: "Report deleted successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to delete report" }, { status: 500 });
  }
}
