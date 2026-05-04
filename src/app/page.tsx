import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "./components/Button";
import { SectionHeader } from "./components/SectionHeader";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TestimonialCard } from "./components/TestimonialCard";

const testimonials = [
  {
    quote:
      "The level of personalized attention and strategic foresight at RVG is unparalleled. They didn't just manage my portfolio — they understood my legacy.",
    name: "Julian Thorne",
    title: "CEO, Heritage Logistics",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMlFkoKLalRovD2siIGveuoW5i6Ck1RNy3TK8uG4mSPt07_0rpDjr_cSPh5HjjkZKFbUEXmo2HcF6vazyN2ZMnJ6-jjNrHHv05YDxe2FwarBcUwETg0S53vnFW8TYVtC79uIGIEuzjxBsXqaf25gxraBo_OP5YlebOTcsWqeePT1nlmb5GO4hN4ehAj7yn728g-38wt8USeiMYv4VnCaz3cyIU6P8SDsMflHQPByMFoD57_KD8aNtDXmDdyiTGhxX_LDm2_MPbki",
  },
  {
    quote:
      "Their transparency in real estate development has been a breath of fresh air. I finally feel like a genuine partner in my own wealth journey.",
    name: "Eleanor Vance",
    title: "Founder, Vance Interiors",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu50XlJ9m_H-_tPmpo1lgqlvLgzAUw9_j0u7vEGktZfQN8ZP1z19b2PZgGtHjoFUyHNdP9CQpvIXEE-djnBnGQztHrdybZUfVUWrblJVJGIhXzeef5l8EP4Nr3hSiFaF2wBaVvCFw--_HuDRpNKA1ssm0hhlzOsjNqVnFSNqLDjBfRrDgh3vr4ry3QIRLl4VZbNNenlGEwa-VCApZH8TgGHyZ41V_8y2lzy8IKHstYLfE6VofkxAsFfS0XC_Sw5e4TThSYwzky4_-X",
  },
];

export default function Home() {
  return (
    <div className="bg-background text-on-surface">
      <SiteHeader activeHref="/" />
      <main>
        {/* Hero */}
        <section className="hero-gradient pt-48 pb-32 px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <h1 className="font-display-xl text-display-xl text-primary leading-tight">
                Secure Your Future.
                <br />
                <span className="text-[#735c00]">Build Your Legacy.</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
                Bespoke financial stewardship for individuals who value discretion
                and clarity. We craft personalized strategies that align with your
                generational aspirations.
              </p>
              <div className="flex items-center gap-6">
                <Button variant="primaryContainer" size="lg" caps>
                  Explore Our Services
                </Button>
                <button className="flex items-center gap-2 font-label-caps text-primary group">
                  Our Philosophy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="rounded-2xl p-3 overflow-hidden border border-outline-variant/30 bg-surface-container-lowest shadow-[0_12px_40px_rgba(56,75,59,0.1)]">
                <img
                  alt="Financial Visualization"
                  className="rounded-xl w-full h-[400px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6a627--3UfUrlDx4JivaoP26DFHOc5Sm_ZdniR9kxDnwhXaE0ibhtniy77XGZLFlboL-r-5qDkAtG4VMBvGv7Ia_HxdJsXl8iruuVvmBrutxblbAnsKVZWn4IzyQd_q1VkjRJ6HIl9N88djCqApNuzuDuwwsxtjTPc_3ZpNN3PHVd4-23ooq10FXULHYSf8ReZQkpS0-n6mqFJ54KxEzsJY9gFv8uoLPhBQZpJXxt_yzak6dGfXdnROqgymKMeL3HIpUBELyIkNJ"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature bar — hidden */}
        <section className="py-16 bg-surface-container-high hidden">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-outline-variant/40 py-12">
              {[
                { Icon: BarChart3, label: "Personalized Strategies" },
                { Icon: ShieldCheck, label: "Transparent Processes" },
                { Icon: BadgeCheck, label: "Proven Results" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-headline-md text-primary text-lg">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services bento */}
        <section className="py-stack-lg px-12 bg-surface-container-lowest/90">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Expertise Across Every Asset Class"
              description="A comprehensive approach to wealth preservation — your portfolio built for resilience, diversification, and generational continuity."
              linkLabel="View All Services"
              linkHref="/services"
            />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Investment Planning — featured */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer min-h-[340px]">
                <img
                  alt="Investment Planning"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnmF6XbazkQ4kZZmPo2xPw42F6e0NcsOUyBDJ60B7uD_-Q4eCYXv-5RyoAd99lFMjQLuSFFwQJl6cAO9LpN3qG0Gl5beFFBmmf0iwqHKWDD_HeozZ3xHIw41BPZKTZRY05iN4jnmbGUSI1Brf0ouZO-emAUzooNUwoXyb_gbdXg46cm4VS-f6NPZUs-ydPdHA9Wt0rtQ_H8c6GkT8t6UukwwaQ-PYAz7nQJBmzSgSZXDH5hCeLtwyiMKyidi9qIrhbdqceLAV0RAa"
                />
                <div className="relative z-10">
                  <span className="text-secondary font-label-caps mb-4 block">
                    Strategic Management
                  </span>
                  <h3 className="font-display-xl text-display-xl text-primary mb-4">
                    Investment Planning
                  </h3>
                  <p className="text-body-md text-on-surface-variant max-w-md">
                    Multi-generational portfolio construction focused on sustainable
                    growth and risk mitigation in global markets.
                  </p>
                </div>
              </div>

              {/* Real Estate */}
              <BentoCard
                colSpan={4}
                iconBg="bg-tertiary-fixed"
                iconColor="text-tertiary"
                icon={<Building2 className="w-7 h-7" />}
                title="Real Estate"
                description="Unlocking value in premium residential and commercial developments through exclusive access and rigorous analysis."
              />

              {/* Retirement */}
              <BentoCard
                colSpan={4}
                iconBg="bg-primary-fixed"
                iconColor="text-primary"
                icon={<Leaf className="w-7 h-7" />}
                title="Retirement"
                description="Transitioning from accumulation to distribution with a focus on tax-efficiency and lifestyle continuity."
              />

              {/* Education Funds */}
              <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-10 flex items-center justify-between">
                <div className="max-w-sm">
                  <h3 className="font-headline-lg text-primary mb-2">Education Funds</h3>
                  <p className="text-body-md text-on-surface-variant">
                    Ensuring the next generation has the foundations for excellence
                    through structured educational trusts.
                  </p>
                </div>
                <AvatarStack />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-stack-lg hero-gradient">
          <div className="max-w-7xl mx-auto px-12">
            <SectionHeader eyebrow="Client Perspectives" title="What Our Clients Say" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Pricing */}
        <section className="py-stack-lg px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-2xl p-20 flex flex-col items-center text-center">
              <span className="font-label-caps text-tertiary-fixed mb-6 tracking-[0.3em]">
                Next Steps
              </span>
              <h2 className="font-display-xl text-5xl text-on-primary mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-on-primary/70 text-body-lg max-w-xl mb-12">
                Select the stewardship path that aligns with your current milestone.
                Join our exclusive membership for premium insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <PricingTier name="Foundation" price="$1.5k" variant="ghost" />
                <PricingTier name="Steward" price="$5.0k" variant="featured" badge="Most Preferred" />
                <PricingTier name="Legacy" price="Custom" variant="ghost" cta="Contact Us" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

/* ─── Page-local sub-components ─────────────────────────────────────────── */

function BentoCard({
  colSpan,
  icon,
  iconBg,
  iconColor,
  title,
  description,
}: {
  colSpan: number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}) {
  return (
    <div className={`md:col-span-${colSpan} bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-10 flex flex-col`}>
      <div className="mb-auto">
        <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center ${iconColor} mb-8`}>
          {icon}
        </div>
        <h3 className="font-headline-lg text-primary mb-4">{title}</h3>
        <p className="text-body-md text-on-surface-variant">{description}</p>
      </div>
      <button className="mt-8 flex items-center text-primary font-semibold gap-2">
        Details <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function AvatarStack() {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAaSkWicqABIeCokrqevMu3HN1caBPLVo_SgOwEt5zwOZDCKwu2MP9j9qpRQFLsD5BVMIaqS_yY6MKvv-krP7Prj8ixTW89yNKcoVC-oGOtnbXPyO-TyQ_C2pFaSE6zcS3VatIfqG_cAJCi0CDM5soFFnQlSoK5qEauJYpX7MrRhmqjQ0vAn46k15TbJCImrqi5PWwlHEoZHvTpNdZDK_v8ikHQNQruFCRJzHzmcxdouJmvmm5Oeb5FnMAcpqfQ41zQY6bMeiSbKzmA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4V99iwZlIQQZybTrLYgUN3RxlkuABjlBY2Bx8QJXEa2Jw4syaPyk79-Hl82CyzDSvnHwT3vsvcI_kTOCwERaI9NbLZPLSHxXUrbq0hJIB7nBCsvc_U5Xqhm7TF8y_9x3CNxh_KnYIEk820UaDNDKmVtsxinCg3_HfWgj-zDLlW7d6-3Yp8wVCGefZHa6VpB5gZH_8cw4cKVgMoVqnJkOnrf9Zu7kj0YV8vU1qK0S3gt-sj5Ddx-kCy31zkF8qXXaUoNdFRTa2Z2EF",
  ];
  return (
    <div className="flex -space-x-4">
      {avatars.map((src, i) => (
        <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-surface-container overflow-hidden">
          <img className="w-full h-full object-cover" src={src} alt="" />
        </div>
      ))}
      <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
        +8
      </div>
    </div>
  );
}

function PricingTier({
  name,
  price,
  variant,
  badge,
  cta = "Select Tier",
}: {
  name: string;
  price: string;
  variant: "ghost" | "featured";
  badge?: string;
  cta?: string;
}) {
  const isGhost = variant === "ghost";
  return (
    <div
      className={`relative p-10 rounded-3xl border flex flex-col items-center ${
        isGhost
          ? "bg-white/10 backdrop-blur-xl border-white/20"
          : "bg-white border-white/20 scale-105 shadow-2xl z-10"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
          {badge}
        </div>
      )}
      <h3 className={`font-headline-md mb-2 ${isGhost ? "text-on-primary" : "text-primary"}`}>
        {name}
      </h3>
      <span className={`text-3xl font-display-xl mb-6 ${isGhost ? "text-on-primary" : "text-primary"}`}>
        {price}
        <span className={`text-sm ${isGhost ? "text-white/50" : "text-primary/40"}`}>{price !== "Custom" ? "/yr" : ""}</span>
      </span>
      <Button className="w-full rounded-xl" caps variant={isGhost ? "light" : "primary"}>
        {cta}
      </Button>
    </div>
  );
}
