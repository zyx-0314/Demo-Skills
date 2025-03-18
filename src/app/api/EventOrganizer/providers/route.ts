import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Add a New Service Provider (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, serviceType, contactInfo, submittedBy } = await req.json();

    // Check for missing required fields
    if (!name || !serviceType || !contactInfo || !submittedBy) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify if the user exists
    const userExists = await prisma.eventOrganizerUser.findUnique({ where: { id: submittedBy } });
    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new service provider
    const provider = await prisma.eventOrganizerServiceProvider.create({
      data: { name, serviceType, contactInfo, submittedBy },
    });

    return NextResponse.json(provider, { status: 201 });

  } catch (error) {
    console.error("Error adding service provider:", error);
    return NextResponse.json({ error: "Failed to add service provider" }, { status: 500 });
  }
}

// ✅ Get All Service Providers (GET)
export async function GET(req: NextRequest) {
  try {
    const providers = await prisma.eventOrganizerServiceProvider.findMany();
    return NextResponse.json(providers, { status: 200 });

  } catch (error) {
    console.error("Error fetching service providers:", error);
    return NextResponse.json({ error: "Failed to fetch service providers" }, { status: 500 });
  }
}
