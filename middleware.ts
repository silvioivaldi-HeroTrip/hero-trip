import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get("hero-auth");

  if (request.nextUrl.pathname.startsWith("/matches")) {
    if (!isLogged) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/matches/:path*"],
};
