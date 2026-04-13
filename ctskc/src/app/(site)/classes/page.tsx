import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BookTrialButton } from "@/components/site/BookTrialButton";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Kids, teens and adult Shotokan karate classes in Chingford. Beginner-friendly, structured, calm coaching.",
  alternates: { canonical: "/classes" },
};

export default function ClassesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Classes"
        title="Classes for kids, teens and adults"
        description="Traditional Shotokan taught with modern clarity. Beginners welcome — we’ll guide you from day one."
        primaryCta={{ href: "/contact#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Options"
            title="Choose your starting point"
            description="You don’t need to be confident before you start — training builds it."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.classes.map((c) => (
              <div key={c.title} className="rounded-3xl bg-[color:var(--surface)] p-6 ring-1 ring-white/10">
                <div className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
                  {c.title}
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">{c.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-[color:var(--muted)] ring-1 ring-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="/contact#book-trial" size="lg">
              {site.ctas.primary}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Beginner reassurance"
              title="You’ll be coached closely — not thrown in"
              description="The first session is simple and supportive. You can take breaks, ask questions, and learn at your pace."
            />
            <div className="mt-8 grid gap-3">
              {[
                "No experience needed — fundamentals first.",
                "Control and safety are taught from day one.",
                "You’ll always know what to do next.",
              ].map((x) => (
                <div key={x} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <div className="text-sm text-[color:var(--foreground)]">{x}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-6">
              <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                What to bring
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                <li>Comfortable sports clothes</li>
                <li>Water bottle</li>
                <li>A willingness to start simple</li>
              </ul>
              <div className="mt-6 grid gap-3">
                <Button href="/contact#book-trial" className="w-full">
                  {site.ctas.primary}
                </Button>
                <Button href="/timetable" variant="secondary" className="w-full">
                  {site.ctas.secondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-tight sm:text-5xl">
                  {site.ctas.primary}
                </div>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
                  Try one session. Feel the atmosphere. Decide with confidence.
                </p>
              </div>
              <div className="md:col-span-4">
                <BookTrialButton size="lg" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

