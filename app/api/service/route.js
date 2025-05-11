import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT service_id, provider_id, category_id, service_name, description, price, duration, created_at FROM Service ORDER BY service_name"
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
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
      "INSERT INTO Service (provider_id, category_id, service_name, description, price, duration) VALUES (?, ?, ?, ?, ?, ?)",
      [
        provider_id,
        category_id,
        service_name.trim(),
        description || null,
        price,
        duration,
      ]
    );

    return NextResponse.json(
      { message: "Service created", service_id: result.insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating service:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
