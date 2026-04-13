import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GalleryTabs } from "@/components/sections/GalleryTabs";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from CTSKC training and club life. A grounded, local Shotokan karate community.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Training, technique, community"
        description="A physical practice, taught calmly. Scroll the gallery — then book a free trial to feel it in person."
        primaryCta={{ href: "/contact#book-trial", label: site.ctas.primary }}
        secondaryCta={{ href: "/timetable", label: site.ctas.secondary }}
        backgroundImage={{
          src: site.gallery.items[0].src,
          alt: site.gallery.items[0].alt,
        }}
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Browse"
            title="Filter by category"
            description="Lightbox-ready architecture: each item is a link target you can later upgrade to a modal."
          />
          <div className="mt-10">
            <GalleryTabs />
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

