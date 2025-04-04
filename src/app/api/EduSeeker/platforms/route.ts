import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create or Get All Platforms (POST, GET)
export async function POST(req: NextRequest) {
  try {
    const { name, description, category, url, submittedBy } = await req.json();

    if (!name || !description || !category || !url || !submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const platform = await prisma.platformEduSeeker.create({
      data: { name, description, category, url, submittedBy },
    });

    return NextResponse.json(platform, { status: 201 });
  } catch (error) {
    let errorMessage = "Failed to create platform";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const platforms = await prisma.platformEduSeeker.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        validated: true,
        createdAt: true,
      },
    });

    return NextResponse.json(platforms, { status: 200 });
  } catch (error) {
    console.error("Error fetching platforms:", error);
    return NextResponse.json({ error: "Failed to fetch platforms" }, { status: 500 });
  }
}
