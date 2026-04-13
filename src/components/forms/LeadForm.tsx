"use client";

import { useActionState } from "react";
import { submitLead, type LeadState } from "@/app/actions/lead";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const initial: LeadState = { status: "idle" };

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <span className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">{label}</span>
      <input
        className={cn(
          "h-12 w-full min-w-0 max-w-full rounded-2xl bg-black/20 px-4 text-sm ring-1 ring-white/10 placeholder:text-white/25",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
        )}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={name === "name" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : "off"}
      />
      {error ? <span className="text-xs text-[color:var(--accent2)]">{error}</span> : null}
    </label>
  );
}

export function LeadForm({
  kind,
  title,
  ctaLabel,
  className,
  titleId,
}: {
  kind: "trial" | "contact";
  title: string;
  ctaLabel: string;
  className?: string;
  /** When set, applied to the visible title for dialog aria-labelledby */
  titleId?: string;
}) {
  const [state, action, pending] = useActionState(submitLead, initial);

  const fe = state.status === "error" ? state.fieldErrors : undefined;
  const firstErr = (k: string) => (fe?.[k]?.[0] ? String(fe[k][0]) : undefined);

  return (
    <form
      action={action}
      className={cn(
        "@container max-w-full rounded-[2rem] bg-[color:var(--surface)] p-6 ring-1 ring-white/10 sm:p-8",
        className,
      )}
    >
      <input type="hidden" name="kind" value={kind} />
      <div
        id={titleId}
        className="font-[family-name:var(--font-display)] text-2xl tracking-tight"
      >
        {title}
      </div>
      <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
        {kind === "trial"
          ? "Tell us a little, and we’ll confirm the best first session."
          : "Send a message — we’ll reply with the details you need."}
      </p>

      {state.status === "success" ? (
        <div className="mt-6 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
          <div className="text-sm text-[color:var(--foreground)]">Message received.</div>
          <div className="mt-2 text-sm text-[color:var(--muted)]">
            Reference: <span className="text-[color:var(--foreground)]">{state.ref}</span>
          </div>
          <div className="mt-4 text-sm text-[color:var(--muted)]">
            If you want a faster reply, use WhatsApp from the buttons on this page.
          </div>
        </div>
      ) : (
        <>
          {state.status === "error" && state.formError ? (
            <div className="mt-6 rounded-3xl bg-[color:var(--accent)]/10 p-4 ring-1 ring-[color:var(--accent)]/25 text-sm text-[color:var(--foreground)]">
              {state.formError}
            </div>
          ) : null}

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-5 @min-[480px]:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" error={firstErr("name")} />
            <Field label="Email (optional)" name="email" type="email" placeholder="you@example.com" error={firstErr("email")} />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-5 @min-[480px]:grid-cols-2">
            <Field label="Phone (optional)" name="phone" type="tel" placeholder="Mobile or landline" error={firstErr("phone")} />
            {kind === "trial" ? (
              <label className="grid min-w-0 gap-2">
                <span className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">Preferred day (optional)</span>
                <select
                  className="h-12 w-full min-w-0 max-w-full rounded-2xl bg-black/20 px-4 text-sm text-[color:var(--foreground)] ring-1 ring-white/10"
                  name="preferredDay"
                  defaultValue=""
                >
                  <option value="">No preference</option>
                  <option value="Monday">Monday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                </select>
                {firstErr("preferredDay") ? (
                  <span className="text-xs text-[color:var(--accent2)]">{firstErr("preferredDay")}</span>
                ) : null}
              </label>
            ) : null}
          </div>

          <label className="mt-5 grid min-w-0 gap-2">
            <span className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">Message</span>
            <textarea
              className={cn(
                "min-h-28 w-full min-w-0 max-w-full rounded-3xl bg-black/20 px-4 py-3 text-sm ring-1 ring-white/10 placeholder:text-white/25",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]",
              )}
              name="message"
              placeholder={
                kind === "trial"
                  ? "Age group (child/teen/adult), preferred day, and anything you’re unsure about."
                  : "What can we help you with?"
              }
            />
            {firstErr("message") ? (
              <span className="text-xs text-[color:var(--accent2)]">{firstErr("message")}</span>
            ) : null}
          </label>

          <div className="mt-6">
            <Button type="submit" disabled={pending} className="w-full" size="lg">
              {pending ? "Sending…" : ctaLabel}
            </Button>
            <div className="mt-3 text-xs text-[color:var(--muted)]">
              This form currently logs securely to the server for wiring later. For fastest response, use WhatsApp.
            </div>
          </div>
        </>
      )}
    </form>
  );
}

