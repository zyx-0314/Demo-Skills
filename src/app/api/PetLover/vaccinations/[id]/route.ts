import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch vaccination by ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const vaccination = await prisma.vaccinationPetLover.findUnique({
      where: { id: params.id },
      include: { pet: true }, // Include pet details
    });

    if (!vaccination) {
      return NextResponse.json({ error: "Vaccination record not found" }, { status: 404 });
    }

    return NextResponse.json(vaccination, { status: 200 });
  } catch (error) {
    console.error("Error fetching vaccination:", error);
    return NextResponse.json({ error: "Failed to fetch vaccination" }, { status: 500 });
  }
}

// ✅ Delete vaccination record
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.vaccinationPetLover.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Vaccination record deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting vaccination:", error);
    return NextResponse.json({ error: "Failed to delete vaccination" }, { status: 500 });
  }
}
