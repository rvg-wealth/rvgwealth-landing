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
  return (
    <section
      className={`py-16 md:py-24 ${backgrounds[background]} ${
        divider ? "border-t border-gold/25" : ""
      } ${className}`}
    >
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
