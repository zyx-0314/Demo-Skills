import { NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

export async function GET() {
  try {
    const clinics = await prisma.clinicPetLover.findMany();
    return NextResponse.json(clinics, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch clinics" }, { status: 500 });
  }
}
