import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function HowItWorks() {
  return (
    <section className="section-pad relative bg-[color:var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <SectionHeading
          eyebrow="How it works"
          title="A clear first step — then steady progress"
          description="No pressure, no guesswork. Just a calm introduction, then a structured path."
        />

        <div className="mt-16 max-w-2xl space-y-12 sm:space-y-16">
          {site.howItWorks.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.05}>
              <div className={cn("flex gap-6 sm:gap-10", idx === 1 && "sm:ml-10", idx === 2 && "sm:ml-20")}>
                <span className="shrink-0 pt-0.5 font-[family-name:var(--font-display)] text-2xl tabular-nums leading-none text-[color:var(--accent-warm)]/90 sm:text-3xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 border-t border-transparent pt-0 sm:border-0">
                  <div className="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                    {step.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)] sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
