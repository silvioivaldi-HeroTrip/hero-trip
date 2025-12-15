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

      {/* ================= HERO ================= */}
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

          <div className="flex justify-center gap-4">
            <Link
              href="/register"
              className="px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
            >
              Iscriviti
            </Link>

            <Link
              href="/login"
              className="px-6 py-3 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-800 transition"
            >
              Accedi
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TAB SECTION ================= */}
      <section className="bg-slate-950/80 py-16 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6">

          <Tabs>
            {(active: string) => (
              <>
                {/* ===== MISSIONE ===== */}
                {active === "Missione" && (
                  <div className="max-w-3xl text-sm text-slate-200 leading-relaxed space-y-4">
                    <p>
                      La mia missione è dare dignità a un mondo complesso e affascinante,
                      fatto di numeri, probabilità e decisioni imperfette, troppo spesso
                      ridotto a semplice intrattenimento.
                    </p>

                    <p>
                      Qui non troverai promesse di vincite facili né giocate quotidiane.
                      Troverai un processo: osservazione, analisi, selezione estrema
                      e disciplina.
                    </p>

                    <p>
                      Monitoriamo centinaia di partite ogni settimana,
                      ma ne scegliamo pochissime.
                      Selezionare è più difficile che indovinare,
                      ed è per questo che lo facciamo.
                    </p>

                    <p>
                      Nel nostro approccio la perdita non è un errore.
                      È una variabile prevista, accettata e integrata nel metodo.
                    </p>
                  </div>
                )}

                {/* ===== CHI SONO ===== */}
                {active === "Chi sono" && (
                  <div className="max-w-3xl text-sm text-slate-200 leading-relaxed space-y-4">
                    <p>
                      Non sono un tipster professionista né un personaggio costruito
                      per i social. Sono una persona che da anni studia probabilità,
                      modelli decisionali e mercati imperfetti.
                    </p>

                    <p>
                      Questo progetto nasce da tentativi, errori, studio e test continui.
                      Ho perso, ho sbagliato, ho cambiato approccio più volte.
                      Ed è proprio questo percorso che ha dato forma al metodo attuale.
                    </p>

                    <p>
                      HeroTRiP non nasce per impressionare,
                      ma per essere sostenibile nel tempo.
                      Perché nel lungo periodo non vince chi ha ragione una volta,
                      ma chi riesce a restare coerente con le proprie regole.
                    </p>
                  </div>
                )}

                {/* ===== PROGETTO ===== */}
                {active === "Progetto" && (
                  <div className="max-w-3xl text-sm text-slate-200 leading-relaxed space-y-4">
                    <p>
                      Il progetto si basa su selezione estrema,
                      ricerca di asimmetrie e gestione razionale del rischio.
                    </p>

                    <p>
                      Lavoriamo spesso con quote medio-alte.
                      Non perché cerchiamo il “difficile”,
                      ma perché dove il mercato percepisce difficoltà
                      spesso si nasconde valore.
                    </p>

                    <p>
                      Cerchiamo i cigni.
                      Sono rari, sono difficili,
                      ma quando arrivano pagano di più.
                    </p>
                  </div>
                )}

                {/* ===== ANALISI ===== */}
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

                {/* ===== PERFORMANCE ===== */}
                {active === "Performance" && (
                  <PerformanceChart weekends={weekends} />
                )}

                {/* ===== FEEDBACK ===== */}
                {active === "Cosa dicono di me" && (
                  <div className="max-w-3xl text-sm text-slate-400 leading-relaxed">
                    <p>
                      Questa sezione raccoglierà feedback reali,
                      verificabili e contestualizzati.
                    </p>
                  </div>
                )}
              </>
            )}
          </Tabs>

        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
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

      {/* ================= FOOTER ================= */}
      <footer className="py-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} HeroTRiP — Tutti i diritti riservati.
      </footer>

    </main>
  );
}
