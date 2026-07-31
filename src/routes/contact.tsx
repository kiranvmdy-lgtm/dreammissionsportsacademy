import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dream Mission Sports Academy" },
      { name: "description", content: "Get in touch with Dream Mission Sports Academy. Call +91 95139 96935 or email mandyamanju@gmail.com to join our programs." },
      { property: "og:title", content: "Contact — Dream Mission Sports Academy" },
      { property: "og:description", content: "Talk to our coaches. Start your journey from dreams to victory." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const subject = encodeURIComponent(`Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:mandyamanju@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast.success("Opening your email app to send the enquiry.");
      setSending(false);
      form.reset();
    }, 400);
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Your Victory."
        subtitle="Tell us about your goals — we'll match you with the right program and coach."
      />

      <section className="bg-background py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-ink)]">
            <h2 className="font-display text-3xl uppercase">Send a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one business day.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground/80">Interested In</label>
                <select name="interest" required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-flame focus:outline-none">
                  <option>Sports Coaching</option>
                  <option>Sports Equipment</option>
                  <option>Sportswear</option>
                  <option>Event Organizing</option>
                  <option>Fitness & Yoga</option>
                  <option>Health & Nutrition</option>
                  <option>Seminars & Workshops</option>
                  <option>Sports Counselling</option>
                  <option>Talent Advisors Careers</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-foreground/80">Message</label>
                <textarea name="message" rows={5} required className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-flame focus:outline-none" />
              </div>
            </div>

            <button type="submit" disabled={sending} className="btn-flame mt-8 w-full sm:w-auto">
              {sending ? "Sending..." : (<>Send Message <Send size={16} /></>)}
            </button>
          </form>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} title="Call" lines={["+91 95139 96935", "Mon – Sat, 7am – 8pm"]} href="tel:+919513996935" />
            <InfoCard icon={Mail} title="Email" lines={["mandyamanju@gmail.com"]} href="mailto:mandyamanju@gmail.com" />
            <InfoCard icon={MapPin} title="Location" lines={["Karnataka, India", "Dream Mission Sports Academy"]} />

            <div className="rounded-xl border border-border bg-ink p-6 text-primary-foreground">
              <h3 className="font-display text-lg uppercase text-flame">Follow Us</h3>
              <p className="mt-1 text-sm text-white/70">Daily inspiration, results and updates.</p>
              <div className="mt-4 flex gap-3">
                <Social icon={Facebook} href="https://facebook.com" label="Facebook" />
                <Social icon={Instagram} href="https://instagram.com" label="Instagram" />
                <Social icon={Youtube} href="https://youtube.com" label="YouTube" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-bold uppercase tracking-wider text-foreground/80">{label}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:border-flame focus:outline-none" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: { icon: typeof Phone; title: string; lines: string[]; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="block rounded-xl border border-border bg-card p-6 transition-colors hover:border-flame">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flame/10 text-flame"><Icon size={20} /></div>
        <div>
          <h3 className="font-display text-lg uppercase">{title}</h3>
          {lines.map((l) => <p key={l} className="text-sm text-muted-foreground">{l}</p>)}
        </div>
      </div>
    </Wrap>
  );
}

function Social({ icon: Icon, href, label }: { icon: typeof Phone; href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-flame hover:border-flame">
      <Icon size={18} />
    </a>
  );
}
