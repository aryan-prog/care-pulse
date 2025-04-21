import { NextResponse } from "next/server";
import { createUser } from "@/lib/actions/patient.actions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Received body:", body);

    const newUser = await createUser(body);
    console.log("✅ Created user:", newUser);

    if (!newUser) {
      return NextResponse.json({ error: "User creation failed" }, { status: 500 });
    }

    return NextResponse.json(newUser);
  } catch (error) {
    console.error("🧨 Error in API route:", error);
    return NextResponse.json(
      { error: "Internal server error", details: (error as Error).message },
      { status: 500 }
    );
  }
}
