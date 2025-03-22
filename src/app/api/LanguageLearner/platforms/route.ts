import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Create a New Platform (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, website, languagesOffered, description, ownerId } = await req.json();

    if (!name || !website || !languagesOffered || !description || !ownerId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if owner exists
    const owner = await prisma.languageLearnerUser.findUnique({
      where: { id: ownerId },
    });

    if (!owner || (owner.role !== "learner" && owner.role !== "owner")) {
      return NextResponse.json({ error: "Invalid owner. Must be a learner or owner." }, { status: 403 });
    }

    const platform = await prisma.languageLearnerPlatform.create({
      data: {
        name,
        website,
        languagesOffered,
        description,
        ownerId,
        status: "pending",
      },
    });

    return NextResponse.json(platform, { status: 201 });
  } catch (error) {
    console.error("Error creating platform:", error);
    return NextResponse.json({ error: "Failed to create platform" }, { status: 500 });
  }
}

// ✅ Fetch All Platforms (GET)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const orderBy = searchParams.get("orderBy") || "name"; // Default: Sort by name
    const sortOrder = searchParams.get("sortOrder") === "desc" ? "desc" : "asc"; // Default: Ascending

    const platforms = await prisma.languageLearnerPlatform.findMany({
      orderBy: { [orderBy]: sortOrder },
    });

    return NextResponse.json(platforms, { status: 200 });
  } catch (error) {
    console.error("Error fetching platforms:", error);
    return NextResponse.json({ error: "Failed to fetch platforms" }, { status: 500 });
  }
}
