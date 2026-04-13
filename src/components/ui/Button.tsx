import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[transform,box-shadow,background-color,filter,border-color] duration-200 ease-out will-change-transform focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "primary-glow bg-[color:var(--accent)] text-[color:var(--foreground)] hover:brightness-[1.06] hover:scale-[1.03] active:scale-[0.98] active:translate-y-px",
  secondary:
    "border border-[color:var(--border-soft-mid)] bg-white/[0.03] text-[color:var(--foreground)] shadow-[0_12px_36px_-28px_rgba(0,0,0,0.65)] hover:bg-white/[0.06] hover:border-white/15 hover:scale-[1.03] active:scale-[0.98] active:translate-y-px",
  ghost:
    "border border-transparent bg-transparent text-[color:var(--foreground)] hover:bg-white/[0.05] hover:border-[color:var(--border-soft)] hover:scale-[1.02] active:scale-[0.98] active:translate-y-px",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-base sm:text-lg",
};

export function Button({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  size = "md",
  external,
  type,
  disabled,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const cls = cn(base, variants[variant], sizes[size], className, disabled && "opacity-60 pointer-events-none");

  if (href) {
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} type={type ?? "button"} disabled={disabled}>
      {children}
    </button>
  );
}

