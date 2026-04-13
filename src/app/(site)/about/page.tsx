import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, values, and coaching approach behind Chingford Traditional Shotokan Karate Club (established 1988).",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Traditional values. Real local coaching."
        description="A non-profit club built around calm discipline, clear progression, and beginner-friendly structure."
        primaryCta={{ href: "/contact#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
        backgroundImage={{
          src: "/images/big-mixed-group-3-t.jpg",
          alt: "Mixed group of junior and senior students at CTSKC",
        }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Club story"
              title="Established 1988 — built on consistency"
              description="We train in a disciplined, traditional style — but we teach it for modern lives: clear, grounded, and welcoming."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-[color:var(--muted)]">
              <p>
                CTSKC is a local club serving Chingford and surrounding areas. Students come to build confidence, fitness, and self-control — and stay for the structure and community.
              </p>
              <p>
                Progress is earned through repetition, patience, and good coaching. The goal is not to “survive a workout” — it’s to develop skill, control, and calm focus.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/contact#book-trial" size="lg">
                {site.ctas.primary}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[2rem] overflow-hidden bg-[color:var(--surface)] ring-1 ring-white/10">
              <div className="relative aspect-[16/11] bg-black/40">
                <Image
                  src={site.assets.aboutFeature}
                  alt={site.assets.aboutFeatureAlt}
                  fill
                  quality={92}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 50vw, 960px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Instructor
                </div>
                <div className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  {site.club.instructor.name} • {site.club.instructor.grade}
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {site.club.instructor.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Values"
            title="Discipline without intimidation"
            description="Traditional Shotokan is powerful — but training should feel safe, structured, and respectful."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Respect",
                d: "For training partners, for the dojo, and for the process. Control first, power second.",
              },
              {
                t: "Structure",
                d: "Clear fundamentals, clear progression. You always know what to work on next.",
              },
              {
                t: "Community",
                d: "A local club built on consistency — welcoming beginners and supporting long-term growth.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-3xl bg-[color:var(--surface)] p-6 ring-1 ring-white/10">
                <div className="font-[family-name:var(--font-display)] text-xl tracking-tight">{v.t}</div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Ready to try?
                </div>
                <div className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-tight sm:text-5xl">
                  Book a free trial session
                </div>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
                  A relaxed first step for beginners of all ages. We’ll confirm the best class time for you.
                </p>
              </div>
              <div className="md:col-span-4">
                <div className="grid gap-3">
                  <Button href="/contact#book-trial" size="lg" className="w-full">
                    {site.ctas.primary}
                  </Button>
                  <Button href="/timetable" size="lg" variant="secondary" className="w-full">
                    {site.ctas.secondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

