"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Match = {
  Data: string;
  home: string;
  away: string;
  Prediction: string;
  Tip: string;
};

type MatchesResponse = {
  matches: Match[];
};

export default function MatchesPage() {
  const [data, setData] = useState<MatchesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/matches.json");
        if (!res.ok) throw new Error("Impossibile caricare matches.json");
        const json = (await res.json()) as MatchesResponse;
        setData(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0e1428] text-white flex items-center justify-center">
        Caricamento partite...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#0e1428] text-white flex items-center justify-center">
        Errore: {error}
      </main>
    );
  }

  // --- Raggruppa partite per data ---
  const matchesByDate = data!.matches.reduce((acc: any, match: Match) => {
    if (!acc[match.Data]) acc[match.Data] = [];
    acc[match.Data].push(match);
    return acc;
  }, {});

  const sortedDates = Object.keys(matchesByDate).sort();

  return (
    <main className="min-h-screen bg-[#0e1428] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto text-center">
        {/* LOGO GENIUSTIP */}
        <Image
          src="/images/GeniusTip.png"
          alt="GeniusTip logo"
          width={450}
          height={300}
          className="mx-auto mb-10"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {sortedDates.map((date) => (
          <section key={date} className="mt-6">
            <h2 className="text-2xl font-bold text-amber-300 mb-4 text-center">
              📅 {date}
            </h2>

            <div className="grid md:grid-cols-1 gap-6">
              {matchesByDate[date].map((m: Match, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold">
                      {m.home} <span className="text-gray-300">vs</span> {m.away}
                    </h3>

                    {/* BADGE PRONOSTICO */}
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-amber-400 text-black">
                      Pronostico: {m.Prediction}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {m.Tip}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
