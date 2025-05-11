import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(request, { params }) {
  const id = params.id;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    const [rows] = await db.query(
      "SELECT service_id, provider_id, category_id, service_name, description, price, duration, created_at FROM Service WHERE service_id = ?",
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error("Error fetching service:", error);
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
    const {
      provider_id,
      category_id,
      service_name,
      description,
      price,
      duration,
    } = body;

    if (!service_name || service_name.trim() === "") {
      return NextResponse.json(
        { error: "Service name is required" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      "UPDATE Service SET provider_id = ?, category_id = ?, service_name = ?, description = ?, price = ?, duration = ? WHERE service_id = ?",
      [
        provider_id,
        category_id,
        service_name.trim(),
        description || null,
        price,
        duration,
        id,
      ]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Service not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Service updated" });
  } catch (error) {
    console.error("Error updating service:", error);
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
      "DELETE FROM Service WHERE service_id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Service deleted" });
  } catch (error) {
    console.error("Error deleting service:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
