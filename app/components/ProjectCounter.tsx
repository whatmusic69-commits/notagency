"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

const confetti = Array.from({ length: 18 }, (_, index) => {
  const angle = (index / 18) * Math.PI * 2;
  const distance = 65 + (index % 4) * 18;
  return {
    "--burst-x": `${Math.cos(angle) * distance}px`,
    "--burst-y": `${Math.sin(angle) * distance - 25}px`,
    "--burst-rotation": `${(index % 2 ? 1 : -1) * (180 + index * 35)}deg`,
    background: ["var(--pink)", "var(--lime)", "var(--violet)", "var(--orange)", "var(--white)"][index % 5],
  } as CSSProperties;
});

export function ProjectCounter({ total }: { total: number }) {
  const elementRef = useRef<HTMLElement>(null);
  const [count, setCount] = useState(total);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || reducedMotion.matches || !("IntersectionObserver" in window)) {
      setCount(total);
      return;
    }

    let frame = 0;
    setCelebrating(false);
    setCount(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const startedAt = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / 1400, 1);
        setCount(Math.floor(progress * total));
        if (progress < 1) frame = requestAnimationFrame(animate);
        else setCelebrating(true);
      };
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.5 });

    const finishForReducedMotion = () => {
      if (!reducedMotion.matches) return;
      observer.disconnect();
      cancelAnimationFrame(frame);
      setCount(total);
      setCelebrating(false);
    };

    observer.observe(element);
    reducedMotion.addEventListener("change", finishForReducedMotion);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", finishForReducedMotion);
    };
  }, [total]);

  return (
    <strong className={`project-counter${celebrating ? " project-counter-celebrate" : ""}`} ref={elementRef} aria-label={String(total)}>
      <span className="project-counter-value" aria-hidden="true">{count}</span>
      {celebrating ? (
        <span className="project-counter-confetti" aria-hidden="true">
          {confetti.map((style, index) => <i key={index} style={style} />)}
        </span>
      ) : null}
    </strong>
  );
}
