"use client";

import { createContext, useCallback, useContext, useEffect, useRef } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type BookTrialContextValue = {
  open: () => void;
  close: () => void;
};

const BookTrialContext = createContext<BookTrialContextValue | null>(null);

export function useBookTrial() {
  const ctx = useContext(BookTrialContext);
  if (!ctx) {
    throw new Error("useBookTrial must be used within BookTrialProvider");
  }
  return ctx;
}

export function BookTrialProvider({ children }: { children: React.ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => {
    const el = dialogRef.current;
    if (el?.open) {
      el.close();
    }
  }, []);

  const open = useCallback(() => {
    const el = dialogRef.current;
    if (el && !el.open) {
      el.showModal();
    }
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    const onCancel = (e: Event) => {
      e.preventDefault();
      close();
    };

    el.addEventListener("cancel", onCancel);
    return () => el.removeEventListener("cancel", onCancel);
  }, [close]);

  return (
    <BookTrialContext.Provider value={{ open, close }}>
      {children}
      <dialog
        ref={dialogRef}
        className={cn(
          "dialog-premium fixed left-1/2 top-1/2 z-[100] w-[min(100vw-1.5rem,28rem)] max-h-[min(90dvh,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2",
          "overflow-hidden rounded-[2rem] p-0 text-[color:var(--foreground)] shadow-[0_48px_120px_-48px_rgba(0,0,0,0.92)]",
        )}
        aria-labelledby="book-trial-form-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            close();
          }
        }}
      >
        <div className="grain relative max-h-[min(90dvh,calc(100%-2rem))] min-w-0 overflow-x-hidden overflow-y-auto overscroll-contain p-5 sm:p-6">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={close}
              className="rounded-full border border-[color:var(--border-soft)] px-3 py-1.5 text-xs tracking-[0.2em] uppercase text-[color:var(--text-secondary)] transition hover:bg-white/[0.06] hover:text-[color:var(--foreground)]"
            >
              Close
            </button>
          </div>
          <div className="mt-2">
            <LeadForm
              kind="trial"
              title={site.ctas.primary}
              ctaLabel={site.ctas.primary}
              titleId="book-trial-form-title"
              className="rounded-[1.5rem] bg-transparent p-0 ring-0 sm:p-0"
            />
          </div>
        </div>
      </dialog>
    </BookTrialContext.Provider>
  );
}
