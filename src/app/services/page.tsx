import { Building2, GraduationCap, Leaf, Wallet } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { ServiceCard } from "../components/ServiceCard";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const services = [
  {
    icon: Wallet,
    title: "Investment Planning",
    description:
      "Access bespoke portfolios built on global market insights and institutional-grade analysis. We focus on risk-adjusted returns tailored to your specific liquidity needs and risk tolerance.",
    features: ["Global Asset Allocation", "Tactical Rebalancing", "Private Equity Access"],
  },
  {
    icon: Leaf,
    title: "Retirement Planning",
    description:
      "Navigate the strategic transition from wealth accumulation to sustainable distribution. We ensure your longevity and lifestyle are protected through multi-generational tax optimization.",
    features: ["Income Stream Engineering", "Longevity Risk Hedging", "Estate Integration"],
  },
  {
    icon: GraduationCap,
    title: "Education Planning",
    description:
      "Secure your family's future through tax-efficient funding strategies for prestigious institutions. We optimize 529 plans and trust structures to maximize educational potential.",
    features: ["Tax-Advantaged Savings", "Education Trust Design", "Legacy Impact Analysis"],
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    description:
      "Institutional-grade property analysis for residential and commercial acquisitions. Real estate treated as a strategic asset class within your overall wealth portfolio.",
    features: ["Market Yield Evaluation", "Portfolio Diversification", "Financing Coordination"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteHeader activeHref="/services" />
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Comprehensive Stewardship"
          title="Expert Guidance for Modern Wealth"
          description="Bespoke financial strategies for those who value discretion, professional integrity, and the long-term preservation of capital."
        />

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </section>

        <section className="mt-32">
          <div className="relative h-[400px] rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface-container-lowest">
            <img
              alt="RVG Wealth stewardship"
              className="w-full h-full object-cover opacity-25 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LKFztEX5XIvBTRmNGTFxCvQcJCVX_BWrEBJYWnxKzivW6sxv71Uu3vOv_W3qRmXi1etm2PBy6KiRNmZsuAtfPaxwfl0JVY30x8VUBqjPJlwaj2mHKq7S1L4NeKv3NlFIurkBJlBolZDHAZAZlVcae-0GQHnp-OwT6pkFp4RQDmbO4i_Dd7FRBt9c0JqMpZEvaxlj0DmO2PMt4AlkVJvljv4Timb2lpzJwdmqEEgHBPrzlj1TW4F_4NyHCxIgY-pjsjpIpb5qbXet"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-12">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg text-primary mb-6">
                  "True wealth is the ability to fully experience life on your own terms."
                </h2>
                <div className="w-12 h-px bg-primary mx-auto mb-6" />
                <p className="font-label-caps text-outline">The RVG Stewardship Philosophy</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
