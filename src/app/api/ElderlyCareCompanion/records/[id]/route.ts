import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get Single Health Record (GET by ID)
export async function GET_RECORD(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const record = await prisma.elderlyCareCompanionRecord.findUnique({
      where: { id: params.id },
    });

    if (!record) {
      return NextResponse.json({ error: "Health record not found" }, { status: 404 });
    }

    return NextResponse.json(record, { status: 200 });
  } catch (error) {
    console.error("Error fetching health record:", error);
    return NextResponse.json({ error: "Failed to fetch health record" }, { status: 500 });
  }
}

// ✅ Update Health Record (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { recordType, details, date } = await req.json();

    const updatedRecord = await prisma.elderlyCareCompanionRecord.update({
      where: { id: params.id },
      data: { recordType, details, date },
    });

    return NextResponse.json(updatedRecord, { status: 200 });
  } catch (error) {
    console.error("Error updating health record:", error);
    return NextResponse.json({ error: "Failed to update health record" }, { status: 500 });
  }
}

// ✅ Delete Health Record (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.elderlyCareCompanionRecord.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Health record deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting health record:", error);
    return NextResponse.json({ error: "Failed to delete health record" }, { status: 500 });
  }
}