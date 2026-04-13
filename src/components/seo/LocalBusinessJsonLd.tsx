import { site } from "@/content/site";
import { CLUB_EMAIL, CLUB_PHONE_E164, CLUB_PHONE_DISPLAY } from "@/lib/links";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: site.club.name,
    url: "https://www.ctskc.co.uk",
    email: CLUB_EMAIL,
    telephone: `+${CLUB_PHONE_E164}`,
    areaServed: ["Chingford", "Waltham Forest", "Enfield", "Ponders End"],
    foundingDate: String(site.club.established),
    description:
      "Traditional Shotokan karate club in Chingford. Beginner-friendly classes for children, teens and adults. Book a free trial session.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${CLUB_PHONE_E164}`,
        email: CLUB_EMAIL,
        availableLanguage: ["English"],
      },
    ],
    openingHoursSpecification: site.timetable.sessions.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.day,
      opens: "18:00",
      closes: "21:15",
      description: `${s.venue} — ${s.time} (${s.area})`,
    })),
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      data-phone={CLUB_PHONE_DISPLAY}
    />
  );
}

