import { CheckCircle, ChevronDown, ShieldCheck, Star, Users } from "lucide-react";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

export default function MembershipPage() {
  return (
    <>
      <Section background="white" className="text-center">
        <Eyebrow tone="gold" className="mb-4">
          Architecting Legacies
        </Eyebrow>
        <h1 className="text-display text-ink mb-6">
          Choose Your Level of Stewardship
        </h1>
        <p className="text-body text-slate max-w-2xl mx-auto">
          Sophisticated wealth management tailored to your life's complexity.
          From foundational guidance to multi-generational concierge services.
        </p>
      </Section>

      <Section background="mist">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="group relative flex flex-col rounded-xl border border-hairline border-t-white bg-white/70 p-10 shadow-[0_4px_30px_rgba(21,35,28,0.06)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="mb-8">
              <Eyebrow tone="muted" className="mb-2">
                The Base
              </Eyebrow>
              <h2 className="text-h3 text-ink mb-4">Foundation</h2>
              <p className="text-body text-slate">
                Ideal for individuals establishing their financial architecture and
                seeking professional clarity.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="text-display text-ink">$2,500</span>
                <span className="text-slate text-body ml-2">/ annually</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Basic Wealth Advisory</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Quarterly Reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Digital Asset Portal</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Standard Tax Reporting</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-auto w-full rounded-lg border border-ink/15 py-4 text-center text-eyebrow text-ink transition-colors hover:border-ink hover:bg-white"
            >
              ENROLL IN FOUNDATION
            </a>
          </div>

          <div className="relative z-10 flex flex-col rounded-xl bg-evergreen p-10 text-white shadow-[0_30px_60px_rgba(21,35,28,0.18)] ring-1 ring-gold/30 transition-transform duration-500 hover:scale-[1.03] lg:-my-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-ink px-6 py-1 rounded-full text-eyebrow shadow-lg">
              Most Distinguished
            </div>
            <div className="mb-8">
              <Eyebrow tone="light" className="mb-2">
                The Ultimate
              </Eyebrow>
              <h2 className="text-h3 text-white mb-4">Sovereign</h2>
              <p className="text-body text-white/80">
                Reserved for high-complexity portfolios requiring constant vigilance
                and family office support.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="text-display text-gold">$15,000</span>
                <span className="text-body text-white/70 ml-2">/ annually</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-body">Concierge Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-body">Daily Portfolio Monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-body">Multi-Generational Planning</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-body">Priority Direct Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="text-body">Comprehensive Tax Integration</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-auto w-full rounded-lg bg-gold py-4 text-center text-eyebrow text-ink shadow-[0_4px_15px_rgba(185,138,46,0.3)] transition-opacity hover:opacity-90"
            >
              APPLY FOR SOVEREIGN
            </a>
          </div>

          <div className="group relative flex flex-col rounded-xl border border-hairline border-t-white bg-white/70 p-10 shadow-[0_4px_30px_rgba(21,35,28,0.06)] backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
            <div className="mb-8">
              <Eyebrow tone="muted" className="mb-2">
                The Bridge
              </Eyebrow>
              <h2 className="text-h3 text-ink mb-4">Legacy</h2>
              <p className="text-body text-slate">
                Designed for established wealth looking to optimize and protect
                future generations.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline mb-6">
                <span className="text-display text-ink">$7,500</span>
                <span className="text-slate text-body ml-2">/ annually</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Personalized Strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Monthly Planning Meetings</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Estate Planning Review</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-evergreen" />
                  <span className="text-body text-ink">Risk Mitigation Strategy</span>
                </li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-auto w-full rounded-lg border border-ink/15 py-4 text-center text-eyebrow text-ink transition-colors hover:border-ink hover:bg-white"
            >
              ENROLL IN LEGACY
            </a>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                className="w-full h-full object-cover"
                data-alt="A sophisticated, high-end private office with warm walnut wood paneling and large floor-to-ceiling windows overlooking a serene landscape. The room is softly lit by an elegant brass floor lamp, casting a warm glow over a minimalist leather desk. The atmosphere is one of quiet professional stewardship and timeless financial heritage, utilizing a palette of sage, ivory, and gold accents."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNzoIx88gj2Z1iUxBUdZNqd8BY7zb-IcYVaH_m4BLWcJYhw2Q97FNQDT6tGVVMlre3ufkNSB5VvyUhOTqECGUKkFESsSP3O4Zx4qGL_ORHTsfpPcKozcgX4um0dp6hp93QGhSygWz2az9vFAlsl7C_WqOe33-bKBXpwU8e9tLRMGZJIFQ-M7nqY5aZ2UlOmHLq3ZTcxXDrUfi0GuUoQbgJATZIoQhQSQvK6bU7s4TMkg-fE5RotNTBjKmi9K7wtDXhhbpw56modo5e"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow tone="gold" className="mb-4">
              Our Philosophy
            </Eyebrow>
            <h2 className="text-h2 text-ink mb-8">Beyond the Balance Sheet</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-evergreen/10 text-evergreen flex items-center justify-center rounded-lg flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-h3 text-ink mb-2">Discreet Stewardship</h3>
                  <p className="text-body text-slate">
                    We operate with the highest level of confidentiality and
                    professional poise, acting as the silent guardians of your
                    capital.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-evergreen/10 text-evergreen flex items-center justify-center rounded-lg flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-h3 text-ink mb-2">Generational Insight</h3>
                  <p className="text-body text-slate">
                    Our Sovereign tier specializes in the transfer of wisdom, not
                    just wealth, across generations of your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-h2 text-ink text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h3 className="text-h3 text-ink">
                    Can I upgrade my membership later?
                  </h3>
                  <ChevronDown className="w-5 h-5 text-slate transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-body text-slate">
                  Yes, you can upgrade your membership at any time. Our team will
                  perform a seamless transition of your assets and strategic planning
                  to the new tier level immediately upon activation.
                </div>
              </details>
            </Card>
            <Card className="p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h3 className="text-h3 text-ink">
                    How are concierge services defined?
                  </h3>
                  <ChevronDown className="w-5 h-5 text-slate transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-body text-slate">
                  Concierge services under our Sovereign tier include lifestyle
                  management, high-value asset acquisition consulting (private
                  aviation, yachting, art), and dedicated 24/7 emergency financial
                  support.
                </div>
              </details>
            </Card>
            <Card className="p-6">
              <details className="group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <h3 className="text-h3 text-ink">
                    What does multi-generational planning include?
                  </h3>
                  <ChevronDown className="w-5 h-5 text-slate transition-transform group-open:rotate-180" />
                </summary>
                <div className="pt-4 text-body text-slate">
                  We coordinate family meetings, provide financial literacy
                  education for heirs, and structure trusts and legal frameworks
                  that ensure your family's values and wealth persist for
                  centuries.
                </div>
              </details>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
