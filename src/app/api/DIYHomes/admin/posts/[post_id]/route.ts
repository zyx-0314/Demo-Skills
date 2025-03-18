import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Delete a Post (DELETE - Admin Only)
export async function DELETE(req: NextRequest, { params }: { params: { post_id: string } }) {
  try {
    await prisma.postDIYHomes.delete({ where: { id: params.post_id } });
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
