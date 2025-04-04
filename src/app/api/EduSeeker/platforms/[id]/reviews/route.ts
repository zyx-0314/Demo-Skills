import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Create or Get Reviews for Platform
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const reviews = await prisma.reviewEduSeeker.findMany({
      where: { platformId: params.id },
      select: {
        id: true,
        userId: true,
        rating: true,
        comment: true,
        createdAt: true,
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}