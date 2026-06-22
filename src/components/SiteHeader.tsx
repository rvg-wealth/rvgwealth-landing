"use client";

import { usePathname } from "next/navigation";
import { navLinks, primaryCta } from "@/lib/nav";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  active
                    ? "border-b-2 border-gold pb-0.5 font-semibold text-ink"
                    : "text-slate hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <Button href={primaryCta.href} className="hidden sm:inline-flex">
          {primaryCta.label}
        </Button>
      </Container>
    </header>
  );
}
