import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Pet by ID (GET /{id})
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Pet ID is required" }, { status: 400 });
    }

    const pet = await prisma.petPetLover.findUnique({ where: { id } });
    if (!pet) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }

    return NextResponse.json(pet, { status: 200 });
  } catch (error) {
    console.error("Error fetching pet:", error);
    return NextResponse.json({ error: "Failed to fetch pet" }, { status: 500 });
  }
}

// ✅ Update Pet (PUT /{id})
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { petName, species, breed, age, medicalHistory } = await req.json();

    if (!id || !petName || !species || !breed || age === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedPet = await prisma.petPetLover.update({
      where: { id },
      data: { petName, species, breed, age, medicalHistory },
    });

    return NextResponse.json(updatedPet, { status: 200 });
  } catch (error) {
    console.error("Error updating pet:", error);
    return NextResponse.json({ error: "Failed to update pet" }, { status: 500 });
  }
}

// ✅ Delete Pet (DELETE /{id})
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Pet ID is required" }, { status: 400 });
    }

    await prisma.petPetLover.delete({ where: { id } });
    return NextResponse.json({ message: "Pet deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting pet:", error);
    return NextResponse.json({ error: "Failed to delete pet" }, { status: 500 });
  }
}
