import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/archivo-black/400.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notagency.dev"),
  title: {
    default: "NotAgency - Websites, Apps and Digital Systems",
    template: "%s | NotAgency",
  },
  description:
    "NotAgency builds sharp websites, web apps, MVPs and digital systems for founders and businesses that are ready to launch properly.",
  applicationName: "NotAgency",
  keywords: [
    "NotAgency",
    "web agency Riga",
    "website design",
    "web app development",
    "Next.js agency",
    "MVP development",
    "digital studio Latvia",
  ],
  authors: [{ name: "NotAgency" }],
  creator: "NotAgency",
  publisher: "NotAgency",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/?lang=ru",
      lv: "/?lang=lv",
    },
  },
  openGraph: {
    title: "NotAgency - Websites, Apps and Digital Systems",
    description:
      "Sharp websites, web apps, MVPs and digital systems for serious projects with real ambition.",
    url: "/",
    siteName: "NotAgency",
    locale: "en_US",
    alternateLocale: ["ru_RU", "lv_LV"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotAgency - Websites, Apps and Digital Systems",
    description:
      "Sharp websites, web apps, MVPs and digital systems for serious projects with real ambition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NotAgency",
  url: "https://notagency.dev",
  email: "hello@notagency.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riga",
    addressCountry: "LV",
  },
  areaServed: ["Latvia", "Europe", "Remote"],
  knowsAbout: [
    "Website design",
    "Web application development",
    "MVP development",
    "Design systems",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
