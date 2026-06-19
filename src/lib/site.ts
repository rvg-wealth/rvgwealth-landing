export const siteInfo = {
  name: "RVG Wealth",
  tagline:
    "Redefining wealth management through the lens of modern stewardship and timeless expertise.",
  address: {
    line1: "1200 Avenue of the Americas",
    line2: "Suite 450, New York, NY 10036",
    phone: "+1 (212) 555-0198",
  },
  regions: "English / Switzerland / UAE",
  copyright: "© 2024 RVG Wealth Management. Expert guidance for modern stewardship.",
};

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Expertise",
    links: [
      { label: "Investment Planning", href: "/services" },
      { label: "Tax Strategy", href: "/services" },
      { label: "Philanthropy", href: "/services" },
      { label: "Real Estate Portfolio", href: "/services" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Education Center", href: "/education" },
      { label: "Quarterly Reports", href: "#" },
      { label: "Membership Benefits", href: "/membership" },
      { label: "Private Portal", href: "#" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Legal Disclosures", href: "#" },
    ],
  },
];
