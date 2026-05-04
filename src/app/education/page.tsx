import { ArrowRight, Award, BarChart2, ChevronRight, Clock, Globe, Mail, Search, Shield } from "lucide-react";
import { Button } from "../components/Button";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function EducationPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed">
      <SiteHeader activeHref="/education" />
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-12 mb-stack-lg">
          <div className="relative overflow-hidden rounded-xl h-[500px] flex items-center group">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="A sophisticated, high-end library setting with floor-to-ceiling dark oak bookshelves and a single crystal chandelier casting warm, golden light across a minimalist reading table. The atmosphere is quiet and scholarly, featuring a muted palette of sage greens, deep forest browns, and subtle ivory highlights. Soft morning light filters through a large arched window, creating a serene and timeless environment of intellectual wealth."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4FVT2hhWdn6rmKN_mlS2Yis0L2Y3jvD4IOW974AuTL94Ee1OsKhGci-LWpdllpXsyMb1Gd5wwU0rjcVW-0IukPRanYPDmNv7h82NJy5ovJjl2KxMPqjhCFBDbAgZO7iYWR2t7ZciIxZe82k3TXEnO3YSM3Fm3oC947keEr25HWPlRHRkXLi_tvxE5DeOrPLcei7d7ulHxTOYv7UjKUUtqa1xw_ojNJqEaMPnpUeLKgQNgcEjHWamBOeBmAjiFw8S_XS26WogqRWCf"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-2xl pl-16 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-secondary-container/20 backdrop-blur-md border border-secondary-container/30 text-secondary-container px-3 py-1 rounded-full text-label-caps">
                  FEATURED MODULE
                </span>
              </div>
              <h1 className="font-display-xl text-white mb-6">
                The Art of Multi-Generational Wealth
              </h1>
              <p className="font-body-lg text-white/80 mb-8 max-w-lg">
                Master the philosophical and structural foundations required to
                preserve legacy and values across centuries of stewardship.
              </p>
              <div className="flex items-center gap-6">
                <Button className="tracking-widest" variant="light" caps>
                  START LEARNING
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <span className="font-label-caps tracking-widest text-white/60">
                  45 MINUTES &bull; ADVANCED
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-12 mb-stack-lg">
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-outline pb-8">
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full border border-primary" caps variant="primary">
                All Modules
              </Button>
              <Button
                className="rounded-full text-outline hover:text-primary border-outline"
                caps
                variant="outline"
              >
                Wealth Foundations
              </Button>
              <Button
                className="rounded-full text-outline hover:text-primary border-outline"
                caps
                variant="outline"
              >
                Advanced Tax Strategies
              </Button>
              <Button
                className="rounded-full text-outline hover:text-primary border-outline"
                caps
                variant="outline"
              >
                Global Markets
              </Button>
              <Button
                className="rounded-full text-outline hover:text-primary border-outline"
                caps
                variant="outline"
              >
                Family Legacy
              </Button>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline" />
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary-container text-body-md italic shadow-inner"
                placeholder="Search library..."
                type="text"
              />
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Close-up of high-quality architectural blueprints and a vintage gold fountain pen on an ivory surface. The lighting is soft and ambient, emphasizing textures of paper and metal. The color palette consists of neutral beiges, sage green accents, and metallic gold, reflecting a mood of precise planning and financial foundation building."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXmYSgxdLe9fvCldde9U8XaLJEe-Rt5o6uKcFHgLVHv5azC-4jhksHy90u7NyeNqJvBJvbpC4Om3jEeVGtHdFb89O9lNpTAAzKXoHpZC70ugX1XDzeclf33e-VYpu1rqaxwWIf7kJuxFv0o9a3ZoYezQaHFxN5l7M8YwcwI3mLZq3G-Y_eecNQ4QJbRCmmFGi4BjkuEFUCt-RhSI6hOGkwf6EmHCLL3lToJv1YO6mQa-JBtHs0--s0BRGlKsdyRA-LvMed8kKdDn9V"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">FOUNDATIONS</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">20 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      BEGINNER
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Principals of Wealth Compounding
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  Understanding the mathematical and psychological levers of
                  long-term capital growth.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A professional workspace with a leather-bound notebook, a pair of luxury glasses, and a glass of water reflecting soft window light. The scene conveys focused intelligence and tax efficiency. Dominant colors are deep greens, warm grays, and clear glass reflections, maintaining a clean, professional, and luminous light aesthetic."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzHuw72JdaVZC8zgudgHnIu6lW7MO0ReqqAHCmHnZxfk6Mo6puVaKZ273T8cxP2-8exsdDi9JAAC9gEhAD4kQv_AgVJeceuaBJuAlckBIc4yiKsvKfvgv8h6OvwMNaYU4XZ4nBFGE1_mlJ2YWdCEX84wlYG1Jft8clSpgx3djEzDc6CIzncOnxECXKMzFRwalDtX3N7cjUfuiIARAytRuWs5_un04TlyA9rjvkC9ez3R8O7dzAvTem1PEIy_4CwFuAQNWb6e04MZD6"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">TAXATION</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">35 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      INTERMEDIATE
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Global Jurisdictions &amp; Tax Flows
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  A comprehensive guide to cross-border tax implications and
                  efficient structuring.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A minimalist abstract art piece representing market trends with delicate golden wire sculptures suspended in a bright, white gallery space. The lighting is high-key and diffused, creating a sense of clarity and modern stewardship. The aesthetic is airy, sophisticated, and clean, using tones of champagne gold and pristine white."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGboldDABW8NVZmBf1VVAnvLiOAPmBCNUar6bLeLqFkY-UUlBS4-hJNzmf-Jc9MWPOUfMw6Q-SJrrMKIV7ceQR0bfPVBGMhhk8BF9i04CqBlljqiVkdYzpQOLlwIqOYsAeTs1UmcDb7e42bIfTICO_oaUXak0s8MLcalXFZG9XfD5Su7o3EZnkVoGKI15KzRPHpjVFLHdqjy4O2jT22xco0WU9ZxHsEni9H9nQX8Wlfuz-ik712ysrZTxD9GBpeq9yYQrAL1_0gkUh"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">MARKETS</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">50 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      ADVANCED
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Macro Trends: The Next Decade
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  Predictive analysis of geopolitical shifts and emerging asset
                  classes for the decade ahead.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="An antique brass hourglass sitting on a dark wood table next to a stack of parchment. The lighting is focused and warm, creating high contrast and a sense of legacy and the passage of time. The palette is rich with deep browns, warm brass golds, and ivory parchment tones, evoking a timeless and professional mood."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmLynQlXG8RUczjLmiz0tCIaP1VeOPRexBCc2bfrRnYFpLc-jj7LoDdh-80RXdMV5nu3_jhnfH0Lj4OqhrIjxwXzHLZLVHAP99yeBFL2Y-lDRn6xxPoC5Yt-bFdvDX4QA3kv4LqUORqBm-tPhUBEBYAa3TJ97i6te-APBmpHXuzKXj1PLQyMerfSmRpupZCWIcPwROkpxxY67MiFEm2DmUocQP5BxUdJK0iI0tD4OpKPGQNLlQAyoGCEFdpihCuFlIcqQSGgdt_IWA"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">LEGACY</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">30 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      INTERMEDIATE
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Philanthropy as a Strategic Asset
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  Integrating charitable giving into the core of your wealth
                  management architecture.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A serene, minimalist image of polished marble stairs leading upward into soft white light. The image represents financial progression and upward mobility. The aesthetic is clean, bright, and expensive, with a subtle palette of cool grays, pristine whites, and soft sage shadows."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClDAvt9Q3q-t51PEAFZVvxVe3o286PS1k6i7gfnji2j5J51bDMnaIAEM3y9MsCcmU-vLVC3qSiZXtyvCDYxAlKYsrkXA6CYA66QctB5ocbMyApL_ff8l_hf2JyNRFj0_0fyIwsJHl1eGoC63dkFph5lxPz2Yo_4ok3DSifsIfuH6ZSBeIW1osQbqmJjNOWALZaafq7x_c9D-JBQS1khB9hkJIoeCLimzDHXRPKPxMGSLmTPiTrg0f0Qzn8CwCzf5JOD7PEPdXZ8Ov1"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">FOUNDATIONS</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">15 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      BEGINNER
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Modern Stewardship 101
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  Redefining the role of the wealth holder in a rapidly evolving
                  global economy.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="glass-card rounded-xl overflow-hidden rim-light group hover:shadow-xl transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="A modern glass skyscraper reflecting a clear blue sky and other elegant buildings. The architectural style is sharp, clean, and futuristic. The lighting is bright and crisp, emphasizing transparency and structural integrity. Tones of steel blue, reflective glass, and white concrete create a professional, global markets atmosphere."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Nqq-znC5MPRGxxWHTaIIdxWyDUGBzc3Wc5wduzJ5y2g2e8TKYjSKkau2XLsVEfdpozfsGDncw9ZdpMR8L9pYn-_5uUyfUMV3T8aim3XDRud8Awm4vj7yPle4mUZTIcM2R3OQc2K1h71DOFJhD963S9zpabVghAieSATu0VMbQIVma8T6sLAMk96FhlIeRaIMNVBt3AOdFsnquO79DGULhDx6D9ZIbIiT-6-ohiN1TvRp3Vcv9dAgRxYfFm4SevYSgF5Mf_BnQ8km"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full">
                  <span className="font-label-caps text-primary">MARKETS</span>
                </div>
              </div>
              <div className="p-stack-md">
                <div className="flex items-center gap-4 mb-3 text-outline">
                  <div className="flex items-center gap-1">
                    <Clock className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">40 MIN</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span className="text-xs font-label-caps tracking-wider">
                      ADVANCED
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-primary mb-3">
                  Alternative Assets: Private Equity
                </h3>
                <p className="text-on-surface-variant font-body-md mb-6 line-clamp-2">
                  Navigating the complexities and illiquidity premiums of
                  institutional-grade private markets.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-label-caps tracking-widest group/link"
                  href="#"
                >
                  VIEW MODULE
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-12 mt-24">
          <div className="bg-primary p-16 rounded-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display-xl text-white mb-4">
                Request a Private Briefing
              </h2>
              <p className="text-white/70 font-body-lg">
                For modules requiring specific legal or jurisdictional tailoring,
                we offer bespoke educational sessions for family offices.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center">
               <Button
                 className="tracking-[0.2em] shadow-xl hover:scale-105 transition-transform"
                 size="lg"
                 variant="secondaryContainer"
                 caps
               >
                 CONTACT ADVISOR
               </Button>
              <span className="mt-4 text-white/40 text-[10px] font-label-caps uppercase tracking-widest">
                Available to Premier Members Only
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
