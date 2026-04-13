import { NextResponse } from "next/server";

/** Minimal route to verify Vercel is running the Next.js server (not static “Other” output). */
export function GET() {
  return NextResponse.json({ ok: true });
}
