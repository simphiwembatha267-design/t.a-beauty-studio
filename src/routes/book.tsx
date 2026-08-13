import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { MoonDecor } from "@/components/site/MoonDecor";

export const Route = createFileRoute("/book")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Book an Appointment | Moonlight Beauty Salon" },
      {
        name: "description",
        content:
          "Book hair, braids, nails or makeup at Moonlight Beauty Salon in Umlazi. Choose your service, specialist, date and time in under a minute.",
      },
      { property: "og:title", content: "Book an Appointment | Moonlight Beauty Salon" },
      {
        property: "og:description",
        content: "Choose your service, specialist, date and time at Moonlight Beauty Salon, Umlazi.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { service } = Route.useSearch();

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <MoonDecor />
      <AuroraFog />

      <div className="relative mx-auto max-w-4xl px-5 pb-24 sm:px-8 lg:pb-32">


        <div className="mb-10 text-center">
          <span className="eyebrow">Booking</span>
          <h1 className="mt-5 text-5xl sm:text-6xl">Reserve your moment</h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Six gentle steps. No forms to wrestle with.
          </p>
        </div>
        <BookingFlow {...(service ? { initialService: service } : {})} />
      </div>
    </section>
  );
}
