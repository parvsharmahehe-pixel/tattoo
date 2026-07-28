import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { TATTOO_STYLES } from "@/lib/tattoo-data";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/tattoo-styles")({
  head: () => ({
    meta: [
      { title: "Tattoo Styles — Fine Line, Lettering & Black Ink | Sid Ink Delhi" },
      {
        name: "description",
        content:
          "Explore tattoo styles at Sid Ink Tattoo Sarojini Nagar — fine line, lettering and script, black ink tattoos and professional piercing in New Delhi.",
      },
      { property: "og:title", content: "Tattoo Styles — Sid Ink Tattoo Sarojini Nagar" },
      {
        property: "og:description",
        content: "Fine line, lettering, black ink tattoos and piercings — from our Sarojini Nagar studio in New Delhi.",
      },
      { property: "og:url", content: "/tattoo-styles" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/tattoo-styles" }],
  }),
  component: Styles,
});

function Styles() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Tattoo Styles</p>
          <h1 className="font-display mt-6 text-6xl md:text-[8rem] leading-[0.9]">
            Every style. <br />
            <span className="italic text-silver">Rendered precisely.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/80">
            From ultra-fine linework to bold black ink and script — a look at the work we specialise
            in at Sid Ink Tattoo, Sarojini Nagar Market, New Delhi.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-24 md:space-y-32">
          {TATTOO_STYLES.map((s, i) => (
            <Reveal
              key={s.slug}
              className={
                "grid md:grid-cols-12 gap-8 md:gap-16 items-center " +
                (i % 2 ? "md:[&>*:first-child]:order-2" : "")
              }
            >
              <div className="md:col-span-7 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  width={s.width}
                  height={s.height}
                  className="w-full h-[420px] md:h-[640px] object-cover hover:scale-[1.03] transition-transform duration-[1400ms] ease-out"
                />
              </div>
              <div className="md:col-span-5">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {s.category}</p>
                <h2 className="font-display mt-4 text-5xl md:text-7xl">{s.title}</h2>
                <p className="mt-6 text-lg text-bone/85 leading-relaxed">{s.long}</p>
                <a
                  href={SITE.whatsappForStyle(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 border-b border-bone/50 pb-2 text-[0.72rem] uppercase tracking-[0.24em] hover:border-bone hover:gap-4 transition-all"
                >
                  Enquire About This Style <ArrowRight className="size-3.5" aria-hidden />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-5xl md:text-7xl">
            Have something else <span className="italic text-silver">in mind?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Every tattoo we do is custom. Send us your idea and we'll build a design around it.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
          >
            Book a Consultation <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}