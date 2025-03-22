import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Approve a Review (Admin Only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { adminId } = await req.json();

    // Check if admin exists
    const admin = await prisma.languageLearnerUser.findUnique({
      where: { id: adminId },
    });

    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized! Only admins can approve reviews." }, { status: 403 });
    }

    // Approve review
    const approvedReview = await prisma.languageLearnerReview.update({
      where: { id: params.id },
      data: { status: "approved" },
    });

    return NextResponse.json({ message: "Review approved successfully", review: approvedReview }, { status: 200 });
  } catch (error) {
    console.error("Error approving review:", error);
    return NextResponse.json({ error: "Failed to approve review" }, { status: 500 });
  }
}
