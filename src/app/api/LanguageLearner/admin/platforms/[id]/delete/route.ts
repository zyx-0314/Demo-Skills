import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Delete a Platform (Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { adminId } = await req.json();

    // Check if admin exists
    const admin = await prisma.languageLearnerUser.findUnique({
      where: { id: adminId },
    });

    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized! Only admins can delete platforms." }, { status: 403 });
    }

    // Delete platform
    await prisma.languageLearnerPlatform.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Platform deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting platform:", error);
    return NextResponse.json({ error: "Failed to delete platform" }, { status: 500 });
  }
}
