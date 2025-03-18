import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Submit a location for a food item
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Adding location for food:", params.id, body);

    if (!body.locationName || !body.address || !body.submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const food = await prisma.foodieFood.findUnique({
      where: { id: params.id },
    });

    if (!food) {
      return NextResponse.json({ error: "Food not found" }, { status: 404 });
    }

    const location = await prisma.foodieLocation.create({
      data: {
        foodId: params.id,
        locationName: body.locationName,
        address: body.address,
        submittedBy: body.submittedBy,
      },
    });

    return NextResponse.json(location, { status: 201 });
  } catch (error) {
    console.error("Error adding location:", error);
    return NextResponse.json({ error: "Failed to add location" }, { status: 500 });
  }
}
