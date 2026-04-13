"use client";

import { useMemo, useState } from "react";
import { site, type TimetableSession } from "@/content/site";
import { cn } from "@/lib/cn";

type Filter = "All" | TimetableSession["day"];

export function TimetableClient() {
  const [day, setDay] = useState<Filter>("All");

  const sessions = useMemo(() => {
    const all = site.timetable.sessions;
    if (day === "All") return all;
    return all.filter((s) => s.day === day);
  }, [day]);

  const filterButtons: Filter[] = ["All", "Monday", "Wednesday", "Thursday"];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filterButtons.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDay(d)}
            className={cn(
              "rounded-full px-4 py-2 text-sm ring-1 transition",
              day === d
                ? "bg-[color:var(--accent)] text-[color:var(--foreground)] ring-transparent"
                : "bg-white/5 text-[color:var(--muted)] ring-white/10 hover:bg-white/10",
            )}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:hidden">
        {sessions.map((s) => (
          <div key={`${s.day}-${s.time}`} className="rounded-3xl bg-[color:var(--surface)] p-6 ring-1 ring-white/10">
            <div className="text-xs tracking-[0.24em] uppercase text-[color:var(--muted)]">{s.day}</div>
            <div className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-tight">{s.time}</div>
            <div className="mt-4 text-sm text-[color:var(--foreground)]">{s.venue}</div>
            <div className="mt-1 text-sm text-[color:var(--muted)]">{s.area}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 hidden md:block overflow-hidden rounded-[2rem] ring-1 ring-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5 text-[color:var(--muted)]">
            <tr>
              <th className="px-6 py-4 font-medium">Day</th>
              <th className="px-6 py-4 font-medium">Time</th>
              <th className="px-6 py-4 font-medium">Venue</th>
              <th className="px-6 py-4 font-medium">Area</th>
            </tr>
          </thead>
          <tbody className="bg-[color:var(--surface)]">
            {sessions.map((s) => (
              <tr key={`${s.day}-${s.time}`} className="border-t border-white/10">
                <td className="px-6 py-4">{s.day}</td>
                <td className="px-6 py-4 font-[family-name:var(--font-display)] tracking-tight">{s.time}</td>
                <td className="px-6 py-4">{s.venue}</td>
                <td className="px-6 py-4 text-[color:var(--muted)]">{s.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

