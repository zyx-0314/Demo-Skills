import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch all appointments
export async function GET() {
  try {
    const appointments = await prisma.appointmentPetLover.findMany({
      include: { pet: true, user: true },
    });

    return NextResponse.json(appointments, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}

// ✅ Create a new appointment
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.userId || !body.petId || !body.appointmentType || !body.dateTime || !body.location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const appointment = await prisma.appointmentPetLover.create({
      data: {
        userId: body.userId,
        petId: body.petId,
        appointmentType: body.appointmentType,
        dateTime: new Date(body.dateTime),
        location: body.location,
      },
    });

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return NextResponse.json({ error: "Failed to create appointment" }, { status: 500 });
  }
}
