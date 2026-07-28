import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sid Ink Tattoo" },
      { name: "description", content: "Privacy policy for Sid Ink Tattoo, Sarojini Nagar, New Delhi." },
      { property: "og:title", content: "Privacy Policy — Sid Ink Tattoo" },
      { property: "og:description", content: "How Sid Ink Tattoo handles your information." },
      { property: "og:url", content: "/privacy" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <SiteLayout>
      <section className="pt-40 pb-24 md:pt-56 md:pb-32">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="eyebrow">Legal</p>
          <h1 className="font-display mt-6 text-5xl md:text-7xl">Privacy Policy</h1>
          <div className="mt-10 space-y-6 text-bone/85 leading-relaxed">
            <p>
              Sid Ink Tattoo respects your privacy. This page explains how we handle the information you share
              with us when you contact us, book a consultation or visit the studio.
            </p>
            <p>
              We only collect the information you provide directly — your name, phone number, and any details
              about your tattoo or piercing enquiry. We use it to respond to your enquiry and manage your
              appointment.
            </p>
            <p>
              We do not sell your information. For any questions about your data, contact us at the studio.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  ),
});