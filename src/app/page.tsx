import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  ChevronRight,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section background="evergreen">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-8">
            <Eyebrow tone="gold">Bespoke Financial Stewardship</Eyebrow>
            <h1 className="text-display text-white leading-tight">
              Secure Your Future.
              <br />
              <span className="text-gold">Build Your Legacy.</span>
            </h1>
            <p className="text-body text-white/70 max-w-lg">
              Bespoke financial stewardship for individuals who value discretion
              and clarity. We craft personalized strategies that align with
              your generational aspirations.
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                className="bg-gold text-ink hover:bg-gold/90"
              >
                Explore Our Services
              </Button>
              <Button variant="ghost" className="!text-white">
                Our Philosophy
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold rounded-full blur-[80px] opacity-25" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-3xl border border-gold/30" />
            <div className="rounded-2xl bg-white border border-hairline p-4 overflow-hidden relative z-10 shadow-[0_20px_40px_rgba(21,35,28,0.08)]">
              <img
                alt="Financial Visualization"
                className="rounded-xl w-full h-[400px] object-cover"
                data-alt="A highly sophisticated, minimalist 3D visualization of wealth growth using translucent glass bars and golden financial data points. The lighting is soft and high-key, creating a luminous light-mode atmosphere with soft sage and ivory tones. The visual style is premium and professional, suggesting clarity and stewardship in financial planning through an elegant, abstract representation of success."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6a627--3UfUrlDx4JivaoP26DFHOc5Sm_ZdniR9kxDnwhXaE0ibhtniy77XGZLFlboL-r-5qDkAtG4VMBvGv7Ia_HxdJsXl8iruuVvmBrutxblbAnsKVZWn4IzyQd_q1VkjRJ6HIl9N88djCqApNuzuDuwwsxtjTPc_3ZpNN3PHVd4-23ooq10FXULHYSf8ReZQkpS0-n6mqFJ54KxEzsJY9gFv8uoLPhBQZpJXxt_yzak6dGfXdnROqgymKMeL3HIpUBELyIkNJ"
              />
            </div>
          </div>
        </div>
      </Section>

      

      {/* Services bento */}
      <Section background="white" divider>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-ink mb-4">
              Mastery Across Every Asset Class
            </h2>
            <p className="text-body text-slate">
              We provide a holistic ecosystem for wealth preservation, ensuring
              your portfolio is as resilient as it is diversified.
            </p>
          </div>
          <Button variant="ghost">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-150 mb-26">
          <Card
            hover
            className="md:col-span-8 p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer"
          >
            <img
              alt="Investment Planning"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              data-alt="A macro photograph of professional architectural blueprints and golden compass tools on a minimalist white oak desk. The scene is bathed in soft, natural morning sunlight, casting gentle shadows that emphasize the premium, ivory-toned light mode aesthetic. The mood is focused and meticulous, reflecting a high-end investment planning environment with a palette of soft sages and bright off-whites."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrnmF6XbazkQ4kZZmPo2xPw42F6e0NcsOUyBDJ60B7uD_-Q4eCYXv-5RyoAd99lFMjQLuSFFwQJl6cAO9LpN3qG0Gl5beFFBmmf0iwqHKWDD_HeozZ3xHIw41BPZKTZRY05iN4jnmbGUSI1Brf0ouZO-emAUzooNUwoXyb_gbdXg46cm4VS-f6NPZUs-ydPdHA9Wt0rtQ_H8c6GkT8t6UukwwaQ-PYAz7nQJBmzSgSZXDH5hCeLtwyiMKyidi9qIrhbdqceLAV0RAa"
            />
            <div className="relative z-10">
              <Eyebrow tone="gold" className="mb-4">
                Strategic Management
              </Eyebrow>
              <h3 className="text-h2 text-ink mb-4">Investment Planning</h3>
              <p className="text-body text-slate max-w-md">
                Multi-generational portfolio construction focused on sustainable
                growth and risk mitigation in global markets.
              </p>
            </div>
          </Card>
          <Card hover className="md:col-span-4 p-10 flex flex-col">
            <div className="mb-auto">
              <div className="w-14 h-14 bg-mist rounded-2xl flex items-center justify-center text-evergreen mb-8">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-h3 text-ink mb-4">Real Estate</h3>
              <p className="text-body text-slate">
                Unlocking value in premium residential and commercial
                developments through exclusive access and rigorous analysis.
              </p>
            </div>
            <button className="mt-8 flex items-center text-evergreen font-semibold gap-2 cursor-pointer">
              Details <ChevronRight className="w-5 h-5" />
            </button>
          </Card>
          <Card hover className="md:col-span-4 p-10 flex flex-col">
            <div className="mb-auto">
              <div className="w-14 h-14 bg-mist rounded-2xl flex items-center justify-center text-evergreen mb-8">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-h3 text-ink mb-4">Retirement</h3>
              <p className="text-body text-slate">
                Transitioning from accumulation to distribution with a focus
                on tax-efficiency and lifestyle continuity.
              </p>
            </div>
            <button className="mt-8 flex items-center text-evergreen font-semibold gap-2 cursor-pointer">
              Details <ChevronRight className="w-5 h-5" />
            </button>
          </Card>
          <Card
            hover
            className="md:col-span-8 p-10 flex items-center justify-between"
          >
            <div className="max-w-sm">
              <h3 className="text-h3 text-ink mb-2">Education Funds</h3>
              <p className="text-body text-slate">
                Ensuring the next generation has the foundations for
                excellence through structured educational trusts.
              </p>
            </div>
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-mist overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Portrait of a professional man in a beige suit"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaSkWicqABIeCokrqevMu3HN1caBPLVo_SgOwEt5zwOZDCKwu2MP9j9qpRQFLsD5BVMIaqS_yY6MKvv-krP7Prj8ixTW89yNKcoVC-oGOtnbXPyO-TyQ_C2pFaSE6zcS3VatIfqG_cAJCi0CDM5soFFnQlSoK5qEauJYpX7MrRhmqjQ0vAn46k15TbJCImrqi5PWwlHEoZHvTpNdZDK_v8ikHQNQruFCRJzHzmcxdouJmvmm5Oeb5FnMAcpqfQ41zQY6bMeiSbKzmA"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-mist overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Portrait of a professional woman in a sage business jacket"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4V99iwZlIQQZybTrLYgUN3RxlkuABjlBY2Bx8QJXEa2Jw4syaPyk79-Hl82CyzDSvnHwT3vsvcI_kTOCwERaI9NbLZPLSHxXUrbq0hJIB7nBCsvc_U5Xqhm7TF8y_9x3CNxh_KnYIEk820UaDNDKmVtsxinCg3_HfWgj-zDLlW7d6-3Yp8wVCGefZHa6VpB5gZH_8cw4cKVgMoVqnJkOnrf9Zu7kj0YV8vU1qK0S3gt-sj5Ddx-kCy31zkF8qXXaUoNdFRTa2Z2EF"
                />
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-mist flex items-center justify-center text-xs font-bold text-ink">
                +8
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="white" divider>
        <div className="text-center mb-16">
          <Eyebrow tone="gold" className="mb-4">
            Testimonials
          </Eyebrow>
          <h2 className="text-h2 text-ink">Voices of Stewardship</h2>
        </div>
        <div className="relative flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          <Card className="min-w-[450px] snap-center p-12">
            <div className="flex gap-1 mb-6">
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
            </div>
            <p className="text-h3 text-ink mb-8 leading-relaxed">
              "The level of personalized attention and strategic foresight at RVG
              is unparalleled. They didn't just manage my portfolio; they
              understood my legacy."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-mist overflow-hidden">
                <img
                  alt="Client"
                  className="w-full h-full object-cover rounded-full"
                  data-alt="A high-end portrait of a senior business executive in a classic charcoal wool suit against a minimalist light ivory background. The lighting is soft and flattering, emphasizing a mood of calm authority and success. The color palette is restricted to elegant neutral tones with soft sage accents in the background environment."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHsMlFkoKLalRovD2siIGveuoW5i6Ck1RNy3TK8uG4mSPt07_0rpDjr_cSPh5HjjkZKFbUEXmo2HcF6vazyN2ZMnJ6-jjNrHHv05YDxe2FwarBcUwETg0S53vnFW8TYVtC79uIGIEuzjxBsXqaf25gxraBo_OP5YlebOTcsWqeePT1nlmb5GO4hN4ehAj7yn728g-38wt8USeiMYv4VnCaz3cyIU6P8SDsMflHQPByMFoD57_KD8aNtDXmDdyiTGhxX_LDm2_MPbki"
                />
              </div>
              <div>
                <h4 className="font-bold text-ink">Julian Thorne</h4>
                <p className="text-sm text-slate">CEO, Heritage Logistics</p>
              </div>
            </div>
          </Card>
          <Card className="min-w-[450px] snap-center p-12">
            <div className="flex gap-1 mb-6">
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
              <Star className="w-5 h-5 fill-gold text-gold" />
            </div>
            <p className="text-h3 text-ink mb-8 leading-relaxed">
              "Their transparency in real estate development has been a breath
              of fresh air. I finally feel like a partner in my own wealth
              journey."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-mist overflow-hidden">
                <img
                  alt="Client"
                  className="w-full h-full object-cover rounded-full"
                  data-alt="A professional portrait of a successful female entrepreneur in a minimalist white business studio. She wears a tailored linen blazer in a soft sage color. The lighting is airy and bright, emphasizing a light-mode aesthetic that is clean, premium, and sophisticated. The background is a soft ivory-tinted wall with subtle shadows."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu50XlJ9m_H-_tPmpo1lgqlvLgzAUw9_j0u7vEGktZfQN8ZP1z19b2PZgGtHjoFUyHNdP9CQpvIXEE-djnBnGQztHrdybZUfVUWrblJVJGIhXzeef5l8EP4Nr3hSiFaF2wBaVvCFw--_HuDRpNKA1ssm0hhlzOsjNqVnFSNqLDjBfRrDgh3vr4ry3QIRLl4VZbNNenlGEwa-VCApZH8TgGHyZ41V_8y2lzy8IKHstYLfE6VofkxAsFfS0XC_Sw5e4TThSYwzky4_-X"
                />
              </div>
              <div>
                <h4 className="font-bold text-ink">Eleanor Vance</h4>
                <p className="text-sm text-slate">Founder, Vance Interiors</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Pricing CTA */}
      <Section background="evergreen" divider>
        <div className="flex flex-col items-center text-center">
          <Eyebrow tone="light" className="mb-6 tracking-[0.3em]">
            Next Steps
          </Eyebrow>
          <h2 className="text-h2 text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-body text-white/70 max-w-xl mb-12">
            Select the stewardship path that aligns with your current
            milestone. Join our exclusive membership for premium insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-center">
            <div className="bg-white/10 p-10 rounded-3xl border border-white/20 flex flex-col items-center">
              <h3 className="text-h3 text-white mb-2">Foundation</h3>
              <span className="text-h2 text-white mb-6">
                $1.5k<span className="text-sm text-white/50">/yr</span>
              </span>
              <Button variant="secondary" className="w-full bg-white text-ink border-white hover:bg-white/90 hover:border-white">
                Select Tier
              </Button>
            </div>
            <Card className="p-10 flex flex-col items-center scale-105 relative z-10">
              <div className="absolute -top-4 bg-gold text-ink px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Most Preferred
              </div>
              <h3 className="text-h3 text-ink mb-2">Steward</h3>
              <span className="text-h2 text-ink mb-6">
                $5.0k<span className="text-sm text-slate">/yr</span>
              </span>
              <Button variant="primary" className="w-full">
                Select Tier
              </Button>
            </Card>
            <div className="bg-white/10 p-10 rounded-3xl border border-white/20 flex flex-col items-center">
              <h3 className="text-h3 text-white mb-2">Legacy</h3>
              <span className="text-h2 text-white mb-6">Custom</span>
              <Button variant="secondary" className="w-full bg-white text-ink border-white hover:bg-white/90 hover:border-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
