import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Get Single Store (GET by ID)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const store = await prisma.elderlyCareCompanionStore.findUnique({
      where: { id: params.id },
    });

    if (!store) {
      return NextResponse.json({ error: "Store not found" }, { status: 404 });
    }

    return NextResponse.json(store, { status: 200 });
  } catch (error) {
    console.error("Error fetching store:", error);
    return NextResponse.json({ error: "Failed to fetch store" }, { status: 500 });
  }
}

// ✅ Update Store (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, address, phone } = await req.json();

    const updatedStore = await prisma.elderlyCareCompanionStore.update({
      where: { id: params.id },
      data: { name, address, phone },
    });

    return NextResponse.json(updatedStore, { status: 200 });
  } catch (error) {
    console.error("Error updating store:", error);
    return NextResponse.json({ error: "Failed to update store" }, { status: 500 });
  }
}

// ✅ Delete Store (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.elderlyCareCompanionStore.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Store deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting store:", error);
    return NextResponse.json({ error: "Failed to delete store" }, { status: 500 });
  }
}
