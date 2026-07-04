"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks, primaryCta } from "@/lib/nav";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 relative transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-white/90 backdrop-blur-xl"
          : "border-b border-transparent bg-evergreen"
      }`}
    >
      <Container className="relative flex items-center justify-between py-4">
        <Link href="/" className="shrink-0">
          <Logo variant={scrolled ? "default" : "onDark"} />
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
                    ? `border-b-2 border-gold pb-0.5 font-semibold ${
                        scrolled ? "text-ink" : "text-white"
                      }`
                    : scrolled
                      ? "text-slate hover:text-ink"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <Button
          href={primaryCta.href}
          className={`hidden sm:inline-flex ${
            scrolled ? "" : "bg-gold text-ink hover:bg-gold/90"
          }`}
        >
          {primaryCta.label}
        </Button>
      </Container>
    </header>
  );
}
