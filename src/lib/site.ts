export const SITE = {
  name: "Sid Ink Tattoo",
  tagline: "Art Made Permanent.",
  phone: "+91 93158 04922",
  phoneRaw: "+919315804922",
  phoneHref: "tel:+919315804922",
  address: {
    line1: "Shop No. 135, A-Export Line",
    line2: "Sarojini Nagar Market",
    city: "Sarojini Nagar, New Delhi",
    region: "Delhi",
    postal: "110023",
    country: "IN",
    lat: 28.5747,
    lng: 77.1953,
  },
  opening: "10:30 AM",
  rating: 4.8,
  reviews: 897,
  years: 6,
  whatsappHref:
    "https://wa.me/919315804922?text=" +
    encodeURIComponent(
      "Hi Sid Ink Tattoo! I found you through your website and I'd like to enquire about a tattoo.",
    ),
  whatsappForStyle: (style: string) =>
    "https://wa.me/919315804922?text=" +
    encodeURIComponent(
      `Hi Sid Ink Tattoo! I'm interested in a ${style} tattoo — could you share more info?`,
    ),
  whatsappHomeService:
    "https://wa.me/919315804922?text=" +
    encodeURIComponent(
      "Hi Sid Ink Tattoo! I'd like to enquire about your home service — could you share availability and requirements?",
    ),
  whatsappEvents:
    "https://wa.me/919315804922?text=" +
    encodeURIComponent(
      "Hi Sid Ink Tattoo! I'd like to book you for an event. Here are my event details:",
    ),
  instagram: "https://www.instagram.com/sidinktattoo/",
  url: "https://sidinktattooz.com",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Sid Ink Tattoo, Shop No. 135, A-Export Line, Sarojini Nagar Market, Sarojini Nagar, New Delhi, 110023",
    ),
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Sid Ink Tattoo, Shop No. 135, A-Export Line, Sarojini Nagar Market, New Delhi 110023",
    ) +
    "&output=embed",
  reviewsHref: "https://www.google.com/search?q=Sid+Ink+Tattoo+Sarojini+Nagar+reviews",
};

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/tattoo-styles", label: "Tattoo Styles" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/piercing", label: "Piercing" },
  { to: "/aftercare", label: "Aftercare" },
  { to: "/contact", label: "Contact" },
] as const;