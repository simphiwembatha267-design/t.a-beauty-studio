import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Sparkles, ShieldCheck, Leaf } from "lucide-react";
import aboutDetail from "@/assets/about-detail.jpg";
import heroImg from "@/assets/hero-salon.jpg";
import { MoonDecor } from "@/components/site/MoonDecor";
import { Reveal } from "@/components/site/Reveal";
import { specialists } from "@/lib/salon-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | T.A Beauty Studio Morningside" },
      {
        name: "description",
        content:
          "Meet the team behind T.A Beauty Studio in Morningside — our mission, our values and why clients trust us with their hair, nails and makeup.",
      },
      { property: "og:title", content: "About T.A Beauty Studio" },
      {
        property: "og:description",
        content: "Our story, values and specialists at T.A Beauty Studio in Morningside.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart, title: "Care first", body: "Gentle hands, healthy scalps and honest advice on every visit." },
  { icon: Sparkles, title: "Craft", body: "Precision work from artists who keep refining their technique." },
  { icon: ShieldCheck, title: "Hygiene", body: "Sanitised tools and fresh linen for every single client." },
  { icon: Leaf, title: "Calm", body: "A quiet studio designed to slow your morning down." },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <MoonDecor />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Our Story</span>
            <h1 className="mt-5 text-5xl leading-[1] sm:text-6xl">
              Beauty that feels like <span className="italic text-taupe">rest</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              T.A Beauty Studio began with a simple idea: a salon in Morningside where women could exhale. No
              rush, no noise — only warm light, soft music and artists who take the time to
              understand your hair and your life.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Today our chairs welcome brides, students, mothers and professionals. The service
              changes; the feeling never does.
            </p>
            <p className="mt-8 max-w-lg border-l border-blush pl-6 font-display text-2xl leading-snug">
              Our mission is to make every client leave feeling more like herself than when she
              arrived.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroImg}
              alt="Styling station at T.A Beauty Studio"
              width={1600}
              height={1200}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-[2rem] border border-border/70 object-cover sm:h-80"
            />
            <img
              src={aboutDetail}
              alt="Dried flowers and folded towels in the salon"
              width={1200}
              height={900}
              loading="lazy"
              className="h-40 w-full rounded-3xl border border-border/70 object-cover sm:h-52"
            />
            <div className="grid place-items-center rounded-3xl blush-veil p-6 text-center">
              <p>
                <span className="block font-display text-5xl">180+</span>
                <span className="mt-2 block text-[0.68rem] tracking-[0.18em] uppercase text-ink/70">
                  Happy clients
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="veil border-y border-border/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <span className="eyebrow">Why choose us</span>
            <h2 className="mt-4 text-4xl sm:text-5xl">Four things we never compromise</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="card-lift h-full rounded-3xl border border-border/80 bg-card p-7">
                  <v.icon className="h-5 w-5 text-taupe" strokeWidth={1.4} />
                  <h3 className="mt-5 text-2xl">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <span className="eyebrow">The Team</span>
          <h2 className="mt-4 text-4xl sm:text-5xl">Artists you can trust</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <div className="card-lift h-full rounded-3xl border border-border/80 bg-card p-7 text-center">
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full blush-veil font-display text-2xl text-ink">
                  {p.initials}
                </span>
                <h3 className="mt-5 text-2xl">{p.name}</h3>
                <p className="mt-1 text-xs tracking-[0.14em] uppercase text-muted-foreground">
                  {p.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {p.experience} · {p.speciality}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink"
          >
            Book with us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
