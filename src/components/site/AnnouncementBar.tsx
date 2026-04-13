import { waLink } from "@/lib/links";

export function AnnouncementBar() {
  return (
    <div className="w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
        <div className="text-[color:var(--muted)]">
          Established 1988 • Traditional Shotokan in Chingford
        </div>
        <a
          className="text-[color:var(--foreground)] hover:text-white/90 underline underline-offset-4 decoration-white/20"
          href={waLink("Hi, I’d like to book a free trial session.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp for a quick reply
        </a>
      </div>
    </div>
  );
}

