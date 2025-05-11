import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function PUT(request, { params }) {
  const id = params.id;
  try {
    if (!id || isNaN(parseInt(id))) {
      return NextResponse.json(
        { error: "Invalid provider ID" },
        { status: 400 }
      );
    }
    // Update approved status to 1
    const [result] = await db.query(
      "UPDATE ServiceProvider SET approved = 1 WHERE provider_id = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: "Service Provider not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Service Provider approved" });
  } catch (error) {
    console.error("Admin approval error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
