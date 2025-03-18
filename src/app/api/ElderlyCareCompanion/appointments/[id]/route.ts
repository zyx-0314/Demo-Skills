// ✅ Get Single Appointment (GET by ID)
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const appointment = await prisma.elderlyCareCompanionAppointment.findUnique({
      where: { id: params.id },
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

// ✅ Update Appointment (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { type, title, dateTime, location, medicationDetails } = await req.json();

    const updatedAppointment = await prisma.elderlyCareCompanionAppointment.update({
      where: { id: params.id },
      data: { type, title, dateTime, location, medicationDetails },
    });

    return NextResponse.json(updatedAppointment, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 });
  }
}

// ✅ Delete Appointment (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.elderlyCareCompanionAppointment.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 });
  }
}
