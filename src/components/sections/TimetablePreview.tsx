import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BookTrialButton } from "@/components/site/BookTrialButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TimetablePreview() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Timetable"
            title="Local classes, week to week"
            description="Three sessions across Chingford and Enfield. Pick a day, turn up, train."
          />
          <Button href="/timetable" variant="secondary">
            View full timetable
          </Button>
        </div>

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-white/[0.03] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.75)]">
            <ul className="divide-y divide-[color:var(--border-soft)]">
              {site.timetable.sessions.map((s) => (
                <li key={`${s.day}-${s.time}`}>
                  <Link
                    href="/timetable"
                    className="group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-white/[0.04] sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-7 sm:py-6"
                  >
                    <div className="flex shrink-0 items-baseline gap-4 sm:min-w-[10rem]">
                      <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)] sm:text-xs sm:tracking-[0.26em]">
                        {s.day}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-2xl">
                      {s.time}
                    </div>
                    <div className="min-w-0 flex-1 text-right sm:max-w-md">
                      <div className="text-sm text-[color:var(--text-body)]">{s.venue}</div>
                      <div className="mt-0.5 text-sm text-[color:var(--text-tertiary)]">{s.area}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-12">
          <BookTrialButton size="lg" />
        </div>
      </div>
    </section>
  );
}
