import { CheckCircle, ChevronDown, ShieldCheck, Star, Users } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";

export default function MembershipPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      <SiteHeader activeHref="/membership" />
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
            Architecting Legacies
          </span>
          <h1 className="font-display-xl text-primary mb-6">
            Choose Your Level of Stewardship
          </h1>
          <p className="font-body-lg text-outline max-w-2xl mx-auto">
            Sophisticated wealth management tailored to your life's complexity.
            From foundational guidance to multi-generational concierge services.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="glass-card luminous-border rounded-xl p-10 flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="mb-8">
              <span className="font-label-caps text-outline uppercase mb-2 block">
                The Base
              </span>
              <h2 className="font-headline-lg text-primary mb-4">Foundation</h2>
              <p className="font-body-md text-outline">
                Ideal for individuals establishing their financial architecture and
                seeking professional clarity.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="font-display-xl text-primary">$2,500</span>
                <span className="text-outline font-body-md ml-2">/ annually</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Basic Wealth Advisory
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Quarterly Reviews
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Digital Asset Portal
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Standard Tax Reporting
                  </span>
                </li>
              </ul>
            </div>
            <button className="mt-auto w-full py-4 border border-outline text-primary rounded-lg font-label-caps hover:bg-surface-container transition-colors">
              ENROLL IN FOUNDATION
            </button>
          </div>
          <div className="relative bg-primary-container text-on-primary-container rounded-xl p-10 flex flex-col shadow-[0_30px_60px_rgba(79,99,82,0.15)] ring-1 ring-secondary/30 transition-transform hover:scale-[1.03] duration-500 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container px-6 py-1 rounded-full font-label-caps text-[10px] uppercase tracking-widest shadow-lg">
              Most Distinguished
            </div>
            <div className="mb-8">
              <span className="font-label-caps text-on-tertiary-container uppercase mb-2 block">
                The Ultimate
              </span>
              <h2 className="font-headline-lg text-white mb-4">Sovereign</h2>
              <p className="font-body-md text-on-primary-container opacity-80">
                Reserved for high-complexity portfolios requiring constant vigilance
                and family office support.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="font-display-xl text-secondary-container">
                  $15,000
                </span>
                <span className="text-on-primary-container font-body-md ml-2 opacity-70">
                  / annually
                </span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                  <span className="font-body-md">Concierge Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                  <span className="font-body-md">Daily Portfolio Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                  <span className="font-body-md">Multi-Generational Planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                  <span className="font-body-md">Priority Direct Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-secondary-container fill-secondary-container" />
                  <span className="font-body-md">Comprehensive Tax Integration</span>
                </li>
              </ul>
            </div>
            <button className="mt-auto w-full py-4 bg-secondary-container text-on-secondary-container rounded-lg font-label-caps hover:opacity-90 transition-opacity shadow-[0_4px_15px_rgba(254,214,91,0.3)]">
              APPLY FOR SOVEREIGN
            </button>
          </div>
          <div className="glass-card luminous-border rounded-xl p-10 flex flex-col transition-transform hover:scale-[1.02] duration-500">
            <div className="mb-8">
              <span className="font-label-caps text-outline uppercase mb-2 block">
                The Bridge
              </span>
              <h2 className="font-headline-lg text-primary mb-4">Legacy</h2>
              <p className="font-body-md text-outline">
                Designed for established wealth looking to optimize and protect
                future generations.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="font-display-xl text-primary">$7,500</span>
                <span className="text-outline font-body-md ml-2">/ annually</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Personalized Strategy
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Monthly Planning Meetings
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Estate Planning Review
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-container fill-primary-container" />
                  <span className="font-body-md text-on-surface">
                    Risk Mitigation Strategy
                  </span>
                </li>
              </ul>
            </div>
            <button className="mt-auto w-full py-4 border border-outline text-primary rounded-lg font-label-caps hover:bg-surface-container transition-colors">
              ENROLL IN LEGACY
            </button>
          </div>
        </div>
        <section className="mt-32 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                className="w-full h-full object-cover"
                data-alt="A sophisticated, high-end private office with warm walnut wood paneling and large floor-to-ceiling windows overlooking a serene landscape. The room is softly lit by an elegant brass floor lamp, casting a warm glow over a minimalist leather desk. The atmosphere is one of quiet professional stewardship and timeless financial heritage, utilizing a palette of sage, ivory, and gold accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNzoIx88gj2Z1iUxBUdZNqd8BY7zb-IcYVaH_m4BLWcJYhw2Q97FNQDT6tGVVMlre3ufkNSB5VvyUhOTqECGUKkFESsSP3O4Zx4qGL_ORHTsfpPcKozcgX4um0dp6hp93QGhSygWz2az9vFAlsl7C_WqOe33-bKBXpwU8e9tLRMGZJIFQ-M7nqY5aZ2UlOmHLq3ZTcxXDrUfi0GuUoQbgJATZIoQhQSQvK6bU7s4TMkg-fE5RotNTBjKmi9K7wtDXhhbpw56modo5e"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
              Our Philosophy
            </span>
            <h2 className="font-display-xl text-primary mb-8">
              Beyond the Balance Sheet
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline-md text-primary mb-2">
                    Discreet Stewardship
                  </h3>
                  <p className="font-body-md text-outline">
                    We operate with the highest level of confidentiality and
                    professional poise, acting as the silent guardians of your
                    capital.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-headline-md text-primary mb-2">
                    Generational Insight
                  </h3>
                  <p className="font-body-md text-outline">
                    Our Sovereign tier specializes in the transfer of wisdom, not
                    just wealth, across generations of your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-32 max-w-4xl mx-auto">
          <h2 className="font-display-xl text-primary text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="glass-card luminous-border rounded-lg p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h4 className="font-headline-md text-primary text-lg">
                    Can I upgrade my membership later?
                  </h4>
                  <ChevronDown className="w-5 h-5 text-outline transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-outline font-body-md">
                  Yes, you can upgrade your membership at any time. Our team will
                  perform a seamless transition of your assets and strategic planning
                  to the new tier level immediately upon activation.
                </div>
              </details>
            </div>
            <div className="glass-card luminous-border rounded-lg p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h4 className="font-headline-md text-primary text-lg">
                    How are concierge services defined?
                  </h4>
                  <ChevronDown className="w-5 h-5 text-outline transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-outline font-body-md">
                  Concierge services under our Sovereign tier include lifestyle
                  management, high-value asset acquisition consulting (private
                  aviation, yachting, art), and dedicated 24/7 emergency financial
                  support.
                </div>
              </details>
            </div>
            <div className="glass-card luminous-border rounded-lg p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h4 className="font-headline-md text-primary text-lg">
                    What does multi-generational planning include?
                  </h4>
                  <ChevronDown className="w-5 h-5 text-outline transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-outline font-body-md">
                  We coordinate family meetings, provide financial literacy
                  education for heirs, and structure trusts and legal frameworks
                  that ensure your family's values and wealth persist for
                  centuries.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-emerald-100/30 bg-stone-50 dark:bg-stone-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-12 py-24">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold tracking-widest text-[#4F6352] dark:text-emerald-50 mb-4 font-headline-lg">
              RVG WEALTH
            </div>
            <p className="font-serif text-sm leading-relaxed text-[#4F6352]/70 dark:text-emerald-200/70">
              © 2024 RVG Wealth Management. Expert guidance for modern stewardship.
            </p>
          </div>
          <div>
            <h5 className="font-label-caps text-[#4F6352] mb-6">SERVICES</h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Private Banking
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Asset Management
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Tax Strategy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-[#4F6352] mb-6">FIRM</h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Our Heritage
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps text-[#4F6352] mb-6">LEGAL</h5>
            <ul className="space-y-4">
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
              <li>
                <a
                  className="font-serif text-sm text-[#4F6352]/70 hover:text-emerald-700 underline-offset-4 hover:underline transition-opacity"
                  href="#"
                >
                  SEC Filings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
