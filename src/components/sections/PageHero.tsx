import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  className?: string;
  backgroundImage?: { src: string; alt: string };
}) {
  return (
    <section className={cn("relative overflow-hidden grain", className)}>
      {backgroundImage ? (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-105">
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              priority
              quality={90}
              className="editorial-photo object-cover object-center blur-[1px]"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-br from-white/[0.14] via-black/65 to-black/[0.92]"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[color:var(--background)]"
            aria-hidden
          />
          <div className="cinematic-vignette absolute inset-0" aria-hidden />
          <div className="hero-grain2 pointer-events-none absolute inset-0 opacity-80" aria-hidden />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-[color:var(--background)]" />
          <div className="absolute inset-0">
            <div className="absolute -top-28 left-[-120px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 right-[-140px] h-[520px] w-[520px] rounded-full bg-[color:var(--accent)]/12 blur-3xl" />
          </div>
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        {eyebrow ? (
          <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--text-tertiary)]">
            {eyebrow}
          </div>
        ) : null}
        <h1 className="headline-glow mt-5 font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.96] tracking-tight sm:text-6xl sm:leading-[0.98]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-body)] sm:text-xl sm:leading-8">
            {description}
          </p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {primaryCta ? (
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button href={secondaryCta.href} size="lg" variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
