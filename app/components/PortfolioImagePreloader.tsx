"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { projects } from "../lib/projects";
import { serviceImages } from "../lib/service-images";

const previewImages = Array.from(
  new Map(
    [...serviceImages, ...projects.flatMap((project) => project.modalImage ? [project.modalImage] : [])]
      .map((src) => [src.src, src]),
  ).values(),
);

const preloadDelayMs = 350;

export function PortfolioImagePreloader() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive(true);
    }, preloadDelayMs);

    return () => window.clearTimeout(timer);
  }, []);

  if (!active) {
    return null;
  }

  return (
    <div className="portfolio-image-preloader" aria-hidden="true">
      {previewImages.map((src) => (
        <Image
          alt=""
          key={src.src}
          loading="eager"
          fetchPriority="low"
          sizes="720px"
          src={src}
          unoptimized
        />
      ))}
    </div>
  );
}
