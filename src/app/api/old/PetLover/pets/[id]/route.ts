import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get pet by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const pet = await prisma.petPetLover.findUnique({
      where: { id: params.id },
    });

    if (!pet) {
      return NextResponse.json({ error: "Pet not found" }, { status: 404 });
    }

    return NextResponse.json(pet, { status: 200 });
  } catch (error) {
    console.error("Error fetching pet:", error);
    return NextResponse.json({ error: "Failed to fetch pet" }, { status: 500 });
  }
}

// ✅ Update pet
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();

    const updatedPet = await prisma.petPetLover.update({
      where: { id: params.id },
      data: {
        petName: body.petName,
        species: body.species,
        breed: body.breed,
        age: body.age,
        medicalHistory: body.medicalHistory,
      },
    });

    return NextResponse.json(updatedPet, { status: 200 });
  } catch (error) {
    console.error("Error updating pet:", error);
    return NextResponse.json({ error: "Failed to update pet" }, { status: 500 });
  }
}

// ✅ Delete pet
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.petPetLover.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Pet deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting pet:", error);
    return NextResponse.json({ error: "Failed to delete pet" }, { status: 500 });
  }
}
