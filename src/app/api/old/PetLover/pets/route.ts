import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch all pets
export async function GET() {
  try {
    console.log("Fetching all pets...");
    const pets = await prisma.petPetLover.findMany({
      include: { user: true },
    });

    return NextResponse.json(pets, { status: 200 });
  } catch (error) {
    console.error("Error fetching pets:", error);
    return NextResponse.json({ error: "Failed to fetch pets" }, { status: 500 });
  }
}

// ✅ Create a new pet
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.userId || !body.petName || !body.species || !body.breed || !body.age) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pet = await prisma.petPetLover.create({
      data: {
        userId: body.userId,
        petName: body.petName,
        species: body.species,
        breed: body.breed,
        age: body.age,
        medicalHistory: body.medicalHistory || null,
      },
    });

    return NextResponse.json(pet, { status: 201 });
  } catch (error) {
    console.error("Error creating pet:", error);
    return NextResponse.json({ error: "Failed to create pet" }, { status: 500 });
  }
}
