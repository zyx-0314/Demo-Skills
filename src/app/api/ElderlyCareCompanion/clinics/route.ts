import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Create a Clinic (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, address, phone } = await req.json();

    if (!name || !address || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const clinic = await prisma.elderlyCareCompanionClinic.create({
      data: { name, address, phone },
    });

    return NextResponse.json(clinic, { status: 201 });
  } catch (error) {
    console.error("Error creating clinic:", error);
    return NextResponse.json({ error: "Failed to create clinic" }, { status: 500 });
  }
}

// ✅ Get All Clinics (GET)
export async function GET(req: NextRequest) {
  try {
    const clinics = await prisma.elderlyCareCompanionClinic.findMany();
    return NextResponse.json(clinics, { status: 200 });
  } catch (error) {
    console.error("Error fetching clinics:", error);
    return NextResponse.json({ error: "Failed to fetch clinics" }, { status: 500 });
  }
}