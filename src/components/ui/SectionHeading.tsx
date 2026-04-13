import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--text-tertiary)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] tracking-tight sm:text-4xl sm:leading-[1.0]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-[color:var(--text-body)] sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

