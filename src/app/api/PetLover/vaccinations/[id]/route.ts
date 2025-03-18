import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get All Vaccination Records for a Pet (GET)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const petId = searchParams.get("petId");

    if (!petId) {
      return NextResponse.json({ error: "Pet ID is required" }, { status: 400 });
    }

    const vaccinations = await prisma.vaccinationPetLover.findMany({
      where: { petId },
    });

    return NextResponse.json(vaccinations, { status: 200 });
  } catch (error) {
    console.error("Error fetching vaccination records:", error);
    return NextResponse.json({ error: "Failed to fetch vaccination records" }, { status: 500 });
  }
}
