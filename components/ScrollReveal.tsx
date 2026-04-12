"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const init = () => {
      const items = Array.from(document.querySelectorAll<HTMLElement>(".js-reveal"));
      if (!items.length) return;

      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.setAttribute("data-revealed", "true");
            } else {
              e.target.removeAttribute("data-revealed");
            }
          }
        },
        { rootMargin: "0px 0px -80px 0px", threshold: 0.15 }
      );

      // resets per section rather than counting globally across the page because we now use data template instead of repeated card
      const sectionMap = new Map<Element, HTMLElement[]>();
      items.forEach((el) => {
        // Walk up to find the nearest <section> ancestor (or fall back to body)
        const section = el.closest("section") ?? document.body;
        if (!sectionMap.has(section)) sectionMap.set(section, []);
        sectionMap.get(section)!.push(el);
      });

      sectionMap.forEach((sectionItems) => {
        sectionItems.forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
          obs.observe(el);
        });
      });

      return () => obs.disconnect();
    };

    // Small defer so React finishes painting all .map()-rendered cards before we query the DOM.
    const id = setTimeout(init, 50);
    return () => clearTimeout(id);
  }, []);

  return null;
}