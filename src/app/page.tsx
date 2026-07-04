import {
  ArrowRight,
  BookOpen,
  Check,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import {
  flagship,
  mission,
  planningProcess,
  services,
  tiers,
} from "@/lib/content";

const journey = [
  { icon: BookOpen, label: "Knowledge" },
  { icon: Lightbulb, label: "Clarity" },
  { icon: Target, label: "Action" },
  { icon: TrendingUp, label: "Wealth" },
];

const turningPoints = [
  "Invest time in financial knowledge",
  "Make decisions with logic, not emotion",
  "Evaluate both opportunity and risk",
  "Follow a structured financial plan",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section
        background="evergreen"
        className="relative overflow-hidden flex items-center min-h-[calc(100dvh-81px)]"
        containerClassName="w-full"
      >
        <div className="relative flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <Eyebrow tone="gold">Bespoke Financial Stewardship</Eyebrow>
            <h1 className="text-display text-white leading-tight">
              Secure Your Future.
              <br />
              <span className="text-gold">Build Your Legacy.</span>
            </h1>
            <p className="text-body text-white/70 max-w-lg">
              Your future is built by intent. At RVGWealth, we turn your
              ambitions into a structured financial roadmap designed to help
              you organize, protect, and optimize your financial goals.
            </p>
            <div className="flex items-center gap-4">
              <Button
                href="/services"
                variant="primary"
                className="bg-gold text-ink hover:bg-gold/90"
              >
                Explore Our Services
              </Button>
              <Button href="/membership" variant="ghost" className="!text-white">
                View Membership
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold rounded-full blur-[80px] opacity-25" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-3xl border border-gold/30" />
            <div className="rounded-2xl bg-gold border border-gold overflow-hidden relative z-10 shadow-[0_20px_40px_rgba(21,35,28,0.08)]">
              <img
                alt="Financial Visualization"
                className="rounded-xl w-full h-[360px] lg:h-[460px] object-cover"
                data-alt="A highly sophisticated, minimalist 3D visualization of wealth growth using translucent glass bars and golden financial data points. The lighting is soft and high-key, creating a luminous light-mode atmosphere with soft sage and ivory tones. The visual style is premium and professional, suggesting clarity and stewardship in financial planning through an elegant, abstract representation of success."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6a627--3UfUrlDx4JivaoP26DFHOc5Sm_ZdniR9kxDnwhXaE0ibhtniy77XGZLFlboL-r-5qDkAtG4VMBvGv7Ia_HxdJsXl8iruuVvmBrutxblbAnsKVZWn4IzyQd_q1VkjRJ6HIl9N88djCqApNuzuDuwwsxtjTPc_3ZpNN3PHVd4-23ooq10FXULHYSf8ReZQkpS0-n6mqFJ54KxEzsJY9gFv8uoLPhBQZpJXxt_yzak6dGfXdnROqgymKMeL3HIpUBELyIkNJ"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Journey band */}
      <Section background="sage" divider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen ring-1 ring-evergreen/15">
                  <Icon className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-h3 text-ink">{step.label}</span>
                  {i < journey.length - 1 && (
                    <ArrowRight className="hidden md:inline-block ml-3 w-4 h-4 text-gold align-middle" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services */}
      <Section background="white" divider>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <Eyebrow tone="gold" className="mb-4">
              Our Services
            </Eyebrow>
            <h2 className="text-h2 text-ink mb-4">
              Guidance for Every Stage of Your Journey
            </h2>
            <p className="text-body text-slate">
              We go beyond traditional financial services — empowering you with
              the knowledge, strategies, and confidence to build lasting wealth.
            </p>
          </div>
          <Button href="/services" variant="ghost">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Flagship */}
        <Card className="p-10 md:p-12 mb-8 bg-gradient-to-br from-mist via-white to-evergreen/10">
          <Eyebrow tone="gold" className="mb-4">
            {flagship.tagline}
          </Eyebrow>
          <h3 className="text-h2 text-ink mb-4">{flagship.title}</h3>
          <p className="text-body text-slate max-w-2xl mb-8">
            {flagship.description}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {flagship.items.map((item) => (
              <span key={item} className="flex items-center gap-2 text-slate">
                <Check className="w-4 h-4 text-gold" />
                <span className="text-body">{item}</span>
              </span>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} hover className="p-8 flex flex-col">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen ring-1 ring-evergreen/15">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-h3 text-ink mb-2">{service.title}</h3>
                <p className="text-body text-slate">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Mission */}
      <Section background="evergreen" divider>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow tone="gold" className="mb-6">
            Our Mission
          </Eyebrow>
          <p className="text-h2 text-white leading-snug mb-8">{mission}</p>
          <div className="inline-flex items-baseline gap-3">
            <span className="text-display text-gold">100,000</span>
            <span className="text-body text-white/70">lives we&apos;re here to transform</span>
          </div>
        </div>
      </Section>

      {/* Story */}
      <Section background="white" divider>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow tone="gold" className="mb-4">
              A Story Worth Reflecting On
            </Eyebrow>
            <h2 className="text-h2 text-ink mb-6">Wealth Isn&apos;t Built Overnight.</h2>
            <p className="text-body text-slate mb-4">
              A hardworking family dreams of a better future — security, comfort,
              and stability for their loved ones. Along the way come the
              &ldquo;easy opportunities&rdquo;: double your money, guaranteed
              returns, limited-time offers.
            </p>
            <p className="text-body text-slate">
              What looks like a shortcut often becomes a setback. The truth is
              simple: wealth is built with knowledge, discipline, and the right
              strategy — and awareness is the first step toward financial
              freedom.
            </p>
          </div>
          <Card className="p-10">
            <h3 className="text-h3 text-ink mb-6">The Turning Point</h3>
            <ul className="space-y-4">
              {turningPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 text-gold mt-0.5" />
                  <span className="text-body text-slate">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Our Process */}
      <Section background="sage" divider>
        <div className="text-center mb-16">
          <Eyebrow tone="gold" className="mb-4">
            Our Process
          </Eyebrow>
          <h2 className="text-h2 text-ink">A Structured Path to Clarity</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planningProcess.map((step, i) => (
            <Card key={step.title} className="p-8">
              <span className="text-display text-gold/30 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-h3 text-ink mt-4 mb-2">{step.title}</h3>
              <p className="text-body text-slate">{step.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing CTA */}
      <Section background="evergreen" divider>
        <div className="flex flex-col items-center text-center">
          <Eyebrow tone="gold" className="mb-6">
            Financial Education &amp; Planning Packages
          </Eyebrow>
          <h2 className="text-h2 text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-body text-white/70 max-w-xl mb-12">
            Choose the stage that fits where you are today. One-time enrolment —
            no recurring fees.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            {tiers.map((tier) =>
              tier.popular ? (
                <Card
                  key={tier.name}
                  className="p-10 flex flex-col items-center scale-105 relative z-10"
                >
                  <div className="absolute -top-4 bg-gold text-ink px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                  <h3 className="text-h3 text-ink mb-2">{tier.name}</h3>
                  <span className="text-h2 text-ink mb-6">
                    {tier.price}
                    <span className="text-sm text-slate"> one-time</span>
                  </span>
                  <Button href="/membership" variant="primary" className="w-full">
                    {tier.cta}
                  </Button>
                </Card>
              ) : (
                <div
                  key={tier.name}
                  className="bg-white/10 p-10 rounded-3xl border border-white/20 flex flex-col items-center"
                >
                  <h3 className="text-h3 text-white mb-2">{tier.name}</h3>
                  <span className="text-h2 text-white mb-6">
                    {tier.price}
                    <span className="text-sm text-white/50"> one-time</span>
                  </span>
                  <Button
                    href="/membership"
                    variant="secondary"
                    className="w-full bg-white text-ink border-white hover:bg-white/90 hover:border-white"
                  >
                    {tier.cta}
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
