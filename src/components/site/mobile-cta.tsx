import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { SITE } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 border-t border-border/60 bg-ink/95 backdrop-blur">
      <a
        href={SITE.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-bone/80"
      >
        <Phone className="size-4" aria-hidden /> Call
      </a>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 text-[0.7rem] uppercase tracking-[0.2em] text-bone/80 border-x border-border/60"
      >
        <MessageCircle className="size-4" aria-hidden /> WhatsApp
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-4 text-[0.7rem] uppercase tracking-[0.2em] bg-bone text-ink"
      >
        <Calendar className="size-4" aria-hidden /> Book
      </Link>
    </div>
  );
}