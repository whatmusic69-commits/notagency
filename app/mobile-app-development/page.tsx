import { getPageMetadata } from "../lib/page-metadata";
import { mobileAppDevelopmentCopy } from "../lib/mobile-app-development";
import { getInitialLang, type PageWithLangProps } from "../lib/server-language";
import { seoBaseUrl } from "../lib/seo";
import MobileAppDevelopmentClient from "./MobileAppDevelopmentClient";

export function generateMetadata({ searchParams }: PageWithLangProps) {
  return getPageMetadata("mobileAppDevelopment", searchParams);
}

export default async function MobileAppDevelopmentPage({ searchParams }: PageWithLangProps) {
  const initialLang = await getInitialLang(searchParams);
  const copy = mobileAppDevelopmentCopy[initialLang];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.hero.label,
    description: copy.hero.description,
    provider: {
      "@type": "Organization",
      name: "NotAgency",
      url: seoBaseUrl,
    },
    areaServed: ["Latvia", "Europe", "Remote"],
    serviceType: "Mobile app development",
    url: `${seoBaseUrl}/mobile-app-development`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <MobileAppDevelopmentClient initialLang={initialLang} />
    </>
  );
}
