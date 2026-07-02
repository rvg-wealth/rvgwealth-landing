// Text wordmark. `onDark` switches to white for dark/transparent headers.
export function Logo({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const color = variant === "onDark" ? "text-white" : "text-ink";
  return (
    <span
      className={`text-xl font-bold tracking-tight ${color}`}
      aria-label="RVGWealth"
    >
      RVGWealth
    </span>
  );
}
