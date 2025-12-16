import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 🔓 ROTTE SEMPRE ACCESSIBILI
  if (
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // 🔒 PROTEGGIAMO SOLO /matches
  if (pathname.startsWith("/matches")) {
    const isLoggedIn = req.cookies.get("auth")?.value === "true";

    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/matches/:path*"],
};
