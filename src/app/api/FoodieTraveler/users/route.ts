import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@/../prisma/generated/postgresql";

const prisma = new PrismaClient();

// ✅ Create a New User (POST)
export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();

    // Check for missing required fields
    if (!email || !name || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await prisma.userFoodie.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.userFoodie.create({
      data: { email, name, password: hashedPassword },
    });

    return NextResponse.json(
      { id: user.id, email: user.email, name: user.name, createdAt: user.createdAt },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// ✅ Get All Users (GET)
export async function GET(req: NextRequest) {
  try {
    const users = await prisma.userFoodie.findMany({
      select: { id: true, email: true, name: true, createdAt: true },
    });

    return NextResponse.json(users, { status: 200 });

  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}
