import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New Clinic (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, address, phone } = await req.json();

    if (!name || !address || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const clinic = await prisma.clinicPetLover.create({
      data: { name, address, phone },
    });

    return NextResponse.json(clinic, { status: 201 });
  } catch (error) {
    console.error("Error creating clinic:", error);
    return NextResponse.json({ error: "Failed to create clinic" }, { status: 500 });
  }
}

// ✅ Get All Pet Clinics (GET)
export async function GET() {
  try {
    const clinics = await prisma.clinicPetLover.findMany();
    return NextResponse.json(clinics, { status: 200 });
  } catch (error) {
    console.error("Error fetching clinics:", error);
    return NextResponse.json({ error: "Failed to fetch clinics" }, { status: 500 });
  }
}
