import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  Home as HomeIcon,
  PartyPopper,
} from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Booking | Tattoo Shop in Sarojini Nagar Market, Delhi" },
      {
        name: "description",
        content:
          "Book a tattoo or piercing appointment at Sid Ink Tattoo. Call +91 93158 04922, WhatsApp or visit Shop No. 135, A-Export Line, Sarojini Nagar Market, New Delhi 110023. Open from 10:30 AM.",
      },
      { property: "og:title", content: "Contact Sid Ink Tattoo — Sarojini Nagar Market, New Delhi" },
      {
        property: "og:description",
        content: "Call, WhatsApp or visit our tattoo and piercing studio in Sarojini Nagar Market, New Delhi.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-20">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Contact & Booking</p>
          <h1 className="font-display mt-6 text-6xl md:text-[9rem] leading-[0.9]">
            Your next tattoo <br />
            <span className="italic text-silver">starts here.</span>
          </h1>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-0">
          <Reveal className="py-16 md:py-24 md:pr-16">
            <p className="eyebrow">Reach the Studio</p>
            <div className="mt-8 space-y-6">
              <a
                href={SITE.phoneHref}
                className="group flex items-start gap-5 border-b border-border/60 pb-6"
              >
                <Phone className="size-5 text-silver mt-1" aria-hidden />
                <div>
                  <p className="eyebrow">Call</p>
                  <p className="font-display text-3xl mt-2 group-hover:text-silver transition-colors">
                    {SITE.phone}
                  </p>
                </div>
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 border-b border-border/60 pb-6"
              >
                <MessageCircle className="size-5 text-silver mt-1" aria-hidden />
                <div>
                  <p className="eyebrow">WhatsApp</p>
                  <p className="font-display text-3xl mt-2 group-hover:text-silver transition-colors">
                    Chat with us →
                  </p>
                </div>
              </a>
              <a
                href={SITE.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 border-b border-border/60 pb-6"
              >
                <MapPin className="size-5 text-silver mt-1" aria-hidden />
                <div>
                  <p className="eyebrow">Visit</p>
                  <p className="font-display text-2xl mt-2 leading-snug">
                    {SITE.address.line1}, {SITE.address.line2}
                    <br />
                    {SITE.address.city} {SITE.address.postal}
                  </p>
                  <p className="mt-2 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-silver group-hover:text-bone">
                    Get Directions <ArrowRight className="size-3.5" aria-hidden />
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-5">
                <Clock className="size-5 text-silver mt-1" aria-hidden />
                <div>
                  <p className="eyebrow">Hours</p>
                  <p className="font-display text-2xl mt-2">Open from {SITE.opening}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <Instagram className="size-5 text-silver mt-1" aria-hidden />
                <div>
                  <p className="eyebrow">Instagram</p>
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-2xl mt-2 block hover:text-silver transition-colors"
                  >
                    @sidinktattoo →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="min-h-[420px] md:min-h-[720px] border-l border-border/60">
            <iframe
              title="Sid Ink Tattoo location map"
              src={SITE.mapEmbedSrc}
              loading="lazy"
              className="h-full w-full min-h-[420px] md:min-h-[720px] grayscale contrast-125"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 text-center">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <h2 className="font-display text-5xl md:text-7xl">
            Prefer to <span className="italic text-silver">write?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Send us your idea, references, placement and approximate size on WhatsApp — we'll take it from there.
          </p>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
          >
            Message on WhatsApp <ArrowRight className="size-3.5" aria-hidden />
          </a>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto text-left">
            <div className="border border-border/80 p-8">
              <p className="eyebrow inline-flex items-center gap-2">
                <HomeIcon className="size-3.5" aria-hidden /> Home Service Available
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Contact us to discuss availability and requirements for home appointments.
              </p>
              <a
                href={SITE.whatsappHomeService}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 border-b border-bone/50 pb-1 text-[0.7rem] uppercase tracking-[0.22em] hover:border-bone"
              >
                Enquire About Home Service <ArrowRight className="size-3.5" aria-hidden />
              </a>
            </div>
            <div className="border border-border/80 p-8">
              <p className="eyebrow inline-flex items-center gap-2">
                <PartyPopper className="size-3.5" aria-hidden /> Events & College Fests
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Tattoo and temporary tattoo setups for college fests, parties and group bookings.
              </p>
              <a
                href={SITE.whatsappEvents}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 border-b border-bone/50 pb-1 text-[0.7rem] uppercase tracking-[0.22em] hover:border-bone"
              >
                Book Us for an Event <ArrowRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}