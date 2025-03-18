import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Like a Place (POST)
export async function POST(req: NextRequest, { params }: { params: { place_id: string } }) {
  try {
    const { userId } = await req.json();
    const placeId = params.place_id;

    if (!placeId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the user already liked the place
    const existingLike = await prisma.likeUrbanExplorer.findUnique({
      where: { placeId_userId: { placeId, userId } },
    });

    if (existingLike) {
      return NextResponse.json({ error: "User already liked this place" }, { status: 409 });
    }

    const like = await prisma.likeUrbanExplorer.create({
      data: { placeId, userId },
    });

    return NextResponse.json(like, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to like place" }, { status: 500 });
  }
}

// ✅ Unlike a Place (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { place_id: string } }) {
  try {
    const { userId } = await req.json();
    const placeId = params.place_id;

    if (!placeId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the like exists
    const existingLike = await prisma.likeUrbanExplorer.findUnique({
      where: { placeId_userId: { placeId, userId } },
    });

    if (!existingLike) {
      return NextResponse.json({ error: "Like not found" }, { status: 404 });
    }

    await prisma.likeUrbanExplorer.delete({
      where: { placeId_userId: { placeId, userId } },
    });

    return NextResponse.json({ message: "Like removed successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to unlike place" }, { status: 500 });
  }
}
