import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Users, Target, Zap, Phone, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import hero from "@/assets/hero-athletes.jpg";
import coaching from "@/assets/coaching.jpg";
import equipment from "@/assets/equipment.jpg";
import events from "@/assets/events.jpg";
import fitness from "@/assets/fitness.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome to Dream Mission Sports Academy — Dreams to Victory" },
      { name: "description", content: "Welcome to Dream Mission Sports Academy in Karnataka since 2021. Explore all sports, coaching, events, equipment, fitness & yoga, counselling and more." },
      { property: "og:title", content: "Welcome to Dream Mission Sports Academy — Dreams to Victory" },
      { property: "og:description", content: "Explore all sports pictures, coaching, events, equipment, fitness & yoga, counselling and more." },
    ],
  }),
  component: Home,
});

const ALL_SPORTS = [
  {
    name: "Cricket",
    category: "Outdoor Team",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    desc: "Net practice, pitch training, match tactics and professional coaching for aspiring cricketers.",
  },
  {
    name: "Football",
    category: "Outdoor Team",
    img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    desc: "Tactical drills, agility work, team strategy and grass-root youth football development.",
  },
  {
    name: "Badminton",
    category: "Indoor & Racquet",
    img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    desc: "Court movement, smash technique, footwork precision and tournament preparation.",
  },
  {
    name: "Athletics & Track",
    category: "Athletics",
    img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    desc: "Sprints, long jump, high jump, shot put, relay and endurance running for all age groups.",
  },
  {
    name: "Yoga & Fitness",
    category: "Wellness",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    desc: "Mindfulness, flexibility, posture alignment and high-energy fitness training sessions.",
  },
  {
    name: "Volleyball & Kabaddi",
    category: "Outdoor Team",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    desc: "Power spiking, defensive techniques, raiding strategy and competitive team tournaments.",
  },
  {
    name: "Hockey",
    category: "Outdoor Team",
    img: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=800&q=80",
    desc: "Dribbling skills, field positioning, team coordination and tournament match practice.",
  },
  {
    name: "Table Tennis & Chess",
    category: "Indoor & Racquet",
    img: "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&w=800&q=80",
    desc: "Precision stroke control, reflex sharpening and strategic mind-game development.",
  },
];

const PROGRAM_PICTURES = [
  { img: coaching, title: "Sports Coaching", desc: "Personalized training plans guiding sportspersons to greatness.", tag: "Coaching" },
  { img: equipment, title: "Sports Equipment", desc: "Durable, high-grade sports gear engineered for peak performance.", tag: "Equipment" },
  { img: events, title: "Events & Tournaments", desc: "End-to-end event planning, organizing, and safe execution.", tag: "Events" },
  { img: fitness, title: "Fitness & Yoga", desc: "Balance body and empower mind with expert-led workouts.", tag: "Wellness" },
  { img: hero, title: "Sportswear & Apparel", desc: "Comfortable, stylish performance wear designed for movement.", tag: "Apparel" },
  { img: equipment, title: "Talent & Career Guidance", desc: "Connecting coaches and instructors with top sports institutions.", tag: "Careers" },
];

const stats = [
  { v: "5+", l: "Years of Excellence" },
  { v: "9", l: "Core Programs" },
  { v: "500+", l: "Athletes Trained" },
  { v: "50+", l: "Events Organized" },
];

function Home() {
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const categories = ["All", "Outdoor Team", "Athletics", "Indoor & Racquet", "Wellness"];

  const filteredSports = selectedCat === "All"
    ? ALL_SPORTS
    : ALL_SPORTS.filter((s) => s.category === selectedCat);

  return (
    <SiteLayout>
      {/* WELCOME HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={hero}
          alt="Welcome to Dream Mission Sports Academy athletes"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        
        <div className="container-x relative grid min-h-[90vh] items-center py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-flame/20 border border-flame/40 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-flame backdrop-blur">
              <Sparkles size={14} /> Welcome to Dream Mission Sports Academy
            </div>

            <h1 className="mt-6 font-display text-5xl uppercase leading-[0.95] md:text-7xl lg:text-[5.5rem]">
              Dreams <span className="text-flame">to</span> Victory
            </h1>

            <p className="mt-4 font-display text-lg uppercase tracking-[0.2em] text-flame/90 md:text-xl">
              Dream. Goal. Achievement.
            </p>

            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg leading-relaxed">
              Established in 2021 by Manjunatha G S. We empower every sportsperson to perform at their highest level with world-class coaching, equipment, events, and sports education.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#all-sports-pictures" className="btn-flame">
                Explore All Sports Pictures <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:border-flame hover:text-flame transition-colors">
                Join the Academy
              </Link>
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="relative border-t border-white/10 bg-black/40 backdrop-blur">
          <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <div className="font-display text-4xl text-flame md:text-5xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SPORTS PICTURES & GALLERY SHOWCASE */}
      <section id="all-sports-pictures" className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Photo Gallery & Disciplines</span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              All Sports <span className="text-flame">& Games Pictures</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Explore all sports offered at Dream Mission Sports Academy. We train athletes across outdoor, indoor, track, and wellness disciplines.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedCat === cat
                      ? "bg-flame text-flame-foreground shadow-md"
                      : "bg-secondary text-secondary-foreground hover:bg-flame/10 hover:text-flame"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Sports Pictures Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredSports.map((sport) => (
              <div key={sport.name} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:-translate-y-1 hover:border-flame hover:shadow-[var(--shadow-flame)] transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={sport.img}
                    alt={`${sport.name} at Dream Mission Sports Academy`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-flame border border-flame/30">
                    {sport.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl uppercase text-foreground group-hover:text-flame transition-colors">
                    {sport.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {sport.desc}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-flame hover:underline"
                  >
                    Enquire for {sport.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME ABOUT SECTION */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Welcome Message</span>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              Building Champions <span className="text-flame">On & Off the Field</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Welcome to Dream Mission Sports Academy! Founded by <strong>Manjunatha G S</strong> in 2021, our institute is dedicated to creating successful and memorable sports experiences through research, education, and comprehensive event organization.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Comprehensive coaching tailored for all skill levels",
                "High quality, tested sports equipment and performance sportswear",
                "Safe, transparent and well-coordinated tournaments & competitions",
                "Mindfulness, Yoga, Health & Nutrition classes for overall growth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90 font-medium">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-flame" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/about" className="btn-ink">About Our Academy</Link>
              <Link to="/sports" className="btn-outline-ink">All 9 Programs</Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-flame/15 blur-sm" />
            <div className="relative overflow-hidden rounded-xl border border-border shadow-[var(--shadow-ink)]">
              <img src={coaching} alt="Coach and athletes welcome" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <div className="font-display text-xl uppercase">Dream Mission Sports Academy</div>
                  <div className="text-xs uppercase tracking-widest text-flame">Established 2021 · Karnataka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PROGRAMS PICTURES GRID */}
      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">What We Offer</span>
              <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Our Core Programs</h2>
            </div>
            <Link to="/sports" className="btn-outline-ink">View All Details <ArrowRight size={16} /></Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAM_PICTURES.map((c) => (
              <article key={c.title} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:border-flame hover:shadow-md transition-all">
                <div className="relative aspect-[5/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-flame px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-flame-foreground">{c.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl uppercase">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME CALL TO ACTION */}
      <section className="relative overflow-hidden bg-ink py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(50% 100% at 50% 50%, oklch(0.7 0.2 40 / 0.55), transparent)" }} />
        <div className="container-x relative text-center">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Welcome to Join Us</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl uppercase leading-tight md:text-6xl">
            Inspiring every sportsperson to <span className="text-flame">achieve more</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/80 text-base md:text-lg">
            Take your first step from dreams to victory. Contact our sports coaches today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-flame">Start Your Journey <ArrowRight size={16} /></Link>
            <a href="tel:+919513996935" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:border-flame hover:text-flame transition-colors">
              <Phone size={16} /> Call +91 95139 96935
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
