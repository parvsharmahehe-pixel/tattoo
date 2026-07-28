import { Link } from "@tanstack/react-router";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/60"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link to="/" className="group flex items-center gap-2" aria-label="Sid Ink Tattoo home">
            <span className="font-display text-xl md:text-[1.4rem] tracking-tight">
              SID INK<span className="text-silver">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bone/70 hover:text-bone transition-colors"
                activeProps={{ className: "text-bone" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneHref}
              className="hidden md:inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-bone/70 hover:text-bone transition-colors"
              aria-label="Call studio"
            >
              <Phone className="size-3.5" aria-hidden />
              <span>{SITE.phone}</span>
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex size-9 items-center justify-center text-bone/70 hover:text-bone transition-colors"
              aria-label="Sid Ink Tattoo on Instagram"
            >
              <Instagram className="size-4" aria-hidden />
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center border border-bone/80 px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-bone hover:bg-bone hover:text-ink transition-colors"
            >
              Book Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex size-11 items-center justify-center text-bone"
              aria-label="Open menu"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-ink text-bone animate-in fade-in duration-200">
          <div className="flex h-16 items-center justify-between px-6 md:h-20 md:px-10 border-b border-border/60">
            <span className="font-display text-xl tracking-tight">
              SID INK<span className="text-silver">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center"
              aria-label="Close menu"
            >
              <X className="size-6" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-10">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-5xl py-3 border-b border-border/40"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 mt-10 space-y-4">
            <a
              href={SITE.phoneHref}
              className="block text-[0.7rem] uppercase tracking-[0.22em] text-silver"
            >
              Call · {SITE.phone}
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-bone px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em]"
            >
              WhatsApp Us
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-bone/70"
            >
              <Instagram className="size-4" aria-hidden /> Instagram
            </a>
          </div>
        </div>
      )}
    </>
  );
}