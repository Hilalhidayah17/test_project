import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { toast } from "react-toastify";

// // Middleware to protect routes and verify JWT tokens
// i use jose cause im not using node backend and therefore jwt couldnt work properly so i need library like jose who could work in edge runtime

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev_secret");

async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (err) {
    toast.error("Invalid token");
    console.log(err);
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const PUBLIC_PATHS = ["/login", "/api/auth/login", "/api/auth/logout"];

  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const payload = await verifyToken(token);

  if (!payload) {
    console.log("❌ Invalid token");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/users/:path*"],
};
