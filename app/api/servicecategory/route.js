
import { NextResponse } from "next/server";
import db from "../../../lib/db"; 


export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT category_id, category_name, icon, description FROM ServiceCategory ORDER BY category_name"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { category_name, description } = body;
    if (!category_name || category_name.trim() === "") {
      return NextResponse.json(
        { error: "Category name is required" },
        { status: 400 }
      );
    }
    const [result] = await db.query(
      "INSERT INTO ServiceCategory (category_name, description) VALUES (?, ?)",
      [category_name.trim(), description || null]
    );
    return NextResponse.json(
      { message: "Category created", category_id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating category:", error);
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { error: "Category name already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
