import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(request) {
  try {
    const { name, email, phone, password, address } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if email exists
    const [existing] = await db.query(
      "SELECT customer_id FROM Customer WHERE email = ?",
      [email]
    );
    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    // Insert customer
    const [result] = await db.query(
      "INSERT INTO Customer (name, email, phone, password, address) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone || "", password, address || ""]
    );

    return NextResponse.json(
      {
        message: "Customer registered successfully",
        customer_id: result.insertId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Customer registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
