import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Validate a Food Submission (Admin Only) (POST)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Validate if the food item exists
    const food = await prisma.foodieFood.findUnique({ where: { id } });
    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    // Update validation status
    const validatedFood = await prisma.foodieFood.update({
      where: { id },
      data: { validated: true },
      select: { id: true, name: true, validated: true },
    });

    return NextResponse.json(validatedFood, { status: 200 });

  } catch (error) {
    console.error("Error validating food item:", error);
    return NextResponse.json({ error: "Failed to validate food item" }, { status: 500 });
  }
}
