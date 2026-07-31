import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { BookOpen, Sparkles, Users, ShieldCheck, Rocket, Flame } from "lucide-react";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Mission & Values — Dream Mission Sports Academy" },
      { name: "description", content: "Our mission, vision and the values that guide everything we do — education, inspiration, collaboration, responsibility, empowerment and passion." },
      { property: "og:title", content: "Mission & Values — Dream Mission Sports Academy" },
      { property: "og:description", content: "Educate. Inspire. Empower. Six values that drive every initiative." },
    ],
  }),
  component: Mission,
});

const values = [
  { icon: BookOpen, title: "Educate", text: "We nurture current and future professionals across every area of sports and games, equipping them with the knowledge and skills to succeed." },
  { icon: Sparkles, title: "Inspire", text: "We champion the positive power of sports, driving social change and celebrating the sportspersons transforming their communities." },
  { icon: Users, title: "Creative Collaboration", text: "We embrace diverse perspectives and forge connections across disciplines to spark innovative solutions in sports." },
  { icon: ShieldCheck, title: "Responsibility", text: "We uphold our duty of care to sportspersons, always striving to strengthen their personal and professional lives." },
  { icon: Rocket, title: "Empowerment", text: "We stand beside sportspersons, equipping them with the tools, confidence and opportunities to make a positive impact." },
  { icon: Flame, title: "Passion", text: "We pursue every initiative with the same dedication, intensity and spirit that sportspersons bring to competition." },
];

function Mission() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mission & Values"
        title="Educate. Inspire. Empower."
        subtitle="Six values guide every decision we make — and every sportsperson we serve."
      />

      {/* Mission */}
      <section className="bg-background py-20">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Our Mission</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight">Meaningful sports experiences for every generation.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed lg:col-span-2">
            <p>
              We aim to create meaningful sports experiences through research, education and well-organized events that inspire current and future generations.
            </p>
            <p>
              With comprehensive planning, organizing and execution of sports events and activities, we deliver the highest quality of service marked by friendliness, individual pride and team spirit.
            </p>
            <p>
              By providing the best in sports, we empower people to perform at their highest level, inspire every participant to achieve their best — on and off the field — and ensure safe, well-coordinated events that drive positive social change.
            </p>
          </div>
        </div>
      </section>

      {/* Vision band */}
      <section className="relative overflow-hidden bg-ink py-20 text-primary-foreground">
        <div className="absolute inset-0 opacity-25" style={{ background: "radial-gradient(50% 80% at 20% 50%, oklch(0.7 0.2 40 / 0.7), transparent)" }} />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Our Vision</p>
            <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
              To inspire current and future generations through <span className="text-flame">sports</span>.
            </h2>
          </div>
          <p className="text-lg text-white/80">
            Fostering personal growth, community spirit and positive social change — one sportsperson, one team, one event at a time.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="bg-background py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Our Values</p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground">
              A commitment to education, innovation, social change, athlete well-being, collaboration, responsibility, open dialogue, empowerment and passion.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-flame hover:shadow-[var(--shadow-flame)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-flame">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl uppercase">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container-x flex flex-col items-center justify-between gap-6 rounded-2xl bg-ink p-10 text-primary-foreground md:flex-row">
          <div>
            <h3 className="font-display text-2xl uppercase md:text-3xl">Live these values with us.</h3>
            <p className="mt-2 text-white/70">Join an academy where purpose drives performance.</p>
          </div>
          <Link to="/contact" className="btn-flame whitespace-nowrap">Get In Touch</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
