import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/archivo-black/400.css";
import { FloatingMascot } from "./components/FloatingMascot";
import { PortfolioImagePreloader } from "./components/PortfolioImagePreloader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notagency.io"),
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
    "сайты Рига",
    "разработка сайтов",
    "web izstrāde Rīga",
    "mājaslapu izstrāde",
  ],
  authors: [{ name: "NotAgency" }],
  creator: "NotAgency",
  publisher: "NotAgency",
  category: "Technology",
  classification: "Web design and application development studio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ru: "/?lang=ru",
      lv: "/?lang=lv",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "NotAgency - Websites, Apps and Digital Systems",
    description:
      "Sharp websites, web apps, MVPs and digital systems for serious projects with real ambition.",
    url: "/",
    siteName: "NotAgency",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NotAgency - Websites, Apps and Digital Systems",
      },
    ],
    locale: "en_US",
    alternateLocale: ["ru_RU", "lv_LV"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotAgency - Websites, Apps and Digital Systems",
    description:
      "Sharp websites, web apps, MVPs and digital systems for serious projects with real ambition.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "og:locale:alternate": ["ru_RU", "lv_LV"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NotAgency",
  alternateName: ["Not Agency", "NotAgency Riga"],
  url: "https://notagency.io",
  email: "hello@notagency.io",
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NotAgency",
  url: "https://notagency.io",
  inLanguage: ["en", "ru", "lv"],
  description:
    "Websites, web apps, MVPs and digital systems for founders and businesses in Latvia, Europe and remote.",
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
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        {children}
        <PortfolioImagePreloader />
        <FloatingMascot />
      </body>
    </html>
  );
}
