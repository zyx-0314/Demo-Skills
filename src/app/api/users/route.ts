import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create a New User (POST)
export async function POST(req: NextRequest) {
  try {
    const { email, name, password, group } = await req.json();
    if (!email || !name || !password || !group) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await prisma.user.create({
      data: { email, name, password: hashedPassword, group },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

// ✅ Get All Users (GET)
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to fetch users list" }, { status: 500 });
  }
}
