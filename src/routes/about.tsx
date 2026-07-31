import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Award, Calendar, MapPin } from "lucide-react";
import coaching from "@/assets/coaching.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Dream Mission Sports Academy" },
      { name: "description", content: "Meet Manjunatha G S and the story behind Dream Mission Sports Academy — five years of inspiring sportspersons across Karnataka." },
      { property: "og:title", content: "About Us — Dream Mission Sports Academy" },
      { property: "og:description", content: "Five years of building champions. Dreams to Victory since 2021." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the Academy"
        title="Five Years of Building Champions"
        subtitle="Dream Mission Sports Academy was founded in 2021 with a single purpose — to inspire every sportsperson to achieve more, on and off the field."
      />

      <section className="bg-background py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Our Story</p>
            <h2 className="mt-3 font-display text-3xl uppercase md:text-4xl">From a dream to a movement.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded by <strong className="text-foreground">Manjunatha G S</strong> in 2021, Dream Mission Sports Academy began with a simple belief — that every young athlete deserves world-class guidance, modern facilities and a community that believes in them.
              </p>
              <p>
                Over the last five years we have grown into a complete sports ecosystem, offering coaching, equipment, sportswear, event management, fitness and yoga, health and nutrition education, counselling and career advisory — all under one roof.
              </p>
              <p>
                Our work is rooted in research, education and service. We don't just train athletes; we shape responsible, confident individuals ready to lead positive social change.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Stat icon={Calendar} label="Established" value="2021" />
              <Stat icon={Award} label="Founder" value="Manjunatha G S" />
              <Stat icon={MapPin} label="Based In" value="Karnataka" />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/mission" className="btn-flame">Our Mission & Values</Link>
              <Link to="/sports" className="btn-outline-ink">Explore Sports</Link>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl bg-flame/10" />
              <img src={coaching} alt="Coach and athletes" width={1280} height={960} loading="lazy" className="relative aspect-[4/5] w-full rounded-xl object-cover shadow-[var(--shadow-ink)]" />
            </div>
            <div className="mt-6 rounded-xl border-l-4 border-flame bg-secondary p-6">
              <p className="font-display text-xl italic leading-snug text-foreground">
                "Inspiring every sportsperson to achieve more."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Manjunatha G S, Founder</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-flame">Our Goals</p>
            <h2 className="mt-3 font-display text-4xl uppercase">Five Pillars of Purpose</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {["Research", "Education", "Unite", "Service", "Contribution"].map((g, i) => (
              <div key={g} className="rounded-xl border border-border bg-card p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg text-flame">{i + 1}</div>
                <h3 className="mt-4 font-display text-lg uppercase">{g}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Award; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <Icon size={20} className="text-flame" />
      <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-lg uppercase">{value}</p>
    </div>
  );
}
