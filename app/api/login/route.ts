import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
    email === process.env.EMAIL_USER &&
    password === process.env.EMAIL_PASS
  ) {
    const res = NextResponse.json({ success: true });

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
