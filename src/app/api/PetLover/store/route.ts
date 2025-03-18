import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New Store (POST)
export async function POST(req: NextRequest) {
  try {
    const { name, address, phone } = await req.json();

    if (!name || !address || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const store = await prisma.storePetLover.create({
      data: { name, address, phone },
    });

    return NextResponse.json(store, { status: 201 });
  } catch (error) {
    console.error("Error creating store:", error);
    return NextResponse.json({ error: "Failed to create store" }, { status: 500 });
  }
}

// ✅ Get All Pet Stores (GET)
export async function GET() {
  try {
    const stores = await prisma.storePetLover.findMany();
    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    console.error("Error fetching stores:", error);
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 });
  }
}