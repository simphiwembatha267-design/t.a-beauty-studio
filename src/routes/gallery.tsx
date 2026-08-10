import { createFileRoute } from "@tanstack/react-router";
import { MoonDecor } from "@/components/site/MoonDecor";
import { GalleryMasonry } from "@/components/site/GalleryMasonry";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Moonlight Beauty Salon Umlazi" },
      {
        name: "description",
        content:
          "Browse hair, braids, nails, makeup and wig transformations created at Moonlight Beauty Salon in Umlazi, KwaZulu-Natal.",
      },
      { property: "og:title", content: "Gallery | Moonlight Beauty Salon" },
      {
        property: "og:description",
        content: "Hair, braids, nails, makeup and wig work from the Moonlight studio.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <MoonDecor />
        <div className="relative mx-auto max-w-3xl px-5 pb-14 text-center sm:px-8">
          <span className="eyebrow">Gallery</span>
          <h1 className="mt-5 text-5xl sm:text-6xl">Softly styled, beautifully finished</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:pb-32">
        <GalleryMasonry />
      </section>
    </>
  );
}
