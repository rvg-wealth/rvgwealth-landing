import {
  ArrowRight,
  Building2,
  CheckCircle,
  GraduationCap,
  Leaf,
  Wallet,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 border-b border-emerald-100/20 bg-white/85 backdrop-blur-3xl shadow-[0_20px_40px_rgba(79,99,82,0.08)]">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-12 py-8">
          <div className="text-2xl font-bold tracking-[0.2em] text-[#4F6352] font-headline-md uppercase">
            RVG Wealth
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a
              className="text-[#4F6352]/60 font-serif tracking-tight text-sm uppercase font-medium hover:text-[#4F6352] hover:opacity-100 transition-all duration-500"
              href="/"
            >
              Home
            </a>
            <a
              className="text-[#4F6352] border-b border-[#4F6352] pb-1 font-serif tracking-tight text-sm uppercase font-medium"
              href="/services"
            >
              Services
            </a>
            <a
              className="text-[#4F6352]/60 font-serif tracking-tight text-sm uppercase font-medium hover:text-[#4F6352] hover:opacity-100 transition-all duration-500"
              href="/membership"
            >
              Membership
            </a>
            <a
              className="text-[#4F6352]/60 font-serif tracking-tight text-sm uppercase font-medium hover:text-[#4F6352] hover:opacity-100 transition-all duration-500"
              href="/education"
            >
              Education
            </a>
            <a
              className="text-[#4F6352]/60 font-serif tracking-tight text-sm uppercase font-medium hover:text-[#4F6352] hover:opacity-100 transition-all duration-500"
              href="/contact"
            >
              Contact
            </a>
          </div>
          <button className="bg-primary-container text-on-primary px-8 py-3 font-label-caps rounded-lg hover:shadow-lg transition-all active:scale-95 duration-200 ease-out">
            Book a Consultation
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-24">
        <section className="max-w-7xl mx-auto px-12 mb-stack-lg">
          <div className="max-w-3xl">
            <span className="font-label-caps text-primary mb-4 block">
              Comprehensive Stewardship
            </span>
            <h1 className="font-display-xl text-primary mb-6">
              Expert Guidance for Modern Wealth
            </h1>
            <p className="font-body-lg text-outline mb-stack-md">
              We provide bespoke financial strategies designed for those who
              value discretion, professional integrity, and the long-term
              preservation of capital.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="glass-card rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Wallet className="w-8 h-8" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Investment Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Access bespoke portfolios built on global market insights and
                  institutional-grade rigorous analysis. We focus on
                  risk-adjusted returns tailored to your specific liquidity
                  needs and risk tolerance.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Global Asset Allocation</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Tactical Rebalancing</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
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

            <div className="glass-card rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Retirement Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Navigate the strategic transition from wealth accumulation to
                  sustainable distribution. We ensure your longevity and
                  lifestyle are protected through multi-generational tax
                  optimization.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Income Stream Engineering</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Longevity Risk Hedging</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
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

            <div className="glass-card rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Education Planning
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Secure your family's future through tax-efficient funding
                  strategies for prestigious institutions. We optimize 529 plans
                  and trust structures to maximize educational potential.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Tax-Advantaged Savings</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Education Trust Design</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
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

            <div className="glass-card rounded-xl p-10 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-500">
              <div>
                <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-8 text-primary">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline-lg text-primary mb-4">
                  Real Estate Advisory
                </h3>
                <p className="font-body-md text-outline mb-8">
                  Institutional-grade property analysis for residential and
                  commercial acquisitions. We treat real estate as a strategic
                  asset class within your overall wealth portfolio.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Market Yield Evaluation</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="font-body-md">Portfolio Diversification</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
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

        <section className="max-w-7xl mx-auto px-12 mt-stack-lg">
          <div className="relative h-[400px] rounded-2xl overflow-hidden glass-card">
            <img
              alt="RVG Wealth stewardship"
              className="w-full h-full object-cover opacity-30 grayscale"
              data-alt="A sophisticated architectural detail of a modern limestone and glass building against a clear sky. The lighting is bright and high-key, emphasizing a clean light-mode aesthetic with soft Sage and Ivory tones. The image evokes a sense of permanence, high-end financial stability, and expert stewardship through minimalist urban design."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8LKFztEX5XIvBTRmNGTFxCvQcJCVX_BWrEBJYWnxKzivW6sxv71Uu3vOv_W3qRmXi1etm2PBy6KiRNmZsuAtfPaxwfl0JVY30x8VUBqjPJlwaj2mHKq7S1L4NeKv3NlFIurkBJlBolZDHAZAZlVcae-0GQHnp-OwT6pkFp4RQDmbO4i_Dd7FRBt9c0JqMpZEvaxlj0DmO2PMt4AlkVJvljv4Timb2lpzJwdmqEEgHBPrzlj1TW4F_4NyHCxIgY-pjsjpIpb5qbXet"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-12">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg text-primary mb-6">
                  "True wealth is the ability to fully experience life on your
                  own terms."
                </h2>
                <div className="w-12 h-[1px] bg-primary mx-auto mb-6"></div>
                <p className="font-label-caps text-outline">
                  The RVG Stewardship Philosophy
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-emerald-100/30 bg-stone-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-12 py-24">
          <div>
            <div className="text-xl font-bold tracking-widest text-[#4F6352] mb-4 font-headline-md uppercase">
              RVG Wealth
            </div>
            <p className="font-serif text-sm leading-relaxed text-[#4F6352]/70">
              Expert guidance for modern stewardship. Protecting legacies
              through generations of market cycles.
            </p>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Investment Planning
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Retirement Planning
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Education Planning
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Real Estate Advisory
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="/membership"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="/education"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-caps text-primary mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Legal Disclosures
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 pb-12 border-t border-emerald-100/10 pt-8">
          <p className="font-serif text-xs text-[#4F6352]/40 text-center uppercase tracking-widest">
            © 2024 RVG Wealth Management. Expert guidance for modern
            stewardship.
          </p>
        </div>
      </footer>
    </div>
  );
}
