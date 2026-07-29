import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Sid Ink Tattoo</p>
            <h2 className="font-display text-5xl md:text-7xl mt-4">
              Art made <br className="hidden md:block" />
              permanent.
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Sid Ink Tattoo — a tattoo & piercing shop in Sarojini Nagar Market, New Delhi. Real
              work, real artists.
            </p>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center border border-bone px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] hover:bg-bone hover:text-ink transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><Link to="/tattoo-styles" className="hover:text-bone text-bone/70">Tattoo Styles</Link></li>
              <li><Link to="/portfolio" className="hover:text-bone text-bone/70">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-bone text-bone/70">Services & Pricing</Link></li>
              <li><Link to="/piercing" className="hover:text-bone text-bone/70">Piercing</Link></li>
              <li><Link to="/aftercare" className="hover:text-bone text-bone/70">Aftercare</Link></li>
              <li><Link to="/about" className="hover:text-bone text-bone/70">About</Link></li>
              <li><Link to="/contact" className="hover:text-bone text-bone/70">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow">Studio</p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-bone/80">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
              <br />
              {SITE.address.city}, {SITE.address.postal}
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href={SITE.phoneHref} className="block hover:text-bone text-bone/80">
                {SITE.phone}
              </a>
              <a
                href={SITE.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-bone text-bone/80"
              >
                Get Directions →
              </a>
              <p className="text-bone/60">Open from {SITE.opening}</p>
            </div>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-bone/70 hover:text-bone"
            >
              <Instagram className="size-4" aria-hidden /> See More of Our Work on Instagram
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.7rem] uppercase tracking-[0.22em] text-bone/50">
          <p>© {year} Sid Ink Tattoo. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-bone">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-bone">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    <div className="vince-credit" style={{ textAlign: "center", fontSize: "11px", letterSpacing: "0.08em", opacity: 0.55, padding: "14px 16px 18px" }}>
  © 2026 Sid Ink Tattoo · Website made by{" "}
  <a href="https://www.instagram.com/vinceandco.in" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", borderBottom: "1px solid currentColor" }}>
    Vince &amp; Co
  </a>
</div>
</footer>
  );
}