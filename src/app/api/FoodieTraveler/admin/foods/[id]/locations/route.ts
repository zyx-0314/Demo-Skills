import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Submit Where to Find a Dish (POST)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id: foodId } = params;
    const { locationName, address, submittedBy } = await req.json();

    // Validate required fields
    if (!foodId || !locationName || !address || !submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate if the food item exists
    const food = await prisma.foodieFood.findUnique({ where: { id: foodId } });
    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    // Validate if the user exists
    const user = await prisma.userFoodie.findUnique({ where: { id: submittedBy } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new location entry
    const location = await prisma.foodieLocation.create({
      data: { foodId, locationName, address, submittedBy },
    });

    return NextResponse.json(location, { status: 201 });

  } catch (error) {
    console.error("Error submitting location:", error);
    return NextResponse.json({ error: "Failed to submit location" }, { status: 500 });
  }
}
