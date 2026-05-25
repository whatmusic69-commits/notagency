"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { projects } from "../lib/projects";

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
      {projects.map((project) =>
        project.modalImage ? (
          <Image
            alt=""
            key={project.name}
            loading="eager"
            sizes="720px"
            src={project.modalImage}
            unoptimized
          />
        ) : null,
      )}
    </div>
  );
}
