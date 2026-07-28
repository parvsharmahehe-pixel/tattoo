export type SiteImage = { src: string; width: number; height: number; alt: string };
export const IMG = {
  studioHero: { src: "/images/studio-hero.jpeg", width: 1500, height: 999, alt: "Inside Sid Ink Tattoo studio in Sarojini Nagar Market, New Delhi, with hand-painted murals and clients waiting in the lounge area" },
  studioInterior: { src: "/images/studio-interior.jpeg", width: 1500, height: 1125, alt: "Tattoo and piercing studio interior at Sid Ink Tattoo, Sarojini Nagar, New Delhi" },
  studioInteriorSq: { src: "/images/studio-interior-sq.webp", width: 1000, height: 1000, alt: "Mural wall and seating area inside Sid Ink Tattoo, Sarojini Nagar Market Delhi" },
  studioEntrance: { src: "/images/studio-entrance.jpeg", width: 1500, height: 1125, alt: "Staircase entrance to Sid Ink Tattoo signposted for tattoo, nail art and body piercing in Sarojini Nagar Market" },
  studioSignage: { src: "/images/studio-signage.jpeg", width: 1500, height: 1125, alt: "Lit tattoo signage above the entrance stairs at Sid Ink Tattoo, Sarojini Nagar, New Delhi" },
  piercingEar: { src: "/images/piercing-ear.jpeg", width: 736, height: 981, alt: "Multiple ear piercings with fine jewellery at Sid Ink Tattoo, Sarojini Nagar Delhi" },
  piercingEarSq: { src: "/images/piercing-ear-sq.webp", width: 1000, height: 1000, alt: "Close-up of a professional ear piercing at Sid Ink Tattoo piercing studio in Sarojini Nagar" },
  tattooFairies: { src: "/images/tattoo-fairies.webp", width: 1097, height: 1463, alt: "Fine line black ink fairy tattoo on the shoulder blade by Sid Ink Tattoo in Sarojini Nagar, New Delhi" },
  tattooFairiesSq: { src: "/images/tattoo-fairies-sq.webp", width: 1000, height: 1000, alt: "Detail of a fine line fairy tattoo by Sid Ink Tattoo Delhi" },
  tattooArabic: { src: "/images/tattoo-arabic.webp", width: 1097, height: 1463, alt: "Black ink Arabic script tattoo along the ribs, tattooed at Sid Ink Tattoo Sarojini Nagar" },
  tattooArabicSq: { src: "/images/tattoo-arabic-sq.webp", width: 1000, height: 1000, alt: "Close-up of an Arabic lettering rib tattoo by Sid Ink Tattoo, New Delhi" },
  tattooScript: { src: "/images/tattoo-script.webp", width: 1097, height: 1463, alt: "Custom script lettering tattoo reading Miraculous on the lower back, done at Sid Ink Tattoo Delhi" },
  tattooScriptSq: { src: "/images/tattoo-script-sq.webp", width: 1000, height: 1000, alt: "Handwritten style black ink lettering tattoo by Sid Ink Tattoo in Sarojini Nagar Market" },
} satisfies Record<string, SiteImage>;
