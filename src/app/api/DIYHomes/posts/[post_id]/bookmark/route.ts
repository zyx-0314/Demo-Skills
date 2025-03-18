import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Bookmark a Post (POST)
export async function POST(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const bookmark = await prisma.bookmarkDIYHomes.create({
      data: { postId: params.post_id, userId },
    });

    return NextResponse.json(bookmark, { status: 201 });
  } catch (error) {
    console.error("Error bookmarking post:", error);
    return NextResponse.json({ error: "Failed to bookmark post" }, { status: 500 });
  }
}

// ✅ Remove Bookmark (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { post_id: string, userId: string } }) {
  try {
    await prisma.bookmarkDIYHomes.delete({ where: { postId_userId: { postId: params.post_id, userId: params.userId } } });
    return NextResponse.json({ message: "Bookmark removed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error removing bookmark:", error);
    return NextResponse.json({ error: "Failed to remove bookmark" }, { status: 500 });
  }
}
