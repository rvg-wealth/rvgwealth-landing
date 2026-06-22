import { ArrowRight, ChevronDown, MapPin, Megaphone, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

export default function ContactPage() {
  return (
    <>
      <Section background="evergreen" className="text-center">
        <h1 className="text-display text-white mb-6">
          Begin Your Stewardship Journey.
        </h1>
        <p className="text-body text-white/70 max-w-2xl mx-auto">
          Connect with our advisory team to discuss your family's financial
          future. Our heritage-focused approach ensures your legacy is preserved
          with the utmost discretion.
        </p>
      </Section>

      <Section background="white" divider>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-h2 text-ink">Sydney Headquarters</h2>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-evergreen shrink-0" />
              <div className="text-body text-slate">
                <p className="font-bold text-ink">1200 Legacy Tower</p>
                <p>Financial District, Sydney NSW 2000</p>
                <p>Australia</p>
              </div>
            </div>
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-hairline relative">
              <img
                className="w-full h-full object-cover"
                data-alt="A sophisticated map view of the Sydney financial district skyline with soft daylight reflecting off glass skyscrapers. The image maintains a professional, minimalist aesthetic with subtle sage and ivory tones, highlighting the iconic architectural landscape. The mood is serene and prestigious, fitting for a high-end wealth management firm headquarters location."
                data-location="Sydney"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHzG-vtgpayeLvjUsoJcd_y92XG7vkpizKVmaSPwrit7_SpMWzPFu2lLpNYAXrbSDhfbs0P07oXzUq1aYOYlPdi5nH5L0aM9cd9mmlt2dUdUCAogScwVu37e4DRWBVG7MqkueoM4QIY5DsKZkVmpmHTciHNRowy6QeFtYgxz7TrbIjqdbkYxlteIF1sF1Z2NJjjOD8taPR2L7yLF_mFsVFjoWRPXoKrng7h2rAi07oTGd8KLL4XjiwkGpf6Vkv2s5oKLt1tnKH0e3"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Card className="p-10 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Eyebrow tone="muted">Full Name</Eyebrow>
                    <input
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 focus:border-evergreen focus:outline-none"
                      placeholder="Julian Montgomery"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Eyebrow tone="muted">Email Address</Eyebrow>
                    <input
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 focus:border-evergreen focus:outline-none"
                      placeholder="julian@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Eyebrow tone="muted">Investment Horizon</Eyebrow>
                  <div className="relative">
                    <select
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 focus:border-evergreen focus:outline-none appearance-none cursor-pointer"
                      defaultValue="mid"
                    >
                      <option value="low">&lt;$1M</option>
                      <option value="mid">$1M - $5M</option>
                      <option value="high">$5M+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none w-5 h-5 text-slate" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Eyebrow tone="muted">Message</Eyebrow>
                  <textarea
                    className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 focus:border-evergreen focus:outline-none resize-none"
                    placeholder="How may we assist in your financial stewardship?"
                    rows={4}
                  ></textarea>
                </div>
                <Button type="submit">
                  Request Private Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="evergreen" divider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card hover className="p-8 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-evergreen/10 text-evergreen flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-h3 text-ink mb-1">Direct Inquiry</h3>
              <p className="text-slate">+61 (2) 5550 1200</p>
            </div>
          </Card>
          <Card hover className="p-8 flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center shrink-0">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-h3 text-ink mb-1">Press &amp; Media</h3>
              <p className="text-slate">press@rvgwealth.com</p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
