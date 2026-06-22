import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { flagship, planningProcess, services } from "@/lib/content";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="evergreen">
        <div className="max-w-3xl">
          <Eyebrow tone="gold" className="mb-4">
            Comprehensive Stewardship
          </Eyebrow>
          <h1 className="text-display text-white mb-6">
            Empowering You to Take Control of Your Financial Future
          </h1>
          <p className="text-body text-white/70">
            We go beyond traditional financial services — equipping you with the
            knowledge, strategies, and confidence to make smarter decisions and
            build lasting wealth at every stage of your journey.
          </p>
        </div>
      </Section>

      {/* Flagship */}
      <Section background="white" divider>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow tone="gold" className="mb-4">
              {flagship.tagline}
            </Eyebrow>
            <h2 className="text-h2 text-ink mb-6">{flagship.title}</h2>
            <p className="text-body text-slate mb-8">{flagship.description}</p>
            <Button href="#" variant="primary" className="bg-ink text-white">
              Start Planning
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <Card className="p-10 bg-gradient-to-br from-mist via-white to-evergreen/10">
            <h3 className="text-h3 text-ink mb-6">Our Planning Focus</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {flagship.items.map((item) => (
                <span key={item} className="flex items-center gap-2 text-slate">
                  <Check className="w-4 h-4 shrink-0 text-gold" />
                  <span className="text-body">{item}</span>
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Services grid */}
      <Section background="sage" divider>
        <div className="max-w-2xl mb-16">
          <Eyebrow tone="gold" className="mb-4">
            What We Offer
          </Eyebrow>
          <h2 className="text-h2 text-ink">
            Specialist Consultancies, Built Around You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                hover
                className="p-10 flex flex-col justify-between"
              >
                <div>
                  <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen ring-1 ring-evergreen/15">
                    <Icon className="w-7 h-7" />
                  </span>
                  <Eyebrow tone="muted" className="mb-2">
                    {service.tagline}
                  </Eyebrow>
                  <h3 className="text-h3 text-ink mb-4">{service.title}</h3>
                  <p className="text-body text-slate mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="w-5 h-5 shrink-0 text-gold" />
                        <span className="text-body text-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section background="white" divider>
        <div className="max-w-2xl mb-16">
          <Eyebrow tone="gold" className="mb-4">
            How We Work
          </Eyebrow>
          <h2 className="text-h2 text-ink">Our 6-Step Planning Process</h2>
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

      {/* Philosophy quote */}
      <Section background="evergreen" divider>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 text-white mb-6">
            &ldquo;True wealth is the ability to fully experience life on your
            own terms.&rdquo;
          </h2>
          <div className="w-12 h-px bg-white/40 mx-auto mb-6" />
          <Eyebrow tone="gold">The RVGWealth Stewardship Philosophy</Eyebrow>
        </div>
      </Section>
    </>
  );
}
