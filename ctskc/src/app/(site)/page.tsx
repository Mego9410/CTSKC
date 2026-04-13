import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookTrialButton } from "@/components/site/BookTrialButton";
import { BeginnerJourney } from "@/components/sections/BeginnerJourney";
import { HomeHero } from "@/components/sections/HomeHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TimetablePreview } from "@/components/sections/TimetablePreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCtaBlock } from "@/components/sections/FinalCtaBlock";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Traditional Shotokan Karate in Chingford",
  description:
    "Build confidence, discipline, and fitness at a welcoming Chingford karate club. Traditional Shotokan for children and adults. Start your free trial.",
  alternates: { canonical: "/" },
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 sm:px-5">{children}</div>;
}

export default function HomePage() {
  return (
    <div className="section-depth bg-[color:var(--background)]">
      <HomeHero />

      <section className="border-b border-[color:var(--border-soft)] py-12 sm:py-14">
        <Container>
          <p className="trust-strip text-center leading-relaxed">{site.trustStrip}</p>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {site.trust.map((t) => (
              <div key={t.title} className="text-center sm:text-left">
                <div className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">
                  {t.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad overflow-x-clip">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-4">
            <div className="order-2 max-w-xl lg:order-1 lg:pr-4 xl:pr-8">
              <SectionHeading
                eyebrow="Why train"
                title="Confidence, discipline, progression — in a real dojo"
                description="Structured traditional training for everyday life. No gimmicks: repetition, coaching, and steady improvement."
              />
              <ul className="mt-10 space-y-5">
                {site.benefits.map((b) => (
                  <li key={b.title} className="flex gap-4 border-b border-[color:var(--border-soft)] pb-5 last:border-0 last:pb-0">
                    <span className="shrink-0 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-warm)]">
                      {b.title}
                    </span>
                    <p className="text-sm leading-7 text-[color:var(--text-secondary)]">{b.description}</p>
                  </li>
                ))}
              </ul>
              <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <p className="max-w-md text-sm leading-7 text-[color:var(--text-tertiary)]">
                  One session is enough to feel the structure — then you decide.
                </p>
                <BookTrialButton className="w-full shrink-0 sm:w-auto" />
              </Reveal>
            </div>

            <div className="relative order-1 min-h-[280px] lg:order-2 lg:min-h-[min(520px,72vh)]">
              <Reveal className="h-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[calc(100%+min(4rem,8vw))] xl:w-[calc(100%+min(6rem,10vw))]">
                <div className="relative h-[min(380px,55vh)] overflow-hidden rounded-2xl shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)] lg:h-full lg:rounded-3xl">
                  <Image
                    src={site.assets.whyFeature}
                    alt={site.assets.whyFeatureAlt}
                    fill
                    quality={92}
                    className="editorial-photo object-cover object-[center_25%]"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 55vw, 1100px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="section-fade opacity-70" aria-hidden />

      <section className="section-pad relative bg-gradient-to-b from-[color:var(--surface)]/25 via-transparent to-transparent">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5 lg:col-start-1">
              <Reveal>
                <div className="relative lg:-ml-4 xl:-ml-8">
                  <div className="overflow-hidden rounded-2xl shadow-[0_36px_80px_-36px_rgba(0,0,0,0.88)] lg:rounded-3xl">
                    <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none">
                      <Image
                        src={site.assets.aboutFeature}
                        alt={site.assets.aboutFeatureAlt}
                        fill
                        quality={92}
                        className="editorial-photo object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 45vw, 900px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative rounded-3xl border border-[color:var(--border-soft)] bg-gradient-to-br from-white/[0.06] via-transparent to-[color:var(--surface)]/30 p-8 sm:p-10 lg:p-12">
                <Reveal>
                  <SectionHeading
                    eyebrow="About"
                    title="Traditional values, modern clarity"
                    description="A local non-profit club established in 1988 — calm authority on the floor, and a structured path for newcomers."
                  />
                </Reveal>
                <div className="mt-10 space-y-4">
                  <Reveal delay={0.05}>
                    <div>
                      <div className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">
                        Instructor
                      </div>
                      <div className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight">
                        {site.club.instructor.name} • {site.club.instructor.grade}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                        {site.club.instructor.summary}
                      </p>
                    </div>
                  </Reveal>
                  <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4">
                    <Button href="/about" variant="secondary">
                      Read the club story
                    </Button>
                    <BookTrialButton size="lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <BeginnerJourney />

      <HowItWorks />

      <TimetablePreview />

      <Testimonials />

      <section className="section-pad pb-12 sm:pb-16">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[color:var(--border-soft)] bg-white/[0.03] px-8 py-10 sm:flex-row sm:items-center sm:gap-10 sm:px-10 sm:py-12">
              <p className="max-w-2xl text-base leading-7 text-[color:var(--text-body)] sm:text-lg sm:leading-8">
                Ready to feel the structure for yourself? Book a free trial — we’ll confirm the right first class.
              </p>
              <BookTrialButton className="w-full shrink-0 sm:w-auto" />
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqPreview />

      <FinalCtaBlock />
    </div>
  );
}
