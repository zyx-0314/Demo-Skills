import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Like a place
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.placeId || !body.userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const like = await prisma.likeUrbanExplorer.create({
      data: { placeId: body.placeId, userId: body.userId },
    });

    return NextResponse.json(like, { status: 201 });
  } catch (error) {
    console.error("Error liking place:", error);
    return NextResponse.json({ error: "Failed to like place" }, { status: 500 });
  }
}

/**
 * ✅ Unlike a place
 */
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const placeId = searchParams.get("placeId");
    const userId = searchParams.get("userId");

    if (!placeId || !userId) {
      return NextResponse.json({ error: "Missing required query parameters" }, { status: 400 });
    }

    await prisma.likeUrbanExplorer.deleteMany({
      where: { placeId, userId },
    });

    return NextResponse.json({ message: "Place unliked successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error unliking place:", error);
    return NextResponse.json({ error: "Failed to unlike place" }, { status: 500 });
  }
}

/**
 * ✅ Get leaderboard (Top-rated places)
 */
export async function GET() {
  try {
    console.log("Fetching top-rated places...");

    const leaderboard = await prisma.placeUrbanExplorer.findMany({
      orderBy: { reviews: { _count: "desc" } },
      take: 10,
    });

    return NextResponse.json(leaderboard, { status: 200 });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
