import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home, PartyPopper, Instagram } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";
import {
  TATTOO_PRICING,
  TEMPORARY_PRICING,
  BEAUTY_PRICING,
  PIERCING_PRICING,
  type PriceItem,
} from "@/lib/tattoo-data";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Tattoo Prices & Services | Sid Ink Tattoo, Sarojini Nagar Delhi" },
      {
        name: "description",
        content:
          "Tattoo, temporary tattoo, piercing and beauty service pricing at Sid Ink Tattoo, Sarojini Nagar Market, New Delhi. Black tattoos from ₹300, colour from ₹500, 3D from ₹800. Home service available.",
      },
      { property: "og:title", content: "Services & Pricing — Sid Ink Tattoo Sarojini Nagar" },
      {
        property: "og:description",
        content:
          "Black, colour and 3D tattoos, temporary tattoos, piercings and beauty services in Sarojini Nagar, New Delhi. Home service and event bookings available.",
      },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function PriceTable({ title, items, note }: { title: string; items: PriceItem[]; note?: string }) {
  return (
    <Reveal className="border border-border/80 p-8 md:p-10">
      <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
      <ul className="mt-8 divide-y divide-border/70">
        {items.map((i) => (
          <li key={i.name} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
            <span className="text-base text-bone/85">{i.name}</span>
            <span className="text-[0.72rem] uppercase tracking-[0.2em] text-silver whitespace-nowrap">
              {i.price}
            </span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{note}</p>}
    </Reveal>
  );
}

function Services() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Services & Pricing</p>
          <h1 className="font-display mt-6 text-6xl md:text-[8rem] leading-[0.9]">
            Tattoo prices <br />
            <span className="italic text-silver">in Sarojini Nagar.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/80">
            Black, colour and 3D tattoos, temporary tattoos, professional piercings and beauty
            services — all at our tattoo and piercing studio inside Sarojini Nagar Market, New Delhi.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid gap-6 md:grid-cols-2">
          <PriceTable
            title="Tattoos"
            items={TATTOO_PRICING}
            note="Final tattoo pricing may vary depending on size, design, placement and complexity."
          />
          <PriceTable
            title="Temporary Tattoos"
            items={TEMPORARY_PRICING}
            note="Temporary tattoo pricing and duration options can vary according to the customer's requirements."
          />
          <PriceTable
            title="Piercing"
            items={PIERCING_PRICING}
            note="Ear, nose, septum, eyebrow, lip and navel piercings are done at the studio. Message or call us for current piercing pricing."
          />
          <PriceTable title="Beauty Services" items={BEAUTY_PRICING} />
        </div>
      </section>

      {/* HOME SERVICE */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <img
              src={IMG.studioEntrance.src}
              alt={IMG.studioEntrance.alt}
              width={IMG.studioEntrance.width}
              height={IMG.studioEntrance.height}
              loading="lazy"
              className="w-full h-[420px] md:h-[600px] object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow inline-flex items-center gap-2">
              <Home className="size-3.5" aria-hidden /> Home Service Available
            </p>
            <h2 className="font-display mt-6 text-5xl md:text-7xl">
              We can come <span className="italic text-silver">to you.</span>
            </h2>
            <p className="mt-6 text-lg text-bone/85 max-w-md">
              Prefer to get tattooed at home? Sid Ink Tattoo offers home service on request in Delhi.
              Get in touch to discuss availability, your design and what the appointment needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE.whatsappHomeService}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
              >
                Enquire About Home Service <ArrowRight className="size-3.5" aria-hidden />
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
              >
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVENTS */}
      <section className="border-t border-border/60 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow inline-flex items-center gap-2">
            <PartyPopper className="size-3.5" aria-hidden /> Events & College Fests
          </p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
            Bringing the ink <span className="italic text-silver">to your event.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg text-bone/85">
            Planning a college fest, private event or special occasion? Sid Ink Tattoo offers tattoo
            and temporary tattoo services for events and group bookings. Get in touch to discuss your
            event, expected crowd and requirements.
          </p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              "College Fests",
              "College Events",
              "Private Events",
              "Parties",
              "Brand & Promotional Events",
              "Temporary Tattoo Setups",
              "Group Bookings",
              "Custom Requirements",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 60} className="bg-ink p-8 min-h-[140px] flex items-end">
                <p className="font-display text-2xl">{t}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={SITE.whatsappEvents}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              Book Us for an Event <ArrowRight className="size-3.5" aria-hidden />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-5xl md:text-7xl">
            Ready when <span className="italic text-silver">you are.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              Book Appointment <ArrowRight className="size-3.5" aria-hidden />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              View Our Work
            </Link>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              <Instagram className="size-4" aria-hidden /> Instagram
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
