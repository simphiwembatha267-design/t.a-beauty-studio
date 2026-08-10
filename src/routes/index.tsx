import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import { MoonDecor } from "@/components/site/MoonDecor";
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
      <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
        <MoonDecor />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
          <div className="animate-rise">
            <span className="eyebrow">Umlazi · KwaZulu-Natal</span>
            <h1 className="mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Find Your
              <span className="block italic text-taupe">Glow</span>
            </h1>
            <p className="mt-4 text-sm tracking-[0.16em] uppercase text-muted-foreground">
              Reveal your natural beauty
            </p>
            <p className="mt-6 text-sm tracking-[0.16em] uppercase text-muted-foreground">
              Hair · Braids · Nails · Makeup · Beauty Treatments
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Experience professional beauty services in a relaxing environment where every
              appointment is crafted around you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink hover:shadow-soft"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:border-blush"
              >
                View Services
              </Link>
            </div>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current text-taupe" />
                <dt className="sr-only">Rating</dt>
                <dd>4.9 from 180+ clients</dd>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-taupe" />
                <dt className="sr-only">Hours</dt>
                <dd>Open daily 09:00 – 18:00</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border border-border/70 shadow-soft">
              <img
                src={heroImg}
                alt="The calm cream and beige interior of Moonlight Beauty Salon"
                width={1600}
                height={1200}
                className="h-[52vh] w-full object-cover sm:h-[62vh] lg:h-[72vh]"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-3xl border border-border/70 bg-card/90 px-6 py-4 backdrop-blur-md sm:left-8">
              <p className="eyebrow">Walk in as you are</p>
              <p className="mt-1 font-display text-2xl">Leave glowing</p>
            </div>
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


      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28" id="services">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">The Menu</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Crafted services, softly delivered</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Every treatment begins with a consultation and ends with a finish you can feel.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-foreground"
          >
            All services <ArrowRight className="h-4 w-4" />
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
