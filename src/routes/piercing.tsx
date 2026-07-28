import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/piercing")({
  head: () => ({
    meta: [
      { title: "Piercing Shop in Sarojini Nagar, Delhi | Sid Ink Tattoo" },
      {
        name: "description",
        content:
          "Professional ear, nose, septum, eyebrow, lip and navel piercings at Sid Ink Tattoo — a piercing studio in Sarojini Nagar Market, New Delhi. Contact us for piercing pricing.",
      },
      { property: "og:title", content: "Piercing Studio in Sarojini Nagar — Sid Ink Tattoo Delhi" },
      {
        property: "og:description",
        content: "Precise, professional piercings alongside our tattoo work in Sarojini Nagar, New Delhi.",
      },
      { property: "og:url", content: "/piercing" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/piercing" }],
  }),
  component: Piercing,
});

const TYPES = [
  { t: "Ear Piercing", d: "Lobes, helix, tragus and more." },
  { t: "Nose Piercing", d: "Nostril piercings, done cleanly." },
  { t: "Septum", d: "Precisely placed septum piercings." },
  { t: "Eyebrow", d: "Careful placement for balance." },
  { t: "Lip", d: "Multiple lip piercing options." },
  { t: "Navel", d: "Classic navel piercings." },
];

function Piercing() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Piercing</p>
          <h1 className="font-display mt-6 text-6xl md:text-[8rem] leading-[0.9]">
            Piercings. <br />
            <span className="italic text-silver">Done with precision.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/80">
            A range of professional piercing services performed at the Sid Ink Tattoo studio in
            Sarojini Nagar Market, New Delhi. Contact us for current piercing pricing.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-0">
          <img
            src={IMG.piercingEarSq.src}
            alt={IMG.piercingEarSq.alt}
            loading="lazy"
            width={IMG.piercingEarSq.width}
            height={IMG.piercingEarSq.height}
            className="w-full h-[420px] md:h-[720px] object-cover"
          />
          <div className="grid grid-cols-2">
            {TYPES.map((p, i) => (
              <Reveal
                key={p.t}
                delay={i * 60}
                className="border-b border-r border-border p-8 flex flex-col justify-between min-h-[220px]"
              >
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-5xl md:text-7xl">
            Ask us about <span className="italic text-silver">piercings.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.whatsappForStyle("piercing")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              WhatsApp Us <ArrowRight className="size-3.5" aria-hidden />
            </a>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Call Studio
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}