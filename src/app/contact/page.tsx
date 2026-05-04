import { ArrowRight, ChevronDown, MapPin, Megaphone, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <SiteHeader activeHref="/contact" />
      <main className="pt-32">
        <header className="max-w-7xl mx-auto px-8 py-24 text-center">
          <h1 className="font-display-xl text-display-xl text-primary mb-6">
            Begin Your Stewardship Journey.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Connect with our advisory team to discuss your family's financial
            future. Our heritage-focused approach ensures your legacy is preserved
            with the utmost discretion.
          </p>
        </header>
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  Sydney Headquarters
                </h2>
                <div className="flex items-start gap-4 mb-8">
                  <MapPin className="w-6 h-6 text-primary-container" />
                  <div className="font-body-md text-on-surface-variant">
                    <p className="font-bold text-on-surface">1200 Legacy Tower</p>
                    <p>Financial District, Sydney NSW 2000</p>
                    <p>Australia</p>
                  </div>
                </div>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-outline-variant relative">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="A sophisticated map view of the Sydney financial district skyline with soft daylight reflecting off glass skyscrapers. The image maintains a professional, minimalist aesthetic with subtle sage and ivory tones, highlighting the iconic architectural landscape. The mood is serene and prestigious, fitting for a high-end wealth management firm headquarters location."
                    data-location="Sydney"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHzG-vtgpayeLvjUsoJcd_y92XG7vkpizKVmaSPwrit7_SpMWzPFu2lLpNYAXrbSDhfbs0P07oXzUq1aYOYlPdi5nH5L0aM9cd9mmlt2dUdUCAogScwVu37e4DRWBVG7MqkueoM4QIY5DsKZkVmpmHTciHNRowy6QeFtYgxz7TrbIjqdbkYxlteIF1sF1Z2NJjjOD8taPR2L7yLF_mFsVFjoWRPXoKrng7h2rAi07oTGd8KLL4XjiwkGpf6Vkv2s5oKLt1tnKH0e3"
                  />
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="glass-surface p-12 rounded-xl rim-light">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-outline uppercase">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-stone-300"
                        placeholder="Julian Montgomery"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-caps text-label-caps text-outline uppercase">
                        Email Address
                      </label>
                      <input
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-stone-300"
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
                        className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none appearance-none cursor-pointer"
                        defaultValue="mid"
                      >
                        <option value="low">&lt;$1M</option>
                        <option value="mid">$1M - $5M</option>
                        <option value="high">$5M+</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-3 pointer-events-none w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-outline uppercase">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-stone-300 resize-none"
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
        <section className="max-w-7xl mx-auto px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-surface p-8 rounded-xl rim-light flex items-center gap-6 group hover:bg-white transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-1">
                  Direct Inquiry
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  +61 (2) 5550 1200
                </p>
              </div>
            </div>
            <div className="glass-surface p-8 rounded-xl rim-light flex items-center gap-6 group hover:bg-white transition-colors duration-300">
              <div className="w-16 h-16 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary mb-1">
                  Press &amp; Media
                </h3>
                <p className="font-body-md text-on-surface-variant">
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
