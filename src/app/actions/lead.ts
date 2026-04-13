"use server";

import { z } from "zod";

const LeadSchema = z.object({
  kind: z.enum(["trial", "contact"]),
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email.").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Please add a short message (10+ characters)."),
  preferredDay: z.enum(["Monday", "Wednesday", "Thursday"]).optional().or(z.literal("")),
});

export type LeadState =
  | { status: "idle" }
  | { status: "success"; ref: string }
  | { status: "error"; fieldErrors?: Record<string, string[]>; formError?: string };

export async function submitLead(_: LeadState, formData: FormData): Promise<LeadState> {
  try {
    const raw = {
      kind: String(formData.get("kind") ?? ""),
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      preferredDay: String(formData.get("preferredDay") ?? ""),
    };

    const parsed = LeadSchema.safeParse(raw);
    if (!parsed.success) {
      return {
        status: "error",
        fieldErrors: parsed.error.flatten().fieldErrors,
        formError: "Please check the fields below.",
      };
    }

    const ref = `LEAD-${Date.now().toString(36).toUpperCase()}`;
    console.log("[CTSKC lead]", { ref, ...parsed.data });

    return { status: "success", ref };
  } catch {
    return { status: "error", formError: "Something went wrong. Please try again." };
  }
}

