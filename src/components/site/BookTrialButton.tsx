"use client";

import { Button } from "@/components/ui/Button";
import { useBookTrial } from "@/components/site/BookTrialProvider";
import { site } from "@/content/site";

export function BookTrialButton({
  className,
  size = "lg",
  variant = "primary",
  children,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  children?: React.ReactNode;
}) {
  const { open } = useBookTrial();
  return (
    <Button variant={variant} size={size} className={className} onClick={open}>
      {children ?? site.ctas.primary}
    </Button>
  );
}
