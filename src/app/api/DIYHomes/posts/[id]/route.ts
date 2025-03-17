import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get post by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`Fetching post with ID: ${params.id}`); // Debugging log
    const post = await prisma.post.findUnique({
      where: { id: params.id },
      include: { user: true },
    });
    console.log("Fetched post:", post); // Debugging log

    if (!post) return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

// ✅ Update post
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { title, content, category } = await req.json();
    const updatedPost = await prisma.post.update({
      where: { id: params.id },
      data: { title, content, category },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

// ✅ Delete post
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.post.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
