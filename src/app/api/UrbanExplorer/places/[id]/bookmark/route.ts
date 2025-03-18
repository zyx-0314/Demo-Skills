import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Bookmark a Place (POST)
export async function POST(req: NextRequest, { params }: { params: { place_id: string } }) {
  try {
    const { userId } = await req.json();
    const placeId = params.place_id;

    if (!placeId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the user already bookmarked the place
    const existingBookmark = await prisma.bookmarkUrbanExplorer.findUnique({
      where: { placeId_userId: { placeId, userId } },
    });

    if (existingBookmark) {
      return NextResponse.json({ error: "Place already bookmarked by user" }, { status: 409 });
    }

    const bookmark = await prisma.bookmarkUrbanExplorer.create({
      data: { placeId, userId },
    });

    return NextResponse.json(bookmark, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to bookmark place" }, { status: 500 });
  }
}

// ✅ Remove Bookmark (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { place_id: string } }) {
  try {
    const { userId } = await req.json();
    const placeId = params.place_id;

    if (!placeId || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if the bookmark exists
    const existingBookmark = await prisma.bookmarkUrbanExplorer.findUnique({
      where: { placeId_userId: { placeId, userId } },
    });

    if (!existingBookmark) {
      return NextResponse.json({ error: "Bookmark not found" }, { status: 404 });
    }

    await prisma.bookmarkUrbanExplorer.delete({
      where: { placeId_userId: { placeId, userId } },
    });

    return NextResponse.json({ message: "Bookmark removed successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to remove bookmark" }, { status: 500 });
  }
}
