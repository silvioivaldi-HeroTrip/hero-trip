type Weekend = {
  profit: number;
};

type Props = {
  weekends: Weekend[];
};

export default function PerformanceChart({ weekends }: Props) {
  let bankroll = 250;

  const points: number[] = weekends.map((w) => {
    bankroll += w.profit;
    return bankroll;
  });

  const max = Math.max(...points);
  const min = Math.min(...points);

  const width = 400;
  const height = 200;
  const padding = 20;

  const scaleX = (i: number) =>
    padding + (i / (points.length - 1 || 1)) * (width - padding * 2);

  const scaleY = (v: number) =>
    height - padding - ((v - min) / (max - min || 1)) * (height - padding * 2);

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(p)}`)
    .join(" ");

  return (
    <div className="bg-[#111936] p-6 rounded-xl border border-slate-800 space-y-4">
      <h3 className="text-amber-300 font-semibold">
        Performance complessiva
      </h3>

      <p className="text-sm text-slate-400">
        Equity line con bankroll iniziale di 250€, aggiornata weekend dopo weekend.
      </p>

      <svg width={width} height={height} className="bg-slate-900 rounded-md">
        <path
          d={path}
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
        />
      </svg>

      <p className="text-sm text-slate-300">
        Bankroll attuale: <strong>{points[points.length - 1].toFixed(2)}€</strong>
      </p>
    </div>
  );
}
