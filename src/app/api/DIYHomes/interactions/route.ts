import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ✅ Like/Bookmark a post
export async function POST(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const bookmark = await prisma.bookmark.create({
      data: { postId, userId },
    });

    return NextResponse.json({ message: "Post bookmarked", bookmark }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to bookmark post" }, { status: 500 });
  }
}

// ✅ Remove Bookmark
export async function DELETE(req: NextRequest) {
  try {
    const { postId, userId } = await req.json();
    if (!postId || !userId)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    await prisma.bookmark.deleteMany({
      where: { postId, userId },
    });

    return NextResponse.json({ message: "Bookmark removed" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove bookmark" }, { status: 500 });
  }
}
