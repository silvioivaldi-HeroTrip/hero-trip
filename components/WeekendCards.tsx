import Image from "next/image";

export default function WeekendCard({ data, onImage }: any) {
  const main = data.images.find((i: any) => i.main);

  return (
    <div className="min-w-[340px] bg-[#111936] rounded-xl p-5 border border-slate-800 space-y-4">
      <h3 className="text-amber-300 font-semibold">{data.label}</h3>

      <ul className="text-sm text-slate-300 space-y-1">
        <li>Analizzate: {data.analyzed}</li>
        <li>Selezionate: {data.selected}</li>
        <li>Vinte: {data.wins} | Perse: {data.losses}</li>
        <li className="text-green-400 font-semibold">ROI: +{data.roi}%</li>
      </ul>

      <div className="relative">
        {main.badge && (
          <span className="absolute top-2 left-2 bg-amber-400 text-black text-xs px-2 py-1 rounded">
            {main.badge}
          </span>
        )}
        <Image
          src={`/images/weekends/${data.id}/${main.file}`}
          alt={main.title}
          width={320}
          height={200}
          className="rounded-lg cursor-pointer"
          onClick={() => onImage(`/images/weekends/${data.id}/${main.file}`)}
        />
      </div>
    </div>
  );
}
