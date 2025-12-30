import { NextResponse } from "next/server";
import users from "../../../data/users.json";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = users.find(
    (u: any) => u.email === email && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: "auth",
    value: "true",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
  });

  return response;
}
