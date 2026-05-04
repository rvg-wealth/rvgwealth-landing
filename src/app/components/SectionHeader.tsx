import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  linkLabel,
  linkHref,
  align = "left",
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-16 ${
        linkLabel ? "flex flex-col md:flex-row justify-between items-end gap-4" : ""
      } ${isCentered ? "text-center" : ""}`}
    >
      <div className={description ? "max-w-2xl" : ""}>
        {eyebrow && (
          <span className="font-label-caps text-secondary mb-4 block">
            {eyebrow}
          </span>
        )}
        <h2 className="font-headline-lg text-headline-lg text-primary">{title}</h2>
        {description && (
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-2">
            {description}
          </p>
        )}
      </div>
      {linkLabel && linkHref && (
        <a
          href={linkHref}
          className="text-primary font-label-caps flex items-center gap-2 group shrink-0"
        >
          {linkLabel}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
}
