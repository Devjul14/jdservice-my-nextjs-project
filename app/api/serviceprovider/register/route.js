import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { name, email, phone, address, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if email exists
    const [existing] = await db.query(
      "SELECT provider_id FROM ServiceProvider WHERE email = ?",
      [email]
    );
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Insert service provider with approved = 0
    const [result] = await db.query(
      "INSERT INTO ServiceProvider (name, email, phone, address, password, approved) VALUES (?, ?, ?, ?, ?, 0)",
      [name, email, phone || "", address || "", password]
    );

    return NextResponse.json(
      {
        message:
          "Service Provider registered successfully, pending admin approval",
        provider_id: result.insertId,
        approved: false,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service Provider registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
