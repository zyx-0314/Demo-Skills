import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Update Food Info (Admin Only) (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, cuisine, description } = await req.json();

    if (!name || !cuisine || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedFood = await prisma.foodieFood.update({
      where: { id },
      data: { name, cuisine, description },
      select: { id: true, name: true, cuisine: true, description: true },
    });

    return NextResponse.json(updatedFood, { status: 200 });

  } catch (error) {
    console.error("Error updating food item:", error);
    return NextResponse.json({ error: "Failed to update food item" }, { status: 500 });
  }
}

// ✅ Delete Food Item (Admin Only) (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.foodieFood.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Food item deleted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting food item:", error);
    return NextResponse.json({ error: "Failed to delete food item" }, { status: 500 });
  }
}
