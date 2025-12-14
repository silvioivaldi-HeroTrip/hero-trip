"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0e1428] text-white">

      {/* HERO SECTION */}
      <section className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-center text-amber-400 sm:text-5xl">
              HeroTRiP — Pre-match GeniusTip
            </h1>

            <p className="text-center text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Il primo servizio di pronostici focalizzato sulle partite asimmetriche,
              inattese, da quota golosa:{" "}
              <span className="text-amber-300 font-semibold">
                i veri cigni neri del betting.
              </span>
            </p>

            <div className="flex justify-center mt-6">
              <Image
                src="/images/landingpage.png"
                alt="HeroTRiP"
                width={400}
                height={400}
                className="drop-shadow-lg"
              />
            </div>

            <div className="flex justify-center">
              <Link
                href="/register"
                className="px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
              >
                Iscriviti per un mese
              </Link>
            </div>

            <p className="text-center mt-4 text-slate-400 text-sm">
              Già registrato?{" "}
              <Link href="/login" className="text-amber-300 underline">
                Accedi qui
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section id="mission" className="border-b border-slate-800 bg-slate-950/80 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-amber-300">La mia missione</h2>

          <p className="text-sm text-slate-200 leading-relaxed">
            La mia missione è dare dignità a un mondo bellissimo — fatto di numeri,
            probabilità e rompicapi matematici — troppo spesso etichettato male dal
            sentiment comune.
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            Qui non troverai listoni “facili”, ma poche previsioni mirate, basate
            sull’asimmetria, sul valore atteso positivo e sulla ricerca dei veri
            cigni neri.
          </p>
        </div>
      </section>

      {/* ANALISI WEEKEND */}
      <section
        id="analisi-weekend"
        className="border-b border-slate-800 bg-slate-950/80 py-16"
      >
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          <h2 className="text-3xl font-bold text-amber-300">
            Analisi del weekend
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed">
            Monitoriamo centinaia di partite. Ne selezioniamo pochissime.
            Rendiamo il processo visibile.
          </p>

          {/* CONTESTO */}
          <div className="space-y-3">
            <p className="text-sm text-slate-200 leading-relaxed">
              Nel corso del weekend abbiamo analizzato circa{" "}
              <strong>400 partite</strong>, distribuite su più leghe e mercati.
              Di queste, solo <strong>4 eventi</strong> hanno superato tutti i
              nostri filtri.
            </p>

            <p className="italic text-amber-300 text-sm">
              Selezionare è più difficile che indovinare.
              <br />
              Ed è per questo che lo facciamo.
            </p>

            <p className="italic text-slate-400 text-sm">
              Non tutto ciò che può essere giocato, va giocato.
            </p>
          </div>

          {/* REGOLE */}
          <div className="space-y-3">
            <p className="text-sm text-slate-200 leading-relaxed">
              Il nostro lavoro non consiste nel prevedere ogni risultato.
              Consiste nel costruire un insieme di regole che possiamo rispettare
              anche quando il risultato non ci premia.
            </p>

            <p className="italic text-slate-300 text-sm border-l-2 border-amber-400 pl-4">
              “Se perdiamo con le nostre regole, possiamo conviverci.
              <br />
              Se perdiamo con quelle degli altri, no.”
            </p>
          </div>

          {/* CIGNI */}
          <div className="space-y-3">
            <p className="text-sm text-slate-200 leading-relaxed">
              Nel nostro approccio la perdita non è un errore. È una variabile
              prevista, accettata e integrata nel metodo.
            </p>

            <p className="text-sm text-slate-200 leading-relaxed">
              Dove il sentiment vede il “difficile”, noi cerchiamo valore.
              Scegliamo eventi che il mercato percepisce come rari:
              sono questi “cigni” a creare il nostro vantaggio informativo.
            </p>

            <p className="text-sm text-slate-200 leading-relaxed">
              Quote di questo tipo non servono a inseguire il colpo,
              ma a costruire una gestione del rischio più razionale.
            </p>

            <p className="font-semibold text-amber-300 text-sm">
              Noi cerchiamo i cigni.
              <br />
              Sono difficili.
              <br />
              Ma pagano di più.
            </p>
          </div>

          {/* SOSTENIBILITÀ */}
          <div className="space-y-3">
            <p className="italic text-slate-300 text-sm border-l-2 border-amber-400 pl-4">
              “Il problema non è prevedere il futuro,
              <br />
              ma sopravvivere abbastanza a lungo da incontrarlo.”
            </p>

            <p className="italic text-slate-400 text-sm">
              “Non è che siamo più intelligenti.
              <br />
              È che siamo meno stupidi più a lungo.”
            </p>
          </div>

          {/* NUMERI PLACEHOLDER */}
          <div className="space-y-2 pt-4">
            <p className="text-sm text-slate-300 font-semibold">
              Numeri del weekend (in aggiornamento)
            </p>

            <ul className="text-sm text-slate-400 space-y-1">
              <li>• Partite monitorate: ~400</li>
              <li>• Eventi selezionati: 4</li>
              <li>• Quote medie: in aggiornamento</li>
              <li>• ROI simulato a stake fisso: in aggiornamento</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LA MIA STORIA */}
      <section id="about-me" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-4xl px-6 py-12 space-y-4">
          <h2 className="text-xl font-semibold text-amber-300">
            La mia storia
          </h2>

          <p className="text-sm leading-relaxed text-slate-200">
            HeroTRiP nasce da anni di studio, test, errori e tentativi.
            Dalla matematica alla probabilità, fino all’uso dell’intelligenza
            artificiale per rendere verificabile ciò che prima era solo intuizione.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} HeroTRiP — Tutti i diritti riservati.
      </footer>
    </main>
  );
}
