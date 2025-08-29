import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function GET() {
  try {
    await connectToDatabase();
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (error) {
    NextResponse.json({ error: "Failed to fetched todos" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await request.json();
    const { title } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    await connectToDatabase();

    const todo = await Todo.create({ title });
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Failed to create todos" }, { status: 500 });
  }
}
