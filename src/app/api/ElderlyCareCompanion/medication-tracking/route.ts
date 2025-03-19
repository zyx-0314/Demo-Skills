import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { userId, medicationId, status, dateTime } = await req.json();

    if (!userId || !medicationId || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const tracking = await prisma.elderlyCareCompanionMedicationTracking.create({
      data: { userId, medicationId, status, dateTime },
    });

    return NextResponse.json(tracking, { status: 201 });
  } catch (error) {
    console.error("Error logging medication intake:", error);
    return NextResponse.json({ error: "Failed to log medication intake" }, { status: 500 });
  }
}
