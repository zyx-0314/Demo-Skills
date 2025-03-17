import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Bookmark a post
export async function POST(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Ensure user can only bookmark once
    const bookmark = await prisma.bookmark.upsert({
      where: { postId_userId: { postId, userId } },
      update: {}, // No changes needed if already exists
      create: { postId, userId },
    });

    return NextResponse.json({ message: "Post bookmarked", bookmark }, { status: 201 });
  } catch (error) {
    console.error("Error bookmarking post:", error);
    return NextResponse.json({ error: "Failed to bookmark post" }, { status: 500 });
  }
}

// ✅ Unbookmark a post
export async function DELETE(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.bookmark.deleteMany({
      where: { postId, userId },
    });

    return NextResponse.json({ message: "Bookmark removed" }, { status: 200 });
  } catch (error) {
    console.error("Error unbookmarking post:", error);
    return NextResponse.json({ error: "Failed to unbookmark post" }, { status: 500 });
  }
}
