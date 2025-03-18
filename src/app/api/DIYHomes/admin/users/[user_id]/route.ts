import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Ban a User (DELETE - Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { user_id: string } }) {
  try {
    await prisma.userDIYHomes.delete({ where: { id: params.user_id } });
    return NextResponse.json({ message: "User banned successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error banning user:", error);
    return NextResponse.json({ error: "Failed to ban user" }, { status: 500 });
  }
}
