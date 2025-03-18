import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/firebaseAdmin";

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: "ID token is required" }, { status: 400 });
    }

    // Verify Firebase ID token
    const decodedToken = await auth.verifyIdToken(idToken);
    return NextResponse.json({ uid: decodedToken.uid, email: decodedToken.email }, { status: 200 });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
