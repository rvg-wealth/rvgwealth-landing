import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  rating?: number;
};

export function TestimonialCard({
  quote,
  name,
  title,
  avatarSrc,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant/40 p-10 rounded-2xl flex flex-col">
      <div className="flex gap-1 text-secondary mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>
      <p className="text-body-lg text-on-surface mb-8 leading-relaxed flex-1">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/30">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <img alt={name} className="w-full h-full object-cover" src={avatarSrc} />
        </div>
        <div>
          <h4 className="font-semibold text-primary text-sm">{name}</h4>
          <p className="text-sm text-on-surface-variant">{title}</p>
        </div>
      </div>
    </div>
  );
}
