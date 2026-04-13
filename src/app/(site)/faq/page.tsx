import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Beginner-friendly answers to common questions about training at CTSKC: what to wear, session length, parents watching and more.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Beginner questions, answered"
        description="If you’re unsure, that’s normal. Here’s what to expect — clearly."
        primaryCta={{ href: "/contact#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="FAQs"
            title="What to expect"
            description="Short, direct answers — so you can make a calm decision."
          />
          <div className="mt-10">
            <FaqAccordion items={[...site.faq]} />
          </div>
          <div className="mt-10">
            <Button href="/contact#book-trial" size="lg">
              {site.ctas.primary}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

