import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronRight,
  Globe,
  Leaf,
  Mail,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Button } from "./components/Button";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <div className="bg-background text-on-surface">
      <SiteHeader activeHref="/" />
      <main>
        <section className="hero-gradient pt-48 pb-32 px-12 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <h1 className="font-display-xl text-display-xl text-primary leading-tight">
                Secure Your Future.
                <br />
                <span className="text-[#735c00]">Build Your Legacy.</span>
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-lg">
                Bespoke financial stewardship for individuals who value discretion
                and clarity. We craft personalized strategies that align with
                your generational aspirations.
              </p>
              <div className="flex items-center gap-6">
                <Button variant="primaryContainer" size="lg" caps>
                  Explore Our Services
                </Button>
                <button className="flex items-center gap-2 font-label-caps text-primary group">
                  Our Philosophy
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="glass-card rounded-2xl p-4 overflow-hidden relative z-10">
                <img
                  alt="Financial Visualization"
                  className="rounded-xl w-full h-[400px] object-cover"
                  data-alt="A highly sophisticated, minimalist 3D visualization of wealth growth using translucent glass bars and golden financial data points. The lighting is soft and high-key, creating a luminous light-mode atmosphere with soft sage and ivory tones. The visual style is premium and professional, suggesting clarity and stewardship in financial planning through an elegant, abstract representation of success."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6a627--3UfUrlDx4JivaoP26DFHOc5Sm_ZdniR9kxDnwhXaE0ibhtniy77XGZLFlboL-r-5qDkAtG4VMBvGv7Ia_HxdJsXl8iruuVvmBrutxblbAnsKVZWn4IzyQd_q1VkjRJ6HIl9N88djCqApNuzuDuwwsxtjTPc_3ZpNN3PHVd4-23ooq10FXULHYSf8ReZQkpS0-n6mqFJ54KxEzsJY9gFv8uoLPhBQZpJXxt_yzak6dGfXdnROqgymKMeL3HIpUBELyIkNJ"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed rounded-full blur-[80px] opacity-40"></div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-emerald-200/60 py-12">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-headline-md text-primary text-lg">
                  Personalized Strategies
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="font-headline-md text-primary text-lg">
                  Transparent Processes
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <span className="font-headline-md text-primary text-lg">
                  Proven Results
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-stack-lg px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-2xl">
                <h2 className="font-display-xl text-headline-lg text-primary mb-4">
                  Mastery Across Every Asset Class
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  We provide a holistic ecosystem for wealth preservation, ensuring
                  your portfolio is as resilient as it is diversified.
                </p>
              </div>
                <button className="text-primary font-label-caps flex items-center gap-2 group">
                  View All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[600px]">
              <div className="md:col-span-8 glass-card rounded-3xl p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer">
                <img
                  alt="Investment Planning"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                  data-alt="A macro photograph of professional architectural blueprints and golden compass tools on a minimalist white oak desk. The scene is bathed in soft, natural morning sunlight, casting gentle shadows that emphasize the premium, ivory-toned light mode aesthetic. The mood is focused and meticulous, reflecting a high-end investment planning environment with a palette of soft sages and bright off-whites."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnmF6XbazkQ4kZZmPo2xPw42F6e0NcsOUyBDJ60B7uD_-Q4eCYXv-5RyoAd99lFMjQLuSFFwQJl6cAO9LpN3qG0Gl5beFFBmmf0iwqHKWDD_HeozZ3xHIw41BPZKTZRY05iN4jnmbGUSI1Brf0ouZO-emAUzooNUwoXyb_gbdXg46cm4VS-f6NPZUs-ydPdHA9Wt0rtQ_H8c6GkT8t6UukwwaQ-PYAz7nQJBmzSgSZXDH5hCeLtwyiMKyidi9qIrhbdqceLAV0RAa"
                />
                <div className="relative z-10">
                  <span className="text-secondary font-label-caps mb-4 block">
                    Strategic Management
                  </span>
                  <h3 className="font-display-xl text-display-xl text-primary mb-4">
                    Investment Planning
                  </h3>
                  <p className="text-body-md text-on-surface-variant max-w-md">
                    Multi-generational portfolio construction focused on sustainable
                    growth and risk mitigation in global markets.
                  </p>
                </div>
              </div>
              <div className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col">
                <div className="mb-auto">
                  <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center text-tertiary-fixed-dim mb-8">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-lg text-primary mb-4">
                    Real Estate
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Unlocking value in premium residential and commercial
                    developments through exclusive access and rigorous analysis.
                  </p>
                </div>
                <button className="mt-8 flex items-center text-primary font-semibold gap-2">
                  Details <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:col-span-4 glass-card rounded-3xl p-10 flex flex-col">
                <div className="mb-auto">
                  <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center text-primary mb-8">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-lg text-primary mb-4">Retirement</h3>
                  <p className="text-body-md text-on-surface-variant">
                    Transitioning from accumulation to distribution with a focus
                    on tax-efficiency and lifestyle continuity.
                  </p>
                </div>
                <button className="mt-8 flex items-center text-primary font-semibold gap-2">
                  Details <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <div className="md:col-span-8 glass-card rounded-3xl p-10 flex items-center justify-between">
                <div className="max-w-sm">
                  <h3 className="font-headline-lg text-primary mb-2">
                    Education Funds
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Ensuring the next generation has the foundations for
                    excellence through structured educational trusts.
                  </p>
                </div>
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait of a professional man in a beige suit"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSkWicqABIeCokrqevMu3HN1caBPLVo_SgOwEt5zwOZDCKwu2MP9j9qpRQFLsD5BVMIaqS_yY6MKvv-krP7Prj8ixTW89yNKcoVC-oGOtnbXPyO-TyQ_C2pFaSE6zcS3VatIfqG_cAJCi0CDM5soFFnQlSoK5qEauJYpX7MrRhmqjQ0vAn46k15TbJCImrqi5PWwlHEoZHvTpNdZDK_v8ikHQNQruFCRJzHzmcxdouJmvmm5Oeb5FnMAcpqfQ41zQY6bMeiSbKzmA"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait of a professional woman in a sage business jacket"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4V99iwZlIQQZybTrLYgUN3RxlkuABjlBY2Bx8QJXEa2Jw4syaPyk79-Hl82CyzDSvnHwT3vsvcI_kTOCwERaI9NbLZPLSHxXUrbq0hJIB7nBCsvc_U5Xqhm7TF8y_9x3CNxh_KnYIEk820UaDNDKmVtsxinCg3_HfWgj-zDLlW7d6-3Yp8wVCGefZHa6VpB5gZH_8cw4cKVgMoVqnJkOnrf9Zu7kj0YV8vU1qK0S3gt-sj5Ddx-kCy31zkF8qXXaUoNdFRTa2Z2EF"
                    />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-surface-container flex items-center justify-center text-xs font-bold text-primary">
                    +8
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-stack-lg bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-12">
            <div className="text-center mb-16">
              <span className="font-label-caps text-secondary mb-4 block">
                Testimonials
              </span>
              <h2 className="font-display-xl text-display-xl text-primary">
                Voices of Stewardship
              </h2>
            </div>
            <div className="relative flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
              <div className="min-w-[450px] snap-center glass-card p-12 rounded-3xl">
                <div className="flex gap-1 text-secondary mb-6">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                </div>
                <p className="font-headline-md text-primary mb-8 leading-relaxed">
                  "The level of personalized attention and strategic foresight at RVG
                  is unparalleled. They didn't just manage my portfolio; they
                  understood my legacy."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200">
                    <img
                      alt="Client"
                      className="w-full h-full object-cover rounded-full"
                      data-alt="A high-end portrait of a senior business executive in a classic charcoal wool suit against a minimalist light ivory background. The lighting is soft and flattering, emphasizing a mood of calm authority and success. The color palette is restricted to elegant neutral tones with soft sage accents in the background environment."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMlFkoKLalRovD2siIGveuoW5i6Ck1RNy3TK8uG4mSPt07_0rpDjr_cSPh5HjjkZKFbUEXmo2HcF6vazyN2ZMnJ6-jjNrHHv05YDxe2FwarBcUwETg0S53vnFW8TYVtC79uIGIEuzjxBsXqaf25gxraBo_OP5YlebOTcsWqeePT1nlmb5GO4hN4ehAj7yn728g-38wt8USeiMYv4VnCaz3cyIU6P8SDsMflHQPByMFoD57_KD8aNtDXmDdyiTGhxX_LDm2_MPbki"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Julian Thorne</h4>
                    <p className="text-sm text-on-surface-variant">
                      CEO, Heritage Logistics
                    </p>
                  </div>
                </div>
              </div>
              <div className="min-w-[450px] snap-center glass-card p-12 rounded-3xl">
                <div className="flex gap-1 text-secondary mb-6">
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                  <Star className="w-5 h-5 fill-secondary text-secondary" />
                </div>
                <p className="font-headline-md text-primary mb-8 leading-relaxed">
                  "Their transparency in real estate development has been a breath
                  of fresh air. I finally feel like a partner in my own wealth
                  journey."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200">
                    <img
                      alt="Client"
                      className="w-full h-full object-cover rounded-full"
                      data-alt="A professional portrait of a successful female entrepreneur in a minimalist white business studio. She wears a tailored linen blazer in a soft sage color. The lighting is airy and bright, emphasizing a light-mode aesthetic that is clean, premium, and sophisticated. The background is a soft ivory-tinted wall with subtle shadows."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu50XlJ9m_H-_tPmpo1lgqlvLgzAUw9_j0u7vEGktZfQN8ZP1z19b2PZgGtHjoFUyHNdP9CQpvIXEE-djnBnGQztHrdybZUfVUWrblJVJGIhXzeef5l8EP4Nr3hSiFaF2wBaVvCFw--_HuDRpNKA1ssm0hhlzOsjNqVnFSNqLDjBfRrDgh3vr4ry3QIRLl4VZbNNenlGEwa-VCApZH8TgGHyZ41V_8y2lzy8IKHstYLfE6VofkxAsFfS0XC_Sw5e4TThSYwzky4_-X"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Eleanor Vance</h4>
                    <p className="text-sm text-on-surface-variant">
                      Founder, Vance Interiors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-stack-lg px-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary rounded-[40px] p-24 relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#b6ccb7_0%,transparent_50%)]"></div>
              </div>
              <span className="font-label-caps text-tertiary-fixed mb-6 tracking-[0.3em]">
                Next Steps
              </span>
              <h2 className="font-display-xl text-5xl text-on-primary mb-8">
                Ready to Start Your Journey?
              </h2>
              <p className="text-on-primary/70 text-body-lg max-w-xl mb-12">
                Select the stewardship path that aligns with your current
                milestone. Join our exclusive membership for premium insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 flex flex-col items-center">
                  <h3 className="text-on-primary font-headline-md mb-2">
                    Foundation
                  </h3>
                  <span className="text-3xl font-display-xl text-on-primary mb-6">
                    $1.5k<span className="text-sm text-white/50">/yr</span>
                  </span>
                <Button className="w-full rounded-xl" caps variant="light">
                  Select Tier
                </Button>
                </div>
                <div className="bg-white p-10 rounded-3xl border border-white/20 flex flex-col items-center scale-105 shadow-2xl relative z-10">
                  <div className="absolute -top-4 bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Most Preferred
                  </div>
                  <h3 className="text-primary font-headline-md mb-2">Steward</h3>
                  <span className="text-3xl font-display-xl text-primary mb-6">
                    $5.0k<span className="text-sm text-primary/40">/yr</span>
                  </span>
                <Button className="w-full rounded-xl" caps>
                  Select Tier
                </Button>
                </div>
                <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 flex flex-col items-center">
                  <h3 className="text-on-primary font-headline-md mb-2">Legacy</h3>
                  <span className="text-3xl font-display-xl text-on-primary mb-6">
                    Custom
                  </span>
                <Button className="w-full rounded-xl" caps variant="light">
                  Contact Us
                </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
