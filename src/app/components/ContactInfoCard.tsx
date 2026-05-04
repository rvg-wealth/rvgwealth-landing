import type { LucideIcon } from "lucide-react";

type ContactInfoCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  iconBg?: string;
  iconColor?: string;
};

export function ContactInfoCard({
  icon: Icon,
  title,
  value,
  iconBg = "bg-primary-fixed",
  iconColor = "text-primary",
}: ContactInfoCardProps) {
  return (
    <div className="glass-card luminous-border p-8 rounded-xl flex items-center gap-6 group hover:bg-surface-container-lowest transition-colors duration-300">
      <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} shrink-0`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-headline-md text-primary mb-1">{title}</h3>
        <p className="font-body-md text-outline">{value}</p>
      </div>
    </div>
  );
}
