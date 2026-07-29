import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Clock, Instagram, Home as HomeIcon, PartyPopper } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site";
import { TATTOO_STYLES, TATTOO_PRICING, TEMPORARY_PRICING, BEAUTY_PRICING, PIERCING_PRICING } from "@/lib/tattoo-data";
import { IMG } from "@/lib/images";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sid Ink Tattoo | Tattoo & Piercing Studio in Sarojini Nagar, Delhi" },
      {
        name: "description",
        content:
          "Sid Ink Tattoo is a tattoo and piercing studio in Sarojini Nagar Market, New Delhi offering black, colour and 3D tattoos, piercings, temporary tattoos and event services.",
      },
      { property: "og:title", content: "Sid Ink Tattoo | Tattoo & Piercing Studio in Sarojini Nagar, Delhi" },
      {
        property: "og:description",
        content:
          "Tattoo and piercing studio in Sarojini Nagar Market, New Delhi — black, colour and 3D tattoos, piercings, temporary tattoos, home service and event bookings.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

const FAQS = [
  {
    q: "Does getting a tattoo hurt?",
    a: "Everyone's experience is different. Some placements are more sensitive than others. Your artist will talk you through what to expect for your specific design and area.",
  },
  {
    q: "How should I prepare for my tattoo appointment?",
    a: "Get a full night of sleep, eat a proper meal beforehand, stay well hydrated and avoid alcohol the night before. Wear loose, comfortable clothing that gives easy access to the area being tattooed.",
  },
  {
    q: "How long does a tattoo take to heal?",
    a: "Initial surface healing usually takes 2–3 weeks, and full healing under the skin can take up to a couple of months. Always follow the aftercare instructions given by your artist.",
  },
  {
    q: "Can I bring my own tattoo design?",
    a: "Yes. You can share reference images, ideas or your own artwork during the consultation. We'll work with you to refine it into a design suited to the placement and size.",
  },
  {
    q: "Can you create a custom tattoo for me?",
    a: "Absolutely — custom work is what we do. Bring your idea, references and placement details and we'll design something around you.",
  },
  {
    q: "Do you do cover-up tattoos?",
    a: "Yes. We take on cover-up work depending on the size, colour and condition of the existing tattoo. Book a consultation so we can look at the piece and discuss options.",
  },
  {
    q: "Do you offer piercings?",
    a: "Yes — ear, nose, septum, eyebrow, lip and navel piercings are done at the studio alongside our tattoo work.",
  },
  {
    q: "Where is Sid Ink Tattoo located?",
    a: "Shop No. 135, A-Export Line, Sarojini Nagar Market, Sarojini Nagar, New Delhi 110023.",
  },
  {
    q: "How can I book a consultation?",
    a: "Call us, message us on WhatsApp, or use the booking section on this website. We'll get back to you to lock in a time.",
  },
];

function Home() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative h-dvh min-h-[640px] w-full overflow-hidden">
        <img
          src="/images/sid-ink-hero-final.webp"
          alt="Sid Ink Tattoo studio in Sarojini Nagar, New Delhi"
          className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,.36)_0%,rgba(5,5,5,.18)_45%,rgba(5,5,5,.08)_75%,rgba(5,5,5,.20)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-ink/95" />
        <div className="absolute inset-0 grain" />
        <style>{`@keyframes hero-zoom { from { transform: scale(1.08) } to { transform: scale(1) } }`}</style>

        <div className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28">
          <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
            <p className="eyebrow mt-12 md:mt-16 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 hidden">
              Sarojini Nagar · New Delhi
            </p>
            <h1 className="font-display mt-6 text-[3.4rem] sm:text-8xl md:text-[9rem] lg:text-[11rem] leading-[0.9] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000">
              Wear your <br />
              <span className="italic text-silver">story.</span>
            </h1>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-end">
              <div className="max-w-md">
                <p className="text-lg md:text-xl text-bone/85 leading-relaxed">
                  Custom tattoos. Precision piercings. Art made permanent.
                </p>
                <p className="mt-3 text-sm text-bone/60">
                  Sid Ink Tattoo — tattoo & piercing studio in Sarojini Nagar Market, New Delhi.
                  Open from {SITE.opening}.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
                >
                  Book a Consultation <ArrowRight className="size-3.5" aria-hidden />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.72rem] uppercase tracking-[0.24em] text-bone/70 border-t border-bone/15 pt-6">
              <span className="inline-flex items-center gap-2">
                <Star className="size-3.5 fill-bone text-bone" aria-hidden /> 4.8 Google Rating
              </span>
              <span>897+ Reviews</span>
              <span>6+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Not just ink</p>
            <h2 className="font-display mt-6 text-6xl md:text-8xl lg:text-[9rem]">
              A piece <br />
              <span className="italic text-silver">of you.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 flex flex-col justify-end">
            <p className="text-lg md:text-xl leading-relaxed text-bone/85">
              Every tattoo begins with an idea. At Sid Ink Tattoo, we turn that idea into artwork
              designed around you.
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Six years of tattooing experience. Custom designs, professional tattooing and piercing —
              from a studio located inside Sarojini Nagar Market.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex w-fit items-center gap-3 border-b border-bone/50 pb-2 text-[0.72rem] uppercase tracking-[0.24em] hover:border-bone hover:gap-4 transition-all"
            >
              Discover Sid Ink <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TATTOO STYLES */}
      <section className="border-t border-border/60 bg-charcoal/50 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className="eyebrow">Tattoo Styles</p>
              <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-2xl">
                Every style. <br />
                <span className="italic text-silver">Rendered precisely.</span>
              </h2>
            </div>
            <Link
              to="/tattoo-styles"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-bone/70 hover:text-bone"
            >
              All Styles <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
            {TATTOO_STYLES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 60}
                className={
                  "group relative overflow-hidden bg-ink " +
                  (i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[3/4]")
                }
              >
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  width={s.width}
                  height={s.height}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-2">{s.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-bone/70 max-w-xs">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-bone/70 group-hover:text-bone group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="size-3" aria-hidden />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <img
          src={IMG.studioSignage.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15 hidden lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink to-transparent hidden lg:block" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
          <p className="eyebrow">Our Process</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
            From idea <span className="italic text-silver">to ink.</span>
          </h2>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-4">
            {[
              { n: "01", t: "Consult", d: "Tell us your idea, references, placement and approximate size." },
              { n: "02", t: "Design", d: "The concept is developed into artwork suited to you and the placement." },
              { n: "03", t: "Session", d: "The tattoo is created professionally at the Sid Ink Tattoo studio." },
              { n: "04", t: "Aftercare", d: "You receive clear guidance for caring for your new tattoo at home." },
            ].map((step, i) => (
              <Reveal
                key={step.n}
                delay={i * 100}
                className="bg-ink p-8 md:p-10 min-h-[260px] flex flex-col"
              >
                <p className="font-display text-4xl text-silver">{step.n}</p>
                <h3 className="font-display text-3xl mt-4">{step.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PIERCING */}
      <section className="border-y border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <img
              src={IMG.piercingEar.src}
              alt={IMG.piercingEar.alt}
              width={IMG.piercingEar.width}
              height={IMG.piercingEar.height}
              loading="lazy"
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Piercings</p>
            <h2 className="font-display mt-6 text-5xl md:text-7xl">
              Done with <br />
              <span className="italic text-silver">precision.</span>
            </h2>
            <p className="mt-6 text-lg text-bone/85 max-w-md">
              Professional ear, nose, septum, eyebrow, lip and navel piercings — performed at the studio
              alongside our tattoo work.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Ear", "Nose", "Septum", "Eyebrow", "Lip", "Navel"].map((p) => (
                <span
                  key={p}
                  className="border border-border/80 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-bone/80"
                >
                  {p}
                </span>
              ))}
            </div>
            <Link
              to="/piercing"
              className="mt-10 inline-flex items-center gap-3 border border-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone hover:text-ink transition-colors"
            >
              Ask About Piercings <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES & PRICING */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="eyebrow">Services & Pricing</p>
              <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-2xl">
                Honest work. <br />
                <span className="italic text-silver">Honest pricing.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-bone/70 hover:text-bone"
            >
              All Services & Pricing <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                t: "Tattoos",
                items: TATTOO_PRICING,
                note: "Final tattoo pricing may vary depending on size, design, placement and complexity.",
              },
              {
                t: "Temporary Tattoos",
                items: TEMPORARY_PRICING,
                note: "Temporary tattoo pricing and duration options can vary according to the customer's requirements.",
              },
              {
                t: "Piercing",
                items: PIERCING_PRICING,
                note: "Ear, nose, septum, eyebrow, lip and navel piercings at the studio in Sarojini Nagar.",
              },
              { t: "Beauty Services", items: BEAUTY_PRICING },
            ].map((group, gi) => (
              <Reveal key={group.t} delay={gi * 80} className="border border-border/80 p-8 md:p-10">
                <h3 className="font-display text-3xl md:text-4xl">{group.t}</h3>
                <ul className="mt-8 divide-y divide-border/70">
                  {group.items.map((i) => (
                    <li key={i.name} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                      <span className="text-base text-bone/85">{i.name}</span>
                      <span className="text-[0.72rem] uppercase tracking-[0.2em] text-silver whitespace-nowrap">
                        {i.price}
                      </span>
                    </li>
                  ))}
                </ul>
                {group.note && (
                  <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{group.note}</p>
                )}
              </Reveal>
            ))}
          </div>

          {/* HOME SERVICE */}
          <Reveal className="mt-6 border border-border/80 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="eyebrow inline-flex items-center gap-2">
                <HomeIcon className="size-3.5" aria-hidden /> Home Service Available
              </p>
              <h3 className="font-display mt-4 text-4xl md:text-5xl">
                Tattoos at your <span className="italic text-silver">doorstep.</span>
              </h3>
              <p className="mt-4 max-w-xl text-base text-bone/80">
                Contact Sid Ink Tattoo to discuss availability and requirements for home appointments
                in Delhi.
              </p>
            </div>
            <a
              href={SITE.whatsappHomeService}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              Enquire About Home Service <ArrowRight className="size-3.5" aria-hidden />
            </a>
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
            and temporary tattoo services for events and group bookings in Delhi. Get in touch to
            discuss your event, expected crowd and requirements.
          </p>
          <div className="mt-12 flex flex-wrap gap-2">
            {[
              "College Fests",
              "College Events",
              "Private Events",
              "Parties",
              "Brand & Promotional Events",
              "Temporary Tattoo Setups",
              "Group Bookings",
            ].map((t) => (
              <span
                key={t}
                className="border border-border/80 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-bone/80"
              >
                {t}
              </span>
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
              to="/services"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Event & Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
            <div className="md:col-span-7">
              <p className="eyebrow">Trusted by Delhi</p>
              <h2 className="font-display mt-6 text-5xl md:text-7xl">
                Voices from <br />
                <span className="italic text-silver">the chair.</span>
              </h2>
            </div>
            <div className="md:col-span-5 flex items-baseline gap-6">
              <div>
                <p className="font-display text-7xl md:text-8xl leading-none">4.8</p>
                <div className="flex gap-1 mt-2" aria-label="4.8 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-4 fill-bone text-bone" aria-hidden />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground max-w-[10rem]">
                Based on 897+ Google reviews.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                n: "Tisha Bhardwaj",
                r: "I highly recommend this place to anyone looking for high-quality work.",
              },
              {
                n: "Nikhil Lama",
                r: "Best service so good work 😊 Visit karo",
              },
            ].map((rev) => (
              <Reveal key={rev.n} className="border border-border/80 p-8 md:p-10">
                <div className="flex gap-1 mb-6" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="size-3.5 fill-bone text-bone" />
                  ))}
                </div>
                <p className="font-display text-2xl md:text-3xl leading-snug">"{rev.r}"</p>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.24em] text-silver">
                  — {rev.n}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={SITE.reviewsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone hover:text-ink transition-colors"
            >
              Read Google Reviews <ArrowRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-border/60 bg-charcoal/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Why Sid Ink</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
            Detail is <span className="italic text-silver">everything.</span>
          </h2>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {[
              { t: "6+ Years", d: "Years dedicated to tattoo artistry." },
              { t: "Custom Artwork", d: "Designs created around each client's idea." },
              { t: "Precision Work", d: "Attention to detail across different styles." },
              { t: "Sarojini Nagar", d: "Inside one of Delhi's most recognizable markets." },
              { t: "Tattoos + Piercings", d: "Multiple body-art services under one roof." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80} className="bg-ink p-8 min-h-[220px] flex flex-col justify-between">
                <p className="font-display text-3xl">{item.t}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <img
              src={IMG.studioInterior.src}
              alt={IMG.studioInterior.alt}
              loading="lazy"
              width={IMG.studioInterior.width}
              height={IMG.studioInterior.height}
              className="w-full h-[420px] md:h-[560px] object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Real Work. Real Artists.</p>
            <h2 className="font-display mt-6 text-5xl md:text-7xl">
              Art that stays <br />
              <span className="italic text-silver">with you.</span>
            </h2>
            <p className="mt-6 text-lg text-bone/85 max-w-md">
              Sid Ink Tattoo is a tattoo and piercing shop inside Sarojini Nagar Market with six years
              of industry experience — built around custom work, clean linework and a considered
              approach to every design. Every photograph on this site is real work from our studio.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-bone/50 pb-2 text-[0.72rem] uppercase tracking-[0.24em] hover:border-bone hover:gap-4 transition-all"
            >
              About the Studio <ArrowRight className="size-3.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl">
              Questions, <br />
              <span className="italic text-silver">answered.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="border-t border-border">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-display py-6 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 md:py-40 border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="eyebrow">Book Now</p>
          <h2 className="font-display mt-6 text-6xl md:text-9xl leading-[0.9]">
            Your next tattoo <br />
            <span className="italic text-silver">starts here.</span>
          </h2>
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-ink hover:bg-bone/90 transition-colors"
            >
              Book Consultation <ArrowRight className="size-3.5" aria-hidden />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Call Studio
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              WhatsApp Us
            </a>
            <a
              href={SITE.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              Get Directions
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-bone/70 px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone/10 transition-colors"
            >
              <Instagram className="size-4" aria-hidden /> See More on Instagram
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="size-4" aria-hidden /> Sarojini Nagar Market, New Delhi</span>
            <span className="inline-flex items-center gap-2"><Clock className="size-4" aria-hidden /> Open from {SITE.opening}</span>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 hover:text-bone">
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
