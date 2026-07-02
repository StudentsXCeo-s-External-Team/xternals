"use client";
import { useState, useEffect, useCallback } from "react";

const VOICES = [
  { quote: "The discipline here translated directly into professional confidence.", name: "Alya R." },
  { quote: "Mentors didn't just advise. They opened doors and raised the bar.", name: "Jonathan L." },
  { quote: "The community keeps you growing. You're alongside people who actually care.", name: "Nadia K." },
];

export function AlumniVoices() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 280);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % VOICES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [current, goTo]);

  return (
    <div className="mt-8">
      <div
        className="border border-zinc-200 bg-white p-8 min-h-[140px] flex flex-col justify-center transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p className="text-zinc-700 text-lg leading-relaxed">
          &ldquo;{VOICES[current].quote}&rdquo;
        </p>
        <div className="mt-4 text-sm font-semibold text-zinc-500 tracking-wide">
          {VOICES[current].name}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        {VOICES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Voice ${i + 1}`}
            className={`h-[3px] transition-all duration-400 ${
              i === current ? "w-8 bg-sxc-skyblue" : "w-4 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
