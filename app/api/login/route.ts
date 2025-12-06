import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, message: "Email e password obbligatorie." },
        { status: 400 }
      );
    }

    // Percorso del file users.json nella root del progetto
    const filePath = path.join(process.cwd(), "users.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { ok: false, message: "Users.json non trovato." },
        { status: 500 }
      );
    }

    const fileData = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileData);

    const found = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!found) {
      return NextResponse.json(
        { ok: false, message: "Credenziali non valide." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Login effettuato.",
      user: { email: found.email }
    });

  } catch (error) {
    console.error("Errore login:", error);
    return NextResponse.json(
      { ok: false, message: "Errore interno login." },
      { status: 500 }
    );
  }
}
