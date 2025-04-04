import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get All Appointments (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const userId = params.id; // Extract userId from the request parameters

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const appointments = await prisma.elderlyCareCompanionAppointment.findMany({
      where: { userId },
    });

    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

