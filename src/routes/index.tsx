import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-beauty-studio.jpg";
import { MoonDecor } from "@/components/site/MoonDecor";
import { AuroraFog } from "@/components/site/AuroraFog";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";
import { SalonStrip } from "@/components/site/SalonStrip";

import { services, testimonials, salon } from "@/lib/salon-data";

export const Route = createFileRoute("/")({
  head: () => ({
  meta: [
    {
      title: "T.A Beauty Studio | Hair, Braids, Nails & Makeup in Durban",
    },
    {
      name: "description",
      content:
        "T.A Beauty Studio in Morningside, Durban. Professional hair, braids, dreadlocks, wigs, nails and makeup in a calm, modern beauty studio. Book your appointment online.",
    },
    {
      property: "og:title",
      content: "T.A Beauty Studio | Durban",
    },
    {
      property: "og:description",
      content:
        "Professional hair, braids, nails and makeup at T.A Beauty Studio in Morningside, Durban. Book your appointment online.",
    },
  ],
}),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto flex min-h-[88svh] max-w-3xl flex-col items-center justify-center px-6 pt-32 pb-24 text-center sm:pt-40 sm:pb-32">
          <div className="animate-rise">
            <span className="eyebrow">Morningside · Durban</span>

            <h1 className="mt-8 text-[2.75rem] font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Beauty,
              <span className="block text-taupe">Beautifully Done.</span>
            </h1>

            <p className="mt-8 text-[0.68rem] tracking-[0.28em] uppercase text-muted-foreground">
              T.A Beauty Studio
            </p>

            <div className="mt-14">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink hover:shadow-soft"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-border/70 shadow-soft">
            <img
              src={heroImg}
              alt="The calm cream and beige interior of T.A Beauty Studio"
              width={1600}
              height={1200}
              className="h-[46vh] w-full object-cover sm:h-[60vh]"
            />
          </div>
        </div>
      </section>

      {/* Inside the salon — sideways scroll */}
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:pt-24">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Walk in as you are</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Leave glowing</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A look inside our Umlazi studio — soft light, calm corners and a chair with your name on it.
          </p>
        </Reveal>
        <div className="mt-10">
          <SalonStrip />
        </div>
      </section>


      {/* Services touchpoint */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8" id="services">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 border-y border-border/70 py-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.72rem] tracking-[0.2em] uppercase text-muted-foreground">
            <span className="text-foreground">Hair</span>
            <span className="text-foreground">Beauty</span>
            <span className="text-foreground">Nails</span>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-foreground"
          >
            View services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>


      {/* Gallery preview */}
      <section className="veil border-y border-border/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">The Gallery</span>
              <h2 className="mt-4 text-4xl sm:text-5xl">Work from our chairs</h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-foreground"
            >
              View gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-12">
            <GalleryMasonry limit={6} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">Loved by our clients</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">4.9 average rating</h2>
          </div>
          <p className="flex gap-1 text-taupe">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card-lift h-full rounded-3xl border border-border/80 bg-card p-8">
                <div className="flex gap-1 text-taupe">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-2xl leading-snug">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  {t.name} · {t.service}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden veil border-t border-border/70">
        <MoonDecor />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <span className="eyebrow">Ready when you are</span>
            <h2 className="mt-5 text-4xl sm:text-6xl">Your appointment awaits</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Choose your service, your artist and your time in under a minute.
            </p>
            <Link
              to="/book"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink hover:shadow-soft"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-4 w-4 text-taupe" /> {salon.address[0]}, Umlazi
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
