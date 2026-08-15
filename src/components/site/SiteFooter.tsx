import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/ta-beauty-studio-logo-clean.png.asset.json";
import { salon } from "@/lib/salon-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 veil">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <img
            src={logo.url}
            alt={`${salon.name} logo`}
            width={649}
            height={496}
            loading="lazy"
            className="h-20 w-auto sm:h-24"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A quiet, considered beauty studio in Morningside where hair, nails and makeup are crafted
            around you.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/book", label: "Book Appointment" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors duration-500 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Visit Us</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {salon.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{salon.hours}</p>
          <div className="mt-5 flex gap-2">
            {[
              { href: salon.instagram, icon: Instagram, label: "Instagram" },
              { href: salon.phoneHref, icon: Phone, label: "Call" },
              { href: `mailto:${salon.email}`, icon: Mail, label: "Email" },
              { href: salon.whatsapp, icon: MessageCircle, label: "WhatsApp" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all duration-500 hover:border-blush hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs tracking-[0.14em] uppercase text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} {salon.name}
      </div>
    </footer>
  );
}
