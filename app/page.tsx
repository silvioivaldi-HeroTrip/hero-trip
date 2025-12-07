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
              inattese, da quota golosa: <span className="text-amber-300 font-semibold">
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
            Ciao e benvenuto nella mia pagina, sono HeroTRiP e ho lavorato negli ultimi mesi/anni
            per realizzare qualcosa di innovativo e profittevole nel mondo del betting.
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            La mia missione è dare dignità a un mondo bellissimo — fatto di numeri, probabilità
            e intriganti rompicapi matematici — troppo spesso etichettato male dal sentiment comune.
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            Qui non troverai listoni “facili”, ma poche previsioni mirate, basate sul concetto
            di asimmetria, valore atteso positivo e sulla ricerca di vere bombe di quota.
          </p>

          <p className="text-sm text-slate-200 leading-relaxed">
            Se ti affidi a me, ti affidi a un approccio imprenditoriale, ragionato e basato su
            metriche reali, risultati tracciabili e disciplina.
          </p>
        </div>
      </section>

      {/* LA MIA STORIA — NUOVA SEZIONE */}
      <section id="about-me" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-4xl px-6 py-12 space-y-4">

          <h2 className="text-xl font-semibold text-amber-300">La mia storia</h2>

          <p className="text-sm leading-relaxed text-slate-200">
            E ora è bene che tu sappia un po' di me: non sono un professionista ma un appassionato
            di matematica, probabilità e “sorprese”.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Per anni ho provato di tutto (GoalProfit, Packball, FootyStat, formule su Excel,
            calcoli XG ed Elo…). Ho seguito persone che nel panorama italiano ritengo competenti
            e seri: Amato, ma soprattutto <strong>Roger Fazio</strong>, il mio vero mentore —
            sempre contenuti di altissimo livello, idee e approcci innovativi.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Ho letto libri, sperimentato strategie e money management. Ma avevo sempre quella
            sensazione di “manca qualcosa”, la voglia di spingermi oltre, di trovare la mia strada,
            i miei pronostici.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Così ho messo tutto me stesso in questo progetto quando ho capito che l’intelligenza
            artificiale poteva abbattere barriere e trasformare le mille idee che avevo in qualcosa
            di verificabile e tangibile.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Da qui nasce HeroTRiP: un percorso fatto di test, machine learning, nuove metriche —
            spesso controintuitive — ideate per esplorare il mondo delle probabilità alla ricerca
            dei veri “cigni neri”.
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
