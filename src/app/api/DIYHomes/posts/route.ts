import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New DIY Post (POST)
export async function POST(req: NextRequest) {
  try {
    const { title, content, category, userId } = await req.json();
    if (!title || !content || !category || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userExists = await prisma.userDIYHomes.findUnique({ where: { id: userId } });
    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const post = await prisma.postDIYHomes.create({
      data: { title, content, category, userId },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}

// ✅ Get All DIY Posts (GET)
export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.postDIYHomes.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}


