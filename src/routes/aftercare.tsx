import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/aftercare")({
  head: () => ({
    meta: [
      { title: "Tattoo Aftercare Guide — Sid Ink Tattoo, Delhi" },
      {
        name: "description",
        content:
          "Tattoo aftercare guide from Sid Ink Tattoo, Sarojini Nagar. How to wash, moisturise and protect your new tattoo through healing. Always follow your artist's specific instructions.",
      },
      { property: "og:title", content: "Tattoo Aftercare Guide — Sid Ink Tattoo" },
      {
        property: "og:description",
        content: "How to care for a new tattoo through healing — clear, considered guidance from Sid Ink Tattoo, Delhi.",
      },
      { property: "og:url", content: "/aftercare" },
    ],
    links: [{ rel: "canonical", href: "/aftercare" }],
  }),
  component: Aftercare,
});

const SECTIONS = [
  {
    n: "01",
    t: "The first few hours",
    body: [
      "Your artist will cover the fresh tattoo with a protective wrap or film.",
      "Follow their guidance on when to remove it — this can vary depending on the size, placement and film used.",
    ],
  },
  {
    n: "02",
    t: "Cleaning",
    body: [
      "Once removed, gently wash the tattoo with clean hands using lukewarm water and a mild, fragrance-free soap.",
      "Pat dry with a clean paper towel. Avoid rubbing, and avoid soaking the tattoo in bath water.",
    ],
  },
  {
    n: "03",
    t: "Moisturising",
    body: [
      "Apply a thin layer of the aftercare product your artist recommends.",
      "Too much product can suffocate the skin — a light, even layer is enough.",
    ],
  },
  {
    n: "04",
    t: "Through the healing weeks",
    body: [
      "Avoid direct sun, swimming pools, hot tubs and the sea until fully healed.",
      "Do not pick or scratch scabs or flaking skin — let it fall away naturally.",
      "Wear loose clothing that doesn't rub against the tattoo.",
    ],
  },
  {
    n: "05",
    t: "After it heals",
    body: [
      "Protect the tattoo from sun exposure with a high SPF — sun is the main cause of tattoo fading.",
      "Keep your skin moisturised. Well-hydrated skin keeps tattoos looking sharp.",
    ],
  },
  {
    n: "06",
    t: "When to seek medical attention",
    body: [
      "If you notice signs of infection — spreading redness, unusual swelling, fever, pus or severe pain — seek medical care promptly.",
      "If you have any concern about how the tattoo is healing, contact a healthcare professional.",
    ],
  },
];

function Aftercare() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 md:pt-56 md:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="eyebrow">Aftercare</p>
          <h1 className="font-display mt-6 text-6xl md:text-[8rem] leading-[0.9]">
            Care for the <br />
            <span className="italic text-silver">work.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-bone/85 leading-relaxed">
            A well-healed tattoo begins with proper aftercare. This is general guidance — always follow the
            specific instructions given by your tattoo artist, and seek medical care for any signs of infection
            or other concerning symptoms.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 space-y-16 md:space-y-24">
          {SECTIONS.map((s) => (
            <Reveal key={s.n} className="grid md:grid-cols-12 gap-8 border-t border-border/60 pt-10">
              <div className="md:col-span-4">
                <p className="font-display text-6xl text-silver">{s.n}</p>
                <h2 className="font-display text-3xl md:text-4xl mt-4">{s.t}</h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-base md:text-lg leading-relaxed text-bone/85">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 text-center">
          <p className="text-sm max-w-xl mx-auto text-muted-foreground">
            This page is general information, not medical advice. For anything specific to your tattoo or your
            health, please contact your artist or a qualified medical professional.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 border border-bone px-7 py-4 text-[0.72rem] uppercase tracking-[0.24em] hover:bg-bone hover:text-ink transition-colors"
          >
            Contact the Studio
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}