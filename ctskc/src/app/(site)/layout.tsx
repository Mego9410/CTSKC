import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { BookTrialProvider } from "@/components/site/BookTrialProvider";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { StickyMobileCtaBar } from "@/components/site/StickyMobileCtaBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookTrialProvider>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyMobileCtaBar />
      {/* Spacer so content isn't covered by mobile CTA bar */}
      <div className="h-[4.75rem] md:hidden" aria-hidden="true" />
    </BookTrialProvider>
  );
}

