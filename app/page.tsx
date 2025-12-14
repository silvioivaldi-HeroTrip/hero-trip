"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0e1428] text-white">

      {/* HERO */}
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

      {/* METODO */}
      <section className="border-b border-slate-800 bg-slate-950/80 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-amber-300">Il metodo</h2>

          <p className="text-sm text-slate-200 leading-relaxed">
            Il nostro lavoro non consiste nel prevedere ogni risultato.
            Consiste nel costruire un insieme di regole che possiamo
            rispettare anche quando il risultato non ci premia.
          </p>

          <p className="italic text-slate-300 border-l-2 border-amber-400 pl-4 text-sm">
            “Se perdiamo con le nostre regole, possiamo conviverci.
            <br />
            Se perdiamo con quelle degli altri, no.”
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            Nel nostro approccio la perdita non è un errore.
            È una variabile prevista, accettata e integrata nel metodo.
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            Dove il mercato vede il “difficile”, noi cerchiamo valore.
            Scegliamo eventi che il mercato percepisce come rari:
            sono questi “cigni” a creare il nostro vantaggio informativo.
          </p>

          <p className="italic text-slate-400 text-sm">
            “Il problema non è prevedere il futuro,
            ma sopravvivere abbastanza a lungo da incontrarlo.”
          </p>
        </div>
      </section>

      {/* ANALISI WEEKEND */}
      <section className="border-b border-slate-800 bg-slate-950/80 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-amber-300">
            Analisi del Weekend
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4">

            {/* SCORE CARD WEEKEND */}
            <div className="min-w-[320px] max-w-[320px] bg-[#111936] rounded-xl p-5 space-y-4 border border-slate-800">

              <h3 className="text-lg font-semibold text-amber-300">
                Weekend 13–15 Dicembre 2025
              </h3>

              <ul className="text-sm text-slate-300 space-y-1">
                <li>Partite analizzate: <strong>400</strong></li>
                <li>Eventi selezionati: <strong>4</strong></li>
                <li>Eventi vinti: <strong>3</strong></li>
                <li>Eventi persi: <strong>1</strong></li>
              </ul>

              <div className="border-t border-slate-700 pt-3 text-sm text-slate-300 space-y-1">
                <p><strong>Stake fisso:</strong> 10€</p>
                <p>Capitale investito: <strong>40€</strong></p>
                <p>Ritorno totale: <strong>130,50€</strong></p>
                <p className="text-green-400 font-semibold">
                  ROI: +226%
                </p>
              </div>

              <p className="text-amber-300 text-sm font-semibold">
                Noi cerchiamo i cigni.
                <br />
                Sono difficili.
                <br />
                Ma pagano di più.
              </p>

              {/* SCREENSHOT GRID */}
              <div className="grid grid-cols-2 gap-2 pt-2">

                <Image
                  src="/images/weekends/2025-12-13/bet-1-ingolstadt-1860.jpg"
                  alt="Ingolstadt Monaco 1860"
                  width={150}
                  height={150}
                  className="rounded-md cursor-pointer"
                  onClick={() =>
                    setSelectedImage("/images/weekends/2025-12-13/bet-1-ingolstadt-1860.jpg")
                  }
                />

                <Image
                  src="/images/weekends/2025-12-13/bet-2-cercle-mechelen.jpg"
                  alt="Cercle Brugge Mechelen"
                  width={150}
                  height={150}
                  className="rounded-md cursor-pointer"
                  onClick={() =>
                    setSelectedImage("/images/weekends/2025-12-13/bet-2-cercle-mechelen.jpg")
                  }
                />

                {/* VANSPOR CON BADGE */}
                <div className="relative">
                  <span className="absolute top-1 left-1 bg-amber-400 text-black text-xs font-bold px-2 py-0.5 rounded-md z-10">
                    Quota 5.75
                  </span>

                  <Image
                    src="/images/weekends/2025-12-13/bet-3-vanspor-umraniye.jpg"
                    alt="Vanspor Umraniyespor"
                    width={150}
                    height={150}
                    className="rounded-md cursor-pointer"
                    onClick={() =>
                      setSelectedImage("/images/weekends/2025-12-13/bet-3-vanspor-umraniye.jpg")
                    }
                  />
                </div>

                <Image
                  src="/images/weekends/2025-12-13/bet-multipla.jpg"
                  alt="Multipla weekend"
                  width={150}
                  height={150}
                  className="rounded-md cursor-pointer"
                  onClick={() =>
                    setSelectedImage("/images/weekends/2025-12-13/bet-multipla.jpg")
                  }
                />

              </div>
            </div>

            {/* PLACEHOLDER FUTURO */}
            <div className="min-w-[320px] max-w-[320px] flex items-center justify-center border border-dashed border-slate-700 rounded-xl text-slate-500 text-sm">
              Prossimo weekend in arrivo
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} HeroTRiP — Tutti i diritti riservati.
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Screenshot giocata"
              width={900}
              height={900}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      )}

    </main>
  );
}
