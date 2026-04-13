import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const list = site.testimonials;
  const first = list[0];
  const second = list[1];
  const third = list[2];

  if (!first || !second || !third) {
    return (
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <SectionHeading eyebrow="Trust" title="Member voices" description="" />
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad relative bg-gradient-to-b from-transparent via-[color:var(--surface)]/15 to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <SectionHeading
          eyebrow="Trust"
          title="A club that feels calm, structured, and real"
          description="The first session should feel clear and welcoming — not intimidating."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          <Reveal className="md:col-span-2 md:row-span-2">
            <figure className="flex h-full min-h-[280px] flex-col justify-between rounded-2xl border border-[color:var(--border-soft)] bg-gradient-to-br from-white/[0.06] to-transparent p-8 shadow-[0_28px_70px_-42px_rgba(0,0,0,0.85)] sm:p-10">
              <blockquote className="text-lg leading-8 text-[color:var(--text-body)] sm:text-xl sm:leading-9">
                “{first.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-end justify-between gap-4 border-t border-[color:var(--border-soft)] pt-6">
                <div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight">
                    {first.name}
                  </div>
                  <div className="mt-1 text-xs tracking-[0.2em] uppercase text-[color:var(--text-tertiary)]">
                    {first.context}
                  </div>
                </div>
                <div className="h-12 w-12 shrink-0 rounded-full border border-[color:var(--border-soft)] bg-white/[0.03]" />
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.06}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border-soft)] bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-36px_rgba(0,0,0,0.75)] sm:p-7">
              <blockquote className="text-sm leading-7 text-[color:var(--text-secondary)]">
                “{second.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-[family-name:var(--font-display)] tracking-tight">{second.name}</div>
                <div className="mt-1 text-xs tracking-[0.18em] uppercase text-[color:var(--text-tertiary)]">
                  {second.context}
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-[color:var(--border-soft)] bg-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_-36px_rgba(0,0,0,0.75)] sm:p-7 md:mt-4">
              <blockquote className="text-sm leading-7 text-[color:var(--text-secondary)]">
                “{third.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-[family-name:var(--font-display)] tracking-tight">{third.name}</div>
                <div className="mt-1 text-xs tracking-[0.18em] uppercase text-[color:var(--text-tertiary)]">
                  {third.context}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
