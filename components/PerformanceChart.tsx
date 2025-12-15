type Weekend = {
  profit: number;
};

type Props = {
  weekends: Weekend[];
};

export default function PerformanceChart({ weekends }: Props) {
  const initialBankroll = 250;
  let bankroll = initialBankroll;

  const points: number[] = weekends.map((w) => {
    bankroll += w.profit;
    return bankroll;
  });

  const width = 520;
  const height = 240;
  const padding = 40;

  const max = Math.max(initialBankroll, ...points);
  const min = Math.min(initialBankroll, ...points);

  const scaleX = (i: number) =>
    points.length === 1
      ? width / 2
      : padding + (i / (points.length - 1)) * (width - padding * 2);

  const scaleY = (v: number) =>
    height -
    padding -
    ((v - min) / (max - min || 1)) * (height - padding * 2);

  const path =
    points.length > 1
      ? points
          .map((p, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(p)}`)
          .join(" ")
      : "";

  return (
    <div className="bg-[#111936] p-6 rounded-xl border border-slate-800 space-y-4">
      <h3 className="text-amber-300 font-semibold">
        Performance complessiva
      </h3>

      <p className="text-sm text-slate-400">
        Equity line con bankroll iniziale di 250€, aggiornata weekend dopo weekend.
      </p>

      <svg
        width={width}
        height={height}
        className="bg-[#0b1020] rounded-md border border-slate-700"
      >
        {/* Baseline iniziale */}
        <line
          x1={padding}
          x2={width - padding}
          y1={scaleY(initialBankroll)}
          y2={scaleY(initialBankroll)}
          stroke="#334155"
          strokeDasharray="4 4"
        />

        {/* Linea equity */}
        {points.length > 1 && (
          <path
            d={path}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
          />
        )}

        {/* Punto/i */}
        {points.map((p, i) => (
          <g key={i}>
            <circle
              cx={scaleX(i)}
              cy={scaleY(p)}
              r={6}
              fill="#fbbf24"
            />
            <text
              x={scaleX(i)}
              y={scaleY(p) - 10}
              textAnchor="middle"
              fontSize="10"
              fill="#fbbf24"
            >
              {p.toFixed(0)}€
            </text>
          </g>
        ))}
      </svg>

      <p className="text-sm text-slate-300">
        Bankroll attuale:{" "}
        <strong>{points[points.length - 1].toFixed(2)}€</strong>
      </p>
    </div>
  );
}
