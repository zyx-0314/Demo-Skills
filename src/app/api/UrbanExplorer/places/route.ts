import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Get all places
 */
export async function GET() {
  try {
    console.log("Fetching all places...");
    const places = await prisma.placeUrbanExplorer.findMany();
    console.log("Fetched places:", places);

    return NextResponse.json(places, { status: 200 });
  } catch (error) {
    console.error("Error fetching places:", error);
    return NextResponse.json({ error: "Failed to fetch places" }, { status: 500 });
  }
}

/**
 * ✅ Create a new place
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received data:", body);

    if (!body.name || !body.category || !body.location || !body.description || !body.ownerId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const place = await prisma.placeUrbanExplorer.create({
      data: {
        name: body.name,
        category: body.category,
        location: body.location,
        description: body.description,
        ownerId: body.ownerId,
      },
    });

    return NextResponse.json(place, { status: 201 });
  } catch (error) {
    console.error("Error creating place:", error);
    return NextResponse.json({ error: "Failed to create place" }, { status: 500 });
  }
}
