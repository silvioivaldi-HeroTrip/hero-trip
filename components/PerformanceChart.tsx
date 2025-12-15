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

  return (
    <div className="bg-[#111936] p-6 rounded-xl border border-slate-800">
      <h3 className="text-amber-300 font-semibold mb-4">
        Equity Line (bankroll iniziale 250€)
      </h3>

      <ul className="text-sm text-slate-300 space-y-1">
        {points.map((p: number, i: number) => (
          <li key={i}>
            Weekend {i + 1}: <strong>{p.toFixed(2)}€</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
