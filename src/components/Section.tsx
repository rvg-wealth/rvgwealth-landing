import type { ReactNode } from "react";
import { Container } from "./Container";

type Background = "white" | "sage" | "mist" | "evergreen" | "ink";

const backgrounds: Record<Background, string> = {
  white: "bg-background text-ink",
  sage: "bg-[#EDF4EF] text-ink",
  mist: "bg-mist text-ink",
  evergreen: "bg-evergreen text-white",
  ink: "bg-ink text-white",
};

export function Section({
  children,
  background = "white",
  className = "",
  containerClassName = "",
  contained = true,
  divider = false,
}: {
  children: ReactNode;
  background?: Background;
  className?: string;
  containerClassName?: string;
  /** Set false to manage the inner container manually. */
  contained?: boolean;
  /** Adds a faint gold hairline at the top to mark the section transition. */
  divider?: boolean;
}) {
  // Soft brand tints lift white sections off the page without shouting.
  const depth = background === "white";

  return (
    <section
      className={`py-16 md:py-24 ${backgrounds[background]} ${
        divider ? "border-t border-gold/25" : ""
      } ${depth ? "relative overflow-hidden" : ""} ${className}`}
    >
      {depth && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(31,111,92,0.05),transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(185,138,46,0.05),transparent_50%)]" />
        </>
      )}
      {contained ? (
        <Container className={`relative ${containerClassName}`}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
}
