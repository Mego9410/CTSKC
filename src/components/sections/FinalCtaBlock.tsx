import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { BookTrialButton } from "@/components/site/BookTrialButton";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCtaBlock() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color:var(--background)] via-[color:var(--surface)]/50 to-[color:var(--background)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-5">
        <Reveal>
          <p className="text-xs tracking-[0.28em] uppercase text-[color:var(--text-tertiary)]">Next step</p>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
            Train once. Feel the difference.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[color:var(--text-body)] sm:text-lg sm:leading-8">
            A clear first session, respectful coaching, and a club that values discipline and progression.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:items-center sm:gap-4">
            <BookTrialButton size="lg" className="w-full sm:flex-1" />
            <Button href="/timetable" variant="secondary" size="lg" className="w-full sm:flex-1">
              {site.ctas.secondary}
            </Button>
          </div>
          <div className="mt-6">
            <Button href="/gallery" variant="ghost" size="md" className="text-[color:var(--text-tertiary)]">
              View gallery
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
