import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New Vaccination Record (POST)
export async function POST(req: NextRequest) {
  try {
    const { petId, vaccineName, dateAdministered, nextDueDate } = await req.json();

    if (!petId || !vaccineName || !dateAdministered) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const vaccination = await prisma.vaccinationPetLover.create({
      data: { petId, vaccineName, dateAdministered: new Date(dateAdministered), nextDueDate: nextDueDate ? new Date(nextDueDate) : null },
    });

    return NextResponse.json(vaccination, { status: 201 });
  } catch (error) {
    console.error("Error creating vaccination record:", error);
    return NextResponse.json({ error: "Failed to create vaccination record" }, { status: 500 });
  }
}