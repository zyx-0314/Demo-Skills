import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get Service Provider by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const provider = await prisma.eventOrganizerServiceProvider.findUnique({
      where: { id },
    });

    if (!provider) {
      return NextResponse.json({ error: "Service provider not found" }, { status: 404 });
    }

    return NextResponse.json(provider, { status: 200 });

  } catch (error) {
    console.error("Error fetching service provider:", error);
    return NextResponse.json({ error: "Failed to fetch service provider" }, { status: 500 });
  }
}

// ✅ Update Service Provider Details (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const { name, serviceType, contactInfo } = await req.json();

    // Check if the provider exists
    const existingProvider = await prisma.eventOrganizerServiceProvider.findUnique({ where: { id } });
    if (!existingProvider) {
      return NextResponse.json({ error: "Service provider not found" }, { status: 404 });
    }

    const updatedProvider = await prisma.eventOrganizerServiceProvider.update({
      where: { id },
      data: { name, serviceType, contactInfo },
    });

    return NextResponse.json(updatedProvider, { status: 200 });

  } catch (error) {
    console.error("Error updating service provider:", error);
    return NextResponse.json({ error: "Failed to update service provider" }, { status: 500 });
  }
}

// ✅ Delete Service Provider (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    // Check if the provider exists
    const existingProvider = await prisma.eventOrganizerServiceProvider.findUnique({ where: { id } });
    if (!existingProvider) {
      return NextResponse.json({ error: "Service provider not found" }, { status: 404 });
    }

    await prisma.eventOrganizerServiceProvider.delete({ where: { id } });

    return NextResponse.json({ message: "Service provider successfully deleted" }, { status: 200 });

  } catch (error) {
    console.error("Error deleting service provider:", error);
    return NextResponse.json({ error: "Failed to delete service provider" }, { status: 500 });
  }
}
