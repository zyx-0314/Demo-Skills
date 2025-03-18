import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

export async function GET() {
  try {
    const leaderboard = await prisma.placeUrbanExplorer.findMany({
      orderBy: { reviews: { _count: "desc" } },
      take: 10,
    });

    return NextResponse.json(leaderboard, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }
}
