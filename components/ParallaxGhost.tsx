"use client";
import { useEffect, useRef } from "react";

export function ParallaxGhost() {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.12}px))`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <span
      ref={ref}
      className="absolute right-[-2vw] top-1/2 text-[22vw] font-black leading-none select-none pointer-events-none"
      style={{ color: "rgba(255,255,255,0.028)", transition: "transform 0.05s linear" }}
    >
      SXC
    </span>
  );
}
