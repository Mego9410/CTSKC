import Link from "next/link";
import { site } from "@/content/site";
import { CLUB_EMAIL, CLUB_PHONE_DISPLAY, mailtoLink, telLink, waLink } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-[family-name:var(--font-display)] text-lg tracking-tight">
            {site.club.shortName}
          </div>
          <p className="text-sm leading-6 text-[color:var(--muted)]">
            Traditional Shotokan karate in Chingford. Calm discipline, modern clarity, real local community.
          </p>
        </div>

        <div className="space-y-3">
          <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
            Explore
          </div>
          <div className="grid gap-2 text-sm">
            <Link className="text-[color:var(--foreground)] hover:text-white/90" href="/about">
              About
            </Link>
            <Link className="text-[color:var(--foreground)] hover:text-white/90" href="/classes">
              Classes
            </Link>
            <Link className="text-[color:var(--foreground)] hover:text-white/90" href="/timetable">
              Timetable
            </Link>
            <Link className="text-[color:var(--foreground)] hover:text-white/90" href="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
            Quick actions
          </div>
          <div className="grid gap-2 text-sm">
            <a className="hover:text-white/90" href={waLink("Hi, I’d like to book a free trial session.")} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a className="hover:text-white/90" href={telLink()}>
              Call {CLUB_PHONE_DISPLAY}
            </a>
            <a className="hover:text-white/90" href={mailtoLink("CTSKC enquiry")}>
              Email {CLUB_EMAIL}
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">
            Trust
          </div>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            <li>Enhanced DBS checked instructors</li>
            <li>Child protection trained</li>
            <li>Established {site.club.established}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.club.name}. All rights reserved.</div>
          <div>
            <span className="text-[color:var(--muted)]">Domain:</span>{" "}
            <a className="hover:text-white/90" href="https://www.ctskc.co.uk">
              www.ctskc.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

