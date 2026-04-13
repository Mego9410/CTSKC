import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { BookTrialButton } from "@/components/site/BookTrialButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function FaqPreview() {
  const preview = site.faq.slice(0, 4);
  return (
    <section className="section-pad relative bg-gradient-to-b from-[color:var(--surface)]/30 via-[color:var(--background)] to-[color:var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="FAQ"
            title="Beginner questions, answered clearly"
            description="If you’re unsure, that’s normal. We’ll guide you through the first session."
          />
          <Button href="/faq" variant="secondary">
            View all FAQs
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {preview.map((f, idx) => (
            <Reveal
              key={f.question}
              delay={idx * 0.03}
              className={cn("h-full", idx % 2 === 1 && "md:mt-6")}
            >
              <Link href="/faq" className="ui-card block h-full">
                <div className="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight tracking-tight">
                  {f.question}
                </div>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">{f.answer}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <BookTrialButton size="lg" />
        </div>
      </div>
    </section>
  );
}
