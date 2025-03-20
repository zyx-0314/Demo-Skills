import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Approve a Platform (Admin Only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { adminId } = await req.json();

    // Check if admin exists and is actually an admin
    const admin = await prisma.languageLearnerUser.findUnique({
      where: { id: adminId },
    });

    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized! Only admins can approve platforms." }, { status: 403 });
    }

    // Approve platform
    const approvedPlatform = await prisma.languageLearnerPlatform.update({
      where: { id: params.id },
      data: { status: "approved" },
    });

    return NextResponse.json({ message: "Platform approved successfully", platform: approvedPlatform }, { status: 200 });
  } catch (error) {
    console.error("Error approving platform:", error);
    return NextResponse.json({ error: "Failed to approve platform" }, { status: 500 });
  }
}
