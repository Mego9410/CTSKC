import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { LeadForm } from "@/components/forms/LeadForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Start your free trial",
  description: "Start your free trial at CTSKC. Traditional Shotokan in Chingford — structured, welcoming, beginner-friendly.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <div>
      <PageHero
        eyebrow="Book"
        title={site.ctas.primary}
        description="A clear first session — structure, coaching, and no pressure."
        primaryCta={{ href: "#form", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7" id="form">
            <LeadForm kind="trial" title="Book trial request" ctaLabel={site.ctas.primary} />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-6">
              <SectionHeading
                eyebrow="What to expect"
                title="Simple, supportive, structured"
                description="You’ll get a friendly welcome, a calm intro, and clear coaching."
              />
              <div className="mt-8 grid gap-3">
                {site.hero.bullets.map((b) => (
                  <div key={b} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <div className="text-sm text-[color:var(--foreground)]">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

