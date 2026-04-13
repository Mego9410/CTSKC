"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";
import type { FaqItem } from "@/content/site";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const base = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid gap-3">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        const btnId = `${base}-btn-${idx}`;
        const panelId = `${base}-panel-${idx}`;
        return (
          <div
            key={item.question}
            className="rounded-3xl bg-[color:var(--surface)] ring-1 ring-white/10 overflow-hidden"
          >
            <button
              id={btnId}
              type="button"
              className={cn(
                "w-full px-6 py-5 text-left flex items-center justify-between gap-6",
                "hover:bg-white/5 transition-colors",
              )}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen((v) => (v === idx ? null : idx))}
            >
              <span className="font-[family-name:var(--font-display)] text-xl tracking-tight">
                {item.question}
              </span>
              <span
                className={cn(
                  "h-10 w-10 rounded-full bg-white/5 ring-1 ring-white/10 grid place-items-center text-[color:var(--muted)] transition-transform",
                  isOpen && "rotate-45",
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className={cn("px-6 pb-5 text-sm leading-7 text-[color:var(--muted)]", !isOpen && "hidden")}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

