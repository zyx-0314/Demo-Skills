import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Fetch a Single Food Item by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const food = await prisma.foodieFood.findUnique({
      where: { id },
      select: { id: true, name: true, cuisine: true, origin: true, description: true, createdAt: true },
    });

    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    return NextResponse.json(food, { status: 200 });

  } catch (error) {
    console.error("Error fetching food item:", error);
    return NextResponse.json({ error: "Failed to fetch food item" }, { status: 500 });
  }
}
