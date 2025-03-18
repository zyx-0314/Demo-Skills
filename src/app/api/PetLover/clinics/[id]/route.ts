import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Clinic by ID (GET /{id})
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Clinic ID is required" }, { status: 400 });
    }

    const clinic = await prisma.clinicPetLover.findUnique({ where: { id } });
    if (!clinic) {
      return NextResponse.json({ error: "Clinic not found" }, { status: 404 });
    }

    return NextResponse.json(clinic, { status: 200 });
  } catch (error) {
    console.error("Error fetching clinic:", error);
    return NextResponse.json({ error: "Failed to fetch clinic" }, { status: 500 });
  }
}

// ✅ Update Clinic (PUT /{id})
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { name, address, phone } = await req.json();

    if (!id || !name || !address || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedClinic = await prisma.clinicPetLover.update({
      where: { id },
      data: { name, address, phone },
    });

    return NextResponse.json(updatedClinic, { status: 200 });
  } catch (error) {
    console.error("Error updating clinic:", error);
    return NextResponse.json({ error: "Failed to update clinic" }, { status: 500 });
  }
}

// ✅ Delete Clinic (DELETE /{id})
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Clinic ID is required" }, { status: 400 });
    }

    await prisma.clinicPetLover.delete({ where: { id } });
    return NextResponse.json({ message: "Clinic deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting clinic:", error);
    return NextResponse.json({ error: "Failed to delete clinic" }, { status: 500 });
  }
}