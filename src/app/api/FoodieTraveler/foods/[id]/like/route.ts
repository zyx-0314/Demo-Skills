import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Like a Food Item (POST)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Validate if the food item exists
    const food = await prisma.foodieFood.findUnique({ where: { id: id } });
    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    // Validate if the user exists
    const user = await prisma.userFoodie.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create like entry
    const like = await prisma.foodieLike.create({
      data: { foodId: id, userId },
    });

    return NextResponse.json(like, { status: 201 });

  } catch (error) {
    console.error("Error liking food item:", error);
    return NextResponse.json({ error: "Failed to like food item" }, { status: 500 });
  }
}

// ✅ Unlike a Food Item (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    await prisma.foodieLike.deleteMany({
      where: { id, userId },
    });

    return NextResponse.json({ message: "Like removed successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error unliking food item:", error);
    return NextResponse.json({ error: "Failed to unlike food item" }, { status: 500 });
  }
}
