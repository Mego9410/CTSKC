import type { Metadata } from "next";
import { IBM_Plex_Sans, Oswald } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { BookTrialProvider } from "@/components/site/BookTrialProvider";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { StickyMobileCtaBar } from "@/components/site/StickyMobileCtaBar";

const body = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const display = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ctskc.co.uk"),
  title: {
    default: "CTSKC — Traditional Shotokan Karate in Chingford",
    template: "%s — CTSKC",
  },
  description:
    "Chingford Traditional Shotokan Karate Club. Beginner-friendly classes for children, teens and adults. Start your free trial.",
  applicationName: "CTSKC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "CTSKC",
    title: "CTSKC — Traditional Shotokan Karate in Chingford",
    description:
      "Beginner-friendly Shotokan karate in Chingford. Calm, disciplined training for all ages. Start your free trial.",
    url: "https://www.ctskc.co.uk",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LocalBusinessJsonLd />
        <BookTrialProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyMobileCtaBar />
          <div className="h-[4.75rem] md:hidden" aria-hidden="true" />
        </BookTrialProvider>
      </body>
    </html>
  );
}
