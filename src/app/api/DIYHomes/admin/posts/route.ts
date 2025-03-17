import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get all posts (Admin only)
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { user: true },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// ✅ Delete a post
export async function DELETE(req: NextRequest) {
  try {
    const { postId } = await req.json();
    if (!postId) {
      return NextResponse.json({ error: "postId is required" }, { status: 400 });
    }

    console.log(`Deleting post: ${postId}`);

    // ✅ Step 1: Check if the post exists
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
      console.error("Post not found");
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // ✅ Step 2: Delete all related data (likes, bookmarks, reports, reviews)
    await prisma.like.deleteMany({ where: { postId } });
    await prisma.bookmark.deleteMany({ where: { postId } });
    await prisma.report.deleteMany({ where: { postId } });
    await prisma.review.deleteMany({ where: { postId } });

    // ✅ Step 3: Delete the post
    await prisma.post.delete({ where: { id: postId } });

    console.log(`Post ${postId} deleted successfully`);
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
