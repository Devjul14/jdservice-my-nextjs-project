import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params }) {
  const id = params.id;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const [rows] = await db.query(
      "SELECT category_id, category_name, description FROM ServiceCategory WHERE category_id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const id = params.id;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

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
      "UPDATE ServiceCategory SET category_name = ?, description = ? WHERE category_id = ?",
      [category_name.trim(), description || null, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Category not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Category updated" });
  } catch (error) {
    console.error("Error updating category:", error);
    if (error.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { error: "Category name already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const id = params.id;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const [result] = await db.query(
      "DELETE FROM ServiceCategory WHERE category_id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Category deleted" });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
