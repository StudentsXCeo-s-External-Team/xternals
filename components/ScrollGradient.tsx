"use client";
import { useEffect, useRef } from "react";

export default function ScrollGradient() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let stopped = false;
    const update = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      const gx = 20 + p * 60;
      const gy = 20 + p * 40;
      const mid = 35 + p * 30;
      el.style.setProperty("--gx", `${gx}%`);
      el.style.setProperty("--gy", `${gy}%`);
      el.style.setProperty("--mid", `${mid}%`);
    };
    update();
    const stopAll = () => {
      if (stopped) return;
      stopped = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      const heroes = Array.from(document.querySelectorAll<HTMLElement>(".hero-blur-bg"));
      heroes.forEach((h) => h.setAttribute("data-stopped", "true"));
    };
    const onScroll = () => stopAll();
    const onResize = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="fixed inset-0 -z-10 scroll-gradient" />
      <div className="fixed inset-0 -z-10 bg-black/65" />
    </>
  );
}
