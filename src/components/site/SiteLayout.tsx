import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-primary-foreground">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(60% 80% at 80% 20%, oklch(0.7 0.2 40 / 0.6), transparent)" }} />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-flame">{eyebrow}</p>}
        <h1 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
