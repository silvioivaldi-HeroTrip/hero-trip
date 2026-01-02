"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://srjkxemlpuvmwnwxetlh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
);

export default function JoinPage() {
  const [email, setEmail] = useState("");

  const [privacyViewed, setPrivacyViewed] = useState(false);
  const [disclaimerViewed, setDisclaimerViewed] = useState(false);

  const [privacyOk, setPrivacyOk] = useState(false);
  const [disclaimerOk, setDisclaimerOk] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const now = new Date().toISOString();

    const { error } = await supabase.from("leads").insert([
      {
        email,
        privacy_accepted: privacyOk,
        disclaimer_accepted: disclaimerOk,
        privacy_accepted_at: privacyOk ? now : null,
        disclaimer_accepted_at: disclaimerOk ? now : null,
        privacy_version: "v1",
        disclaimer_version: "v1",
      },
    ]);

    if (error) {
      setError("Email già registrata o errore tecnico.");
    } else {
      setSuccess(true);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center px-6 py-24">
      <img src="/genius.png" alt="Genius Tip" className="w-48 mb-8" />

      <p className="italic text-neutral-400 mb-8 text-center">
        Il Genius dietro il metodo Cigni Neri
      </p>

      <h1 className="text-3xl font-bold mb-10 text-center">
        Unisciti a Cigni Neri
      </h1>

      {success ? (
        <p className="text-lg font-semibold">
          Registrazione completata 🦢
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-6"
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md px-4 py-3 bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />

          {/* PRIVACY */}
          <div className="text-sm text-neutral-300 space-y-2">
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-100"
              onClick={() => setPrivacyViewed(true)}
            >
              Leggi la Privacy Policy
            </a>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                disabled={!privacyViewed}
                checked={privacyOk}
                onChange={(e) => setPrivacyOk(e.target.checked)}
                className="mt-1"
              />
              <span>
                Accetto la Privacy Policy
                {!privacyViewed && (
                  <span className="text-neutral-500">
                    {" "} (aprila per continuare)
                  </span>
                )}
              </span>
            </label>
          </div>

          {/* DISCLAIMER */}
          <div className="text-sm text-neutral-300 space-y-2">
            <a
              href="/disclaimer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-100"
              onClick={() => setDisclaimerViewed(true)}
            >
              Leggi il Disclaimer
            </a>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                disabled={!disclaimerViewed}
                checked={disclaimerOk}
                onChange={(e) => setDisclaimerOk(e.target.checked)}
                className="mt-1"
              />
              <span>
                Accetto il Disclaimer
                {!disclaimerViewed && (
                  <span className="text-neutral-500">
                    {" "} (aprilo per continuare)
                  </span>
                )}
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-neutral-100 py-3 font-bold text-neutral-900 hover:bg-neutral-200 transition"
          >
            Registrati
          </button>

          {error && (
            <p className="text-sm text-red-400 text-center">
              {error}
            </p>
          )}
        </form>
      )}
    </main>
  );
}
