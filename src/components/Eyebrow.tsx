import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "muted" | "light";
}) {
  const tones = {
    gold: "text-gold",
    muted: "text-slate",
    light: "text-white/70",
  };
  return (
    <span className={`text-eyebrow block ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
