import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Create a Health Record (POST)
export async function POST(req: NextRequest) {
  try {
    const { userId, recordType, details, date } = await req.json();

    if (!userId || !recordType || !details || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const record = await prisma.elderlyCareCompanionRecord.create({
      data: { userId, recordType, details, date },
    });

    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    console.error("Error creating health record:", error);
    return NextResponse.json({ error: "Failed to create health record" }, { status: 500 });
  }
}

// ✅ Get All Health Records (GET)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const records = await prisma.elderlyCareCompanionRecord.findMany({
      where: { userId },
    });

    return NextResponse.json(records, { status: 200 });
  } catch (error) {
    console.error("Error fetching health records:", error);
    return NextResponse.json({ error: "Failed to fetch health records" }, { status: 500 });
  }
}
