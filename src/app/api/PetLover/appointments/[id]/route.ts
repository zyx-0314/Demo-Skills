import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Appointment by ID (GET /{id})
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 });
    }

    const appointment = await prisma.appointmentPetLover.findUnique({ where: { id } });
    if (!appointment) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 });
    }

    return NextResponse.json(appointment, { status: 200 });
  } catch (error) {
    console.error("Error fetching appointment:", error);
    return NextResponse.json({ error: "Failed to fetch appointment" }, { status: 500 });
  }
}

// ✅ Update Appointment (PUT /{id})
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { appointmentType, dateTime, location } = await req.json();

    if (!id || !appointmentType || !dateTime || !location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedAppointment = await prisma.appointmentPetLover.update({
      where: { id },
      data: { appointmentType, dateTime: new Date(dateTime), location },
    });

    return NextResponse.json(updatedAppointment, { status: 200 });
  } catch (error) {
    console.error("Error updating appointment:", error);
    return NextResponse.json({ error: "Failed to update appointment" }, { status: 500 });
  }
}

// ✅ Delete Appointment (DELETE /{id})
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 });
    }

    await prisma.appointmentPetLover.delete({ where: { id } });
    return NextResponse.json({ message: "Appointment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting appointment:", error);
    return NextResponse.json({ error: "Failed to delete appointment" }, { status: 500 });
  }
}
