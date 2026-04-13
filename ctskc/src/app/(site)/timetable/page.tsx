import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BookTrialButton } from "@/components/site/BookTrialButton";
import { TimetableClient } from "@/components/sections/TimetableClient";

export const metadata: Metadata = {
  title: "Timetable",
  description:
    "Class times for CTSKC across Chingford and Enfield. View sessions by day and book a free trial.",
  alternates: { canonical: "/timetable" },
};

export default function TimetablePage() {
  return (
    <div>
      <PageHero
        eyebrow="Timetable"
        title="Class times"
        description="Pick a day. Turn up. Train. If you’re unsure, message us and we’ll recommend the best first session."
        primaryCta={{ href: "/contact#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/contact", label: "Message the club" }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Sessions"
            title="Three weekly sessions"
            description="Filter by day. Mobile cards + desktop table for fast scanning."
          />
          <div className="mt-10">
            <TimetableClient />
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
              eyebrow="Location"
              title="Local venues"
              description="We currently train across Chingford and Enfield. For exact directions and entry details, message the club."
            />
            <div className="mt-8 grid gap-3">
              {site.timetable.sessions.map((s) => (
                <div key={s.venue} className="rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10">
                  <div className="text-sm text-[color:var(--foreground)]">{s.venue}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{s.area}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-6">
              <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                Map
              </div>
              <div className="mt-4 aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-[color:var(--accent)]/10 ring-1 ring-white/10" />
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                Map embed placeholder — we’ll swap this for the correct Google Maps embeds per venue.
              </p>
              <div className="mt-6 grid gap-3">
                <Button href="/contact#book-trial" className="w-full">
                  {site.ctas.primary}
                </Button>
                <Button href="/contact" variant="secondary" className="w-full">
                  Message the club
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
                  Ready for a first session?
                </div>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
                  Start your free trial — we’ll confirm the best class time for your first visit.
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

