import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set({
    name: "token",
    value: "",
    path: "/",
    maxAge: 0, // expires immediately
  });

  return res;
}
