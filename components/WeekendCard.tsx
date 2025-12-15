import Image from "next/image";

type ImageItem = {
  file: string;
  title: string;
  badge?: string;
  main?: boolean;
};

type Props = {
  data: {
    id: string;
    label: string;
    analyzed: number;
    selected: number;
    wins: number;
    losses: number;
    roi: number;
    images: ImageItem[];
  };
  onImage: (src: string) => void;
};

export default function WeekendCard({ data, onImage }: Props) {
  const mainImage =
    data.images.find((i) => i.main) || data.images[0];

  const otherImages = data.images.filter(
    (i) => i.file !== mainImage.file
  );

  const basePath = `/images/weekends/${data.id}`;

  return (
    <div className="min-w-[360px] bg-[#111936] rounded-xl p-5 border border-slate-800 space-y-4">
      {/* Header */}
      <h3 className="text-amber-300 font-semibold">
        {data.label}
      </h3>

      <ul className="text-xs text-slate-300 space-y-1">
        <li>Analizzate: {data.analyzed}</li>
        <li>Selezionate: {data.selected}</li>
        <li>Vinte: {data.wins} | Perse: {data.losses}</li>
        <li className="text-green-400 font-semibold">
          ROI: +{data.roi}%
        </li>
      </ul>

      {/* Main image */}
      <div className="relative">
        {mainImage.badge && (
          <span className="absolute top-2 left-2 z-10 bg-amber-400 text-black text-xs px-2 py-1 rounded">
            {mainImage.badge}
          </span>
        )}

        <Image
          src={`${basePath}/${mainImage.file}`}
          alt={mainImage.title}
          width={320}
          height={200}
          className="rounded-lg cursor-pointer"
          onClick={() =>
            onImage(`${basePath}/${mainImage.file}`)
          }
        />
      </div>

      {/* Gallery */}
      {otherImages.length > 0 && (
        <div className="flex gap-2 overflow-x-auto pt-2">
          {otherImages.map((img, idx) => (
            <Image
              key={idx}
              src={`${basePath}/${img.file}`}
              alt={img.title}
              width={90}
              height={60}
              className="rounded cursor-pointer opacity-80 hover:opacity-100 transition"
              onClick={() =>
                onImage(`${basePath}/${img.file}`)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
