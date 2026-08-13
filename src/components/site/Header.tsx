import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/mission", label: "Mission & Values" },
  { to: "/sports", label: "Sports" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Dream Mission Sports Academy" width={48} height={48} className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-lg uppercase tracking-wide text-ink">Dream Mission</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-flame">Sports Academy</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-flame"
              activeProps={{ className: "text-flame" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-flame hidden lg:inline-flex hover:[--tw-translate-y:-2px]">
          Join Academy
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col gap-1 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-wide text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-flame bg-secondary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-flame mt-2">
              Join Academy
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
