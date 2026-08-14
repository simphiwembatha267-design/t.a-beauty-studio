import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Instagram, Menu, X, CalendarHeart } from "lucide-react";
import logo from "@/assets/ta-beauty-studio-logo-transparent.png.asset.json";
import { salon } from "@/lib/salon-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/book", label: "Book Appointment" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const tiktokUrl = "https://www.tiktok.com/@tabeautystudio_";

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
            width={678}
            height={991}
            className="h-20 w-auto shrink-0 sm:h-24 lg:h-28"
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
  href={tiktokUrl}
  target="_blank"
  rel="noreferrer noopener"
  aria-label="TikTok"
  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 hover:border-blush hover:text-foreground"
>
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.91 2.91 0 1 1-2-2.75V9.4a6.36 6.36 0 1 0 5.45 6.27V8.26a8.16 8.16 0 0 0 4.77 1.52V6.69Z" />
  </svg>
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
  href={salon.whatsapp}
  target="_blank"
  rel="noreferrer noopener"
  aria-label="Chat with T.A Beauty Studio on WhatsApp"
  className="grid h-11 w-11 place-items-center rounded-full border border-border/80 bg-card/70 text-foreground"
>
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2a9.93 9.93 0 0 0-8.59 14.9L2 22l5.27-1.38A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.13.82.84-3.05-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.45-6.08c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.74-1.8-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.57 4.07 3.6.57.25 1.01.4 1.36.51.57.18 1.09.16 1.5.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
  </svg>
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
