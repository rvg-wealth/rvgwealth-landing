import { Globe, Mail, Share2 } from "lucide-react";

type SiteFooterProps = {
  variant?: "compact" | "full";
};

const links = {
  expertise: [
    { label: "Investment Planning", href: "#" },
    { label: "Tax Strategy", href: "#" },
    { label: "Philanthropy", href: "#" },
    { label: "Real Estate Portfolio", href: "#" },
  ],
  resources: [
    { label: "Education Center", href: "#" },
    { label: "Quarterly Reports", href: "#" },
    { label: "Membership Benefits", href: "#" },
    { label: "Private Portal", href: "#" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Legal Disclosures", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Legal Disclosures", href: "#" },
  ],
};

export function SiteFooter({ variant = "full" }: SiteFooterProps) {
  if (variant === "compact") {
    return (
      <footer className="w-full border-t border-outline-variant/50 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-headline-lg font-bold text-primary">
            RVG Wealth Management
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {links.legal.map((item) => (
              <a
                key={item.label}
                className="font-serif text-sm tracking-wide text-[#4F6352]/70 hover:text-primary underline-offset-4 hover:underline transition-opacity duration-200"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              className="font-serif text-sm tracking-wide text-[#4F6352]/70 hover:text-primary underline-offset-4 hover:underline transition-opacity duration-200"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-serif text-sm tracking-wide text-[#4F6352]/70 hover:text-primary underline-offset-4 hover:underline transition-opacity duration-200"
              href="#"
            >
              Regulatory Disclosure
            </a>
            <a
              className="font-serif text-sm tracking-wide text-[#4F6352]/70 hover:text-primary underline-offset-4 hover:underline transition-opacity duration-200"
              href="#"
            >
              Sitemap
            </a>
          </div>
          <div className="font-serif text-sm tracking-wide text-[#4F6352]/70 text-center md:text-right">
            © 2024 RVG Wealth Management. Members of the Financial District Guild.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full border-t border-outline-variant/50 bg-surface-container-low py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-12">
        <div>
          <div className="text-xl font-bold tracking-widest text-[#4F6352] mb-4 font-headline-lg uppercase">
            RVG Wealth
          </div>
          <p className="text-[#4F6352]/70 font-serif text-sm leading-relaxed mb-6">
            Redefining wealth management through the lens of modern stewardship and
            timeless expertise.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full border border-[#4F6352]/30 flex items-center justify-center text-[#4F6352] hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-full border border-[#4F6352]/30 flex items-center justify-center text-[#4F6352] hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer">
              <Mail className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#4F6352] mb-6 font-label-caps">
            Expertise
          </h4>
          <ul className="space-y-4">
            {links.expertise.map((item) => (
              <li key={item.label}>
                <a
                  className="text-[#4F6352]/70 text-sm font-serif hover:text-primary underline-offset-4 hover:underline"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#4F6352] mb-6 font-label-caps">
            Resources
          </h4>
          <ul className="space-y-4">
            {links.resources.map((item) => (
              <li key={item.label}>
                <a
                  className="text-[#4F6352]/70 text-sm font-serif hover:text-primary underline-offset-4 hover:underline"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#4F6352] mb-6 font-label-caps">
            Global Presence
          </h4>
          <p className="text-[#4F6352]/70 text-sm font-serif leading-loose">
            1200 Avenue of the Americas
            <br />
            Suite 450, New York, NY 10036
            <br />
            +1 (212) 555-0198
          </p>
          <div className="mt-6 flex items-center gap-2 text-primary font-bold">
            <Globe className="w-4 h-4" />
            <span className="text-sm">English / Switzerland / UAE</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-12 mt-24 pt-8 border-t border-outline-variant/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#4F6352]/70 font-serif text-sm leading-relaxed">
          © 2024 RVG Wealth Management. Expert guidance for modern stewardship.
        </p>
        <div className="flex gap-8">
          {links.company.map((item) => (
            <a
              key={item.label}
              className="text-[#4F6352]/70 text-sm font-serif hover:text-primary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
