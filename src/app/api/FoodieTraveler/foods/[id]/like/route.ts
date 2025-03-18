import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Like a food item
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Liking food:", params.id, body);

    if (!body.userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    const food = await prisma.foodieFood.findUnique({
      where: { id: params.id },
    });

    if (!food) {
      return NextResponse.json({ error: "Food item not found" }, { status: 404 });
    }

    const like = await prisma.foodieLike.create({
      data: {
        foodId: params.id,
        userId: body.userId,
      },
    });

    return NextResponse.json(like, { status: 201 });
  } catch (error) {
    console.error("Error liking food:", error);
    return NextResponse.json({ error: "Failed to like food" }, { status: 500 });
  }
}

// ✅ Unlike a food item
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    console.log("Unliking food:", params.id, body);

    if (!body.userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    await prisma.foodieLike.deleteMany({
      where: {
        foodId: params.id,
        userId: body.userId,
      },
    });

    return NextResponse.json({ message: "Food unliked successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error unliking food:", error);
    return NextResponse.json({ error: "Failed to unlike food" }, { status: 500 });
  }
}
