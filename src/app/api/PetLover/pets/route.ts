import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New Pet (POST)
export async function POST(req: NextRequest) {
  try {
    const { userId, petName, species, breed, age, medicalHistory } = await req.json();

    if (!userId || !petName || !species || !breed || age === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pet = await prisma.petPetLover.create({
      data: { userId, petName, species, breed, age, medicalHistory },
    });

    return NextResponse.json(pet, { status: 201 });
  } catch (error) {
    console.error("Error creating pet:", error);
    return NextResponse.json({ error: "Failed to create pet" }, { status: 500 });
  }
}