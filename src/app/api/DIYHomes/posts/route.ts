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
  console.log("Start");

  try {
    const body = await req.json();
    console.log(body.title);
    if (!body.title || !body.content || !body.category || !body.userId)
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    const post = await prisma.post.create({
      data: { title: body.title, content: body.content, category: body.category, userId: body.userId },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
