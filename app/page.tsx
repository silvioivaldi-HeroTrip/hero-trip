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
	  
	  import Tabs from "@/components/Tabs";
import WeekendCard from "@/components/WeekendCard";
import PerformanceChart from "@/components/PerformanceChart";
import weekends from "@/data/weekends.json";
import { useState } from "react";

const [lightbox, setLightbox] = useState<string | null>(null);

<Tabs>
{(active: string) => (
  <>
    {active === "Missione" && (
      <p className="text-slate-200 max-w-3xl">
        La mia missione è dare dignità a un mondo fatto di numeri,
        probabilità e disciplina.
      </p>
    )}

    {active === "Chi sono" && (
      <p className="text-slate-200 max-w-3xl">
        Sono HeroTRiP. Studio, testo, sbaglio e documento.
      </p>
    )}

    {active === "Progetto" && (
      <p className="text-slate-200 max-w-3xl">
        Selezioniamo pochissimi eventi, cerchiamo asimmetrie
        e accettiamo la perdita come parte del metodo.
      </p>
    )}

    {active === "Analisi" && (
      <div className="flex gap-6 overflow-x-auto">
        {weekends.map(w => (
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
        Feedback in arrivo.
      </p>
    )}
  </>
)}
</Tabs>

{lightbox && (
  <div
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
    onClick={() => setLightbox(null)}
  >
    <img src={lightbox} className="max-w-[90vw] rounded-lg" />
  </div>
)}


    </main>
  );
}
