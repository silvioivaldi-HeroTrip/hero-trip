import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1️⃣ Rotte PUBBLICHE → sempre consentite
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/login") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon")
  ) {
    return NextResponse.next();
  }

  // 2️⃣ Controllo autenticazione SOLO per rotte protette
  if (pathname.startsWith("/matches")) {
    const isLoggedIn = request.cookies.get("auth")?.value === "true";

    if (!isLoggedIn) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  // 3️⃣ Default
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
