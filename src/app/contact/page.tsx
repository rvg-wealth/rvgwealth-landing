import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Megaphone,
  Phone,
} from "lucide-react";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";

export default function ContactPage() {
  return (
    <Section
      background="evergreen"
      className="relative overflow-hidden flex items-center min-h-[calc(100dvh-81px)]"
      containerClassName="w-full"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,138,46,0.14),transparent_55%)]" />

      <div className="relative">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-display text-white mb-6">
            Begin Your Stewardship Journey.
          </h1>
          <p className="text-body text-white/70 max-w-2xl mx-auto">
            Connect with our advisory team to discuss your family&apos;s
            financial future. Our heritage-focused approach ensures your legacy
            is preserved with the utmost discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: address, contact rows, map */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-h2 text-white">Visit Our Office</h2>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold ring-1 ring-white/15">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              </span>
              <div className="flex-1 min-w-0 text-body text-white/70">
                <p className="font-bold text-white">RVGWealth Advisory</p>
                <p className="whitespace-nowrap">[Office address], [City], India</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold ring-1 ring-white/15">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-eyebrow text-white/50">Call Us</p>
                  <p className="text-body text-white">+91 00000 00000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold ring-1 ring-white/15">
                  <Megaphone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-eyebrow text-white/50">Press &amp; Media</p>
                  <p className="text-body text-white">press@rvgwealth.com</p>
                </div>
              </div>
            </div>

            <div className="w-full h-56 rounded-2xl overflow-hidden border border-white/15 bg-white/5 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-white/50">
                <MapPin className="w-8 h-8" />
                <span className="text-eyebrow">
                  Map — embed your office location
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Card className="p-10 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Eyebrow tone="muted">Full Name</Eyebrow>
                    <input
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 text-ink placeholder:text-slate/60 focus:border-evergreen focus:outline-none"
                      placeholder="Julian Montgomery"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <Eyebrow tone="muted">Email Address</Eyebrow>
                    <input
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 text-ink placeholder:text-slate/60 focus:border-evergreen focus:outline-none"
                      placeholder="julian@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Eyebrow tone="muted">I&apos;m Interested In</Eyebrow>
                  <div className="relative">
                    <select
                      className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 text-ink placeholder:text-slate/60 focus:border-evergreen focus:outline-none appearance-none cursor-pointer"
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
                    className="w-full bg-mist border border-hairline rounded-lg px-4 py-3 text-ink placeholder:text-slate/60 focus:border-evergreen focus:outline-none resize-none"
                    placeholder="How may we assist in your financial stewardship?"
                    rows={4}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button type="submit">
                    Request Private Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
