import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql2";

const prisma = new PrismaClient();

// ✅ Add a New Guest (POST)
export async function POST(req: NextRequest) {
  try {
    const { eventId, name, email, phone, status, userId } = await req.json();

    // Check for missing required fields
    if (!eventId || !name || !email || !phone || !status || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify if the user exists
    const userExists = await prisma.eventOrganizerUser.findUnique({ where: { id: userId } });
    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new guest
    const guest = await prisma.eventOrganizerGuest.create({
      data: { eventId, name, email, phone, status, userId },
    });

    return NextResponse.json(guest, { status: 201 });

  } catch (error) {
    console.error("Error adding guest:", error);
    return NextResponse.json({ error: "Failed to add guest" }, { status: 500 });
  }
}

// ✅ Get All Guests (GET)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const eventId = searchParams.get("eventId");

    // Fetch guests for a specific event
    const guests = eventId
      ? await prisma.eventOrganizerGuest.findMany({ where: { eventId } })
      : await prisma.eventOrganizerGuest.findMany();

    return NextResponse.json(guests, { status: 200 });

  } catch (error) {
    console.error("Error fetching guests:", error);
    return NextResponse.json({ error: "Failed to fetch guests" }, { status: 500 });
  }
}
