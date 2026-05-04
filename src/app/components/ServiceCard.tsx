import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href?: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href = "#",
}: ServiceCardProps) {
  return (
    <div className="glass-card luminous-border rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
      <div>
        <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-8 text-primary">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-headline-lg text-primary mb-4">{title}</h3>
        <p className="font-body-md text-outline mb-8">{description}</p>
        <ul className="space-y-3 mb-10">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-primary">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span className="font-body-md">{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={href}
        className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-4 transition-all"
      >
        LEARN MORE <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
