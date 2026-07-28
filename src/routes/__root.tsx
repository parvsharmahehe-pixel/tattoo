import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { property: "og:site_name", content: "Sid Ink Tattoo" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Sid Ink Tattoo | Tattoo & Piercing Studio in Sarojini Nagar, Delhi" },
      { property: "og:title", content: "Sid Ink Tattoo | Tattoo & Piercing Studio in Sarojini Nagar, Delhi" },
      { name: "twitter:title", content: "Sid Ink Tattoo | Tattoo & Piercing Studio in Sarojini Nagar, Delhi" },
      { name: "description", content: "Sid Ink Tattoo is a tattoo and piercing studio in Sarojini Nagar Market, New Delhi offering black, colour and 3D tattoos, piercings, temporary tattoos and event services." },
      { property: "og:description", content: "Sid Ink Tattoo is a tattoo and piercing studio in Sarojini Nagar Market, New Delhi offering black, colour and 3D tattoos, piercings, temporary tattoos and event services." },
      { name: "twitter:description", content: "Sid Ink Tattoo is a tattoo and piercing studio in Sarojini Nagar Market, New Delhi offering black, colour and 3D tattoos, piercings, temporary tattoos and event services." },
      { property: "og:image", content: "https://sidinktattooz.com/favicon.ico" },
      { name: "twitter:image", content: "https://sidinktattooz.com/favicon.ico" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: "Sid Ink Tattoo",
          url: "https://sidinktattooz.com",
          telephone: "+91 93158 04922",
          sameAs: ["https://www.instagram.com/sidinktattoo/"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 135, A-Export Line, Sarojini Nagar Market",
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            postalCode: "110023",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:30",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Tattoo, Piercing & Beauty Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Black Colour Tattoo" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Colour Tattoo" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "3D Tattoo" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Temporary Tattoo" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Piercing" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eyelashes" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Extensions" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event & College Fest Tattoo Services" } },
            ],
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
