"use client";
import { useRef, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className, strength = 0.22 }: MagneticButtonProps) {
  const inner = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = inner.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    if (!inner.current) return;
    inner.current.style.transform = "translate(0, 0)";
    inner.current.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <span ref={inner} className="block">
        {children}
      </span>
    </div>
  );
}
