"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);
  const shown = reduceMotion || inView;

  useEffect(() => {
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -120px 0px", threshold: 0.01 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-on-scroll",
        className,
        "transition-[opacity,transform] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        shown ? "translate-y-0 opacity-100" : "translate-y-2.5 opacity-0",
      )}
      style={{ transitionDelay: shown ? `${delay}s` : "0s" }}
    >
      {children}
    </div>
  );
}
