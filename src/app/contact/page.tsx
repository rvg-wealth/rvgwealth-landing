import { ArrowRight, ChevronDown, MapPin, Megaphone, Phone } from "lucide-react";
import { Button } from "../components/Button";
import { ContactInfoCard } from "../components/ContactInfoCard";
import { PageHeader } from "../components/PageHeader";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const contactChannels = [
  {
    icon: Phone,
    title: "Direct Inquiry",
    value: "+61 (2) 5550 1200",
    iconBg: "bg-primary-fixed",
    iconColor: "text-primary",
  },
  {
    icon: Megaphone,
    title: "Press & Media",
    value: "press@rvgwealth.com",
    iconBg: "bg-tertiary-fixed",
    iconColor: "text-tertiary",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
      <SiteHeader activeHref="/contact" />
      <main className="pt-40 pb-24 px-6 md:px-8 max-w-7xl mx-auto">
        <PageHeader
          eyebrow="Get in Touch"
          title="Begin Your Stewardship Journey."
          description="Connect with our advisory team to discuss your family's financial future. Our heritage-focused approach ensures your legacy is preserved with the utmost discretion."
        />

        {/* Form + map */}
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZHzG-vtgpayeLvjUsoJcd_y92XG7vkpizKVmaSPwrit7_SpMWzPFu2lLpNYAXrbSDhfbs0P07oXzUq1aYOYlPdi5nH5L0aM9cd9mmlt2dUdUCAogScwVu37e4DRWBVG7MqkueoM4QIY5DsKZkVmpmHTciHNRowy6QeFtYgxz7TrbIjqdbkYxlteIF1sF1Z2NJjjOD8taPR2L7yLF_mFsVFjoWRPXoKrng7h2rAi07oTGd8KLL4XjiwkGpf6Vkv2s5oKLt1tnKH0e3"
                    alt="Sydney headquarters location"
                  />
                  <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-card luminous-border p-12 rounded-xl">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField label="Full Name" type="text" placeholder="Julian Montgomery" />
                    <FormField label="Email Address" type="email" placeholder="julian@example.com" />
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
                    />
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

        {/* Contact channels */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactChannels.map((c) => (
              <ContactInfoCard key={c.title} {...c} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter variant="compact" />
    </div>
  );
}

function FormField({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="font-label-caps text-label-caps text-outline uppercase">{label}</label>
      <input
        className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-secondary transition-all px-0 py-3 focus:outline-none placeholder:text-on-surface-variant/40"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
