import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Delete Review (Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.reviewMusicLover.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Review deleted by admin" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting review by admin:", error);
    return NextResponse.json({ error: "Failed to delete review" }, { status: 500 });
  }
}
