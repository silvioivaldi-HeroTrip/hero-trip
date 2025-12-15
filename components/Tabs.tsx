"use client";
import { useState } from "react";

const tabs = [
  "Missione",
  "Chi sono",
  "Progetto",
  "Analisi",
  "Performance",
  "Cosa dicono di me"
];

export default function Tabs({ children }: { children: any }) {
  const [active, setActive] = useState("Missione");

  return (
    <>
      <div className="flex gap-4 border-b border-slate-700 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`pb-2 text-sm font-semibold ${
              active === tab
                ? "text-amber-400 border-b-2 border-amber-400"
                : "text-slate-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {children(active)}
      </div>
    </>
  );
}
