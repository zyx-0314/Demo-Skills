import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get all users (Admin only)
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, name: true, group: true, createdAt: true },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// ✅ Ban a user
export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "userId is required" }, { status: 400 });
    }

    console.log(`Banning user: ${userId}`);

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      console.error("User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // ✅ Step 1: Delete all bookmarks & likes from the user
    await prisma.like.deleteMany({ where: { userId } });
    await prisma.bookmark.deleteMany({ where: { userId } });

    // ✅ Step 2: Delete all user's posts, which cascade deletes related reviews & likes
    await prisma.post.deleteMany({ where: { userId } });

    // ✅ Step 3: Delete all reports associated with the user
    await prisma.report.deleteMany({ where: { userId } });

    // ✅ Step 4: Finally delete the user
    await prisma.user.delete({ where: { id: userId } });

    console.log(`User ${userId} banned successfully`);
    return NextResponse.json({ message: "User banned successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error banning user:", error);
    return NextResponse.json({ error: "Failed to ban user" }, { status: 500 });
  }
}


