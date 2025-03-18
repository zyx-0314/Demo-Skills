import { NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

export async function GET() {
  try {
    const stores = await prisma.storePetLover.findMany();
    return NextResponse.json(stores, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stores" }, { status: 500 });
  }
}
