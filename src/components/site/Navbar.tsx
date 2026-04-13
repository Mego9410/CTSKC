"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/site/MobileMenu";
import { useBookTrial } from "@/components/site/BookTrialProvider";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/classes", label: "Classes" },
  { href: "/timetable", label: "Timetable" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const { open: openBookTrial } = useBookTrial();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const cls = useMemo(
    () =>
      cn(
        "sticky top-0 z-50 w-full border-b border-[color:var(--border-soft)] transition-[background-color,backdrop-filter] duration-300",
        solid
          ? "bg-[color:var(--background)]/88 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-[color:var(--background)]/55 backdrop-blur-lg backdrop-saturate-150",
      ),
    [solid],
  );

  return (
    <header className={cls}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="group inline-flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[color:var(--border-soft)] bg-[#0a0a0a] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.75)] sm:h-11 sm:w-11">
            <Image
              src={site.assets.logo}
              alt={site.assets.logoAlt}
              fill
              quality={95}
              className="object-cover object-center scale-[1.14] sm:scale-[1.12]"
              sizes="96px"
              priority
            />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm leading-4 text-[color:var(--text-tertiary)]">
              {site.club.locationPrimary}
            </span>
            <span className="block font-[family-name:var(--font-display)] tracking-tight leading-5">
              {site.club.shortName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={openBookTrial}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {site.ctas.primary}
          </Button>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}

