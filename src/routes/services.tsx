import { createFileRoute } from "@tanstack/react-router";
import { MoonDecor } from "@/components/site/MoonDecor";
import { AuroraFog } from "@/components/site/AuroraFog";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services } from "@/lib/salon-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Prices | T.A Beauty Studio Morningside" },
      {
        name: "description",
        content:
          "Hair, braids, dreadlocks, wigs, haircuts, nails and makeup at T.A Beauty Studio in Morningside. See starting prices and treatment times.",
      },
      { property: "og:title", content: "Services & Prices | T.A Beauty Studio" },
      {
        property: "og:description",
        content: "Starting prices and durations for hair, braids, nails, wigs and makeup in Morningside.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <MoonDecor />
        <div className="relative mx-auto max-w-3xl px-5 pb-14 text-center sm:px-8">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 text-5xl sm:text-6xl">A considered beauty menu</h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Prices start from the figures below and are confirmed in-salon after your consultation,
            based on length, density and style.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <AuroraFog />
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
