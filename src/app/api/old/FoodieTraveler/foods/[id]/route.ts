import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get a single food item by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Fetching food by ID:", params.id);

    const food = await prisma.foodieFood.findUnique({
      where: { id: params.id },
    });

    if (!food) {
      return NextResponse.json({ error: "Food not found" }, { status: 404 });
    }

    return NextResponse.json(food, { status: 200 });
  } catch (error) {
    console.error("Error fetching food:", error);
    return NextResponse.json({ error: "Failed to fetch food" }, { status: 500 });
  }
}
