import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Get place by ID
 */
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`Fetching place with ID: ${params.id}`);
    const place = await prisma.placeUrbanExplorer.findUnique({
      where: { id: params.id },
    });

    if (!place) return NextResponse.json({ error: "Place not found" }, { status: 404 });

    return NextResponse.json(place, { status: 200 });
  } catch (error) {
    console.error("Error fetching place:", error);
    return NextResponse.json({ error: "Failed to fetch place" }, { status: 500 });
  }
}

/**
 * ✅ Update place by ID
 */
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Updating place:", body);

    const updatedPlace = await prisma.placeUrbanExplorer.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(updatedPlace, { status: 200 });
  } catch (error) {
    console.error("Error updating place:", error);
    return NextResponse.json({ error: "Failed to update place" }, { status: 500 });
  }
}

/**
 * ✅ Delete place by ID
 */
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`Deleting place with ID: ${params.id}`);
    await prisma.placeUrbanExplorer.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Place deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting place:", error);
    return NextResponse.json({ error: "Failed to delete place" }, { status: 500 });
  }
}
