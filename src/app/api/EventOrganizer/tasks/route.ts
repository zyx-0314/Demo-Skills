import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/../prisma/generated/postgresql2";

const prisma = new PrismaClient();

// ✅ Create a New Task (POST)
export async function POST(req: NextRequest) {
  try {
    const { userId, title, description, dueDate, status } = await req.json();

    // Check for missing required fields
    if (!userId || !title || !description || !dueDate || !status) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Verify if the user exists
    const userExists = await prisma.eventOrganizerUser.findUnique({ where: { id: userId } });
    if (!userExists) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Create new task
    const task = await prisma.eventOrganizerTask.create({
      data: { userId, title, description, dueDate, status },
    });

    return NextResponse.json(task, { status: 201 });

  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json({ error: "Failed to create task" }, { status: 500 });
  }
}

// ✅ Get All Tasks (GET)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    // Fetch tasks for a specific user
    const tasks = userId
      ? await prisma.eventOrganizerTask.findMany({ where: { userId } })
      : await prisma.eventOrganizerTask.findMany();

    return NextResponse.json(tasks, { status: 200 });

  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ error: "Failed to fetch tasks" }, { status: 500 });
  }
}
