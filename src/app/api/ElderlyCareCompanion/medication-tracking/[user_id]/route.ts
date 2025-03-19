import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { user_id: string } }) {
  try {
    const logs = await prisma.elderlyCareCompanionMedicationTracking.findMany({
      where: { userId: params.user_id },
      orderBy: { dateTime: "desc" },
    });

    return NextResponse.json(logs, { status: 200 });
  } catch (error) {
    console.error("Error fetching medication tracking:", error);
    return NextResponse.json({ error: "Failed to fetch medication tracking" }, { status: 500 });
  }
}
