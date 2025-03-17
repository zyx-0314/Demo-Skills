import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ✅ Get all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { user: true },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

// ✅ Create a new post
export async function POST(req: NextRequest) {
  try {
    const { title, content, category, userId } = await req.json();
    if (!title || !content || !category || !userId)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const post = await prisma.post.create({
      data: { title, content, category, userId },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
