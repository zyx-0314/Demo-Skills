import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Single Place (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const place = await prisma.placeUrbanExplorer.findUnique({
      where: { id: params.id },
      select: { id: true, name: true, category: true, location: true, description: true, ownerId: true },
    });

    if (!place) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    return NextResponse.json(place, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch place" }, { status: 500 });
  }
}

// ✅ Update Place (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, category, location, description } = await req.json();

    if (!name && !category && !location && !description) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const updatedPlace = await prisma.placeUrbanExplorer.update({
      where: { id: params.id },
      data: { name, category, location, description },
      select: { id: true, name: true, category: true, location: true, description: true },
    });

    return NextResponse.json(updatedPlace, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to update place" }, { status: 500 });
  }
}

// ✅ Delete Place (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.placeUrbanExplorer.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Place deleted successfully" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to delete place" }, { status: 500 });
  }
}
