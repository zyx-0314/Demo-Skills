import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";
import bcrypt from "bcryptjs";

const prisma = new PostgresqlClient();
const SALT_ROUNDS = 10;

// ✅ Create a New User (POST)
export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();

    if (!email || !name || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await prisma.userPetLover.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user
    const user = await prisma.userPetLover.create({
      data: { email, name, password: hashedPassword },
    });

    return NextResponse.json({ id: user.id, email: user.email, name: user.name, createdAt: user.createdAt }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// ✅ Get All Users (GET)
export async function GET() {
  try {
    const users = await prisma.userPetLover.findMany({
      select: { id: true, email: true, name: true, createdAt: true },
    });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
