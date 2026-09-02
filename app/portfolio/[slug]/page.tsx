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

  if (project.slug === "hidy") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
        <JoolpayCaseStudy initialLang={initialLang} />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <InfoPage
        initialLang={initialLang}
        content={{
          en: {
            kicker: "Portfolio / Case study",
            title: `${project.name} case study`,
            text: project.summary.en,
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
