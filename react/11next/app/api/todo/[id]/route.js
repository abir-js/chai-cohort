import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/mongodb";
import Todo from "@/models/Todo";

export async function GET(request, context) {
  try {
    const { id } = await context.params;
    await connectToDatabase()

    
  } catch (error) {}
}
