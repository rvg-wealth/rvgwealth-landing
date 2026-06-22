import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  /** Adds a subtle lift on hover for interactive cards. */
  hover?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-hairline bg-white shadow-[0_1px_2px_rgba(21,35,28,0.04)] ${
        hover
          ? "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(21,35,28,0.08)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
