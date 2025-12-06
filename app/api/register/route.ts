import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // 1️⃣ CONFIG SMTP (Vercel ENV)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2️⃣ EMAIL DI BENVENUTO ALL'UTENTE
    await transporter.sendMail({
      from: `"HeroTRiP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Benvenuto in HeroTRiP!",
      html: `
        <h2>Ciao ${name}!</h2>
        <p>Benvenuto nel progetto <strong>HeroTRiP</strong>! 🚀</p>
        <p>Hai ora accesso ai contenuti esclusivi e ai pre-match GeniusTip.</p>
      `,
    });

    // 3️⃣ EMAIL DI NOTIFICA A TE (ADMIN)
    await transporter.sendMail({
      from: `"HeroTRiP - Notifica" <${process.env.EMAIL_USER}>`,
      to: "silvio.ivaldi@gmail.com",
      subject: "🔔 Nuovo utente registrato su HeroTRiP",
      html: `
        <h3>Nuova registrazione!</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <br>
        <p>Aggiungi questo utente al file <code>users.json</code>.</p>
      `,
    });

    return NextResponse.json(
      { message: "Registrazione completata ed email inviate!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Errore SMTP:", error);
    return NextResponse.json(
      { error: "Errore nell'invio delle email" },
      { status: 500 }
    );
  }
}
