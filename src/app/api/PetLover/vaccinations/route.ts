import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

export async function GET() {
  try {
    const vaccinations = await prisma.vaccinationPetLover.findMany();
    return NextResponse.json(vaccinations, { status: 200 });
  } catch (error) {
    let errorMessage = "Failed to create vaccination";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const vaccination = await prisma.vaccinationPetLover.create({
      data: { petId: body.petId, vaccineName: body.vaccineName, dateAdministered: new Date(body.dateAdministered), nextDueDate: body.nextDueDate ? new Date(body.nextDueDate) : null },
    });

    return NextResponse.json(vaccination, { status: 201 });
  } catch (error) {
    let errorMessage = "Failed to create vaccination";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
