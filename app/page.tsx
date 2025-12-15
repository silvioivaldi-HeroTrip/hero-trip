"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Tabs from "@/components/Tabs";
import WeekendCard from "@/components/WeekendCard";
import PerformanceChart from "@/components/PerformanceChart";
import weekends from "@/data/weekends.json";

export default function HomePage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0e1428] text-white">

      {/* HERO — NON TOCCATO */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-4xl px-4 py-12 space-y-6 text-center">
          <h1 className="text-4xl font-extrabold text-amber-400 sm:text-5xl">
            HeroTRiP
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Analizziamo centinaia di partite.
            <br />
            Ne selezioniamo pochissime.
            <br />
            Rendiamo il processo verificabile.
          </p>

          <Image
            src="/images/landingpage.png"
            alt="HeroTRiP"
            width={360}
            height={360}
            className="mx-auto drop-shadow-lg"
          />

          <Link
            href="/register"
            className="inline-block px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
          >
            Iscriviti per un mese
          </Link>
        </div>
      </section>

      {/* BLOCCO TAB */}
      <section className="bg-slate-950/80 py-16 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">

          <Tabs>
            {(active: string) => (
              <>
                {active === "Missione" && (
                  <div className="max-w-3xl text-slate-200 space-y-3">
                    <p>
                      La mia missione è dare dignità a un mondo fatto di numeri,
                      probabilità e disciplina.
                    </p>
                    <p>
                      Poche scelte, selezionate con metodo, accettando
                      la perdita come parte del processo.
                    </p>
                  </div>
                )}

                {active === "Chi sono" && (
                  <div className="max-w-3xl text-slate-200 space-y-3">
                    <p>
                      Sono HeroTRiP. Studio, testo, sbaglio e documento.
                    </p>
                    <p>
                      Questo progetto nasce per rendere verificabile
                      ciò che normalmente resta opinione.
                    </p>
                  </div>
                )}

                {active === "Progetto" && (
                  <div className="max-w-3xl text-slate-200 space-y-3">
                    <p>
                      Il progetto si basa su selezione estrema,
                      asimmetrie di quota e gestione del rischio.
                    </p>
                    <p>
                      Non cerchiamo di vincere spesso.
                      Cerchiamo di vincere bene.
                    </p>
                  </div>
                )}

                {active === "Analisi" && (
                  <div className="flex gap-6 overflow-x-auto pb-4">
                    {weekends.map((w) => (
                      <WeekendCard
                        key={w.id}
                        data={w}
                        onImage={setLightbox}
                      />
                    ))}
                  </div>
                )}

                {active === "Performance" && (
                  <PerformanceChart weekends={weekends} />
                )}

                {active === "Cosa dicono di me" && (
                  <p className="text-slate-400">
                    Feedback e testimonianze in arrivo.
                  </p>
                )}
              </>
            )}
          </Tabs>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Screenshot giocata"
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
          />
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} HeroTRiP — Tutti i diritti riservati.
      </footer>

    </main>
  );
}
