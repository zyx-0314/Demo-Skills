import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Like a post
export async function POST(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Ensure user can only like once
    const like = await prisma.like.upsert({
      where: { postId_userId: { postId, userId } },
      update: {}, // No changes needed if already exists
      create: { postId, userId },
    });

    return NextResponse.json({ message: "Post liked", like }, { status: 201 });
  } catch (error) {
    console.error("Error liking post:", error);
    return NextResponse.json({ error: "Failed to like post" }, { status: 500 });
  }
}

// ✅ Unlike a post
export async function DELETE(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.like.deleteMany({
      where: { postId, userId },
    });

    return NextResponse.json({ message: "Like removed" }, { status: 200 });
  } catch (error) {
    console.error("Error unliking post:", error);
    return NextResponse.json({ error: "Failed to unlike post" }, { status: 500 });
  }
}
