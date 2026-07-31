import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Users, Target, Zap } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-athletes.jpg";
import coaching from "@/assets/coaching.jpg";
import equipment from "@/assets/equipment.jpg";
import events from "@/assets/events.jpg";
import fitness from "@/assets/fitness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Mission Sports Academy — Dreams to Victory" },
      { name: "description", content: "Premier sports academy in Karnataka since 2021. Coaching, events, equipment, fitness & yoga, counselling and more. Dream. Goal. Achievement." },
      { property: "og:title", content: "Dream Mission Sports Academy — Dreams to Victory" },
      { property: "og:description", content: "Premier sports academy in Karnataka since 2021. Coaching, events, equipment, fitness & yoga, counselling and more. Dream. Goal. Achievement." },
    ],
  }),
  component: Home,
});

const stats = [
  { v: "5+", l: "Years of Excellence" },
  { v: "9", l: "Programs Offered" },
  { v: "500+", l: "Athletes Trained" },
  { v: "50+", l: "Events Organized" },
];

const highlights = [
  { icon: Trophy, title: "Expert Coaching", text: "Personalized training plans from experienced coaches building champions of every level." },
  { icon: Users, title: "Vibrant Community", text: "A team-spirited home for sportspersons — friendly, inclusive, and built on individual pride." },
  { icon: Target, title: "Goal-Driven", text: "From grassroots dreams to professional podiums — clear pathways for every milestone." },
  { icon: Zap, title: "Event Powerhouse", text: "Seamless tournaments and competitions, planned and executed end-to-end with safety first." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={hero}
          alt="Young athletes training under stadium lights"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-x relative grid min-h-[88vh] items-center py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-block border-l-4 border-flame pl-3 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              Established 2021 · Dream Mission Sports Academy
            </p>
            <h1 className="font-display text-5xl uppercase leading-[0.9] md:text-7xl lg:text-[5.5rem]">
              Dreams <span className="text-flame">to</span> Victory
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
              Dream. Goal. Achievement. We empower every sportsperson to perform at their highest level — on and off the field.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-flame">
                Join the Academy <ArrowRight size={16} />
              </Link>
              <Link to="/sports" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:border-flame hover:text-flame">
                Explore Sports
              </Link>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div className="relative border-t border-white/10 bg-black/30 backdrop-blur">
          <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-4xl text-flame md:text-5xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Who We Are</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              A home for India's next generation of <span className="text-flame">champions</span>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded by Manjunatha G S in 2021, Dream Mission Sports Academy is committed to advancing sports research and education — inspiring current and future generations to drive positive social change.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We deliver the highest quality of service with friendliness, individual pride, and team spirit, empowering every participant to achieve their best on and off the field.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-ink">About Us</Link>
              <Link to="/mission" className="btn-outline-ink">Our Mission & Values</Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-flame/10" />
            <img src={coaching} alt="Coach mentoring young athletes" width={1280} height={960} loading="lazy" className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-[var(--shadow-ink)]" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Why Dream Mission</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Built for Performance</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-flame hover:shadow-[var(--shadow-flame)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-flame/10 text-flame transition-colors group-hover:bg-flame group-hover:text-flame-foreground">
                  <h.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl uppercase">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS PREVIEW */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">What We Do</p>
              <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Power Your Game</h2>
            </div>
            <Link to="/sports" className="btn-outline-ink">View All Programs <ArrowRight size={16} /></Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: coaching, tag: "Coaching", title: "Sports Coaching", text: "Personalized programs guiding every sportsperson to greatness." },
              { img: equipment, tag: "Gear", title: "Sports Equipment", text: "Premium, tested gear engineered to elevate performance." },
              { img: events, tag: "Events", title: "Event Organizing", text: "Turning competitions into celebrations — from local to large-scale." },
              { img: fitness, tag: "Wellness", title: "Fitness & Yoga", text: "Balance your body, empower your mind with expert-led sessions." },
              { img: hero, tag: "Sportswear", title: "Sportswear", text: "Comfort meets performance with stylish, durable apparel." },
              { img: equipment, tag: "Careers", title: "Talent Advisors", text: "Empowering coaches and educators with meaningful careers." },
            ].map((c) => (
              <article key={c.title} className="group overflow-hidden rounded-xl border border-border bg-card">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-flame px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-flame-foreground">{c.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl uppercase">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(50% 100% at 50% 50%, oklch(0.7 0.2 40 / 0.55), transparent)" }} />
        <div className="container-x relative text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Ready to Begin?</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl uppercase leading-tight md:text-6xl">
            Inspiring every sportsperson to <span className="text-flame">achieve more</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/75">
            Take the first step toward your victory. Talk to our coaches today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-flame">Start Your Journey <ArrowRight size={16} /></Link>
            <a href="tel:+919513996935" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-flame hover:text-flame">
              Call +91 95139 96935
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
