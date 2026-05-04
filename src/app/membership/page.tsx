import { CheckCircle, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "../components/Button";
import { FAQItem } from "../components/FAQItem";
import { PageHeader } from "../components/PageHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const tiers = [
  {
    id: "foundation",
    eyebrow: "The Base",
    name: "Foundation",
    description:
      "Ideal for individuals establishing their financial architecture and seeking professional clarity.",
    price: "$2,500",
    features: [
      "Basic Wealth Advisory",
      "Quarterly Reviews",
      "Digital Asset Portal",
      "Standard Tax Reporting",
    ],
    cta: "ENROLL IN FOUNDATION",
    variant: "outline" as const,
    featured: false,
  },
  {
    id: "sovereign",
    eyebrow: "The Ultimate",
    name: "Sovereign",
    description:
      "Reserved for high-complexity portfolios requiring constant vigilance and family office support.",
    price: "$15,000",
    features: [
      "Concierge Services",
      "Daily Portfolio Monitoring",
      "Multi-Generational Planning",
      "Priority Direct Access",
      "Comprehensive Tax Integration",
    ],
    cta: "APPLY FOR SOVEREIGN",
    variant: "secondaryContainer" as const,
    featured: true,
    badge: "Most Distinguished",
  },
  {
    id: "legacy",
    eyebrow: "The Bridge",
    name: "Legacy",
    description:
      "Designed for established wealth looking to optimize and protect future generations.",
    price: "$7,500",
    features: [
      "Personalized Strategy",
      "Monthly Planning Meetings",
      "Estate Planning Review",
      "Risk Mitigation Strategy",
    ],
    cta: "ENROLL IN LEGACY",
    variant: "outline" as const,
    featured: false,
  },
];

const faqs = [
  {
    question: "Can I upgrade my membership later?",
    answer:
      "Yes, you can upgrade your membership at any time. Our team will perform a seamless transition of your assets and strategic planning to the new tier level immediately upon activation.",
  },
  {
    question: "How are concierge services defined?",
    answer:
      "Concierge services under our Sovereign tier include lifestyle management, high-value asset acquisition consulting (private aviation, yachting, art), and dedicated 24/7 emergency financial support.",
  },
  {
    question: "What does multi-generational planning include?",
    answer:
      "We coordinate family meetings, provide financial literacy education for heirs, and structure trusts and legal frameworks that ensure your family's values and wealth persist for centuries.",
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      <SiteHeader activeHref="/membership" />
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Architecting Legacies"
          title="Choose Your Level of Stewardship"
          description="Sophisticated wealth management tailored to your life's complexity. From foundational guidance to multi-generational concierge services."
          align="center"
        />

        {/* Pricing tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) =>
            tier.featured ? (
              <div
                key={tier.id}
                className="relative bg-primary-container text-on-primary-container rounded-xl p-10 flex flex-col shadow-[0_30px_60px_rgba(79,99,82,0.15)] ring-1 ring-secondary/30 hover:scale-[1.03] transition-transform duration-500 z-10"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container px-6 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest shadow-lg">
                  {tier.badge}
                </div>
                <div className="mb-8">
                  <span className="font-label-caps text-on-tertiary-container uppercase mb-2 block">
                    {tier.eyebrow}
                  </span>
                  <h2 className="font-headline-lg text-white mb-4">{tier.name}</h2>
                  <p className="font-body-md text-on-primary-container opacity-80">{tier.description}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline mb-6">
                    <span className="font-display-xl text-secondary-container">{tier.price}</span>
                    <span className="text-on-primary-container font-body-md ml-2 opacity-70">/ annually</span>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                        <span className="font-body-md">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="mt-auto w-full shadow-[0_4px_15px_rgba(254,214,91,0.3)]"
                  caps
                  variant="secondaryContainer"
                >
                  {tier.cta}
                </Button>
              </div>
            ) : (
              <div
                key={tier.id}
                className="glass-card luminous-border rounded-xl p-10 flex flex-col hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="mb-8">
                  <span className="font-label-caps text-outline uppercase mb-2 block">{tier.eyebrow}</span>
                  <h2 className="font-headline-lg text-primary mb-4">{tier.name}</h2>
                  <p className="font-body-md text-outline">{tier.description}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline mb-6">
                    <span className="font-display-xl text-primary">{tier.price}</span>
                    <span className="text-outline font-body-md ml-2">/ annually</span>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                        <span className="font-body-md text-on-surface">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-auto w-full" caps variant="outline">
                  {tier.cta}
                </Button>
              </div>
            )
          )}
        </div>

        {/* Philosophy */}
        <section className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNzoIx88gj2Z1iUxBUdZNqd8BY7zb-IcYVaH_m4BLWcJYhw2Q97FNQDT6tGVVMlre3ufkNSB5VvyUhOTqECGUKkFESsSP3O4Zx4qGL_ORHTsfpPcKozcgX4um0dp6hp93QGhSygWz2az9vFAlsl7C_WqOe33-bKBXpwU8e9tLRMGZJIFQ-M7nqY5aZ2UlOmHLq3ZTcxXDrUfi0GuUoQbgJATZIoQhQSQvK6bU7s4TMkg-fE5RotNTBjKmi9K7wtDXhhbpw56modo5e"
                alt="RVG private office"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-display-xl text-primary mb-8">Beyond the Balance Sheet</h2>
            <div className="space-y-6">
              {[
                {
                  icon: ShieldCheck,
                  title: "Discreet Stewardship",
                  body: "We operate with the highest level of confidentiality and professional poise, acting as the silent guardians of your capital.",
                },
                {
                  icon: Users,
                  title: "Generational Insight",
                  body: "Our Sovereign tier specializes in the transfer of wisdom, not just wealth, across generations of your family.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-primary mb-2">{title}</h3>
                    <p className="font-body-md text-outline">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="font-display-xl text-primary text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
