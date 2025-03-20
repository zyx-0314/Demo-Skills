import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch All Posts (GET - Admin Only)
export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.postDIYHomes.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    let errorMessage = "Failed to fetch posts";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
