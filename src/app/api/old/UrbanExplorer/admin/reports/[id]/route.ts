import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Delete a Report (Admin Only)
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`Deleting report ID: ${params.id}`);

    await prisma.reportUrbanExplorer.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Report deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting report:", error);
    return NextResponse.json({ error: "Failed to delete report" }, { status: 500 });
  }
}
