import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create Place (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, category, location, description, ownerId } = await req.json();

    if (!name || !category || !location || !description || !ownerId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const place = await prisma.placeUrbanExplorer.create({
      data: { name, category, location, description, ownerId },
    });

    return NextResponse.json(place, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to create place" }, { status: 500 });
  }
}

// ✅ Get All Places (GET)
export async function GET(req: NextRequest) {
  try {
    const places = await prisma.placeUrbanExplorer.findMany({
      select: { id: true, name: true, category: true, location: true, description: true, ownerId: true },
    });

    return NextResponse.json(places, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch places" }, { status: 500 });
  }
}
