import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch appointment by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const appointment = await prisma.appointmentPetLover.findUnique({
      where: { id: params.id },
      include: { pet: true, user: true }, // Include related pet & user details
    });

    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json(appointment, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return NextResponse.json({ error: "Failed to fetch appointment" }, { status: 500 });
  }
}

// ✅ Update appointment details
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();

    if (!body.appointmentType || !body.dateTime || !body.location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedAppointment = await prisma.appointmentPetLover.update({
      where: { id: params.id },
      data: {
        appointmentType: body.appointmentType,
        dateTime: new Date(body.dateTime),
        location: body.location,
      },
    });

    return NextResponse.json(updatedAppointment, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 });
  }
}

// ✅ Delete appointment
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.appointmentPetLover.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 });
  }
}
