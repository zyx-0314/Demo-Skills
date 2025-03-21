import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get User by ID (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log("Start")
  try {
    const user = await prisma.userDIYHomes.findUnique({ where: { id: params.id } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    let message = "Failed to fetch user";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// ✅ Update User Details (PUT)
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, password } = await req.json();


    const updatedUser = await prisma.userDIYHomes.update({
      where: { id: params.id },
      data: { name, password },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    let message = "Failed to update user";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await prisma.userDIYHomes.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    let message = "Failed to create post";
    if (error instanceof Error) message = error.message;
    console.log(message);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}