"use client";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function AnimatedLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} style={{ animation: "pageFadeIn 0.45s ease-out both" }}>
      {children}
    </div>
  );
}
