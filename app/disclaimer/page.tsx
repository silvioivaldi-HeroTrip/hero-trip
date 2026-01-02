export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-10">

        <h1 className="text-4xl font-bold">
          Disclaimer
        </h1>

        <p className="text-lg text-neutral-300">
          Il progetto <strong className="text-neutral-100">Cigni Neri</strong> è
          un esperimento di analisi strutturale applicato agli eventi sportivi.
        </p>

        <p className="text-lg text-neutral-300">
          Le informazioni fornite non costituiscono in alcun modo:
        </p>

        <ul className="list-disc list-inside text-neutral-300 space-y-2">
          <li>consigli di gioco</li>
          <li>inviti alla scommessa</li>
          <li>garanzie di risultato</li>
        </ul>

        <p className="text-lg text-neutral-300">
          I contenuti pubblicati hanno esclusivamente finalità informative,
          educative e sperimentali.
        </p>

        <p className="text-lg text-neutral-300">
          L’utente è l’unico responsabile delle proprie decisioni e delle
          eventuali conseguenze derivanti dall’utilizzo delle informazioni
          fornite.
        </p>

        <p className="text-lg font-semibold text-neutral-100">
          Nessun risultato è garantito.
        </p>

      </section>
    </main>
  );
}
