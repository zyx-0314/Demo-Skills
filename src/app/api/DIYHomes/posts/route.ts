import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get all posts
export async function GET() {
  try {
    console.log("Fetching all posts..."); // Debugging log
    const posts = await prisma.postDIYHomes.findMany({
      include: { user: true }, // ✅ Ensure this relation exists
    });
    console.log("Fetched posts:", posts); // Debugging log

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
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

    const post = await prisma.postDIYHomes.create({
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
