"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { useBookTrial } from "@/components/site/BookTrialProvider";
import { site } from "@/content/site";

export function MobileMenu({
  items,
}: {
  items: ReadonlyArray<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);
  const { open: openBookTrial } = useBookTrial();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-white/[0.04] md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span className="block h-[2px] w-5 bg-white/80 translate-y-[-4px]" />
        <span className={cn("block h-[2px] w-5 bg-white/80 transition", open ? "opacity-0" : "opacity-100")} />
        <span className="block h-[2px] w-5 bg-white/80 translate-y-[4px]" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close menu backdrop"
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-[color:var(--border-soft)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--foreground)_4%,transparent)_0%,var(--surface)_45%)] p-5 shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between">
              <div className="text-sm text-[color:var(--text-secondary)]">Menu</div>
              <button
                type="button"
                className="h-10 w-10 rounded-full border border-[color:var(--border-soft)] bg-white/[0.04]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base text-[color:var(--foreground)] hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 grid gap-3">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  openBookTrial();
                }}
              >
                {site.ctas.primary}
              </Button>
              <Button href="/timetable" variant="secondary" size="lg" className="w-full" onClick={() => setOpen(false)}>
                {site.ctas.secondary}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

