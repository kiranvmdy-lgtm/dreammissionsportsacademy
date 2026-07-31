import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Dumbbell, Shirt, Megaphone, Trophy, HeartPulse, Apple, BookOpen, Brain, Briefcase, ArrowRight } from "lucide-react";
import equipment from "@/assets/equipment.jpg";
import coaching from "@/assets/coaching.jpg";
import events from "@/assets/events.jpg";
import fitness from "@/assets/fitness.jpg";
import hero from "@/assets/hero-athletes.jpg";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports & Programs — Dream Mission Sports Academy" },
      { name: "description", content: "Coaching, equipment, sportswear, event organizing, fitness & yoga, nutrition, seminars, counselling and career advisory — nine programs under one academy." },
      { property: "og:title", content: "Sports & Programs — Dream Mission Sports Academy" },
      { property: "og:description", content: "Nine specialized programs designed to power your game and elevate your performance." },
    ],
  }),
  component: Sports,
});

const programs = [
  {
    icon: Dumbbell, tag: "Equipment", title: "Sports Equipment", slogan: "Power Your Game. Elevate Your Performance.",
    text: "Premium, tested gear crafted to support sportspersons of every level. Durable, innovative and built for reliability, comfort and peak performance — every training session, every competition.",
    img: equipment,
  },
  {
    icon: Shirt, tag: "Sportswear", title: "Sportswear", slogan: "Comfort Meets Performance.",
    text: "Cutting-edge fabrics and innovative designs that move with you. Stylish, durable and performance-driven apparel tailored for every age, sport and fitness level — crafted for champions.",
    img: hero,
  },
  {
    icon: Megaphone, tag: "Coaching", title: "Sports Coaching", slogan: "Guiding Every Sportsperson to Greatness.",
    text: "Personalized training plans from experienced coaches who build champions. Sharpen skills, master strategy, develop talent, and build the discipline and mindset needed for success.",
    img: coaching,
  },
  {
    icon: Trophy, tag: "Events", title: "Sports & Games Events Organizing", slogan: "Turning Competitions into Celebrations.",
    text: "From local tournaments to large-scale competitions, we handle every detail — ensuring exciting, fair and memorable experiences for athletes, organizers and fans alike.",
    img: events,
  },
  {
    icon: HeartPulse, tag: "Wellness", title: "Fitness & Yoga", slogan: "Balance Your Body. Empower Your Mind.",
    text: "Expert-led sessions to build endurance, increase flexibility and cultivate mindfulness. Workouts and yoga practices that energize the body and calm the mind — for every skill level.",
    img: fitness,
  },
  {
    icon: Apple, tag: "Education", title: "Health & Nutrition Classes", slogan: "Fuel Your Body. Transform Your Life.",
    text: "Interactive, expert-led sessions with practical knowledge and actionable strategies to nourish your body, boost energy and build sustainable healthy habits.",
    img: fitness,
  },
  {
    icon: BookOpen, tag: "Learning", title: "Seminars & Workshops", slogan: "Learn. Write. Inspire.",
    text: "Specialized seminars on sports articles and publications. Practical skills, research insights and storytelling techniques to elevate your sports writing and media presence.",
    img: coaching,
  },
  {
    icon: Brain, tag: "Counselling", title: "Sports Counselling", slogan: "Mental Strength. Peak Performance.",
    text: "Personalized counselling to support athletes' mental well-being. Manage stress, overcome challenges, and build resilience both on and off the field.",
    img: events,
  },
  {
    icon: Briefcase, tag: "Careers", title: "Sports Talent Advisors Careers", slogan: "Empowering Coaches. Inspiring Generations.",
    text: "Trusted consultancy connecting sports instructors and educators with leading institutions, academies and sports organizations. Tailored career guidance and continuous support.",
    img: equipment,
  },
];

function Sports() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Sports & Programs"
        title="Nine Programs. One Mission."
        subtitle="From equipment to elite coaching, wellness to careers — everything a sportsperson needs to grow, perform and lead."
      />

      <section className="bg-background py-20">
        <div className="container-x space-y-20">
          {programs.map((p, i) => (
            <article key={p.title} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-xl bg-flame/10" />
                <img src={p.img} alt={p.title} width={1280} height={960} loading="lazy" className="relative aspect-[5/4] w-full rounded-xl object-cover shadow-[var(--shadow-ink)]" />
                <span className="absolute left-6 top-6 z-10 rounded-full bg-flame px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-flame-foreground">
                  0{i + 1} · {p.tag}
                </span>
              </div>
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-flame">
                  <p.icon size={22} />
                </div>
                <h2 className="mt-5 font-display text-3xl uppercase leading-tight md:text-4xl">{p.title}</h2>
                <p className="mt-3 font-display text-lg italic text-flame">"{p.slogan}"</p>
                <p className="mt-5 leading-relaxed text-muted-foreground">{p.text}</p>
                <Link to="/contact" className="mt-7 inline-flex btn-outline-ink">
                  Enquire Now <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Types of Sports & Games */}
      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Types of Sports & Games</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">Find Your Field</h2>
            <p className="mt-4 text-muted-foreground">
              We coach and organize events across a wide range of disciplines — outdoor, indoor, team and individual.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { cat: "Outdoor Team", items: ["Cricket", "Football", "Hockey", "Kabaddi", "Kho-Kho", "Volleyball"] },
              { cat: "Athletics", items: ["Sprint & Track", "Long Jump", "High Jump", "Shot Put", "Marathon", "Relay"] },
              { cat: "Indoor & Racquet", items: ["Badminton", "Table Tennis", "Chess", "Carrom", "Boxing", "Wrestling"] },
              { cat: "Wellness & Mind", items: ["Yoga", "Meditation", "Aerobics", "Strength Training", "Cardio", "Pilates"] },
            ].map((g) => (
              <div key={g.cat} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-lg uppercase text-flame">{g.cat}</h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-flame" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-primary-foreground">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
          <h3 className="font-display text-3xl uppercase">Ready to power your game?</h3>
          <Link to="/contact" className="btn-flame">Talk to Our Coaches <ArrowRight size={16} /></Link>
        </div>
      </section>
    </SiteLayout>
  );
}
