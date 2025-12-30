"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Match = {
  Data: string;
  home: string;
  away: string;
  Prediction: string;
  Tip: string;
  zone: "calda" | "buona" | "warning" | "no bet" | string;
};

type MatchesResponse = {
  matches: Match[];
};

function normalizeZone(z: string | undefined): "buona" | "calda" | "warning" | "no bet" {
  const s = (z ?? "").toString().trim().toLowerCase();
  if (s === "buona") return "buona";
  if (s === "calda") return "calda";
  if (s === "warning") return "warning";
  if (s === "no bet" || s === "nobet" || s === "no_bet") return "no bet";
  // default (se ti dimentichi di compilarlo)
  return "calda";
}

function ZoneBadge({ zone }: { zone: "buona" | "calda" | "warning" | "no bet" }) {
  const map: Record<typeof zone, string> = {
    buona: "🔥 BUONA",
    calda: "🟡 CALDA",
    warning: "⚠️ WARNING",
    "no bet": "⛔ NO BET",
  };

  const cls: Record<typeof zone, string> = {
    buona: "bg-emerald-500/20 border-emerald-400/30 text-emerald-200",
    calda: "bg-amber-500/20 border-amber-400/30 text-amber-200",
    warning: "bg-orange-500/20 border-orange-400/30 text-orange-200",
    "no bet": "bg-gray-500/15 border-white/10 text-gray-200",
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full border ${cls[zone]}`}>
      {map[zone]}
    </span>
  );
}

function MatchCard({ m }: { m: Match }) {
  const z = normalizeZone(m.zone);

  const cardTone =
    z === "no bet"
      ? "opacity-60"
      : z === "warning"
      ? "opacity-85"
      : "opacity-100";

  return (
    <div className={`bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 shadow ${cardTone}`}>
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="text-base font-semibold">
            {m.home} <span className="text-gray-300">vs</span> {m.away}
          </h3>
          <p className="text-sm text-gray-300 mt-1">🎯 Pronostico: <span className="text-white font-semibold">{m.Prediction}</span></p>
        </div>
        <ZoneBadge zone={z} />
      </div>

      {m.Tip?.trim() ? (
        <p className="text-gray-300 text-sm leading-relaxed mt-3">
          {m.Tip}
        </p>
      ) : null}
    </div>
  );
}

function MatrixQuadrant({
  title,
  subtitle,
  zoneKey,
  matches,
  showGenius,
}: {
  title: string;
  subtitle: string;
  zoneKey: "buona" | "calda" | "warning" | "no bet";
  matches: Match[];
  showGenius?: boolean;
}) {
  const headerCls: Record<typeof zoneKey, string> = {
    buona: "text-emerald-200",
    calda: "text-amber-200",
    warning: "text-orange-200",
    "no bet": "text-gray-200",
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <h3 className={`text-lg font-bold ${headerCls[zoneKey]}`}>
            {title}
          </h3>
          <p className="text-xs text-gray-300">{subtitle}</p>
        </div>

        {showGenius ? (
          <div className="flex items-center gap-2">
            <Image
              src="/images/GeniusTip.png"
              alt="Genius"
              width={48}
              height={48}
              className="rounded-xl opacity-95"
            />
          </div>
        ) : null}
      </div>

      {matches.length === 0 ? (
        <p className="text-sm text-gray-400 italic">Nessuna partita in questa zona.</p>
      ) : (
        <div className="space-y-3">
          {matches.map((m, idx) => (
            <MatchCard key={idx} m={m} />
          ))}
        </div>
      )}
    </div>
  );
}

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
        Caricamento...
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

  const matchesByDate = data!.matches.reduce((acc: any, match: Match) => {
    if (!acc[match.Data]) acc[match.Data] = [];
    acc[match.Data].push(match);
    return acc;
  }, {});

  const sortedDates = Object.keys(matchesByDate).sort();

  return (
    <main className="min-h-screen bg-[#0e1428] text-white px-6 py-10">
      {/* LOGO IN ALTO */}
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/images/GeniusTip.png"
          alt="GeniusTip logo"
          width={450}
          height={300}
          className="mx-auto mb-6"
        />

        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Matrice dei Cigni: organizziamo le partite per zone (buona, calda, warning, no bet).
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-12 mt-10">
        {sortedDates.map((date) => {
          const dayMatches: Match[] = matchesByDate[date];

          const buckets: Record<"buona" | "calda" | "warning" | "no bet", Match[]> = {
            buona: [],
            calda: [],
            warning: [],
            "no bet": [],
          };

          dayMatches.forEach((m) => {
            const z = normalizeZone(m.zone);
            buckets[z].push(m);
          });

          return (
            <section key={date} className="mt-6">
              <h2 className="text-2xl font-bold text-amber-300 mb-5 text-center">
                📅 {date}
              </h2>

              {/* MATRICE 2×2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* alto-sinistra */}
                <MatrixQuadrant
                  title="OTTIMA"
                  subtitle="Zona migliore (da giocare)"
                  zoneKey="buona"
                  matches={buckets["buona"]}
                  showGenius
                />

                {/* alto-destra */}
                <MatrixQuadrant
                  title="CALDA"
                  subtitle="Interessante (da valutare)"
                  zoneKey="calda"
                  matches={buckets["calda"]}
                  showGenius
                />

                {/* basso-sinistra */}
                <MatrixQuadrant
                  title="NO BET"
                  subtitle="Da evitare"
                  zoneKey="no bet"
                  matches={buckets["no bet"]}
                />

                {/* basso-destra */}
                <MatrixQuadrant
                  title="WARNING"
                  subtitle="Favorita solida / rischio alto"
                  zoneKey="warning"
                  matches={buckets["warning"]}
                />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
