import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql2";

const prisma = new PrismaClient();

// ✅ Add a New Venue (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, location, capacity, amenities, submittedBy } = await req.json();

    // Check for missing required fields
    if (!name || !location || !capacity || !amenities || !submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify if the user exists
    const userExists = await prisma.eventOrganizerUser.findUnique({ where: { id: submittedBy } });
    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new venue
    const venue = await prisma.eventOrganizerVenue.create({
      data: { name, location, capacity, amenities, submittedBy },
    });

    return NextResponse.json(venue, { status: 201 });

  } catch (error) {
    console.error("Error adding venue:", error);
    return NextResponse.json({ error: "Failed to add venue" }, { status: 500 });
  }
}

// ✅ Get All Venues (GET)
export async function GET(req: NextRequest) {
  try {
    const venues = await prisma.eventOrganizerVenue.findMany();
    return NextResponse.json(venues, { status: 200 });

  } catch (error) {
    console.error("Error fetching venues:", error);
    return NextResponse.json({ error: "Failed to fetch venues" }, { status: 500 });
  }
}
