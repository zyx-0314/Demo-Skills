import { NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Get leaderboard of top-rated foods
export async function GET() {
  try {
    console.log("Fetching top-rated foods...");

    const topFoods = await prisma.foodieFood.findMany({
      orderBy: {
        reviews: {
          _count: "desc",
        },
      },
      take: 10, // Top 10 rated foods
      include: {
        reviews: true,
        likes: true,
      },
    });

    return NextResponse.json(topFoods, { status: 200 });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
