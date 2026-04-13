import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

const mosaicAspect: Record<"tall" | "wide" | "square" | "default", string> = {
  tall: "aspect-[3/4] min-h-[220px] sm:min-h-[260px]",
  wide: "aspect-[16/10] sm:aspect-[16/9]",
  square: "aspect-square",
  default: "aspect-[4/3]",
};

export function GalleryImageCard({
  src,
  alt,
  category,
  href,
  className,
  mosaic = "default",
}: {
  src: string;
  alt: string;
  category: string;
  href: string;
  className?: string;
  mosaic?: "tall" | "wide" | "square" | "default";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group block break-inside-avoid overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface2)] transition duration-300 hover:border-[color:var(--border-soft-mid)] hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.85)]",
        className,
      )}
      aria-label={alt}
    >
      <div className={cn("relative w-full overflow-hidden bg-black/50", mosaicAspect[mosaic])}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={90}
          className="editorial-photo object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 34vw, (max-width: 1536px) 34vw, 720px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition duration-300 group-hover:from-black/80 group-hover:via-black/35" />
      </div>
      <div className="border-t border-[color:var(--border-soft)] px-4 py-3 sm:px-5 sm:py-4">
        <div className="text-[0.6rem] font-medium uppercase tracking-[0.22em] text-[color:var(--text-tertiary)]">
          {category}
        </div>
        <div className="mt-1.5 text-sm leading-snug text-[color:var(--text-body)]">{alt}</div>
      </div>
    </Link>
  );
}
