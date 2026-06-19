// Swappable logo slot.
// When the brand asset arrives, replace the text node below with:
//   import Image from "next/image";
//   <Image src="/logo.svg" .../>           (transparent / no-background variant — for nav)
//   <Image src="/logo-on-dark.svg" .../>   (background variant — for the evergreen footer)
// Keep the `variant` prop so callers don't change.

export function Logo({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const color = variant === "onDark" ? "text-white" : "text-ink";
  return (
    <span
      className={`text-xl font-bold tracking-tight ${color}`}
      aria-label="RVG Wealth"
    >
      RVG Wealth
    </span>
  );
}
