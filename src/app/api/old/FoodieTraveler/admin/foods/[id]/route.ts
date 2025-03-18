import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Update food info (Admin Only)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Admin updating food:", params.id, body);

    if (!body.name || !body.cuisine || !body.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedFood = await prisma.foodieFood.update({
      where: { id: params.id },
      data: {
        name: body.name,
        cuisine: body.cuisine,
        description: body.description,
      },
    });

    return NextResponse.json(updatedFood, { status: 200 });
  } catch (error) {
    console.error("Error updating food:", error);
    return NextResponse.json({ error: "Failed to update food" }, { status: 500 });
  }
}

// ✅ Delete food (Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Admin deleting food:", params.id);

    await prisma.foodieLocation.deleteMany({
      where: { foodId: params.id },
    });

    await prisma.foodieFood.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Food deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting food:", error);
    return NextResponse.json({ error: "Failed to delete food" }, { status: 500 });
  }
}