import { Check, ChevronDown, ShieldCheck, Users } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { planningProcess, tiers } from "@/lib/content";

const faqs = [
  {
    q: "Is this a one-time payment or a subscription?",
    a: "Each stage is a one-time enrolment — there are no recurring fees. You gain lasting access to the course, templates, and guidance for that stage.",
  },
  {
    q: "Can I upgrade my stage later?",
    a: "Yes. You can upgrade at any time. Our team transitions your plan and sessions to the new stage immediately upon activation.",
  },
  {
    q: "What happens in the one-on-one sessions?",
    a: "Growth and Apex members work through our 6-step planning process in personalized sessions — establishing goals, analyzing your position, and building a strategy tailored to you.",
  },
  {
    q: "Who is each stage designed for?",
    a: "From individuals just starting their financial journey to those managing significant wealth — there is a stage built for exactly where you are today.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <Section background="evergreen" className="text-center">
        <Eyebrow tone="gold" className="mb-4">
          Membership Program
        </Eyebrow>
        <h1 className="text-display text-white mb-6">
          Choose Your Level of Stewardship
        </h1>
        <p className="text-body text-white/70 max-w-2xl mx-auto">
          A structured, three-stage approach designed to grow with you. Whether
          you are just starting, building momentum, or managing significant
          wealth, we meet you where you are — and take you where you want to be.
        </p>
      </Section>

      {/* Tiers */}
      <Section background="sage" divider>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) =>
            tier.popular ? (
              <div
                key={tier.name}
                className="relative z-10 flex flex-col rounded-xl bg-evergreen p-10 text-white shadow-[0_30px_60px_rgba(21,35,28,0.18)] ring-1 ring-gold/30 transition-transform duration-500 hover:scale-[1.03] lg:-my-2"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-ink px-6 py-1 rounded-full text-eyebrow shadow-lg">
                  Most Popular
                </div>
                <div className="mb-8">
                  <Eyebrow tone="gold" className="mb-2">
                    {tier.stage}
                  </Eyebrow>
                  <h2 className="text-h3 text-white mb-4">{tier.name}</h2>
                  <p className="text-body text-white/80">{tier.tagline}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline mb-6">
                    <span className="text-display text-gold">{tier.price}</span>
                    <span className="text-body text-white/70 ml-2">one-time</span>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 shrink-0 text-gold mt-0.5" />
                        <span className="text-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-auto w-full rounded-lg bg-gold py-4 text-center text-eyebrow text-ink shadow-[0_4px_15px_rgba(185,138,46,0.3)] transition-opacity hover:opacity-90"
                >
                  {tier.cta}
                </a>
              </div>
            ) : (
              <div
                key={tier.name}
                className="group relative flex flex-col rounded-xl border border-hairline border-t-white bg-white/70 p-10 shadow-[0_4px_30px_rgba(21,35,28,0.06)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]"
              >
                <div className="mb-8">
                  <Eyebrow tone="muted" className="mb-2">
                    {tier.stage}
                  </Eyebrow>
                  <h2 className="text-h3 text-ink mb-4">{tier.name}</h2>
                  <p className="text-body text-slate">{tier.tagline}</p>
                </div>
                <div className="mb-10">
                  <div className="flex items-baseline mb-6">
                    <span className="text-display text-ink">{tier.price}</span>
                    <span className="text-slate text-body ml-2">one-time</span>
                  </div>
                  <ul className="space-y-4">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 shrink-0 text-evergreen mt-0.5" />
                        <span className="text-body text-ink">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="mt-auto w-full rounded-lg border border-ink/15 py-4 text-center text-eyebrow text-ink transition-colors hover:border-ink hover:bg-white"
                >
                  {tier.cta}
                </a>
              </div>
            )
          )}
        </div>
      </Section>

      {/* Process */}
      <Section background="white" divider>
        <div className="max-w-2xl mb-16">
          <Eyebrow tone="gold" className="mb-4">
            Inside Growth &amp; Apex
          </Eyebrow>
          <h2 className="text-h2 text-ink">Our Structured Planning Process</h2>
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

      {/* Philosophy */}
      <Section background="sage" divider>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow tone="gold" className="mb-4">
              Our Philosophy
            </Eyebrow>
            <h2 className="text-h2 text-ink mb-8">Beyond the Balance Sheet</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen ring-1 ring-evergreen/15">
                  <ShieldCheck className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-h3 text-ink mb-2">Knowledge First</h3>
                  <p className="text-body text-slate">
                    We don&apos;t just guide — we equip you with the clarity and
                    tools to make confident financial decisions independently.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen ring-1 ring-evergreen/15">
                  <Users className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-h3 text-ink mb-2">Generational Insight</h3>
                  <p className="text-body text-slate">
                    Our Apex stage specializes in the transfer of wisdom, not
                    just wealth, across generations of your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-10 bg-gradient-to-br from-mist via-white to-evergreen/10 aspect-[4/5] flex items-center justify-center">
            <p className="text-h3 text-evergreen/70 text-center max-w-xs">
              Informed individuals make powerful financial decisions.
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white" divider>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-ink text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <Card key={faq.q} className="p-6">
                <details className="group">
                  <summary className="list-none flex justify-between items-center cursor-pointer">
                    <h3 className="text-h3 text-ink">{faq.q}</h3>
                    <ChevronDown className="w-5 h-5 text-slate transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="pt-4 text-body text-slate">{faq.a}</div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
