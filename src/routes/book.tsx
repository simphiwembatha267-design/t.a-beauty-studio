import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { MoonDecor } from "@/components/site/MoonDecor";
import { AuroraFog } from "@/components/site/AuroraFog";

export const Route = createFileRoute("/book")({
  validateSearch: z.object({ service: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Book an Appointment | T.A Beauty Studio" },
      {
        name: "description",
        content:
          "Book hair, braids, nails or makeup at T.A Beauty Studio in Morningside. Choose your service, specialist, date and time in under a minute.",
      },
      { property: "og:title", content: "Book an Appointment | T.A Beauty Studio" },
      {
        property: "og:description",
        content: "Choose your service, specialist, date and time at T.A Beauty Studio, Morningside.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { service } = Route.useSearch();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      <MoonDecor />
      <AuroraFog />

      <div className="relative mx-auto max-w-4xl px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mb-5 sm:mb-6">
          <span className="eyebrow">Booking</span>
          <h1 className="mt-2 text-2xl sm:text-3xl">Book your appointment</h1>
          <p className="mt-1 text-sm text-muted-foreground">Choose a service to begin.</p>
        </div>
        <BookingFlow {...(service ? { initialService: service } : {})} />
      </div>
    </section>

  );
}
