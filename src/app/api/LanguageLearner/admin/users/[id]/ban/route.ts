import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Ban a User (Admin Only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { adminId } = await req.json();

    // Check if admin exists and has "admin" role
    const admin = await prisma.languageLearnerUser.findUnique({
      where: { id: adminId },
    });

    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized! Only admins can ban users." }, { status: 403 });
    }

    // Check if the user exists
    const user = await prisma.languageLearnerUser.findUnique({
      where: { id: params.id },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Set user role to "banned"
    await prisma.languageLearnerUser.update({
      where: { id: params.id },
      data: { role: "banned" },
    });

    return NextResponse.json({ message: `User ${params.id} has been banned.` }, { status: 200 });
  } catch (error) {
    console.error("Error banning user:", error);
    return NextResponse.json({ error: "Failed to ban user" }, { status: 500 });
  }
}
