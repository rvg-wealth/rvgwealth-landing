import { ArrowRight, ChevronDown, MapPin, Megaphone, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <SiteHeader activeHref="/contact" />
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        <header className="mb-24">
          <span className="font-label-caps text-secondary uppercase tracking-[0.3em] mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-display-xl text-primary mb-6">
            Begin Your Stewardship Journey.
          </h1>
          <p className="font-body-lg text-outline max-w-2xl">
            Connect with our advisory team to discuss your family's financial
            future. Our heritage-focused approach ensures your legacy is preserved
            with the utmost discretion.
          </p>
        </header>

        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  Sydney Headquarters
                </h2>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-5 h-5 text-primary-container mt-1" />
                  <div className="font-body-md text-outline">
                    <p className="font-semibold text-on-surface">1200 Legacy Tower</p>
                    <p>Financial District, Sydney NSW 2000</p>
                    <p>Australia</p>
                  </div>
                </div>
                <div className="w-full h-80 rounded-xl overflow-hidden border border-outline-variant/40 relative">
                  <img
                    className="w-full h-full object-cover"
                    data-location="Sydney"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHzG-vtgpayeLvjUsoJcd_y92XG7vkpizKVmaSPwrit7_SpMWzPFu2lLpNYAXrbSDhfbs0P07oXzUq1aYOYlPdi5nH5L0aM9cd9mmlt2dUdUCAogScwVu37e4DRWBVG7MqkueoM4QIY5DsKZkVmpmHTciHNRowy6QeFtYgxz7TrbIjqdbkYxlteIF1sF1Z2NJjjOD8taPR2L7yLF_mFsVFjoWRPXoKrng7h2rAi07oTGd8KLL4XjiwkGpf6Vkv2s5oKLt1tnKH0e3"
                  />
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="glass-card luminous-border p-12 rounded-xl">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-outline uppercase">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-on-surface-variant/40"
                        placeholder="Julian Montgomery"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-outline uppercase">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-on-surface-variant/40"
                        placeholder="julian@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-outline uppercase">
                      Investment Horizon
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none appearance-none cursor-pointer"
                        defaultValue="mid"
                      >
                        <option value="low">&lt;$1M</option>
                        <option value="mid">$1M – $5M</option>
                        <option value="high">$5M+</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-3 pointer-events-none w-5 h-5 text-outline" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-outline uppercase">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-on-surface-variant/40 resize-none"
                      placeholder="How may we assist in your financial stewardship?"
                      rows={4}
                    ></textarea>
                  </div>
                  <Button
                    className="w-full md:w-auto font-body-md font-semibold"
                    size="lg"
                    type="submit"
                    variant="primaryContainer"
                  >
                    Request Private Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card luminous-border p-8 rounded-xl flex items-center gap-6 group hover:bg-surface-container-lowest transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline-md text-primary mb-1">
                  Direct Inquiry
                </h3>
                <p className="font-body-md text-outline">
                  +61 (2) 5550 1200
                </p>
              </div>
            </div>
            <div className="glass-card luminous-border p-8 rounded-xl flex items-center gap-6 group hover:bg-surface-container-lowest transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline-md text-primary mb-1">
                  Press &amp; Media
                </h3>
                <p className="font-body-md text-outline">
                  press@rvgwealth.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter variant="compact" />
    </div>
  );
}
