import {
  ArrowRight,
  Building2,
  CheckCircle,
  GraduationCap,
  Leaf,
  Wallet,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";

const services = [
  {
    icon: Wallet,
    title: "Investment Planning",
    description:
      "Access bespoke portfolios built on global market insights and institutional-grade rigorous analysis. We focus on risk-adjusted returns tailored to your specific liquidity needs and risk tolerance.",
    items: [
      "Global Asset Allocation",
      "Tactical Rebalancing",
      "Private Equity Access",
    ],
  },
  {
    icon: Leaf,
    title: "Retirement Planning",
    description:
      "Navigate the strategic transition from wealth accumulation to sustainable distribution. We ensure your longevity and lifestyle are protected through multi-generational tax optimization.",
    items: [
      "Income Stream Engineering",
      "Longevity Risk Hedging",
      "Estate Integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education Planning",
    description:
      "Secure your family's future through tax-efficient funding strategies for prestigious institutions. We optimize 529 plans and trust structures to maximize educational potential.",
    items: [
      "Tax-Advantaged Savings",
      "Education Trust Design",
      "Legacy Impact Analysis",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    description:
      "Institutional-grade property analysis for residential and commercial acquisitions. We treat real estate as a strategic asset class within your overall wealth portfolio.",
    items: [
      "Market Yield Evaluation",
      "Portfolio Diversification",
      "Financing Coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section background="evergreen">
        <div className="max-w-3xl">
          <Eyebrow tone="gold" className="mb-4">
            Comprehensive Stewardship
          </Eyebrow>
          <h1 className="text-display text-white mb-6">
            Expert Guidance for Modern Wealth
          </h1>
          <p className="text-body text-white/70">
            We provide bespoke financial strategies designed for those who
            value discretion, professional integrity, and the long-term
            preservation of capital.
          </p>
        </div>
      </Section>

      <Section background="white" divider>
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
                  <div className="w-16 h-16 rounded-full bg-evergreen/10 text-evergreen flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-h3 text-ink mb-4">{service.title}</h3>
                  <p className="text-body text-slate mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-slate"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 text-gold" />
                        <span className="text-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="ghost" href="#">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="evergreen" divider>
        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-hairline">
          <img
            alt="RVG Wealth stewardship"
            className="w-full h-full object-cover"
            data-alt="A sophisticated architectural detail of a modern limestone and glass building against a clear sky. The lighting is bright and high-key, emphasizing a clean light-mode aesthetic with soft Sage and Ivory tones. The image evokes a sense of permanence, high-end financial stability, and expert stewardship through minimalist urban design."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LKFztEX5XIvBTRmNGTFxCvQcJCVX_BWrEBJYWnxKzivW6sxv71Uu3vOv_W3qRmXi1etm2PBy6KiRNmZsuAtfPaxwfl0JVY30x8VUBqjPJlwaj2mHKq7S1L4NeKv3NlFIurkBJlBolZDHAZAZlVcae-0GQHnp-OwT6pkFp4RQDmbO4i_Dd7FRBt9c0JqMpZEvaxlj0DmO2PMt4AlkVJvljv4Timb2lpzJwdmqEEgHBPrzlj1TW4F_4NyHCxIgY-pjsjpIpb5qbXet"
          />
          <div className="absolute inset-0 bg-evergreen/70" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-12">
            <div className="max-w-2xl">
              <h2 className="text-h2 text-white mb-6">
                "True wealth is the ability to fully experience life on your
                own terms."
              </h2>
              <div className="w-12 h-[1px] bg-white/60 mx-auto mb-6"></div>
              <Eyebrow tone="muted" className="text-white/70">
                The RVG Stewardship Philosophy
              </Eyebrow>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
