"use client";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!privacy) {
      setMessage("Devi accettare privacy e disclaimer.");
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      setMessage("Registrazione completata!");
      setEmail("");
      setPassword("");
      setPrivacy(false);
    } else {
      setMessage("Errore nella registrazione.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1428] flex items-center justify-center p-4">
      <div className="bg-[#1a233a] p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-700">

        {/* 🔥 IMMAGINE HEADER */}
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/images/Register.png"
            width={180}
            height={180}
            alt="HeroTRiP Logo"
            className="rounded-md shadow-md"
          />
        </div>

        <h1 className="text-2xl font-bold text-white text-center mb-4">
          Registrati
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 bg-[#0e1428] border border-gray-600 rounded text-white"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div>
            <label className="text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 bg-[#0e1428] border border-gray-600 rounded text-white"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={privacy}
              onChange={() => setPrivacy(!privacy)}
            />
            <span className="text-gray-300 text-sm">
              Accetto la privacy e il disclaimer sul gioco responsabile.
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded font-bold"
          >
            Crea Account
          </button>

        </form>

        {message && (
          <p className="text-center text-yellow-400 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}
