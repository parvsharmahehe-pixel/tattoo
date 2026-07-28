import { type ReactNode } from "react";
import { SiteHeader } from "./header";
import { SiteFooter } from "./footer";
import { WhatsAppFloat } from "./whatsapp-float";
import { MobileCta } from "./mobile-cta";

export function SiteLayout({
  children,
  transparentHeader = false,
}: {
  children: ReactNode;
  transparentHeader?: boolean;
}) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <SiteHeader transparentOnTop={transparentHeader} />
      <main className="pb-24 lg:pb-0">{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileCta />
    </div>
  );
}