import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Instagram, Phone, Menu, X, CalendarHeart } from "lucide-react";
import logo from "@/assets/ta-beauty-studio-logo.png.asset.json";
import { salon } from "@/lib/salon-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/book", label: "Book Appointment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const sheet = (
    <div
      className={`fixed inset-0 z-[100] lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-ink/25 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 rounded-t-[2rem] border-t border-border bg-card px-6 pb-8 pt-3 transition-transform duration-500 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionTimingFunction: "var(--ease-silk)" }}
      >
        <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-border" />
        <div className="flex items-center justify-between">
          <span className="eyebrow">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="mt-4 divide-y divide-border/70">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={salon.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center justify-center gap-2 rounded-full border border-border py-4 text-xs tracking-[0.16em] uppercase"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-primary py-4 text-xs tracking-[0.16em] uppercase text-primary-foreground"
          >
            <CalendarHeart className="h-4 w-4" /> Book Now
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={{ transitionTimingFunction: "var(--ease-silk)" }}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:py-4"
      >
        <Link to="/" className="flex min-w-0 items-center" aria-label={`${salon.name} home`}>
          <img
            src={logo.url}
            alt={`${salon.name} logo`}
            width={240}
            height={240}
            className="h-14 w-auto shrink-0 sm:h-[4.5rem]"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className="relative py-1 text-[0.8rem] tracking-[0.14em] uppercase text-muted-foreground transition-colors duration-500 hover:text-foreground data-[status=active]:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-taupe after:transition-transform after:duration-500 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              href={salon.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-blush hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={salon.phoneHref}
              aria-label="Call the salon"
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-blush hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              to="/book"
              className="rounded-full bg-primary px-6 py-3 text-[0.72rem] tracking-[0.2em] uppercase text-primary-foreground transition-all duration-500 hover:bg-ink hover:shadow-soft"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={salon.phoneHref}
            aria-label="Call the salon"
            className="grid h-11 w-11 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

    </header>
    {mounted ? createPortal(sheet, document.body) : null}
    </>
  );
}
