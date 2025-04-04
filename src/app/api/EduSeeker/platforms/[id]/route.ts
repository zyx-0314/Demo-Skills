import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Platform by ID: GET, PUT, DELETE
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const platform = await prisma.platformEduSeeker.findUnique({
      where: { id: params.id },
    });

    if (!platform) {
      return NextResponse.json({ error: "Platform not found" }, { status: 404 });
    }

    return NextResponse.json(platform, { status: 200 });
  } catch (error) {
    console.error("Error fetching platform:", error);
    return NextResponse.json({ error: "Failed to fetch platform" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, description, category } = await req.json();

    if (!name || !description || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const updatedPlatform = await prisma.platformEduSeeker.update({
      where: { id: params.id },
      data: { name, description, category },
    });

    return NextResponse.json(updatedPlatform, { status: 200 });
  } catch (error) {
    console.error("Error updating platform:", error);
    return NextResponse.json({ error: "Failed to update platform" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.platformEduSeeker.delete({ where: { id: params.id } });
    return NextResponse.json({ message: "Platform deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting platform:", error);
    return NextResponse.json({ error: "Failed to delete platform" }, { status: 500 });
  }
}
