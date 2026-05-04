import {
  ArrowRight,
  Building2,
  CheckCircle,
  GraduationCap,
  Leaf,
  Wallet,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function ServicesPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <SiteHeader activeHref="/services" />

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-24">
          <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
            Comprehensive Stewardship
          </span>
          <h1 className="font-display-xl text-primary mb-6">
            Expert Guidance for Modern Wealth
          </h1>
          <p className="font-body-lg text-outline max-w-2xl">
            Bespoke financial strategies for those who value discretion,
            professional integrity, and the long-term preservation of capital.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card luminous-border rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Investment Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Access bespoke portfolios built on global market insights and
                  institutional-grade analysis. We focus on risk-adjusted returns
                  tailored to your specific liquidity needs and risk tolerance.
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Global Asset Allocation</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Tactical Rebalancing</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Private Equity Access</span>
                  </li>
                </ul>
              </div>
              <a
                className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-4 transition-all"
                href="#"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass-card luminous-border rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Retirement Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Navigate the strategic transition from wealth accumulation to
                  sustainable distribution. We ensure your longevity and lifestyle
                  are protected through multi-generational tax optimization.
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Income Stream Engineering</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Longevity Risk Hedging</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Estate Integration</span>
                  </li>
                </ul>
              </div>
              <a
                className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-4 transition-all"
                href="#"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass-card luminous-border rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Education Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Secure your family's future through tax-efficient funding
                  strategies for prestigious institutions. We optimize 529 plans
                  and trust structures to maximize educational potential.
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Tax-Advantaged Savings</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Education Trust Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Legacy Impact Analysis</span>
                  </li>
                </ul>
              </div>
              <a
                className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-4 transition-all"
                href="#"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="glass-card luminous-border rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Real Estate Advisory
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Institutional-grade property analysis for residential and
                  commercial acquisitions. Real estate treated as a strategic
                  asset class within your overall wealth portfolio.
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Market Yield Evaluation</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Portfolio Diversification</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body-md">Financing Coordination</span>
                  </li>
                </ul>
              </div>
              <a
                className="flex items-center gap-2 font-label-caps text-primary group-hover:gap-4 transition-all"
                href="#"
              >
                LEARN MORE <ArrowRight className="w-4 h-4" />
              </a>
            </div>
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
                  "True wealth is the ability to fully experience life on your
                  own terms."
                </h2>
                <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
                <p className="font-label-caps text-outline">
                  The RVG Stewardship Philosophy
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
