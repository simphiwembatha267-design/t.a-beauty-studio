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
    <article className="card-lift glass-panel group relative flex h-full flex-col overflow-hidden rounded-2xl p-4">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-32 w-32 rounded-full blush-veil opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
      />
      <div className="flex min-w-0 items-center gap-3">
        <span className="glass-inset grid h-10 w-10 shrink-0 place-items-center rounded-xl text-taupe transition-colors duration-500 group-hover:border-blush">
          <Icon className="h-4 w-4" strokeWidth={1.4} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg leading-tight">{service.name}</h3>
          <p className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span>From R{service.from}</span>
            <span className="h-3 w-px bg-border" />
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" strokeWidth={1.4} /> {service.duration}
            </span>
          </p>
        </div>
      </div>
      <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Link
        to="/book"
        search={{ service: service.id }}
        className="mt-3 inline-flex items-center justify-between gap-3 rounded-full border border-border px-4 py-2 text-[0.66rem] tracking-[0.18em] uppercase text-foreground transition-all duration-500 hover:border-transparent hover:bg-primary hover:text-primary-foreground"
      >
        Book {service.name}
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
