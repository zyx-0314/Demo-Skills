import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql2";

const prisma = new PostgresqlClient();

// ✅ Get Reviews for a Concert (GET)
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const reviews = await prisma.reviewMusicLover.findMany({
      where: { concertId: params.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        rating: true,
        comment: true,
        validated: true,
        createdAt: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    console.error("Error fetching concert reviews:", error);
    return NextResponse.json({ error: "Failed to get reviews" }, { status: 500 });
  }
}
