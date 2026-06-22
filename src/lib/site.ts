export const siteInfo = {
  name: "RVGWealth",
  tagline:
    "Empowering individuals with the knowledge, strategies, and confidence to build lasting wealth.",
  address: {
    line1: "RVGWealth Advisory",
    line2: "[Office address], [City], India",
    phone: "+91 00000 00000",
  },
  regions: "India · Serving NRIs Worldwide",
  copyright: "© 2026 RVGWealth. Expert guidance for modern stewardship.",
};

export type FooterColumn = {
  heading: string;
  links: { label: string; href: string }[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Financial Education", href: "/services" },
      { label: "Investment Planning", href: "/services" },
      { label: "Retirement Consultancy", href: "/services" },
      { label: "Insurance Planning", href: "/services" },
      { label: "NRI Services", href: "/services" },
    ],
  },
  {
    heading: "Membership",
    links: [
      { label: "Foundation", href: "/membership" },
      { label: "Growth", href: "/membership" },
      { label: "Apex", href: "/membership" },
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
