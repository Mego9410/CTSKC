"use client";

import { useMemo, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { GalleryImageCard } from "@/components/sections/GalleryImageCard";

type Cat = (typeof site.gallery.categories)[number] | "All";

const mosaicCycle = ["tall", "wide", "square", "wide", "tall", "default"] as const;

export function GalleryTabs() {
  const [cat, setCat] = useState<Cat>("All");

  const items = useMemo(() => {
    if (cat === "All") return site.gallery.items;
    return site.gallery.items.filter((i) => i.category === cat);
  }, [cat]);

  const tabs: Cat[] = ["All", ...site.gallery.categories];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setCat(t)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition duration-200",
              cat === t
                ? "border-transparent bg-[color:var(--accent)] text-[color:var(--foreground)] shadow-[0_14px_36px_-14px_rgba(0,0,0,0.55)]"
                : "border-[color:var(--border-soft)] bg-white/[0.03] text-[color:var(--text-secondary)] hover:border-[color:var(--border-soft-mid)] hover:bg-white/[0.06]",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-2 gap-4 sm:columns-3 sm:gap-5">
        {items.map((img, idx) => (
          <div key={img.src} className="mb-4 break-inside-avoid sm:mb-5">
            <GalleryImageCard
              src={img.src}
              alt={img.alt}
              category={img.category}
              href={img.src}
              mosaic={mosaicCycle[idx % mosaicCycle.length]}
            />
          </div>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-[color:var(--border-soft)] bg-white/[0.03] p-6 text-sm text-[color:var(--text-secondary)]">
          No images in this category yet.
        </div>
      ) : null}
    </div>
  );
}
