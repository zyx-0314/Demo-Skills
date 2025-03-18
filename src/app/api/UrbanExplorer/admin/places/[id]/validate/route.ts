import { NextResponse, NextRequest } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log(`Validating place with ID: ${body.id}`);

    // ✅ Check if the place exists before updating
    const existingPlace = await prisma.placeUrbanExplorer.findUnique({
      where: { id: body.id },
    });

    if (!existingPlace) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    // ✅ Update the place validation status
    const updatedPlace = await prisma.placeUrbanExplorer.update({
      where: { id: body.id },
      data: { validated: true },
    });

    return NextResponse.json(updatedPlace, { status: 200 });
  } catch (error) {
    console.error("Error validating place:", error);
    return NextResponse.json({ error: "Failed to validate place" }, { status: 500 });
  }
}


