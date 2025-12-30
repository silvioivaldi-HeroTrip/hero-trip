import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-neutral-950 text-neutral-100">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-16">
        <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10">

          <Image
            src="/quantum-trip.png"
            alt="Quantum Trip"
            width={1200}
            height={800}
            priority
            className="rounded-lg shadow-2xl"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            It’s not a matter of xG.
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl">
            Alcune partite non si giocano.<br />
            <span className="text-neutral-100 font-semibold">
              Falliscono.
            </span>
          </p>

          <a
            href="#early-access"
            className="mt-6 inline-block rounded-full bg-neutral-100 px-8 py-4 text-lg font-semibold text-neutral-900 hover:bg-neutral-200 transition"
          >
            Segui il progetto
          </a>
        </div>
      </section>

      {/* TRANSIZIONE */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl">
            Se pensi che il calcio sia una questione di stime,
            probabilità o modelli onniscienti,
            <span className="font-semibold"> questa non è la pagina giusta.</span>
          </p>

          <p className="text-xl md:text-2xl">
            <span className="font-semibold">Cigni Neri</span> è una lente strutturale.<br />
            Non prevede risultati.<br />
            <span className="font-semibold">Classifica il fallimento.</span>
          </p>
        </div>
      </section>

      {/* COME LAVORIAMO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 text-lg text-neutral-300">
            <h2 className="text-3xl font-bold text-neutral-100">
              Come leggiamo le partite
            </h2>

            <p>
              Dietro ogni classificazione c’è una lettura strutturale.
            </p>

            <p>
              Lavoriamo <span className="font-semibold text-neutral-100">solo</span> su dati
              forniti come testo strutturato.
            </p>

            <p>
              Nessuna memoria.<br />
              Nessuna ipotesi.<br />
              Nessun confronto esterno.
            </p>

            <p className="font-semibold text-neutral-100">
              Se non emerge un evento raro,<br />
              non forziamo l’output.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/genius-tip.png"
              alt="Genius Tip"
              width={420}
              height={420}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CIGNI NERI */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto space-y-10 text-center">

          <h2 className="text-3xl font-bold">
            Cigni Neri
          </h2>

          <p className="text-xl text-neutral-300">
            Non tutti i match producono un evento raro.<br />
            Noi cerchiamo solo quelli che
            <span className="font-semibold text-neutral-100">
              {" "}falliscono strutturalmente.
            </span>
          </p>

          <ul className="space-y-4 text-lg text-neutral-300">
            <li>🦢 <span className="font-semibold text-neutral-100">Cigno di Blocco</span> — la tensione cresce ma non si rompe</li>
            <li>🦢 <span className="font-semibold text-neutral-100">Cigno di Collasso Totale</span> — una volta sbloccata, la partita muore</li>
            <li>Massimo <span className="font-semibold text-neutral-100">2 per giornata</span></li>
            <li>A volte <span className="font-semibold text-neutral-100">nessuno</span></li>
          </ul>

          <p className="text-lg font-semibold text-neutral-100">
            L’assenza di output è parte del metodo.
          </p>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section
        id="early-access"
        className="py-32 px-6"
      >
        <div className="max-w-xl mx-auto text-center space-y-10">

          <h2 className="text-3xl font-bold">
            Accesso anticipato
          </h2>

          <p className="text-lg text-neutral-300">
            Cigni Neri non è un prodotto finito,<br />
            ma una lente in fase di esposizione.
          </p>

          <p className="text-lg text-neutral-300">
            Se vuoi seguirne l’evoluzione,<br />
            lascia la tua email.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="la tua email"
              className="rounded-md px-4 py-3 text-neutral-900"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-neutral-100 px-6 py-3 font-semibold text-neutral-900 hover:bg-neutral-200 transition"
            >
              Entra nell’alpha
            </button>
          </form>

          <p className="text-sm text-neutral-400">
            –50% il primo mese.<br />
            Non come sconto, ma come patto.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-neutral-500 text-sm">
        Se cerchi certezze, questo non è il posto giusto.
      </footer>

    </main>
  );
}
