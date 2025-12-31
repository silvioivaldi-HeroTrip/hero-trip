export const revalidate = 0;
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
            className="mx-auto max-w-[70%] rounded-lg shadow-2xl opacity-90"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Non prevediamo risultati.
          </h1>

          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl">
            Rileviamo quando i sistemi si rompono.
          </p>

        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          <p className="text-xl md:text-2xl">
            Se pensi che il calcio sia una questione di stime,
            probabilità o modelli onniscienti,
            <span className="font-semibold"> questa non è la pagina giusta.</span>
          </p>

          <p className="text-xl md:text-2xl">
            <span className="font-semibold">Cigni Neri</span> è una lente strutturale.<br />
            Non indovina.<br />
            <span className="font-semibold">Osserva il fallimento.</span>
          </p>

        </div>
      </section>

      {/* METODO */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 text-lg text-neutral-300">
            <h2 className="text-3xl font-bold text-neutral-100">
              Il nostro metodo
            </h2>

            <p>
              Non cerchiamo valore ovunque.
            </p>

            <p>
              Lavoriamo solo quando una partita
              <span className="font-semibold text-neutral-100">
                {" "}perde la propria struttura.
              </span>
            </p>

            <p>
              Nessuna previsione.<br />
              Nessuna narrativa forzata.<br />
              Nessuna continuità artificiale.
            </p>

            <p className="font-semibold text-neutral-100">
              Se non emerge nulla,<br />
              non pubblichiamo nulla.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/Genius.png"
              alt="Genius"
              width={420}
              height={420}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CIGNI */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto space-y-10 text-center">

          <h2 className="text-3xl font-bold">
            I Cigni
          </h2>

          <ul className="space-y-6 text-lg text-neutral-300">
            <li>
              🦢 <span className="font-semibold text-neutral-100">Cigno di Blocco</span><br />
              La tensione cresce ma non esplode.<br />
              <span className="text-neutral-400">Equilibrio. Pareggio.</span>
            </li>

            <li>
              🦢 <span className="font-semibold text-neutral-100">Cigno di Collasso Totale</span><br />
              Una volta sbloccata, la partita muore.<br />
              <span className="text-neutral-400">
                Non importa chi vince. Importano i gol.
              </span>
            </li>

            <li>
              Massimo <span className="font-semibold text-neutral-100">2 eventi per giornata</span>
            </li>

            <li>
              A volte <span className="font-semibold text-neutral-100">nessuno</span>
            </li>
          </ul>

          <p className="text-lg font-semibold text-neutral-100">
            L’assenza di output e i possibili errori<br />
            fanno parte del nostro metodo.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="early-access" className="py-32 px-6">
        <div className="max-w-xl mx-auto text-center space-y-10">

          <h2 className="text-3xl font-bold">
            Unisciti a noi
          </h2>

          <p className="text-lg text-neutral-300">
            Cigni Neri è in fase alpha.<br />
            Non promettiamo certezze.
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
              className="rounded-md bg-neutral-100 px-6 py-4 text-lg font-bold text-neutral-900 hover:bg-neutral-200 transition"
            >
              Unisciti a noi
            </button>
          </form>

          <p className="text-base font-semibold text-neutral-200">
            –50% il primo mese.<br />
            Non come sconto.<br />
            Come patto.
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <footer className="py-12 text-center text-neutral-500 text-sm max-w-3xl mx-auto">
        Questo progetto non fornisce consigli di gioco.
        È un esperimento sulla lettura strutturale degli eventi.
      </footer>

    </main>
  );
}
