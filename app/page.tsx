import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      {/* HERO */}
      <section className="bg-[#020617]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:items-center">
          
          {/* Testo */}
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              No scam • Solo numeri e metodo
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Benvenuto nel progetto{" "}
              <span className="text-amber-400">HeroTRiP</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              Analisi calcistiche innovative basate su numeri, probabilità, statistica avanzata e concetti di asimmetria delle quote.
              Il betting può diventare un business serio: poche prediction, quelle buone, basate sulla metrica proprietaria della{" "}
              <span className="font-semibold text-amber-300">“bomba”</span>.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              
              {/* 👉 Pulsante che ora va alla pagina REGISTER */}
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-amber-400 transition"
              >
                Iscriviti per un mese e valuta tu
              </Link>

              <span className="text-xs text-slate-400 sm:self-center">
                Nessuna promessa di vincite. Solo dati, metodo e trasparenza.
              </span>
            </div>

            {/* 👉 Link Login */}
            <div className="mt-4">
              <Link href="/login" className="text-amber-400 hover:underline text-sm">
                Login per visualizzare i matches →
              </Link>
            </div>
          </div>

          {/* Immagine HERO */}
          <div className="flex-1">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
              <Image
                src="/LagagnaTemplate.png"
                alt="HeroTRiP - Quantum Trip Tip"
                width={768}
                height={768}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* MISSION */}
      <section id="mission" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-4xl px-4 py-12 space-y-4">

          <h2 className="text-xl font-semibold text-amber-300">La mia missione</h2>

          <p className="text-sm leading-relaxed text-slate-200">
            Ciao e benvenuto nella mia pagina. Sono{" "}
            <span className="font-semibold">HeroTRiP</span> e negli ultimi
            mesi (anzi, anni) ho lavorato per realizzare qualcosa di davvero
            innovativo – e soprattutto profittevole – nel mondo del betting.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            La mia missione principale è{" "}
            <span className="font-semibold">ridare dignità a un mondo bellissimo</span>,
            fatto di numeri, probabilità e intriganti rompicapi matematici.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Ho sentito troppo spesso frasi come: <em>“È impossibile…”</em>,
            <em>“È tempo perso…”</em>, <em>“Non puoi fare cose serie”</em>.
            Qui voglio offrire qualcosa di concreto e misurabile.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Il betting può essere un business, ma solo se trattato come un
            investimento: numeri, gestione del rischio, metodo.
          </p>

          <p className="text-sm leading-relaxed text-slate-200">
            Libri come <em>“Il Cigno Nero”</em> e <em>“Giocati dal Caso”</em>
            hanno ispirato questo approccio. 
          </p>
        </div>
      </section>


      {/* COME FUNZIONA */}
      <section id="how-it-works" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold text-amber-300">
            Come funziona il progetto HeroTRiP
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <InfoCard title="1. Analisi dei dati" text="Ogni giorno il motore elabora fixture, statistiche avanzate, forma recente e quote." />
            <InfoCard title="2. Ricerca delle 'bombe'" text="Poche partite selezionate, non listoni: scegliamo solo value reali." />
            <InfoCard title="3. Gestione del rischio" text="Principi di bankroll e disciplina, non gioco compulsivo." />
          </div>
        </div>
      </section>


      {/* PREDICTIONS PREVIEW */}
      <section id="predictions" className="border-t border-slate-800 bg-slate-950/90">
        
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center">

          {/* TESTO */}
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold text-amber-300">
              Come appariranno le prediction giornaliere
            </h2>

            <p className="text-sm text-slate-300">
              Ogni partita sarà mostrata come una card chiara con pochi indicatori chiave.
            </p>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs text-slate-400">
              <li>Poche partite selezionate.</li>
              <li>Focus su value bet, upset e partite asimmetriche.</li>
              <li>Storico risultati per garantire trasparenza.</li>
            </ul>

            <PreviewCard />
          </div>

          {/* IMMAGINE */}
          <div className="flex-1">
            <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-xl">
              <Image
                src="/landingpage.png"
                alt="HeroTRiP - Analisi"
                width={768}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-[10px] text-slate-500">
        <p className="mx-auto max-w-3xl px-4">
          HeroTRiP non promette guadagni. Le analisi hanno scopo informativo. Gioca responsabilmente.
        </p>
      </footer>
    </main>
  );
}

function InfoCard({ title, text }: any) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm">
      <h3 className="mb-2 text-sm font-semibold text-slate-100">{title}</h3>
      <p className="text-xs text-slate-300">{text}</p>
    </div>
  );
}

function PreviewCard() {
  return (
    <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-semibold text-slate-100">Team A vs Team B</span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          BOMBA POTENZIALE
        </span>
      </div>
    </div>
  );
}
