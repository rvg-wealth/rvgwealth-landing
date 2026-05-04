import { Button } from "./Button";

type SiteHeaderProps = {
  activeHref?: string;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ activeHref = "/" }: SiteHeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-emerald-200/60 bg-white/85 backdrop-blur-3xl shadow-[0_20px_40px_rgba(79,99,82,0.08)]">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-12 py-6">
        <a
          className="text-2xl font-bold tracking-[0.2em] text-[#4F6352] font-headline-lg"
          href="/"
        >
          RVG Wealth
        </a>
        <div className="hidden md:flex space-x-10">
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <a
                key={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "font-serif tracking-tight text-md uppercase font-large text-[#4F6352] border-b border-[#4F6352] pb-1"
                    : "font-serif tracking-tight text-md uppercase font-medium text-[#4F6352]/60 hover:text-[#4F6352] hover:opacity-100 transition-all duration-500"
                }
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <Button caps>Book a Consultation</Button>
      </div>
    </nav>
  );
}
