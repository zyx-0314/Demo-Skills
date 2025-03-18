import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch clinic by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const clinic = await prisma.clinicPetLover.findUnique({
      where: { id: params.id },
    });

    if (!clinic) {
      return NextResponse.json({ error: "Clinic not found" }, { status: 404 });
    }

    return NextResponse.json(clinic, { status: 200 });
  } catch (error) {
    console.error("Error fetching clinic:", error);
    return NextResponse.json({ error: "Failed to fetch clinic" }, { status: 500 });
  }
}
