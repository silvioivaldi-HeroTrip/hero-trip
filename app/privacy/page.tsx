export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-10">

        <h1 className="text-4xl font-bold">
          Privacy Policy
        </h1>

        <p className="text-lg text-neutral-300">
          La presente Privacy Policy descrive come vengono raccolti e trattati
          i dati personali degli utenti che accedono al progetto{" "}
          <strong className="text-neutral-100">Cigni Neri</strong>.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Dati raccolti
          </h2>

          <p className="text-neutral-300">
            I dati raccolti sono limitati a:
          </p>

          <ul className="list-disc list-inside text-neutral-300">
            <li>indirizzo email</li>
            <li>eventuale nome fornito dall’utente</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Finalità del trattamento
          </h2>

          <p className="text-neutral-300">
            I dati vengono utilizzati esclusivamente per:
          </p>

          <ul className="list-disc list-inside text-neutral-300">
            <li>gestire l’accesso anticipato al progetto</li>
            <li>comunicazioni informative legate a Cigni Neri</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Conservazione dei dati
          </h2>

          <p className="text-neutral-300">
            I dati sono conservati in modo sicuro e non vengono ceduti a terzi.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Diritti dell’utente
          </h2>

          <p className="text-neutral-300">
            L’utente può in qualsiasi momento richiedere la modifica o la
            cancellazione dei propri dati contattando il responsabile del progetto.
          </p>
        </div>

      </section>
    </main>
  );
}
