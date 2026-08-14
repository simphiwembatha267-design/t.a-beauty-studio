import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, type GalleryItem } from "@/lib/salon-data";
import { Reveal } from "./Reveal";

const categories = ["All", "Hair", "Braids", "Nails"] as const;

export function GalleryMasonry({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const items: GalleryItem[] = gallery.filter((g) => filter === "All" || g.category === filter);
  const shown = limit ? items.slice(0, limit) : items;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % shown.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, shown.length]);

  return (
    <div>
      {!limit && (
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-5 py-3 text-[0.7rem] tracking-[0.18em] uppercase transition-all duration-500 ${
                filter === c
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-blush hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
        {shown.map((item, i) => (
          <Reveal key={item.src} delay={i * 60}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-3xl border border-border/70 bg-secondary/40"
              aria-label={`Open ${item.category} image`}
            >
              <span className="relative block overflow-hidden" style={{ aspectRatio: item.ratio }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-card/85 px-3 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase text-foreground backdrop-blur">
                    {item.category}
                  </span>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active !== null && shown[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery viewer"
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md animate-rise"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
            }}
            className="absolute left-3 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[86vh] max-w-4xl">
            <img
              src={shown[active].src}
              alt={shown[active].alt}
              className="max-h-[78vh] w-auto rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.2em] uppercase text-cream/70">
              {shown[active].category}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => ((i ?? 0) + 1) % shown.length);
            }}
            className="absolute right-3 grid h-12 w-12 place-items-center rounded-full border border-cream/30 text-cream sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
