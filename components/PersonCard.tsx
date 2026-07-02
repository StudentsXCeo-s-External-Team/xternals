"use client";
import type React from "react";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

export interface PersonCardProps {
  name: string;
  role: string;
  imageSrc: string | StaticImageData;
  imageAlt?: string;
  variant?: "executive" | "management";
  imageStyle?: React.CSSProperties;
}

export function PersonCard({
  name,
  role,
  imageSrc,
  imageAlt,
  variant = "management",
  imageStyle,
}: PersonCardProps) {
  const isExecutive = variant === "executive";
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    el.style.transition = "transform 0.08s ease";
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
    el.style.transition = "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  return (
    <article
      ref={cardRef}
      className="flex flex-col group cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <div className={`relative w-full overflow-hidden bg-zinc-100 mb-5 aspect-3/4`}>
        <Image
          src={imageSrc}
          alt={imageAlt ?? name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={imageStyle}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-sxc-skyblue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className={`font-bold text-zinc-900 leading-tight ${isExecutive ? "text-xl" : "text-base"}`}>
          {name}
        </h3>
        <p className={`text-sxc-blue font-medium tracking-wide ${isExecutive ? "text-sm" : "text-xs"}`}>
          {role}
        </p>
      </div>
    </article>
  );
}

export interface BoardMemberProps {
  name: string;
  role: string;
  variant: string;
}

export function BoardMemberCard({ name, role, variant }: BoardMemberProps) {
  return (
    <div className="flex flex-col border-t-2 border-zinc-900 pt-5 group hover:border-sxc-blue transition-colors duration-300">
      <h3 className="text-base font-bold text-zinc-900 leading-snug group-hover:text-sxc-blue transition-colors duration-300">
        {name}
      </h3>
      <p className="text-sm text-zinc-500 mt-1 leading-snug">{role}</p>
      <p className="text-xs text-zinc-400 mt-0.5 tracking-wide uppercase">{variant}</p>
    </div>
  );
}
