import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Create an Appointment or Medication Reminder (POST)
export async function POST(req: NextRequest) {
  try {
    const { userId, type, title, dateTime, location, medicationDetails } = await req.json();

    if (!userId || !type || !title || !dateTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const appointment = await prisma.elderlyCareCompanionAppointment.create({
      data: { userId, type, title, dateTime, location, medicationDetails },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}