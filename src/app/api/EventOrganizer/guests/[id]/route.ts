import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get Guest by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const guest = await prisma.eventOrganizerGuest.findUnique({
      where: { id },
    });

    if (!guest) {
      return NextResponse.json({ error: "Guest not found" }, { status: 404 });
    }

    return NextResponse.json(guest, { status: 200 });

  } catch (error) {
    console.error("Error fetching guest:", error);
    return NextResponse.json({ error: "Failed to fetch guest" }, { status: 500 });
  }
}

// ✅ Update Guest Details (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, email, phone, status } = await req.json();

    // Check if the guest exists
    const existingGuest = await prisma.eventOrganizerGuest.findUnique({ where: { id } });
    if (!existingGuest) {
      return NextResponse.json({ error: "Guest not found" }, { status: 404 });
    }

    const updatedGuest = await prisma.eventOrganizerGuest.update({
      where: { id },
      data: { name, email, phone, status },
    });

    return NextResponse.json(updatedGuest, { status: 200 });

  } catch (error) {
    console.error("Error updating guest:", error);
    return NextResponse.json({ error: "Failed to update guest" }, { status: 500 });
  }
}

// ✅ Remove Guest (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if the guest exists
    const existingGuest = await prisma.eventOrganizerGuest.findUnique({ where: { id } });
    if (!existingGuest) {
      return NextResponse.json({ error: "Guest not found" }, { status: 404 });
    }

    await prisma.eventOrganizerGuest.delete({ where: { id } });

    return NextResponse.json({ message: "Guest successfully removed" }, { status: 200 });

  } catch (error) {
    console.error("Error removing guest:", error);
    return NextResponse.json({ error: "Failed to remove guest" }, { status: 500 });
  }
}
