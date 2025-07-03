import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { createTaskSchema } from "@/lib/validations";

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const tasks = await prisma.task.findMany({
      include: {
        project: {
          select: {
            name: true,
          },
        },
        createdBy: {
          select: {
            name: true,
            email: true,
          },
        },
        assignees: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get the current user
    const currentUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const body = await request.json();
    const validation = createTaskSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid data", details: validation.error.errors },
        { status: 400 }
      );
    }

    const {
      title,
      description,
      status,
      priority,
      projectId,
      dueDate,
      assigneeIds,
    } = validation.data;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        projectId,
        dueDate,
        createdById: currentUser.id,
        assignees: {
          create: assigneeIds.map((userId) => ({
            userId,
          })),
        },
      },
      include: {
        project: {
          select: {
            name: true,
          },
        },
        createdBy: {
          select: {
            name: true,
            email: true,
          },
        },
        assignees: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
