import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Validate or Reject a Place (PATCH)
export async function PATCH(req: NextRequest, { params }: { params: { place_id: string } }) {
  try {
    const { status } = await req.json();
    const placeId = params.place_id;

    if (!placeId || !status || !["approved", "rejected"].includes(status)) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const updatedPlace = await prisma.placeUrbanExplorer.update({
      where: { id: placeId },
      data: { validated: status === "approved" },
      select: { id: true, name: true, validated: true },
    });

    return NextResponse.json(updatedPlace, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to update place validation" }, { status: 500 });
  }
}
