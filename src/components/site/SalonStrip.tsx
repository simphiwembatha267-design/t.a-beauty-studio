import s1 from "@/assets/salon-1.jpg.asset.json";
import s2 from "@/assets/salon-2.jpg.asset.json";
import s3 from "@/assets/salon-3.jpg.asset.json";
import s4 from "@/assets/salon-4.jpg.asset.json";
import s5 from "@/assets/salon-5.jpg.asset.json";
import { Reveal } from "./Reveal";

const shots = [
  { url: s4.url, alt: "Fluted wood reception desk with floral wallpaper at Moonlight Beauty Salon" },
  { url: s2.url, alt: "Row of white styling stations with tall mirrors and tan chairs" },
  { url: s1.url, alt: "Client lounge with a terracotta velvet sofa, pampas grass and framed art" },
  { url: s3.url, alt: "Salon floor with styling mirrors and black wash basins" },
  { url: s5.url, alt: "Waiting corner with tan chairs, velvet stool and a soft pink wall" },
];

export function SalonStrip() {
  return (
    <div className="relative">
      <Reveal>
        <div
          className="scroll-strip -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8"
          role="region"
          aria-label="Inside Moonlight Beauty Salon — scroll sideways"
        >
          {shots.map((shot) => (
            <figure
              key={shot.url}
              className="group relative w-[72vw] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-border/70 bg-secondary/40 sm:w-[46vw] lg:w-[28vw]"
            >
              <img
                src={shot.url}
                alt={shot.alt}
                loading="lazy"
                className="img-zoom h-[58vw] w-full object-cover sm:h-[34vw] lg:h-[22vw]"
              />
            </figure>
          ))}
        </div>
      </Reveal>
      <p className="mt-4 text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
        Scroll sideways to look around
      </p>
    </div>
  );
}
