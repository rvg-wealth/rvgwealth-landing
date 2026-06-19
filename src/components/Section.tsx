import type { ReactNode } from "react";
import { Container } from "./Container";

type Background = "white" | "mist" | "evergreen" | "ink";

const backgrounds: Record<Background, string> = {
  white: "bg-background text-ink",
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
}: {
  children: ReactNode;
  background?: Background;
  className?: string;
  containerClassName?: string;
  /** Set false to manage the inner container manually. */
  contained?: boolean;
}) {
  return (
    <section className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      {contained ? (
        <Container className={containerClassName}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
