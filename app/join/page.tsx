"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function JoinPage() {
  const [email, setEmail] = useState("");

  const [privacyViewed, setPrivacyViewed] = useState(false);
  const [disclaimerViewed, setDisclaimerViewed] = useState(false);

  const [privacyOk, setPrivacyOk] = useState(false);
  const [disclaimerOk, setDisclaimerOk] = useState(false);

  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

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
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md px-4 py-3 bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
          />

          {/* PRIVACY */}
          <div className="text-sm space-y-2">
            <button
              type="button"
              className="underline text-neutral-300 hover:text-white"
              onClick={() => {
                setShowPrivacy(true);
                setPrivacyViewed(true);
              }}
            >
              Leggi la Privacy Policy
            </button>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                disabled={!privacyViewed}
                checked={privacyOk}
                onChange={(e) => setPrivacyOk(e.target.checked)}
                className="mt-1"
              />
              <span className="text-neutral-300">
                Accetto la Privacy Policy
                {!privacyViewed && (
                  <span className="text-neutral-500">
                    {" "} (leggila per continuare)
                  </span>
                )}
              </span>
            </label>
          </div>

          {/* DISCLAIMER */}
          <div className="text-sm space-y-2">
            <button
              type="button"
              className="underline text-neutral-300 hover:text-white"
              onClick={() => {
                setShowDisclaimer(true);
                setDisclaimerViewed(true);
              }}
            >
              Leggi il Disclaimer
            </button>

            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                disabled={!disclaimerViewed}
                checked={disclaimerOk}
                onChange={(e) => setDisclaimerOk(e.target.checked)}
                className="mt-1"
              />
              <span className="text-neutral-300">
                Accetto il Disclaimer
                {!disclaimerViewed && (
                  <span className="text-neutral-500">
                    {" "} (leggilo per continuare)
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

      {/* MODAL PRIVACY */}
      {showPrivacy && (
        <Modal onClose={() => setShowPrivacy(false)} title="Privacy Policy">
          <iframe src="/privacy" className="w-full h-[70vh]" />
        </Modal>
      )}

      {/* MODAL DISCLAIMER */}
      {showDisclaimer && (
        <Modal onClose={() => setShowDisclaimer(false)} title="Disclaimer">
          <iframe src="/disclaimer" className="w-full h-[70vh]" />
        </Modal>
      )}
    </main>
  );
}

/* MODAL COMPONENT */
function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-neutral-900 text-neutral-100 w-full max-w-3xl rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-700">
          <h2 className="font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
