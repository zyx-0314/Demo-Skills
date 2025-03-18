import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Fetch All Users (GET - Admin Only)
export async function GET(req: NextRequest) {
  try {
    const users = await prisma.userDIYHomes.findMany({ select: { id: true, email: true, name: true, createdAt: true } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}