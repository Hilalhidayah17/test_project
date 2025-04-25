import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username === "testuser" && password === "testpass") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });

    const res = NextResponse.json({ success: true });

    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
