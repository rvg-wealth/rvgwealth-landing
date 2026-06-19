import { ArrowRight, BarChart2, ChevronRight, Clock, Search } from "lucide-react";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

const filters = [
  "All Modules",
  "Wealth Foundations",
  "Advanced Tax Strategies",
  "Global Markets",
  "Family Legacy",
];

const modules = [
  {
    category: "FOUNDATIONS",
    duration: "20 MIN",
    level: "BEGINNER",
    title: "Principals of Wealth Compounding",
    description:
      "Understanding the mathematical and psychological levers of long-term capital growth.",
    alt: "Close-up of high-quality architectural blueprints and a vintage gold fountain pen on an ivory surface. The lighting is soft and ambient, emphasizing textures of paper and metal. The color palette consists of neutral beiges, sage green accents, and metallic gold, reflecting a mood of precise planning and financial foundation building.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXmYSgxdLe9fvCldde9U8XaLJEe-Rt5o6uKcFHgLVHv5azC-4jhksHy90u7NyeNqJvBJvbpC4Om3jEeVGtHdFb89O9lNpTAAzKXoHpZC70ugX1XDzeclf33e-VYpu1rqaxwWIf7kJuxFv0o9a3ZoYezQaHFxN5l7M8YwcwI3mLZq3G-Y_eecNQ4QJbRCmmFGi4BjkuEFUCt-RhSI6hOGkwf6EmHCLL3lToJv1YO6mQa-JBtHs0--s0BRGlKsdyRA-LvMed8kKdDn9V",
  },
  {
    category: "TAXATION",
    duration: "35 MIN",
    level: "INTERMEDIATE",
    title: "Global Jurisdictions & Tax Flows",
    description:
      "A comprehensive guide to cross-border tax implications and efficient structuring.",
    alt: "A professional workspace with a leather-bound notebook, a pair of luxury glasses, and a glass of water reflecting soft window light. The scene conveys focused intelligence and tax efficiency. Dominant colors are deep greens, warm grays, and clear glass reflections, maintaining a clean, professional, and luminous light aesthetic.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzHuw72JdaVZC8zgudgHnIu6lW7MO0ReqqAHCmHnZxfk6Mo6puVaKZ273T8cxP2-8exsdDi9JAAC9gEhAD4kQv_AgVJeceuaBJuAlckBIc4yiKsvKfvgv8h6OvwMNaYU4XZ4nBFGE1_mlJ2YWdCEX84wlYG1Jft8clSpgx3djEzDc6CIzncOnxECXKMzFRwalDtX3N7cjUfuiIARAytRuWs5_un04TlyA9rjvkC9ez3R8O7dzAvTem1PEIy_4CwFuAQNWb6e04MZD6",
  },
  {
    category: "MARKETS",
    duration: "50 MIN",
    level: "ADVANCED",
    title: "Macro Trends: The Next Decade",
    description:
      "Predictive analysis of geopolitical shifts and emerging asset classes for the decade ahead.",
    alt: "A minimalist abstract art piece representing market trends with delicate golden wire sculptures suspended in a bright, white gallery space. The lighting is high-key and diffused, creating a sense of clarity and modern stewardship. The aesthetic is airy, sophisticated, and clean, using tones of champagne gold and pristine white.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGboldDABW8NVZmBf1VVAnvLiOAPmBCNUar6bLeLqFkY-UUlBS4-hJNzmf-Jc9MWPOUfMw6Q-SJrrMKIV7ceQR0bfPVBGMhhk8BF9i04CqBlljqiVkdYzpQOLlwIqOYsAeTs1UmcDb7e42bIfTICO_oaUXak0s8MLcalXFZG9XfD5Su7o3EZnkVoGKI15KzRPHpjVFLHdqjy4O2jT22xco0WU9ZxHsEni9H9nQX8Wlfuz-ik712ysrZTxD9GBpeq9yYQrAL1_0gkUh",
  },
  {
    category: "LEGACY",
    duration: "30 MIN",
    level: "INTERMEDIATE",
    title: "Philanthropy as a Strategic Asset",
    description:
      "Integrating charitable giving into the core of your wealth management architecture.",
    alt: "An antique brass hourglass sitting on a dark wood table next to a stack of parchment. The lighting is focused and warm, creating high contrast and a sense of legacy and the passage of time. The palette is rich with deep browns, warm brass golds, and ivory parchment tones, evoking a timeless and professional mood.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmLynQlXG8RUczjLmiz0tCIaP1VeOPRexBCc2bfrRnYFpLc-jj7LoDdh-80RXdMV5nu3_jhnfH0Lj4OqhrIjxwXzHLZLVHAP99yeBFL2Y-lDRn6xxPoC5Yt-bFdvDX4QA3kv4LqUORqBm-tPhUBEBYAa3TJ97i6te-APBmpHXuzKXj1PLQyMerfSmRpupZCWIcPwROkpxxY67MiFEm2DmUocQP5BxUdJK0iI0tD4OpKPGQNLlQAyoGCEFdpihCuFlIcqQSGgdt_IWA",
  },
  {
    category: "FOUNDATIONS",
    duration: "15 MIN",
    level: "BEGINNER",
    title: "Modern Stewardship 101",
    description:
      "Redefining the role of the wealth holder in a rapidly evolving global economy.",
    alt: "A serene, minimalist image of polished marble stairs leading upward into soft white light. The image represents financial progression and upward mobility. The aesthetic is clean, bright, and expensive, with a subtle palette of cool grays, pristine whites, and soft sage shadows.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuClDAvt9Q3q-t51PEAFZVvxVe3o286PS1k6i7gfnji2j5J51bDMnaIAEM3y9MsCcmU-vLVC3qSiZXtyvCDYxAlKYsrkXA6CYA66QctB5ocbMyApL_ff8l_hf2JyNRFj0_0fyIwsJHl1eGoC63dkFph5lxPz2Yo_4ok3DSifsIfuH6ZSBeIW1osQbqmJjNOWALZaafq7x_c9D-JBQS1khB9hkJIoeCLimzDHXRPKPxMGSLmTPiTrg0f0Qzn8CwCzf5JOD7PEPdXZ8Ov1",
  },
  {
    category: "MARKETS",
    duration: "40 MIN",
    level: "ADVANCED",
    title: "Alternative Assets: Private Equity",
    description:
      "Navigating the complexities and illiquidity premiums of institutional-grade private markets.",
    alt: "A modern glass skyscraper reflecting a clear blue sky and other elegant buildings. The architectural style is sharp, clean, and futuristic. The lighting is bright and crisp, emphasizing transparency and structural integrity. Tones of steel blue, reflective glass, and white concrete create a professional, global markets atmosphere.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7Nqq-znC5MPRGxxWHTaIIdxWyDUGBzc3Wc5wduzJ5y2g2e8TKYjSKkau2XLsVEfdpozfsGDncw9ZdpMR8L9pYn-_5uUyfUMV3T8aim3XDRud8Awm4vj7yPle4mUZTIcM2R3OQc2K1h71DOFJhD963S9zpabVghAieSATu0VMbQIVma8T6sLAMk96FhlIeRaIMNVBt3AOdFsnquO79DGULhDx6D9ZIbIiT-6-ohiN1TvRp3Vcv9dAgRxYfFm4SevYSgF5Mf_BnQ8km",
  },
];

export default function EducationPage() {
  return (
    <>
      {/* Featured module hero */}
      <Section background="white">
        <div className="relative flex h-[500px] items-center overflow-hidden rounded-2xl group">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="A sophisticated, high-end library setting with floor-to-ceiling dark oak bookshelves and a single crystal chandelier casting warm, golden light across a minimalist reading table. The atmosphere is quiet and scholarly, featuring a muted palette of sage greens, deep forest browns, and subtle ivory highlights. Soft morning light filters through a large arched window, creating a serene and timeless environment of intellectual wealth."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4FVT2hhWdn6rmKN_mlS2Yis0L2Y3jvD4IOW974AuTL94Ee1OsKhGci-LWpdllpXsyMb1Gd5wwU0rjcVW-0IukPRanYPDmNv7h82NJy5ovJjl2KxMPqjhCFBDbAgZO7iYWR2t7ZciIxZe82k3TXEnO3YSM3Fm3oC947keEr25HWPlRHRkXLi_tvxE5DeOrPLcei7d7ulHxTOYv7UjKUUtqa1xw_ojNJqEaMPnpUeLKgQNgcEjHWamBOeBmAjiFw8S_XS26WogqRWCf"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-2xl px-8 md:pl-16 text-white">
            <span className="mb-4 inline-block rounded-full border border-gold/50 px-3 py-1">
              <Eyebrow tone="light">FEATURED MODULE</Eyebrow>
            </span>
            <h1 className="text-display text-white mb-6">
              The Art of Multi-Generational Wealth
            </h1>
            <p className="text-body text-white/80 mb-8 max-w-lg">
              Master the philosophical and structural foundations required to
              preserve legacy and values across centuries of stewardship.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button href="#" className="bg-white text-ink hover:bg-white">
                START LEARNING
                <ArrowRight className="h-5 w-5" />
              </Button>
              <span className="text-eyebrow text-white/60">
                45 MINUTES &bull; ADVANCED
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Filter chips + search */}
      <Section background="white" className="py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-hairline pb-8">
          <div className="flex flex-wrap gap-4">
            {filters.map((label, i) => (
              <button
                key={label}
                className={`rounded-full px-6 py-2 text-eyebrow transition-all ${
                  i === 0
                    ? "bg-ink text-white"
                    : "border border-hairline text-slate hover:border-ink hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate" />
            <input
              className="w-full rounded-lg border border-hairline bg-mist py-3 pl-12 pr-4 text-body focus:outline-none focus:ring-1 focus:ring-ink"
              placeholder="Search library..."
              type="text"
            />
          </div>
        </div>
      </Section>

      {/* Module grid */}
      <Section background="mist">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.title} hover className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt={module.alt}
                  src={module.src}
                />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 backdrop-blur-md">
                  <span className="text-eyebrow text-ink">{module.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-slate">
                  <div className="flex items-center gap-1">
                    <Clock className="h-[18px] w-[18px]" />
                    <span className="text-eyebrow">{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="h-[18px] w-[18px]" />
                    <span className="text-eyebrow">{module.level}</span>
                  </div>
                </div>
                <h3 className="text-h3 text-ink mb-3">{module.title}</h3>
                <p className="text-slate mb-6 line-clamp-2">{module.description}</p>
                <a
                  className="inline-flex items-center gap-2 text-eyebrow text-ink group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Briefing CTA */}
      <Section background="evergreen">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="max-w-xl">
            <h2 className="text-h2 text-white mb-4">
              Request a Private Briefing
            </h2>
            <p className="text-white/70">
              For modules requiring specific legal or jurisdictional tailoring,
              we offer bespoke educational sessions for family offices.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Button
              href="#"
              className="bg-gold text-ink hover:bg-gold hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              CONTACT ADVISOR
            </Button>
            <span className="mt-4 text-eyebrow text-white/40">
              Available to Premier Members Only
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
