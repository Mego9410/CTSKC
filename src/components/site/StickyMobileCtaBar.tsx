"use client";

import { Button } from "@/components/ui/Button";
import { useBookTrial } from "@/components/site/BookTrialProvider";
import { telLink, waLink } from "@/lib/links";

export function StickyMobileCtaBar() {
  const { open: openBookTrial } = useBookTrial();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[color:var(--background)]/92 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-1.5 px-3 py-2.5">
        <Button
          onClick={openBookTrial}
          variant="primary"
          size="md"
          className="min-h-12 w-full px-2 text-sm"
        >
          Book trial
        </Button>
        <Button href={telLink()} external variant="secondary" size="md" className="min-h-12 w-full px-2 text-sm">
          Call
        </Button>
        <Button
          href={waLink("Hi, I’d like to book a free trial session.")}
          external
          variant="secondary"
          size="md"
          className="min-h-12 w-full px-2 text-sm"
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

