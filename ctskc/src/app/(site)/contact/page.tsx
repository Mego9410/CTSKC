import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CLUB_EMAIL, CLUB_PHONE_DISPLAY, mailtoLink, telLink, waLink } from "@/lib/links";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CTSKC to start your free trial, message via WhatsApp, or call/email the club. Beginner-friendly and structured.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={site.ctas.primary}
        description="Quick reply via WhatsApp. Or call/email if you prefer."
        primaryCta={{ href: "#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div id="book-trial" className="scroll-mt-28">
              <SectionHeading
                eyebrow="Book trial"
                title="Send a quick message"
                description="We’ll confirm the best class time for your first session. No pressure, no hard sell."
              />
            </div>

            <div className="mt-8 grid gap-6">
              <LeadForm kind="trial" title={site.ctas.primary} ctaLabel={site.ctas.primary} />

              <div className="rounded-[2rem] bg-black/20 ring-1 ring-white/10 p-6 sm:p-8">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Prefer WhatsApp / call?
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Button
                    href={waLink("Hi, I’d like to book a free trial session. My name is…")}
                    external
                    variant="secondary"
                    size="lg"
                    className="w-full"
                  >
                    WhatsApp
                  </Button>
                  <Button href={telLink()} variant="secondary" size="lg" className="w-full" external>
                    Call {CLUB_PHONE_DISPLAY}
                  </Button>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Button
                    href={mailtoLink("CTSKC free trial")}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    external
                  >
                    Email {CLUB_EMAIL}
                  </Button>
                  <Button href="/timetable" variant="ghost" size="lg" className="w-full">
                    {site.ctas.secondary}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-black/20 ring-1 ring-white/10 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Beginner reassurance"
                title="A calm first session"
                description="No experience needed. You’ll learn simple fundamentals, at your pace, with a supportive welcome."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Comfortable sports clothes are fine.",
                  "Take breaks whenever you need.",
                  "Control and safety come first.",
                  "You’ll be guided step by step.",
                ].map((x) => (
                  <div key={x} className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                    <div className="text-sm text-[color:var(--foreground)]">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-6">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Contact info
                </div>
                <div className="mt-4 grid gap-2 text-sm">
                  <a className="hover:text-white/90" href={waLink("Hi, I’d like to book a free trial session.")} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a className="hover:text-white/90" href={telLink()}>
                    Call {CLUB_PHONE_DISPLAY}
                  </a>
                  <a className="hover:text-white/90" href={mailtoLink("CTSKC enquiry")}>
                    Email {CLUB_EMAIL}
                  </a>
                </div>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  {site.contact.quickNote}
                </p>
              </div>

              <div className="rounded-[2rem] bg-[color:var(--surface)] ring-1 ring-white/10 p-6">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Walk-in note
                </div>
                <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                  {site.contact.wednesdayWalkIn}
                </p>
                <div className="mt-6">
                  <Button href="/contact#book-trial" className="w-full">
                    {site.ctas.primary}
                  </Button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-black/20 ring-1 ring-white/10 p-6">
                <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
                  Trust
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">
                  <li>Enhanced DBS checked instructors</li>
                  <li>Child protection trained</li>
                  <li>Established {site.club.established}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

