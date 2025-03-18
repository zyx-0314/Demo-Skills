import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get all foods
export async function GET() {
  try {
    console.log("Fetching all foods...");
    const foods = await prisma.foodieFood.findMany();
    console.log("Fetched foods:", foods);

    return NextResponse.json(foods, { status: 200 });
  } catch (error) {
    console.error("Error fetching foods:", error);
    return NextResponse.json({ error: "Failed to fetch foods" }, { status: 500 });
  }
}

// ✅ Create a new food item
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Creating food:", body);

    if (!body.name || !body.cuisine || !body.origin || !body.description || !body.submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const food = await prisma.foodieFood.create({
      data: {
        name: body.name,
        cuisine: body.cuisine,
        origin: body.origin,
        description: body.description,
        submittedBy: body.submittedBy,
      },
    });

    return NextResponse.json(food, { status: 201 });
  } catch (error) {
    console.error("Error creating food:", error);
    return NextResponse.json({ error: "Failed to create food" }, { status: 500 });
  }
}