import { NextRequest, NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

// Funzione helper per validare i dati
function validate(data: any) {
  if (!data) return "Nessun dato ricevuto";
  if (!data.email) return "Email mancante";
  if (!data.name) return "Nome mancante";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validazione
    const error = validate(body);
    if (error) {
      return NextResponse.json(
        { success: false, error },
        { status: 400 }
      );
    }

    // Config transport — FUNZIONA SU VERCEL
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Email da inviare
    const mailOptions = {
      from: `"HeroTrip Register" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,  // dove ti arrivano le iscrizioni
      subject: "Nuova registrazione HeroTrip",
      text: `
Nuovo utente registrato:

Nome: ${body.name}
Email: ${body.email}
      `,
    };

    // Invia email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Registrazione inviata correttamente" },
      { status: 200 }
    );

  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        error: err.message || "Errore interno durante la registrazione",
      },
      { status: 500 }
    );
  }
}
