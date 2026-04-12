// PersonCard.tsx — Reusable "template" component (OOP-style)
// Same pattern as ValueCard: define once, instantiate with data
import Image, { StaticImageData } from "next/image";

// --- TYPE DEFINITION (class schema) ---
export interface PersonCardProps {
  name: string;
  role: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  variant?: "executive" | "management"; // controls card size/style
}

// --- COMPONENT (the template) ---
export function PersonCard({
  name,
  role,
  imageSrc,
  imageAlt,
  variant = "management",
}: PersonCardProps) {
  const isExecutive = variant === "executive";

  return (
    <article className="flex flex-col group cursor-default">
      {/* Image Block */}
      <div
        className={`relative w-full overflow-hidden bg-zinc-100 mb-5 ${
          isExecutive ? "aspect-[3/4]" : "aspect-[3/4]"
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt ?? name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Blue accent bar on hover */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className={`font-bold text-zinc-900 leading-tight ${isExecutive ? "text-xl" : "text-base"}`}>
          {name}
        </h3>
        <p className={`text-blue-600 font-medium tracking-wide ${isExecutive ? "text-sm" : "text-xs"}`}>
          {role}
        </p>
      </div>
    </article>
  );
}

// --- BOARD MEMBER (text-only variant, no image) ---
export interface BoardMemberProps {
  name: string;
  role: string;
  variant: string;
}

export function BoardMemberCard({ name, role, variant }: BoardMemberProps) {
  return (
    <div className="flex flex-col border-t-2 border-zinc-900 pt-5 group hover:border-blue-600 transition-colors duration-300">
      <h3 className="text-base font-bold text-zinc-900 leading-snug group-hover:text-blue-600 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-sm text-zinc-500 mt-1 leading-snug">
        {role}
      </p>
      <p className="text-xs text-zinc-400 mt-0.5 tracking-wide uppercase">
        {variant}
      </p>
    </div>
  );
}