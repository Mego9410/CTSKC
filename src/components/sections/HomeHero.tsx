"use client";

import Image from "next/image";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { useBookTrial } from "@/components/site/BookTrialProvider";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const HERO_VIDEO_SRC = "/videos/hero-background.mp4";

function splitHeroHeadline(headline: string) {
  const idx = headline.indexOf(". ");
  if (idx === -1) {
    return { line1: headline, line2: null as string | null };
  }
  return {
    line1: headline.slice(0, idx + 1),
    line2: headline.slice(idx + 2).trim(),
  };
}

export function HomeHero() {
  const reduceMotion = usePrefersReducedMotion();
  const { open: openBookTrial } = useBookTrial();
  const { line1, line2 } = splitHeroHeadline(site.hero.headline);

  return (
    <section className="relative min-h-[min(92dvh,760px)] overflow-hidden grain sm:min-h-[min(100dvh,960px)]">
      <div className="absolute inset-0 overflow-hidden">
        <div className={reduceMotion ? "absolute inset-0" : "hero-bg-drift absolute inset-0"}>
          <div className="absolute inset-0 scale-[1.1]">
            {reduceMotion ? (
              <Image
                src={site.assets.homeHero}
                alt=""
                fill
                priority
                quality={92}
                className="editorial-photo object-cover object-center"
                sizes="100vw"
                aria-hidden
              />
            ) : (
              <video
                className="hero-bg-video absolute inset-0 h-full w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={site.assets.homeHero}
                aria-hidden
              >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/[0.14] via-black/62 to-black/[0.96]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 via-55% to-[color:var(--background)]"
          aria-hidden
        />
        <div className="cinematic-vignette absolute inset-0" aria-hidden />
        <div
          className="pointer-events-none absolute -left-[12%] top-[10%] h-[min(50vh,440px)] w-[min(92vw,520px)] rounded-full opacity-[0.38]"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in srgb, var(--foreground) 11%, transparent) 0%, transparent 70%)",
            filter: "blur(44px)",
          }}
          aria-hidden
        />
        <div className="hero-grain2 pointer-events-none absolute inset-0" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-[min(92dvh,760px)] flex-col justify-end pb-12 pt-20 sm:min-h-[min(100dvh,960px)] sm:justify-center sm:pb-16 sm:pt-16 lg:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-black/20 px-4 py-2 backdrop-blur-md">
              <span className="text-xs tracking-[0.24em] uppercase text-[color:var(--text-tertiary)]">
                {site.club.locationPrimary}
              </span>
            </div>

            <h1 className="headline-glow mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.88] tracking-[-0.02em] text-[color:var(--foreground)] sm:mt-8">
              <span className="block">{line1}</span>
              {line2 ? (
                <span className="mt-2 block text-[color:var(--foreground)]">{line2}</span>
              ) : null}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--text-body)] sm:mt-6 sm:text-xl sm:leading-8">
              {site.hero.subheadline}
            </p>

            <div className="relative mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5">
              <div className="relative w-full sm:w-auto">
                <div
                  className="pointer-events-none absolute inset-0 -m-3 rounded-full opacity-65 blur-2xl sm:-m-5"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, color-mix(in srgb, var(--accent) 36%, transparent), transparent 72%)",
                  }}
                  aria-hidden
                />
                <Button onClick={openBookTrial} size="lg" className="relative w-full min-h-14 sm:w-auto">
                  {site.ctas.primary}
                </Button>
              </div>
              <Button href="/timetable" variant="secondary" size="lg" className="w-full min-h-14 sm:w-auto">
                {site.ctas.secondary}
              </Button>
            </div>

            <p className="mt-8 text-sm leading-7 text-[color:var(--text-secondary)] sm:mt-10 sm:text-[0.9375rem]">
              {site.hero.bullets.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
