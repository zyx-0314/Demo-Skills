import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New Appointment (POST)
export async function POST(req: NextRequest) {
  try {
    const { userId, petId, appointmentType, dateTime, location } = await req.json();

    if (!userId || !petId || !appointmentType || !dateTime || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const appointment = await prisma.appointmentPetLover.create({
      data: { userId, petId, appointmentType, dateTime: new Date(dateTime), location },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}