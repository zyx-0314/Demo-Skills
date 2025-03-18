import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get Store by ID (GET /{id})
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Store ID is required" }, { status: 400 });
    }

    const store = await prisma.storePetLover.findUnique({ where: { id } });
    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    return NextResponse.json(store, { status: 200 });
  } catch (error) {
    console.error("Error fetching store:", error);
    return NextResponse.json({ error: "Failed to fetch store" }, { status: 500 });
  }
}

// ✅ Update Store (PUT /{id})
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const { name, address, phone } = await req.json();

    if (!id || !name || !address || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedStore = await prisma.storePetLover.update({
      where: { id },
      data: { name, address, phone },
    });

    return NextResponse.json(updatedStore, { status: 200 });
  } catch (error) {
    console.error("Error updating store:", error);
    return NextResponse.json({ error: "Failed to update store" }, { status: 500 });
  }
}

// ✅ Delete Store (DELETE /{id})
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Store ID is required" }, { status: 400 });
    }

    await prisma.storePetLover.delete({ where: { id } });
    return NextResponse.json({ message: "Store deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting store:", error);
    return NextResponse.json({ error: "Failed to delete store" }, { status: 500 });
  }
}
