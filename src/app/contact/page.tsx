import { ArrowRight, ChevronDown, MapPin, Megaphone, Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

export default function ContactPage() {
  return (
    <>
      <Section
        background="evergreen"
        className="text-center relative overflow-hidden flex items-center min-h-[calc(100dvh-81px)]"
        containerClassName="w-full"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,138,46,0.14),transparent_55%)]" />
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
            <h2 className="text-h2 text-ink">Visit Our Office</h2>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-evergreen shrink-0" />
              <div className="text-body text-slate">
                <p className="font-bold text-ink">RVGWealth Advisory</p>
                <p>[Office address], [City]</p>
                <p>India</p>
              </div>
            </div>
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-hairline bg-gradient-to-br from-mist to-evergreen/10 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-evergreen/70">
                <MapPin className="w-8 h-8" />
                <span className="text-eyebrow">Map — embed your office location</span>
              </div>
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
                  <Eyebrow tone="muted">I&apos;m Interested In</Eyebrow>
                  <div className="relative">
                    <select
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 focus:border-evergreen focus:outline-none appearance-none cursor-pointer"
                      defaultValue="growth"
                    >
                      <option value="foundation">Foundation Stage</option>
                      <option value="growth">Growth Stage</option>
                      <option value="apex">Apex Stage</option>
                      <option value="general">General Enquiry</option>
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
              <h3 className="text-h3 text-ink mb-1">Call Us</h3>
              <p className="text-slate">+91 00000 00000</p>
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
