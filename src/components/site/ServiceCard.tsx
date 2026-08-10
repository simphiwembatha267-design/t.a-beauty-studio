import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Waves,
  GitMerge,
  Crown,
  Scissors,
  Hand,
  Brush,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import type { Service } from "@/lib/salon-data";

const icons = {
  sparkles: Sparkles,
  waves: Waves,
  "git-merge": GitMerge,
  crown: Crown,
  scissors: Scissors,
  hand: Hand,
  brush: Brush,
} as const;

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sparkles;

  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card p-7">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full blush-veil opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
      />
      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-border/70 bg-secondary/60 text-taupe transition-colors duration-500 group-hover:border-blush">
        <Icon className="h-5 w-5" strokeWidth={1.4} />
      </span>
      <h3 className="mt-6 text-3xl">{service.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <div className="mt-6 flex items-center gap-4 text-xs tracking-[0.12em] uppercase text-muted-foreground">
        <span>From R{service.from}</span>
        <span className="h-3 w-px bg-border" />
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" strokeWidth={1.4} /> {service.duration}
        </span>
      </div>
      <Link
        to="/book"
        search={{ service: service.id }}
        className="mt-7 inline-flex items-center justify-between gap-3 rounded-full border border-border px-5 py-3.5 text-[0.72rem] tracking-[0.2em] uppercase text-foreground transition-all duration-500 hover:border-transparent hover:bg-primary hover:text-primary-foreground"
      >
        Book {service.name}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
