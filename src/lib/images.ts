import studioHero from "@/assets/real/studio-hero.webp.asset.json";
import studioInterior from "@/assets/real/studio-interior.webp.asset.json";
import studioInteriorSq from "@/assets/real/studio-interior-sq.webp.asset.json";
import studioEntrance from "@/assets/real/studio-entrance.webp.asset.json";
import studioSignage from "@/assets/real/studio-signage.webp.asset.json";
import piercingEar from "@/assets/real/piercing-ear.webp.asset.json";
import piercingEarSq from "@/assets/real/piercing-ear-sq.webp.asset.json";
import tattooFairies from "@/assets/real/tattoo-fairies.webp.asset.json";
import tattooFairiesSq from "@/assets/real/tattoo-fairies-sq.webp.asset.json";
import tattooArabic from "@/assets/real/tattoo-arabic.webp.asset.json";
import tattooArabicSq from "@/assets/real/tattoo-arabic-sq.webp.asset.json";
import tattooScript from "@/assets/real/tattoo-script.webp.asset.json";
import tattooScriptSq from "@/assets/real/tattoo-script-sq.webp.asset.json";

export type SiteImage = { src: string; width: number; height: number; alt: string };

export const IMG = {
  studioHero: {
    src: studioHero.url,
    width: 1600,
    height: 900,
    alt: "Inside Sid Ink Tattoo studio in Sarojini Nagar Market, New Delhi, with hand-painted murals and clients waiting in the lounge area",
  },
  studioInterior: {
    src: studioInterior.url,
    width: 1500,
    height: 999,
    alt: "Tattoo and piercing studio interior at Sid Ink Tattoo, Sarojini Nagar, New Delhi",
  },
  studioInteriorSq: {
    src: studioInteriorSq.url,
    width: 1100,
    height: 1100,
    alt: "Mural wall and seating area inside Sid Ink Tattoo, Sarojini Nagar Market Delhi",
  },
  studioEntrance: {
    src: studioEntrance.url,
    width: 900,
    height: 1200,
    alt: "Staircase entrance to Sid Ink Tattoo signposted for tattoo, nail art and body piercing in Sarojini Nagar Market",
  },
  studioSignage: {
    src: studioSignage.url,
    width: 1400,
    height: 1050,
    alt: "Lit tattoo signage above the entrance stairs at Sid Ink Tattoo, Sarojini Nagar, New Delhi",
  },
  piercingEar: {
    src: piercingEar.url,
    width: 652,
    height: 870,
    alt: "Multiple ear piercings with fine jewellery done at Sid Ink Tattoo, Sarojini Nagar Delhi",
  },
  piercingEarSq: {
    src: piercingEarSq.url,
    width: 736,
    height: 736,
    alt: "Close-up of a professional ear piercing at Sid Ink Tattoo piercing studio in Sarojini Nagar",
  },
  tattooFairies: {
    src: tattooFairies.url,
    width: 1097,
    height: 1463,
    alt: "Fine line black ink fairy tattoo on the shoulder blade by Sid Ink Tattoo in Sarojini Nagar, New Delhi",
  },
  tattooFairiesSq: {
    src: tattooFairiesSq.url,
    width: 1000,
    height: 1000,
    alt: "Detail of a fine line fairy tattoo with black and grey shading by Sid Ink Tattoo Delhi",
  },
  tattooArabic: {
    src: tattooArabic.url,
    width: 1097,
    height: 1463,
    alt: "Black ink Arabic script tattoo along the ribs, tattooed at Sid Ink Tattoo Sarojini Nagar",
  },
  tattooArabicSq: {
    src: tattooArabicSq.url,
    width: 1000,
    height: 1000,
    alt: "Close-up of an Arabic lettering rib tattoo by a tattoo artist at Sid Ink Tattoo, New Delhi",
  },
  tattooScript: {
    src: tattooScript.url,
    width: 1097,
    height: 1463,
    alt: "Custom script lettering tattoo reading Miraculous on the lower back, done at Sid Ink Tattoo Delhi",
  },
  tattooScriptSq: {
    src: tattooScriptSq.url,
    width: 1000,
    height: 1000,
    alt: "Handwritten style black ink lettering tattoo by Sid Ink Tattoo in Sarojini Nagar Market",
  },
} satisfies Record<string, SiteImage>;
