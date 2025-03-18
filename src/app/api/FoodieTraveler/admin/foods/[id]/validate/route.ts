import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Confirm food submission (Admin Only)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Admin validating food submission:", params.id);

    const body = await req.json();
    const { validated } = body;

    const updatedFood = await prisma.foodieFood.update({
      where: { id: params.id },
      data: { validated: validated },
    });

    return NextResponse.json({ message: "Food submission validated", food: updatedFood }, { status: 200 });
  } catch (error) {
    console.error("Error validating food submission:", error);
    return NextResponse.json({ error: "Failed to validate food" }, { status: 500 });
  }
}
