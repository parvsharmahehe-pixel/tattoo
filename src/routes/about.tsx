import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sid Ink Tattoo | Tattoo Artist in Sarojini Nagar, Delhi" },
      {
        name: "description",
        content:
          "About Sid Ink Tattoo — a tattoo and piercing shop inside Sarojini Nagar Market, New Delhi, with 6+ years of tattooing experience and custom black, colour and 3D tattoo work.",
      },
      { property: "og:title", content: "About Sid Ink Tattoo" },
      {
        property: "og:description",
        content:
          "Six years of tattoo craft. Custom designs, precise linework and a considered approach — from a studio inside Sarojini Nagar Market, New Delhi.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 md:pt-56 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">About</p>
          <h1 className="font-display mt-6 text-6xl md:text-[9rem] leading-[0.9]">
            Art that stays <br />
            <span className="italic text-silver">with you.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl max-w-2xl text-bone/85 leading-relaxed">
            Sid Ink Tattoo is a professional tattoo and piercing studio located inside Sarojini Nagar
            Market, New Delhi. Six years in, our work is defined by custom designs, clean linework
            and a considered approach to every piece.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <img
              src={IMG.studioInteriorSq.src}
              alt={IMG.studioInteriorSq.alt}
              loading="lazy"
              width={IMG.studioInteriorSq.width}
              height={IMG.studioInteriorSq.height}
              className="w-full h-[420px] md:h-[600px] object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">The Studio</p>
            <h2 className="font-display mt-6 text-5xl md:text-6xl">Built for the work.</h2>
            <p className="mt-6 text-base md:text-lg text-bone/85 leading-relaxed">
              Our studio sits inside one of Delhi's most recognizable markets. It's a considered space
              built around focus — designed for long sessions, careful conversations and detailed work.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every photograph on this website is a real image of our studio and our work — from the
              signposted stairway in Sarojini Nagar Market to the pieces we tattoo every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32 relative overflow-hidden">
        <img
          src={IMG.studioSignage.src}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15 hidden lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink to-transparent hidden lg:block" />
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">
          <p className="eyebrow">Philosophy</p>
          <h2 className="font-display mt-6 text-5xl md:text-7xl max-w-3xl">
            Custom work. <br />
            <span className="italic text-silver">No shortcuts.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              { t: "Custom Design", d: "Every tattoo is drawn around the person wearing it — no template art." },
              { t: "Considered Placement", d: "Placement, size and flow are decided together, not rushed on the day." },
              { t: "Precise Execution", d: "Careful linework and shading, focused on how the piece ages." },
            ].map((v) => (
              <Reveal key={v.t}>
                <h3 className="font-display text-3xl">{v.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl">
            Let's design your <span className="italic text-silver">first piece.</span>
          </h2>
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