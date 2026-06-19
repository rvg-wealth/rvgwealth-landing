export type NavLink = {
  label: string;
  href: string;
};

// Single source of truth for primary navigation order.
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Book a Consultation",
  href: "/contact",
};
