import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { MoonDecor } from "@/components/site/MoonDecor";
import { Reveal } from "@/components/site/Reveal";
import { salon } from "@/lib/salon-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | T.A Beauty Studio Morningside" },
      {
        name: "description",
        content:
          "Find T.A Beauty Studio at 87 Smiso Nkwanyana Road, Morningside, Durban. Open daily 09:00–18:00. Call or WhatsApp us.",
      },
      { property: "og:title", content: "Contact T.A Beauty Studio" },
      {
        property: "og:description",
        content: "87 Smiso Nkwanyana Road, Morningside. Open daily 09:00–18:00.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: Phone, label: "Call us", value: salon.phone, href: salon.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: salon.whatsapp },
    { icon: Mail, label: "Email", value: salon.email, href: `mailto:${salon.email}` },
    { icon: Instagram, label: "Instagram", value: "@moonlightbeauty", href: salon.instagram },
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <MoonDecor />
        <div className="relative mx-auto max-w-3xl px-5 pb-14 text-center sm:px-8">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 text-5xl sm:text-6xl">Come and find us</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-card">
              <iframe
                title="Map showing T.A Beauty Studio in Morningside"
                src={salon.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full border-0 lg:h-full lg:min-h-[520px]"
              />
            </div>
          </Reveal>

          <div className="order-1 grid gap-4 lg:order-2">
            <Reveal>
              <div className="rounded-[2rem] border border-border/80 bg-card p-7">
                <MapPin className="h-5 w-5 text-taupe" strokeWidth={1.4} />
                <h2 className="mt-4 text-3xl">Address</h2>
                <address className="mt-3 text-sm leading-relaxed not-italic text-muted-foreground">
                  {salon.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-[2rem] border border-border/80 bg-card p-7">
                <Clock className="h-5 w-5 text-taupe" strokeWidth={1.4} />
                <h2 className="mt-4 text-3xl">Business hours</h2>
                <p className="mt-3 text-sm text-muted-foreground">Monday – Sunday</p>
                <p className="font-display text-2xl">09:00 – 18:00</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {cards.map(({ icon: Icon, label, value, href }, i) => (
                <Reveal key={label} delay={120 + i * 60}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="card-lift flex h-full flex-col justify-between rounded-3xl border border-border/80 bg-card p-6"
                  >
                    <Icon className="h-5 w-5 text-taupe" strokeWidth={1.4} />
                    <span className="mt-6 block">
                      <span className="eyebrow">{label}</span>
                      <span className="mt-1 block truncate font-display text-lg">{value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
