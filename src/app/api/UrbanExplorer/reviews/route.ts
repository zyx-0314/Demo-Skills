import { NextRequest, NextResponse } from "next/server";
import { PrismaClient as PostgresqlClient } from "@/../prisma/generated/postgresql";

const prisma = new PostgresqlClient();

// ✅ Add Review (POST)
export async function POST(req: NextRequest) {
  try {
    const { placeId, userId, rating, comment } = await req.json();

    if (!placeId || !userId || !rating || !comment) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const review = await prisma.reviewUrbanExplorer.create({
      data: { placeId, userId, rating, comment },
    });

    return NextResponse.json(review, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

// ✅ Get All Reviews (GET)
export async function GET(req: NextRequest) {
  try {
    const reviews = await prisma.reviewUrbanExplorer.findMany({
      select: { id: true, placeId: true, userId: true, rating: true, comment: true, createdAt: true },
    });

    return NextResponse.json(reviews, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
