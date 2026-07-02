// ValueCard.tsx — Reusable "template" component (OOP-style)
import Image, { StaticImageData } from "next/image";

export interface ValueCardProps {
  index: number;
  title: string[];
  description: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  accent?: string;
  variant?: "image" | "gradient";
  gradientClass?: string;
}

export function ValueCard({
  index,
  title,
  description,
  imageSrc,
  imageAlt,
  accent = "bg-sxc-blue",
  variant = "image",
  gradientClass = "from-sxc-blue via-sxc-skyblue to-sxc-skyblue-light",
}: ValueCardProps) {
  const indexStr = String(index).padStart(2, "0");

  return (
    <article className="group flex flex-col gap-0 overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-500 bg-white min-h-[320px]">
      {variant === "image" ? (
        <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-100">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          <div className={`absolute top-4 left-4 ${accent} text-white text-xs font-bold px-2 py-1 tracking-[0.15em]`}>
            {indexStr}
          </div>
        </div>
      ) : (
        <div className={`relative w-full overflow-hidden bg-linear-to-br ${gradientClass}`} style={{ height: "30%" }}>
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" />
          <div className={`absolute top-4 left-4 ${accent} text-white text-xs font-bold px-2 py-1 tracking-[0.15em]`}>
            {indexStr}
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col gap-4 flex-1">
        <h3 className="text-2xl font-bold uppercase leading-tight tracking-tight text-zinc-900">
          {title.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h3>
        <div className={`h-0.5 w-8 ${accent} rounded-full`} />
        <p className="text-zinc-500 leading-relaxed text-sm sm:text-base flex-1">
          {description}
        </p>
      </div>
    </article>
  );
}
