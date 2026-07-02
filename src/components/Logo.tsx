import Image from "next/image";

// Circular brand mark + adaptive wordmark.
// `onDark` switches the wordmark to white for dark/transparent headers.
export function Logo({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const color = variant === "onDark" ? "text-white" : "text-ink";
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="RVGWealth">
      <Image
        src="/logo-mark.png"
        alt=""
        width={256}
        height={256}
        priority
        className="h-9 w-9 rounded-full ring-1 ring-white/15"
      />
      <span className={`text-lg font-bold tracking-tight ${color}`}>
        RVGWealth
      </span>
    </span>
  );
}
