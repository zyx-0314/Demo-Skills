import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Submit a New Food Item (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, cuisine, origin, description, submittedBy } = await req.json();

    // Check for missing required fields
    if (!name || !cuisine || !origin || !description || !submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate if the user exists
    const user = await prisma.userFoodie.findUnique({ where: { id: submittedBy } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new food item
    const food = await prisma.foodieFood.create({
      data: { name, cuisine, origin, description, submittedBy },
    });

    return NextResponse.json(food, { status: 201 });

  } catch (error) {
    console.error("Error submitting food item:", error);
    return NextResponse.json({ error: "Failed to submit food item" }, { status: 500 });
  }
}

// ✅ Get All Food Items (GET)
export async function GET(req: NextRequest) {
  try {
    const foods = await prisma.foodieFood.findMany({
      select: { id: true, name: true, cuisine: true, origin: true, description: true, createdAt: true },
    });

    return NextResponse.json(foods, { status: 200 });

  } catch (error) {
    console.error("Error fetching food items:", error);
    return NextResponse.json({ error: "Failed to fetch food items" }, { status: 500 });
  }
}
