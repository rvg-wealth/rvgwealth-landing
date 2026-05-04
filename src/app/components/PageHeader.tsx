type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`mb-24 ${alignClass}`}>
      <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
        {eyebrow}
      </span>
      <h1 className="font-display-xl text-primary mb-6">{title}</h1>
      {description && (
        <p className={`font-body-lg text-outline max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </header>
  );
}
