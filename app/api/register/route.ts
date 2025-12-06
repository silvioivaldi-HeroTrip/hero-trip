import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: "Email mancante" });
    }

    // 🔥 CONFIGURAZIONE CORRETTA PER VERCEL + GMAIL
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,          // smtp.gmail.com
      port: Number(process.env.EMAIL_PORT),  // 465
      secure: true,                           // Gmail richiede secure su porta 465
      auth: {
        user: process.env.EMAIL_USER,        // tua email Gmail
        pass: process.env.EMAIL_PASS,        // App Password
      },
    });

    // 🔥 INVIO EMAIL
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Registrazione completata",
      html: `
        <h2>Benvenuto su HeroTRiP!</h2>
        <p>La tua registrazione è avvenuta con successo.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Errore Nodemailer:", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
