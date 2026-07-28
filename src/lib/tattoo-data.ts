import { IMG } from "@/lib/images";

export type TattooStyle = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  category: string;
};

export const TATTOO_STYLES: TattooStyle[] = [
  {
    slug: "fine-line",
    title: "Fine Line",
    short: "Delicate, precise linework in black ink.",
    long: "Ultra-thin linework for delicate, illustrative designs — florals, figures and detailed illustrations with soft black and grey shading. A favourite among clients visiting our tattoo studio in Sarojini Nagar.",
    image: IMG.tattooFairies.src,
    imageAlt: IMG.tattooFairies.alt,
    width: IMG.tattooFairies.width,
    height: IMG.tattooFairies.height,
    category: "Fine Line",
  },
  {
    slug: "lettering",
    title: "Lettering & Script",
    short: "Names, quotes, dates and custom typography.",
    long: "Custom script and lettering tattoos — single words, names, dates and quotes, drawn to flow with the placement. From delicate handwriting to bolder statement script.",
    image: IMG.tattooScript.src,
    imageAlt: IMG.tattooScript.alt,
    width: IMG.tattooScript.width,
    height: IMG.tattooScript.height,
    category: "Lettering",
  },
  {
    slug: "black-ink",
    title: "Black Ink",
    short: "Clean black ink work in any language or script.",
    long: "Solid black ink tattoos, including Arabic, Hindi, Sanskrit and English scripts. Our most requested option and the starting point for most designs at the studio.",
    image: IMG.tattooArabic.src,
    imageAlt: IMG.tattooArabic.alt,
    width: IMG.tattooArabic.width,
    height: IMG.tattooArabic.height,
    category: "Black Ink",
  },
  {
    slug: "piercing",
    title: "Piercing",
    short: "Ear, nose, septum, eyebrow, lip and navel.",
    long: "Professional body piercing done at the studio alongside our tattoo work — lobes, helix, tragus, nostril, septum, eyebrow, lip and navel piercings in Sarojini Nagar.",
    image: IMG.piercingEar.src,
    imageAlt: IMG.piercingEar.alt,
    width: IMG.piercingEar.width,
    height: IMG.piercingEar.height,
    category: "Piercing",
  },
];

export const PORTFOLIO_CATEGORIES = ["All", "Fine Line", "Lettering", "Black Ink", "Piercing", "Studio"] as const;

export const PORTFOLIO_ITEMS = [
  { ...IMG.tattooFairies, category: "Fine Line", tall: true },
  { ...IMG.tattooScript, category: "Lettering", tall: true },
  { ...IMG.tattooArabic, category: "Black Ink", tall: true },
  { ...IMG.piercingEar, category: "Piercing", tall: true },
  { ...IMG.tattooFairiesSq, category: "Fine Line", tall: false },
  { ...IMG.tattooScriptSq, category: "Lettering", tall: false },
  { ...IMG.tattooArabicSq, category: "Black Ink", tall: false },
  { ...IMG.piercingEarSq, category: "Piercing", tall: false },
  { ...IMG.studioInteriorSq, category: "Studio", tall: false },
  { ...IMG.studioEntrance, category: "Studio", tall: true },
  { ...IMG.studioSignage, category: "Studio", tall: false },
  { ...IMG.studioInterior, category: "Studio", tall: false },
];

export type PriceItem = { name: string; price: string; note?: string };

export const TATTOO_PRICING: PriceItem[] = [
  { name: "Black Colour Tattoo", price: "Starting at ₹300" },
  { name: "Colour Tattoo", price: "Starting at ₹500" },
  { name: "3D Tattoo", price: "Starting at ₹800" },
];

export const TEMPORARY_PRICING: PriceItem[] = [
  { name: "Temporary Tattoo — 1 Week", price: "Starting at ₹100" },
  { name: "Temporary Tattoo — 15 Days", price: "Starting at ₹200" },
  { name: "Temporary Tattoo — 1 Month", price: "Starting at ₹250" },
];

export const BEAUTY_PRICING: PriceItem[] = [
  { name: "Eyelashes", price: "₹1,499" },
  { name: "Nail Extensions", price: "₹799" },
];

export const PIERCING_PRICING: PriceItem[] = [
  { name: "Ear, Nose, Septum, Eyebrow, Lip & Navel Piercing", price: "Contact for pricing" },
];
