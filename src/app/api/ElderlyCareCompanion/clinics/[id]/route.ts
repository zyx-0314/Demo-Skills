import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get Single Clinic (GET by ID)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const clinic = await prisma.elderlyCareCompanionClinic.findUnique({
      where: { id: params.id },
    });

    if (!clinic) {
      return NextResponse.json({ error: "Clinic not found" }, { status: 404 });
    }

    return NextResponse.json(clinic, { status: 200 });
  } catch (error) {
    console.error("Error fetching clinic:", error);
    return NextResponse.json({ error: "Failed to fetch clinic" }, { status: 500 });
  }
}

// ✅ Update Clinic (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, address, phone } = await req.json();

    const updatedClinic = await prisma.elderlyCareCompanionClinic.update({
      where: { id: params.id },
      data: { name, address, phone },
    });

    return NextResponse.json(updatedClinic, { status: 200 });
  } catch (error) {
    console.error("Error updating clinic:", error);
    return NextResponse.json({ error: "Failed to update clinic" }, { status: 500 });
  }
}

// ✅ Delete Clinic (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.elderlyCareCompanionClinic.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Clinic deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting clinic:", error);
    return NextResponse.json({ error: "Failed to delete clinic" }, { status: 500 });
  }
}