import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";
import bcrypt from "bcryptjs";

const prisma = new PostgresqlClient();

// ✅ Create a New User (POST)
export async function POST(req: NextRequest) {
  try {
    const { email, name, password, role } = await req.json();
    if (!email || !name || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await prisma.languageLearnerUser.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.languageLearnerUser.create({
      data: { email, name, password: hashedPassword, role: role || "learner" },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    let errorMessage = "Failed to create user";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

// ✅ Get All Users (GET)
export async function GET() {
  try {
    const users = await prisma.languageLearnerUser.findMany({
      select: { id: true, email: true, name: true, role: true },
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    let errorMessage = "Failed to fetch users";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
