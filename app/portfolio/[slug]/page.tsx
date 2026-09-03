import { notFound } from "next/navigation";
import { InfoPage } from "../../components/InfoPage";
import { getProjectPageMetadata } from "../../lib/page-metadata";
import { getProjectBySlug, projects } from "../../lib/projects";
import { getInitialLang, type PageWithLangProps } from "../../lib/server-language";
import { seoBaseUrl } from "../../lib/seo";
import HidyCaseStudy from "./HidyCaseStudy";
import IsologicCaseStudy from "./IsologicCaseStudy";
import UnderbpmCaseStudy from "./UnderbpmCaseStudy";
import CoinerHeroCaseStudy from "./CoinerHeroCaseStudy";
import JoolpayCaseStudy from "./JoolpayCaseStudy";

type ProjectPageProps = PageWithLangProps & {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params, searchParams }: ProjectPageProps) {
  const { slug } = await params;

  return getProjectPageMetadata(slug, searchParams);
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const [{ slug }, initialLang] = await Promise.all([
    params,
    getInitialLang(searchParams),
  ]);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary[initialLang],
    url: `${seoBaseUrl}/portfolio/${project.slug}`,
    image: project.modalImage ? `${seoBaseUrl}${project.modalImage.src}` : undefined,
    creator: {
      "@type": "Organization",
      name: "NotAgency",
      url: seoBaseUrl,
    },
    keywords: project.tags.join(", "),
  };
  const breadcrumbLabels = {
    en: { home: "Home", portfolio: "Portfolio" },
    ru: { home: "Главная", portfolio: "Портфолио" },
    lv: { home: "Sākums", portfolio: "Portfolio" },
  }[initialLang];
  const languageSuffix = initialLang === "en" ? "" : `?lang=${initialLang}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: breadcrumbLabels.home,
        item: `${seoBaseUrl}/${languageSuffix}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: breadcrumbLabels.portfolio,
        item: `${seoBaseUrl}/portfolio${languageSuffix}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${seoBaseUrl}/portfolio/${project.slug}${languageSuffix}`,
      },
    ],
  };
  const structuredData = [projectJsonLd, breadcrumbJsonLd];

  if (project.slug === "hidy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <HidyCaseStudy initialLang={initialLang} />
      </>
    );
  }

  if (project.slug === "underbpm") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <UnderbpmCaseStudy initialLang={initialLang} />
      </>
    );
  }

  if (project.slug === "isologic") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <IsologicCaseStudy initialLang={initialLang} />
      </>
    );
  }

  if (project.slug === "coiner-hero") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CoinerHeroCaseStudy initialLang={initialLang} />
      </>
    );
  }

  if (project.slug === "joolpay") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <JoolpayCaseStudy initialLang={initialLang} />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <InfoPage
        initialLang={initialLang}
        content={{
          en: {
            kicker: "Portfolio / Case study",
            title: `${project.name} case study`,
            text: project.summary.en,
            contextualLink: project.slug === "split-merge" ? {
              label: "Planning a mobile product?",
              action: "Mobile app development",
              href: "/mobile-app-development",
            } : undefined,
            sections: [
              { title: "Project type", body: project.type },
              { title: "What we did", body: project.details.en },
              { title: "Full story", body: project.modalDetails?.en ?? project.details.en },
              { title: "Tags", body: project.tags.join(", ") },
            ],
          },
          ru: {
            kicker: "Портфолио / Кейс",
            title: `${project.name}: кейс`,
            text: project.summary.ru,
            contextualLink: project.slug === "split-merge" ? {
              label: "Планируете мобильный продукт?",
              action: "Разработка мобильных приложений",
              href: "/mobile-app-development",
            } : undefined,
            sections: [
              { title: "Тип проекта", body: project.type },
              { title: "Что сделали", body: project.details.ru },
              { title: "История проекта", body: project.modalDetails?.ru ?? project.details.ru },
              { title: "Теги", body: project.tags.join(", ") },
            ],
          },
          lv: {
            kicker: "Portfolio / Case",
            title: `${project.name}: case`,
            text: project.summary.lv,
            contextualLink: project.slug === "split-merge" ? {
              label: "Plānojat mobilo produktu?",
              action: "Mobilo lietotņu izstrāde",
              href: "/mobile-app-development",
            } : undefined,
            sections: [
              { title: "Projekta tips", body: project.type },
              { title: "Ko izdarījām", body: project.details.lv },
              { title: "Pilns stāsts", body: project.modalDetails?.lv ?? project.details.lv },
              { title: "Tagi", body: project.tags.join(", ") },
            ],
          },
        }}
      />
    </>
  );
}
