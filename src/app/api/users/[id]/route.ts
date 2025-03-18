import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";
import bcrypt from "bcryptjs";

const prisma = new PostgresqlClient();

// ✅ Get User by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log("Start")
  try {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}

// ✅ Update User Details (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, password, group } = await req.json();

    // Hash new password if provided
    let hashedPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: { name, password: hashedPassword, group },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// ✅ Delete User (DELETE)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}