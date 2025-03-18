import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

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