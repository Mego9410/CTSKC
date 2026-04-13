import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryImageCard } from "@/components/sections/GalleryImageCard";

export function GalleryPreview() {
  const preview = site.gallery.items.slice(0, 6);
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="A local club. A physical practice."
            description="A calm atmosphere, real training, real people — no gimmicks."
          />
          <Button href="/gallery" variant="secondary">
            View gallery
          </Button>
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3">
          {preview.map((img, idx) => {
            const mosaics = ["tall", "wide", "square", "wide", "tall", "default"] as const;
            return (
              <Reveal key={img.src} delay={idx * 0.02} className="mb-4 break-inside-avoid">
                <GalleryImageCard
                  src={img.src}
                  alt={img.alt}
                  category={img.category}
                  href="/gallery"
                  mosaic={mosaics[idx % mosaics.length]}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

