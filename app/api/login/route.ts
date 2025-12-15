import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 👉 QUI METTI LA TUA LOGICA REALE
    // per ora esempio semplice
    const VALID_EMAIL = "admin@herotrip.com";
    const VALID_PASSWORD = "password123";

    if (email !== VALID_EMAIL || password !== VALID_PASSWORD) {
      return NextResponse.json(
        { error: "Credenziali non valide" },
        { status: 401 }
      );
    }

    // ✅ Login OK → settiamo cookie di sessione
    const response = NextResponse.json({ ok: true });

    response.cookies.set("hero-auth", "true", {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      // secure: true, // puoi attivarlo quando sei solo in HTTPS
    });

    return response;
  } catch (err) {
    return NextResponse.json(
      { error: "Errore server" },
      { status: 500 }
    );
  }
}
