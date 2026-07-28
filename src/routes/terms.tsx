import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sid Ink Tattoo" },
      { name: "description", content: "Terms and conditions for Sid Ink Tattoo, Sarojini Nagar." },
      { property: "og:title", content: "Terms & Conditions — Sid Ink Tattoo" },
      { property: "og:description", content: "Studio terms and conditions." },
      { property: "og:url", content: "/terms" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-6 text-5xl md:text-7xl">Terms & Conditions</h1>
          <div className="mt-10 space-y-6 text-bone/85 leading-relaxed">
            <p>
              By booking a tattoo or piercing at Sid Ink Tattoo you agree that you are of legal age to receive
              body art, and that you are physically and mentally fit to do so.
            </p>
            <p>
              Deposits, cancellations and rescheduling policies will be communicated at the time of booking.
              Please arrive on time for your appointment and follow the aftercare instructions provided.
            </p>
            <p>
              For any questions about these terms, please contact us at the studio.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});