import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, Instagram, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/tattoo-data";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Tattoo & Piercing Portfolio | Sid Ink Tattoo Sarojini Nagar" },
      {
        name: "description",
        content:
          "Real tattoo and piercing work from Sid Ink Tattoo, Sarojini Nagar Market, New Delhi — fine line, lettering, black ink tattoos and professional piercings.",
      },
      { property: "og:title", content: "Tattoo & Piercing Portfolio — Sid Ink Tattoo Delhi" },
      {
        property: "og:description",
        content: "Real work from our tattoo and piercing studio in Sarojini Nagar Market, New Delhi.",
      },
      { property: "og:url", content: "/portfolio" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = cat === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((i) => i.category === cat);

  return (
    <SiteLayout>
      <section className="pt-40 pb-12 md:pt-56 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Portfolio</p>
          <h1 className="font-display mt-6 text-6xl md:text-[8rem] leading-[0.9]">
            Our work speaks <br />
            <span className="italic text-silver">in ink.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/80">
            Real work. Real artists. Photographs of tattoos, piercings and the studio itself from
            Sid Ink Tattoo in Sarojini Nagar Market, New Delhi.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCat(c)}
                className={cn(
                  "border px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] transition-colors",
                  cat === c
                    ? "border-bone bg-bone text-ink"
                    : "border-border text-bone/70 hover:border-bone/60 hover:text-bone",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
            {items.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(i)}
                className="mb-3 md:mb-4 block w-full overflow-hidden group break-inside-avoid text-left"
                aria-label={`Open ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={item.width}
                  height={item.height}
                  className={cn(
                    "w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:opacity-90",
                    item.tall ? "aspect-[3/4]" : "aspect-square",
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Instagram</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl">
            See more of our work <span className="italic text-silver">on Instagram.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              <Instagram className="size-4" aria-hidden /> See More of Our Work on Instagram
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Book Appointment <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {open !== null && items[open] && (
        <div
          className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-200"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={items[open].alt}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute top-6 right-6 inline-flex size-11 items-center justify-center text-bone"
            aria-label="Close"
          >
            <X className="size-6" aria-hidden />
          </button>
          <img
            src={items[open].src}
            alt={items[open].alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </SiteLayout>
  );
}