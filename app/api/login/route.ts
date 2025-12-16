import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // 👉 credenziali base (per ora)
  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const res = NextResponse.json({ success: true });

    // 🔑 COOKIE DI SESSIONE
    res.cookies.set("auth", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });

    return res;
  }

  return NextResponse.json(
    { success: false },
    { status: 401 }
  );
}
