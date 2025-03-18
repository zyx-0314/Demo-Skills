import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

/**
 * ✅ Validate a Place (Admin Only)
 */
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log(`Validating place ID: ${params.id}`);

    const updatedPlace = await prisma.placeUrbanExplorer.update({
      where: { id: params.id },
      data: { validated: true },
    });

    return NextResponse.json(updatedPlace, { status: 200 });
  } catch (error) {
    console.error("Error validating place:", error);
    return NextResponse.json({ error: "Failed to validate place" }, { status: 500 });
  }
}
