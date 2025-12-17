type Weekend = {
  profit: number;
};

type Props = {
  weekends: Weekend[];
};

export default function PerformanceChart({ weekends }: Props) {
  const initialBankroll = 250;

  // Serie completa: punto iniziale + weekend
  const values: number[] = [initialBankroll];
  weekends.forEach((w) => {
    values.push(values[values.length - 1] + w.profit);
  });

  // Coordinate logiche (viewBox)
  const width = 100;
  const height = 50;
  const padding = 8;

  const max = Math.max(...values);
  const min = Math.min(...values);

  const scaleX = (i: number) =>
    padding +
    (i / (values.length - 1 || 1)) * (width - padding * 2);

  const scaleY = (v: number) =>
    height -
    padding -
    ((v - min) / (max - min || 1)) * (height - padding * 2);

  const path = values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${scaleX(i)} ${scaleY(v)}`)
    .join(" ");

  return (
    <div className="bg-[#111936] p-5 rounded-xl border border-slate-800 space-y-4">
      <h3 className="text-amber-300 font-semibold">
        Performance complessiva
      </h3>

      <p className="text-sm text-slate-400">
        Equity line con bankroll iniziale di 250€, aggiornata weekend dopo weekend.
      </p>

      {/* CONTENITORE RESPONSIVE */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-auto bg-[#0b1020] rounded-md border border-slate-700"
        >
          {/* Linea */}
          <path
            d={path}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="0.8"
          />

          {/* Punti + valori */}
          {values.map((v, i) => (
            <g key={i}>
              <circle
                cx={scaleX(i)}
                cy={scaleY(v)}
                r="1.2"
                fill={i === 0 ? "#38bdf8" : "#fbbf24"}
              />
              <text
                x={scaleX(i)}
                y={scaleY(v) - 2}
                textAnchor="middle"
                fontSize="2.2"
                fill={i === 0 ? "#38bdf8" : "#fbbf24"}
              >
                {v.toFixed(0)}€
              </text>
            </g>
          ))}

          {/* Etichette X */}
          {values.map((_, i) => (
            <text
              key={`x-${i}`}
              x={scaleX(i)}
              y={height - 2}
              textAnchor="middle"
              fontSize="2.2"
              fill="#94a3b8"
            >
              {i === 0 ? "Start" : `W${i}`}
            </text>
          ))}
        </svg>
      </div>

      <p className="text-sm text-slate-300">
        Bankroll attuale:{" "}
        <strong>{values[values.length - 1].toFixed(2)}€</strong>
      </p>
    </div>
  );
}
