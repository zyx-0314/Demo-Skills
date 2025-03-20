import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql2";

const prisma = new PrismaClient();

// ✅ Get Venue by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const venue = await prisma.eventOrganizerVenue.findUnique({
      where: { id },
    });

    if (!venue) {
      return NextResponse.json({ error: "Venue not found" }, { status: 404 });
    }

    return NextResponse.json(venue, { status: 200 });

  } catch (error) {
    console.error("Error fetching venue:", error);
    return NextResponse.json({ error: "Failed to fetch venue" }, { status: 500 });
  }
}

// ✅ Update Venue Details (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, location, capacity, amenities } = await req.json();

    // Check if the venue exists
    const existingVenue = await prisma.eventOrganizerVenue.findUnique({ where: { id } });
    if (!existingVenue) {
      return NextResponse.json({ error: "Venue not found" }, { status: 404 });
    }

    const updatedVenue = await prisma.eventOrganizerVenue.update({
      where: { id },
      data: { name, location, capacity, amenities },
    });

    return NextResponse.json(updatedVenue, { status: 200 });

  } catch (error) {
    console.error("Error updating venue:", error);
    return NextResponse.json({ error: "Failed to update venue" }, { status: 500 });
  }
}

// ✅ Delete Venue (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if the venue exists
    const existingVenue = await prisma.eventOrganizerVenue.findUnique({ where: { id } });
    if (!existingVenue) {
      return NextResponse.json({ error: "Venue not found" }, { status: 404 });
    }

    await prisma.eventOrganizerVenue.delete({ where: { id } });

    return NextResponse.json({ message: "Venue successfully deleted" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting venue:", error);
    return NextResponse.json({ error: "Failed to delete venue" }, { status: 500 });
  }
}
