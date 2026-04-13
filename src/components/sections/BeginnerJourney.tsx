import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function BeginnerJourney() {
  const { beginner } = site;
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="beginner-shell relative overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="relative z-[1] grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow={beginner.eyebrow}
                title={beginner.title}
                description={beginner.intro}
              />
            </div>
            <div className="grid gap-8 lg:col-span-6 lg:col-start-7 lg:gap-10">
              {beginner.points.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 0.05}>
                  <div
                    className={cn(
                      "border-b border-[color:var(--border-soft)] pb-8 last:border-0 last:pb-0",
                      idx === 1 && "lg:pl-6",
                      idx === 2 && "lg:-pl-2",
                    )}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-[family-name:var(--font-display)] text-xl tabular-nums tracking-tight text-[color:var(--accent-warm)] sm:text-2xl">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="font-[family-name:var(--font-display)] text-lg font-semibold leading-tight tracking-tight sm:text-xl">
                        {p.title}
                      </div>
                    </div>
                    <p className="mt-3 pl-9 text-sm leading-7 text-[color:var(--text-secondary)] sm:pl-10 sm:text-base sm:leading-7">
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
