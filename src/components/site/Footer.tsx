import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/dmsa-logo.jpeg.asset.json";
import { SOCIAL_LINKS } from "@/lib/social";
const logo = logoAsset.url;

export function Footer() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dream Mission Sports Academy" width={56} height={56} className="h-14 w-14 rounded bg-white/10 p-1" />
            <div>
              <div className="font-display text-xl uppercase">Dream Mission</div>
              <div className="text-xs uppercase tracking-[0.25em] text-flame">Sports Academy</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/70">
            Dreams to Victory — Dream. Goal. Achievement. Inspiring every sportsperson to achieve more since 2021.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-flame hover:border-flame">
              <Facebook size={18} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-flame hover:border-flame">
              <Instagram size={18} />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:bg-flame hover:border-flame">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-flame">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-flame">Home</Link></li>
            <li><Link to="/about" className="hover:text-flame">About Us</Link></li>
            <li><Link to="/mission" className="hover:text-flame">Mission & Values</Link></li>
            <li><Link to="/sports" className="hover:text-flame">Our Sports</Link></li>
            <li><Link to="/contact" className="hover:text-flame">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.2em] text-flame">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-flame" />
              <a href="tel:+919513996935" className="hover:text-flame">+91 95139 96935</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-flame" />
              <a href="mailto:mandyamanju@gmail.com" className="hover:text-flame break-all">mandyamanju@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-flame" />
              <span>Karnataka, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Dream Mission Sports Academy. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em] text-flame">Dreams to Victory</p>
        </div>
      </div>
    </footer>
  );
}
