import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Confirm review submission (Admin Only)
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    console.log("Admin validating review submission:", params.id);

    const body = await req.json();
    const { validated } = body;

    const updatedReview = await prisma.foodieReview.update({
      where: { id: params.id },
      data: { validated: validated },
    });

    return NextResponse.json({ message: "Review submission validated", review: updatedReview }, { status: 200 });
  } catch (error) {
    console.error("Error validating review submission:", error);
    return NextResponse.json({ error: "Failed to validate review" }, { status: 500 });
  }
}
