import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get a Single DIY Post (GET)
export async function GET(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    const post = await prisma.postDIYHomes.findUnique({ where: { id: params.post_id } });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

// ✅ Update a DIY Post (PUT)
export async function PUT(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    const { title, content } = await req.json();
    if (!title && !content) {
      return NextResponse.json({ error: "At least one field (title or content) must be provided" }, { status: 400 });
    }

    const post = await prisma.postDIYHomes.update({ where: { id: params.post_id }, data: { title, content } });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// ✅ Delete a DIY Post (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    await prisma.postDIYHomes.delete({ where: { id: params.post_id } });
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}